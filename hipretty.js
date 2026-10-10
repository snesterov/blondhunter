/**
 * HIPRETTY LUXURY ENGINE v2.0
 * Delivery: GitHub (snesterov/blondhunter) via jsDelivr CDN
 * High-Converting Landing for hipretty.ru/sale
 */

(function() {
  if (!document.getElementById('hp-fonts')) {
    var fontLink = document.createElement('link');
    fontLink.id = 'hp-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);
  }

  if (!document.getElementById('hp-styles')) {
    var st = document.createElement('style');
    st.id = 'hp-styles';
    st.textContent = `
      :root {
        --hp-gold: #c6a355;
        --hp-gold-light: #f5e4b8;
        --hp-gold-grad: linear-gradient(135deg, #ECC880 0%, #c6a355 50%, #9e7d32 100%);
        --hp-gold-hover: linear-gradient(135deg, #f7dca3 0%, #d8b76b 50%, #b89342 100%);
        --hp-dark: #111113;
        --hp-dark-card: #19191d;
        --hp-dark-surface: #222227;
        --hp-text: #f5f5f7;
        --hp-text-muted: #a3a3ab;
        --hp-border: rgba(198, 163, 85, 0.28);
        --hp-border-subtle: rgba(255, 255, 255, 0.08);
      }
      * { box-sizing: border-box !important; }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: var(--hp-dark) !important;
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
        background: radial-gradient(circle at 50% 0%, #1f1d18 0%, #111113 70%);
      }
      .hp-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
      }
      .hp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 0;
        border-bottom: 1px solid var(--hp-border-subtle);
      }
      .hp-logo-wrap {
        display: flex;
        flex-direction: column;
        text-decoration: none;
      }
      .hp-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 30px;
        font-weight: 700;
        color: var(--hp-gold-light);
        letter-spacing: 1.5px;
        line-height: 1;
        text-transform: lowercase;
      }
      .hp-logo-sub {
        font-size: 11px;
        color: var(--hp-text-muted);
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 4px;
      }
      .hp-header-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .hp-btn-header-cta {
        background: var(--hp-gold-grad);
        color: #111 !important;
        font-weight: 700;
        font-size: 13px;
        padding: 10px 18px;
        border-radius: 20px;
        text-decoration: none;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 15px rgba(198, 163, 85, 0.3);
      }
      .hp-btn-header-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(198, 163, 85, 0.45);
      }
      .hp-header-phone {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
      .hp-hero { padding: 40px 0 60px; }
      .hp-hero-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 40px;
        align-items: center;
      }
      .hp-badge-live {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(198, 163, 85, 0.12);
        border: 1px solid var(--hp-border);
        color: var(--hp-gold-light);
        padding: 6px 14px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .hp-badge-live span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #10B981;
        box-shadow: 0 0 8px #10B981;
        display: inline-block;
      }
      .hp-hero-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(32px, 4.2vw, 54px);
        font-weight: 700;
        line-height: 1.12;
        margin: 0 0 18px;
        color: #fff;
      }
      .hp-hero-title span {
        background: var(--hp-gold-grad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-hero-desc {
        font-size: 16px;
        line-height: 1.6;
        color: var(--hp-text-muted);
        margin: 0 0 28px;
      }
      .hp-hero-cta-box {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 34px;
      }
      .hp-btn-main {
        background: var(--hp-gold-grad);
        color: #111 !important;
        font-size: 15px;
        font-weight: 700;
        padding: 16px 28px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 6px 25px rgba(198, 163, 85, 0.4);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        border: none;
        transition: transform 0.25s, box-shadow 0.25s;
      }
      .hp-btn-main:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(198, 163, 85, 0.55);
      }
      .hp-btn-max {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--hp-border);
        color: var(--hp-gold-light) !important;
        font-size: 14px;
        font-weight: 600;
        padding: 15px 24px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
      }
      .hp-btn-max:hover {
        background: rgba(198, 163, 85, 0.15);
        transform: translateY(-2px);
      }
      .hp-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        padding-top: 24px;
        border-top: 1px solid var(--hp-border-subtle);
      }
      .hp-stat-val {
        font-family: 'Cormorant Garamond', serif;
        font-size: 34px;
        font-weight: 700;
        color: var(--hp-gold-light);
        line-height: 1;
      }
      .hp-stat-lbl {
        font-size: 12px;
        color: var(--hp-text-muted);
        margin-top: 6px;
        line-height: 1.35;
      }
      .hp-hero-image-wrap {
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid var(--hp-border);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        background: #1a1a20;
      }
      .hp-hero-img {
        width: 100%;
        height: 520px;
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;
      }
      .hp-hero-image-wrap:hover .hp-hero-img { transform: scale(1.03); }
      .hp-hero-img-badge {
        position: absolute;
        bottom: 16px;
        left: 16px;
        right: 16px;
        background: rgba(17, 17, 19, 0.9);
        backdrop-filter: blur(12px);
        border: 1px solid var(--hp-border);
        border-radius: 16px;
        padding: 12px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .hp-hero-img-badge-text { font-size: 12px; font-weight: 600; color: #fff; }
      .hp-hero-img-badge-sub { font-size: 11px; color: var(--hp-gold-light); }
      .hp-lead-section {
        padding: 60px 0;
        background: rgba(25, 25, 29, 0.7);
        border-top: 1px solid var(--hp-border-subtle);
        border-bottom: 1px solid var(--hp-border-subtle);
      }
      .hp-lead-box {
        max-width: 680px;
        margin: 0 auto;
        background: var(--hp-dark-card);
        border: 1px solid var(--hp-border);
        border-radius: 24px;
        padding: 36px 32px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        text-align: center;
      }
      .hp-lead-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 10px;
        line-height: 1.2;
      }
      .hp-lead-subtitle {
        font-size: 14px;
        color: var(--hp-text-muted);
        margin: 0 0 26px;
      }
      .hp-method-selector {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 20px;
      }
      .hp-method-btn {
        background: var(--hp-dark-surface);
        border: 1px solid var(--hp-border-subtle);
        color: var(--hp-text-muted);
        padding: 12px 8px;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .hp-method-btn.active {
        background: rgba(198, 163, 85, 0.15);
        border-color: var(--hp-gold);
        color: #fff;
      }
      .hp-method-btn.active.max {
        border-color: #2196F3;
        background: rgba(33, 150, 243, 0.18);
        color: #64B5F6;
      }
      .hp-input-group { margin-bottom: 14px; text-align: left; }
      .hp-input {
        width: 100%;
        background: var(--hp-dark-surface);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 14px;
        padding: 14px 18px;
        color: #fff;
        font-size: 15px;
        outline: none;
        transition: border-color 0.2s;
        font-family: 'Montserrat', sans-serif;
      }
      .hp-input:focus { border-color: var(--hp-gold); }
      .hp-input-hint { font-size: 11px; color: #888; margin-top: 6px; line-height: 1.4; }
      .hp-form-submit {
        width: 100%;
        background: var(--hp-gold-grad);
        color: #111;
        font-size: 15px;
        font-weight: 700;
        padding: 16px;
        border-radius: 14px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        box-shadow: 0 4px 20px rgba(198, 163, 85, 0.4);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .hp-form-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(198, 163, 85, 0.6);
      }
      .hp-form-policy { font-size: 11px; color: #777; margin-top: 12px; }
      .hp-form-policy a { color: #aaa; text-decoration: underline; cursor: pointer; }
      .hp-quiz-section { padding: 60px 0; }
      .hp-sec-head { text-align: center; max-width: 600px; margin: 0 auto 36px; }
      .hp-sec-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(28px, 3.5vw, 42px);
        color: #fff;
        margin: 0 0 10px;
      }
      .hp-sec-desc { font-size: 14px; color: var(--hp-text-muted); }
      .hp-quiz-card {
        background: var(--hp-dark-card);
        border: 1px solid var(--hp-border);
        border-radius: 20px;
        padding: 28px;
        max-width: 800px;
        margin: 0 auto;
      }
      .hp-quiz-step-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--hp-gold-light);
        margin-bottom: 14px;
      }
      .hp-quiz-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-bottom: 24px;
      }
      .hp-quiz-opt {
        background: var(--hp-dark-surface);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 12px;
        padding: 16px 10px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
      }
      .hp-quiz-opt:hover { border-color: var(--hp-border); }
      .hp-quiz-opt.selected {
        background: rgba(198, 163, 85, 0.18);
        border-color: var(--hp-gold);
        color: #fff;
      }
      .hp-quiz-opt-val { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
      .hp-quiz-opt-desc { font-size: 11px; color: var(--hp-text-muted); }
      .hp-catalog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
      }
      .hp-cut-card {
        background: var(--hp-dark-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 18px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s, border-color 0.25s;
      }
      .hp-cut-card:hover { transform: translateY(-4px); border-color: var(--hp-gold); }
      .hp-cut-img-wrap { position: relative; height: 240px; background: #111; overflow: hidden; }
      .hp-cut-img { width: 100%; height: 100%; object-fit: cover; }
      .hp-cut-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(16, 185, 129, 0.2);
        border: 1px solid rgba(16, 185, 129, 0.4);
        color: #10B981;
        font-size: 11px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 20px;
      }
      .hp-cut-info {
        padding: 18px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .hp-cut-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 6px;
      }
      .hp-cut-desc {
        font-size: 12px;
        color: var(--hp-text-muted);
        line-height: 1.5;
        margin-bottom: 16px;
        flex-grow: 1;
      }
      .hp-cut-btn {
        width: 100%;
        background: var(--hp-gold-grad);
        color: #111;
        font-size: 13px;
        font-weight: 700;
        padding: 12px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: none;
      }
      .hp-footer {
        padding: 40px 0 80px;
        border-top: 1px solid var(--hp-border-subtle);
        font-size: 12px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        text-align: center;
      }
      .hp-footer-links {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 14px;
        flex-wrap: wrap;
      }
      .hp-footer-link { color: var(--hp-gold-light); text-decoration: underline; cursor: pointer; }
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
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2) !important;
        transition: all 0.25s ease !important;
      }
      #hp-btn-top:hover {
        background: var(--hp-gold) !important;
        color: #ffffff !important;
        transform: translateY(-2px);
      }
      #hp-btn-top svg { width: 18px; height: 18px; fill: currentColor; }
      #hp-widget-lead {
        position: fixed !important;
        bottom: 14px !important;
        right: 14px !important;
        z-index: 9998 !important;
      }
      .hp-widget-pulse-btn {
        background: var(--hp-gold-grad) !important;
        color: #111 !important;
        border: none !important;
        border-radius: 25px !important;
        padding: 12px 18px !important;
        font-size: 13px !important;
        font-weight: 700 !important;
        box-shadow: 0 6px 20px rgba(198, 163, 85, 0.45) !important;
        cursor: pointer !important;
        text-decoration: none !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        transition: transform 0.2s ease !important;
        animation: hp-glow 2.5s infinite alternate;
      }
      @keyframes hp-glow {
        0% { box-shadow: 0 4px 15px rgba(198, 163, 85, 0.35); }
        100% { box-shadow: 0 8px 28px rgba(198, 163, 85, 0.7); }
      }
      .hp-widget-pulse-btn:hover { transform: scale(1.04) !important; }
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
      .hp-cookie-btns { display: flex; gap: 8px; }
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
      #hp-legal-modal {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(6px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 100000;
        padding: 16px;
      }
      .hp-legal-box {
        background: #18181c;
        border: 1px solid var(--hp-border);
        color: #ddd;
        max-width: 650px;
        max-height: 85vh;
        overflow-y: auto;
        padding: 28px;
        border-radius: 20px;
        position: relative;
        font-size: 13px;
        line-height: 1.6;
      }
      .hp-legal-close {
        position: absolute;
        top: 14px;
        right: 14px;
        background: none;
        border: none;
        color: #fff;
        font-size: 22px;
        cursor: pointer;
      }
      @media (max-width: 860px) {
        .hp-hero-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: center;
        }
        .hp-hero-cta-box { justify-content: center; }
        .hp-hero-image-wrap { width: 100%; max-width: 380px; margin: 0 auto; }
        .hp-hero-img { height: 380px; }
        .hp-quiz-options { grid-template-columns: 1fr; }
        .hp-method-selector { grid-template-columns: 1fr; }
      }
    `;
    document.head.appendChild(st);
  }

  var html = `
<div id="hp-app">
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

  <section class="hp-container hp-hero">
    <div class="hp-hero-grid">
      <div class="hp-hero-info">
        <div class="hp-badge-live"><span></span> \u0411\u043e\u043b\u0435\u0435 30 \u043a\u0433 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0432 \u0441\u0442\u0443\u0434\u0438\u0438</div>
        <h1 class="hp-hero-title">\u041e\u0442\u0431\u043e\u0440\u043d\u044b\u0435 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u043b\u043e\u0441\u044b <span>\u0432\u044b\u0441\u0448\u0435\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438</span></h1>
        <p class="hp-hero-desc">\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0435 \u0438 \u0434\u0435\u0442\u0441\u043a\u0438\u0435 \u0441\u0440\u0435\u0437\u044b \u043e\u0442 40 \u0434\u043e 80 \u0441\u043c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441\u043e \u0441\u0442\u0443\u0434\u0438\u0438 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435. 100% \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u043b\u043e\u0441 \u0431\u0435\u0437 \u0432\u044b\u0447\u0435\u0441\u0430, \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u043e\u0432 \u0438 \u043f\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u044b\u0448\u0435\u0439. \u0412\u0438\u0434\u0435\u043e-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0440\u0435\u0437\u0430 \u043d\u0430 \u0432\u0435\u0441\u0430\u0445 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439.</p>
        <div class="hp-hero-cta-box">
          <a href="#lead-box" class="hp-btn-main">\u2726 \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0440\u0435\u0437</a>
          <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="hp-btn-max">\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 MAX (\u0431\u0435\u0437 VPN)</a>
        </div>
        <div class="hp-stats">
          <div><div class="hp-stat-val">&gt;30 \u043a\u0433</div><div class="hp-stat-lbl">\u0416\u0438\u0432\u043e\u0433\u043e \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435</div></div>
          <div><div class="hp-stat-val">40\u201380 \u0441\u043c</div><div class="hp-stat-lbl">\u0414\u043b\u0438\u043d\u044b \u0441\u043b\u0430\u0432\u044f\u043d\u0441\u043a\u0438\u0445 \u0441\u0440\u0435\u0437\u043e\u0432</div></div>
          <div><div class="hp-stat-val">100%</div><div class="hp-stat-lbl">\u041f\u043b\u043e\u0442\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u044b, \u0431\u0435\u0437 \u0441\u0438\u043b\u0438\u043a\u043e\u043d\u0430</div></div>
        </div>
      </div>
      <div class="hp-hero-image-wrap">
        <img src="https://static.tildacdn.com/tild6532-6566-4133-b335-336432383935/IMG_0159.jpg" alt="\u0412\u0438\u0442\u0440\u0438\u043d\u0430 \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441 hi, pretty!" class="hp-hero-img" loading="eager">
        <div class="hp-hero-img-badge">
          <div>
            <div class="hp-hero-img-badge-text">\u0421\u0442\u0443\u0434\u0438\u0439\u043d\u044b\u0439 \u0441\u043a\u043b\u0430\u0434 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435</div>
            <div class="hp-hero-img-badge-sub">\u041f\u0440\u044f\u043c\u043e\u0439 \u044d\u0444\u0438\u0440 \u0441 \u0432\u0438\u0442\u0440\u0438\u043d\u044b \u0441\u0440\u0435\u0437\u043e\u0432</div>
          </div>
          <span style="color:#10B981;font-weight:700;font-size:12px;">\u25cf \u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438</span>
        </div>
      </div>
    </div>
  </section>

  <!-- \u0421\u0415\u0420\u0414\u0426\u0415\u0412\u0418\u041d\u041d\u042b\u0419 \u0411\u041b\u041e\u041a \u0417\u0410\u042f\u0412\u041a\u0418 (99% \u0421\u0422\u0410\u0412\u041a\u0410 \u041d\u0410 \u041a\u041e\u041d\u0412\u0415\u0420\u0421\u0418\u042e) -->
  <section id="lead-box" class="hp-lead-section">
    <div class="hp-container">
      <div class="hp-lead-box">
        <h2 class="hp-lead-title">\u041c\u0435\u0447\u0442\u0430\u0435\u0442\u0435 \u043e \u0440\u043e\u0441\u043a\u043e\u0448\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441\u0430\u0445?</h2>
        <p class="hp-lead-subtitle">\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u2014 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0441\u0442\u0435\u0440 \u043f\u043e\u0434\u0431\u0435\u0440\u0435\u0442 \u0441\u0440\u0435\u0437 \u043f\u043e\u0434 \u0432\u0430\u0448 \u0442\u043e\u043d \u0438 \u043f\u0440\u0438\u0448\u043b\u0435\u0442 \u0432\u0438\u0434\u0435\u043e \u0441 \u0432\u0435\u0441\u043e\u0432.</p>
        
        <div class="hp-method-selector">
          <button type="button" class="hp-method-btn active max" data-m="max">
            <span>\u25cf</span> \u0412 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440 MAX
          </button>
          <button type="button" class="hp-method-btn" data-m="tg">
            <span>\u25cf</span> Telegram
          </button>
          <button type="button" class="hp-method-btn" data-m="phone">
            <span>\u25cf</span> \u041f\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443
          </button>
        </div>

        <form id="hp-lead-form">
          <div class="hp-input-group">
            <input type="text" id="hp-user-name" class="hp-input" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043c\u044f" required>
          </div>
          <div class="hp-input-group">
            <input type="text" id="hp-user-contact" class="hp-input" placeholder="\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d" required>
            <div id="hp-contact-hint" class="hp-input-hint">\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0432\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.</div>
          </div>
          <button type="submit" id="hp-submit-btn" class="hp-form-submit">\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0431\u043e\u0440 \u0438 \u0431\u0440\u043e\u043d\u044c \u0441\u0440\u0435\u0437\u0430 \u2726</button>
          <div class="hp-form-policy">
            \u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 <a id="hp-open-policy">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</a> (152-\u0424\u0417).
          </div>
          <div id="hp-form-success" style="display:none;margin-top:16px;color:#10B981;font-weight:700;font-size:15px;">
            \u2713 \u0417\u0430\u044f\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u0430! \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u0438\u0442 \u0432\u0438\u0434\u0435\u043e\u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0443 \u0441\u0440\u0435\u0437\u043e\u0432.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- \u0418\u041d\u0422\u0415\u0420\u0410\u041a\u0422\u0418\u0412\u041d\u042b\u0419 \u041f\u041e\u0414\u0411\u041e\u0420 \u0421\u0420\u0415\u0417\u0410 -->
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

  <!-- \u041a\u0410\u0422\u0410\u041b\u041e\u0413 \u0421\u0412\u0415\u0416\u0418\u0425 \u0421\u0420\u0415\u0417\u041e\u0412 -->
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

  <!-- \u041f\u041e\u0414\u0412\u0410\u041b \u0418 \u042e\u0420\u0418\u0414\u0418\u0427\u0415\u0421\u041a\u0418\u0419 \u0411\u041b\u041e\u041a -->
  <footer class="hp-container hp-footer">
    <div class="hp-footer-links">
      <span id="hp-footer-policy" class="hp-footer-link">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</span>
      <span>\u2022</span>
      <span id="hp-footer-consent" class="hp-footer-link">\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 (152-\u0424\u0417)</span>
    </div>
    <div>\u0418\u041f \u041a\u0430\u043c\u0435\u043d\u0435\u0432\u0430 \u2022 \u0418\u041d\u041d: 100201988457 \u2022 \u041e\u0413\u0420\u041d\u0418\u041f: 323774600090577</div>
    <div style="margin-top:6px;">\u0421\u0442\u0443\u0434\u0438\u044f \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441 hi, pretty! \u041c\u043e\u0441\u043a\u0432\u0430 \u2022 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u0439 \u0420\u043e\u0441\u0441\u0438\u0438</div>
  </footer>
</div>

<div id="hp-legal-modal">
  <div class="hp-legal-box">
    <button type="button" class="hp-legal-close">&times;</button>
    <h3 style="margin-top:0;color:#c6a355;">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 152-\u0424\u0417</h3>
    <p>\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u044f \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0418\u041f \u041a\u0430\u043c\u0435\u043d\u0435\u0432\u0430 (\u0418\u041d\u041d 100201988457, \u041e\u0413\u0420\u041d\u0418\u041f 323774600090577) \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0438\u043c\u044f, \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u043d\u0438\u043a\u043d\u0435\u0439\u043c/\u0441\u0441\u044b\u043b\u043a\u0430 \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435 MAX \u0438\u043b\u0438 Telegram) \u0432 \u0446\u0435\u043b\u044f\u0445 \u043f\u043e\u0434\u0431\u043e\u0440\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438, \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432.</p>
    <p>\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0442\u0440\u0435\u0442\u044c\u0438\u043c \u043b\u0438\u0446\u0430\u043c \u0431\u0435\u0437 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u0424.</p>
  </div>
</div>
`;

  function mount() {
    var existingApp = document.getElementById('hp-app');
    if (existingApp) existingApp.remove();

    var temp = document.createElement('div');
    temp.innerHTML = html;
    var appNode = temp.firstElementChild;
    var modalNode = temp.lastElementChild;

    document.body.prepend(appNode);
    document.body.appendChild(modalNode);

    var methodBtns = document.querySelectorAll('.hp-method-btn');
    var contactInput = document.getElementById('hp-user-contact');
    var contactHint = document.getElementById('hp-contact-hint');

    methodBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        methodBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        var m = b.getAttribute('data-m');
        if (m === 'max') {
          contactInput.placeholder = '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d';
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0432\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.';
        } else if (m === 'tg') {
          contactInput.placeholder = '\u041d\u0438\u043a\u043d\u0435\u0439\u043c \u0432 Telegram (@username) \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d';
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0438\u043a\u043d\u0435\u0439\u043c \u0432 Telegram \u0447\u0435\u0440\u0435\u0437 @ \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430.';
        } else {
          contactInput.placeholder = '+7 (999) 000-00-00';
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u043b\u044f \u0437\u0432\u043e\u043d\u043a\u0430 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430.';
        }
      });
    });

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

    var leadForm = document.getElementById('hp-lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('hp-user-name').value;
        var contact = document.getElementById('hp-user-contact').value;

        if (typeof window.ym === 'function') {
          window.ym(90792799, 'reachGoal', 'submitted');
          window.ym(90792799, 'reachGoal', 'gamelead_send');
        }

        var tildaForm = document.querySelector('form[name*="form"], form.t-form');
        if (tildaForm) {
          var tName = tildaForm.querySelector('input[name="Name"]');
          if (tName) tName.value = name;
          var tContact = tildaForm.querySelector('input[name="Phone"], input[type="tel"], input[name="messenger-id"]');
          if (tContact) tContact.value = contact;
        }

        document.getElementById('hp-form-success').style.display = 'block';
        document.getElementById('hp-submit-btn').textContent = '\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u2713';
        document.getElementById('hp-submit-btn').disabled = true;
      });
    }

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

  if (!document.getElementById('hp-btn-top')) {
    var topBtn = document.createElement('button');
    topBtn.id = 'hp-btn-top';
    topBtn.title = '\u041d\u0430\u0432\u0435\u0440\u0445';
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
    leadWidget.innerHTML = '<a href="#lead-box" class="hp-widget-pulse-btn"><span>\u2726</span> \u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u0441\u0440\u0435\u0437</a>';
    document.body.appendChild(leadWidget);
  }

  if (!localStorage.getItem('hp_cookie_accepted') && !document.getElementById('hp-cookie-banner')) {
    var cBanner = document.createElement('div');
    cBanner.id = 'hp-cookie-banner';
    cBanner.innerHTML = `
      <div>\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c cookie \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u0441\u0430\u0439\u0442\u0430 (\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0435\u0442\u0440\u0438\u043a\u0430). \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044f, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439.</div>
      <div class="hp-cookie-btns">
        <button id="hp-cookie-accept" class="hp-cookie-btn-accept">\u041f\u0440\u0438\u043d\u044f\u0442\u044c</button>
        <button id="hp-cookie-setup" class="hp-cookie-btn-opt">\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c</button>
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();