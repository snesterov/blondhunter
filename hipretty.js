(function() {
  if (!document.getElementById('hp-fonts')) {
    var f = document.createElement('link');
    f.id = 'hp-fonts';
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap';
    document.head.appendChild(f);
  }

  if (!document.getElementById('hp-styles')) {
    var s = document.createElement('style');
    s.id = 'hp-styles';
    s.textContent = `
      #rec1930057121, #t-footer, .t972 { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }
      :root {
        --hp-gold: #c6a355;
        --hp-gold-grad: linear-gradient(135deg, #ECC880 0%, #c6a355 50%, #9e7d32 100%);
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
        margin: 0 !important; padding: 0 !important;
        background-color: var(--hp-dark) !important;
        color: var(--hp-text) !important;
        font-family: 'Montserrat', sans-serif !important;
        overflow-x: hidden !important; width: 100% !important; max-width: 100vw !important;
        -webkit-font-smoothing: antialiased;
      }
      #hp-app {
        width: 100%; max-width: 100vw; overflow-x: hidden;
        background: radial-gradient(circle at 50% 0%, #1f1d18 0%, #111113 70%);
      }
      .hp-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 16px; }
      .hp-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 18px 0; border-bottom: 1px solid var(--hp-border-subtle);
      }
      .hp-logo {
        font-family: 'Cormorant Garamond', serif; font-size: 30px; font-weight: 700;
        color: #f5e4b8; letter-spacing: 1.5px; line-height: 1; text-transform: lowercase;
      }
      .hp-logo-sub { font-size: 11px; color: var(--hp-text-muted); letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }
      .hp-header-actions { display: flex; align-items: center; gap: 12px; }
      .hp-btn-header-cta {
        background: var(--hp-gold-grad); color: #111 !important; font-weight: 700;
        font-size: 13px; padding: 10px 18px; border-radius: 20px; text-decoration: none;
      }
      .hp-header-phone { color: #fff; text-decoration: none; font-size: 14px; font-weight: 600; }
      .hp-hero { padding: 40px 0 60px; }
      .hp-hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 40px; align-items: center; }
      .hp-badge-live {
        display: inline-flex; align-items: center; gap: 8px;
        background: rgba(198, 163, 85, 0.12); border: 1px solid var(--hp-border);
        color: #f5e4b8; padding: 6px 14px; border-radius: 30px; font-size: 12px;
        font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px;
      }
      .hp-badge-live span { width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block; }
      .hp-hero-title {
        font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4.2vw, 54px);
        font-weight: 700; line-height: 1.12; margin: 0 0 18px; color: #fff;
      }
      .hp-hero-title span { background: var(--hp-gold-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .hp-hero-desc { font-size: 16px; line-height: 1.6; color: var(--hp-text-muted); margin: 0 0 28px; }
      .hp-hero-cta-box { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 34px; }
      .hp-btn-main {
        background: var(--hp-gold-grad); color: #111 !important; font-size: 15px;
        font-weight: 700; padding: 16px 28px; border-radius: 30px; text-decoration: none;
        box-shadow: 0 6px 25px rgba(198, 163, 85, 0.4); display: inline-flex; align-items: center; gap: 8px;
      }
      .hp-btn-max {
        background: rgba(33, 150, 243, 0.12); border: 1px solid rgba(33, 150, 243, 0.4);
        color: #90CAF9 !important; font-size: 14px; font-weight: 600; padding: 15px 22px;
        border-radius: 30px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
      }
      .hp-btn-wa-soft {
        background: rgba(37, 211, 102, 0.08); border: 1px solid rgba(37, 211, 102, 0.3);
        color: #69F0AE !important; font-size: 13px; font-weight: 600; padding: 15px 18px;
        border-radius: 30px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
      }
      .hp-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding-top: 24px; border-top: 1px solid var(--hp-border-subtle); }
      .hp-stat-val { font-family: 'Cormorant Garamond', serif; font-size: 34px; font-weight: 700; color: #f5e4b8; line-height: 1; }
      .hp-stat-lbl { font-size: 12px; color: var(--hp-text-muted); margin-top: 6px; }
      .hp-hero-image-wrap {
        position: relative; border-radius: 24px; overflow: hidden;
        border: 1px solid var(--hp-border); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6); background: #1a1a20;
      }
      .hp-hero-img { width: 100%; height: 520px; object-fit: cover; display: block; }
      .hp-hero-img-badge {
        position: absolute; bottom: 16px; left: 16px; right: 16px;
        background: rgba(17, 17, 19, 0.9); backdrop-filter: blur(12px);
        border: 1px solid var(--hp-border); border-radius: 16px; padding: 12px 16px;
        display: flex; justify-content: space-between; align-items: center;
      }
      .hp-lead-section {
        padding: 60px 0; background: rgba(25, 25, 29, 0.7);
        border-top: 1px solid var(--hp-border-subtle); border-bottom: 1px solid var(--hp-border-subtle);
      }
      .hp-lead-box {
        max-width: 720px; margin: 0 auto; background: var(--hp-dark-card);
        border: 1px solid var(--hp-border); border-radius: 24px; padding: 36px 32px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); text-align: center;
      }
      .hp-lead-title { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 700; color: #fff; margin: 0 0 10px; }
      .hp-lead-subtitle { font-size: 14px; color: var(--hp-text-muted); margin: 0 0 26px; }
      .hp-method-selector { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 20px; }
      .hp-method-btn {
        background: var(--hp-dark-surface); border: 1px solid var(--hp-border-subtle);
        color: var(--hp-text-muted); padding: 12px 6px; border-radius: 12px; font-size: 12px;
        font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px;
      }
      .hp-method-btn.active.max { border-color: #2196F3; background: rgba(33, 150, 243, 0.2); color: #90CAF9; }
      .hp-method-btn.active.tg { border-color: #03A9F4; background: rgba(3, 169, 244, 0.2); color: #81D4FA; }
      .hp-method-btn.active.wa { border-color: #25D366; background: rgba(37, 211, 102, 0.2); color: #A5D6A7; }
      .hp-method-btn.active.phone { border-color: var(--hp-gold); background: rgba(198, 163, 85, 0.15); color: #fff; }
      .hp-input-group { margin-bottom: 14px; text-align: left; }
      .hp-input {
        width: 100%; background: var(--hp-dark-surface); border: 1px solid var(--hp-border-subtle);
        border-radius: 14px; padding: 14px 18px; color: #fff; font-size: 15px; outline: none;
        font-family: 'Montserrat', sans-serif;
      }
      .hp-input:focus { border-color: var(--hp-gold); }
      .hp-input-hint { font-size: 11px; color: #888; margin-top: 6px; }
      .hp-form-submit {
        width: 100%; background: var(--hp-gold-grad); color: #111; font-size: 15px;
        font-weight: 700; padding: 16px; border-radius: 14px; border: none; cursor: pointer;
        margin-top: 10px; box-shadow: 0 4px 20px rgba(198, 163, 85, 0.4);
      }
      .hp-form-policy { font-size: 11px; color: #777; margin-top: 12px; }
      .hp-form-policy a { color: #aaa; text-decoration: underline; cursor: pointer; }
      .hp-quiz-section { padding: 60px 0; }
      .hp-sec-head { text-align: center; max-width: 600px; margin: 0 auto 36px; }
      .hp-sec-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(28px, 3.5vw, 42px); color: #fff; margin: 0 0 10px; }
      .hp-sec-desc { font-size: 14px; color: var(--hp-text-muted); }
      .hp-quiz-card { background: var(--hp-dark-card); border: 1px solid var(--hp-border); border-radius: 20px; padding: 28px; max-width: 800px; margin: 0 auto; }
      .hp-quiz-step-title { font-size: 16px; font-weight: 600; color: #f5e4b8; margin-bottom: 14px; }
      .hp-quiz-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px; }
      .hp-quiz-opt { background: var(--hp-dark-surface); border: 1px solid var(--hp-border-subtle); border-radius: 12px; padding: 16px 10px; text-align: center; cursor: pointer; }
      .hp-quiz-opt.selected { background: rgba(198, 163, 85, 0.18); border-color: var(--hp-gold); color: #fff; }
      .hp-quiz-opt-val { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
      .hp-quiz-opt-desc { font-size: 11px; color: var(--hp-text-muted); }
      .hp-catalog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
      .hp-cut-card { background: var(--hp-dark-card); border: 1px solid var(--hp-border-subtle); border-radius: 18px; overflow: hidden; display: flex; flex-direction: column; }
      .hp-cut-img-wrap { position: relative; height: 240px; background: #111; overflow: hidden; }
      .hp-cut-img { width: 100%; height: 100%; object-fit: cover; }
      .hp-cut-badge { position: absolute; top: 12px; right: 12px; background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.4); color: #10B981; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
      .hp-cut-info { padding: 18px; flex-grow: 1; display: flex; flex-direction: column; }
      .hp-cut-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: #fff; margin: 0 0 6px; }
      .hp-cut-desc { font-size: 12px; color: var(--hp-text-muted); line-height: 1.5; margin-bottom: 16px; flex-grow: 1; }
      .hp-cut-btn { width: 100%; background: var(--hp-gold-grad); color: #111; font-size: 13px; font-weight: 700; padding: 12px; border-radius: 10px; text-align: center; text-decoration: none; cursor: pointer; border: none; }
      .hp-footer { padding: 40px 0 80px; border-top: 1px solid var(--hp-border-subtle); font-size: 12px; color: var(--hp-text-muted); line-height: 1.6; text-align: center; }
      .hp-footer-links { display: flex; justify-content: center; gap: 16px; margin-bottom: 14px; flex-wrap: wrap; }
      .hp-footer-link { color: #f5e4b8; text-decoration: underline; cursor: pointer; }
      #hp-btn-top {
        position: fixed !important; bottom: 14px !important; left: 14px !important;
        width: 40px !important; height: 40px !important; background: #ffffff !important;
        color: #2b292a !important; border: 1px solid #dcd7cc !important; border-radius: 50% !important;
        display: none; align-items: center; justify-content: center; cursor: pointer; z-index: 9998 !important;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2) !important;
      }
      #hp-btn-top svg { width: 18px; height: 18px; fill: currentColor; }
      #hp-widget-lead { position: fixed !important; bottom: 14px !important; right: 14px !important; z-index: 9998 !important; }
      .hp-widget-pulse-btn {
        background: var(--hp-gold-grad) !important; color: #111 !important; border: none !important;
        border-radius: 25px !important; padding: 12px 18px !important; font-size: 13px !important;
        font-weight: 700 !important; cursor: pointer !important; text-decoration: none !important;
        display: inline-flex !important; align-items: center !important; gap: 8px !important;
        animation: hp-glow 2.5s infinite alternate;
      }
      @keyframes hp-glow { 0% { box-shadow: 0 4px 15px rgba(198, 163, 85, 0.35); } 100% { box-shadow: 0 8px 28px rgba(198, 163, 85, 0.7); } }
      #hp-cookie-banner {
        position: fixed !important; bottom: 0 !important; left: 0 !important; width: 100% !important;
        background: rgba(18, 18, 20, 0.96) !important; backdrop-filter: blur(10px) !important;
        border-top: 1px solid var(--hp-border) !important; padding: 12px 18px !important;
        color: #f5f5f7 !important; font-size: 12px !important; z-index: 99999 !important;
        display: flex; justify-content: space-between; align-items: center; gap: 12px;
      }
      .hp-cookie-btns { display: flex; gap: 8px; }
      .hp-cookie-btn-accept {
        background: var(--hp-gold) !important; color: #121214 !important; border: none !important;
        padding: 7px 14px !important; border-radius: 16px !important; font-size: 12px !important;
        font-weight: 700 !important; cursor: pointer !important;
      }
      .hp-cookie-btn-opt {
        background: transparent !important; color: #bbb !important; border: 1px solid #555 !important;
        padding: 7px 14px !important; border-radius: 16px !important; font-size: 12px !important;
        cursor: pointer !important;
      }
      #hp-legal-modal {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(6px); display: none; align-items: center; justify-content: center;
        z-index: 100000; padding: 16px;
      }
      .hp-legal-box {
        background: #18181c; border: 1px solid var(--hp-border); color: #ddd; max-width: 650px;
        max-height: 85vh; overflow-y: auto; padding: 28px; border-radius: 20px; position: relative;
        font-size: 13px; line-height: 1.6;
      }
      .hp-legal-close { position: absolute; top: 14px; right: 14px; background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; }
      @media (max-width: 860px) {
        .hp-hero-grid { display: flex; flex-direction: column; gap: 28px; text-align: center; }
        .hp-hero-cta-box { justify-content: center; }
        .hp-hero-image-wrap { width: 100%; max-width: 380px; margin: 0 auto; }
        .hp-hero-img { height: 380px; }
        .hp-quiz-options { grid-template-columns: 1fr; }
        .hp-method-selector { grid-template-columns: repeat(2, 1fr); }
      }
    `;
    document.head.appendChild(s);
  }

  var html = `
<div id="hp-app">
  <header class="hp-container hp-header">
    <a href="https://hipretty.ru" class="hp-logo-wrap" style="text-decoration:none;">
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
          <a href="https://wa.me/79933365357?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E." target="_blank" rel="noopener" class="hp-btn-wa-soft">WhatsApp</a>
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

  
  <section id="lead-box" class="hp-lead-section">
    <div class="hp-container">
      <div class="hp-lead-box">
        <h2 class="hp-lead-title">\u041c\u0435\u0447\u0442\u0430\u0435\u0442\u0435 \u043e \u0440\u043e\u0441\u043a\u043e\u0448\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441\u0430\u0445?</h2>
        <p class="hp-lead-subtitle">\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u2014 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0441\u0442\u0435\u0440 \u043f\u043e\u0434\u0431\u0435\u0440\u0435\u0442 \u0441\u0440\u0435\u0437 \u043f\u043e\u0434 \u0432\u0430\u0448 \u0442\u043e\u043d \u0438 \u043f\u0440\u0438\u0448\u043b\u0435\u0442 \u0432\u0438\u0434\u0435\u043e \u0441 \u0432\u0435\u0441\u043e\u0432.</p>
        
        <div class="hp-method-selector">
          <button type="button" class="hp-method-btn active max" data-m="max">
            <span>\u25cf</span> MAX (\u0411\u0435\u0437 VPN)
          </button>
          <button type="button" class="hp-method-btn tg" data-m="tg">
            <span>\u25cf</span> Telegram
          </button>
          <button type="button" class="hp-method-btn wa" data-m="wa">
            <span>\u25cf</span> WhatsApp
          </button>
          <button type="button" class="hp-method-btn phone" data-m="phone">
            <span>\u25cf</span> \u0422\u0435\u043b\u0435\u0444\u043e\u043d
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

  
  <footer class="hp-container hp-footer">
    <div class="hp-footer-links">
      <span id="hp-footer-policy" class="hp-footer-link">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</span>
      <span>\u2022</span>
      <span id="hp-footer-consent" class="hp-footer-link">\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 (152-\u0424\u0417)</span>
    </div>
    <div style="margin-bottom:8px;">
      \u041f\u0440\u044f\u043c\u0430\u044f \u0441\u0432\u044f\u0437\u044c:
      <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" style="color:#f5e4b8;margin:0 6px;">MAX</a> |
      <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:#f5e4b8;margin:0 6px;">Telegram</a> |
      <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:#f5e4b8;margin:0 6px;">WhatsApp</a> |
      <a href="tel:+79933365357" style="color:#f5e4b8;margin:0 6px;">8 (993) 336-53-57</a>
    </div>
    <div>\u0418\u041f \u041a\u0430\u043c\u0435\u043d\u0435\u0432\u0430 \u2022 \u0418\u041d\u041d: 100201988457 \u2022 \u041e\u0413\u0420\u041d\u0418\u041f: 323774600090577</div>
    <div style="margin-top:4px;">\u0421\u0442\u0443\u0434\u0438\u044f \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u043e\u043b\u043e\u0441 hi, pretty! \u041c\u043e\u0441\u043a\u0432\u0430 \u2022 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u0439 \u0420\u043e\u0441\u0441\u0438\u0438</div>
  </footer>
</div>

<div id="hp-legal-modal">
  <div class="hp-legal-box">
    <button type="button" class="hp-legal-close">&times;</button>
    <h3 style="margin-top:0;color:#c6a355;">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 152-\u0424\u0417</h3>
    <p>\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u044f \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0418\u041f \u041a\u0430\u043c\u0435\u043d\u0435\u0432\u0430 (\u0418\u041d\u041d 100201988457, \u041e\u0413\u0420\u041d\u0418\u041f 323774600090577) \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0438\u043c\u044f, \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u043d\u0438\u043a\u043d\u0435\u0439\u043c/\u0441\u0441\u044b\u043b\u043a\u0430 \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435 MAX, Telegram \u0438\u043b\u0438 WhatsApp) \u0432 \u0446\u0435\u043b\u044f\u0445 \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438, \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u0424.</p>
  </div>
</div>
`;

  function mount() {

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
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432 MAX \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.';
        } else if (m === 'tg') {
          contactInput.placeholder = '\u041d\u0438\u043a\u043d\u0435\u0439\u043c \u0432 Telegram (@username) \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d';
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0438\u043a \u0432 Telegram \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d.';
        } else if (m === 'wa') {
          contactInput.placeholder = '+7 (999) 000-00-00 (WhatsApp)';
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 WhatsApp.';
        } else {
          contactInput.placeholder = '+7 (999) 000-00-00';
          contactHint.textContent = '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u043b\u044f \u0437\u0432\u043e\u043d\u043a\u0430.';
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
      topBtn.style.display = window.scrollY > 350 ? 'flex' : 'none';
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
