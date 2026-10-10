(function() {
  if (!document.getElementById('hp-fonts')) {
    var f = document.createElement('link');
    f.id = 'hp-fonts';
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Montserrat:wght@400;500;600;700&display=swap';
    document.head.appendChild(f);
  }

  if (!document.getElementById('hp-styles')) {
    var s = document.createElement('style');
    s.id = 'hp-styles';
    s.textContent = `
      /* Скрываем все дублирующиеся и дефолтные блоки Тильды, кроме popup контактной формы rec1915062531 и загрузчика rec4673156001 */
      #allrecords > .r:not(#rec4673156001):not(#rec1915062531),
      #allrecords > div.r:not(#rec4673156001):not(#rec1915062531),
      #t-footer, .t972, #rec1930057121 {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        height: 0 !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      /* При показе нативного попапа #popup:contact делаем его видимым */
      #rec1915062531.t-popup_show,
      #rec1915062531 .t-popup_show {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
        height: auto !important;
      }

      :root {
        --hp-rose: #f472b6;
        --hp-rose-dark: #db2777;
        --hp-pink-grad: linear-gradient(135deg, #fbcfe8 0%, #f472b6 50%, #db2777 100%);
        --hp-gold: #c6a355;
        --hp-gold-grad: linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%);
        --hp-bg-noir: #0a090d;
        --hp-card: rgba(22, 19, 29, 0.78);
        --hp-card-hover: rgba(30, 25, 40, 0.95);
        --hp-surface: #191622;
        --hp-text: #f9f8fc;
        --hp-text-muted: #a69fb0;
        --hp-border: rgba(244, 114, 182, 0.28);
        --hp-border-subtle: rgba(255, 255, 255, 0.08);
        --hp-glow: 0 0 30px rgba(244, 114, 182, 0.25);
      }

      * { box-sizing: border-box !important; }

      html, body {
        margin: 0 !important; padding: 0 !important;
        background-color: var(--hp-bg-noir) !important;
        color: var(--hp-text) !important;
        font-family: 'Montserrat', sans-serif !important;
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        -webkit-font-smoothing: antialiased;
      }

      #hp-app {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        background: radial-gradient(circle at 50% -10%, #2a1122 0%, #0d0b12 45%, #070609 100%);
        position: relative;
        z-index: 10;
      }

      .hp-container {
        width: 100%;
        max-width: 1220px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* HEADER */
      .hp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid var(--hp-border-subtle);
        position: sticky;
        top: 0;
        background: rgba(10, 9, 13, 0.88);
        backdrop-filter: blur(14px);
        z-index: 100;
      }
      .hp-logo-wrap { text-decoration: none; display: flex; flex-direction: column; }
      .hp-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 1;
        background: linear-gradient(135deg, #ffffff 0%, #fbcfe8 50%, #f472b6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: lowercase;
      }
      .hp-logo-sub {
        font-size: 10.5px;
        color: var(--hp-rose);
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-top: 5px;
        font-weight: 600;
      }
      .hp-header-actions { display: flex; align-items: center; gap: 16px; }
      .hp-header-phone {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: color 0.2s ease;
      }
      .hp-header-phone:hover { color: var(--hp-rose); }
      .hp-btn-header-cta {
        background: var(--hp-pink-grad);
        color: #1a0815 !important;
        font-weight: 700;
        font-size: 13px;
        padding: 11px 22px;
        border-radius: 25px;
        text-decoration: none;
        box-shadow: 0 4px 18px rgba(244, 114, 182, 0.4);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-btn-header-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 24px rgba(244, 114, 182, 0.6);
      }

      /* HERO SECTION */
      .hp-hero { padding: 48px 0 70px; }
      .hp-hero-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 44px;
        align-items: center;
      }
      .hp-badge-live {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        background: rgba(244, 114, 182, 0.12);
        border: 1px solid var(--hp-border);
        color: #fce7f3;
        padding: 7px 16px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        margin-bottom: 22px;
      }
      .hp-badge-live span {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #10B981;
        display: inline-block;
        box-shadow: 0 0 10px #10B981;
      }
      .hp-hero-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(34px, 4.4vw, 56px);
        font-weight: 700;
        line-height: 1.12;
        margin: 0 0 20px;
        color: #ffffff;
      }
      .hp-hero-title span {
        background: var(--hp-pink-grad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-hero-desc {
        font-size: 16px;
        line-height: 1.65;
        color: var(--hp-text-muted);
        margin: 0 0 32px;
      }
      .hp-hero-cta-box {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-bottom: 38px;
      }
      .hp-btn-main {
        background: var(--hp-pink-grad);
        color: #1a0815 !important;
        font-size: 15px;
        font-weight: 700;
        padding: 16px 30px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 6px 25px rgba(244, 114, 182, 0.45);
        display: inline-flex;
        align-items: center;
        gap: 9px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-btn-main:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(244, 114, 182, 0.65);
      }
      .hp-btn-max {
        background: rgba(33, 150, 243, 0.14);
        border: 1px solid rgba(33, 150, 243, 0.45);
        color: #90CAF9 !important;
        font-size: 14px;
        font-weight: 600;
        padding: 16px 24px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
      }
      .hp-btn-max:hover {
        background: rgba(33, 150, 243, 0.25);
        border-color: #2196F3;
      }
      .hp-btn-wa-soft {
        background: rgba(37, 211, 102, 0.09);
        border: 1px solid rgba(37, 211, 102, 0.35);
        color: #69F0AE !important;
        font-size: 13.5px;
        font-weight: 600;
        padding: 16px 20px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: all 0.2s ease;
      }
      .hp-btn-wa-soft:hover {
        background: rgba(37, 211, 102, 0.2);
        border-color: #25D366;
      }

      .hp-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        padding-top: 26px;
        border-top: 1px solid var(--hp-border-subtle);
      }
      .hp-stat-val {
        font-family: 'Cormorant Garamond', serif;
        font-size: 36px;
        font-weight: 700;
        color: #fbcfe8;
        line-height: 1;
      }
      .hp-stat-lbl {
        font-size: 12px;
        color: var(--hp-text-muted);
        margin-top: 6px;
      }

      /* HERO MEDIA COLLAGE (Модели + Студийный склад) */
      .hp-hero-collage {
        position: relative;
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 14px;
      }
      .hp-hero-card-main {
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid var(--hp-border);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        background: #181520;
        height: 520px;
      }
      .hp-hero-card-main img {
        width: 100%; height: 100%; object-fit: cover; display: block;
      }
      .hp-hero-side-cards {
        display: flex;
        flex-direction: column;
        gap: 14px;
        height: 520px;
      }
      .hp-hero-card-sub {
        position: relative;
        border-radius: 18px;
        overflow: hidden;
        border: 1px solid var(--hp-border);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        background: #181520;
        flex: 1;
      }
      .hp-hero-card-sub img {
        width: 100%; height: 100%; object-fit: cover; display: block;
      }
      .hp-media-badge {
        position: absolute;
        bottom: 12px; left: 12px; right: 12px;
        background: rgba(12, 10, 16, 0.88);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(244, 114, 182, 0.3);
        border-radius: 14px;
        padding: 9px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .hp-media-badge-txt { font-size: 11.5px; font-weight: 600; color: #fff; }
      .hp-media-badge-tag { font-size: 10.5px; color: var(--hp-rose); font-weight: 700; }

      /* LEAD GENERATION SECTION (Контролируемый блок захвата) */
      .hp-lead-section {
        padding: 68px 0;
        background: rgba(22, 19, 29, 0.85);
        border-top: 1px solid var(--hp-border-subtle);
        border-bottom: 1px solid var(--hp-border-subtle);
        position: relative;
      }
      .hp-lead-section::before {
        content: '';
        position: absolute;
        top: 0; left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, var(--hp-rose) 50%, transparent 100%);
      }
      .hp-lead-box {
        max-width: 720px;
        margin: 0 auto;
        background: var(--hp-card);
        backdrop-filter: blur(16px);
        border: 1px solid var(--hp-border);
        border-radius: 28px;
        padding: 42px 36px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), var(--hp-glow);
        text-align: center;
      }
      .hp-lead-badge {
        display: inline-block;
        background: rgba(244, 114, 182, 0.15);
        border: 1px solid var(--hp-rose);
        color: #fbcfe8;
        padding: 5px 14px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      .hp-lead-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(28px, 3.5vw, 40px);
        font-weight: 700;
        color: #ffffff;
        margin: 0 0 12px;
        line-height: 1.2;
      }
      .hp-lead-subtitle {
        font-size: 14.5px;
        color: var(--hp-text-muted);
        margin: 0 0 28px;
        line-height: 1.6;
      }
      .hp-lead-sub-accent { color: #fbcfe8; font-weight: 600; }

      /* МЕТОДЫ СВЯЗИ */
      .hp-method-label {
        font-size: 13px;
        font-weight: 600;
        color: #fce7f3;
        margin-bottom: 12px;
        text-align: left;
      }
      .hp-method-selector {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-bottom: 22px;
      }
      .hp-method-btn {
        background: var(--hp-surface);
        border: 1px solid var(--hp-border-subtle);
        color: var(--hp-text-muted);
        padding: 13px 8px;
        border-radius: 14px;
        font-size: 12.5px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: all 0.2s ease;
      }
      .hp-method-btn:hover { border-color: rgba(244, 114, 182, 0.4); color: #fff; }
      .hp-method-btn.active.max {
        border-color: #2196F3;
        background: rgba(33, 150, 243, 0.22);
        color: #90CAF9;
        box-shadow: 0 0 15px rgba(33, 150, 243, 0.35);
      }
      .hp-method-btn.active.tg {
        border-color: #03A9F4;
        background: rgba(3, 169, 244, 0.22);
        color: #81D4FA;
        box-shadow: 0 0 15px rgba(3, 169, 244, 0.35);
      }
      .hp-method-btn.active.wa {
        border-color: #25D366;
        background: rgba(37, 211, 102, 0.22);
        color: #A5D6A7;
        box-shadow: 0 0 15px rgba(37, 211, 102, 0.35);
      }
      .hp-method-btn.active.phone {
        border-color: var(--hp-rose);
        background: rgba(244, 114, 182, 0.22);
        color: #fff;
        box-shadow: 0 0 15px rgba(244, 114, 182, 0.35);
      }

      .hp-input-group { margin-bottom: 16px; text-align: left; }
      .hp-input {
        width: 100%;
        background: var(--hp-surface);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 15px;
        padding: 15px 20px;
        color: #ffffff;
        font-size: 15px;
        outline: none;
        font-family: 'Montserrat', sans-serif;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-input:focus {
        border-color: var(--hp-rose);
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.25);
      }
      .hp-input-hint {
        font-size: 11.5px;
        color: #9f96aa;
        margin-top: 7px;
        padding-left: 4px;
      }
      .hp-form-submit {
        width: 100%;
        background: var(--hp-pink-grad);
        color: #1a0815;
        font-size: 16px;
        font-weight: 700;
        padding: 17px;
        border-radius: 16px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        box-shadow: 0 6px 25px rgba(244, 114, 182, 0.5);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-form-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 32px rgba(244, 114, 182, 0.7);
      }
      .hp-form-policy {
        font-size: 11px;
        color: #7d7588;
        margin-top: 14px;
      }
      .hp-form-policy a {
        color: #baa7cc;
        text-decoration: underline;
        cursor: pointer;
      }

      /* QUIZ SECTION */
      .hp-quiz-section { padding: 65px 0; }
      .hp-sec-head { text-align: center; max-width: 650px; margin: 0 auto 40px; }
      .hp-sec-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(30px, 3.8vw, 44px);
        color: #fff;
        margin: 0 0 12px;
      }
      .hp-sec-desc { font-size: 14.5px; color: var(--hp-text-muted); line-height: 1.6; }
      .hp-quiz-card {
        background: var(--hp-card);
        border: 1px solid var(--hp-border);
        border-radius: 24px;
        padding: 34px 30px;
        max-width: 840px;
        margin: 0 auto;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
      }
      .hp-quiz-step-title {
        font-size: 16px;
        font-weight: 600;
        color: #fbcfe8;
        margin-bottom: 15px;
      }
      .hp-quiz-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-bottom: 26px;
      }
      .hp-quiz-opt {
        background: var(--hp-surface);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 14px;
        padding: 18px 12px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-quiz-opt:hover { border-color: rgba(244, 114, 182, 0.4); }
      .hp-quiz-opt.selected {
        background: rgba(244, 114, 182, 0.16);
        border-color: var(--hp-rose);
        color: #fff;
        box-shadow: 0 0 18px rgba(244, 114, 182, 0.25);
      }
      .hp-quiz-opt-val { font-size: 16.5px; font-weight: 700; margin-bottom: 4px; }
      .hp-quiz-opt-desc { font-size: 11.5px; color: var(--hp-text-muted); }

      /* CATALOG PREVIEW */
      .hp-catalog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 24px;
      }
      .hp-cut-card {
        background: var(--hp-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .hp-cut-card:hover {
        transform: translateY(-5px);
        border-color: var(--hp-border);
      }
      .hp-cut-img-wrap { position: relative; height: 260px; background: #121018; overflow: hidden; }
      .hp-cut-img { width: 100%; height: 100%; object-fit: cover; }
      .hp-cut-badge {
        position: absolute;
        top: 12px; right: 12px;
        background: rgba(16, 185, 129, 0.25);
        border: 1px solid rgba(16, 185, 129, 0.5);
        color: #34d399;
        font-size: 11px;
        font-weight: 700;
        padding: 5px 12px;
        border-radius: 20px;
        backdrop-filter: blur(8px);
      }
      .hp-cut-info { padding: 22px; flex-grow: 1; display: flex; flex-direction: column; }
      .hp-cut-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 8px;
      }
      .hp-cut-desc {
        font-size: 13px;
        color: var(--hp-text-muted);
        line-height: 1.55;
        margin-bottom: 18px;
        flex-grow: 1;
      }
      .hp-cut-btn {
        width: 100%;
        background: var(--hp-pink-grad);
        color: #1a0815;
        font-size: 13.5px;
        font-weight: 700;
        padding: 13px;
        border-radius: 12px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: none;
        transition: opacity 0.2s ease;
      }
      .hp-cut-btn:hover { opacity: 0.92; }

      /* TELEGRAM LIVE FEED */
      .hp-tg-feed-section { padding: 60px 0 80px; border-top: 1px solid var(--hp-border-subtle); }
      .hp-tg-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(3, 169, 244, 0.12);
        border: 1px solid rgba(3, 169, 244, 0.4);
        color: #81D4FA;
        padding: 6px 14px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .hp-tg-badge span {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #03A9F4;
        display: inline-block;
        box-shadow: 0 0 10px #03A9F4;
      }
      .hp-feed-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
        gap: 24px;
        margin-top: 32px;
      }
      .hp-feed-card {
        background: var(--hp-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .hp-feed-card:hover {
        transform: translateY(-5px);
        border-color: var(--hp-border);
      }
      .hp-feed-media { position: relative; height: 320px; background: #000; overflow: hidden; }
      .hp-feed-thumb { width: 100%; height: 100%; object-fit: cover; }
      .hp-feed-video-badge {
        position: absolute;
        top: 12px; left: 12px;
        background: rgba(10, 8, 14, 0.78);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: #fff;
        font-size: 11.5px;
        font-weight: 700;
        padding: 5px 12px;
        border-radius: 20px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .hp-feed-body { padding: 22px; flex-grow: 1; display: flex; flex-direction: column; }
      .hp-feed-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 21px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 10px;
        line-height: 1.25;
      }
      .hp-feed-desc {
        font-size: 13px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        white-space: pre-line;
        margin-bottom: 20px;
        flex-grow: 1;
      }
      .hp-feed-actions { display: flex; gap: 10px; }
      .hp-feed-btn-book {
        flex: 1;
        background: var(--hp-pink-grad);
        color: #1a0815 !important;
        font-size: 13px;
        font-weight: 700;
        padding: 13px;
        border-radius: 12px;
        text-align: center;
        text-decoration: none;
      }
      .hp-feed-btn-tg {
        padding: 13px 18px;
        background: rgba(3, 169, 244, 0.15);
        border: 1px solid rgba(3, 169, 244, 0.4);
        color: #81D4FA !important;
        font-size: 13px;
        font-weight: 600;
        border-radius: 12px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      /* FOOTER */
      .hp-footer {
        padding: 44px 0 85px;
        border-top: 1px solid var(--hp-border-subtle);
        font-size: 12px;
        color: var(--hp-text-muted);
        line-height: 1.65;
        text-align: center;
      }
      .hp-footer-links {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 16px;
        flex-wrap: wrap;
      }
      .hp-footer-link {
        color: #fbcfe8;
        text-decoration: underline;
        cursor: pointer;
      }

      /* UI CONTROLS & WIDGETS */
      #hp-btn-top {
        position: fixed !important;
        bottom: 14px !important;
        left: 14px !important;
        width: 40px !important;
        height: 40px !important;
        background: #ffffff !important;
        color: #1a0815 !important;
        border: 1px solid #e2d9eb !important;
        border-radius: 50% !important;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9998 !important;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3) !important;
      }
      #hp-btn-top svg { width: 18px; height: 18px; fill: currentColor; }

      #hp-widget-lead {
        position: fixed !important;
        bottom: 14px !important;
        right: 14px !important;
        z-index: 9998 !important;
      }
      .hp-widget-pulse-btn {
        background: var(--hp-pink-grad) !important;
        color: #1a0815 !important;
        border: none !important;
        border-radius: 25px !important;
        padding: 12px 20px !important;
        font-size: 13.5px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
        text-decoration: none !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        animation: hp-glow 2.5s infinite alternate;
      }
      @keyframes hp-glow {
        0% { box-shadow: 0 4px 16px rgba(244, 114, 182, 0.4); }
        100% { box-shadow: 0 8px 30px rgba(244, 114, 182, 0.8); }
      }

      /* COOKIE BANNER */
      #hp-cookie-banner {
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
        background: rgba(14, 12, 18, 0.96) !important;
        backdrop-filter: blur(12px) !important;
        border-top: 1px solid var(--hp-border) !important;
        padding: 12px 20px !important;
        color: #f5f5f7 !important;
        font-size: 12px !important;
        z-index: 99999 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 14px;
      }
      .hp-cookie-btns { display: flex; gap: 8px; }
      .hp-cookie-btn-accept {
        background: var(--hp-rose) !important;
        color: #120914 !important;
        border: none !important;
        padding: 7px 15px !important;
        border-radius: 16px !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
      }
      .hp-cookie-btn-opt {
        background: transparent !important;
        color: #bbb !important;
        border: 1px solid #555 !important;
        padding: 7px 15px !important;
        border-radius: 16px !important;
        font-size: 12px !important;
        cursor: pointer !important;
      }

      /* LEGAL MODAL */
      #hp-legal-modal {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 100000;
        padding: 16px;
      }
      .hp-legal-box {
        background: #191622;
        border: 1px solid var(--hp-border);
        color: #ddd;
        max-width: 650px;
        max-height: 85vh;
        overflow-y: auto;
        padding: 30px;
        border-radius: 22px;
        position: relative;
        font-size: 13px;
        line-height: 1.6;
      }
      .hp-legal-close {
        position: absolute;
        top: 14px; right: 14px;
        background: none;
        border: none;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
      }

      /* MOBILE ADAPTATION */
      @media (max-width: 860px) {
        .hp-hero-grid { display: flex; flex-direction: column; gap: 30px; text-align: center; }
        .hp-hero-cta-box { justify-content: center; }
        .hp-hero-collage { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
        .hp-hero-card-main { height: 380px; }
        .hp-hero-side-cards { flex-direction: row; height: 180px; }
        .hp-quiz-options { grid-template-columns: 1fr; }
        .hp-method-selector { grid-template-columns: repeat(2, 1fr); }
      }
    `;
    document.head.appendChild(s);
  }

  var html = `
<div id="hp-app">
  <!-- HEADER -->
  <header class="hp-container hp-header">
    <a href="https://hipretty.ru" class="hp-logo-wrap">
      <div class="hp-logo">hi, pretty!</div>
      <div class="hp-logo-sub">\u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u043b\u043e\u0441\u044b \u2022 \u043c\u043e\u0441\u043a\u0432\u0430</div>
    </a>
    <div class="hp-header-actions">
      <a href="tel:+79933365357" class="hp-header-phone">8 (993) 336-53-57</a>
      <a href="#lead-box" class="hp-btn-header-cta">\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0441\u0440\u0435\u0437 \u2726</a>
    </div>
  </header>

  <!-- HERO SECTION WITH REAL PHOTO COLLAGE -->
  <section class="hp-container hp-hero">
    <div class="hp-hero-grid">
      <div class="hp-hero-info">
        <div class="hp-badge-live"><span></span> \u0411\u043e\u043b\u0435\u0435 30 \u043a\u0433 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0432 \u0441\u0442\u0443\u0434\u0438\u0438</div>
        <h1 class="hp-hero-title">\u041e\u0442\u0431\u043e\u0440\u043d\u044b\u0435 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u043b\u043e\u0441\u044b <span>\u0432\u044b\u0441\u0448\u0435\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438</span></h1>
        <p class="hp-hero-desc">\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0435 \u0438 \u0434\u0435\u0442\u0441\u043a\u0438\u0435 \u0441\u0440\u0435\u0437\u044b \u043e\u0442 40 \u0434\u043e 80 \u0441\u043c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441\u043e \u0441\u0442\u0443\u0434\u0438\u0438 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435. 100% \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u043b\u043e\u0441 \u0431\u0435\u0437 \u0432\u044b\u0447\u0435\u0441\u0430, \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u043e\u0432 \u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u044b\u0448\u0435\u0439. \u0412\u0438\u0434\u0435\u043e-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0440\u0435\u0437\u0430 \u043d\u0430 \u0432\u0435\u0441\u0430\u0445 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439.</p>
        <div class="hp-hero-cta-box">
          <a href="#lead-box" class="hp-btn-main">\u2726 \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0440\u0435\u0437</a>
          <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="hp-btn-max">\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 MAX (\u0431\u0435\u0437 VPN)</a>
          <a href="https://wa.me/79933365357?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E." target="_blank" rel="noopener" class="hp-btn-wa-soft">WhatsApp</a>
        </div>
        <div class="hp-stats">
          <div><div class="hp-stat-val">&gt;30 \u043a\u0433</div><div class="hp-stat-lbl">\u0416\u0438\u0432\u043e\u0433\u043e \u0441\u043a\u043b\u0430\u0434\u0430 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435</div></div>
          <div><div class="hp-stat-val">40\u201380 \u0441\u043c</div><div class="hp-stat-lbl">\u0414\u043b\u0438\u043d\u044b \u0441\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0445 \u0441\u0440\u0435\u0437\u043e\u0432</div></div>
          <div><div class="hp-stat-val">100%</div><div class="hp-stat-lbl">\u041f\u043b\u043e\u0442\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u044b, \u0431\u0435\u0437 \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u0430</div></div>
        </div>
      </div>

      <!-- COLLAGE WITH REAL HAIR & MODELS -->
      <div class="hp-hero-collage">
        <div class="hp-hero-card-main">
          <img src="https://static.tildacdn.com/tild6532-6566-4133-b335-336432383935/IMG_0159.jpg" alt="\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441 hi, pretty!" loading="eager">
          <div class="hp-media-badge">
            <span class="hp-media-badge-txt">\u0421\u0442\u0443\u0434\u0438\u0439\u043d\u044b\u0439 \u0441\u043a\u043b\u0430\u0434 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435</span>
            <span class="hp-media-badge-tag">\u25cf \u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438</span>
          </div>
        </div>
        <div class="hp-hero-side-cards">
          <div class="hp-hero-card-sub">
            <img src="https://static.tildacdn.com/tild3961-6562-4862-b139-646365613732/IMG_2471.jpg" alt="\u0428\u0435\u043b\u043a\u043e\u0432\u0438\u0441\u0442\u044b\u0439 \u0431\u043b\u043e\u043d\u0434" loading="eager">
            <div class="hp-media-badge">
              <span class="hp-media-badge-txt">\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0448\u0435\u043b\u043a</span>
              <span class="hp-media-badge-tag">VIP</span>
            </div>
          </div>
          <div class="hp-hero-card-sub">
            <img src="https://static.tildacdn.com/tild6636-3861-4461-b962-333665373032/IMG_6592.jpg" alt="\u041c\u043e\u0434\u0435\u043b\u044c \u0441 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438" loading="eager">
            <div class="hp-media-badge">
              <span class="hp-media-badge-txt">\u0416\u0438\u0432\u043e\u0439 \u043e\u0431\u044a\u0435\u043c</span>
              <span class="hp-media-badge-tag">100% Lux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LEAD GENERATION BLOCK -->
  <section id="lead-box" class="hp-lead-section">
    <div class="hp-container">
      <div class="hp-lead-box">
        <span class="hp-lead-badge">\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0439 \u043f\u043e\u0434\u0431\u043e\u0440</span>
        <h2 class="hp-lead-title">\u041c\u0435\u0447\u0442\u0430\u0435\u0442\u0435 \u043e \u0440\u043e\u0441\u043a\u043e\u0448\u043d\u044b\u0445 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441\u0430\u0445?</h2>
        <p class="hp-lead-subtitle">\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u043b\u0443\u0447\u0448\u0438\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. <br><span class="hp-lead-sub-accent">\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b, \u0438 \u0432\u0430\u0448 \u043b\u0438\u0447\u043d\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441.</span></p>

        <form id="hp-lead-form">
          <div class="hp-input-group">
            <input type="text" id="hp-user-name" class="hp-input" placeholder="\u0418\u043c\u044f" required>
          </div>

          <div class="hp-method-label">\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u0432\u044f\u0437\u0438:</div>
          <div class="hp-method-selector">
            <button type="button" class="hp-method-btn active max" data-m="max_messenger">
              <span>\u25cf</span> MAX (\u0411\u0435\u0437 VPN)
            </button>
            <button type="button" class="hp-method-btn tg" data-m="telegram">
              <span>\u25cf</span> Telegram
            </button>
            <button type="button" class="hp-method-btn wa" data-m="whatsapp">
              <span>\u25cf</span> WhatsApp
            </button>
            <button type="button" class="hp-method-btn phone" data-m="phone">
              <span>\u25cf</span> \u0422\u0435\u043b\u0435\u0444\u043e\u043d
            </button>
          </div>

          <div class="hp-input-group">
            <input type="text" id="hp-user-contact" class="hp-input" placeholder="\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d" required>
            <div id="hp-contact-hint" class="hp-input-hint">
              <strong>\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 MAX:</strong> \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.
            </div>
          </div>

          <button type="submit" id="hp-submit-btn" class="hp-form-submit">\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u0431\u0440\u043e\u043d\u044c \u0441\u0440\u0435\u0437\u0430 \u2726</button>

          <div class="hp-form-policy">
            \u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 <a id="hp-open-policy">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u043d \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</a> (152-\u0424\u0417).
          </div>
          <div id="hp-form-success" style="display:none;margin-top:18px;color:#10B981;font-weight:700;font-size:15px;line-height:1.5;">
            \u2713 \u0417\u0430\u044f\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u0430! \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u0438\u0442 \u0432\u0438\u0434\u0435\u043e\u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0443 \u0441\u0440\u0435\u0437\u043e\u0432 \u0441 \u0432\u0435\u0441\u043e\u0432.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- QUIZ SECTION -->
  <section class="hp-container hp-quiz-section">
    <div class="hp-sec-head">
      <h2 class="hp-sec-title">\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441-\u043f\u043e\u0434\u0431\u043e\u0440 \u0441\u0440\u0435\u0437\u0430 \u043e\u043d\u043b\u0430\u0439\u043d</h2>
      <p class="hp-sec-desc">\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043b\u0430 \u0432\u043e\u043b\u043e\u0441 \u2014 \u043c\u0430\u0441\u0442\u0435\u0440 \u0441\u0440\u0430\u0437\u0443 \u043e\u0442\u0431\u0435\u0440\u0435\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0438\u0437 30+ \u043a\u0433.</p>
    </div>
    <div class="hp-quiz-card">
      <div class="hp-quiz-step-title">1. \u0416\u0435\u043b\u0430\u0435\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0432\u043e\u043b\u043e\u0441:</div>
      <div class="hp-quiz-options" id="quiz-length">
        <div class="hp-quiz-opt selected" data-val="40-50 \u0441\u043c">
          <div class="hp-quiz-opt-val">40\u201350 \u0441\u043c</div>
          <div class="hp-quiz-opt-desc">\u041a\u0430\u0440\u0435 \u0438 \u0434\u043e \u043b\u043e\u043f\u0430\u0442\u043e\u043a</div>
        </div>
        <div class="hp-quiz-opt" data-val="55-65 \u0441\u043c">
          <div class="hp-quiz-opt-val">55\u201365 \u0441\u043c</div>
          <div class="hp-quiz-opt-desc">\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0434\u043e \u0442\u0430\u043b\u0438\u0438</div>
        </div>
        <div class="hp-quiz-opt" data-val="70-80 \u0441\u043c">
          <div class="hp-quiz-opt-val">70\u201380 \u0441\u043c</div>
          <div class="hp-quiz-opt-desc">\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0439 \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u0441\u0440\u0435\u0437</div>
        </div>
      </div>

      <div class="hp-quiz-step-title">2. \u041e\u0442\u0442\u0435\u043d\u043e\u043a:</div>
      <div class="hp-quiz-options" id="quiz-color">
        <div class="hp-quiz-opt selected" data-val="\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u0431\u043b\u043e\u043d\u0434">
          <div class="hp-quiz-opt-val">\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u0431\u043b\u043e\u043d\u0434</div>
          <div class="hp-quiz-opt-desc">\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0440\u0435\u0437</div>
        </div>
        <div class="hp-quiz-opt" data-val="\u0420\u0443\u0441\u044b\u0439 / \u041f\u0448\u0435\u043d\u0438\u0447\u043d\u044b\u0439">
          <div class="hp-quiz-opt-val">\u0420\u0443\u0441\u044b\u0439 / \u041f\u0448\u0435\u043d\u0438\u0447\u043d\u044b\u0439</div>
          <div class="hp-quiz-opt-desc">\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u043c\u044f\u0433\u043a\u0438\u0439 \u0442\u043e\u043d</div>
        </div>
        <div class="hp-quiz-opt" data-val="\u0428\u043e\u043a\u043e\u043b\u0430\u0434 / \u0422\u0435\u043c\u043d\u044b\u0439">
          <div class="hp-quiz-opt-val">\u0428\u043e\u043a\u043e\u043b\u0430\u0434 / \u0422\u0435\u043c\u043d\u044b\u0439</div>
          <div class="hp-quiz-opt-desc">\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0439 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u0435\u0441\u043a</div>
        </div>
      </div>

      <div style="text-align:center;margin-top:20px;">
        <a href="#lead-box" class="hp-btn-main">\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0440\u0435\u0437\u044b \u043f\u043e\u0434 \u043c\u043e\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u2726</a>
      </div>
    </div>
  </section>

  <!-- POPULAR REAL CUTS -->
  <section class="hp-container" style="padding: 40px 0 70px;">
    <div class="hp-sec-head">
      <h2 class="hp-sec-title">\u0421\u0432\u0435\u0436\u0438\u0435 \u043f\u0430\u0440\u0442\u0438\u0438 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438</h2>
      <p class="hp-sec-desc">\u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0440\u0435\u0437 \u0443\u043d\u0438\u043a\u0430\u043b\u0435\u043d \u2014 \u043e\u0434\u0438\u043d \u0434\u043e\u043d\u043e\u0440, \u043f\u043b\u043e\u0442\u043d\u044b\u0439 \u0440\u043e\u0432\u043d\u044b\u0439 \u0441\u0440\u0435\u0437, \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u0430.</p>
    </div>
    <div class="hp-catalog-grid">
      <div class="hp-cut-card">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3137-6435-4061-b463-393264316465/IMG_2585.JPG" alt="\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u0440\u0435\u0437 \u0431\u043b\u043e\u043d\u0434" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438</span>
        </div>
        <div class="hp-cut-info">
          <h3 class="hp-cut-title">\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0435\u0442\u0441\u043a\u0438\u0439 \u0431\u043b\u043e\u043d\u0434</h3>
          <p class="hp-cut-desc">\u0414\u043b\u0438\u043d\u0430 60 \u0441\u043c, 115 \u0433. \u0422\u043e\u043d\u043a\u0438\u0439 \u0448\u0435\u043b\u043a\u043e\u0432\u0438\u0441\u0442\u044b\u0439 \u0432\u043e\u043b\u043e\u0441, \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u043e\u0432\u043d\u044b\u0439 \u0441\u0440\u0435\u0437 \u0431\u0435\u0437 \u043e\u043a\u0440\u0430\u0448\u0438\u0432\u0430\u043d\u0438\u044f.</p>
          <a href="#lead-box" class="hp-cut-btn">\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437 \u2726</a>
        </div>
      </div>

      <div class="hp-cut-card">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3530-6434-4333-b039-656266383061/IMG_2592.jpg" alt="\u041f\u0448\u0435\u043d\u0438\u0447\u043d\u043e-\u0440\u0443\u0441\u044b\u0439 \u0441\u0440\u0435\u0437" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438</span>
        </div>
        <div class="hp-cut-info">
          <h3 class="hp-cut-title">\u0421\u0432\u0435\u0442\u043b\u043e-\u0440\u0443\u0441\u044b\u0439 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0439</h3>
          <p class="hp-cut-desc">\u0414\u043b\u0438\u043d\u0430 65 \u0441\u043c, 130 \u0433. \u041c\u044f\u0433\u043a\u0430\u044f \u0432\u043e\u043b\u043d\u0430, \u0436\u0438\u0432\u043e\u0439 \u0431\u043b\u0435\u0441\u043a, \u043f\u043b\u043e\u0442\u043d\u044b\u0435 \u0433\u0443\u0441\u0442\u044b\u0435 \u043a\u043e\u043d\u0446\u044b.</p>
          <a href="#lead-box" class="hp-cut-btn">\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437 \u2726</a>
        </div>
      </div>

      <div class="hp-cut-card">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3832-3930-4664-b236-666264653838/IMG_2594.jpg" alt="\u0422\u0435\u043c\u043d\u044b\u0439 \u0441\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0439 \u0441\u0440\u0435\u0437" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438</span>
        </div>
        <div class="hp-cut-info">
          <h3 class="hp-cut-title">\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u044b\u0439 \u0448\u0435\u043b\u043a</h3>
          <p class="hp-cut-desc">\u0414\u043b\u0438\u043d\u0430 70 \u0441\u043c, 145 \u0433. \u0413\u0443\u0441\u0442\u043e\u0439 \u043e\u0431\u044a\u0435\u043c, \u0438\u0434\u0435\u0430\u043b\u0435\u043d \u0434\u043b\u044f \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u044f, \u043d\u0435 \u043f\u0443\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043c\u044b\u0442\u044c\u044f.</p>
          <a href="#lead-box" class="hp-cut-btn">\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437 \u2726</a>
        </div>
      </div>
    </div>
  </section>

  <!-- TELEGRAM CHANNEL LIVE FEED -->
  <section class="hp-container hp-tg-feed-section" id="kanalTG">
    <div class="hp-sec-head">
      <div class="hp-tg-badge"><span></span> \u041f\u0440\u044f\u043c\u043e\u0439 \u044d\u0444\u0438\u0440 \u0441\u043e \u0441\u0442\u0443\u0434\u0438\u0438 &bull; Telegram @hi_pretty</div>
      <h2 class="hp-sec-title">\u0416\u0438\u0432\u044b\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u0432\u0438\u0434\u0435\u043e \u0441\u0440\u0435\u0437\u043e\u0432</h2>
      <p class="hp-sec-desc">\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043b\u0435\u043d\u0442\u0430 \u0438\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430. \u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0440\u0435\u0437 \u0441\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0432\u0438\u0434\u0435\u043e \u0441 \u0432\u0435\u0441\u043e\u0432 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439.</p>
    </div>
    <div class="hp-feed-grid" id="hp-live-feed-grid">
      <div class="hp-feed-card" data-post-id="4258">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/pxX-AoaIPci34Q7jpLRGMlDR5nIvOqRYXTITkYx2Xew-fd6JhcAovPvbQQzE1S1MecrjMltlvBWCaYCnFj_6cvn1U0qYnLy3SLp_cJQtHG5BpjgBRnjVt7rrC6U9nZv4R30uzwcwoB_N5_SXUra89kuqOA8PlmEWm-IuI-vuB_Hk7SEgYEZXzaTN-mvsdLwIvfv56cut7BE-KF55LoETEJGa45AfRpPJqLSb642SPTMA9azWcxmo0f_b3E3nfY_t4yRViJ-TGcc4SFscKRRUWcPZt0QREYWvMG4oAtdYdaXXci1FWCcJfiyIJKMK7BBLQjYeaN54iBnIElUcimtEnw" alt="\u041f\u043e\u0434\u0431\u043e\u0440 \u0432\u043e\u043b\u043e\u0441 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u0422\u0423\u0422" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; \u0412\u0438\u0434\u0435\u043e \u0441\u0440\u0435\u0437\u0430</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">\u041f\u043e\u0434\u0431\u043e\u0440 \u0432\u043e\u043b\u043e\u0441 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u0422\u0423\u0422</h3>
          <p class="hp-feed-desc">\u041a\u0430\u043d\u0430\u043b \u0441 \u0434\u0435\u0442\u0441\u043a\u0438\u043c\u0438 \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438<br>\u0428\u0435\u043b\u043a\u043e\u0432\u044b\u0435,\u043c\u0430\u0441\u043b\u044f\u043d\u0438\u0441\u0442\u044b\u0435,\u043d\u0435\u0436\u043d\u0435\u0439\u0448\u0438\u0435,\u0433\u043b\u0430\u0434\u043a\u0438\u0435<br>\u0421\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e<br>#1247 65\u0441\u043c/181\u0433\u0440 - 113.750\u20bd<br>#1249 65\u0441\u043c/144\u0433\u0440 - 60.000\u20bd<br>#1243 65\u0441\u043c/149\u0433\u0440 - 68.400\u20bd<br>#1246 67\u0441\u043c/229\u0433\u0440 - 87.350\u20bd</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">&#10022; \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437</a>
            <a href="https://t.me/hi_pretty/4258" target="_blank" rel="noopener" class="hp-feed-btn-tg" title="\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 Telegram">\u0412 \u043a\u0430\u043d\u0430\u043b &rarr;</a>
          </div>
        </div>
      </div>

      <div class="hp-feed-card" data-post-id="4263">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/llxxfwBO56PKPL-1DrXV6K_OD8GgZ1VU3MJ4DprO0AiioJMPkTDfqaZOMW-a6Wv_NczWOL-Gwn3_I6iqFIS3MmliIWtCN36yz2bHiOSUSb5S8u2eR9z9P5zPj54y_9gRVPWqTdtru45dSet1WHqod6E-OdzlC-NPZpvm9iDruUjCOqrqsGkloV0AnSxC-FDLm2i_wOnMgrwq9Q8Bfjw5MWiDdas_9-bkf_raZfo4mwa1vwVp3YCnZrQaNRivPJ-AGJ8OypSr39OV-BFB-jfrRg-djiaHb7FY8IeZwx3adt5de5SWjmiZNWH6ZA4Nfw4fGLE3GyauYIOhfQwCoSxRcw" alt="\u041f\u043e\u0434\u0431\u043e\u0440 \u0432\u043e\u043b\u043e\u0441 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u0422\u0423\u0422" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; \u0412\u0438\u0434\u0435\u043e \u0441\u0440\u0435\u0437\u0430</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">\u041f\u043e\u0434\u0431\u043e\u0440 \u0432\u043e\u043b\u043e\u0441 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u0422\u0423\u0422</h3>
          <p class="hp-feed-desc">\u041a\u0430\u043d\u0430\u043b \u0441 \u0434\u0435\u0442\u0441\u043a\u0438\u043c\u0438 \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438<br>#1436<br>\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0448\u0435\u043b\u043a<br>\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u0430\u044f \u0432\u043e\u043b\u043d\u0430,\u0432\u043e\u043b\u043e\u0441\u0438\u043d\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u0442\u043e\u043d\u043a\u043e\u0439 \u0438 \u0441\u0440\u0435\u0434\u043d\u0435\u0439<br>50 \u0441\u043c<br>107 \u0433\u0440<br>41.000\u20bd</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">&#10022; \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437</a>
            <a href="https://t.me/hi_pretty/4263" target="_blank" rel="noopener" class="hp-feed-btn-tg" title="\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 Telegram">\u0412 \u043a\u0430\u043d\u0430\u043b &rarr;</a>
          </div>
        </div>
      </div>

      <div class="hp-feed-card" data-post-id="4271">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/kRd4TmRmXPv9Xi2H1y2hhov_lx3qUSrGzXuAp8IuzCVTBzVsUUfD2tC-E1PgK7Tu9rr7QrEyR3pnfW1tvysf05wTadCaC4EqzPQM3XPAIRvCbo5JBgQ3W6CNRmnQlKILFaae6KEQmdMxo3mMowpmKhLMvWfkDIh9x1uCaj1ykEEqmoGXKu6e3v95FtKQHCiI-FAJd8vXAPTR1lTamz1DyDbvUbzo_pIx8q1DO91z6VaD5zq3hvJY1e2Z9emhUbsj3hdxr_VVaH5GcGeg0CcYp5I_vXF-14-HOz73v0R83kwa421Lh5jn0S9fyZWevqr3twFHWSB4F0yNSkUe4D7LKw" alt="\u0414\u0435\u0442\u0441\u043a\u0438\u0435,\u0448\u0435\u043b\u043a\u043e\u0432\u044b\u0435,\u043d\u0435\u0436\u043d\u0435\u0439\u0448\u0438\u0435 \u0445\u0432\u043e\u0441\u0442\u0438\u043a\u0438" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; \u0412\u0438\u0434\u0435\u043e \u0441\u0440\u0435\u0437\u0430</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">\u0414\u0435\u0442\u0441\u043a\u0438\u0435,\u0448\u0435\u043b\u043a\u043e\u0432\u044b\u0435,\u043d\u0435\u0436\u043d\u0435\u0439\u0448\u0438\u0435 \u0445\u0432\u043e\u0441\u0442\u0438\u043a\u0438</h3>
          <p class="hp-feed-desc">\u0421\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e<br>#1387 66\u0441\u043c/86\u0433\u0440 - 48.400\u20bd<br>#1555 68\u0441\u043c/140\u0433\u0440 - 190.000\u20bd<br>#1268 69\u0441\u043c/193\u0433\u0440 - 182.200\u20bd</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">&#10022; \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437</a>
            <a href="https://t.me/hi_pretty/4271" target="_blank" rel="noopener" class="hp-feed-btn-tg" title="\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 Telegram">\u0412 \u043a\u0430\u043d\u0430\u043b &rarr;</a>
          </div>
        </div>
      </div>

      <div class="hp-feed-card" data-post-id="4276">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/QFycXKhIz5xnOXlenR25iUo3ZA1SItsQZ1O36M2pzy3AhUX3-Go8kKTcK2QCtNF9XYE_UW1ENS6q6QdShZQN9QP3sguVfRYA8jkRhZgk6zJdiGsYWEkfkkB6LIvu584DDqLrcTkjF6u2HWWrfvcIs8ZbRFiLgqQL9EAfMRjxwUrmtTc2CGak7MyVo3vWk2ouB11NI5byl0_jmimAhvMIM-8ddcK9dFpawyW4nCaAthiu8peCnctCaY__JPbvimpiRyygINPWno5A_ZV7CDRLEUV9yxZJ1mT6eyZeNSuIRMcda9Ko8ggdc7hzhOXdHTXWh2qFhurGFnjtIUQD5QV4PQ" alt="\u041f\u043e\u0434\u0431\u043e\u0440 \u0432\u043e\u043b\u043e\u0441 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u0422\u0423\u0422" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; \u0412\u0438\u0434\u0435\u043e \u0441\u0440\u0435\u0437\u0430</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">\u041f\u043e\u0434\u0431\u043e\u0440 \u0432\u043e\u043b\u043e\u0441 \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043d\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u043d\u0438\u0435 \u0422\u0423\u0422</h3>
          <p class="hp-feed-desc">\u041a\u0430\u043d\u0430\u043b \u0441 \u0434\u0435\u0442\u0441\u043a\u0438\u043c\u0438 \u0432\u043e\u043b\u043e\u0441\u0430\u043c\u0438<br>#1378<br>\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0441\u0440\u0435\u0437<br>\u041e\u043a\u0440\u0430\u0448\u0435\u043d \u0432 \u0449\u0430\u0434\u044f\u0449\u0435\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0435<br>\u0422\u043e\u043d\u0447\u0430\u0439\u0448\u0430\u044f,\u0448\u0435\u043b\u043a\u043e\u0432\u0430\u044f \u0432\u043e\u043b\u043e\u0441\u0438\u043d\u043a\u0430<br>50 \u0441\u043c<br>80 \u0433\u0440<br>47.200\u20bd</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">&#10022; \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u0435\u0437</a>
            <a href="https://t.me/hi_pretty/4276" target="_blank" rel="noopener" class="hp-feed-btn-tg" title="\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 Telegram">\u0412 \u043a\u0430\u043d\u0430\u043b &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <div style="text-align:center;margin-top:36px;">
      <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-btn-main" style="background:rgba(3,169,244,0.18);border:1px solid rgba(3,169,244,0.5);color:#81D4FA !important;box-shadow:none;">
        <span>&#9992;</span> \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 Telegram (@hi_pretty)
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="hp-container hp-footer">
    <div class="hp-footer-links">
      <span id="hp-footer-policy" class="hp-footer-link">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</span>
      <span>\u2022</span>
      <span id="hp-footer-consent" class="hp-footer-link">\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 (152-\u0424\u0417)</span>
    </div>
    <div style="margin-bottom:8px;">
      \u041f\u0440\u044f\u043c\u0430\u044f \u0441\u0432\u044f\u0437\u044c:
      <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" style="color:#fbcfe8;margin:0 6px;">MAX</a> |
      <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:#fbcfe8;margin:0 6px;">Telegram</a> |
      <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:#fbcfe8;margin:0 6px;">WhatsApp</a> |
      <a href="tel:+79933365357" style="color:#fbcfe8;margin:0 6px;">8 (993) 336-53-57</a>
    </div>
    <div>\u0418\u041f \u041a\u0430\u043c\u0435\u043d\u0435\u0432\u0430 \u2022 \u0418\u041d\u041d: 100201988457 \u2022 \u041e\u0413\u0420\u041d\u0418\u041f: 323774600090577</div>
    <div style="margin-top:4px;">\u0421\u0442\u0443\u0434\u0438\u044f \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441 hi, pretty! \u041c\u043e\u0441\u043a\u0432\u0430 \u2022 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u0439 \u0420\u043e\u0441\u0441\u0438\u0438</div>
  </footer>
</div>

<!-- 152-ФЗ ЮРИДИЧЕСКИЙ МОДАЛ -->
<div id="hp-legal-modal">
  <div class="hp-legal-box">
    <button type="button" class="hp-legal-close">&times;</button>
    <h3 style="margin-top:0;color:#f472b6;">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 152-\u0424\u0417</h3>
    <p>\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u044f \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0418\u041f \u041a\u0430\u043c\u0435\u043d\u0435\u0432\u0430 (\u0418\u041d\u041d 100201988457, \u041e\u0413\u0420\u041d\u0418\u041f 323774600090577) \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0438\u043c\u044f, \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u043d\u0438\u043a\u043d\u0435\u0439\u043c/\u0441\u0441\u044b\u043b\u043a\u0430 \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435 MAX, Telegram \u0438\u043b\u0438 WhatsApp) \u0432 \u0446\u0435\u043b\u044f\u0445 \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438, \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u0424.</p>
  </div>
</div>
`;

  var currentMethod = 'max_messenger';

  function mount() {
    // Dynamic feed sync from github feed.json
    fetch('https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/feed.json?v=' + Date.now())
      .then(function(r) { return r.json(); })
      .then(function(feed) {
        if (!Array.isArray(feed) || feed.length === 0) return;
        var grid = document.getElementById('hp-live-feed-grid');
        if (!grid) return;
        var existingIds = {};
        grid.querySelectorAll('.hp-feed-card').forEach(function(c) {
          var pid = c.getAttribute('data-post-id');
          if (pid) existingIds[pid] = true;
        });
        feed.forEach(function(item) {
          if (!existingIds[item.id] && item.photo) {
            var newCard = document.createElement('div');
            newCard.className = 'hp-feed-card';
            newCard.setAttribute('data-post-id', item.id);
            newCard.innerHTML = `
              <div class="hp-feed-media">
                <img src="${item.photo}" alt="${item.title || 'Срез волос'}" class="hp-feed-thumb" loading="lazy">
                ${item.isVideo ? '<span class="hp-feed-video-badge">&#127916; Видео среза</span>' : ''}
              </div>
              <div class="hp-feed-body">
                <h3 class="hp-feed-title">${item.title || 'Отборный срез волос'}</h3>
                <p class="hp-feed-desc">${item.text || ''}</p>
                <div class="hp-feed-actions">
                  <a href="#lead-box" class="hp-feed-btn-book">&#10022; Подобрать этот срез</a>
                  <a href="${item.link || 'https://t.me/hi_pretty'}" target="_blank" rel="noopener" class="hp-feed-btn-tg" title="Смотреть в Telegram">В канал &rarr;</a>
                </div>
              </div>
            `;
            grid.prepend(newCard);
          }
        });
      })
      .catch(function() {});

    // Удаляем ненужные хвосты Tilda
    var tildaCookie = document.getElementById('rec1930057121') || document.querySelector('.t972');
    if (tildaCookie) tildaCookie.remove();
    var tFooter = document.getElementById('t-footer');
    if (tFooter) tFooter.remove();

    var existingApp = document.getElementById('hp-app');
    if (existingApp) existingApp.remove();

    var temp = document.createElement('div');
    temp.innerHTML = html;
    var appNode = temp.firstElementChild;
    var modalNode = temp.lastElementChild;

    document.body.prepend(appNode);
    document.body.appendChild(modalNode);

    // Управление выбором канала связи
    var methodBtns = document.querySelectorAll('.hp-method-btn');
    var contactInput = document.getElementById('hp-user-contact');
    var contactHint = document.getElementById('hp-contact-hint');

    methodBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        methodBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        currentMethod = b.getAttribute('data-m');
        if (currentMethod === 'max_messenger') {
          contactInput.placeholder = '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d';
          contactHint.innerHTML = '<strong>\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 MAX:</strong> \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.';
        } else if (currentMethod === 'telegram') {
          contactInput.placeholder = '\u041d\u0438\u043a\u043d\u0435\u0439\u043c \u0432 Telegram (@username) \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d';
          contactHint.innerHTML = '<strong>\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 Telegram:</strong> \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0438\u043a \u0432 Telegram \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 @username \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.';
        } else if (currentMethod === 'whatsapp') {
          contactInput.placeholder = '+7 (999) 000-00-00 (WhatsApp)';
          contactHint.innerHTML = '<strong>\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 WhatsApp:</strong> \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0432 WhatsApp.';
        } else {
          contactInput.placeholder = '+7 (999) 000-00-00';
          contactHint.innerHTML = '<strong>\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:</strong> \u041c\u044b \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043c \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.';
        }
      });
    });

    // Quiz logic
    function setupQuiz(boxId) {
      var box = document.getElementById(boxId);
      if (!box) return;
      var opts = box.querySelectorAll('.hp-quiz-opt');
      opts.forEach(function(o) {
        o.addEventListener('click', function() {
          opts.forEach(function(x) { x.classList.remove('selected'); });
          o.classList.add('selected');
        });
      });
    }
    setupQuiz('quiz-length');
    setupQuiz('quiz-color');

    // ПЕРЕДАЧА ЛИДА В НА ТИЛЬДУ (form1915062531) И МЕТРИКУ
    var leadForm = document.getElementById('hp-lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('hp-user-name').value;
        var contact = document.getElementById('hp-user-contact').value;

        // Фиксация целей Яндекс.Метрики
        if (typeof window.ym === 'function') {
          window.ym(90792799, 'reachGoal', 'submitted');
          window.ym(90792799, 'reachGoal', 'gamelead_send');
        }

        // Синхронизация с формой Тильды #rec1915062531
        var tildaForm = document.getElementById('form1915062531') || document.querySelector('form.t-form');
        if (tildaForm) {
          var tName = tildaForm.querySelector('input[name="Name"]');
          if (tName) tName.value = name;

          // Переключаем тип контакта в Тильде
          var methodRadios = tildaForm.querySelectorAll('input[name="messenger-type"], .t-contact-method__type');
          var methodRadio = tildaForm.querySelector('[data-method-type="' + currentMethod + '"] label, [data-method-type="' + currentMethod + '"] input');
          if (methodRadio) {
            methodRadio.click();
          }

          var tContact = tildaForm.querySelector('input[name="messenger-id"], input[name="Phone"], input[type="tel"]');
          if (tContact) {
            tContact.value = contact;
          }

          // Нажатие submit в нативной форме Тильды для отправки в CRM / Telegram webhook Тильды
          var tSubmit = tildaForm.querySelector('button[type="submit"], .t-submit');
          if (tSubmit && typeof tSubmit.click === 'function') {
            try {
              tSubmit.click();
            } catch(err) {}
          }
        }

        document.getElementById('hp-form-success').style.display = 'block';
        document.getElementById('hp-submit-btn').textContent = '\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u2713';
        document.getElementById('hp-submit-btn').disabled = true;
      });
    }

    // Юридический модал
    var modal = document.getElementById('hp-legal-modal');
    var closeBtn = document.querySelector('.hp-legal-close');
    function openModal() { if (modal) modal.style.display = 'flex'; }
    function closeModal() { if (modal) modal.style.display = 'none'; }

    var p1 = document.getElementById('hp-open-policy');
    var p2 = document.getElementById('hp-footer-policy');
    var p3 = document.getElementById('hp-footer-consent');
    if (p1) p1.addEventListener('click', openModal);
    if (p2) p2.addEventListener('click', openModal);
    if (p3) p3.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
      });
    }
  }

  // Кнопка «Наверх» (Строго Mobile-first слева внизу: bottom 14px, left 14px, 40x40px)
  if (!document.getElementById('hp-btn-top')) {
    var topBtn = document.createElement('button');
    topBtn.id = 'hp-btn-top';
    topBtn.title = '\u041d\u0430\u0432\u0435\u0440\u0445';
    topBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    document.body.appendChild(topBtn);
    window.addEventListener('scroll', function() {
      topBtn.style.display = window.scrollY > 350 ? 'flex' : 'none';
    });
    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Плавающий виджет подбора среза (Строго справа внизу: bottom 14px, right 14px)
  if (!document.getElementById('hp-widget-lead')) {
    var leadWidget = document.createElement('div');
    leadWidget.id = 'hp-widget-lead';
    leadWidget.innerHTML = '<a href="#lead-box" class="hp-widget-pulse-btn"><span>\u2726</span> \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0441\u0440\u0435\u0437</a>';
    document.body.appendChild(leadWidget);
  }

  // Плашка Cookie по закону РФ
  if (!localStorage.getItem('hp_cookie_accepted') && !document.getElementById('hp-cookie-banner')) {
    var cBanner = document.createElement('div');
    cBanner.id = 'hp-cookie-banner';
    cBanner.innerHTML = `
      <div>\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c cookie \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 (\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0430).</div>
      <div class="hp-cookie-btns">
        <button id="hp-cookie-accept" class="hp-cookie-btn-accept">\u041f\u0440\u0438\u043d\u044f\u0442\u044c</button>
        <button id="hp-cookie-setup" class="hp-cookie-btn-opt">\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c</button>
      </div>
    `;
    document.body.appendChild(cBanner);
    document.getElementById('hp-cookie-accept').addEventListener('click', function() {
      localStorage.setItem('hp_cookie_accepted', 'true'); cBanner.remove();
    });
    document.getElementById('hp-cookie-setup').addEventListener('click', function() {
      localStorage.setItem('hp_cookie_accepted', 'true'); cBanner.remove();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
