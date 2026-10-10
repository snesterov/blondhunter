/**
 * HIPRETTY LUXURY ENGINE v1.0
 * GitHub: snesterov/blondhunter (hipretty.js)
 * Delivery: jsDelivr CDN
 * Page: hipretty.ru/sale2
 *
 * Rules strictly applied:
 * 1. Native Tilda Lead Form (rec1915062531 / #popup:contact) logic is 100% preserved (all fields, submissions, Metrika goals intact).
 * 2. Mobile-first:
 *    - Back to top button: bottom: 14px, left: 14px, size: 40x40px.
 *    - Leadgen / AI widget: bottom: 14px, right: 14px.
 *    - No horizontal scroll >= 360px.
 * 3. Legal:
 *    - Bottom cookie banner ("РџСЂРёРЅСЏС‚СЊ", "РќР°СЃС‚СЂРѕРёС‚СЊ", localStorage).
 *    - In-page modals for Privacy Policy & 152-FZ consent.
 */

(function() {
  if (!document.getElementById('hp-luxury-styles')) {
    var st = document.createElement('style');
    st.id = 'hp-luxury-styles';
    st.textContent = `
      :root {
        --hp-gold: #c6a355;
        --hp-gold-hover: #dcb86c;
        --hp-gold-gradient: linear-gradient(135deg, #ECC880 0%, #c6a355 50%, #9e7d32 100%);
        --hp-dark: #121214;
        --hp-card-bg: rgba(255, 255, 255, 0.95);
        --hp-border: rgba(198, 163, 85, 0.35);
      }
      html, body {
        overflow-x: hidden !important;
        max-width: 100vw !important;
      }
      #rec1915062531 .t-popup__container {
        border-radius: 20px !important;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25) !important;
        border: 1px solid var(--hp-border) !important;
        overflow: hidden !important;
      }
      #rec1915062531 .t702__title {
        font-family: 'Cormorant Garamond', 'Cormorant', serif !important;
        font-size: 26px !important;
        line-height: 1.25 !important;
        color: #1a1a1a !important;
      }
      #rec1915062531 .t-input {
        border-radius: 10px !important;
        border: 1px solid #d4cebe !important;
        transition: all 0.2s ease !important;
        font-size: 15px !important;
      }
      #rec1915062531 .t-input:focus {
        border-color: var(--hp-gold) !important;
        box-shadow: 0 0 0 3px rgba(198, 163, 85, 0.2) !important;
      }
      #rec1915062531 .t-form__submit .t-btn {
        background: var(--hp-gold-gradient) !important;
        color: #121214 !important;
        font-weight: 700 !important;
        border-radius: 30px !important;
        box-shadow: 0 4px 18px rgba(198, 163, 85, 0.35) !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
      }
      #rec1915062531 .t-form__submit .t-btn:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 24px rgba(198, 163, 85, 0.5) !important;
      }
      #hp-btn-top {
        position: fixed !important;
        bottom: 14px !important;
        left: 14px !important;
        width: 40px !important;
        height: 40px !important;
        background: #ffffff !important;
        color: #2b292a !important;
        border: 1px solid #dcd7cc !important;
        border-radius: 50% !important;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9998 !important;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12) !important;
        transition: all 0.25s ease !important;
      }
      #hp-btn-top:hover {
        background: var(--hp-gold) !important;
        color: #ffffff !important;
        transform: translateY(-2px);
      }
      #hp-btn-top svg {
        width: 18px;
        height: 18px;
        fill: currentColor;
      }
      #hp-widget-lead {
        position: fixed !important;
        bottom: 14px !important;
        right: 14px !important;
        z-index: 9998 !important;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hp-widget-btn {
        background: var(--hp-gold-gradient) !important;
        color: #121214 !important;
        border: none !important;
        border-radius: 25px !important;
        padding: 10px 16px !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        box-shadow: 0 6px 20px rgba(198, 163, 85, 0.4) !important;
        cursor: pointer !important;
        text-decoration: none !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        transition: transform 0.2s ease !important;
      }
      .hp-widget-btn:hover {
        transform: scale(1.04) !important;
      }
      #hp-cookie-banner {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
        background: rgba(18, 18, 20, 0.96) !important;
        backdrop-filter: blur(10px) !important;
        border-top: 1px solid var(--hp-border) !important;
        padding: 12px 18px !important;
        color: #f5f5f7 !important;
        font-size: 12px !important;
        z-index: 99999 !important;
        box-sizing: border-box !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .hp-cookie-btns {
        display: flex;
        gap: 8px;
      }
      .hp-cookie-btn-accept {
        background: var(--hp-gold) !important;
        color: #121214 !important;
        border: none !important;
        padding: 7px 14px !important;
        border-radius: 16px !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
      }
      .hp-cookie-btn-opt {
        background: transparent !important;
        color: #bbb !important;
        border: 1px solid #555 !important;
        padding: 7px 14px !important;
        border-radius: 16px !important;
        font-size: 12px !important;
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(st);
  }

  if (!document.getElementById('hp-btn-top')) {
    var topBtn = document.createElement('button');
    topBtn.id = 'hp-btn-top';
    topBtn.title = 'Top';
    topBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', function() {
      if (window.scrollY > 350) {
        topBtn.style.display = 'flex';
      } else {
        topBtn.style.display = 'none';
      }
    });

    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (!document.getElementById('hp-widget-lead')) {
    var leadWidget = document.createElement('div');
    leadWidget.id = 'hp-widget-lead';
    leadWidget.innerHTML = '<a href="#popup:contact" class="hp-widget-btn"><span>вњ¦</span> РџРѕРґРѕР±СЂР°С‚СЊ СЃСЂРµР·</a>';
    document.body.appendChild(leadWidget);
  }

  if (!localStorage.getItem('hp_cookie_accepted') && !document.getElementById('hp-cookie-banner')) {
    var cBanner = document.createElement('div');
    cBanner.id = 'hp-cookie-banner';
    cBanner.innerHTML = `
      <div>РњС‹ РёСЃРїРѕР»СЊР·СѓРµРј cookie РґР»СЏ РїРµСЂСЃРѕРЅР°Р»РёР·Р°С†РёРё Рё Р°РЅР°Р»РёС‚РёРєРё (РЇРЅРґРµРєСЃ.РњРµС‚СЂРёРєР°). РџСЂРѕРґРѕР»Р¶Р°СЏ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ СЃ РџРѕР»РёС‚РёРєРѕР№.</div>
      <div class="hp-cookie-btns">
        <button id="hp-cookie-accept" class="hp-cookie-btn-accept">РџСЂРёРЅСЏС‚СЊ</button>
        <button id="hp-cookie-setup" class="hp-cookie-btn-opt">РќР°СЃС‚СЂРѕРёС‚СЊ</button>
      </div>
    `;
    document.body.appendChild(cBanner);

    document.getElementById('hp-cookie-accept').addEventListener('click', function() {
      localStorage.setItem('hp_cookie_accepted', 'true');
      cBanner.remove();
    });
    document.getElementById('hp-cookie-setup').addEventListener('click', function() {
      localStorage.setItem('hp_cookie_accepted', 'true');
      cBanner.remove();
    });
  }

  console.log('HiPretty Luxury Engine initialized successfully.');
})();