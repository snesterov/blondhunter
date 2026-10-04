import urllib.request
import re
import json
import os

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
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
        
        # We need posts with images and hair descriptions
        if img_url and ('#' in text or 'cm' in text or 'см' in text or 'срез' in text.lower() or 'лот' in text.lower() or 'g' in text or 'г' in text or 'euro' in text):
            # Extract number, length, weight
            num_match = re.search(r'#(\d+)', text)
            lot_num = num_match.group(1) if num_match else "Лот"
            
            # Extract length / weight
            tag_parts = []
            len_m = re.search(r'(\d+)\s*(?:cm|см)', text, re.IGNORECASE)
            if len_m:
                tag_parts.append(f"{len_m.group(1)} см")
            wt_m = re.search(r'(\d+)\s*(?:g|г)', text, re.IGNORECASE)
            if wt_m:
                tag_parts.append(f"{wt_m.group(1)} г")
                
            tag = " • ".join(tag_parts) if tag_parts else "Детский блонд"
            
            # Short clean desc (up to 160 chars)
            first_lines = [l.strip() for l in text.split('\n') if l.strip()]
            desc = " ".join(first_lines[:3])[:160]
            
            posts.append({
                'id': post_id.split('/')[-1] if post_id else '',
                'post_full': post_id or '',
                'url': f'https://t.me/{post_id}' if post_id else 'https://t.me/blondhunter',
                'image': img_url,
                'title': f'Срез #{lot_num}',
                'tag': tag,
                'desc': desc,
                'date': date_str
            })

    return posts

def main():
    repo_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    posts_file = os.path.join(repo_dir, 'posts.json')
    
    posts = fetch_channel_posts()
    if posts and len(posts) >= 3:
        # Take the latest 3-4 posts
        latest_posts = posts[-3:]
        latest_posts.reverse() # newest first
        with open(posts_file, 'w', encoding='utf-8') as f:
            json.dump(latest_posts, f, ensure_ascii=False, indent=2)
        print(f"Saved {len(latest_posts)} posts to posts.json")
    else:
        print("Using existing posts or not enough posts found.")

if __name__ == '__main__':
    main()
