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



      html {

        scroll-behavior: smooth !important;

      }



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

        min-width: 140px;

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

        background: rgba(14, 9, 21, 0.85);

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

        background: rgba(0, 136, 204, 0.15);

        border: 1px solid rgba(0, 136, 204, 0.4);

        color: #81D4FA !important;

        padding: 12px 14px;

        border-radius: 20px;

        font-size: 13px;

        font-weight: 600;

        text-decoration: none;

        display: inline-flex;

        align-items: center;

        justify-content: center;

        transition: all 0.2s ease;

      }

      .hp-cut-btn-tg:hover {

        background: rgba(0, 136, 204, 0.3);

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



      /* КОНТАКТЫ И ШОУРУМ */

      .hp-contacts-grid {

        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 40px;

        align-items: center;

        background: var(--hp-bg-card);

        border: 1px solid var(--hp-border);

        border-radius: 26px;

        padding: 40px;

      }

      .hp-contact-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: 34px;

        font-weight: 700;

        margin: 0 0 24px;

        color: #fff;

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

      .hp-showroom-img-box {

        position: relative;

        border-radius: 20px;

        overflow: hidden;

        border: 1px solid var(--hp-border-active);

      }

      .hp-showroom-img { width: 100%; height: auto; display: block; }

      .hp-showroom-badge {

        position: absolute;

        bottom: 16px;

        left: 16px;

        background: rgba(14, 9, 21, 0.88);

        border: 1px solid var(--hp-border-active);

        padding: 8px 16px;

        border-radius: 16px;

        font-size: 12.5px;

        font-weight: 600;

        color: #fff;

      }



      /* ФУТЕР */

      .hp-footer {

        padding: 40px 20px;

        text-align: center;

        border-top: 1px solid var(--hp-border);

        color: var(--hp-text-muted);

        font-size: 13px;

        line-height: 1.7;

      }

      .hp-footer-links {

        display: flex;

        justify-content: center;

        gap: 20px;

        margin-bottom: 14px;

      }

      .hp-footer-link {

        color: var(--hp-rose-light);

        text-decoration: underline;

        cursor: pointer;

      }



      /* МОДАЛ 152-ФЗ */

      #hp-legal-modal {

        display: none;

        position: fixed;

        inset: 0;

        background: rgba(0, 0, 0, 0.75);

        backdrop-filter: blur(10px);

        z-index: 99999;

        align-items: center;

        justify-content: center;

        padding: 20px;

      }

      .hp-legal-box {

        background: #180d26;

        border: 1px solid var(--hp-border-active);

        border-radius: 24px;

        padding: 34px;

        max-width: 600px;

        width: 100%;

        color: #eee;

        font-size: 14px;

        line-height: 1.6;

        position: relative;

      }

      .hp-legal-close {

        position: absolute;

        top: 16px; right: 18px;

        background: none; border: none;

        color: #aaa; font-size: 26px;

        cursor: pointer;

      }



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

        .hp-contacts-grid { grid-template-columns: 1fr; }

        .hp-nav-links { display: none; }

      }

      @media (max-width: 640px) {

        .hp-features-grid { grid-template-columns: 1fr; }

        .hp-catalog-grid { grid-template-columns: 1fr; }

        .hp-quiz-options { grid-template-columns: 1fr; }

        .hp-hero-stats { grid-template-columns: 1fr; }

        .hp-method-selector { grid-template-columns: 1fr; }

        .hp-filter-row { flex-direction: column; align-items: flex-start; }

      }

    `;

    document.head.appendChild(s);

  }



  // 3. База реальных срезов (включая свежие данные Telegram @hi_pretty, Славянку, Детские и Узбекские)

  var cutsDatabase = [
    {
      id: "1247",
      title: "Детский шелковый срез #1247 (РФ)",
      type: "slav",
      length: "65 см",
      lengthNum: 65,
      weight: "181 гр",
      shade: "light",
      shadeName: "Светлый блонд",
      price: "113 750 ₽",
      desc: "Отборный детский волос, скупка по регионам РФ. Шелковый, нежнейший срез от одного донора без вычеса.",
      img: "https://cdn4.telesco.pe/file/pxX-AoaIPci34Q7jpLRGMlDR5nIvOqRYXTITkYx2Xew-fd6JhcAovPvbQQzE1S1MecrjMltlvBWCaYCnFj_6cvn1U0qYnLy3SLp_cJQtHG5BpjgBRnjVt7rrC6U9nZv4R30uzwcwoB_N5_SXUra89kuqOA8PlmEWm-IuI-vuB_Hk7SEgYEZXzaTN-mvsdLwIvfv56cut7BE-KF55LoETEJGa45AfRpPJqLSb642SPTMA9azWcxmo0f_b3E3nfY_t4yRViJ-TGcc4SFscKRRUWcPZt0QREYWvMG4oAtdYdaXXci1FWCcJfiyIJKMK7BBLQjYeaN54iBnIElUcimtEnw",
      tgUrl: "https://t.me/hi_pretty/4258"
    },
    {
      id: "viet-55",
      title: "Вьетнамские натуральные волосы (Прямые)",
      type: "vietnam",
      length: "55 см",
      lengthNum: 55,
      weight: "100 гр",
      shade: "dark",
      shadeName: "Темный шоколад / Брюнет",
      price: "24 900 ₽",
      desc: "Прямой плотный волос от проверенной фабрики Вьетнама. Отличное доступное решение для максимальной густоты.",
      img: "https://static.tildacdn.com/tild3832-3930-4664-b236-666264653838/IMG_2594.jpg",
      tgUrl: "https://t.me/hi_pretty"
    },
    {
      id: "1436",
      title: "Детский шелк с волной #1436 (РФ)",
      type: "slav",
      length: "50 см",
      lengthNum: 50,
      weight: "107 гр",
      shade: "medium",
      shadeName: "Русый с выгоревшими прядками",
      price: "41 000 ₽",
      desc: "Природная легкая волна, скупка в РФ. Тончайшая волосинка, мягкий живой блеск, один донор.",
      img: "https://cdn4.telesco.pe/file/llxxfwBO56PKPL-1DrXV6K_OD8GgZ1VU3MJ4DprO0AiioJMPkTDfqaZOMW-a6Wv_NczWOL-Gwn3_I6iqFIS3MmliIWtCN36yz2bHiOSUSb5S8u2eR9z9P5zPj54y_9gRVPWqTdtru45dSet1WHqod6E-OdzlC-NPZpvm9iDruUjCOqrqsGkloV0AnSxC-FDLm2i_wOnMgrwq9Q8Bfjw5MWiDdas_9-bkf_raZfo4mwa1vwVp3YCnZrQaNRivPJ-AGJ8OypSr39OV-BFB-jfrRg-djiaHb7FY8IeZwx3adt5de5SWjmiZNWH6ZA4Nfw4fGLE3GyauYIOhfQwCoSxRcw",
      tgUrl: "https://t.me/hi_pretty/4263"
    },
    {
      id: "uzb-65",
      title: "Узбекский натуральный срез (Люкс)",
      type: "uzb",
      length: "65 см",
      lengthNum: 65,
      weight: "120 гр",
      shade: "dark",
      shadeName: "Глубокий каштан",
      price: "36 500 ₽",
      desc: "Шелковистый плотный волос из Узбекистана. Идеально держит локоны и укладки, долговечен в носке.",
      img: "https://static.tildacdn.com/tild3530-6434-4333-b039-656266383061/IMG_2592.jpg",
      tgUrl: "https://t.me/hi_pretty"
    },
    {
      id: "ind-60",
      title: "Индийские волосы (Природная волна)",
      type: "india",
      length: "60 см",
      lengthNum: 60,
      weight: "100 гр",
      shade: "dark",
      shadeName: "Натуральный темный",
      price: "28 000 ₽",
      desc: "Естественная текстурная волна из Индии. Легкие, объемные, по доступной цене без переплат.",
      img: "https://static.tildacdn.com/tild3462-6536-4133-b738-393237383563/IMG_4007.jpg",
      tgUrl: "https://t.me/hi_pretty"
    },
    {
      id: "1378",
      title: "Детский русский срез #1378 (РФ)",
      type: "slav",
      length: "50 см",
      lengthNum: 50,
      weight: "80 гр",
      shade: "medium",
      shadeName: "Пшенично-русый",
      price: "47 200 ₽",
      desc: "Тончайшая шелковая волосинка из России. Окрашен по щадящей технологии без потери качества.",
      img: "https://cdn4.telesco.pe/file/QFycXKhIz5xnOXlenR25iUo3ZA1SItsQZ1O36M2pzy3AhUX3-Go8kKTcK2QCtNF9XYE_UW1ENS6q6QdShZQN9QP3sguVfRYA8jkRhZgk6zJdiGsYWEkfkkB6LIvu584DDqLrcTkjF6u2HWWrfvcIs8ZbRFiLgqQL9EAfMRjxwUrmtTc2CGak7MyVo3vWk2ouB11NI5byl0_jmimAhvMIM-8ddcK9dFpawyW4nCaAthiu8peCnctCaY__JPbvimpiRyygINPWno5A_ZV7CDRLEUV9yxZJ1mT6eyZeNSuIRMcda9Ko8ggdc7hzhOXdHTXWh2qFhurGFnjtIUQD5QV4PQ",
      tgUrl: "https://t.me/hi_pretty/4276"
    },
    {
      id: "1562",
      title: "Эксклюзивный детский блонд #1562",
      type: "slav",
      length: "50 см",
      lengthNum: 50,
      weight: "115 гр",
      shade: "light",
      shadeName: "Натуральный блонд",
      price: "115 000 ₽",
      desc: "Шелковый нежный срез со скупки по РФ. Редчайший природный светлый оттенок без химии.",
      img: "https://cdn4.telesco.pe/file/SDNlV0t-8MZWR8wtQcehFLghQbnJZTqWxdIbeQfP6X5vI7KO7u0URn9Du_OppBLte4w3KK1km0HOh2E4gZp_jxZ36PHh6iJvUXz0mhqs7jsMbvJm6XAmhgTMcJ5LfsnBUa5IfUKEvg5un8VMlsIpz58mNmC0fhiNl8KpNOOkuzNfRxPrMzlGPUzIhwsvNF8o0o9rY0QgRVrmDz1c7kMk0gfKYdwM7l8tGHW89prdLJHKfoQ9hlAVR_zFcBlY_wE1-LGBQ_IaR35tr5PMNT-wRjXoh9c197xiadxdsOlZKEYzFAGwjfhMMPSclDg2FW947Y8hecIaRhx7OulxgHwpeA",
      tgUrl: "https://t.me/hi_pretty/4211"
    },
    {
      id: "viet-65",
      title: "Вьетнам шелк гладкий 65 см",
      type: "vietnam",
      length: "65 см",
      lengthNum: 65,
      weight: "120 гр",
      shade: "dark",
      shadeName: "Горький шоколад",
      price: "29 500 ₽",
      desc: "Гладкие шелковистые концы, сохраненное направление кутикулы. Доступная цена для длинного наращивания.",
      img: "https://static.tildacdn.com/tild3137-6435-4061-b463-393264316465/IMG_2585.JPG",
      tgUrl: "https://t.me/hi_pretty"
    },
    {
      id: "1386",
      title: "Славянский срез русый #1386",
      type: "slav",
      length: "60 см",
      lengthNum: 60,
      weight: "100 гр",
      shade: "medium",
      shadeName: "Русый натуральный",
      price: "84 750 ₽",
      desc: "Скупка РФ. Вычесан от коротких волос, подрезан до плотных концов. Мягкая детская структура.",
      img: "https://cdn4.telesco.pe/file/HpA7ZU7IbcbxLDU0gEsXw_APlBcDWFhJCz6hZBNfHvk408Zc-Bs3goK0MmVTvjUATPvmOOyP1gXcWd4IO55DbDbcIZaeNvyYuB29Osw25i9jDXEiwWk9BUbZgzZoNHh0WH4USqiYrkvX2tIr8yWKr-EfS-IDABMgjIFhsVohuSgVlAkcKz8IIlSDm2haZHZkJ9oJ_qkJtr0hkNvBtGk6-0H2Ns1Qm9uTcr6INm4r6hrusE1YsdZSbG54QKoIabfR7KwxzQImb6vrV_zMnf7xO3iEtvSXrcj8ZCDUVjmOyP2vO0I7kd2FwPc3ohn0_WS1qpIOWkGkz2AuNxn6C4WcbQ",
      tgUrl: "https://t.me/hi_pretty/4249"
    }
  ];



  // 4. HTML разметка страницы

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

        <a href="#contacts" class="hp-nav-link">Контакты и доставка</a>

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

        <h1 class="hp-hero-title">Натуральные славянские, узбекские, вьетнамские и индийские срезы <span>по честным ценам</span></h1>

        <p class="hp-hero-desc">Собственная скупка волос по регионам России и прямые поставки из Узбекистана, Вьетнама и Индии. В наличии в Москве более 35 кг волос: от шелкового детского эксклюзива до доступных по цене плотных срезов для максимального объема. Окрашивание без агрессивной химии, быстрая доставка по всей России и миру.</p>

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



  <!-- ПРЕИМУЩЕСТВА -->

  <section class="hp-container" id="why-us" style="padding: 20px 20px 40px;">

    <div class="hp-sec-head">

      <span class="hp-sec-badge">Откуда наши волосы</span>

      <h2 class="hp-sec-title">Скупка по регионам РФ и <span>прямой импорт без переплат</span></h2>

      <p class="hp-sec-desc">Мы занимаемся скупкой волос по всей России и закупаем напрямую у проверенных поставщиков Вьетнама, Узбекистана и Индии. Тщательно отбираем каждый хвостик и окрашиваем без агрессивной химии, сохраняя природную структуру.</p>

    </div>

    <div class="hp-features-grid">
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🇷🇺</div>
        <h3 class="hp-feat-title">Скупка по регионам РФ</h3>
        <p class="hp-feat-desc">Славянские и детские срезы высшей пробы. 100% некрашеный живой шелк от одного донора без вычеса.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🌏</div>
        <h3 class="hp-feat-title">Узбекистан, Вьетнам, Индия</h3>
        <p class="hp-feat-desc">Прямые поставки надежных фабрик. Доступные по цене плотные волосы для создания пышного объема без переплат.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">🌿</div>
        <h3 class="hp-feat-title">Окрашивание без химии</h3>
        <p class="hp-feat-desc">Щадящая технология сохраняет природную кутикулу и блеск. Волосы не путаются и служат много коррекций.</p>
      </div>
      <div class="hp-feature-card">
        <div class="hp-feat-icon">⚖️</div>
        <h3 class="hp-feat-title">Быстрая доставка</h3>
        <p class="hp-feat-desc">Надежная упаковка и отправка в день заказа. Быстрая доставка СДЭК за 1–3 дня по всей России и за рубеж.</p>
      </div>
    </div>
  </section>



  <!-- ИНТЕРАКТИВНЫЙ КАТАЛОГ С ФИЛЬТРАМИ -->

  <section class="hp-container hp-catalog-section" id="catalog">

    <div class="hp-sec-head">

      <span class="hp-sec-badge">Каталог со склада в Москве (>35 кг)</span>

      <h2 class="hp-sec-title">Свежие партии срезов <span>в наличии</span></h2>

      <p class="hp-sec-desc">Выберите категорию, длину или оттенок — каталог автоматически покажет подходящие хвостики с ценами и фото.</p>

    </div>



    <!-- ПАНЕЛЬ УМНЫХ ФИЛЬТРОВ -->

    <div class="hp-catalog-filter-bar">

      <!-- 1. ТИП ВОЛОС -->

      <div class="hp-filter-row">

        <div class="hp-filter-label">Тип волос:</div>

        <div class="hp-filter-group" id="filter-type-group">
          <button type="button" class="hp-filter-pill active" data-type="all">Все срезы (>35 кг)</button>
          <button type="button" class="hp-filter-pill" data-type="slav">Славянские и детские (РФ)</button>
          <button type="button" class="hp-filter-pill" data-type="uzb">Узбекистан (Люкс)</button>
          <button type="button" class="hp-filter-pill" data-type="vietnam">Вьетнам (Доступные)</button>
          <button type="button" class="hp-filter-pill" data-type="india">Индия (Объем/Волна)</button>
        </div>

      </div>



      <!-- 2. ДЛИНА -->

      <div class="hp-filter-row">

        <div class="hp-filter-label">Длина волос:</div>

        <div class="hp-filter-group" id="filter-length-group">

          <button type="button" class="hp-filter-pill active" data-len="all">Любая длина</button>

          <button type="button" class="hp-filter-pill" data-len="50">50 см</button>

          <button type="button" class="hp-filter-pill" data-len="60">55–65 см</button>

          <button type="button" class="hp-filter-pill" data-len="70">68–70+ см</button>

        </div>

      </div>



      <!-- 3. ОТТЕНОК -->

      <div class="hp-filter-row">

        <div class="hp-filter-label">Оттенок:</div>

        <div class="hp-filter-group" id="filter-shade-group">

          <button type="button" class="hp-filter-pill active" data-shade="all">Все оттенки</button>

          <button type="button" class="hp-filter-pill" data-shade="light">Светлый блонд</button>

          <button type="button" class="hp-filter-pill" data-shade="medium">Русый / Пшеничный</button>

          <button type="button" class="hp-filter-pill" data-shade="dark">Темный / Шоколад</button>

        </div>

      </div>

    </div>



    <div class="hp-catalog-counter">

      Показано срезов: <strong id="hp-cuts-shown-count">9</strong> из <strong id="hp-cuts-total-count">9</strong>

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

      <p class="hp-sec-desc">Укажите желаемую длину и оттенок — мастер отберет 3 подходящих среза из наличия и пришлет подробные фото и видео.</p>

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



      <div class="hp-quiz-step-title">2. Тип структуры:</div>

      <div class="hp-quiz-options" id="quiz-type">
        <div class="hp-quiz-opt selected" data-val="Славянские / Детские (РФ)">
          <div class="hp-quiz-opt-val">Славянские / Детские (РФ)</div>
          <div class="hp-quiz-opt-desc">Скупка по регионам, шелк люкс</div>
        </div>
        <div class="hp-quiz-opt" data-val="Узбекистан">
          <div class="hp-quiz-opt-val">Узбекистан</div>
          <div class="hp-quiz-opt-desc">Плотный объем, стойкая носка</div>
        </div>
        <div class="hp-quiz-opt" data-val="Вьетнам и Индия (Доступные)">
          <div class="hp-quiz-opt-val">Вьетнам и Индия</div>
          <div class="hp-quiz-opt-desc">Доступная цена, прямой волос и волна</div>
        </div>
      </div>

          <div class="hp-quiz-opt-desc">Тончайшая нежная волосинка</div>

        </div>

        <div class="hp-quiz-opt" data-val="Славянский стандарт">

          <div class="hp-quiz-opt-val">Славянский волос</div>

          <div class="hp-quiz-opt-desc">Универсальный мягкий шелк</div>

        </div>

        <div class="hp-quiz-opt" data-val="Узбекский волос">

          <div class="hp-quiz-opt-val">Узбекский волос</div>

          <div class="hp-quiz-opt-desc">Плотная текстура и объем</div>

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

          Оставьте контакты, и наш мастер бесплатно подберет идеальный срез по вашему фото и пришлет фото и видео.

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



          <button type="submit" id="hp-submit-btn" class="hp-form-submit">Получить подбор и видео среза ✦</button>



          <div class="hp-form-policy">

            Нажимая кнопку, вы соглашаетесь с <a id="hp-open-policy">Политикой конфиденциальности</a> (152-ФЗ РФ).

          </div>

          <div id="hp-form-success" style="display:none;margin-top:20px;color:#10B981;font-weight:700;font-size:15px;line-height:1.5;">

            ✓ Заявка успешно принята! Менеджер уже подбирает срезы и готовит варианты волос.

          </div>

        </form>

      </div>

    </div>

  </section>



  <!-- КОНТАКТЫ И ШОУРУМ В МОСКВЕ -->

  <section class="hp-container" id="contacts" style="padding: 20px 20px 60px;">

    <div class="hp-contacts-grid">

      <div>

        <h2 class="hp-contact-title">Контакты студии</h2>

        <div class="hp-contact-item">

          <div class="hp-ci-icon">📍</div>

          <div>

            <div class="hp-ci-label">Адрес студии в Москве</div>

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

      if (selectedType !== 'all' && item.type !== selectedType) return false;

      if (selectedLen !== 'all') {

        if (selectedLen === '50' && (item.lengthNum > 54)) return false;

        if (selectedLen === '60' && (item.lengthNum < 55 || item.lengthNum > 66)) return false;

        if (selectedLen === '70' && (item.lengthNum < 67)) return false;

      }

      if (selectedShade !== 'all' && item.shade !== selectedShade) return false;

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

          <h3 style="font-size: 20px; color: #fff; margin: 0 0 10px;">Срезов с такими параметрами сейчас нет на витрине</h3>

          <p style="color: var(--hp-text-muted); font-size: 14px; margin: 0 0 20px;">На складе более 35 кг волос! Оставьте заявку — мастер подберет идеальный хвостик индивидуально.</p>

          <button type="button" class="hp-btn-main hp-open-form-btn">Запросить индивидуальный подбор ✦</button>

        </div>

      `;

      setupActionButtons();

      return;

    }



    var htmlCards = filtered.map(function(item) {

      var typeBadge = item.type === 'slav' ? 'Славянка (РФ) • Люкс' : (item.type === 'uzb' ? 'Узбекистан • Люкс' : (item.type === 'vietnam' ? 'Вьетнам • Доступно' : 'Индия • Волна'));

      return `

        <div class="hp-cut-card" data-id="${item.id}">

          <div class="hp-cut-img-wrap">

            <img src="${item.img}" alt="${item.title}" class="hp-cut-img" loading="lazy">

            <span class="hp-cut-badge">${typeBadge} • В наличии</span>

            <span class="hp-cut-price-tag">${item.price}</span>

          </div>

          <div class="hp-cut-body">

            <h3 class="hp-cut-title">${item.title}</h3>

            <div class="hp-cut-meta">

              <span>${item.length}</span>

              <span>${item.weight}</span>

              <span>${item.shadeName}</span>

            </div>

            <p class="hp-cut-desc">${item.desc}</p>

            <div class="hp-cut-actions">

              <button type="button" class="hp-cut-btn hp-open-form-btn" data-cut="${item.title}">Подобрать этот срез ✦</button>

              <a href="${item.tgUrl}" target="_blank" rel="noopener" class="hp-cut-btn-tg" title="Посмотреть в Telegram">В TG &rarr;</a>

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



    // Обработка кликов по навигации (плавный скролл с отступом)

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



    // Фильтрация: Тип волос

    var typeBtns = document.querySelectorAll('#filter-type-group .hp-filter-pill');

    typeBtns.forEach(function(btn) {

      btn.addEventListener('click', function() {

        typeBtns.forEach(function(b) { b.classList.remove('active'); });

        btn.classList.add('active');

        selectedType = btn.getAttribute('data-type');

        renderCatalogCards();

      });

    });



    // Фильтрация: Длина

    var lenBtns = document.querySelectorAll('#filter-length-group .hp-filter-pill');

    lenBtns.forEach(function(btn) {

      btn.addEventListener('click', function() {

        lenBtns.forEach(function(b) { b.classList.remove('active'); });

        btn.classList.add('active');

        selectedLen = btn.getAttribute('data-len');

        renderCatalogCards();

      });

    });



    // Фильтрация: Оттенок

    var shadeBtns = document.querySelectorAll('#filter-shade-group .hp-filter-pill');

    shadeBtns.forEach(function(btn) {

      btn.addEventListener('click', function() {

        shadeBtns.forEach(function(b) { b.classList.remove('active'); });

        btn.classList.add('active');

        selectedShade = btn.getAttribute('data-shade');

        renderCatalogCards();

      });

    });



    // Инициализация карточек

    renderCatalogCards();



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

    leadWidget.innerHTML = '<button type="button" class="hp-widget-pulse-btn hp-open-form-btn"><span>✦</span> Подобрать срез</button>';

    document.body.appendChild(leadWidget);

  }



  
  // ===================== COOKIE & 152-ФЗ СИСТЕМА (GREYWOLF СТИЛЬ) =====================
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

  checkCookieBannerInit();

  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', mount);

  } else {

    mount();

  }

})();

