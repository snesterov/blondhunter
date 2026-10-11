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
      #allrecords > .r:not(#rec4673156001):not(#rec1915062531):not(#rec1935129061),
      #allrecords > div.r:not(#rec4673156001):not(#rec1915062531):not(#rec1935129061),
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

      :root {
        --hp-bg: #0e0915;
        --hp-bg-card: rgba(25, 17, 38, 0.82);
        --hp-bg-card-hover: rgba(36, 24, 54, 0.95);
        --hp-rose: #f472b6;
        --hp-rose-light: #fce7f3;
        --hp-champagne: #edd8be;
        --hp-grad-text: linear-gradient(135deg, #ffffff 0%, #fce7f3 50%, #f472b6 100%);
        --hp-grad-btn: linear-gradient(135deg, #fbcfe8 0%, #f472b6 50%, #db2777 100%);
        --hp-text: #fdfafd;
        --hp-text-muted: #b8acc7;
        --hp-border: rgba(244, 114, 182, 0.25);
        --hp-border-active: rgba(244, 114, 182, 0.55);
      }

      * { box-sizing: border-box !important; }

      html, body {
        margin: 0 !important; padding: 0 !important;
        background-color: var(--hp-bg) !important;
        color: var(--hp-text) !important;
        font-family: 'Montserrat', sans-serif !important;
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
      }

      #hp-app {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        background: radial-gradient(circle at 50% -5%, #2a1238 0%, #120a1d 45%, #08050e 100%);
        position: relative;
        z-index: 10;
      }

      .hp-container {
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* ХЕДЕР */
      .hp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 0;
        border-bottom: 1px solid var(--hp-border);
        position: sticky;
        top: 0;
        background: rgba(14, 9, 21, 0.94);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        z-index: 100;
      }
      .hp-logo-wrap { text-decoration: none; display: flex; flex-direction: column; }
      .hp-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 1.5px;
        line-height: 1;
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-logo-sub {
        font-size: 11px;
        color: var(--hp-rose);
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-top: 5px;
        font-weight: 600;
      }
      .hp-nav-links { display: flex; align-items: center; gap: 24px; }
      .hp-nav-link {
        color: #dcd0ea;
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        transition: color 0.2s ease;
      }
      .hp-nav-link:hover { color: var(--hp-rose); }
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
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        font-weight: 700;
        font-size: 13px;
        padding: 11px 22px;
        border-radius: 25px;
        text-decoration: none;
        box-shadow: 0 4px 18px rgba(244, 114, 182, 0.4);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .hp-btn-header-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 26px rgba(244, 114, 182, 0.6);
      }

      /* ГЛАВНЫЙ ЭКРАН (HERO) */
      .hp-hero { padding: 46px 0 70px; position: relative; }
      .hp-hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 44px;
        align-items: center;
      }
      .hp-badge-geo {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(244, 114, 182, 0.12);
        border: 1px solid var(--hp-border-active);
        color: #fce7f3;
        padding: 8px 18px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 22px;
      }
      .hp-badge-geo span {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #10B981;
        display: inline-block;
        box-shadow: 0 0 10px #10B981;
      }
      .hp-hero-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(34px, 4.3vw, 56px);
        font-weight: 700;
        line-height: 1.12;
        margin: 0 0 20px;
        color: #ffffff;
      }
      .hp-hero-title span {
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-hero-desc {
        font-size: 16px;
        line-height: 1.65;
        color: var(--hp-text-muted);
        margin: 0 0 34px;
      }
      .hp-hero-cta-box {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-bottom: 38px;
      }
      .hp-btn-main {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        font-size: 15px;
        font-weight: 700;
        padding: 16px 32px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 8px 30px rgba(244, 114, 182, 0.45);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        border: none;
      }
      .hp-btn-main:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 36px rgba(244, 114, 182, 0.65);
      }
      .hp-btn-tg-main {
        background: rgba(0, 136, 204, 0.16);
        border: 1px solid rgba(0, 136, 204, 0.5);
        color: #81D4FA !important;
        font-size: 14.5px;
        font-weight: 600;
        padding: 16px 24px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
      }
      .hp-btn-tg-main:hover {
        background: rgba(0, 136, 204, 0.28);
        border-color: #0088cc;
      }
      .hp-btn-wa-soft {
        background: rgba(37, 211, 102, 0.12);
        border: 1px solid rgba(37, 211, 102, 0.4);
        color: #69F0AE !important;
        font-size: 14px;
        font-weight: 600;
        padding: 16px 22px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
      }
      .hp-btn-wa-soft:hover {
        background: rgba(37, 211, 102, 0.22);
        border-color: #25D366;
      }

      /* ФОТО ТРЕХ ДЕВОЧЕК */
      .hp-hero-girls-showcase {
        position: relative;
        background: radial-gradient(ellipse at 50% 25%, rgba(244, 114, 182, 0.22) 0%, rgba(20, 12, 32, 0.95) 75%);
        border: 1px solid var(--hp-border-active);
        border-radius: 32px;
        padding: 16px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(244, 114, 182, 0.2);
        overflow: hidden;
      }
      .hp-girls-img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 24px;
        object-fit: cover;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
      }
      .hp-hero-float-badge {
        position: absolute;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        background: rgba(22, 13, 34, 0.88);
        border: 1px solid var(--hp-border-active);
        border-radius: 18px;
        padding: 11px 18px;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        font-size: 13px;
        font-weight: 600;
      }
      .hp-hero-float-badge.top-left { top: 30px; left: 30px; }
      .hp-hero-float-badge.bottom-right { bottom: 30px; right: 30px; }

      /* СТАТИСТИКА */
      .hp-hero-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      .hp-stat-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 20px;
        padding: 18px 20px;
        backdrop-filter: blur(12px);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .hp-stat-card:hover {
        transform: translateY(-2px);
        border-color: var(--hp-border-active);
      }
      .hp-stat-val {
        font-family: 'Cormorant Garamond', serif;
        font-size: 34px;
        font-weight: 700;
        line-height: 1;
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 6px;
      }
      .hp-stat-lbl {
        font-size: 12.5px;
        color: var(--hp-text-muted);
        line-height: 1.4;
      }

      /* СЕКЦИИ: ЗАГОЛОВКИ */
      .hp-sec-head {
        text-align: center;
        max-width: 820px;
        margin: 0 auto 46px;
      }
      .hp-sec-badge {
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--hp-rose);
        margin-bottom: 12px;
      }
      .hp-sec-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(32px, 4vw, 48px);
        font-weight: 700;
        color: #fff;
        line-height: 1.18;
        margin: 0 0 16px;
      }
      .hp-sec-title span {
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-sec-desc {
        font-size: 16px;
        color: var(--hp-text-muted);
        line-height: 1.65;
        margin: 0;
      }

      /* БЛОК ПРЕИМУЩЕСТВ */
      .hp-features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-bottom: 70px;
      }
      .hp-feature-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 22px;
        padding: 30px 24px;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .hp-feature-card:hover {
        transform: translateY(-4px);
        border-color: var(--hp-border-active);
        background: var(--hp-bg-card-hover);
      }
      .hp-feat-icon { font-size: 30px; margin-bottom: 18px; }
      .hp-feat-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 10px;
        line-height: 1.25;
      }
      .hp-feat-desc {
        font-size: 13.5px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        margin: 0;
      }

      /* ПРОСТОЙ И ПОНЯТНЫЙ ПОДБОР СРЕЗА */
      .hp-quiz-section { padding: 35px 0 70px; }
      .hp-quiz-card {
        background: radial-gradient(ellipse at 50% 0%, #2f1342 0%, #150c22 75%);
        border: 1px solid var(--hp-border-active);
        border-radius: 30px;
        padding: 42px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
        max-width: 960px;
        margin: 0 auto;
      }
      .hp-quiz-step-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 16px;
      }
      .hp-quiz-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
        margin-bottom: 28px;
      }
      .hp-quiz-opt {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--hp-border);
        border-radius: 18px;
        padding: 18px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: center;
      }
      .hp-quiz-opt:hover {
        border-color: var(--hp-rose);
        background: rgba(244, 114, 182, 0.1);
      }
      .hp-quiz-opt.selected {
        background: rgba(244, 114, 182, 0.2);
        border-color: var(--hp-rose);
        box-shadow: 0 0 20px rgba(244, 114, 182, 0.35);
      }
      .hp-quiz-opt-val {
        font-weight: 700;
        font-size: 16px;
        color: #fff;
        margin-bottom: 6px;
      }
      .hp-quiz-opt-desc {
        font-size: 12.5px;
        color: var(--hp-text-muted);
        line-height: 1.4;
      }

      /* КАТАЛОГ СРЕЗОВ */
      .hp-catalog-section { padding: 40px 0 75px; }
      .hp-catalog-filters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 38px;
      }
      .hp-filter-btn {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--hp-border);
        color: #d1c5e2;
        padding: 11px 22px;
        border-radius: 25px;
        font-size: 13.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-filter-btn:hover { border-color: var(--hp-rose); color: #fff; }
      .hp-filter-btn.active {
        background: rgba(244, 114, 182, 0.22);
        border-color: var(--hp-rose);
        color: #fff;
        box-shadow: 0 0 18px rgba(244, 114, 182, 0.35);
      }
      .hp-catalog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 26px;
      }
      .hp-cut-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 24px;
        overflow: hidden;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(12px);
      }
      .hp-cut-card:hover {
        transform: translateY(-5px);
        border-color: var(--hp-border-active);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(244, 114, 182, 0.2);
      }
      .hp-cut-img-wrap {
        height: 320px;
        position: relative;
        overflow: hidden;
      }
      .hp-cut-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }
      .hp-cut-card:hover .hp-cut-img { transform: scale(1.05); }
      .hp-cut-badge {
        position: absolute;
        top: 14px; left: 14px;
        background: rgba(18, 11, 28, 0.88);
        backdrop-filter: blur(8px);
        border: 1px solid var(--hp-border-active);
        color: #fce7f3;
        padding: 5px 12px;
        border-radius: 14px;
        font-size: 11.5px;
        font-weight: 700;
      }
      .hp-cut-body {
        padding: 24px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .hp-cut-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 8px;
        line-height: 1.2;
      }
      .hp-cut-meta {
        display: flex;
        gap: 12px;
        font-size: 12.5px;
        color: var(--hp-rose);
        font-weight: 600;
        margin-bottom: 12px;
      }
      .hp-cut-desc {
        font-size: 13.5px;
        color: var(--hp-text-muted);
        line-height: 1.55;
        margin: 0 0 20px;
        flex-grow: 1;
      }
      .hp-cut-btn {
        background: rgba(244, 114, 182, 0.15);
        border: 1px solid var(--hp-border);
        color: #fdfafd !important;
        text-align: center;
        padding: 13px;
        border-radius: 16px;
        font-weight: 700;
        font-size: 13.5px;
        text-decoration: none;
        transition: all 0.2s ease;
        display: block;
      }
      .hp-cut-btn:hover {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        box-shadow: 0 6px 22px rgba(244, 114, 182, 0.5);
      }

      /* ЦЕНТРАЛЬНЫЙ БЛОК ЗАХВАТА ЗАЯВКИ */
      .hp-lead-section { padding: 40px 0 75px; }
      .hp-lead-box {
        background: radial-gradient(ellipse at 50% -10%, #3a1550 0%, #170e26 70%);
        border: 1px solid var(--hp-border-active);
        border-radius: 32px;
        padding: 48px 40px;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.75), 0 0 35px rgba(244, 114, 182, 0.2);
        max-width: 820px;
        margin: 0 auto;
        text-align: center;
        position: relative;
      }
      .hp-lead-badge {
        display: inline-block;
        background: rgba(244, 114, 182, 0.18);
        border: 1px solid var(--hp-border-active);
        color: #fce7f3;
        padding: 7px 18px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      .hp-lead-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(32px, 4.2vw, 46px);
        font-weight: 700;
        line-height: 1.15;
        margin: 0 0 14px;
        color: #fff;
      }
      .hp-lead-title span {
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-lead-subtitle {
        font-size: 16px;
        line-height: 1.6;
        color: var(--hp-text-muted);
        margin: 0 auto 34px;
        max-width: 620px;
      }
      .hp-method-label {
        font-size: 13.5px;
        color: #fce7f3;
        font-weight: 600;
        margin-bottom: 14px;
        text-align: left;
      }
      .hp-method-selector {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-bottom: 22px;
      }
      .hp-method-btn {
        background: #1e1130;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        padding: 14px 10px;
        color: #ccc;
        font-size: 13.5px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.2s ease;
      }
      .hp-method-btn:hover { border-color: var(--hp-rose); }
      .hp-method-btn.active.tg {
        background: rgba(0, 136, 204, 0.25);
        border-color: #0088cc;
        color: #fff;
        box-shadow: 0 0 18px rgba(0, 136, 204, 0.4);
      }
      .hp-method-btn.active.wa {
        background: rgba(37, 211, 102, 0.25);
        border-color: #25D366;
        color: #fff;
        box-shadow: 0 0 18px rgba(37, 211, 102, 0.4);
      }
      .hp-method-btn.active.phone {
        background: rgba(244, 114, 182, 0.25);
        border-color: var(--hp-rose);
        color: #fff;
        box-shadow: 0 0 18px rgba(244, 114, 182, 0.4);
      }
      .hp-input-group { margin-bottom: 16px; text-align: left; }
      .hp-input {
        width: 100%;
        background: #1a0e2a;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        color: #fff;
        padding: 16px 20px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-input:focus {
        border-color: var(--hp-rose);
        box-shadow: 0 0 18px rgba(244, 114, 182, 0.35);
      }
      .hp-input-hint {
        font-size: 12px;
        color: var(--hp-text-muted);
        margin-top: 8px;
        line-height: 1.5;
      }
      .hp-input-hint strong { color: #fce7f3; }
      .hp-form-submit {
        width: 100%;
        background: var(--hp-grad-btn);
        color: #1a0818;
        border: none;
        border-radius: 18px;
        padding: 18px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 8px 32px rgba(244, 114, 182, 0.5);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin-top: 10px;
      }
      .hp-form-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(244, 114, 182, 0.7);
      }
      .hp-form-policy {
        font-size: 12px;
        color: #9283a8;
        margin-top: 14px;
        line-height: 1.5;
      }
      .hp-form-policy a {
        color: #fce7f3;
        text-decoration: underline;
        cursor: pointer;
      }

      /* ТЕЛЕГРАМ ЛЕНТА */
      .hp-tg-feed-section { padding: 40px 0 75px; }
      .hp-feed-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .hp-feed-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .hp-feed-card:hover {
        transform: translateY(-4px);
        border-color: var(--hp-border-active);
      }
      .hp-feed-media {
        position: relative;
        height: 230px;
        background: #000;
      }
      .hp-feed-thumb { width: 100%; height: 100%; object-fit: cover; }
      .hp-feed-video-badge {
        position: absolute;
        top: 10px; right: 10px;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(6px);
        color: #fff;
        padding: 4px 9px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
      }
      .hp-feed-body {
        padding: 18px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .hp-feed-title {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 8px;
        line-height: 1.3;
      }
      .hp-feed-desc {
        font-size: 12.5px;
        color: var(--hp-text-muted);
        line-height: 1.5;
        margin: 0 0 16px;
        flex-grow: 1;
        max-height: 90px;
        overflow: hidden;
      }
      .hp-feed-actions { display: flex; gap: 8px; }
      .hp-feed-btn-book {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        font-weight: 700;
        font-size: 12px;
        padding: 9px 12px;
        border-radius: 12px;
        text-decoration: none;
        flex-grow: 1;
        text-align: center;
      }
      .hp-feed-btn-tg {
        background: rgba(0, 136, 204, 0.16);
        color: #81D4FA !important;
        border: 1px solid rgba(0, 136, 204, 0.4);
        padding: 9px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
      }

      /* ОТЗЫВЫ */
      .hp-reviews-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
        margin-bottom: 75px;
      }
      .hp-review-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 22px;
        padding: 28px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .hp-review-stars { color: #facc15; font-size: 16px; margin-bottom: 12px; }
      .hp-review-text {
        font-size: 14px;
        color: #ece5f5;
        line-height: 1.6;
        margin: 0 0 18px;
        font-style: italic;
      }
      .hp-review-author { display: flex; align-items: center; gap: 12px; }
      .hp-review-avatar {
        width: 44px; height: 44px;
        border-radius: 50%;
        background: rgba(244, 114, 182, 0.22);
        border: 1px solid var(--hp-border-active);
        display: flex; align-items: center; justify-content: center;
        font-weight: 700; color: #fff;
      }
      .hp-review-name { font-weight: 700; font-size: 14px; color: #fff; }
      .hp-review-role { font-size: 12px; color: var(--hp-text-muted); }

      /* КОНТАКТЫ И ШОУРУМ */
      .hp-contacts-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border-active);
        border-radius: 30px;
        padding: 40px;
        margin-bottom: 70px;
      }
      .hp-contact-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 16px;
      }
      .hp-contact-item {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        margin-bottom: 18px;
      }
      .hp-ci-icon { font-size: 20px; color: var(--hp-rose); line-height: 1.2; }
      .hp-ci-label { font-size: 12px; color: var(--hp-text-muted); text-transform: uppercase; letter-spacing: 1px; }
      .hp-ci-val { font-size: 15px; color: #fff; font-weight: 600; margin-top: 2px; }
      .hp-ci-val a { color: #fce7f3; text-decoration: none; }
      .hp-showroom-img-box {
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        height: 100%;
        min-height: 280px;
      }
      .hp-showroom-img { width: 100%; height: 100%; object-fit: cover; }
      .hp-showroom-badge {
        position: absolute;
        bottom: 16px; left: 16px;
        background: rgba(18, 11, 28, 0.88);
        backdrop-filter: blur(8px);
        border: 1px solid var(--hp-border-active);
        color: #fff;
        padding: 8px 14px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }

      /* FOOTER */
      .hp-footer {
        padding: 40px 0 60px;
        border-top: 1px solid var(--hp-border);
        text-align: center;
        font-size: 13px;
        color: #9d8ea8;
        line-height: 1.65;
      }
      .hp-footer-links {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 14px;
      }
      .hp-footer-link { color: #d8cde8; cursor: pointer; text-decoration: underline; }

      /* ПОПАПЫ ТИЛЬДЫ */
      .t-popup,
      #rec1915062531 .t-popup,
      #rec1935129061 .t-popup {
        background-color: rgba(9, 5, 15, 0.9) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
      }
      #rec1915062531 .t-popup__container,
      #rec1935129061 .t-popup__container {
        background: #180e28 !important;
        border: 1px solid var(--hp-border-active) !important;
        border-radius: 28px !important;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(244, 114, 182, 0.25) !important;
        padding: 36px 32px !important;
        color: #fdfafd !important;
      }
      #rec1915062531 .t702__title,
      #rec1935129061 .t702__title {
        font-family: 'Cormorant Garamond', serif !important;
        font-size: clamp(26px, 3.4vw, 36px) !important;
        font-weight: 700 !important;
        color: #ffffff !important;
      }
      #rec1915062531 .t-input,
      #rec1935129061 .t-input {
        background: #1e1133 !important;
        border: 1px solid rgba(255, 255, 255, 0.12) !important;
        border-radius: 14px !important;
        color: #ffffff !important;
        padding: 14px 18px !important;
      }
      #rec1915062531 .t-btnflex.t-btnflex_type_submit,
      #rec1915062531 .t-submit,
      #rec1935129061 .t-btnflex.t-btnflex_type_submit,
      #rec1935129061 .t-submit {
        background: var(--hp-grad-btn) !important;
        color: #1a0818 !important;
        border: none !important;
        border-radius: 16px !important;
        font-weight: 700 !important;
        padding: 16px 28px !important;
      }

      /* ПЛАВАЮЩИЕ КНОПКИ */
      #hp-btn-top {
        position: fixed;
        bottom: 14px;
        left: 14px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(24, 14, 38, 0.92);
        border: 1px solid var(--hp-border-active);
        color: var(--hp-rose);
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
      }
      #hp-btn-top svg { width: 20px; height: 20px; fill: currentColor; }

      #hp-widget-lead {
        position: fixed;
        bottom: 14px;
        right: 14px;
        z-index: 9998;
      }
      .hp-widget-pulse-btn {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        font-weight: 700;
        font-size: 13.5px;
        padding: 13px 22px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 6px 25px rgba(244, 114, 182, 0.55);
        animation: hpPulse 2.8s infinite;
      }
      @keyframes hpPulse {
        0% { box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.7); }
        70% { box-shadow: 0 0 0 16px rgba(244, 114, 182, 0); }
        100% { box-shadow: 0 0 0 0 rgba(244, 114, 182, 0); }
      }

      #hp-legal-modal {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(10px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 100000;
        padding: 16px;
      }
      .hp-legal-box {
        background: #1c102f;
        border: 1px solid var(--hp-border-active);
        color: #ddd;
        max-width: 650px;
        max-height: 85vh;
        overflow-y: auto;
        padding: 30px;
        border-radius: 22px;
        font-size: 13px;
        line-height: 1.6;
        position: relative;
      }
      .hp-legal-close {
        position: absolute;
        top: 14px; right: 14px;
        background: none; border: none; color: #fff; font-size: 24px; cursor: pointer;
      }

      @media (max-width: 1024px) {
        .hp-features-grid { grid-template-columns: repeat(2, 1fr); }
        .hp-catalog-grid { grid-template-columns: repeat(2, 1fr); }
        .hp-feed-grid { grid-template-columns: repeat(2, 1fr); }
        .hp-reviews-grid { grid-template-columns: 1fr; }
        .hp-contacts-grid { grid-template-columns: 1fr; }
      }

      @media (max-width: 860px) {
        .hp-nav-links { display: none; }
        .hp-hero-grid { display: flex; flex-direction: column; text-align: center; gap: 32px; }
        .hp-hero-cta-box { justify-content: center; }
        .hp-hero-stats { grid-template-columns: 1fr; }
        .hp-features-grid { grid-template-columns: 1fr; }
        .hp-catalog-grid { grid-template-columns: 1fr; }
        .hp-feed-grid { grid-template-columns: 1fr; }
        .hp-quiz-card { padding: 26px 20px; }
        .hp-quiz-options { grid-template-columns: 1fr; }
        .hp-method-selector { grid-template-columns: 1fr; }
        .hp-hero-float-badge.top-left { top: 12px; left: 12px; font-size: 11.5px; padding: 6px 12px; }
        .hp-hero-float-badge.bottom-right { bottom: 12px; right: 12px; font-size: 11.5px; padding: 6px 12px; }
      }
    `;
    document.head.appendChild(s);
  }

  var html = `
