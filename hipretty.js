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

      #allrecords > .r:not(#rec4673156001):not(#rec4673146901):not(#rec4673150901):not(#rec1935129061),

      #allrecords > div.r:not(#rec4673156001):not(#rec4673146901):not(#rec4673150901):not(#rec1935129061),

      .t-records > .r:not(#rec4673156001):not(#rec4673146901):not(#rec4673150901):not(#rec1935129061) {

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

      /* ХЕДЕР ВНУТРЕННИЙ */

      .hp-header-inner {

        display: flex;

        align-items: center;

        justify-content: space-between;

        width: 100%;

        gap: 12px;

      }

      .hp-header-phone {

        display: inline-flex;

        align-items: center;

        gap: 6px;

        white-space: nowrap;

      }

      .hp-phone-icon {

        font-size: 13px;

        display: none;

      }



      /* МОБИЛЬНАЯ АДАПТАЦИЯ ШАПКИ */

      @media (max-width: 992px) {

        .hp-header { padding: 12px 16px; }

        .hp-logo { font-size: 26px; }

        .hp-logo-sub { font-size: 10px; letter-spacing: 1.5px; }

        .hp-btn-header-cta { padding: 9px 16px; font-size: 12px; }

      }

      @media (max-width: 768px) {

        .hp-header { padding: 10px 14px; }

        .hp-logo { font-size: 22px; }

        .hp-logo-sub { font-size: 9px; letter-spacing: 1px; }

        .hp-header-actions { gap: 8px; }

        .hp-header-phone {

          padding: 7px 10px;

          background: rgba(255, 255, 255, 0.05);

          border: 1px solid var(--hp-border);

          border-radius: 18px;

          font-size: 12px;

        }

        .hp-phone-icon { display: inline-block; font-size: 12px; }

        .hp-phone-text { display: none; }

        .hp-btn-header-cta { padding: 8px 14px; font-size: 12px; border-radius: 20px; white-space: nowrap; }

      }

      @media (max-width: 420px) {

        .hp-header { padding: 8px 10px; }

        .hp-logo { font-size: 19px; }

        .hp-logo-sub { font-size: 8px; letter-spacing: 0.5px; margin-top: 2px; }

        .hp-btn-header-cta { padding: 7px 11px; font-size: 11px; }

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

        display: inline-flex;

        align-items: center;

        justify-content: center;

        gap: 8px;

        white-space: nowrap;

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

      .hp-btn-max {

        display: inline-flex;

        align-items: center;

        justify-content: center;

        gap: 8px;

        white-space: nowrap;

        background: rgba(255, 140, 0, 0.14);

        border: 1px solid rgba(255, 140, 0, 0.45);

        color: #ffaa44 !important;

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

      .hp-btn-max:hover {

        background: rgba(255, 140, 0, 0.25);

        border-color: #ff8c00;

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

        background: linear-gradient(135deg, #180e22 0%, #241133 100%);

        overflow: hidden;

      }

      .hp-cut-img {

        width: 100%;

        height: 100%;

        object-fit: cover;

        transition: transform 0.5s ease;

      }

      .hp-cut-card:hover .hp-cut-img { transform: scale(1.04); }

      .hp-cut-placeholder {

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        width: 100%;

        height: 100%;

        padding: 24px 20px;

        text-align: center;

        background: linear-gradient(135deg, #1c0e25 0%, #2e123b 100%);

        color: #fff;

        gap: 10px;

      }

      .hp-cut-placeholder-icon {

        font-size: 34px;

        color: var(--hp-rose);

      }

      .hp-cut-placeholder-text {

        font-size: 13.5px;

        color: #d1c4e9;

        font-weight: 600;

        line-height: 1.4;

      }

      .hp-cut-placeholder-btn {

        display: inline-flex;

        align-items: center;

        gap: 6px;

        margin-top: 4px;

        padding: 8px 16px;

        border-radius: 20px;

        background: rgba(0, 136, 204, 0.2);

        border: 1px solid rgba(0, 136, 204, 0.5);

        color: #81D4FA;

        font-size: 12.5px;

        font-weight: 600;

        text-decoration: none;

        transition: all 0.2s ease;

      }

      .hp-cut-placeholder-btn:hover {

        background: rgba(0, 136, 204, 0.35);

        color: #fff;

        transform: translateY(-1px);

      }

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

      .hp-selected-cut-box {

        display: none;

        align-items: center;

        justify-content: space-between;

        background: rgba(244, 114, 182, 0.12);

        border: 1px solid var(--hp-border-active);

        border-radius: 16px;

        padding: 12px 18px;

        margin-bottom: 16px;

        text-align: left;

      }

      .hp-selected-cut-info {

        display: flex;

        align-items: center;

        gap: 10px;

        font-size: 13.5px;

        color: #fff;

      }

      .hp-selected-cut-tag {

        font-size: 11px;

        font-weight: 700;

        text-transform: uppercase;

        letter-spacing: 1px;

        color: var(--hp-rose);

        background: rgba(244, 114, 182, 0.2);

        padding: 3px 8px;

        border-radius: 8px;

        white-space: nowrap;

      }

      .hp-selected-cut-title {

        font-weight: 600;

        color: #fce7f3;

      }

      .hp-selected-cut-reset {

        background: transparent;

        border: none;

        color: #aaa;

        font-size: 18px;

        cursor: pointer;

        padding: 0 4px;

        line-height: 1;

        transition: color 0.2s;

      }

      .hp-selected-cut-reset:hover {

        color: #fff;

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

      .hp-method-btn.active.max {

        background: rgba(255, 140, 0, 0.25);

        border-color: #ff8c00;

        color: #ffaa44;

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

      /* СТИЛИЗАЦИЯ НАСТОЯЩЕЙ TILDA-ФОРМЫ ВНУТРИ LEAD-BOX */
      #hp-selected-cut-box {
        position: relative !important;
        z-index: 10 !important;
        margin: 0 auto 24px auto !important;
        max-width: 680px !important;
        display: none;
        align-items: center;
        justify-content: space-between;
        background: rgba(244, 114, 182, 0.15) !important;
        border: 1px solid var(--hp-border-active, rgba(244, 114, 182, 0.6)) !important;
        border-radius: 16px !important;
        padding: 14px 20px !important;
        text-align: left;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
      }
      #hp-tilda-form-slot {
        width: 100% !important;
        max-width: 680px !important;
        margin: 0 auto !important;
        position: relative !important;
        z-index: 5 !important;
      }
      /* rec4673146901 внутри слота: статичный блок в потоке страницы */
      #hp-tilda-form-slot #rec4673146901,
      #hp-tilda-form-slot .t702,
      #hp-tilda-form-slot .t-popup,
      #hp-tilda-form-slot .t-popup__container,
      #hp-tilda-form-slot .t702__wrapper {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        transform: none !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        height: auto !important;
        min-height: 0 !important;
        z-index: 1 !important;
      }
      #hp-tilda-form-slot .t-popup__close,
      #hp-tilda-form-slot .t702__text-wrapper,
      #hp-tilda-form-slot .t702__title,
      #hp-tilda-form-slot .t702__descr {
        display: none !important;
      }
      body > #rec4673146901,
      #allrecords > #rec4673146901 {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
      #hp-tilda-form-slot form.t-form,
      #hp-tilda-form-slot #form4673146901 {
        display: block !important;
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        transform: none !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
      }
      #hp-tilda-form-slot .t-form__inputsbox {
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-input-group {
        margin: 0 !important;
        padding: 0 !important;
        text-align: left !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-input-title {
        color: var(--hp-rose-light, #fce7f3) !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        margin-bottom: 10px !important;
        text-align: left !important;
        display: block !important;
      }
      #hp-tilda-form-slot .t-contact-method__types-container {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 10px !important;
        margin: 0 0 16px 0 !important;
        padding: 0 !important;
        mask: none !important;
        -webkit-mask: none !important;
        overflow: visible !important;
        max-width: 100% !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      @media (max-width: 640px) {
        #hp-tilda-form-slot .t-contact-method__types-container {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 8px !important;
        }
      }
      #hp-tilda-form-slot .t-contact-method__type {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--hp-border, rgba(244, 114, 182, 0.25)) !important;
        border-radius: 14px !important;
        padding: 0 !important;
        margin: 0 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        height: 48px !important;
        box-sizing: border-box !important;
      }
      #hp-tilda-form-slot .t-contact-method__type:hover {
        border-color: var(--hp-rose, #f472b6) !important;
        background: rgba(244, 114, 182, 0.12) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type.hp-active,
      #hp-tilda-form-slot .t-contact-method__type:has(>.t-radio:checked) {
        background: rgba(244, 114, 182, 0.22) !important;
        border-color: var(--hp-rose, #f472b6) !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.35) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type-label {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        cursor: pointer !important;
        white-space: nowrap !important;
        padding: 0 10px !important;
        margin: 0 !important;
        width: 100% !important;
        height: 100% !important;
        box-sizing: border-box !important;
      }
      #hp-tilda-form-slot .t-contact-method__type-label svg {
        width: 20px !important;
        height: 20px !important;
        min-width: 20px !important;
        min-height: 20px !important;
        flex-shrink: 0 !important;
        display: inline-block !important;
        vertical-align: middle !important;
      }
      #hp-tilda-form-slot .t-contact-method__title {
        color: #fdfafd !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 13.5px !important;
        font-weight: 600 !important;
        white-space: nowrap !important;
        display: inline-block !important;
        line-height: 1 !important;
      }
      #hp-tilda-form-slot .t-contact-method__value-container {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      #hp-tilda-form-slot .t-contact-method__value-container > div {
        display: none !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-contact-method__value-container > div.hp-method-active {
        display: block !important;
      }
      #hp-tilda-form-slot .t-contact-method__hidden,
      #hp-tilda-form-slot .hp-block-hidden {
        display: none !important;
      }
      #hp-tilda-form-slot .t-contact-method__value-container .t-input-block {
        margin: 0 !important;
        width: 100% !important;
      }
      /* Контейнер телефонной маски Тильды */
      #hp-tilda-form-slot .t-input-phonemask__wrap {
        display: flex !important;
        align-items: center !important;
        width: 100% !important;
        background: rgba(14, 9, 21, 0.9) !important;
        border: 1px solid var(--hp-border, rgba(244, 114, 182, 0.25)) !important;
        border-radius: 16px !important;
        padding: 0 18px !important;
        height: 56px !important;
        box-sizing: border-box !important;
        position: relative !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__wrap:focus-within {
        border-color: var(--hp-rose, #f472b6) !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.3) !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__select {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        margin-right: 12px !important;
        padding-right: 12px !important;
        border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
        cursor: pointer !important;
        color: #ffffff !important;
        height: 100% !important;
        flex-shrink: 0 !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__select-code {
        color: #ffffff !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 15px !important;
        font-weight: 600 !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__select-triangle {
        border-top-color: var(--hp-rose, #f472b6) !important;
      }
      #hp-tilda-form-slot input.t-input.t-input-phonemask {
        background: transparent !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        flex: 1 !important;
        box-shadow: none !important;
        color: #ffffff !important;
        font-size: 15.5px !important;
        font-family: 'Montserrat', sans-serif !important;
        outline: none !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__options-wrap {
        background: #1d0f28 !important;
        border: 1px solid rgba(244, 114, 182, 0.4) !important;
        border-radius: 14px !important;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8) !important;
        color: #fff !important;
        z-index: 99999999 !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__options-item {
        color: #ffffff !important;
        font-family: 'Montserrat', sans-serif !important;
        padding: 8px 14px !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__options-item:hover,
      #hp-tilda-form-slot .t-input-phonemask__options-item_chosen {
        background: rgba(244, 114, 182, 0.2) !important;
        color: #fff !important;
      }
      /* Обычные текстовые инпуты (Имя, Telegram ник, MAX ссылка) */
      #hp-tilda-form-slot input.t-input:not(.t-input-phonemask):not(.t-input-phonemask__wrap),
      #hp-tilda-form-slot textarea.t-input {
        width: 100% !important;
        background: rgba(14, 9, 21, 0.9) !important;
        border: 1px solid var(--hp-border, rgba(244, 114, 182, 0.25)) !important;
        border-radius: 16px !important;
        padding: 16px 22px !important;
        color: #ffffff !important;
        font-size: 15.5px !important;
        font-family: 'Montserrat', sans-serif !important;
        outline: none !important;
        box-sizing: border-box !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      #hp-tilda-form-slot input.t-input:not(.t-input-phonemask):focus,
      #hp-tilda-form-slot textarea.t-input:focus {
        border-color: var(--hp-rose, #f472b6) !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.3) !important;
      }
      #hp-tilda-form-slot input::-webkit-input-placeholder,
      #hp-tilda-form-slot textarea::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.45) !important;
        opacity: 1 !important;
      }
      #hp-tilda-form-slot input::-moz-placeholder,
      #hp-tilda-form-slot textarea::-moz-placeholder {
        color: rgba(255, 255, 255, 0.45) !important;
        opacity: 1 !important;
      }
      #hp-tilda-form-slot input:-ms-input-placeholder,
      #hp-tilda-form-slot textarea:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.45) !important;
        opacity: 1 !important;
      }
      #hp-tilda-form-slot .t-input-group_tx .t-text {
        color: var(--hp-rose-light, #fce7f3) !important;
        font-size: 12.5px !important;
        line-height: 1.55 !important;
        text-align: left !important;
        background: rgba(244, 114, 182, 0.08) !important;
        border-left: 3px solid var(--hp-rose, #f472b6) !important;
        padding: 12px 16px !important;
        border-radius: 0 12px 12px 0 !important;
      }
      #hp-tilda-form-slot .t-checkbox__control {
        color: var(--hp-text-muted, #b8acc7) !important;
        font-size: 12.5px !important;
        text-align: left !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
      }
      #hp-tilda-form-slot .t-checkbox__indicator {
        border-color: var(--hp-rose, #f472b6) !important;
      }
      #hp-tilda-form-slot .t-submit,
      #hp-tilda-form-slot button[type="submit"] {
        width: 100% !important;
        background: var(--hp-grad-btn, linear-gradient(135deg, #fbcfe8 0%, #f472b6 50%, #db2777 100%)) !important;
        color: #1a0818 !important;
        border: none !important;
        border-radius: 20px !important;
        padding: 18px 26px !important;
        font-size: 16.5px !important;
        font-weight: 700 !important;
        font-family: 'Montserrat', sans-serif !important;
        cursor: pointer !important;
        box-shadow: 0 8px 25px rgba(244, 114, 182, 0.4) !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        text-transform: none !important;
        letter-spacing: 0.5px !important;
        margin-top: 8px !important;
      }
      #hp-tilda-form-slot .t-submit:hover,
      #hp-tilda-form-slot button[type="submit"]:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 12px 35px rgba(244, 114, 182, 0.6) !important;
      }
      #hp-tilda-form-slot .t-btn_wrap-effects { display: none !important; }
      #hp-tilda-form-slot .js-successbox {
        background: rgba(16, 185, 129, 0.15) !important;
        border: 1px solid #10B981 !important;
        color: #6ee7b7 !important;
        border-radius: 16px !important;
        padding: 18px !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        margin-bottom: 20px !important;
      }



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

      .hp-contacts-messengers {

        display: flex;

        flex-wrap: wrap;

        gap: 12px 20px;

        align-items: center;

        margin-top: 6px;

      }

      .hp-m-link {

        display: inline-flex !important;

        align-items: center !important;

        gap: 7px !important;

        text-decoration: none !important;

        font-weight: 600 !important;

        font-size: 14.5px !important;

        white-space: nowrap !important;

        transition: opacity 0.2s, transform 0.2s;

      }

      .hp-m-link:hover {

        opacity: 0.85;

        transform: translateY(-1px);

      }

      .hp-m-link svg, .hp-method-btn svg {

        width: 17px;

        height: 17px;

        flex-shrink: 0;

        vertical-align: middle;

      }





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

        display: inline-flex;

        align-items: center;

        gap: 7px;

        white-space: nowrap;

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

        .hp-lead-section { padding: 30px 10px 100px; }

        .hp-lead-box { padding: 32px 16px; border-radius: 20px; }

        .hp-input { font-size: 14px; padding: 14px; }

      }

      @media (max-width: 420px) {

        .hp-lead-section { padding: 25px 6px 110px; }

        .hp-lead-box { padding: 26px 12px; border-radius: 18px; }

        .hp-input { font-size: 13.5px; padding: 12px 10px; }

        .hp-method-btn { padding: 10px 8px; font-size: 13px; }

      }

    `;

    document.head.appendChild(s);

  }



  // 3. БАЗА РЕАЛЬНЫХ СРЕЗОВ ИЗ TELEGRAM КАНАЛА (@hi_pretty)

  var cutsDatabase = [

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

    "id": "4271",

    "cutNum": "#1387",

    "title": "Срез #1387 (66 см / 86 гр)",

    "cat": "silk",

    "length": 66,

    "weight": "86 гр",

    "price": "48 400 ₽",

    "img": "https://cdn4.telesco.pe/file/b-DkgxHWkFaGbZKWGP1ZAXvz3ej8fKw-Q-Rak4hllLsfu3iPvIpjXHktuHC92acsewYoIXdyiaQDj_PTT1XhkaHZklmtlVmtSgxaP3iN-psSJcz-R4LwmkK2gdHfjV7PKxVPFKBozn7dVEp0wf0jamUxJKwI7FZ0hQeAXth0EX9yBF7kfWx5LuHkOtWQHEki-c5fBabYpQUfl-dX23G42qDq7_xQRADW9OQpuHsuVPbt2v7D7tk0ryfTgdXyyIrYzMCFnwYy_nNIaxuPcFQQGr1LSKkRugBelpgltvfGTZs9kAn8thGjVZ39Fp3eO1RXIfZ98e5_8dJ6IPuTdlMDRw.jpg",

    "tgUrl": "https://t.me/hi_pretty/4271",

    "desc": "Детские,шелковые,нежнейшие хвостики • #1387 66см/86гр - 48.400 • #1555 68см/140гр - 190.000"

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

    "id": "4258",

    "cutNum": "#1247",

    "title": "Срез #1247 (65 см / 181 гр)",

    "cat": "straight",

    "length": 65,

    "weight": "181 гр",

    "price": "113 750 ₽",

    "img": "https://cdn4.telesco.pe/file/sUke-jvyazfkJ0LGsvIHzIWVojQ2PWVwm2fFJ-fZpkt1Qd7HnVdJVXtiIQQkXpL4d3s9zO9t-5IWY1DVbDMxxrFEzhWylyx4ykiIrksAY4Aa0hPL9MaFTPF3-0W0YHAhMqcQj1SzobcY9KWB9_76VfRVUJSv-x0RYTHPVT5iXHb9AHzzkhAtja3v0rqW644G8f0EPJWK3SRpZPBBbzwsQ901MVgvz2CIxjJB4skLNbrTqWnqLBlPd9CTaVBsCMcItr1j_KMlmkS-BQypgwOmdEO2239MAY4A9_7x57HTv_fhllvV9NYJdM2t9BYevV9kheL1duyoD_sJ96SOBE16Fg.jpg",

    "tgUrl": "https://t.me/hi_pretty/4258",

    "desc": "Шелковые,маслянистые,нежнейшие,гладкие • #1247 65см/181гр - 113.750 • #1249 65см/144гр - 60.000"

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

    "id": "4016",

    "cutNum": "#1555",

    "title": "Срез #1555 (68 см / 140 гр)",

    "cat": "wave",

    "length": 68,

    "weight": "140 гр",

    "price": "190 000 ₽",

    "img": "https://cdn4.telesco.pe/file/iSX0cxRTSF10VfXdM_bhIeNdkFuo1d0hIVSwL4V7D6TBMvrjvc2ORh9HAOdzE_6Wg1gaWn3dy0qKIsjlmgZBeYxJcKCLvPQ_7V3XHB1Q78TY_6EJWwLRX9brVIlklG3ecsfPbgsnLvc6DSGkDqRw0ZcEOKU3zFt11JA1-5Pf9gV9cfPfjFRnS3qJ3KhxraH4fQOSfYqlfj68NnMrU2hFK0rtOACgk8TnwYrQBkk4XgLS7WjcEZpKBZb5Mnsfy9_41QioXADI54PWRiMBNwCTOB67Ro95263mvePO0upL-xsQJlcdPUw6XJSajkn8pyrnDUWsiNedQhUiF9O0XIN4DA.jpg",

    "tgUrl": "https://t.me/hi_pretty/4016",

    "desc": "#1555 • Детский блондик • Природная активная волна,волосинка тонкая как паутинка"

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

  }

];



  // 4. HTML РАЗМЕТКА САЙТА

  var html = `

