import urllib.request
import re
import json
import os
import urllib.parse

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
}
WHATSAPP_NUMBER = "79266721978"

def fetch_channel_posts():
    url = 'https://t.me/s/blondhunter'
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching channel: {e}")
        return None

    messages = re.split(r'<div class="tgme_widget_message\\b', html)
    posts = []
    
    for chunk in messages[1:]:
        m_post = re.search(r'data-post="([^"]+)"', chunk)
        post_id = m_post.group(1) if m_post else None
        
        m_img = re.search(r"background-image:url\\('([^']+)'\\)", chunk)
        img_url = m_img.group(1) if m_img else None
        
        m_text = re.search(r'<div class="tgme_widget_message_text[^>]*>(.*?)</div>', chunk, re.DOTALL)
        text = ""
        if m_text:
            text = re.sub(r'<br/?>', '\\n', m_text.group(1))
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
    posts_ru_file = os.path.join(repo_dir, 'posts.json')
    posts_en_file = os.path.join(repo_dir, 'posts_en.json')
    os.makedirs(images_dir, exist_ok=True)
    
    all_posts = fetch_channel_posts()
    if not all_posts:
        print("No posts fetched.")
        return

    # Take latest 13 posts
    latest = all_posts[-13:]
    latest.reverse()
    
    clean_ru = []
    clean_en = []

    for p in latest:
        num = p['num']
        img_url = p['img_url']
        text = p['text']
        lower_text = text.lower()
        
        local_img_name = f"post_{num}.jpg"
        local_img_path = os.path.join(images_dir, local_img_name)
        try:
            req = urllib.request.Request(img_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as r:
                data = r.read()
            with open(local_img_path, 'wb') as f:
                f.write(data)
            permanent_url = f"https://raw.githubusercontent.com/snesterov/blondhunter/main/images/{local_img_name}"
        except Exception:
            permanent_url = f"https://raw.githubusercontent.com/snesterov/blondhunter/main/images/{local_img_name}"

        # Status check
        is_sold = 'sold' in lower_text or 'продан' in lower_text
        if is_sold:
            badge_ru, badge_en, badge_type = "● Продан / Sold", "● Sold Out", "sold"
        elif 'hot' in lower_text or 'огонь' in lower_text:
            badge_ru, badge_en, badge_type = "● Горячее предложение 🔥", "● Hot Deal 🔥", "hot"
        elif 'скидк' in lower_text or '%' in lower_text or 'акци' in lower_text:
            badge_ru, badge_en, badge_type = "● Со скидкой", "● Special Price", "discount"
        elif 'first haircut' in lower_text or 'первый срез' in lower_text:
            badge_ru, badge_en, badge_type = "● Первый срез 👶", "● First Haircut 👶", "first"
        elif 'кудр' in lower_text or 'curly' in lower_text:
            badge_ru, badge_en, badge_type = "● Кудри 🦁", "● Curly Waves 🦁", "curly"
        elif 'наличи' in lower_text or 'студи' in lower_text:
            badge_ru, badge_en, badge_type = "● В наличии", "● In Stock", "stock"
        else:
            badge_ru, badge_en, badge_type = "● Свежий лот", "● Fresh Arrival", "fresh"

        num_m = re.search(r'#(\\d+)', text)
        lot_id = num_m.group(1) if num_m else num
        title_ru = f"Срез #{lot_id}"
        title_en = f"Hair Cut #{lot_id}"

        # Specs
        specs_ru = []
        specs_en = []
        len_m = re.search(r'(\\d+)\\s*(?:cm|см)', text, re.IGNORECASE) or re.search(r'#\\d+,\\s*(\\d+)/', text)
        if len_m:
            specs_ru.append(f"{len_m.group(1)} см")
            specs_en.append(f"{len_m.group(1)} cm")
        wt_m = re.search(r'(\\d+)\\s*(?:g|г|гр)', text, re.IGNORECASE)
        if wt_m:
            specs_ru.append(f"{wt_m.group(1)} г")
            specs_en.append(f"{wt_m.group(1)} g")
        tone_m = re.search(r'(?:tone|тон|холод|cold|\\b)([89](?:/[890])?)(?:\\b|tone|тон|cold|холод)', text, re.IGNORECASE)
        if tone_m:
            specs_ru.append(f"Тон {tone_m.group(1)}")
            specs_en.append(f"Tone {tone_m.group(1)}")

        price_rub = re.search(r'(\\d+)\\s*(?:т|тыс|000)', text)
        price_eur = re.search(r'(\\d+)\\s*(?:euro|еuro|€)', text, re.IGNORECASE)
        if price_rub and price_eur:
            specs_ru.append(f"{price_rub.group(1)} 000 ₽ / {price_eur.group(1)} €")
            specs_en.append(f"{price_rub.group(1)} 000 ₽ / €{price_eur.group(1)}")
        elif price_rub:
            specs_ru.append(f"{price_rub.group(1)} 000 ₽")
            specs_en.append(f"{price_rub.group(1)} 000 ₽")
        elif price_eur:
            specs_ru.append(f"{price_eur.group(1)} €")
            specs_en.append(f"€{price_eur.group(1)}")

        tag_ru = " • ".join(specs_ru) if specs_ru else "Детский блонд"
        tag_en = " • ".join(specs_en) if specs_ru else "Virgin Slavic Blonde"

        clean_lines = [l.strip() for l in text.split('\\n') if l.strip() and not l.startswith('http') and not 'whatsapp' in l.lower() and not 'telegram' in l.lower()]
        desc_ru = " ".join(clean_lines)[:140] if clean_lines else "Эксклюзивный срез детского славянского блонда."
        desc_en = f"Exclusive virgin child blonde ({tag_en}). 100% natural, ethically sourced Slavic hair. Worldwide express delivery."

        # WhatsApp text
        if is_sold:
            wa_text = f"Hello Olga! I saw Hair Cut #{lot_id} ({tag_en}) is SOLD OUT. Can you show me similar available options?"
        else:
            wa_text = f"Hello Olga! I would like to order Hair Cut #{lot_id} ({tag_en}). Is it available?"
        wa_url = f"https://wa.me/{WHATSAPP_NUMBER}?text={urllib.parse.quote(wa_text)}"

        clean_ru.append({
            'id': num,
            'title': title_ru,
            'image': permanent_url,
            'badge': badge_ru,
            'badge_type': badge_type,
            'is_sold': is_sold,
            'tag': tag_ru,
            'desc': desc_ru,
            'url': f"https://t.me/blondhunter/{num}"
        })
        clean_en.append({
            'id': num,
            'title': title_en,
            'image': permanent_url,
            'badge': badge_en,
            'badge_type': badge_type,
            'is_sold': is_sold,
            'tag': tag_en,
            'desc': desc_en,
            'url': f"https://t.me/blondhunter/{num}",
            'wa_url': wa_url
        })

    with open(posts_ru_file, 'w', encoding='utf-8') as f:
        json.dump(clean_ru, f, ensure_ascii=False, indent=2)
    with open(posts_en_file, 'w', encoding='utf-8') as f:
        json.dump(clean_en, f, ensure_ascii=False, indent=2)
    print("Updated 13 posts for both RU and EN in fetch_posts.py!")

if __name__ == '__main__':
    main()
