import urllib.request
import re
import json
import os

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
}

def fetch_channel_posts():
    url = 'https://t.me/s/blondhunter'
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching channel: {e}")
        return None

    messages = re.split(r'<div class="tgme_widget_message\b', html)
    posts = []
    
    for chunk in messages[1:]:
        m_post = re.search(r'data-post="([^"]+)"', chunk)
        post_id = m_post.group(1) if m_post else None
        
        m_img = re.search(r"background-image:url\('([^']+)'\)", chunk)
        img_url = m_img.group(1) if m_img else None
        
        m_text = re.search(r'<div class="tgme_widget_message_text[^>]*>(.*?)</div>', chunk, re.DOTALL)
        text = ""
        if m_text:
            text = re.sub(r'<br/?>', '\n', m_text.group(1))
            text = re.sub(r'<[^>]+>', '', text).strip()
            
        m_date = re.search(r'<time[^>]*datetime="([^"]+)"[^>]*>([^<]+)</time>', chunk)
        date_str = m_date.group(2) if m_date else ""
        
        if img_url and post_id:
            num = post_id.split('/')[-1]
            posts.append({
                'num': num,
                'post_full': post_id,
                'img_url': img_url,
                'text': text,
                'date': date_str
            })

    return posts

def main():
    repo_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    images_dir = os.path.join(repo_dir, 'images')
    posts_file = os.path.join(repo_dir, 'posts.json')
    os.makedirs(images_dir, exist_ok=True)
    
    all_posts = fetch_channel_posts()
    if not all_posts:
        print("No posts fetched.")
        return

    # Take latest 3 posts
    latest = all_posts[-3:]
    latest.reverse()
    
    clean_posts = []
    for p in latest:
        num = p['num']
        img_url = p['img_url']
        text = p['text']
        
        # Download image locally
        local_img_name = f"post_{num}.jpg"
        local_img_path = os.path.join(images_dir, local_img_name)
        
        # Download if not exists or small
        try:
            req = urllib.request.Request(img_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as r:
                data = r.read()
            with open(local_img_path, 'wb') as f:
                f.write(data)
            print(f"Downloaded {local_img_name} ({len(data)} bytes)")
            permanent_url = f"https://raw.githubusercontent.com/snesterov/blondhunter/main/images/{local_img_name}"
        except Exception as e:
            print(f"Failed to download image for {num}: {e}")
            permanent_url = f"https://raw.githubusercontent.com/snesterov/blondhunter/main/images/{local_img_name}"

        # Extract tags & parameters
        badge = "● Свежий лот"
        lower_text = text.lower()
        if 'скидк' in lower_text or '%' in lower_text or 'акци' in lower_text:
            badge = "● Со скидкой"
        elif 'first haircut' in lower_text or 'первый срез' in lower_text:
            badge = "● Первый срез 👶"
        elif 'кудр' in lower_text or 'curly' in lower_text:
            badge = "● Кудри 🦁"
        elif 'sold' in lower_text or 'продан' in lower_text:
            badge = "● Продан"
        elif 'наличи' in lower_text or 'студи' in lower_text:
            badge = "● В наличии"

        num_m = re.search(r'#(\d+)', text)
        lot_name = f"Срез #{num_m.group(1)}" if num_m else "Партия срезов"

        params = []
        len_m = re.search(r'(\d+)\s*(?:cm|см)', text, re.IGNORECASE)
        if len_m:
            params.append(f"{len_m.group(1)} см")
        wt_m = re.search(r'(\d+)\s*(?:g|г|гр)', text, re.IGNORECASE)
        if wt_m:
            params.append(f"{wt_m.group(1)} г")
        tone_m = re.search(r'(?:tone|тон|холод|cold)\s*(\d+/\d+|\d+)', text, re.IGNORECASE)
        if tone_m:
            params.append(f"Тон {tone_m.group(1)}")
        
        param_tag = " • ".join(params) if params else "Детский блонд"

        first_lines = [l.strip() for l in text.split('\n') if l.strip()]
        desc = " ".join(first_lines[:3])[:140]

        clean_posts.append({
            'id': num,
            'post_full': p['post_full'],
            'url': f"https://t.me/blondhunter/{num}",
            'image': permanent_url,
            'badge': badge,
            'title': lot_name,
            'tag': param_tag,
            'desc': desc
        })

    with open(posts_file, 'w', encoding='utf-8') as f:
        json.dump(clean_posts, f, ensure_ascii=False, indent=2)
    print("posts.json successfully updated with permanent images.")

if __name__ == '__main__':
    main()