<div id="hp-app">

  <!-- ХЕДЕР -->

  <header class="hp-header">

    <div class="hp-container hp-header-inner">

      <a href="https://hipretty.ru" class="hp-logo-wrap">

        <div class="hp-logo">привет, волосы!</div>

        <div class="hp-logo-sub">магазин волос • москва</div>

      </a>

      <nav class="hp-nav-links">

        <a href="#catalog" class="hp-nav-link">Каталог срезов</a>

        <a href="#why-us" class="hp-nav-link">Преимущества</a>

        <a href="#selection" class="hp-nav-link">Подбор среза</a>

        <a href="#contacts" class="hp-nav-link">Контакты</a>

      </nav>

      <div class="hp-header-actions">

        <a href="tel:+79933365357" class="hp-header-phone" title="Позвонить нам">

          <span class="hp-phone-icon">📞</span>

          <span class="hp-phone-text">8 (993) 336-53-57</span>

        </a>

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

          Коллекция отборных натуральных волос со склада в Москве (>35 кг). 

          100% живой волос от одного донора без силикона и химии: ровные плотные концы, шелковистая структура. 

          Быстрая отправка в любой город России и за рубеж.

        </p>

        <div class="hp-hero-cta-box">

          <button type="button" class="hp-btn-main hp-open-form-btn">✦ Подобрать идеальный срез</button>

          <a href="https://t.me/hi_pretty_manager" target="_blank" rel="noopener" class="hp-btn-tg-main">

            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" style="flex-shrink:0;"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>

            <span>Написать менеджеру (@hi_pretty_manager)</span>

          </a>

          <a href="https://wa.me/79933365357?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D1%81%D1%80%D0%B5%D0%B7%20%D0%B2%D0%BE%D0%BB%D0%BE%D1%81." target="_blank" rel="noopener" class="hp-btn-wa-soft">

            <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" style="flex-shrink:0;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.3 7.37 20.3 11.92C20.29 16.46 16.59 20.15 12.05 20.15M16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.54 14.62C13.39 14.78 13.25 14.8 13 14.68C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.22C9.83 11.11 9.97 10.93 10.1 10.78C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.57 8.08C9.37 7.6 9.17 7.66 9.02 7.65C8.88 7.65 8.71 7.65 8.55 7.65C8.38 7.65 8.11 7.71 7.88 7.96C7.65 8.21 7 8.82 7 10.06C7 11.31 7.91 12.51 8.03 12.68C8.16 12.84 9.82 15.4 12.35 16.5C12.95 16.76 13.42 16.91 13.78 17.03C14.38 17.22 14.93 17.19 15.36 17.13C15.84 17.06 16.84 16.52 17.05 15.94C17.26 15.36 17.26 14.86 17.2 14.76C17.14 14.65 16.82 14.46 16.57 14.33Z"/></svg>

            <span>WhatsApp</span>

          </a>

          <a href="https://max.ru/u/f9LHodD0cOJDkOJa38G-aakmLO32B2FcARILKCnXhnJnzvKWD9r6yXfUCxE" target="_blank" rel="noopener" class="hp-btn-max">

            <svg viewBox="0 0 48 48" width="20" height="20" fill="none" style="flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#FFAA44"/></svg>

            <span>ЛС MAX</span>

          </a>

        </div>

        <div class="hp-hero-stats">

          <div class="hp-stat-card">

            <div class="hp-stat-val">>35 кг</div>

            <div class="hp-stat-lbl">Собственный склад волос в Москве</div>

          </div>

          <div class="hp-stat-card">

            <div class="hp-stat-val">РФ и Мир</div>

            <div class="hp-stat-lbl">Быстрая отправка СДЭК и курьером по всей стране</div>

          </div>

          <div class="hp-stat-card">

            <div class="hp-stat-val">100% Натур.</div>

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

        Поскольку срезы быстро разбирают, нажмите «Подобрать такой срез» — мастер проверит выбранный хвостик или подберет аналогичный из >35 кг со склада.

      </p>

    </div>



    <!-- ПАНЕЛЬ УМНЫХ ФИЛЬТРОВ -->

    <div class="hp-catalog-filter-bar">

      <!-- 1. ТИП СТРУКТУРЫ -->

      <div class="hp-filter-row">

        <div class="hp-filter-label">Структура волос:</div>

        <div class="hp-filter-group" id="filter-type-group">

          <button type="button" class="hp-filter-pill active" data-type="all">Все примеры (28)</button>

          <button type="button" class="hp-filter-pill" data-type="silk">Детский шелк</button>

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

      <p class="hp-sec-desc">Укажите желаемую длину и тип волос — мастер отберет 3 подходящих варианта со склада.</p>

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

        <button type="button" class="hp-btn-main hp-open-form-btn">Подобрать подходящие срезы ✦</button>

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



        <!-- ПЛАШКА ВЫБРАННОГО СРЕЗА ИЛИ ПАРАМЕТРОВ КВИЗА -->

        <div id="hp-selected-cut-box" class="hp-selected-cut-box">

          <div class="hp-selected-cut-info">

            <span class="hp-selected-cut-tag" id="hp-selected-cut-tag">Выбранный срез</span>

            <span class="hp-selected-cut-title" id="hp-selected-cut-text"></span>

          </div>

          <button type="button" class="hp-selected-cut-reset" id="hp-selected-cut-reset" title="Очистить выбор">✕</button>

        </div>



        <!-- СЛОТ ДЛЯ ОФИЦИАЛЬНОЙ РОДНОЙ TILDA-ФОРМЫ -->

        <div id="hp-tilda-form-slot"></div>

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

          <div class="hp-contacts-messengers">

            <a href="https://t.me/hi_pretty_manager" target="_blank" rel="noopener" class="hp-m-link" style="color:var(--hp-rose);">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Менеджер в TG: @hi_pretty_manager</span>

            </a>

            <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-m-link" style="color:#81D4FA;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Канал: @hi_pretty</span>

            </a>

            <a href="https://wa.me/79933365357" target="_blank" rel="noopener" class="hp-m-link" style="color:#25D366;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" style="flex-shrink:0;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.3 7.37 20.3 11.92C20.29 16.46 16.59 20.15 12.05 20.15M16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.54 14.62C13.39 14.78 13.25 14.8 13 14.68C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.22C9.83 11.11 9.97 10.93 10.1 10.78C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.57 8.08C9.37 7.6 9.17 7.66 9.02 7.65C8.88 7.65 8.71 7.65 8.55 7.65C8.38 7.65 8.11 7.71 7.88 7.96C7.65 8.21 7 8.82 7 10.06C7 11.31 7.91 12.51 8.03 12.68C8.16 12.84 9.82 15.4 12.35 16.5C12.95 16.76 13.42 16.91 13.78 17.03C14.38 17.22 14.93 17.19 15.36 17.13C15.84 17.06 16.84 16.52 17.05 15.94C17.26 15.36 17.26 14.86 17.2 14.76C17.14 14.65 16.82 14.46 16.57 14.33Z"/></svg>

              <span>WhatsApp</span>

            </a>

            <a href="https://max.ru/u/f9LHodD0cOJDkOJa38G-aakmLO32B2FcARILKCnXhnJnzvKWD9r6yXfUCxE" target="_blank" rel="noopener" class="hp-m-link" style="color:#FFAA44;">

              <svg viewBox="0 0 48 48" width="20" height="20" fill="none" style="flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#FFAA44"/></svg>

              <span>ЛС MAX</span>

            </a>

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

            <a href="#catalog" class="hp-nav-link">Каталог срезов (>35 кг)</a>

            <a href="#selection" class="hp-nav-link">Подбор под ваши параметры</a>

            <a href="#why-us" class="hp-nav-link">Почему наши волосы</a>

            <a href="#contacts" class="hp-nav-link">Контакты студии</a>

            <button type="button" class="hp-open-form-btn">Запросить индивидуальный подбор</button>

          </div>

        </div>



        <div>

          <div class="hp-footer-col-title">Связь и документы</div>

          <div class="hp-footer-menu">

            <a href="https://t.me/hi_pretty_manager" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;white-space:nowrap;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Менеджер в TG: @hi_pretty_manager</span>

            </a>

            <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;white-space:nowrap;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Наш канал: @hi_pretty</span>

            </a>

            <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;white-space:nowrap;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" style="flex-shrink:0;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.3 7.37 20.3 11.92C20.29 16.46 16.59 20.15 12.05 20.15M16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.54 14.62C13.39 14.78 13.25 14.8 13 14.68C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.22C9.83 11.11 9.97 10.93 10.1 10.78C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.57 8.08C9.37 7.6 9.17 7.66 9.02 7.65C8.88 7.65 8.71 7.65 8.55 7.65C8.38 7.65 8.11 7.71 7.88 7.96C7.65 8.21 7 8.82 7 10.06C7 11.31 7.91 12.51 8.03 12.68C8.16 12.84 9.82 15.4 12.35 16.5C12.95 16.76 13.42 16.91 13.78 17.03C14.38 17.22 14.93 17.19 15.36 17.13C15.84 17.06 16.84 16.52 17.05 15.94C17.26 15.36 17.26 14.86 17.2 14.76C17.14 14.65 16.82 14.46 16.57 14.33Z"/></svg>

              <span>WhatsApp: +7 (993) 336-53-57</span>

            </a>

            <a href="https://max.ru/u/f9LHodD0cOJDkOJa38G-aakmLO32B2FcARILKCnXhnJnzvKWD9r6yXfUCxE" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;white-space:nowrap;">

              <svg viewBox="0 0 48 48" width="20" height="20" fill="none" style="flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#FFAA44"/></svg>

              <span>ЛС MAX</span>

            </a>

            <a href="tel:+79933365357" style="display:inline-flex;align-items:center;gap:7px;white-space:nowrap;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#E8A598" style="flex-shrink:0;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>

              <span>+7 (993) 336-53-57</span>

            </a>

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

          <p style="color: var(--hp-text-muted); font-size: 14px; margin: 0 0 20px;">На складе более 35 кг отборных волос! Оставьте заявку — мастер подберет нужный срез индивидуально.</p>

          <button type="button" class="hp-btn-main hp-open-form-btn">Запросить индивидуальный подбор ✦</button>

        </div>

      `;

      setupActionButtons();

      return;

    }



    var htmlCards = filtered.map(function(item) {

      var badgeText = item.cat === 'wave' ? 'Природная волна' : (item.cat === 'straight' ? 'Прямой шелк' : 'Детский шелк');

      return `

        <div class="hp-cut-card" data-id="${item.id}">

          <div class="hp-cut-img-wrap">

            <img src="${item.img}" alt="${item.title}" class="hp-cut-img" loading="lazy" onerror="hpHandleImgError(this, '${item.tgUrl}', '${item.img}')">

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

              <button type="button" class="hp-cut-btn hp-open-form-btn" data-cut="${item.title}">Подобрать срез ✦</button>

              <a href="${item.tgUrl}" target="_blank" rel="noopener" class="hp-cut-btn-tg" title="Открыть этот пост в Telegram @hi_pretty">В TG &rarr;</a>

            </div>

          </div>

        </div>

      `;

    }).join('');



    container.innerHTML = htmlCards;

    setupActionButtons();

  }



  var chosenCutParam = '';



  

  // Защита и умный авто-повтор загрузки картинок срезов (без задержки сайта)

  window.hpHandleImgError = function(img, tgUrl, originalSrc) {

    var retries = parseInt(img.getAttribute('data-retries') || '0', 10);

    if (retries < 2) {

      img.setAttribute('data-retries', retries + 1);

      setTimeout(function() {

        var baseSrc = originalSrc || img.src;

        img.src = baseSrc.split('?')[0] + '?t=' + Date.now();

      }, 1000);

    } else {

      var wrap = img.parentElement;

      if (wrap) {

        img.style.display = 'none';

        var existingPh = wrap.querySelector('.hp-cut-placeholder');

        if (!existingPh) {

          var ph = document.createElement('div');

          ph.className = 'hp-cut-placeholder';

          ph.innerHTML = '<div class="hp-cut-placeholder-icon">✦</div><div class="hp-cut-placeholder-text">Фото среза в высоком качестве</div><a href="' + (tgUrl || 'https://t.me/hi_pretty') + '" target="_blank" rel="noopener" class="hp-cut-placeholder-btn"><svg viewBox="0 0 24 24" width="14" height="14" fill="#0088cc"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg> Смотреть в TG &rarr;</a>';

          wrap.appendChild(ph);

        }

      }

    }

  };



  function setSelectedCutBadge(text, isQuiz) {

    chosenCutParam = text || '';

    var box = document.getElementById('hp-selected-cut-box');

    var tag = document.getElementById('hp-selected-cut-tag');

    var title = document.getElementById('hp-selected-cut-text');

    if (!box || !title) return;

    if (text) {

      tag.textContent = isQuiz ? 'Подбор под параметры' : 'Выбранный срез';

      title.textContent = text;

      box.style.display = 'flex';

    } else {

      box.style.display = 'none';

      title.textContent = '';

    }

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

          setSelectedCutBadge(cutName, false);

        }

        scrollToSection('lead-box');

      });

    });



    var resetBtn = document.getElementById('hp-selected-cut-reset');

    if (resetBtn && !resetBtn.dataset.bound) {

      resetBtn.dataset.bound = 'true';

      resetBtn.addEventListener('click', function() {

        setSelectedCutBadge('', false);

      });

    }

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



  function setupContactMethodSwitcher(form) {
    var methodContainer = form.querySelector('.t-contact-method__types-container');
    var valContainer = form.querySelector('.t-contact-method__value-container');
    if (!methodContainer || !valContainer) return;

    var methodBtns = methodContainer.querySelectorAll('.t-contact-method__type');
    var phoneVal = valContainer.querySelector('.t-contact-method__phone-value');
    var tgVal = valContainer.querySelector('.t-contact-method__telegram-value');
    var waVal = valContainer.querySelector('.t-contact-method__whatsapp-value');
    var maxVal = valContainer.querySelector('.t-contact-method__max_messenger-value');

    var valMap = {
      'phone': phoneVal,
      'telegram': tgVal,
      'whatsapp': waVal,
      'max_messenger': maxVal
    };

    var icons = {
      phone: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="rgba(244,114,182,0.25)"/><path d="M7 9.8a12.5 12.5 0 005.2 5.2l1.8-1.8c.2-.2.5-.3.8-.2.9.3 1.9.5 2.9.5.4 0 .8.4.8.8v2.9c0 .4-.4.8-.8.8-7.5 0-13.7-6.2-13.7-13.7 0-.4.4-.8.8-.8H8c.4 0 .8.4.8.8 0 1 .2 2 .5 2.9.1.3 0 .6-.2.8L7 9.8z" fill="#f472b6"/></svg>',
      telegram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#25D366"/><path d="M17.5 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9c0 1.7 1.3 3.4 1.4 3.6.2.2 2.5 3.9 6.2 5.4.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.5z" fill="#ffffff"/></svg>',
      max_messenger: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#0080FF"/><path d="M6.5 15.5V8.5h2.2l2.3 4.5 2.3-4.5h2.2v7h-1.8v-4.8l-2.1 4.2h-1.2L8.3 10.7v4.8H6.5z" fill="#ffffff"/></svg>'
    };

    var titles = {
      phone: 'Телефон',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      max_messenger: 'MAX'
    };

    methodBtns.forEach(function(btn) {
      var mType = btn.getAttribute('data-method-type');
      var label = btn.querySelector('.t-contact-method__type-label');
      if (label && mType && icons[mType]) {
        label.innerHTML = icons[mType] + '<span class="t-contact-method__title">' + (titles[mType] || mType) + '</span>';
      }
    });

    function selectMethod(methodType) {
      methodBtns.forEach(function(btn) {
        var bType = btn.getAttribute('data-method-type');
        var r = btn.querySelector('input[type="radio"]');
        if (bType === methodType) {
          btn.classList.add('hp-active');
          if (r) {
            r.checked = true;
            r.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } else {
          btn.classList.remove('hp-active');
          if (r) r.checked = false;
        }
      });

      Object.keys(valMap).forEach(function(m) {
        var block = valMap[m];
        if (!block) return;
        var inputs = block.querySelectorAll('input');

        if (m === methodType) {
          block.style.setProperty('display', 'block', 'important');
          block.classList.remove('t-contact-method__hidden');
          block.classList.add('hp-method-active');

          if (m === 'telegram' || m === 'max_messenger') {
            var userInp = block.querySelector('.js-username-input');
            var phoneInp = block.querySelector('input[type="tel"]');
            var phoneWrap = phoneInp ? phoneInp.closest('.t-input-block') : null;
            var userWrap = userInp ? userInp.closest('.t-input-block') : null;

            if (phoneWrap) {
              phoneWrap.style.setProperty('display', 'none', 'important');
              phoneWrap.classList.add('hp-block-hidden');
            }
            if (phoneInp) {
              phoneInp.disabled = true;
              phoneInp.classList.remove('js-tilda-rule');
            }

            if (userWrap) {
              userWrap.style.setProperty('display', 'block', 'important');
              userWrap.classList.remove('hp-block-hidden');
            }
            if (userInp) {
              userInp.disabled = false;
              userInp.classList.add('js-tilda-rule');
              userInp.style.setProperty('display', 'block', 'important');
              userInp.placeholder = m === 'telegram' ? 'Ник @username или номер телефона' : 'Ссылка на профиль MAX или телефон';
            }
          } else {
            inputs.forEach(function(inp) {
              inp.disabled = false;
              inp.classList.add('js-tilda-rule');
              var wrap = inp.closest('.t-input-block');
              if (wrap) {
                wrap.style.setProperty('display', 'block', 'important');
                wrap.classList.remove('hp-block-hidden');
              }
            });
          }
        } else {
          block.style.setProperty('display', 'none', 'important');
          block.classList.add('t-contact-method__hidden');
          block.classList.remove('hp-method-active');
          inputs.forEach(function(inp) {
            inp.disabled = true;
            inp.classList.remove('js-tilda-rule');
            var wrap = inp.closest('.t-input-block');
            if (wrap) {
              wrap.style.setProperty('display', 'none', 'important');
              wrap.classList.add('hp-block-hidden');
            }
          });
        }
      });
    }

    methodBtns.forEach(function(btn) {
      if (btn.dataset.hpSwitchInit) return;
      btn.dataset.hpSwitchInit = 'true';
      btn.addEventListener('click', function(e) {
        var mType = btn.getAttribute('data-method-type');
        if (mType) selectMethod(mType);
      });
    });

    var checkedRadio = methodContainer.querySelector('input[type="radio"]:checked');
    var defaultMethod = (checkedRadio && checkedRadio.value && valMap[checkedRadio.value]) ? checkedRadio.value : 'telegram';
    selectMethod(defaultMethod);
  }

  function mountTildaNativeForm() {
    var slot = document.getElementById('hp-tilda-form-slot');
    if (!slot) return;

    var rec = document.getElementById('rec4673146901');
    if (!rec) return;

    // ВАЖНО: Переносим ВЕСЬ блок #rec4673146901 внутрь слота!
    // Не вырываем форму, чтобы все функции Тильды (телефонная маска с флагом и кодом +7, валидация и отправка) работали штатно!
    if (rec.parentElement !== slot) {
      slot.appendChild(rec);
    }

    rec.style.setProperty('display', 'block', 'important');
    rec.style.setProperty('visibility', 'visible', 'important');
    rec.style.setProperty('opacity', '1', 'important');
    rec.style.setProperty('pointer-events', 'auto', 'important');
    rec.style.setProperty('position', 'static', 'important');

    var popup = rec.querySelector('.t-popup');
    if (popup) {
      popup.style.setProperty('display', 'block', 'important');
      popup.style.setProperty('visibility', 'visible', 'important');
      popup.style.setProperty('opacity', '1', 'important');
      popup.style.setProperty('position', 'static', 'important');
      popup.classList.add('t-popup_show');
    }

    var popupContainer = rec.querySelector('.t-popup__container');
    if (popupContainer) {
      popupContainer.style.setProperty('display', 'block', 'important');
      popupContainer.style.setProperty('position', 'static', 'important');
      popupContainer.style.setProperty('background', 'transparent', 'important');
    }

    var form = rec.querySelector('form#form4673146901') || rec.querySelector('form');
    if (!form) return;

    form.style.setProperty('display', 'block', 'important');
    form.style.setProperty('visibility', 'visible', 'important');
    form.style.setProperty('opacity', '1', 'important');
    form.style.setProperty('position', 'static', 'important');
    form.style.setProperty('transform', 'none', 'important');

    // Заголовки и плашки
    var titleGroup = form.querySelector('.t-input-title');
    if (titleGroup) {
      titleGroup.textContent = 'Выберите удобный способ связи:';
    }

    var subBtn = form.querySelector('.t-btnflex__text, .t-submit');
    if (subBtn) {
      subBtn.textContent = 'Получить подбор и фото среза ✦';
    }

    var submitBtnEl = form.querySelector('button[type="submit"], .t-submit');
    if (submitBtnEl) {
      submitBtnEl.style.setProperty('pointer-events', 'auto', 'important');
      submitBtnEl.style.setProperty('cursor', 'pointer', 'important');
      submitBtnEl.removeAttribute('disabled');

      submitBtnEl.addEventListener('click', function(e) {
        if (submitBtnEl.tildaSendingStatus === '1') {
          submitBtnEl.tildaSendingStatus = '0';
          submitBtnEl.classList.remove('t-btn_sending');
        }

        var activeGroup = form.querySelector('.t-contact-method__value-container > div.hp-method-active');
        if (activeGroup) {
          var telInp = activeGroup.querySelector('input[type="tel"]');
          var resInp = activeGroup.querySelector('.js-phonemask-result');
          if (telInp && resInp && telInp.value && !resInp.value) {
            resInp.value = telInp.value;
          }
        }
      });
    }

    var nameInp = form.querySelector('input[name="Name"]');
    if (nameInp) {
      nameInp.placeholder = 'Ваше имя';
    }

    var tgInp = form.querySelector('input[data-contact-method="telegram"]');
    if (tgInp) {
      tgInp.placeholder = 'Ник @username или номер телефона';
    }
    var maxInp = form.querySelector('input[data-contact-method="max_messenger"]');
    if (maxInp) {
      maxInp.placeholder = 'Ссылка на профиль MAX или телефон';
    }

    // Инициализируем телефонные маски Tilda
    function initPhoneMasks() {
      if (typeof window.t_form_phonemask__mulitple__load === 'function') {
        var maskInputs = rec.querySelectorAll('[data-phonemask-lid="1770920801992"]');
        if (maskInputs.length) {
          try {
            window.t_form_phonemask__mulitple__load(maskInputs);
          } catch (e) {}
        }
      }
      if (typeof window.t_contactMethod__init === 'function') {
        try {
          window.t_contactMethod__init('4673146901', '1770920801992');
        } catch (e) {}
      }
    }

    initPhoneMasks();
    setTimeout(initPhoneMasks, 250);
    setTimeout(initPhoneMasks, 600);
    setTimeout(initPhoneMasks, 1200);

    setupContactMethodSwitcher(form);

    if (!form.dataset.hpMounted) {
      form.dataset.hpMounted = 'true';

      form.addEventListener('submit', function() {
        if (chosenCutParam) {
          if (nameInp && nameInp.value && nameInp.value.indexOf(chosenCutParam) === -1) {
            nameInp.value = nameInp.value + ' (' + chosenCutParam + ')';
          }
        }
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



    var quizBtn = document.querySelector('#selection .hp-btn-main');

    if (quizBtn) {

      quizBtn.addEventListener('click', function() {

        var lenEl = document.querySelector('#quiz-length .hp-quiz-opt.selected');

        var typeEl = document.querySelector('#quiz-type .hp-quiz-opt.selected');

        var lenVal = lenEl ? lenEl.getAttribute('data-val') : '55-65 см';

        var typeVal = typeEl ? typeEl.getAttribute('data-val') : 'Детский шелк';

        setSelectedCutBadge(lenVal + ' • ' + typeVal, true);

        scrollToSection('lead-box');

      });

    }



    mountTildaNativeForm();

    setTimeout(mountTildaNativeForm, 500);

    setTimeout(mountTildaNativeForm, 1500);

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