<div id="hp-app">
  <!-- ХЕДЕР -->
  <header class="hp-container hp-header">
    <a href="https://hipretty.ru" class="hp-logo-wrap">
      <div class="hp-logo">привет, волосы!</div>
      <div class="hp-logo-sub">магазин натуральных волос • москва</div>
    </a>
    <nav class="hp-nav-links">
      <a href="#catalog" class="hp-nav-link">Срезы в наличии</a>
      <a href="#why-us" class="hp-nav-link">Преимущества</a>
      <a href="#selection" class="hp-nav-link">Подбор среза</a>
      <a href="#kanalTG" class="hp-nav-link">Telegram-канал</a>
      <a href="#contacts" class="hp-nav-link">Шоурум и доставка</a>
    </nav>
    <div class="hp-header-actions">
      <a href="tel:+79933365357" class="hp-header-phone">8 (993) 336-53-57</a>
      <a href="#popup:contact" class="hp-btn-header-cta">Консультация ✦</a>
    </div>
  </header>

  <!-- ГЛАВНЫЙ ЭКРАН (HERO) -->
  <section class="hp-container hp-hero">
    <div class="hp-hero-grid">
      <div class="hp-hero-info">
        <div class="hp-badge-geo"><span></span> Доставка по всей России и миру • Склад в Москве</div>
        <h1 class="hp-hero-title">Натуральные детские и славянские срезы <span>высшего качества</span></h1>
        <p class="hp-hero-desc">
          Большой выбор отборных некрашеных волос в наличии в шоуруме в Москве. 
          100% живой срез от одного донора без силикона и химии: плотные ровные концы, мягкая шелковистая структура. 
          Быстрая отправка в любой город России и за рубеж. Видео каждого среза на весах перед покупкой.
        </p>
        <div class="hp-hero-cta-box">
          <a href="#lead-box" class="hp-btn-main">✦ Подобрать идеальный срез</a>
          <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-btn-tg-main">
            <span>✈</span> Telegram (@hi_pretty)
          </a>
          <a href="https://wa.me/79933365357?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D1%81%D1%80%D0%B5%D0%B7%20%D0%B2%D0%BE%D0%BB%D0%BE%D1%81." target="_blank" rel="noopener" class="hp-btn-wa-soft">
            WhatsApp
          </a>
        </div>
        <div class="hp-hero-stats">
          <div class="hp-stat-card">
            <div class="hp-stat-val">>35 кг</div>
            <div class="hp-stat-lbl">Волос всегда в наличии на складе в Москве</div>
          </div>
          <div class="hp-stat-card">
            <div class="hp-stat-val">РФ и Мир</div>
            <div class="hp-stat-lbl">Быстрая доставка СДЭК и курьером день в день</div>
          </div>
          <div class="hp-stat-card">
            <div class="hp-stat-val">100% Lux</div>
            <div class="hp-stat-lbl">Один донор, без вычеса, служат много коррекций</div>
          </div>
        </div>
      </div>

      <!-- ФОТО ТРЕХ ДЕВОЧЕК -->
      <div class="hp-hero-girls-showcase">
        <img src="https://static.tildacdn.com/tild6662-3065-4338-a165-323261623835/169.svg" alt="Магазин натуральных волос привет, волосы! — детские и славянские срезы" class="hp-girls-img" loading="eager">
        <div class="hp-hero-float-badge top-left">
          <span>✨ Детские шелковые срезы</span>
        </div>
        <div class="hp-hero-float-badge bottom-right">
          <span>💎 Оптовые условия мастерам</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ПОЧЕМУ ВЫБИРАЮТ «ПРИВЕТ, ВОЛОСЫ!» -->
  <section class="hp-container" id="why-us" style="padding: 20px 0 65px;">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Честное качество</span>
      <h2 class="hp-sec-title">Почему наши волосы <span>выбирают по всей России</span></h2>
      <p class="hp-sec-desc">Мы лично отбираем каждый хвостик и гарантируем качество срезов от первой примерки до многократных коррекций.</p>
    </div>
    <div class="hp-features-grid">
      <div class="hp-feature-card">
        <div class="hp-feat-icon">✨</div>
        <h3 class="hp-feat-title">Один срез — один донор</h3>
        <p class="hp-feat-desc">Волосы не смешиваются. Кутикула направлена строго в одну сторону, поэтому они не путаются после мытья.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🌿</div>
        <h3 class="hp-feat-title">Без силикона и обработки</h3>
        <p class="hp-feat-desc">Природный живой волос. Сохраняет естественную шелковистость и блеск даже после окрашивания и термоукладок.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">⚖</div>
        <h3 class="hp-feat-title">Видео среза с весов</h3>
        <p class="hp-feat-desc">Перед оплатой снимаем подробное видео выбранного среза при дневном свете и фиксируем точный вес до грамма.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🚚</div>
        <h3 class="hp-feat-title">Доставка по РФ и миру</h3>
        <p class="hp-feat-desc">Быстрая отправка СДЭК в любой регион России (1–3 дня). Доставка по миру. Шоурум в центре Москвы на Арбате.</p>
      </div>
    </div>
  </section>

  <!-- ОНЛАЙН-ПОДБОР СРЕЗА -->
  <section class="hp-container hp-quiz-section" id="selection">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Быстрый подбор</span>
      <h2 class="hp-sec-title">Подберите срез <span>под свои параметры</span></h2>
      <p class="hp-sec-desc">Укажите желаемую длину и оттенок — наш мастер сразу отберет 3 подходящих варианта из наличия со склада.</p>
    </div>
    <div class="hp-quiz-card">
      <div class="hp-quiz-step-title">1. Желаемая длина волос:</div>
      <div class="hp-quiz-options" id="quiz-length">
        <div class="hp-quiz-opt" data-val="40-50 см">
          <div class="hp-quiz-opt-val">40–50 см</div>
          <div class="hp-quiz-opt-desc">Каре и длина до лопаток</div>
        </div>
        <div class="hp-quiz-opt selected" data-val="55-65 см">
          <div class="hp-quiz-opt-val">55–65 см</div>
          <div class="hp-quiz-opt-desc">Классическая длина до талии</div>
        </div>
        <div class="hp-quiz-opt" data-val="70-80 см">
          <div class="hp-quiz-opt-val">70–80 см</div>
          <div class="hp-quiz-opt-desc">Эксклюзивный длинный срез</div>
        </div>
      </div>

      <div class="hp-quiz-step-title">2. Оттенок волос:</div>
      <div class="hp-quiz-options" id="quiz-shade">
        <div class="hp-quiz-opt selected" data-val="Светлый блонд">
          <div class="hp-quiz-opt-val">Светлый блонд</div>
          <div class="hp-quiz-opt-desc">Натуральный детский срез</div>
        </div>
        <div class="hp-quiz-opt" data-val="Русый / Пшеничный">
          <div class="hp-quiz-opt-val">Русый / Пшеничный</div>
          <div class="hp-quiz-opt-desc">Славянский мягкий шелк</div>
        </div>
        <div class="hp-quiz-opt" data-val="Шоколад / Темный">
          <div class="hp-quiz-opt-val">Шоколад / Темный</div>
          <div class="hp-quiz-opt-desc">Глубокий благородный блеск</div>
        </div>
      </div>

      <div style="text-align:center;margin-top:16px;">
        <a href="#lead-box" class="hp-btn-main">Показать подходящие срезы из наличия ✦</a>
      </div>
    </div>
  </section>

  <!-- КАТАЛОГ СРЕЗОВ В НАЛИЧИИ -->
  <section class="hp-container hp-catalog-section" id="catalog">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Склад в Москве (>35 кг)</span>
      <h2 class="hp-sec-title">Свежие партии срезов <span>в наличии</span></h2>
      <p class="hp-sec-desc">Каждый срез уникален — один донор, плотный ровный срез, без силикона. Бронь среза за 1 минуту.</p>
    </div>

    <div class="hp-catalog-filters">
      <button type="button" class="hp-filter-btn active" data-filter="all">Все срезы (>35 кг)</button>
      <button type="button" class="hp-filter-btn" data-filter="kids">Детские блонды (Люкс)</button>
      <button type="button" class="hp-filter-btn" data-filter="slav">Светло-русые и пшеничные</button>
      <button type="button" class="hp-filter-btn" data-filter="dark">Шоколадные и темные</button>
    </div>

    <div class="hp-catalog-grid">
      <div class="hp-cut-card" data-cat="kids">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3137-6435-4061-b463-393264316465/IMG_2585.JPG" alt="Славянский детский блонд" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Детский шелк • В наличии</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Славянский детский блонд</h3>
          <div class="hp-cut-meta"><span>60 см</span> • <span>115 г</span> • <span>Плотный срез</span></div>
          <p class="hp-cut-desc">Неокрашенный детский волос редкого холодного оттенка. Тончайшая шелковистая структура, густые плотные концы.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео с весов ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="slav">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3530-6434-4333-b039-656266383061/IMG_2592.jpg" alt="Светло-русый натуральный срез" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Славянский шелк</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Светло-русый пшеничный</h3>
          <div class="hp-cut-meta"><span>65 см</span> • <span>130 г</span> • <span>Мягкая волна</span></div>
          <p class="hp-cut-desc">Естественный благородный оттенок с природным живым блеском. Без вычеса и обработки, идеален для наращивания.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео с весов ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="dark">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3832-3930-4664-b236-666264653838/IMG_2594.jpg" alt="Шоколадный шелк" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Густой объем</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Шоколадный шелк</h3>
          <div class="hp-cut-meta"><span>70 см</span> • <span>145 г</span> • <span>Прямой срез</span></div>
          <p class="hp-cut-desc">Глубокий натуральный цвет с переливом. Отборная славянка максимальной длины для создания роскошного объема.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео с весов ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="kids">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3931-6430-4537-a363-303233336237/IMG_0167.jpg" alt="Золотистый детский блонд" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Детский люкс</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Золотистый детский блонд</h3>
          <div class="hp-cut-meta"><span>55 см</span> • <span>110 г</span> • <span>Нежный шелк</span></div>
          <p class="hp-cut-desc">Уникальный детский срез с мягким медовым подтоном. Не требует осветления, струящийся и невесомый в носке.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео с весов ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="slav">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3462-6536-4133-b738-393237383563/IMG_4007.jpg" alt="Натуральная славянская волна" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Природная волна</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Натуральная славянская волна</h3>
          <div class="hp-cut-meta"><span>65 см</span> • <span>120 г</span> • <span>Русый тон</span></div>
          <p class="hp-cut-desc">Красивый завиток, который сохраняет форму после каждого мытья головы. Волосы мягкие, без пористости.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео с весов ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="kids">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild6432-3836-4134-b430-656364333035/IMG_6521.PNG" alt="Платиновый славянский срез" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Светлый тон</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Светлый платиновый блонд</h3>
          <div class="hp-cut-meta"><span>50 см</span> • <span>105 г</span> • <span>Гладкий шелк</span></div>
          <p class="hp-cut-desc">Редчайший светлый тон. Плотные упругие концы, сохраненный кутикулярный слой, роскошный салонный вид.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео с весов ✦</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ЖИВАЯ ЛЕНТА TELEGRAM КАНАЛА (@hi_pretty) -->
  <section class="hp-container hp-tg-feed-section" id="kanalTG">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Прямой эфир со склада • @hi_pretty</span>
      <h2 class="hp-sec-title">Свежие поступления срезов <span>каждый день</span></h2>
      <p class="hp-sec-desc">Каждый день показываем новые хвостики прямо со стола мастера с демонстрацией на весах.</p>
    </div>
    <div class="hp-feed-grid" id="hp-live-feed-grid">
      <div class="hp-feed-card" data-post-id="4258">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/pxX-AoaIPci34Q7jpLRGMlDR5nIvOqRYXTITkYx2Xew-fd6JhcAovPvbQQzE1S1MecrjMltlvBWCaYCnFj_6cvn1U0qYnLy3SLp_cJQtHG5BpjgBRnjVt7rrC6U9nZv4R30uzwcwoB_N5_SXUra89kuqOA8PlmEWm-IuI-vuB_Hk7SEgYEZXzaTN-mvsdLwIvfv56cut7BE-KF55LoETEJGa45AfRpPJqLSb642SPTMA9azWcxmo0f_b3E3nfY_t4yRViJ-TGcc4SFscKRRUWcPZt0QREYWvMG4oAtdYdaXXci1FWCcJfiyIJKMK7BBLQjYeaN54iBnIElUcimtEnw" alt="Детские шелковые срезы" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; Видео среза</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">Детские шелковые хвостики</h3>
          <p class="hp-feed-desc">Шелковые, маслянистые, нежнейшие. 65 см / 181 гр — отборный чистый срез без вычеса.</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">Подобрать этот срез ✦</a>
            <a href="https://t.me/hi_pretty/4258" target="_blank" rel="noopener" class="hp-feed-btn-tg">В Telegram &rarr;</a>
          </div>
        </div>
      </div>

      <div class="hp-feed-card" data-post-id="4263">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/llxxfwBO56PKPL-1DrXV6K_OD8GgZ1VU3MJ4DprO0AiioJMPkTDfqaZOMW-a6Wv_NczWOL-Gwn3_I6iqFIS3MmliIWtCN36yz2bHiOSUSb5S8u2eR9z9P5zPj54y_9gRVPWqTdtru45dSet1WHqod6E-OdzlC-NPZpvm9iDruUjCOqrqsGkloV0AnSxC-FDLm2i_wOnMgrwq9Q8Bfjw5MWiDdas_9-bkf_raZfo4mwa1vwVp3YCnZrQaNRivPJ-AGJ8OypSr39OV-BFB-jfrRg-djiaHb7FY8IeZwx3adt5de5SWjmiZNWH6ZA4Nfw4fGLE3GyauYIOhfQwCoSxRcw" alt="Природная волна" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; Видео среза</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">Природная легкая волна</h3>
          <p class="hp-feed-desc">Детский шелк. 50 см / 107 гр. Нежнейшая текстура, не путается после сушки феном.</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">Подобрать этот срез ✦</a>
            <a href="https://t.me/hi_pretty/4263" target="_blank" rel="noopener" class="hp-feed-btn-tg">В Telegram &rarr;</a>
          </div>
        </div>
      </div>

      <div class="hp-feed-card" data-post-id="4271">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/kRd4TmRmXPv9Xi2H1y2hhov_lx3qUSrGzXuAp8IuzCVTBzVsUUfD2tC-E1PgK7Tu9rr7QrEyR3pnfW1tvysf05wTadCaC4EqzPQM3XPAIRvCbo5JBgQ3W6CNRmnQlKILFaae6KEQmdMxo3mMowpmKhLMvWfkDIh9x1uCaj1ykEEqmoGXKu6e3v95FtKQHCiI-FAJd8vXAPTR1lTamz1DyDbvUbzo_pIx8q1DO91z6VaD5zq3hvJY1e2Z9emhUbsj3hdxr_VVaH5GcGeg0CcYp5I_vXF-14-HOz73v0R83kwa421Lh5jn0S9fyZWevqr3twFHWSB4F0yNSkUe4D7LKw" alt="Детский пшеничный блонд" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; Видео среза</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">Детские золотистые хвостики</h3>
          <p class="hp-feed-desc">68 см / 140 гр. Идеальный густой срез. Волосок к волоску, максимальное качество.</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">Подобрать этот срез ✦</a>
            <a href="https://t.me/hi_pretty/4271" target="_blank" rel="noopener" class="hp-feed-btn-tg">В Telegram &rarr;</a>
          </div>
        </div>
      </div>

      <div class="hp-feed-card" data-post-id="4276">
        <div class="hp-feed-media">
          <img src="https://cdn4.telesco.pe/file/QFycXKhIz5xnOXlenR25iUo3ZA1SItsQZ1O36M2pzy3AhUX3-Go8kKTcK2QCtNF9XYE_UW1ENS6q6QdShZQN9QP3sguVfRYA8jkRhZgk6zJdiGsYWEkfkkB6LIvu584DDqLrcTkjF6u2HWWrfvcIs8ZbRFiLgqQL9EAfMRjxwUrmtTc2CGak7MyVo3vWk2ouB11NI5byl0_jmimAhvMIM-8ddcK9dFpawyW4nCaAthiu8peCnctCaY__JPbvimpiRyygINPWno5A_ZV7CDRLEUV9yxZJ1mT6eyZeNSuIRMcda9Ko8ggdc7hzhOXdHTXWh2qFhurGFnjtIUQD5QV4PQ" alt="Русый славянский срез" class="hp-feed-thumb" loading="lazy">
          <span class="hp-feed-video-badge">&#127916; Видео среза</span>
        </div>
        <div class="hp-feed-body">
          <h3 class="hp-feed-title">Детский русский срез</h3>
          <p class="hp-feed-desc">50 см / 80 гр. Тончайшая шелковая волосинка, вычесан на 20 см от коротких волосков.</p>
          <div class="hp-feed-actions">
            <a href="#lead-box" class="hp-feed-btn-book">Подобрать этот срез ✦</a>
            <a href="https://t.me/hi_pretty/4276" target="_blank" rel="noopener" class="hp-feed-btn-tg">В Telegram &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ОТЗЫВЫ -->
  <section class="hp-container" style="padding: 30px 0 65px;">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Реальные отзывы</span>
      <h2 class="hp-sec-title">Отзывы клиенток и <span>мастеров со всей России</span></h2>
    </div>
    <div class="hp-reviews-grid">
      <div class="hp-review-card">
        <div>
          <div class="hp-review-stars">★★★★★</div>
          <p class="hp-review-text">«Заказывала детский срез 65 см. Качество — восторг! Волосы мягкие, плотные концы, без химии. Ношу уже 4 месяца — волосы как новые!»</p>
        </div>
        <div class="hp-review-author">
          <div class="hp-review-avatar">ВК</div>
          <div>
            <div class="hp-review-name">Виктория Ковалевская</div>
            <div class="hp-review-role">Клиентка, Москва</div>
          </div>
        </div>
      </div>

      <div class="hp-review-card">
        <div>
          <div class="hp-review-stars">★★★★★</div>
          <p class="hp-review-text">«Заказывала доставку в Сочи. Мне показали видео 3 срезов на весах, подобрали цвет точь-в-точь по фото! Пришли СДЭКом за 2 дня. Рекомендую всем!»</p>
        </div>
        <div class="hp-review-author">
          <div class="hp-review-avatar">АС</div>
          <div>
            <div class="hp-review-name">Алиса Соловьева</div>
            <div class="hp-review-role">Клиентка, Сочи</div>
          </div>
        </div>
      </div>

      <div class="hp-review-card">
        <div>
          <div class="hp-review-stars">★★★★★</div>
          <p class="hp-review-text">«Работаю мастером по наращиванию. Постоянно заказываю здесь срезы для клиенток. Отличное качество, честный вес до грамма и быстрая отправка.»</p>
        </div>
        <div class="hp-review-author">
          <div class="hp-review-avatar">МН</div>
          <div>
            <div class="hp-review-name">Мария Нестерова</div>
            <div class="hp-review-role">Мастер по наращиванию, Казань</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ЦЕНТРАЛЬНЫЙ БЛОК ЗАХВАТА ЗАЯВКИ -->
  <section id="lead-box" class="hp-lead-section">
    <div class="hp-container">
      <div class="hp-lead-box">
        <span class="hp-lead-badge">Онлайн-подбор среза</span>
        <h2 class="hp-lead-title">Мечтаете о роскошных <span>натуральных волосах?</span></h2>
        <p class="hp-lead-subtitle">
          Оставьте контакты, и менеджер поможет с выбором идеальных волос по фото и пришлет видео нескольких срезов с весов.
        </p>

        <form id="hp-lead-form">
          <div class="hp-input-group">
            <input type="text" id="hp-user-name" class="hp-input" placeholder="Ваше имя" required>
          </div>

          <div class="hp-method-label">Выберите удобный способ связи:</div>
          <div class="hp-method-selector">
            <button type="button" class="hp-method-btn active tg" data-m="telegram">
              <span>✈</span> Telegram
            </button>
            <button type="button" class="hp-method-btn wa" data-m="whatsapp">
              <span>●</span> WhatsApp
            </button>
            <button type="button" class="hp-method-btn phone" data-m="phone">
              <span>●</span> Телефон
            </button>
          </div>

          <div class="hp-input-group">
            <input type="text" id="hp-user-contact" class="hp-input" placeholder="Ник в Telegram (@username) или телефон" required>
            <div id="hp-contact-hint" class="hp-input-hint">
              <strong>Внимание! При выборе Telegram:</strong> Укажите ник в Telegram (@username) или телефон.
            </div>
          </div>

          <button type="submit" id="hp-submit-btn" class="hp-form-submit">Получить подбор и видео среза ✦</button>

          <div class="hp-form-policy">
            Нажимая кнопку, вы соглашаетесь с <a id="hp-open-policy">Политикой конфиденциальности</a> (152-ФЗ РФ).
          </div>
          <div id="hp-form-success" style="display:none;margin-top:20px;color:#10B981;font-weight:700;font-size:15px;line-height:1.5;">
            ✓ Заявка успешно принята! Менеджер уже подбирает срезы и готовит видео с весов.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- КОНТАКТЫ И ШОУРУМ В МОСКВЕ -->
  <section class="hp-container" id="contacts" style="padding: 20px 0 60px;">
    <div class="hp-contacts-grid">
      <div>
        <h2 class="hp-contact-title">Контакты и шоурум</h2>
        <div class="hp-contact-item">
          <div class="hp-ci-icon">📍</div>
          <div>
            <div class="hp-ci-label">Адрес шоурума в Москве</div>
            <div class="hp-ci-val">г. Москва, м. Арбатская / Смоленская, Староконюшенный переулок 35с2, 1 этаж</div>
          </div>
        </div>
        <div class="hp-contact-item">
          <div class="hp-ci-icon">📞</div>
          <div>
            <div class="hp-ci-label">Телефон студии</div>
            <div class="hp-ci-val"><a href="tel:+79933365357">+7 (993) 336-53-57</a></div>
          </div>
        </div>
        <div class="hp-contact-item">
          <div class="hp-ci-icon">🕒</div>
          <div>
            <div class="hp-ci-label">График работы</div>
            <div class="hp-ci-val">Вт – Вск: с 11:00 до 20:00 (по предварительной записи). Онлайн: 24/7</div>
          </div>
        </div>
        <div class="hp-contact-item">
          <div class="hp-ci-icon">💬</div>
          <div>
            <div class="hp-ci-label">Мессенджеры для связи</div>
            <div class="hp-ci-val">
              <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:var(--hp-rose);margin-right:14px;">Telegram (@hi_pretty)</a>
              <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:#69F0AE;">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hp-showroom-img-box">
        <img src="https://static.tildacdn.com/tild6532-6566-4133-b335-336432383935/IMG_0159.jpg" alt="Шоурум натуральных волос в Москве на Арбате" class="hp-showroom-img" loading="lazy">
        <div class="hp-showroom-badge">🏛 Шоурум в центре Москвы на Арбате</div>
      </div>
    </div>
  </section>

  <!-- ПОДВАЛ -->
  <footer class="hp-container hp-footer">
    <div class="hp-footer-links">
      <span id="hp-footer-policy" class="hp-footer-link">Политика конфиденциальности</span>
      <span>•</span>
      <span id="hp-footer-consent" class="hp-footer-link">Согласие на обработку данных (152-ФЗ)</span>
    </div>
    <div style="margin-bottom:8px;">
      Связь: 
      <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:#fce7f3;margin:0 8px;">Telegram</a> | 
      <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:#fce7f3;margin:0 8px;">WhatsApp</a> | 
      <a href="tel:+79933365357" style="color:#fce7f3;margin:0 8px;">8 (993) 336-53-57</a>
    </div>
    <div>Магазин натуральных волос «привет, волосы!» • ИП Лесовая В. С. • ИНН: 100201988457 • ОГРНИП: 323774600090577</div>
    <div style="margin-top:4px;">г. Москва, Староконюшенный переулок 35с2 • Доставка по всей России и миру</div>
  </footer>
