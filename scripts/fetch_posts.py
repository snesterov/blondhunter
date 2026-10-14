import urllib.request
import re
import json
import os
import urllib.parse

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
}
WHATSAPP_NUMBER = "79266721978"
OWNER = "snesterov"
REPO = "blondhunter"

def fetch_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def get_channel_lots():
    html1 = fetch_url('https://t.me/s/blondhunter')
    m_first = re.search(r'data-post="blondhunter/(\d+)"', html1)
    first_id = m_first.group(1) if m_first else '4560'
    html2 = fetch_url(f'https://t.me/s/blondhunter?before={first_id}')

    combined = html2 + '\n' + html1
    chunks = re.split(r'<div class="tgme_widget_message\b', combined)

    raw = []
    seen_ids = set()
    for c in chunks:
        m_p = re.search(r'data-post="blondhunter/(\d+)"', c)
        m_img = re.search(r"background-image:url\('([^']+)'\)", c)
        if not m_p or not m_img:
            continue
        pid = m_p.group(1)
        if pid in seen_ids:
            continue
        seen_ids.add(pid)
        img = m_img.group(1)
        if 'emoji' in img or ('telesco.pe' not in img and 'cdn' not in img):
            continue
        m_t = re.search(r'<div class="tgme_widget_message_text[^>]*>(.*?)</div>', c, re.DOTALL)
        t = ""
        if m_t:
            t = re.sub(r'<br/?>', '\n', m_t.group(1))
            t = re.sub(r'<[^>]+>', '', t).strip()
        raw.append({'id': pid, 'img': img, 'text': t})

    # Share specs among same lot
    for i, p in enumerate(raw):
        num_m = re.search(r'#(\d+)', p['text'])
        if num_m:
            lot = num_m.group(0)
            has_specs = bool(re.search(r'\d+\s*(?:cm|см|g|г|euro|€|т|тыс)', p['text'], re.IGNORECASE))
            if not has_specs:
                for j in range(max(0, i-4), min(len(raw), i+5)):
                    if j != i and lot in raw[j]['text']:
                        if re.search(r'\d+\s*(?:cm|см|g|г|euro|€|т|тыс)', raw[j]['text'], re.IGNORECASE):
                            p['text'] = raw[j]['text']
                            break

    # Reverse to get newest first, unique lots
    raw_rev = list(reversed(raw))
    seen_lots = set()
    unique_lots = []

    for p in raw_rev:
        if 'девочки внимание' in p['text'].lower() and 'хвостиков из прошлой' in p['text'].lower():
            continue
        num_m = re.search(r'#(\d+)', p['text'])
        lot_key = num_m.group(1) if num_m else f"post_{p['id']}"
        if lot_key not in seen_lots:
            seen_lots.add(lot_key)
            unique_lots.append(p)
            if len(unique_lots) >= 12:
                break

    return unique_lots

def main():
    repo_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    images_dir = os.path.join(repo_dir, 'images')
    posts_ru_file = os.path.join(repo_dir, 'posts.json')
    posts_en_file = os.path.join(repo_dir, 'posts_en.json')
    os.makedirs(images_dir, exist_ok=True)

    lots = get_channel_lots()
    if not lots:
        print("No valid lots parsed.")
        return

    clean_ru = []
    clean_en = []

    for p in lots:
        num = p['id']
        img_url = p['img']
        text = p['text']
        lower_text = text.lower()

        # Download image locally into repo images/
        local_img_name = f"post_{num}.jpg"
        local_img_path = os.path.join(images_dir, local_img_name)
        try:
            req_img = urllib.request.Request(img_url, headers=HEADERS)
            with urllib.request.urlopen(req_img, timeout=15) as r:
                data = r.read()
            with open(local_img_path, 'wb') as f:
                f.write(data)
        except Exception as e:
            print(f"Image download error for post {num}: {e}")

        permanent_url = f"https://raw.githubusercontent.com/{OWNER}/{REPO}/main/images/{local_img_name}"

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

        num_m = re.search(r'#(\d+)', text)
        lot_id = num_m.group(1) if num_m else num
        title_ru = f"Срез #{lot_id}"
        title_en = f"Hair Cut #{lot_id}"

        # Specs
        specs_ru = []
        specs_en = []
        len_m = re.search(r'(\d+)\s*(?:cm|см)', text, re.IGNORECASE) or re.search(r'#\d+,\s*(\d+)/', text) or re.search(r'#\d+\s*\n\s*(\d+)/', text)
        if len_m:
            specs_ru.append(f"{len_m.group(1)} см")
            specs_en.append(f"{len_m.group(1)} cm")
        wt_m = re.search(r'(\d+)\s*(?:g|г|гр)', text, re.IGNORECASE) or re.search(r'/(\d+)\s*(?:g|г|гр)', text, re.IGNORECASE) or re.search(r'#\d+,\s*\d+/(\d+)', text) or re.search(r'#\d+\s*\n\s*\d+/(\d+)', text)
        if wt_m:
            specs_ru.append(f"{wt_m.group(1)} г")
            specs_en.append(f"{wt_m.group(1)} g")
        tone_m = re.search(r'(?:tone|тон|холод|cold|\b)([89](?:/[890])?)(?:\b|tone|тон|cold|холод)', text, re.IGNORECASE)
        if tone_m:
            specs_ru.append(f"Тон {tone_m.group(1)}")
            specs_en.append(f"Tone {tone_m.group(1)}")

        price_rub = re.search(r'(\d+)\s*(?:т|тыс|000)', text)
        price_eur = re.search(r'(\d+)\s*(?:euro|еuro|€)', text, re.IGNORECASE)
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
        tag_en = " • ".join(specs_en) if specs_en else "Virgin Slavic Blonde"

        clean_lines = [l.strip() for l in text.split('\n') if l.strip() and not l.startswith('http') and not 'whatsapp' in l.lower() and not 'telegram' in l.lower()]
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
    print(f"Successfully synced {len(clean_ru)} lots! Top lot is {clean_ru[0]['title']}")

if __name__ == '__main__':
    main()
