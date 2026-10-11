(function() {
  // 1. Шрифт Cormorant Garamond и Montserrat
  if (!document.getElementById('hp-fonts')) {
    var f = document.createElement('link');
    f.id = 'hp-fonts';
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap';
    document.head.appendChild(f);
  }

  // 2. Стили сайта
  if (!document.getElementById('hp-styles')) {
    var s = document.createElement('style');
    s.id = 'hp-styles';
    s.textContent = `
      #allrecords > .r:not(#rec4673156001):not(#rec1915062531):not(#rec1935129061),
      #allrecords > div.r:not(#rec4673156001):not(#rec1915062531):not(#rec1935129061),
      .t-records > .r:not(#rec4673156001):not(#rec1915062531):not(#rec1935129061) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        height: 0 !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      :root {
        --hp-bg: #0e0915;
        --hp-bg-card: rgba(25, 17, 38, 0.85);
        --hp-bg-card-hover: rgba(38, 26, 56, 0.96);
        --hp-rose: #f472b6;
        --hp-rose-light: #fce7f3;
        --hp-champagne: #edd8be;
        --hp-grad-text: linear-gradient(135deg, #ffffff 0%, #fce7f3 50%, #f472b6 100%);
        --hp-grad-btn: linear-gradient(135deg, #fbcfe8 0%, #f472b6 50%, #db2777 100%);
        --hp-text: #fdfafd;
        --hp-text-muted: #b8acc7;
        --hp-border: rgba(244, 114, 182, 0.25);
        --hp-border-active: rgba(244, 114, 182, 0.6);
      }

      * { box-sizing: border-box !important; }

      html { scroll-behavior: smooth !important; }

      body {
        margin: 0 !important; padding: 0 !important;
        background-color: var(--hp-bg) !important;
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
        background: radial-gradient(circle at 50% -5%, #2a1238 0%, #120a1d 45%, #08050e 100%);
        position: relative;
        z-index: 10;
      }

      .hp-container {
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
      }

      /* ХЕДЕР */
      .hp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--hp-border);
        position: sticky;
        top: 0;
        background: rgba(14, 9, 21, 0.95);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        z-index: 1000;
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
      .hp-nav-links { display: flex; align-items: center; gap: 22px; }
      .hp-nav-link {
        color: #dcd0ea;
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        transition: color 0.2s ease;
        cursor: pointer;
      }
      .hp-nav-link:hover { color: var(--hp-rose); }
      .hp-header-actions { display: flex; align-items: center; gap: 14px; }
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
        cursor: pointer;
        border: none;
      }
      .hp-btn-header-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 26px rgba(244, 114, 182, 0.6);
      }

      /* ГЛАВНЫЙ ЭКРАН */
      .hp-hero { padding: 44px 20px 65px; position: relative; }
      .hp-hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 40px;
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
        margin-bottom: 20px;
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
        margin: 0 0 32px;
      }
      .hp-hero-cta-box {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-bottom: 36px;
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
      }
      .hp-hero-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      .hp-stat-card {
        background: rgba(24, 15, 36, 0.7);
        border: 1px solid var(--hp-border);
        padding: 16px;
        border-radius: 16px;
      }
      .hp-stat-val {
        font-family: 'Cormorant Garamond', serif;
        font-size: 30px;
        font-weight: 700;
        color: var(--hp-rose-light);
        line-height: 1;
        margin-bottom: 6px;
      }
      .hp-stat-lbl {
        font-size: 12px;
        color: var(--hp-text-muted);
        line-height: 1.4;
      }

      /* ГЛАВНОЕ ФОТО ТРЕХ ДЕВОЧЕК */
      .hp-hero-girls-showcase {
        position: relative;
        border-radius: 28px;
        overflow: hidden;
        border: 1px solid var(--hp-border-active);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 40px rgba(244, 114, 182, 0.22);
        background: #190e24;
      }
      .hp-girls-img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.6s ease;
      }
      .hp-hero-girls-showcase:hover .hp-girls-img {
        transform: scale(1.02);
      }
      .hp-hero-float-badge {
        position: absolute;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        background: rgba(20, 10, 30, 0.85);
        border: 1px solid var(--hp-border-active);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12.5px;
        font-weight: 600;
        color: #fff;
        z-index: 2;
        box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      }
      .hp-hero-float-badge.top-left { top: 18px; left: 18px; }
      .hp-hero-float-badge.bottom-right { bottom: 18px; right: 18px; }

      /* БЛОК СЕКЦИЙ */
      .hp-sec-head {
        text-align: center;
        max-width: 820px;
        margin: 0 auto 38px;
      }
      .hp-sec-badge {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--hp-rose);
        font-weight: 700;
        margin-bottom: 12px;
        display: inline-block;
      }
      .hp-sec-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(28px, 3.6vw, 44px);
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 14px;
        color: #fff;
      }
      .hp-sec-title span {
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-sec-desc {
        font-size: 15px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        margin: 0;
      }

      /* ПРЕИМУЩЕСТВА */
      .hp-features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-bottom: 60px;
      }
      .hp-feature-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 20px;
        padding: 26px 20px;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .hp-feature-card:hover {
        transform: translateY(-4px);
        border-color: var(--hp-border-active);
        background: var(--hp-bg-card-hover);
      }
      .hp-feat-icon { font-size: 32px; margin-bottom: 16px; }
      .hp-feat-title {
        font-size: 17px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 10px;
      }
      .hp-feat-desc {
        font-size: 13.5px;
        color: var(--hp-text-muted);
        line-height: 1.55;
        margin: 0;
      }

      /* КАТАЛОГ СРЕЗОВ И ФИЛЬТРЫ */
      .hp-catalog-section { padding: 40px 20px 60px; }
      
      .hp-catalog-filter-bar {
        background: rgba(22, 13, 34, 0.85);
        border: 1px solid var(--hp-border);
        border-radius: 24px;
        padding: 20px 24px;
        margin-bottom: 34px;
        backdrop-filter: blur(14px);
      }
      .hp-filter-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 14px;
      }
      .hp-filter-row:last-child { margin-bottom: 0; }
      .hp-filter-label {
        font-size: 13px;
        font-weight: 700;
        color: var(--hp-rose-light);
        min-width: 130px;
      }
      .hp-filter-group {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        flex: 1;
      }
      .hp-filter-pill {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(244, 114, 182, 0.25);
        color: #ddd;
        padding: 7px 16px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-filter-pill:hover {
        border-color: var(--hp-rose);
        color: #fff;
        background: rgba(244, 114, 182, 0.15);
      }
      .hp-filter-pill.active {
        background: var(--hp-grad-btn);
        color: #1a0818;
        border-color: transparent;
        font-weight: 700;
        box-shadow: 0 4px 14px rgba(244, 114, 182, 0.4);
      }

      .hp-catalog-counter {
        text-align: right;
        font-size: 13px;
        color: var(--hp-text-muted);
        margin-bottom: 18px;
      }
      .hp-catalog-counter strong { color: var(--hp-rose-light); }

      .hp-catalog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .hp-cut-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 22px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      }
      .hp-cut-card:hover {
        transform: translateY(-5px);
        border-color: var(--hp-border-active);
        box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(244, 114, 182, 0.15);
      }
      .hp-cut-img-wrap {
        position: relative;
        width: 100%;
        height: 310px;
        background: #180e22;
        overflow: hidden;
      }
      .hp-cut-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      .hp-cut-card:hover .hp-cut-img { transform: scale(1.04); }
      .hp-cut-badge {
        position: absolute;
        top: 14px;
        left: 14px;
        background: rgba(14, 9, 21, 0.88);
        border: 1px solid var(--hp-border-active);
        padding: 5px 12px;
        border-radius: 14px;
        font-size: 11.5px;
        font-weight: 700;
        color: var(--hp-rose-light);
        backdrop-filter: blur(8px);
      }
      .hp-cut-price-tag {
        position: absolute;
        bottom: 14px;
        right: 14px;
        background: var(--hp-grad-btn);
        color: #1a0818;
        padding: 6px 14px;
        border-radius: 14px;
        font-size: 13.5px;
        font-weight: 700;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      }
      .hp-cut-body {
        padding: 22px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .hp-cut-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 8px;
        color: #fff;
      }
      .hp-cut-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 12.5px;
        color: var(--hp-rose-light);
        margin-bottom: 12px;
        font-weight: 600;
      }
      .hp-cut-meta span {
        background: rgba(244, 114, 182, 0.12);
        padding: 4px 10px;
        border-radius: 10px;
        border: 1px solid rgba(244, 114, 182, 0.25);
      }
      .hp-cut-desc {
        font-size: 13.5px;
        line-height: 1.55;
        color: var(--hp-text-muted);
        margin: 0 0 20px;
        flex: 1;
      }
      .hp-cut-actions {
        display: flex;
        gap: 10px;
        margin-top: auto;
      }
      .hp-cut-btn {
        flex: 1;
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        text-align: center;
        padding: 12px 14px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 13px;
        text-decoration: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        border: none;
        box-shadow: 0 4px 14px rgba(244, 114, 182, 0.35);
      }
      .hp-cut-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(244, 114, 182, 0.55);
      }
      .hp-cut-btn-tg {
        background: rgba(0, 136, 204, 0.18);
        border: 1px solid rgba(0, 136, 204, 0.5);
        color: #81D4FA !important;
        padding: 12px 16px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      }
      .hp-cut-btn-tg:hover {
        background: rgba(0, 136, 204, 0.35);
        border-color: #0088cc;
      }

      /* КВИЗ ПОДБОРА */
      .hp-quiz-section { padding: 30px 20px 60px; }
      .hp-quiz-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border-active);
        border-radius: 26px;
        padding: 38px;
        max-width: 900px;
        margin: 0 auto;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
      }
      .hp-quiz-step-title {
        font-size: 15px;
        font-weight: 700;
        color: var(--hp-rose-light);
        margin-bottom: 14px;
      }
      .hp-quiz-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
        margin-bottom: 24px;
      }
      .hp-quiz-opt {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--hp-border);
        border-radius: 16px;
        padding: 16px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-quiz-opt:hover {
        border-color: var(--hp-rose);
        background: rgba(244, 114, 182, 0.08);
      }
      .hp-quiz-opt.selected {
        border-color: var(--hp-rose);
        background: rgba(244, 114, 182, 0.16);
        box-shadow: 0 0 20px rgba(244, 114, 182, 0.3);
      }
      .hp-quiz-opt-val {
        font-size: 15px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 4px;
      }
      .hp-quiz-opt-desc {
        font-size: 12px;
        color: var(--hp-text-muted);
      }

      /* ФОРМА ЗАХВАТА ЗАЯВКИ */
      .hp-lead-section { padding: 40px 20px 70px; }
      .hp-lead-box {
        background: linear-gradient(135deg, rgba(38, 22, 54, 0.95) 0%, rgba(22, 12, 34, 0.98) 100%);
        border: 1px solid var(--hp-border-active);
        border-radius: 28px;
        padding: 50px 40px;
        max-width: 820px;
        margin: 0 auto;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65), 0 0 45px rgba(244, 114, 182, 0.22);
      }
      .hp-lead-badge {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--hp-rose);
        font-weight: 700;
        margin-bottom: 12px;
        display: inline-block;
      }
      .hp-lead-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(28px, 3.6vw, 42px);
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 14px;
        color: #fff;
      }
      .hp-lead-title span {
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-lead-subtitle {
        font-size: 15px;
        color: var(--hp-text-muted);
        max-width: 600px;
        margin: 0 auto 30px;
        line-height: 1.55;
      }
      .hp-input-group {
        margin-bottom: 16px;
        text-align: left;
      }
      .hp-input {
        width: 100%;
        background: rgba(14, 9, 21, 0.85);
        border: 1px solid var(--hp-border);
        border-radius: 16px;
        padding: 15px 20px;
        color: #fff;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-input:focus {
        border-color: var(--hp-rose);
        box-shadow: 0 0 15px rgba(244, 114, 182, 0.3);
      }
      .hp-input-hint {
        font-size: 12.5px;
        color: var(--hp-rose-light);
        margin-top: 8px;
        line-height: 1.45;
      }
      .hp-method-label {
        font-size: 13.5px;
        color: var(--hp-rose-light);
        margin-bottom: 12px;
        font-weight: 600;
        text-align: left;
      }
      .hp-method-selector {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin-bottom: 20px;
      }
      .hp-method-btn {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--hp-border);
        border-radius: 14px;
        padding: 12px;
        color: #ddd;
        font-size: 13.5px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: all 0.2s ease;
      }
      .hp-method-btn:hover {
        border-color: var(--hp-rose);
        color: #fff;
      }
      .hp-method-btn.active.tg {
        background: rgba(0, 136, 204, 0.25);
        border-color: #0088cc;
        color: #81D4FA;
      }
      .hp-method-btn.active.wa {
        background: rgba(37, 211, 102, 0.25);
        border-color: #25D366;
        color: #69F0AE;
      }
      .hp-method-btn.active.phone {
        background: rgba(244, 114, 182, 0.25);
        border-color: var(--hp-rose);
        color: #fff;
      }
      .hp-form-submit {
        width: 100%;
        background: var(--hp-grad-btn);
        color: #1a0818;
        border: none;
        border-radius: 20px;
        padding: 16px;
        font-size: 16px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(244, 114, 182, 0.4);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-form-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 32px rgba(244, 114, 182, 0.6);
      }
      .hp-form-policy {
        font-size: 12px;
        color: var(--hp-text-muted);
        margin-top: 14px;
      }
      .hp-form-policy a {
        color: var(--hp-rose-light);
        text-decoration: underline;
        cursor: pointer;
      }

      /* КОНТАКТЫ */
      .hp-contacts-card {
        background: var(--hp-bg-card);
        border: 1px solid var(--hp-border);
        border-radius: 26px;
        padding: 40px;
        max-width: 800px;
        margin: 0 auto;
      }
      .hp-contact-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 34px;
        font-weight: 700;
        margin: 0 0 24px;
        color: #fff;
        text-align: center;
      }
      .hp-contact-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 20px;
      }
      .hp-ci-icon { font-size: 22px; color: var(--hp-rose); }
      .hp-ci-label {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--hp-rose-light);
        margin-bottom: 4px;
        font-weight: 600;
      }
      .hp-ci-val { font-size: 15px; color: #fff; line-height: 1.45; }
      .hp-ci-val a { color: #fff; text-decoration: none; font-weight: 600; }

      /* ПРЕМИАЛЬНЫЙ ПОДВАЛ (GREYWOLF СТИЛЬ) */
      .hp-footer {
        background: #09050e;
        border-top: 1px solid var(--hp-border);
        padding: 50px 20px 30px;
        color: var(--hp-text-muted);
        font-size: 13px;
        line-height: 1.7;
      }
      .hp-footer-top {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr;
        gap: 40px;
        margin-bottom: 40px;
      }
      .hp-footer-brand {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .hp-footer-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 28px;
        font-weight: 700;
        background: var(--hp-grad-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-footer-requisites {
        font-size: 12.5px;
        color: #9d8fa9;
        line-height: 1.6;
        margin-top: 6px;
      }
      .hp-footer-col-title {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--hp-rose-light);
        font-weight: 700;
        margin-bottom: 16px;
      }
      .hp-footer-menu {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .hp-footer-menu a, .hp-footer-menu button {
        color: #b8acc7;
        text-decoration: none;
        font-size: 13.5px;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        font-family: inherit;
        transition: color 0.2s ease;
      }
      .hp-footer-menu a:hover, .hp-footer-menu button:hover {
        color: var(--hp-rose);
      }
      .hp-footer-bottom {
        padding-top: 24px;
        border-top: 1px solid rgba(244, 114, 182, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        font-size: 12px;
        color: #8b7d99;
      }
      .hp-footer-bottom-links {
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
      }
      .hp-footer-bottom-link {
        color: #8b7d99;
        text-decoration: underline;
        cursor: pointer;
        background: none;
        border: none;
        font-size: 12px;
        font-family: inherit;
        padding: 0;
        transition: color 0.2s;
      }
      .hp-footer-bottom-link:hover { color: var(--hp-rose-light); }

      /* ДЕТАЛЬНАЯ МОДАЛКА 152-ФЗ / ПОЛИТИКИ */
      .hp-policy-backdrop {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(8, 4, 14, 0.88);
        backdrop-filter: blur(10px);
        z-index: 100000;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .hp-policy-backdrop.open { display: flex; animation: hpFadeIn 0.25s ease; }
      @keyframes hpFadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
      .hp-policy-box {
        background: linear-gradient(180deg, #1b1029 0%, #10081a 100%);
        border: 1px solid var(--hp-border-active);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(244, 114, 182, 0.2);
        border-radius: 20px;
        max-width: 800px;
        width: 100%;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .hp-policy-top {
        padding: 20px 26px;
        border-bottom: 1px solid var(--hp-border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(14, 8, 22, 0.7);
      }
      .hp-policy-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
      }
      .hp-policy-close {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid var(--hp-border);
        color: #ddd;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        transition: all 0.2s;
      }
      .hp-policy-close:hover { background: var(--hp-rose); color: #1a0818; }
      .hp-policy-body {
        padding: 26px;
        overflow-y: auto;
        font-size: 13.5px;
        line-height: 1.7;
        color: #d1c5df;
      }
      .hp-policy-body h4 {
        color: var(--hp-rose-light);
        margin: 18px 0 8px;
        font-size: 15px;
      }
      .hp-policy-body p { margin-bottom: 12px; }

      /* ДВУХСТАДИЙНЫЙ БАННЕР COOKIE (GREYWOLF СТИЛЬ) */
      .hp-cookie-banner {
        position: fixed;
        bottom: 20px;
        left: 20px;
        max-width: 440px;
        width: calc(100% - 40px);
        background: #170d26;
        border: 1.5px solid var(--hp-rose);
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(244, 114, 182, 0.3);
        border-radius: 20px;
        padding: 22px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 14px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(25px);
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        box-sizing: border-box;
        color: #f3e8ff;
      }
      .hp-cookie-banner.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .hp-cookie-close-corner {
        position: absolute;
        top: 14px; right: 14px;
        width: 28px; height: 28px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(244, 114, 182, 0.25);
        color: #d1c5df;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s;
        z-index: 10;
      }
      .hp-cookie-close-corner:hover {
        background: var(--hp-rose);
        color: #1a0818;
      }
      .hp-cookie-view { display: flex; flex-direction: column; gap: 14px; }
      .hp-cookie-view.hidden { display: none; }
      .hp-cookie-top-nav { display: flex; align-items: center; gap: 12px; }
      .hp-cookie-back-btn {
        width: 32px; height: 32px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid var(--hp-border);
        color: var(--hp-rose);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .hp-cookie-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        line-height: 1.2;
      }
      .hp-cookie-text {
        font-size: 13px;
        line-height: 1.6;
        color: #b8acc7;
      }
      .hp-cookie-text a {
        color: var(--hp-rose-light);
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
      }
      .hp-cookie-btn-col {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 4px;
      }
      .hp-cookie-btn-primary {
        background: var(--hp-grad-btn);
        color: #1a0818;
        font-size: 13.5px;
        font-weight: 700;
        padding: 12px 18px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.2s;
        text-align: center;
      }
      .hp-cookie-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 18px rgba(244, 114, 182, 0.5);
      }
      .hp-cookie-btn-secondary {
        background: rgba(244, 114, 182, 0.15);
        color: var(--hp-rose-light);
        border: 1px solid var(--hp-border);
        font-size: 13.5px;
        font-weight: 600;
        padding: 11px 18px;
        border-radius: 12px;
        cursor: pointer;
        transition: background 0.2s;
        text-align: center;
      }
      .hp-cookie-btn-secondary:hover {
        background: rgba(244, 114, 182, 0.28);
      }
      .hp-cookie-btn-dark {
        background: rgba(255, 255, 255, 0.05);
        color: #b8acc7;
        font-size: 13px;
        font-weight: 600;
        padding: 11px 18px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        cursor: pointer;
        text-align: center;
      }
      .hp-cookie-btn-dark:hover {
        color: #fff;
        border-color: var(--hp-rose);
      }
      .hp-cookie-toggles-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 6px 0;
      }
      .hp-cookie-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--hp-border);
        border-radius: 12px;
        gap: 10px;
      }
      .hp-cookie-item-label {
        font-size: 13px;
        color: #eee;
        font-weight: 600;
      }
      .hp-switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
        flex-shrink: 0;
      }
      .hp-switch input { opacity: 0; width: 0; height: 0; }
      .hp-slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: #332344;
        transition: 0.25s;
        border-radius: 24px;
      }
      .hp-slider:before {
        position: absolute;
        content: "";
        height: 18px; width: 18px;
        left: 3px; bottom: 3px;
        background-color: #ffffff;
        transition: 0.25s;
        border-radius: 50%;
      }
      .hp-switch input:checked + .hp-slider { background-color: var(--hp-rose); }
      .hp-switch input:checked + .hp-slider:before { transform: translateX(20px); }
      .hp-switch input:disabled + .hp-slider { opacity: 0.6; cursor: not-allowed; }

      /* КНОПКА «НАВЕРХ» И ВИДЖЕТ ЗАЯВКИ */
      #hp-btn-top {
        position: fixed;
        bottom: 14px;
        left: 14px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: rgba(22, 13, 34, 0.9);
        border: 1px solid var(--hp-border-active);
        color: var(--hp-rose-light);
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9990;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        transition: transform 0.2s ease, background 0.2s ease;
      }
      #hp-btn-top:hover {
        transform: translateY(-2px);
        background: rgba(244, 114, 182, 0.3);
      }
      #hp-btn-top svg { width: 20px; height: 20px; fill: currentColor; }

      #hp-widget-lead {
        position: fixed;
        bottom: 14px;
        right: 14px;
        z-index: 9990;
      }
      .hp-widget-pulse-btn {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        padding: 12px 20px;
        border-radius: 25px;
        font-weight: 700;
        font-size: 13.5px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        box-shadow: 0 6px 20px rgba(244, 114, 182, 0.5);
        cursor: pointer;
        border: none;
        transition: transform 0.2s ease;
      }
      .hp-widget-pulse-btn:hover { transform: scale(1.04); }

      /* МОБИЛЬНАЯ АДАПТАЦИЯ */
      @media (max-width: 992px) {
        .hp-hero-grid { grid-template-columns: 1fr; }
        .hp-features-grid { grid-template-columns: repeat(2, 1fr); }
        .hp-catalog-grid { grid-template-columns: repeat(2, 1fr); }
        .hp-nav-links { display: none; }
        .hp-footer-top { grid-template-columns: 1fr; gap: 30px; }
      }
      @media (max-width: 640px) {
        .hp-features-grid { grid-template-columns: 1fr; }
        .hp-catalog-grid { grid-template-columns: 1fr; }
        .hp-quiz-options { grid-template-columns: 1fr; }
        .hp-hero-stats { grid-template-columns: 1fr; }
        .hp-method-selector { grid-template-columns: 1fr; }
        .hp-filter-row { flex-direction: column; align-items: flex-start; }
        .hp-footer-bottom { flex-direction: column; align-items: flex-start; }
      }
    `;
    document.head.appendChild(s);
  }

  // 3. БАЗА РЕАЛЬНЫХ СРЕЗОВ ИЗ TELEGRAM КАНАЛА (@hi_pretty)
  var cutsDatabase = [
  {
    "id": "4258",
    "cutNum": "#1247",
    "title": "Срез #1247 (65 см / 181 гр)",
    "cat": "straight",
    "length": 65,
    "weight": "181 гр",
    "price": "113 750 ₽",
    "img": "https://cdn4.telesco.pe/file/pxX-AoaIPci34Q7jpLRGMlDR5nIvOqRYXTITkYx2Xew-fd6JhcAovPvbQQzE1S1MecrjMltlvBWCaYCnFj_6cvn1U0qYnLy3SLp_cJQtHG5BpjgBRnjVt7rrC6U9nZv4R30uzwcwoB_N5_SXUra89kuqOA8PlmEWm-IuI-vuB_Hk7SEgYEZXzaTN-mvsdLwIvfv56cut7BE-KF55LoETEJGa45AfRpPJqLSb642SPTMA9azWcxmo0f_b3E3nfY_t4yRViJ-TGcc4SFscKRRUWcPZt0QREYWvMG4oAtdYdaXXci1FWCcJfiyIJKMK7BBLQjYeaN54iBnIElUcimtEnw",
    "tgUrl": "https://t.me/hi_pretty/4258",
    "desc": "Шелковые,маслянистые,нежнейшие,гладкие • #1247 65см/181гр - 113.750 • #1249 65см/144гр - 60.000"
  },
  {
    "id": "4263",
    "cutNum": "#1436",
    "title": "Срез #1436 (50 см / 107 гр)",
    "cat": "wave",
    "length": 50,
    "weight": "107 гр",
    "price": "41 000 ₽",
    "img": "https://cdn4.telesco.pe/file/llxxfwBO56PKPL-1DrXV6K_OD8GgZ1VU3MJ4DprO0AiioJMPkTDfqaZOMW-a6Wv_NczWOL-Gwn3_I6iqFIS3MmliIWtCN36yz2bHiOSUSb5S8u2eR9z9P5zPj54y_9gRVPWqTdtru45dSet1WHqod6E-OdzlC-NPZpvm9iDruUjCOqrqsGkloV0AnSxC-FDLm2i_wOnMgrwq9Q8Bfjw5MWiDdas_9-bkf_raZfo4mwa1vwVp3YCnZrQaNRivPJ-AGJ8OypSr39OV-BFB-jfrRg-djiaHb7FY8IeZwx3adt5de5SWjmiZNWH6ZA4Nfw4fGLE3GyauYIOhfQwCoSxRcw",
    "tgUrl": "https://t.me/hi_pretty/4263",
    "desc": "#1436 • Детский шелк • Природная волна,волосинка между тонкой и средней,есть выгоревшие прядки"
  },
  {
    "id": "4271",
    "cutNum": "#1387",
    "title": "Срез #1387 (66 см / 86 гр)",
    "cat": "silk",
    "length": 66,
    "weight": "86 гр",
    "price": "48 400 ₽",
    "img": "https://cdn4.telesco.pe/file/kRd4TmRmXPv9Xi2H1y2hhov_lx3qUSrGzXuAp8IuzCVTBzVsUUfD2tC-E1PgK7Tu9rr7QrEyR3pnfW1tvysf05wTadCaC4EqzPQM3XPAIRvCbo5JBgQ3W6CNRmnQlKILFaae6KEQmdMxo3mMowpmKhLMvWfkDIh9x1uCaj1ykEEqmoGXKu6e3v95FtKQHCiI-FAJd8vXAPTR1lTamz1DyDbvUbzo_pIx8q1DO91z6VaD5zq3hvJY1e2Z9emhUbsj3hdxr_VVaH5GcGeg0CcYp5I_vXF-14-HOz73v0R83kwa421Lh5jn0S9fyZWevqr3twFHWSB4F0yNSkUe4D7LKw",
    "tgUrl": "https://t.me/hi_pretty/4271",
    "desc": "Детские,шелковые,нежнейшие хвостики • #1387 66см/86гр - 48.400 • #1555 68см/140гр - 190.000"
  },
  {
    "id": "4276",
    "cutNum": "#1378",
    "title": "Срез #1378 (50 см / 80 гр)",
    "cat": "silk",
    "length": 50,
    "weight": "80 гр",
    "price": "47 200 ₽",
    "img": "https://cdn4.telesco.pe/file/QFycXKhIz5xnOXlenR25iUo3ZA1SItsQZ1O36M2pzy3AhUX3-Go8kKTcK2QCtNF9XYE_UW1ENS6q6QdShZQN9QP3sguVfRYA8jkRhZgk6zJdiGsYWEkfkkB6LIvu584DDqLrcTkjF6u2HWWrfvcIs8ZbRFiLgqQL9EAfMRjxwUrmtTc2CGak7MyVo3vWk2ouB11NI5byl0_jmimAhvMIM-8ddcK9dFpawyW4nCaAthiu8peCnctCaY__JPbvimpiRyygINPWno5A_ZV7CDRLEUV9yxZJ1mT6eyZeNSuIRMcda9Ko8ggdc7hzhOXdHTXWh2qFhurGFnjtIUQD5QV4PQ",
    "tgUrl": "https://t.me/hi_pretty/4276",
    "desc": "#1378 • Детский русский срез • Окрашен в щадящей технике без потери качества волос"
  },
  {
    "id": "4221",
    "cutNum": "#1255",
    "title": "Срез #1255 (62 см / 211 гр)",
    "cat": "silk",
    "length": 62,
    "weight": "211 гр",
    "price": "131 643 ₽",
    "img": "https://cdn4.telesco.pe/file/uhOcG_U8Baxa3DOVtSTSE_Eyvh8kvQ7DlKEtPMiR3bPpwcXgG_KRw8xchsuz2BiL4SGGRDjDK_hc-FjCnxzsBFs87JewOIwyLOpwflU2BttaQADqTGeEO-A0M_VZzLpIup0iCUPsImRvOImATblK3Kh1w5b9znYLeq0bDoSVtggOCbJCcz0UnDfHi-BYGRHZLXo7mk_EcEdjW2CT4FPK5VqsQGke3WkIjMLdHb4PRCgmElXvFfUAh9uJdLcSyQ-0w2lFgv8n5NwbT40ycXiqPR28_Ki0Uuu4-tyiviW5zFGMsrtAdvxtxm3Lfa90qsxYnMBotG8VK1BD661pflTx5w",
    "tgUrl": "https://t.me/hi_pretty/4221",
    "desc": "#1255 • Детский воздушный хвостик • Слегка пористый,не жесткий"
  },
  {
    "id": "4231",
    "cutNum": "#770",
    "title": "Срез #770 (50 см / 140 гр)",
    "cat": "silk",
    "length": 50,
    "weight": "140 гр",
    "price": "48 240 ₽",
    "img": "https://cdn4.telesco.pe/file/qzxLzFiGKyPcknORSgbSofZq_497AkVPW53vxwz1LWEpMGZ1O9iZkhZdee_PsmZAhbIba5cV7l1A-7UEi93EfiJ10QXBfMUXEUynHms-h7brx2OmDILU_YFIFOw3xLG1da0RipWpSKZ-25OfBBnuxuvaY8Zz4HgH2qpZ-PGDbfdImr-sCe0V-kg0XuxlWSUfdf8xMNwWvuEGB3n7CnDUhmsWufLbc7EsjdCX2Dme6BVTJC0rcUcWHrWLYWVePfJwTxl3ROhEwALL1dl5v0G4lv7gPX00P7xBW1XmSBEakQAHCb85EORo5Z81od__5UpxBYa3IFn2_pSCFUnEhQ5z5w",
    "tgUrl": "https://t.me/hi_pretty/4231",
    "desc": "Пористые,воздушные детские хвостики • Не жесткие,мягкие,волосинка между тонкой и средней • Идеально придадут желаемый обьем,маленьким количеством грамм в наращивании"
  },
  {
    "id": "4249",
    "cutNum": "#1386",
    "title": "Срез #1386 (60 см / 100 гр)",
    "cat": "wave",
    "length": 60,
    "weight": "100 гр",
    "price": "84 750 ₽",
    "img": "https://cdn4.telesco.pe/file/HpA7ZU7IbcbxLDU0gEsXw_APlBcDWFhJCz6hZBNfHvk408Zc-Bs3goK0MmVTvjUATPvmOOyP1gXcWd4IO55DbDbcIZaeNvyYuB29Osw25i9jDXEiwWk9BUbZgzZoNHh0WH4USqiYrkvX2tIr8yWKr-EfS-IDABMgjIFhsVohuSgVlAkcKz8IIlSDm2haZHZkJ9oJ_qkJtr0hkNvBtGk6-0H2Ns1Qm9uTcr6INm4r6hrusE1YsdZSbG54QKoIabfR7KwxzQImb6vrV_zMnf7xO3iEtvSXrcj8ZCDUVjmOyP2vO0I7kd2FwPc3ohn0_WS1qpIOWkGkz2AuNxn6C4WcbQ",
    "tgUrl": "https://t.me/hi_pretty/4249",
    "desc": "Детские срезы,выкрашены из славянских,русых хвостиков • Вычесаны от коротышей,подрезаны до густых концов • Волосинка нежная,мягкая,есть легкая волна"
  },
  {
    "id": "4201",
    "cutNum": "#1561",
    "title": "Срез #1561 (55 см / 106 гр)",
    "cat": "wave",
    "length": 55,
    "weight": "106 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/m6svvUcI-64ZHBzswuJq1DuPq1tzMgdbhimc06P7sE8G2VmcD6prYYoms1pQ9Ri0ONM21uVZBOTiwpVKwJ4Wh7i6iSasM0yMUYBbU988BkRvuJtsaC3wVhJCKcohZS_9b4HVwEsRsW7oKr73R6l4YO6GgL7Wyd8C4z1ad0WGKJHliPShxzhpXSg5PLe0s05iPz8jnfxF0tahWhHxzAcIH7OVS3GjbDNdZ1i_9AAJNdII4iY_UTZa7SRC2siqjD3seFa9ScrgwEaZNfTc5fPU67xVkMXryibH-3E4YmJ3xCrKwlZ3KCwXVJhtEhWz7WGGVikjajL9OIoKkuRRcpGBaw",
    "tgUrl": "https://t.me/hi_pretty/4201",
    "desc": "#1561 • Детский эксклюзив • Природная детская активная волнушка,нежнейший,волосинка тоненькая,легкая пористость"
  },
  {
    "id": "4211",
    "cutNum": "#1562",
    "title": "Срез #1562 (50 см / 115 гр)",
    "cat": "wave",
    "length": 50,
    "weight": "115 гр",
    "price": "115 000 ₽",
    "img": "https://cdn4.telesco.pe/file/SDNlV0t-8MZWR8wtQcehFLghQbnJZTqWxdIbeQfP6X5vI7KO7u0URn9Du_OppBLte4w3KK1km0HOh2E4gZp_jxZ36PHh6iJvUXz0mhqs7jsMbvJm6XAmhgTMcJ5LfsnBUa5IfUKEvg5un8VMlsIpz58mNmC0fhiNl8KpNOOkuzNfRxPrMzlGPUzIhwsvNF8o0o9rY0QgRVrmDz1c7kMk0gfKYdwM7l8tGHW89prdLJHKfoQ9hlAVR_zFcBlY_wE1-LGBQ_IaR35tr5PMNT-wRjXoh9c197xiadxdsOlZKEYzFAGwjfhMMPSclDg2FW947Y8hecIaRhx7OulxgHwpeA",
    "tgUrl": "https://t.me/hi_pretty/4211",
    "desc": "#1562 • Эксклюзив   🤍 • Шелковый,нежный,натуральный блонд"
  },
  {
    "id": "4177",
    "cutNum": "#1246",
    "title": "Срез #1246 (67 см / 229 гр)",
    "cat": "silk",
    "length": 67,
    "weight": "229 гр",
    "price": "87 350 ₽",
    "img": "https://cdn4.telesco.pe/file/HBMtVPS_KVzOhZgvKCy0QXhXImG08Kcg1XwQeayXErFPvMGpCCF2RcMTD5Y--d5UpsVcFIirhR32uB8Z3C6mskYDMPl9SzF0MVTbLMgP6YK1KCj8Rt-arfhOWXDBl2hP5ODKaZe385M34LXJETxNAa00AWEsMnYiT4WBsprwuvD4l46_E4AqWcNTBFx1uzkKXeQRCJBWX_LBYVpofFjLf19A_zQ9cbnAHZmTqwsr30qqkqUZyhkTREb_mp6zoKyf6ttVlrXoVqec2zYWSOePTQO4l9s2TsY_zw58f6jcdX9TP-k0Bl1EbBKIH3tDgMdYFC1NPpI6OIZu0XF2kQ9k3A",
    "tgUrl": "https://t.me/hi_pretty/4177",
    "desc": "#1246 • Детский,глянцевый срез • Шелковый,мягкий,волосинка ближе к средней"
  },
  {
    "id": "4187",
    "cutNum": "#1555",
    "title": "Срез #1555 (55 см / 106 гр)",
    "cat": "wave",
    "length": 55,
    "weight": "106 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/UPG2OUjtEsYr-BNZymzoMim4MgYo5MtscYHs9u7Byka9QfV4i5H2RlVIr2-fOYUqpML1w55_3zNtLVudjxyUN-HaZN35FJfij2Ir4yuo4bte-P0O1ipIths5gMYIHV4cmLSREh5ZzwrV3y6EpX-FD7afNs2gHY8wHUltrDAbWq01gwCuZfhJcvPbeq_38bq6k65iY8rGbdsw4lxxu8hrMsM5DLpeokwzPyKvnsi7EJptOh4BukEResPPSxVoZhKV182WGvLr7lGwe8L70-INXo27EWX2d_fqfaQGna2AvCmdqHuNXthjZCc5yJBLxja0UpnHksUk6xIolj78Zqvsvw",
    "tgUrl": "https://t.me/hi_pretty/4187",
    "desc": "#1555 • Детский эксклюзив • Природная детская активная волнушка,нежнейший,волосинка тоненькая,легкая пористость"
  },
  {
    "id": "4194",
    "cutNum": "#1373",
    "title": "Срез #1373 (53 см / 117 гр)",
    "cat": "silk",
    "length": 53,
    "weight": "117 гр",
    "price": "68 300 ₽",
    "img": "https://cdn4.telesco.pe/file/vB4CsD9EBOW160_2QMWhdM5e2lg0PrT3_6iTjoNqhKcECfK65iuK75r9NjiOXLb_LNZorNhfA6r9j-ceIDlFLGjfakGsC44bfR9wInznqWNJ62fgvuV8PQMusZW0Hr8Slq0JN7a1lAjqltlHrTvsKjAQNJ6GMe6udaDvpWiFKcPWAm2uzDTf8-xBUuN2RJmAIdMhAQjXQ0xdQ0N8P6z9LyY8jMe5Ox_JRVEQTU8XxDXsZQtJYt--EaIY8ZVozsS-xN5nEx_3vcgmaE_iboaOzwy_0gx6gQ9RnC06MTN28NOX_nA4IfCWnBf9SCdfu1ZFEYkYuEmDnhXFu46fCrwSUg",
    "tgUrl": "https://t.me/hi_pretty/4194",
    "desc": "#1373 • Детский,воздушный хвостик • Окрашен в щадящей технике,качество осталось прежним,срез мягкий,нежный"
  },
  {
    "id": "4157",
    "cutNum": "#1263",
    "title": "Срез #1263 (55 см / 156 гр)",
    "cat": "silk",
    "length": 55,
    "weight": "156 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/I4qTE5Xysh4WnMw0jSFZ23bMzXNm1UjHpF4qiVAaDomDpvAd3AW7Chg8gIbBguIPQLN7U6tixyaxFdyCv4C-_T_AHphh9Q41IDq4fif3i8_Bkt7aA9dlWtIwhoNKOY4E79_RCh09kOa4Tje_8XTpJIkWLWFB5CzjsnGtrFwkg8_0QtJXyhjUTSfG0sZsvHYmSXOwXFke86VkbCnkzZwOIacr7YdFs54YxfKy_SS-3alyz26E8mq60RNmwF5k5zY1Pmvbhe85M0dRBU60o9NMGCPwb6axW9NNEzymNnb0uvBMr_WXASpVbDMofHweN83Eg8fJ7W2pxuXToAeajsDt8A",
    "tgUrl": "https://t.me/hi_pretty/4157",
    "desc": "Детские  💎 • Природный блонд • Корень холодный 8-9"
  },
  {
    "id": "4167",
    "cutNum": "#1560",
    "title": "Срез #1560 (54 см / 96 гр)",
    "cat": "silk",
    "length": 54,
    "weight": "96 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/UmP_fe3ATt-yNQwlrsiSYqSuCQ3c6f2GHhRFM6zaE5vZYIHufbWMugBpCE1huI51hi_CehPEfaCTMEL_d8GLToGQItGzAeHER_DYyFGKICm4mvU0JBa7rdsNJkwZfTvL3uDuKOQlnCTzlfPEDUT8C2232lE-g2ICIRVdW-_EZxUPb3Om7RdQsGP_t4HQKQpHPyX-n9rse1hrtIK9fHPple-gR-L94iKjwdoqgC0-cr1sa6xg8jA4JbrsxJEkcWF7ujDqy_JljOEFPS0eGOW4o4wLEfS38KmjWRPXle-tzOJqwBHbOIxpMHUUCnX322ew5TNtnloTleHVrA_abrzBJg",
    "tgUrl": "https://t.me/hi_pretty/4167",
    "desc": "#1560 • Самый настоящий шелк • Нежнейший детский хвостик с тончайшей волосинкой"
  },
  {
    "id": "4137",
    "cutNum": "#993",
    "title": "Срез #993 (53 см / 168 гр)",
    "cat": "wave",
    "length": 53,
    "weight": "168 гр",
    "price": "171 000 ₽",
    "img": "https://cdn4.telesco.pe/file/n-z29KSDncx1gl2UIVZiQMx4aDKi9ulZcKFw5Uiyzk25bva0c684i6U9fmS0-UAh9H7rlLZY-dekMJht8uFgeV4ySskbWF4SK-Ac9yOeGJEiNvNjMtrC8O37nAt4RzAgN4qjBXYmU4raWTgmJHbm3oZFcNARBpTglIv16qsxVZnQ38d_yMwVM3tTCIMEEVeCj-aZnpIap4dUqZ8IPEAjcsup46aY_5tLeIvsQy6z38T9rtkx9BUthpO1ecDxB6_8w65s08IGgExNmf_FFUCu6q1sOddgnq3iuTZwKfgfzhEfLZNMZajtYYmqeBrkAlS_S69ruYD1e875hTvu73yRww",
    "tgUrl": "https://t.me/hi_pretty/4137",
    "desc": "#993 • Детский,натуральный блонд,шелк • Волосинка между тонкой и средней"
  },
  {
    "id": "4147",
    "cutNum": "#1434",
    "title": "Срез #1434 (72 см / 153 гр)",
    "cat": "straight",
    "length": 72,
    "weight": "153 гр",
    "price": "73 000 ₽",
    "img": "https://cdn4.telesco.pe/file/rgmu5-4Vqc5eP54jngZ9G0jcmagbK6FnZVyWQ7GWMqTQFjhQtJm8ZtW4AgxNWf_zOox-gKDmeRBZdorFCFiozAydZEj3zZF5o1uFxiSiJr8Oz4DUwJIjy5t9Cw7AEkTjpZO6VlE9bLFzB4MZuNeVFztq03C_QOD3sHLz2wnUHBjPtszlDl9CyJi1ljXSFsrCO3kGrN4mdqjpuyVZadCKgRF6zbqtzYzeYrAqgBxH_JqUYddCLiAO7gOwC7BWZTpGH1ss-02jbYxS6d76JFdS6d8rdQ93sYSh3wj511-5y1w4sv9id3-P0-PvswgatqKbhM0xNY7LrAt8458fGFMsbQ",
    "tgUrl": "https://t.me/hi_pretty/4147",
    "desc": "#1434 • Детский струящийся шелк • Идеально прямой,блестящий"
  },
  {
    "id": "4117",
    "cutNum": "#1261",
    "title": "Срез #1261 (55 см / 117 гр)",
    "cat": "wave",
    "length": 55,
    "weight": "117 гр",
    "price": "90 000 ₽",
    "img": "https://cdn4.telesco.pe/file/hQxexMqYzU4Dp7rLShlmbacjm9VyaQ1V2SGDVpjs5T8E_RriA9P60FFkf6_Mh_LM9W5-rlY30fZ4q_GcbY0qoKwfYWuak55H865v-YQA2e-xuSJcujou8py_ZkH9aFhHQcUoaDMkkrbhibDEutJ3OZFcBxfS8iTP34063R-sMVnpulu1F8TwxAmr9cWqzHjP93zA0KMet4u9cNKbAB5DlMBRdjJ_GeGFuW4wQG3z3tNkrxjmUdcZpUbUyQCXCC4LIyMbPhTI5TMLp_NGq9RxubOWmLF_b5aBR5z-0bweSGZsDjI66R7CVLO0JJqJShWFssNOFKzHMWak7nyYPdxKug",
    "tgUrl": "https://t.me/hi_pretty/4117",
    "desc": "#1261 • Детский шелковый срез с красивой природной,активной волной • Выгоревшие концы"
  },
  {
    "id": "4127",
    "cutNum": "#1218",
    "title": "Срез #1218 (58 см / 188 гр)",
    "cat": "straight",
    "length": 58,
    "weight": "188 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/Uxm2cKFFuCLNFHpdsNo83UGBuiu2VNSZhc706RJjiV1oiwweF_UdKq5snkqOSwWSgUeW45JySVWxaBJo_iaYG826-0-gZHXoeXjE8LU5Y39HDI2a8TMPpVPk8u_8kkNLBVh93_IvjZhUCI4mtTtE1-Sm4bONnKjJOHrYWZn7kkHB-ccrygW0GhHd-Ua_xzIoX16xH99az5_lbfEMT9c9q5O_AoFgXGRiuRXeKwIQOU4KoqNO9NeeBy21PbmCfkmR_h2wIvq8HsVXtySL-X9p3H8KW9a5ou1GlMta1G7jTaIdb95mbNV-xUp1rsNlE-DXIP-n3rrckiwb3tcSh5jZmQ",
    "tgUrl": "https://t.me/hi_pretty/4127",
    "desc": "#1218 • Детский,идеально прямой срез • Волосинка между тонкой и средней"
  },
  {
    "id": "4096",
    "cutNum": "#1247",
    "title": "Срез #1247 (65 см / 181 гр)",
    "cat": "wave",
    "length": 65,
    "weight": "181 гр",
    "price": "113 750 ₽",
    "img": "https://cdn4.telesco.pe/file/vC0zBA-A6_YQMdk8EU7klT2P5h3RmVox-uljtT9tgQ-aXwAWyrJtVTfw8svIBsn1jiELDJ9XEN7mGHS2Wsfte-8cb6dRGsuapv4D1NX3V_MvcyU20GLh-XUqJ1_3w9y4yEN6O_CIzLzlUZn1mQLsxeV3j37asrlf7R2qXEtzXs5DfcLIxKnV1ughPK2BKGLKFxpQyGvAxh2NNRqTFEdj_KcX_7umAeohAuaFVz5UuxLpsrPAKmQYF8m68Tk3t_UNmc1oV9B6-dp2uh7i6wMCQaYPaukeOgvXXu09smx63XPpXj4GWqncsJoI4PWW4I0DED1ZT0lfsfz8iGGgDfhg1w",
    "tgUrl": "https://t.me/hi_pretty/4096",
    "desc": "#1247 • Детский шелк • Легкая природная волна,блестящий,мягкий,волосинка ближе к тонкой"
  },
  {
    "id": "4106",
    "cutNum": "#1221",
    "title": "Срез #1221 (75 см / 197 гр)",
    "cat": "wave",
    "length": 75,
    "weight": "197 гр",
    "price": "149 000 ₽",
    "img": "https://cdn4.telesco.pe/file/RHWVWPUc7KvG4rVuvD56SrlAj7G2GDAPhe9dBalR-zMyYy4cfwY3-blVqSaSvgKOoDXfa9Cprq3sSlrou2zIM3QVgvqGikYI0iTNDlohGQfkxJZX1kV5971zUzG0b2A9a8bxd1DDwPJgdJMlEzWGOwCZfzosQUwAl6kEEqWLsnaJn2gjh0ISDc9IJiJNkEKHgE40tH1Hd9yj_SylaD-ICGtfTkYVVNPHe-fn6aUFkqNskkYY9KgCUOIJowXSN4NviAUcD_EbNy4OsgfoDWjb1YF637RCwLOk2OLZ0pSEMHI5-VbOrtghiTCih3GQV7PGIpCvL7ZfRCpOv2ihynjZHA",
    "tgUrl": "https://t.me/hi_pretty/4106",
    "desc": "#1221 • Детский срез с легкой волной • Волосинка между тонкой и средней,шелк"
  },
  {
    "id": "4076",
    "cutNum": "#1387",
    "title": "Срез #1387 (66 см / 86 гр)",
    "cat": "wave",
    "length": 66,
    "weight": "86 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/hyZLHFYPPNSAYje201VuCm3H_ZrHk2iZOoFNcBQXmHJOgw0eRe9XJcCprsycMRcO6xZX2sL_KZTLnFTF8kr99aBuKgcyU7xUp2ZkWdSV9uwXtuV0m45bWezL27SXxxOHxPM0acjRT_3iNbw3N8b_wL4xaHkIcHupf7DHkXdjX0MW-vYmIQqIFKj33AdMukhOAaEC5EkM_rXY5fveeG3xySB_89gx4hwq88kYHQ2c2D6BQhLK8JpFREd5YYWHTC9TtEnMuyK7ZdvN9EmsR2j8EFpvB2iqrP_CfD20v30Ozf9esOT7VRcG0lbOhGiWz47pqzVRDXCqwjYUFSShPBfp9g",
    "tgUrl": "https://t.me/hi_pretty/4076",
    "desc": "#1387 • Детский срез с волной • Волосинка между тонкой и средней,мягкий,воздушный"
  },
  {
    "id": "4086",
    "cutNum": "#1557",
    "title": "Срез #1557 (55 см / 125 гр)",
    "cat": "straight",
    "length": 55,
    "weight": "125 гр",
    "price": "160 000 ₽",
    "img": "https://cdn4.telesco.pe/file/SwZFQkotJ7y9nyqLp7gAO10EEWHjsvN7sYgVv1NhtOTURpksUbpgy4WY_8S0-6MM4mWB9QzlW5iQWuV8TwfXXKWLnWOW1lmN7QTHw93LP_qpX7M65vuCYGdfjBD1divykufceZt4Os20o2JESgCr9GqMc6NeYU9u2ynK3Nz4gKM-Ft-m9lBrtSUK9Su1h5xMC5-XxEf445sH8LdTGRRzLO5aS6taA6blW7QNqEub4LDJNM-B8oGcZfwOX7zd5EAahGA77YZDdO-bXqA2YW-TJGx4B9iFGGz2vKbDopY9fhfKElPxLmu9FThR8VTy_03euVVl5BC8wTqr8aQfhMy-qg",
    "tgUrl": "https://t.me/hi_pretty/4086",
    "desc": "#1557 • Детский нежнейший срез • Гладкий,как маслянистый"
  },
  {
    "id": "4056",
    "cutNum": "#1272",
    "title": "Срез #1272 (76 см / 162 гр)",
    "cat": "straight",
    "length": 76,
    "weight": "162 гр",
    "price": "132 678 ₽",
    "img": "https://cdn4.telesco.pe/file/EKX7qmPD8IGwxJlVc6rwmOG4oB0eKn3VN1UzMLwo-FJZ5nuDG8vEzKVK8XEJphnQe0tAy707zE2KDny93HvR-2wBLyHUOsGmv7kSqOz1uMnvX0fynchs7AT2hV_sUFJCTDdCPNWmHc4dV4T4LFigfvGymA7jbGh7ftraoqUwpmtL4oBUJ8JUPWtpDqworWknLj5I2LTnUkLXzqjKN_kDlh1D8zR-p_IO2k9QCT8znEMbBrAruWatAX6gkLdmxo9KfqDexjxhPKRal_9OBVgMdk9nNnzYjoWfHv2ZRjjtif5vTpkXQN0tdi2Aftpg16v8HYB4HBvybQhw9RMSCLBAMA",
    "tgUrl": "https://t.me/hi_pretty/4056",
    "desc": "#1272 • Детский,прямой,блестящий срез • Есть выгоревшие пряди"
  },
  {
    "id": "4066",
    "cutNum": "#1557",
    "title": "Срез #1557 (48 см / 157 гр)",
    "cat": "silk",
    "length": 48,
    "weight": "157 гр",
    "price": "152 000 ₽",
    "img": "https://cdn4.telesco.pe/file/q8dcCu5CO4orhLY0GVteSeg1FM7iNc1VBLkUNV7OjzZZ1iC1C_FAL9ssJGoPL32HUOM2P6VpYossoRVyTrjIUyp-HG9Q_Q-_wXXyx8A4w1_xclCSEn3rT1aJF2MT4dl6hAA0HiwjXQliiio-9aJ11O1YwzIS-il9s0b0a6u3xgaP7VOEYGnQEKjZwRha6L_SqJXKQNyPQ9ZBXQxJPeY9D-QaCnCZDvZjh0W6QQCjB3o-fQnePZ1TOvck1O70GPrjQSdZc9QUWf3ku1_T34RxFbM6J8pjdhcXCXUd0mCpXOBtsg57_TexKViF2cscPmgIVlfw2jwmWl17yN2SvQjvkA",
    "tgUrl": "https://t.me/hi_pretty/4066",
    "desc": "#1557 • Детская кудряшка • Эффектный хвостик с природной кудрей"
  },
  {
    "id": "4036",
    "cutNum": "#1162",
    "title": "Срез #1162 (81 см / 252 гр)",
    "cat": "wave",
    "length": 81,
    "weight": "252 гр",
    "price": "85 500 ₽",
    "img": "https://cdn4.telesco.pe/file/Ghq6xe0vQc8obzDrDwpXveWWdYY9AravPPreBmejAYcGNu2lZpSMkYCV1nwPGJQQamoYQh3XxIid41rjMODb_btZrQpXATUY8QphXwLX33cSnmo1961CnH-xzZVos1unwcjlkQEJS4V-bYOGZ_S6W7rm-GTxRYHIvQgb5SzMVhp-2wHvKy44359Iuk8wF_To34nDi3cjLU4ooWn4O-bTwf85bbA_WQ8lHg1dLKad7DLnFE594Janii5LpcWWgV6t2mgM_Tz1sTxSM5saZGz15svd9YifxFOa3zKZFrcm8GzhMvL5KQwa0OJmo8WQEx8lBTl2igGxTTAzZVPgregs7w",
    "tgUrl": "https://t.me/hi_pretty/4036",
    "desc": "#1162 • Детский хвостик,волосинка ближе к средней,легкая волна • 5 тон у корней,выгоревшие концы 6 тон"
  },
  {
    "id": "4046",
    "cutNum": "#990",
    "title": "Срез #990 (50 см / 117 гр)",
    "cat": "silk",
    "length": 50,
    "weight": "117 гр",
    "price": "52 650 ₽",
    "img": "https://cdn4.telesco.pe/file/Ytl0w8AKKgXzLeyMmGUnQmI-eid9RLVJJ4o7oLZxge-kEe_yVcXAKfOdLEC5TxVUCRBzdQnFKrtyH0rSnJmB-8DVewlC4dogiDmcqRDQZ74WSuOjJy3ZrVIGnw0k463MxNOl0Ooig9La8N8789H3sIt2wAmorsEtNDmmd9qIem1I-RTHjWbF6oJMCd43HkmER29FQ_a2yusxK4G25nY4QWFwL7OAQIL7suT2ZstUgZMtVVP8VUBZ5NE7f-ymJeb16niiMErtDLpVEpJuPz97309Qo9wG_-WGXsSLJUUcujVMlt_MPshoHAbMyj6AgdMaRkxMhUn35iZInsyqJi41XA",
    "tgUrl": "https://t.me/hi_pretty/4046",
    "desc": "Детские,шелковые   🤍 • #990 50см/117гр - 52.650₽ продан • #1429 50см/112гр - 49.000₽"
  },
  {
    "id": "4006",
    "cutNum": "#1559",
    "title": "Срез #1559 (67 см / 140 гр)",
    "cat": "wave",
    "length": 67,
    "weight": "140 гр",
    "price": "Уточняйте в TG",
    "img": "https://cdn4.telesco.pe/file/lApn70SRsj9x6Q_Bti49shCyJjwmFeJmkO1eDwAS5hYzIv_fO7HDQNLhdWY2D-3M9bBCiYlI7msO6PefHncyl55-e5mLEWnCgReId3R8eIDguqrDgO6veoTbFckswehs3ynj9MCvKzAwWRaddOojxPgJZqjPmSaCUwuQqD5b7cPb3Ptspt_TlTX9leCeMMNEBGTRzT6Q2n1KicJdmjwTPkiOhSUnZV5eZMI4jbpRPyBdNbyGIgjvySPOILkikU4SGCECws4AcTKfr9RnSAXLL3KBKO1xhnC6QgwIewUvlwS-bmeZxoJIr5pjsHPfoTJv2h0enEznJJwu5tMOso7ang",
    "tgUrl": "https://t.me/hi_pretty/4006",
    "desc": "#1559 • Платиновый блонд   🤍 • Детский срез(Азия),окрашен в щадящей технике,без потери качества волос"
  },
  {
    "id": "4016",
    "cutNum": "#1555",
    "title": "Срез #1555 (68 см / 140 гр)",
    "cat": "wave",
    "length": 68,
    "weight": "140 гр",
    "price": "190 000 ₽",
    "img": "https://cdn4.telesco.pe/file/sD8i8RqjZHJOt_I21o45FDjONqQ2VdfGWIHyac4-uDMkF1buh2RacBDH-x6B572owWy44J8IVYXOknyWgvKnhxoFEcTc0aDWb5wly_v0lMyvIwA9LkOFt-LAps4dYcsRiQw6fpx3vSt4EBripdtTAwY1T78ssidacShJXmEZh2yAjGXwBxRiw2KM3i-4yiKjmufDlxx2nHPvNMOt0C1wWluzgWcdAYkQQkedcpnKc2V0xGNadlkfQP81H1kfPdMvz1pvFDFjT1nVdV-ZN36PAxq53gRXkQw6mT-0smEqx_72cO1orEOD13o_8cOaw4fWVNZ5iJ660rAQYLCo1g_QvQ",
    "tgUrl": "https://t.me/hi_pretty/4016",
    "desc": "#1555 • Детский блондик • Природная активная волна,волосинка тонкая как паутинка"
  }
];

  // 4. HTML РАЗМЕТКА САЙТА
  var html = `
<div id="hp-app">
  <!-- ХЕДЕР -->
  <header class="hp-header">
    <div class="hp-container" style="display:flex;align-items:center;justify-content:space-between;width:100%;">
      <a href="https://hipretty.ru" class="hp-logo-wrap">
        <div class="hp-logo">привет, волосы!</div>
        <div class="hp-logo-sub">магазин натуральных волос • москва</div>
      </a>
      <nav class="hp-nav-links">
        <a href="#catalog" class="hp-nav-link">Срезы в наличии</a>
        <a href="#why-us" class="hp-nav-link">Преимущества</a>
        <a href="#selection" class="hp-nav-link">Подбор среза</a>
        <a href="#contacts" class="hp-nav-link">Контакты студии</a>
      </nav>
      <div class="hp-header-actions">
        <a href="tel:+79933365357" class="hp-header-phone">8 (993) 336-53-57</a>
        <button type="button" class="hp-btn-header-cta hp-open-form-btn">Консультация ✦</button>
      </div>
    </div>
  </header>

  <!-- ГЛАВНЫЙ ЭКРАН (HERO) -->
  <section class="hp-container hp-hero">
    <div class="hp-hero-grid">
      <div class="hp-hero-info">
        <div class="hp-badge-geo"><span></span> Доставка по всей России и миру • Склад в Москве</div>
        <h1 class="hp-hero-title">Натуральные детские<br>славянские срезы <span>высшего качества</span></h1>
        <p class="hp-hero-desc">
          Большой выбор отборных некрашеных волос в наличии в Москве (>35 кг). 
          100% живой волос от одного донора без силикона и химии: ровные плотные концы, шелковистая структура. 
          Быстрая отправка в любой город России и за рубеж.
        </p>
        <div class="hp-hero-cta-box">
          <button type="button" class="hp-btn-main hp-open-form-btn">✦ Подобрать идеальный срез</button>
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
            <div class="hp-stat-lbl">Быстрая отправка СДЭК и курьером по всей стране</div>
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

  <!-- ПРЕИМУЩЕСТВА -->
  <section class="hp-container" id="why-us" style="padding: 20px 20px 40px;">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Честное качество</span>
      <h2 class="hp-sec-title">Почему наши волосы выбирают <span>по всей России</span></h2>
      <p class="hp-sec-desc">Мы лично отбираем каждый хвостик и гарантируем безупречное качество от первой примерки до многократных коррекций.</p>
    </div>
    <div class="hp-features-grid">
      <div class="hp-feature-card">
        <div class="hp-feat-icon">✨</div>
        <h3 class="hp-feat-title">Один срез — один донор</h3>
        <p class="hp-feat-desc">Волосы не смешиваются. Кутикула направлена строго в одну сторону, поэтому они не путаются после мытья.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🌿</div>
        <h3 class="hp-feat-title">Без силикона и химии</h3>
        <p class="hp-feat-desc">Природный живой волос. Сохраняет естественную шелковистость и блеск даже после окрашивания и термоукладок.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">⚖️</div>
        <h3 class="hp-feat-title">Честный вес и длина</h3>
        <p class="hp-feat-desc">Показываем подробные фото и видео выбранного среза при дневном свете перед покупкой.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🚚</div>
        <h3 class="hp-feat-title">Быстрая доставка</h3>
        <p class="hp-feat-desc">Быстрая отправка СДЭК в любой регион России (1–3 дня). Доставка по миру. Надежная упаковка.</p>
      </div>
    </div>
  </section>

  <!-- ИНТЕРАКТИВНЫЙ КАТАЛОГ СРЕЗОВ (ПРЯМОЙ ЭФИР TELEGRAM @hi_pretty) -->
  <section class="hp-container hp-catalog-section" id="catalog">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Прямой эфир с Telegram-канала @hi_pretty</span>
      <h2 class="hp-sec-title">Примеры срезов <span>из нашего канала</span></h2>
      <p class="hp-sec-desc">
        Публикуем реальные хвостики из ленты Telegram с ценами, фото и точными параметрами. 
        Поскольку срезы быстро разбирают, нажмите «Уточнить наличие» — мастер сразу проверит выбранный хвостик или подберет точно такой же из >35 кг со склада.
      </p>
    </div>

    <!-- ПАНЕЛЬ УМНЫХ ФИЛЬТРОВ -->
    <div class="hp-catalog-filter-bar">
      <!-- 1. ТИП СТРУКТУРЫ -->
      <div class="hp-filter-row">
        <div class="hp-filter-label">Структура волос:</div>
        <div class="hp-filter-group" id="filter-type-group">
          <button type="button" class="hp-filter-pill active" data-type="all">Все примеры (28)</button>
          <button type="button" class="hp-filter-pill" data-type="silk">Детский шелк (Люкс)</button>
          <button type="button" class="hp-filter-pill" data-type="wave">Природная волна</button>
          <button type="button" class="hp-filter-pill" data-type="straight">Прямые и гладкие</button>
        </div>
      </div>

      <!-- 2. ДЛИНА -->
      <div class="hp-filter-row">
        <div class="hp-filter-label">Длина волос:</div>
        <div class="hp-filter-group" id="filter-length-group">
          <button type="button" class="hp-filter-pill active" data-len="all">Любая длина</button>
          <button type="button" class="hp-filter-pill" data-len="50">До 50 см</button>
          <button type="button" class="hp-filter-pill" data-len="60">53–65 см</button>
          <button type="button" class="hp-filter-pill" data-len="70">66–80+ см</button>
        </div>
      </div>
    </div>

    <div class="hp-catalog-counter">
      Показано срезов: <strong id="hp-cuts-shown-count">0</strong> из <strong id="hp-cuts-total-count">0</strong>
    </div>

    <!-- СЕТКА КАРТОЧЕК КАТАЛОГА -->
    <div class="hp-catalog-grid" id="hp-catalog-cards">
      <!-- Генерируется динамически через JS -->
    </div>
  </section>

  <!-- ОНЛАЙН-ПОДБОР СРЕЗА (КВИЗ) -->
  <section class="hp-container hp-quiz-section" id="selection">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Индивидуальный подбор</span>
      <h2 class="hp-sec-title">Подберите срез <span>под свои параметры</span></h2>
      <p class="hp-sec-desc">Укажите желаемую длину и тип волос — мастер отберет 3 подходящих варианта из наличия.</p>
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

      <div class="hp-quiz-step-title">2. Тип структуры волос:</div>
      <div class="hp-quiz-options" id="quiz-type">
        <div class="hp-quiz-opt selected" data-val="Детский шелк">
          <div class="hp-quiz-opt-val">Детский шелк</div>
          <div class="hp-quiz-opt-desc">Тончайшая нежная волосинка</div>
        </div>
        <div class="hp-quiz-opt" data-val="Славянский стандарт">
          <div class="hp-quiz-opt-val">Славянский шелк</div>
          <div class="hp-quiz-opt-desc">Универсальный мягкий волос</div>
        </div>
        <div class="hp-quiz-opt" data-val="Природная волна">
          <div class="hp-quiz-opt-val">Природная волна</div>
          <div class="hp-quiz-opt-desc">Естественный текстурный завиток</div>
        </div>
      </div>

      <div style="text-align:center;margin-top:20px;">
        <button type="button" class="hp-btn-main hp-open-form-btn">Показать подходящие срезы из наличия ✦</button>
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
          Оставьте контакты, и наш мастер бесплатно подберет идеальный срез по вашему фото и покажет варианты.
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
              <strong>Внимание! При выборе Telegram:</strong> Укажите ник в Telegram (@username) или номер телефона.
            </div>
          </div>

          <button type="submit" id="hp-submit-btn" class="hp-form-submit">Получить подбор и фото среза ✦</button>

          <div class="hp-form-policy">
            Нажимая кнопку, вы соглашаетесь с <a onclick="openPolicyModal('privacy')">Политикой конфиденциальности</a> (152-ФЗ РФ).
          </div>
          <div id="hp-form-success" style="display:none;margin-top:20px;color:#10B981;font-weight:700;font-size:15px;line-height:1.5;">
            ✓ Заявка успешно принята! Менеджер уже подбирает срезы и готовит фото и видео.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- КОНТАКТЫ СТУДИИ -->
  <section class="hp-container" id="contacts" style="padding: 20px 20px 60px;">
    <div class="hp-contacts-card">
      <h2 class="hp-contact-title">Контакты студии</h2>
      <div class="hp-contact-item">
        <div class="hp-ci-icon">📍</div>
        <div>
          <div class="hp-ci-label">Адрес студии в Москве</div>
          <div class="hp-ci-val">г. Москва, м. Арбатская / Смоленская, Староконюшенный переулок 35с2 (по предварительной записи)</div>
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
          <div class="hp-ci-val">Вт – Вск: с 11:00 до 20:00 (по предварительной записи). Онлайн-подбор: 24/7</div>
        </div>
      </div>
      <div class="hp-contact-item">
        <div class="hp-ci-icon">💬</div>
        <div>
          <div class="hp-ci-label">Мессенджеры для связи</div>
          <div class="hp-ci-val">
            <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:var(--hp-rose);margin-right:14px;">✈ Telegram: @hi_pretty</a>
            <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:#69F0AE;">● WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ПРЕМИАЛЬНЫЙ ПОДВАЛ (GREYWOLF СТИЛЬ) -->
  <footer class="hp-footer">
    <div class="hp-container">
      <div class="hp-footer-top">
        <div class="hp-footer-brand">
          <div class="hp-footer-logo">привет, волосы!</div>
          <div style="font-size:13px;color:var(--hp-rose);text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">Магазин натуральных волос • Москва</div>
          <div class="hp-footer-requisites">
            ИП Лесовая В. С.<br>
            ИНН: 100201988457 • ОГРНИП: 323774600090577<br>
            Адрес: г. Москва, Староконюшенный пер. 35с2 (по предварительной записи)<br>
            Доставка курьером и СДЭК по всей России и миру.
          </div>
        </div>

        <div>
          <div class="hp-footer-col-title">Навигация</div>
          <div class="hp-footer-menu">
            <a href="#catalog" class="hp-nav-link">Срезы в наличии (>35 кг)</a>
            <a href="#selection" class="hp-nav-link">Подбор под ваши параметры</a>
            <a href="#why-us" class="hp-nav-link">Почему наши волосы</a>
            <a href="#contacts" class="hp-nav-link">Контакты студии</a>
            <button type="button" class="hp-open-form-btn">Запросить индивидуальный подбор</button>
          </div>
        </div>

        <div>
          <div class="hp-footer-col-title">Связь и документы</div>
          <div class="hp-footer-menu">
            <a href="https://t.me/hi_pretty" target="_blank" rel="noopener">✈ Telegram: @hi_pretty</a>
            <a href="https://wa.me/79933365357" target="_blank" rel="noopener">● WhatsApp: +7 (993) 336-53-57</a>
            <a href="tel:+79933365357">📞 8 (993) 336-53-57</a>
            <button type="button" onclick="openPolicyModal('privacy')">Политика конфиденциальности (152-ФЗ)</button>
            <button type="button" onclick="openPolicyModal('consent')">Согласие на обработку данных</button>
            <button type="button" onclick="openCookieSettings()">Настройки файлов Cookie</button>
          </div>
        </div>
      </div>

      <div class="hp-footer-bottom">
        <div>© 2026 Магазин натуральных волос «привет, волосы!». Все права защищены.</div>
        <div class="hp-footer-bottom-links">
          <button type="button" class="hp-footer-bottom-link" onclick="openPolicyModal('privacy')">Конфиденциальность 152-ФЗ</button>
          <span>•</span>
          <button type="button" class="hp-footer-bottom-link" onclick="openPolicyModal('consent')">Согласие на обработку данных</button>
          <span>•</span>
          <button type="button" class="hp-footer-bottom-link" onclick="openCookieSettings()">Настройки Cookie</button>
          <span>•</span>
          <a href="https://hipretty.ru/spk" target="_blank" rel="noopener" class="hp-footer-bottom-link">Политика на сайте (SPK)</a>
          <span>•</span>
          <a href="https://hipretty.ru/sps" target="_blank" rel="noopener" class="hp-footer-bottom-link">Согласие на сайте (SPS)</a>
        </div>
      </div>
    </div>
  </footer>
</div>

<!-- МОДАЛ ПОЛИТИКИ И СОГЛАСИЯ 152-ФЗ -->
<div id="hp-policy-modal" class="hp-policy-backdrop" onclick="closePolicyModal()">
  <div class="hp-policy-box" onclick="event.stopPropagation()">
    <div class="hp-policy-top">
      <div id="hp-policy-modal-title" class="hp-policy-title">Политика конфиденциальности</div>
      <button type="button" class="hp-policy-close" onclick="closePolicyModal()">✕</button>
    </div>
    <div id="hp-policy-modal-body" class="hp-policy-body"></div>
  </div>
</div>

<!-- ДВУХЭТАПНЫЙ БАННЕР COOKIE (GREYWOLF СТИЛЬ) -->
<div id="hp-cookie-banner" class="hp-cookie-banner">
  <button type="button" class="hp-cookie-close-corner" onclick="closeCookieBanner()" title="Закрыть">✕</button>
  
  <div id="hp-cookie-view-main" class="hp-cookie-view">
    <div class="hp-cookie-title">«привет, волосы!» использует cookie</div>
    <div class="hp-cookie-text">
      Они необходимы для правильной и надежной работы сайта, сохранения ваших настроек и веб-аналитики (Яндекс.Метрика). Подробнее читайте в <a onclick="openPolicyModal('privacy')">Политике конфиденциальности</a>.
    </div>
    <div class="hp-cookie-btn-col">
      <button type="button" class="hp-cookie-btn-primary" onclick="acceptAllCookies()">Разрешить все</button>
      <button type="button" class="hp-cookie-btn-secondary" onclick="acceptEssentialCookies()">Разрешить обязательные</button>
      <button type="button" class="hp-cookie-btn-dark" onclick="showCookieSettings()">Настроить</button>
    </div>
  </div>

  <div id="hp-cookie-view-settings" class="hp-cookie-view hidden">
    <div class="hp-cookie-top-nav">
      <button type="button" class="hp-cookie-back-btn" onclick="hideCookieSettings()" title="Назад">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="hp-cookie-title">Настройки файлов cookie</div>
    </div>
    <div class="hp-cookie-text">
      Вы можете выбрать, какие типы файлов cookie разрешить для использования на сайте.
    </div>
    <div class="hp-cookie-toggles-list">
      <div class="hp-cookie-item">
        <div class="hp-cookie-item-label">Технические (обязательные)</div>
        <label class="hp-switch">
          <input type="checkbox" checked disabled>
          <span class="hp-slider"></span>
        </label>
      </div>
      <div class="hp-cookie-item">
        <div class="hp-cookie-item-label">Аналитические (Яндекс.Метрика)</div>
        <label class="hp-switch">
          <input type="checkbox" id="hp-cookie-toggle-analytics" checked>
          <span class="hp-slider"></span>
        </label>
      </div>
      <div class="hp-cookie-item">
        <div class="hp-cookie-item-label">Маркетинговые и другие</div>
        <label class="hp-switch">
          <input type="checkbox" id="hp-cookie-toggle-other" checked>
          <span class="hp-slider"></span>
        </label>
      </div>
    </div>
    <div class="hp-cookie-btn-col">
      <button type="button" class="hp-cookie-btn-primary" onclick="saveCustomCookieSettings()">Сохранить настройки</button>
    </div>
  </div>
</div>
`;

  var currentMethod = 'telegram';
  var selectedType = 'all';
  var selectedLen = 'all';
  var selectedShade = 'all';

  function scrollToSection(targetId) {
    var el = document.getElementById(targetId);
    if (!el) return;
    var headerOffset = 80;
    var elementPosition = el.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  function renderCatalogCards() {
    var container = document.getElementById('hp-catalog-cards');
    if (!container) return;

        var filtered = cutsDatabase.filter(function(item) {
      if (selectedType !== 'all' && item.cat !== selectedType) return false;
      if (selectedLen !== 'all') {
        if (selectedLen === '50' && (item.length > 50)) return false;
        if (selectedLen === '60' && (item.length < 51 || item.length > 65)) return false;
        if (selectedLen === '70' && (item.length < 66)) return false;
      }
      return true;
    });

    var countEl = document.getElementById('hp-cuts-shown-count');
    if (countEl) countEl.textContent = filtered.length;
    var totalEl = document.getElementById('hp-cuts-total-count');
    if (totalEl) totalEl.textContent = cutsDatabase.length;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--hp-bg-card); border-radius: 20px; border: 1px dashed var(--hp-border);">
          <div style="font-size: 32px; margin-bottom: 12px;">🔎</div>
          <h3 style="font-size: 20px; color: #fff; margin: 0 0 10px;">Срезов с такими параметрами сейчас нет в витрине</h3>
          <p style="color: var(--hp-text-muted); font-size: 14px; margin: 0 0 20px;">В наличии на складе более 35 кг волос! Оставьте заявку — мастер подберет идеальный срез индивидуально.</p>
          <button type="button" class="hp-btn-main hp-open-form-btn">Запросить индивидуальный подбор ✦</button>
        </div>
      `;
      setupActionButtons();
      return;
    }

    var htmlCards = filtered.map(function(item) {
      var badgeText = item.cat === 'wave' ? 'Природная волна' : (item.cat === 'straight' ? 'Прямой шелк' : 'Детский шелк • Люкс');
      return `
        <div class="hp-cut-card" data-id="${item.id}">
          <div class="hp-cut-img-wrap">
            <img src="${item.img}" alt="${item.title}" class="hp-cut-img" loading="lazy">
            <span class="hp-cut-badge">${badgeText}</span>
            <span class="hp-cut-price-tag">${item.price}</span>
          </div>
          <div class="hp-cut-body">
            <h3 class="hp-cut-title">${item.title}</h3>
            <div class="hp-cut-meta">
              <span>${item.length} см</span>
              <span>${item.weight}</span>
              <span>Пост в канале</span>
            </div>
            <p class="hp-cut-desc">${item.desc}</p>
            <div class="hp-cut-actions">
              <button type="button" class="hp-cut-btn hp-open-form-btn" data-cut="${item.title}">Уточнить наличие ✦</button>
              <a href="${item.tgUrl}" target="_blank" rel="noopener" class="hp-cut-btn-tg" title="Открыть этот пост в Telegram @hi_pretty">В TG &rarr;</a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = htmlCards;
    setupActionButtons();
  }

  function setupActionButtons() {
    var btns = document.querySelectorAll('.hp-open-form-btn');
    btns.forEach(function(b) {
      if (b.dataset.bound) return;
      b.dataset.bound = 'true';
      b.addEventListener('click', function(e) {
        e.preventDefault();
        var cutName = b.getAttribute('data-cut');
        if (cutName) {
          var note = document.getElementById('hp-user-contact');
          if (note && !note.value) {
            note.placeholder = 'Для среза: ' + cutName;
          }
        }
        scrollToSection('lead-box');
      });
    });
  }

  // ===================== COOKIE & 152-ФЗ СИСТЕМА =====================
  var policyTexts = {
    privacy: {
      title: 'Политика конфиденциальности (152-ФЗ РФ)',
      content: `
        <h4>1. Общие положения</h4>
        <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности данных, предпринимаемые магазином натуральных волос «привет, волосы!» (ИП Лесовая В. С., ИНН: 100201988457, ОГРНИП: 323774600090577).</p>
        <h4>2. Цели обработки персональных данных</h4>
        <p>Персональные данные (имя, контактный телефон, никнейм/аккаунт в Telegram или WhatsApp) обрабатываются исключительно в целях консультации, подбора срезов натуральных волос, демонстрации фото/видео материалов и оформления доставки заказа по согласованию с клиентом.</p>
        <h4>3. Правовые основания</h4>
        <p>Оператор обрабатывает персональные данные только при их заполнении и отправке Пользователем через формы на сайте hipretty.ru. Отправляя свои данные, Пользователь выражает свое полное согласие с данной Политикой.</p>
        <h4>4. Безопасность и конфиденциальность</h4>
        <p>Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ неуполномоченных лиц. Данные не передаются третьим лицам, за исключением случаев выполнения доставки (служба курьерской доставки / СДЭК).</p>
      `
    },
    consent: {
      title: 'Согласие на обработку персональных данных (152-ФЗ)',
      content: `
        <h4>Согласие Пользователя</h4>
        <p>Настоящим я, действуя свободно, своей волей и в своем интересе, даю согласие ИП Лесовая В. С. (ИНН 100201988457, ОГРНИП 323774600090577) на обработку моих персональных данных:</p>
        <p>• Имя;<br>• Номер контактного телефона;<br>• Имя пользователя / никнейм в мессенджерах Telegram или WhatsApp.</p>
        <h4>Цели предоставления данных</h4>
        <p>Обработка осуществляется для обратной связи, консультации мастера, подбора натуральных срезов волос по моим параметрам, подтверждения бронирования и организации курьерской или почтовой доставки по всей территории РФ и за рубеж.</p>
        <p>Настоящее согласие действует бессрочно с момента предоставления данных и может быть отозвано путем направления письменного уведомления Оператору.</p>
      `
    }
  };

  window.openPolicyModal = function(type) {
    type = type || 'privacy';
    var modal = document.getElementById('hp-policy-modal');
    var titleEl = document.getElementById('hp-policy-modal-title');
    var bodyEl = document.getElementById('hp-policy-modal-body');
    if (!modal) return;
    var data = policyTexts[type] || policyTexts.privacy;
    if (titleEl) titleEl.textContent = data.title;
    if (bodyEl) bodyEl.innerHTML = data.content;
    modal.classList.add('open');
  };

  window.closePolicyModal = function() {
    var modal = document.getElementById('hp-policy-modal');
    if (modal) modal.classList.remove('open');
  };

  window.openCookieSettings = function() {
    var banner = document.getElementById('hp-cookie-banner');
    if (!banner) return;
    var mainView = document.getElementById('hp-cookie-view-main');
    var settingsView = document.getElementById('hp-cookie-view-settings');
    if (mainView && settingsView) {
      mainView.classList.add('hidden');
      settingsView.classList.remove('hidden');
    }
    banner.classList.add('visible');
  };

  window.closeCookieBanner = function() {
    var banner = document.getElementById('hp-cookie-banner');
    if (banner) banner.classList.remove('visible');
  };

  window.showCookieSettings = function() {
    var mainView = document.getElementById('hp-cookie-view-main');
    var settingsView = document.getElementById('hp-cookie-view-settings');
    if (mainView && settingsView) {
      mainView.classList.add('hidden');
      settingsView.classList.remove('hidden');
    }
  };

  window.hideCookieSettings = function() {
    var mainView = document.getElementById('hp-cookie-view-main');
    var settingsView = document.getElementById('hp-cookie-view-settings');
    if (mainView && settingsView) {
      settingsView.classList.add('hidden');
      mainView.classList.remove('hidden');
    }
  };

  window.acceptAllCookies = function() {
    localStorage.setItem('hp_cookie_consent', JSON.stringify({ status: 'all', time: Date.now() }));
    localStorage.setItem('hp_cookie_accepted', 'true');
    closeCookieBanner();
  };

  window.acceptEssentialCookies = function() {
    localStorage.setItem('hp_cookie_consent', JSON.stringify({ status: 'essential', time: Date.now() }));
    localStorage.setItem('hp_cookie_accepted', 'true');
    closeCookieBanner();
  };

  window.saveCustomCookieSettings = function() {
    var a = document.getElementById('hp-cookie-toggle-analytics');
    var o = document.getElementById('hp-cookie-toggle-other');
    localStorage.setItem('hp_cookie_consent', JSON.stringify({
      status: 'custom',
      analytics: a ? a.checked : true,
      other: o ? o.checked : false,
      time: Date.now()
    }));
    localStorage.setItem('hp_cookie_accepted', 'true');
    closeCookieBanner();
  };

  function checkCookieBannerInit() {
    if (!localStorage.getItem('hp_cookie_accepted')) {
      setTimeout(function() {
        var banner = document.getElementById('hp-cookie-banner');
        if (banner) banner.classList.add('visible');
      }, 900);
    }
  }

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
    var modalNode = temp.querySelector('#hp-policy-modal');
    var cookieNode = temp.querySelector('#hp-cookie-banner');

    document.body.prepend(appNode);
    if (modalNode) document.body.appendChild(modalNode);
    if (cookieNode) document.body.appendChild(cookieNode);

    // Навигация по секциям
    document.querySelectorAll('.hp-nav-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          var targetId = href.substring(1);
          scrollToSection(targetId);
        }
      });
    });

    // Фильтры: Тип волос
    var typeBtns = document.querySelectorAll('#filter-type-group .hp-filter-pill');
    typeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        typeBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedType = btn.getAttribute('data-type');
        renderCatalogCards();
      });
    });

    // Фильтры: Длина
    var lenBtns = document.querySelectorAll('#filter-length-group .hp-filter-pill');
    lenBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        lenBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedLen = btn.getAttribute('data-len');
        renderCatalogCards();
      });
    });

    // Фильтры: Оттенок
    var shadeBtns = document.querySelectorAll('#filter-shade-group .hp-filter-pill');
    shadeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        shadeBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedShade = btn.getAttribute('data-shade');
        renderCatalogCards();
      });
    });

    // Инициализация каталога
    renderCatalogCards();

    // Квиз
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
    setupQuiz('quiz-type');

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

    // Отправка заявки
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
    checkCookieBannerInit();
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
    leadWidget.innerHTML = '<button type="button" class="hp-widget-pulse-btn hp-open-form-btn"><span>✦</span> Подобрать срез</button>';
    document.body.appendChild(leadWidget);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