</div>

<!-- МОДАЛ 152-ФЗ -->
<div id="hp-legal-modal">
  <div class="hp-legal-box">
    <button type="button" class="hp-legal-close">&times;</button>
    <h3 style="margin-top:0;color:var(--hp-rose);">Политика конфиденциальности и Согласие 152-ФЗ</h3>
    <p>Настоящим я даю согласие ИП Лесовая В. С. (ИНН 100201988457, ОГРНИП 323774600090577) на обработку персональных данных (имя, номер телефона, никнейм/ссылка в мессенджере Telegram или WhatsApp) в целях подбора натуральных волос, консультации и оформления доставки по законодательству РФ.</p>
  </div>
</div>
`;

  var currentMethod = 'telegram';

  function polishTildaPopup() {
    var popupRec = document.getElementById('rec1915062531');
    if (!popupRec) return;

    var closeBtn = popupRec.querySelector('.t-popup__close-wrapper');
    if (closeBtn) closeBtn.setAttribute('title', 'Закрыть');

    var subBtn = popupRec.querySelector('.t-btnflex__text, .t-submit');
    if (subBtn && (!subBtn.textContent || subBtn.textContent.trim() === '')) {
      subBtn.textContent = 'Подобрать срез ✦';
    }

    var nameInp = popupRec.querySelector('input[name="Name"]');
    if (nameInp && !nameInp.placeholder) nameInp.placeholder = 'Ваше имя';

    var tildaForm = popupRec.querySelector('form');
    if (tildaForm && !tildaForm.dataset.hpBound) {
      tildaForm.dataset.hpBound = 'true';
      tildaForm.addEventListener('submit', function() {
        if (typeof window.ym === 'function') {
          window.ym(90792799, 'reachGoal', 'submitted');
          window.ym(90792799, 'reachGoal', 'gamelead_send');
        }
      });
    }
  }

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

    // Фильтрация каталога
    var filterBtns = document.querySelectorAll('.hp-filter-btn');
    var cutCards = document.querySelectorAll('.hp-cut-card');
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        cutCards.forEach(function(card) {
          if (f === 'all' || card.getAttribute('data-cat') === f) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Квиз подбора
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
    setupQuiz('quiz-shade');

    // Селектор мессенджеров
    var methodBtns = document.querySelectorAll('.hp-method-btn');
    var contactInput = document.getElementById('hp-user-contact');
    var contactHint = document.getElementById('hp-contact-hint');

    methodBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        methodBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        currentMethod = b.getAttribute('data-m');
        if (currentMethod === 'telegram') {
          contactInput.placeholder = 'Ник в Telegram (@username) или телефон';
          contactHint.innerHTML = '<strong>Внимание! При выборе Telegram:</strong> Укажите ник в Telegram (@username) или телефон.';
        } else if (currentMethod === 'whatsapp') {
          contactInput.placeholder = '+7 (999) 000-00-00 (WhatsApp)';
          contactHint.innerHTML = '<strong>При выборе WhatsApp:</strong> Укажите ваш номер в WhatsApp.';
        } else {
          contactInput.placeholder = '+7 (999) 000-00-00';
          contactHint.innerHTML = '<strong>При выборе телефона:</strong> Мы перезвоним для подтверждения параметров среза.';
        }
      });
    });

    // Отправка формы заявки
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

        var tildaForm = document.getElementById('form1915062531') || document.querySelector('form.t-form');
        if (tildaForm) {
          var tName = tildaForm.querySelector('input[name="Name"]');
          if (tName) tName.value = name;

          var methodRadio = tildaForm.querySelector('[data-method-type="' + currentMethod + '"] label, [data-method-type="' + currentMethod + '"] input');
          if (methodRadio) methodRadio.click();

          var tContact = tildaForm.querySelector('input[name="messenger-id"], input[name="Phone"], input[type="tel"]');
          if (tContact) tContact.value = contact;

          var tSubmit = tildaForm.querySelector('button[type="submit"], .t-submit');
          if (tSubmit && typeof tSubmit.click === 'function') {
            try { tSubmit.click(); } catch(err) {}
          }
        }

        document.getElementById('hp-form-success').style.display = 'block';
        document.getElementById('hp-submit-btn').textContent = 'Заявка отправлена ✓';
        document.getElementById('hp-submit-btn').disabled = true;
      });
    }

    polishTildaPopup();
    setTimeout(polishTildaPopup, 1000);
    setTimeout(polishTildaPopup, 2500);

    // Модалка 152-ФЗ
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

  // Кнопка «Наверх»
  if (!document.getElementById('hp-btn-top')) {
    var topBtn = document.createElement('button');
    topBtn.id = 'hp-btn-top';
    topBtn.title = 'Наверх';
    topBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    document.body.appendChild(topBtn);
    window.addEventListener('scroll', function() {
      topBtn.style.display = window.scrollY > 350 ? 'flex' : 'none';
    });
    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Плавающий виджет заявки
  if (!document.getElementById('hp-widget-lead')) {
    var leadWidget = document.createElement('div');
    leadWidget.id = 'hp-widget-lead';
    leadWidget.innerHTML = '<a href="#lead-box" class="hp-widget-pulse-btn"><span>✦</span> Подобрать срез</a>';
    document.body.appendChild(leadWidget);
  }

  // Cookie плашка
  if (!localStorage.getItem('hp_cookie_accepted') && !document.getElementById('hp-cookie-banner')) {
    var cBanner = document.createElement('div');
    cBanner.id = 'hp-cookie-banner';
    cBanner.innerHTML = `
      <div>Мы используем cookie для наилучшей работы сайта и аналитики (Яндекс.Метрика).</div>
      <div style="display:flex;gap:10px;margin-top:8px;">
        <button id="hp-cookie-accept" style="background:var(--hp-grad-btn);color:#1a0818;border:none;padding:6px 16px;border-radius:14px;font-weight:700;cursor:pointer;">Принять</button>
      </div>
    `;
    cBanner.style.cssText = 'position:fixed;bottom:14px;left:70px;background:#180d28;border:1px solid rgba(244,114,182,0.35);padding:14px 20px;border-radius:18px;color:#eee;font-size:12.5px;z-index:9990;box-shadow:0 10px 30px rgba(0,0,0,0.6);';
    document.body.appendChild(cBanner);
    document.getElementById('hp-cookie-accept').addEventListener('click', function() {
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
