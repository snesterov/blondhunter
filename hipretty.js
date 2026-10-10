(function() {
  // Шрифты: Cormorant Garamond (кутюрный заголовочный) + Montserrat (геометричный премиальный гротеск)
  if (!document.getElementById('hp-fonts')) {
    var f = document.createElement('link');
    f.id = 'hp-fonts';
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Montserrat:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(f);
  }

  // Роскошная палитра Royal Amethyst & Deep Violet Glass
  if (!document.getElementById('hp-styles')) {
    var s = document.createElement('style');
    s.id = 'hp-styles';
    s.textContent = `
      /* Скрываем дубликаты и дефолтные блоки Tilda, оставляя попапы */
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
        --hp-v-base: #0a0614;
        --hp-v-dark: #120a24;
        --hp-v-surface: rgba(23, 14, 42, 0.85);
        --hp-v-card: rgba(28, 17, 52, 0.75);
        --hp-v-card-hover: rgba(38, 22, 70, 0.95);
        
        --hp-purple: #a855f7;
        --hp-purple-bright: #c084fc;
        --hp-purple-light: #e9d5ff;
        --hp-amethyst: #9333ea;
        --hp-neon: #d946ef;
        
        --hp-grad-primary: linear-gradient(135deg, #f5d0fe 0%, #c084fc 45%, #9333ea 100%);
        --hp-grad-glow: linear-gradient(135deg, rgba(217, 70, 239, 0.35) 0%, rgba(147, 51, 234, 0.2) 100%);
        --hp-grad-border: linear-gradient(135deg, rgba(217, 70, 239, 0.6) 0%, rgba(147, 51, 234, 0.25) 50%, rgba(255, 255, 255, 0.05) 100%);

        --hp-text-main: #fcfaff;
        --hp-text-muted: #b3a6c8;
        --hp-border-subtle: rgba(192, 132, 252, 0.2);
        --hp-border-highlight: rgba(217, 70, 239, 0.45);
        --hp-glow: 0 0 35px rgba(168, 85, 247, 0.3);
      }

      * { box-sizing: border-box !important; }

      html, body {
        margin: 0 !important; padding: 0 !important;
        background-color: var(--hp-v-base) !important;
        color: var(--hp-text-main) !important;
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
        background: radial-gradient(circle at 50% -10%, #2f1354 0%, #120a24 40%, #07040d 100%);
        position: relative;
        z-index: 10;
      }

      .hp-container {
        width: 100%;
        max-width: 1260px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* HEADER */
      .hp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 0;
        border-bottom: 1px solid var(--hp-border-subtle);
        position: sticky;
        top: 0;
        background: rgba(11, 7, 21, 0.92);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        z-index: 100;
      }
      .hp-logo-wrap { text-decoration: none; display: flex; flex-direction: column; }
      .hp-logo {
        font-family: 'Cormorant Garamond', serif;
        font-size: 34px;
        font-weight: 700;
        letter-spacing: 1.5px;
        line-height: 1;
        background: var(--hp-grad-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: lowercase;
      }
      .hp-logo-sub {
        font-size: 10.5px;
        color: var(--hp-purple-bright);
        letter-spacing: 2.5px;
        text-transform: uppercase;
        margin-top: 5px;
        font-weight: 600;
      }
      .hp-nav-links {
        display: flex;
        align-items: center;
        gap: 24px;
      }
      .hp-nav-link {
        color: #d8cde8;
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        transition: color 0.2s ease;
      }
      .hp-nav-link:hover { color: var(--hp-purple-bright); }
      .hp-header-actions { display: flex; align-items: center; gap: 14px; }
      .hp-header-phone {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        transition: color 0.2s ease;
      }
      .hp-header-phone:hover { color: var(--hp-purple-bright); }
      .hp-btn-header-cta {
        background: var(--hp-grad-primary);
        color: #120521 !important;
        font-weight: 700;
        font-size: 13px;
        padding: 11px 22px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 4px 20px rgba(168, 85, 247, 0.45);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: 7px;
      }
      .hp-btn-header-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 28px rgba(168, 85, 247, 0.65);
      }

      /* HERO SECTION (НОВЫЙ КУТЮРНЫЙ ВИОЛЕТОВЫЙ ЭКРАН) */
      .hp-hero { padding: 48px 0 70px; position: relative; }
      .hp-hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 44px;
        align-items: center;
      }
      .hp-badge-brand {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        background: rgba(168, 85, 247, 0.15);
        border: 1px solid var(--hp-border-highlight);
        color: var(--hp-purple-light);
        padding: 8px 18px;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin-bottom: 22px;
      }
      .hp-badge-brand span {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #10B981;
        display: inline-block;
        box-shadow: 0 0 10px #10B981;
      }
      .hp-hero-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(36px, 4.4vw, 60px);
        font-weight: 700;
        line-height: 1.1;
        margin: 0 0 20px;
        color: #ffffff;
      }
      .hp-hero-title span {
        background: var(--hp-grad-primary);
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
        gap: 12px;
        margin-bottom: 38px;
      }
      .hp-btn-main {
        background: var(--hp-grad-primary);
        color: #150624 !important;
        font-size: 15px;
        font-weight: 700;
        padding: 16px 32px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        border: none;
      }
      .hp-btn-main:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 38px rgba(168, 85, 247, 0.7);
      }
      .hp-btn-max {
        background: rgba(33, 150, 243, 0.16);
        border: 1px solid rgba(33, 150, 243, 0.5);
        color: #90CAF9 !important;
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
        background: rgba(33, 150, 243, 0.28);
        border-color: #2196F3;
      }
      .hp-btn-tg-soft {
        background: rgba(168, 85, 247, 0.12);
        border: 1px solid var(--hp-border-subtle);
        color: #d8b4fe !important;
        font-size: 14px;
        font-weight: 600;
        padding: 15px 22px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.2s ease;
      }
      .hp-btn-tg-soft:hover {
        background: rgba(168, 85, 247, 0.22);
        border-color: var(--hp-purple);
      }

      /* HERO SHOWCASE ТРЕХ ДЕВОЧЕК В ФИОЛЕТОВОМ НЕОНЕ */
      .hp-hero-girls-showcase {
        position: relative;
        background: radial-gradient(ellipse at 50% 25%, rgba(192, 132, 252, 0.25) 0%, rgba(20, 12, 36, 0.95) 75%);
        border: 1px solid var(--hp-border-highlight);
        border-radius: 32px;
        padding: 18px;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(168, 85, 247, 0.28);
        overflow: hidden;
      }
      .hp-hero-girls-showcase::before {
        content: '';
        position: absolute;
        top: -50%; left: -50%;
        width: 200%; height: 200%;
        background: radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 60%);
        pointer-events: none;
      }
      .hp-girls-img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 24px;
        object-fit: cover;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
        position: relative;
        z-index: 2;
      }
      .hp-hero-float-badge {
        position: absolute;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        background: rgba(22, 13, 40, 0.88);
        border: 1px solid var(--hp-border-highlight);
        border-radius: 18px;
        padding: 11px 18px;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        font-size: 13px;
        font-weight: 600;
        z-index: 3;
      }
      .hp-hero-float-badge.top-left { top: 32px; left: 32px; }
      .hp-hero-float-badge.bottom-right { bottom: 32px; right: 32px; }
      .hp-badge-icon { font-size: 18px; }

      /* СТАТИСТИКА ПОД ГЕРОЕМ */
      .hp-hero-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      .hp-stat-card {
        background: var(--hp-v-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 20px;
        padding: 20px 22px;
        backdrop-filter: blur(12px);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .hp-stat-card:hover {
        transform: translateY(-2px);
        border-color: var(--hp-border-highlight);
      }
      .hp-stat-val {
        font-family: 'Cormorant Garamond', serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 1;
        background: var(--hp-grad-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 6px;
      }
      .hp-stat-lbl {
        font-size: 12.5px;
        color: var(--hp-text-muted);
        line-height: 1.4;
      }

      /* СЕКЦИИ: ОБЩИЕ СТИЛИ */
      .hp-sec-head {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 48px;
      }
      .hp-sec-badge {
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: var(--hp-purple-bright);
        margin-bottom: 12px;
      }
      .hp-sec-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(32px, 4vw, 50px);
        font-weight: 700;
        color: #fff;
        line-height: 1.15;
        margin: 0 0 16px;
      }
      .hp-sec-title span {
        background: var(--hp-grad-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hp-sec-desc {
        font-size: 15.5px;
        color: var(--hp-text-muted);
        line-height: 1.65;
        margin: 0;
      }

      /* ==============================================================
         КИЛЛЕР-ФИШКА №1: ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР НАРАЩИВАНИЯ
         (Расчет плотности, граммовки, капсул и стоимости в реальном времени)
         ============================================================== */
      .hp-calc-section { padding: 40px 0 75px; }
      .hp-calc-card {
        background: radial-gradient(ellipse at 50% 0%, #261147 0%, #150b2b 75%);
        border: 1px solid var(--hp-border-highlight);
        border-radius: 32px;
        padding: 44px;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.25);
        max-width: 1040px;
        margin: 0 auto;
      }
      .hp-calc-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 40px;
        align-items: center;
      }
      .hp-calc-step-title {
        font-size: 14.5px;
        font-weight: 700;
        color: var(--hp-purple-light);
        margin: 0 0 12px;
        letter-spacing: 0.5px;
      }
      .hp-calc-pill-group {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 24px;
      }
      .hp-calc-pill {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--hp-border-subtle);
        color: #d1c5e4;
        padding: 10px 18px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-calc-pill:hover {
        border-color: var(--hp-purple-bright);
        color: #fff;
      }
      .hp-calc-pill.active {
        background: rgba(168, 85, 247, 0.25);
        border-color: var(--hp-purple-bright);
        color: #fff;
        box-shadow: 0 0 16px rgba(168, 85, 247, 0.4);
      }

      /* Результат калькулятора */
      .hp-calc-result-box {
        background: rgba(15, 9, 29, 0.88);
        border: 1px solid var(--hp-border-highlight);
        border-radius: 24px;
        padding: 32px;
        text-align: center;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        position: relative;
        overflow: hidden;
      }
      .hp-calc-result-badge {
        display: inline-block;
        background: rgba(168, 85, 247, 0.2);
        color: var(--hp-purple-bright);
        border: 1px solid var(--hp-border-subtle);
        padding: 5px 14px;
        border-radius: 14px;
        font-size: 11.5px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 14px;
      }
      .hp-calc-val-big {
        font-family: 'Cormorant Garamond', serif;
        font-size: 48px;
        font-weight: 700;
        background: var(--hp-grad-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
        margin-bottom: 8px;
      }
      .hp-calc-val-sub {
        font-size: 13.5px;
        color: var(--hp-text-muted);
        line-height: 1.5;
        margin-bottom: 22px;
      }
      .hp-calc-details-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 24px;
        text-align: left;
      }
      .hp-calc-detail-item {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 14px;
        padding: 12px 14px;
      }
      .hp-cd-lbl { font-size: 11px; color: var(--hp-text-muted); text-transform: uppercase; }
      .hp-cd-val { font-size: 15px; font-weight: 700; color: #fff; margin-top: 3px; }

      /* ==============================================================
         КИЛЛЕР-ФИШКА №2: AI-ПОДБОР ПО ФОТО СО СПИНЫ (MATCHING DROPZONE)
         ============================================================== */
      .hp-ai-match-card {
        background: linear-gradient(135deg, rgba(35, 17, 65, 0.85) 0%, rgba(18, 10, 36, 0.95) 100%);
        border: 1px dashed var(--hp-border-highlight);
        border-radius: 28px;
        padding: 36px;
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 32px;
        align-items: center;
        margin-bottom: 75px;
      }
      .hp-ai-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(217, 70, 239, 0.2);
        color: #f5d0fe;
        border: 1px solid rgba(217, 70, 239, 0.4);
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .hp-ai-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 10px;
      }
      .hp-ai-desc {
        font-size: 14.5px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        margin: 0 0 20px;
      }
      .hp-ai-drop-area {
        background: rgba(14, 8, 26, 0.8);
        border: 2px dashed rgba(168, 85, 247, 0.4);
        border-radius: 20px;
        padding: 30px 20px;
        text-align: center;
        cursor: pointer;
        transition: all 0.25s ease;
      }
      .hp-ai-drop-area:hover {
        border-color: var(--hp-neon);
        background: rgba(25, 13, 46, 0.9);
      }
      .hp-ai-drop-icon { font-size: 36px; margin-bottom: 10px; }
      .hp-ai-drop-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px; }
      .hp-ai-drop-sub { font-size: 12px; color: var(--hp-text-muted); }

      /* КАТАЛОГ СРЕЗОВ В НАЛИЧИИ С ФИЛЬТРАМИ */
      .hp-catalog-section { padding: 40px 0 75px; }
      .hp-catalog-filters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 38px;
      }
      .hp-filter-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--hp-border-subtle);
        color: #cfc7d8;
        padding: 11px 22px;
        border-radius: 25px;
        font-size: 13.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-filter-btn:hover {
        border-color: var(--hp-purple-bright);
        color: #fff;
      }
      .hp-filter-btn.active {
        background: rgba(168, 85, 247, 0.25);
        border-color: var(--hp-purple-bright);
        color: #fff;
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
      }
      .hp-catalog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 26px;
      }
      .hp-cut-card {
        background: var(--hp-v-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 24px;
        overflow: hidden;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(12px);
      }
      .hp-cut-card:hover {
        transform: translateY(-5px);
        border-color: var(--hp-border-highlight);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.75), 0 0 30px rgba(168, 85, 247, 0.25);
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
        background: rgba(15, 9, 29, 0.88);
        backdrop-filter: blur(10px);
        border: 1px solid var(--hp-border-highlight);
        color: var(--hp-purple-light);
        padding: 5px 12px;
        border-radius: 14px;
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: 0.5px;
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
        color: var(--hp-purple-bright);
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
        background: rgba(168, 85, 247, 0.16);
        border: 1px solid var(--hp-border-highlight);
        color: var(--hp-purple-light) !important;
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
        background: var(--hp-grad-primary);
        color: #120521 !important;
        box-shadow: 0 6px 24px rgba(168, 85, 247, 0.5);
      }

      /* ==============================================================
         КИЛЛЕР-ФИШКА №3: VIP-ПРОГРАММА ДЛЯ МАСТЕРОВ И САЛОНОВ
         ============================================================== */
      .hp-master-box {
        background: radial-gradient(ellipse at 80% 50%, rgba(217, 70, 239, 0.2) 0%, rgba(22, 12, 42, 0.95) 70%);
        border: 1px solid var(--hp-border-highlight);
        border-radius: 30px;
        padding: 44px;
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 40px;
        align-items: center;
        margin-bottom: 75px;
      }
      .hp-master-badge {
        display: inline-block;
        background: rgba(168, 85, 247, 0.2);
        color: var(--hp-purple-bright);
        border: 1px solid var(--hp-border-subtle);
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .hp-master-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 34px;
        font-weight: 700;
        color: #fff;
        margin: 0 0 12px;
      }
      .hp-master-desc {
        font-size: 15px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        margin: 0 0 24px;
      }
      .hp-master-perks {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 24px;
      }
      .hp-master-perk {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
        padding: 12px;
        font-size: 13px;
        color: #e2d9f0;
      }

      /* ЦЕНТРАЛЬНЫЙ БЛОК ЗАХВАТА ЗАЯВКИ (LEAD GENERATION BLOCK) */
      .hp-lead-section { padding: 40px 0 75px; }
      .hp-lead-box {
        background: radial-gradient(ellipse at 50% -10%, #3a1566 0%, #170d2f 70%);
        border: 1px solid var(--hp-border-highlight);
        border-radius: 32px;
        padding: 50px 42px;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(168, 85, 247, 0.3);
        max-width: 820px;
        margin: 0 auto;
        text-align: center;
        position: relative;
      }
      .hp-lead-badge {
        display: inline-block;
        background: rgba(168, 85, 247, 0.2);
        border: 1px solid var(--hp-border-subtle);
        color: var(--hp-purple-light);
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
        font-size: clamp(32px, 4.2vw, 48px);
        font-weight: 700;
        line-height: 1.15;
        margin: 0 0 14px;
        color: #fff;
      }
      .hp-lead-subtitle {
        font-size: 15.5px;
        line-height: 1.6;
        color: var(--hp-text-muted);
        margin: 0 auto 34px;
        max-width: 620px;
      }
      .hp-method-label {
        font-size: 13.5px;
        color: #f5eefc;
        font-weight: 600;
        margin-bottom: 14px;
        text-align: left;
      }
      .hp-method-selector {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        margin-bottom: 22px;
      }
      .hp-method-btn {
        background: #1c1033;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        padding: 13px 8px;
        color: #ccc;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        transition: all 0.2s ease;
      }
      .hp-method-btn:hover { border-color: var(--hp-purple-bright); }
      .hp-method-btn.active.max {
        background: rgba(33, 150, 243, 0.25);
        border-color: #2196F3;
        color: #fff;
        box-shadow: 0 0 18px rgba(33, 150, 243, 0.4);
      }
      .hp-method-btn.active.tg {
        background: rgba(168, 85, 247, 0.25);
        border-color: var(--hp-purple);
        color: #fff;
        box-shadow: 0 0 18px rgba(168, 85, 247, 0.4);
      }
      .hp-method-btn.active.wa {
        background: rgba(37, 211, 102, 0.25);
        border-color: #25D366;
        color: #fff;
        box-shadow: 0 0 18px rgba(37, 211, 102, 0.4);
      }
      .hp-method-btn.active.phone {
        background: rgba(217, 70, 239, 0.25);
        border-color: var(--hp-neon);
        color: #fff;
        box-shadow: 0 0 18px rgba(217, 70, 239, 0.4);
      }
      .hp-input-group { margin-bottom: 16px; text-align: left; }
      .hp-input {
        width: 100%;
        background: #190e2e;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 16px;
        color: #fff;
        padding: 16px 20px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .hp-input:focus {
        border-color: var(--hp-purple-bright);
        box-shadow: 0 0 18px rgba(168, 85, 247, 0.35);
      }
      .hp-input-hint {
        font-size: 12px;
        color: var(--hp-text-muted);
        margin-top: 8px;
        line-height: 1.5;
      }
      .hp-input-hint strong { color: var(--hp-purple-light); }
      .hp-form-submit {
        width: 100%;
        background: var(--hp-grad-primary);
        color: #120521;
        border: none;
        border-radius: 18px;
        padding: 18px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 8px 32px rgba(168, 85, 247, 0.55);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin-top: 10px;
      }
      .hp-form-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 40px rgba(168, 85, 247, 0.75);
      }
      .hp-form-policy {
        font-size: 12px;
        color: #9283a8;
        margin-top: 14px;
        line-height: 1.5;
      }
      .hp-form-policy a {
        color: var(--hp-purple-light);
        text-decoration: underline;
        cursor: pointer;
      }

      /* ЖИВАЯ ЛЕНТА TELEGRAM & MAX КАНАЛА (@hi_pretty) */
      .hp-tg-feed-section { padding: 40px 0 75px; }
      .hp-feed-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
      .hp-feed-card {
        background: var(--hp-v-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .hp-feed-card:hover {
        transform: translateY(-4px);
        border-color: var(--hp-border-highlight);
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
        background: var(--hp-grad-primary);
        color: #120521 !important;
        font-weight: 700;
        font-size: 12px;
        padding: 9px 12px;
        border-radius: 12px;
        text-decoration: none;
        flex-grow: 1;
        text-align: center;
      }
      .hp-feed-btn-tg {
        background: rgba(168, 85, 247, 0.18);
        color: var(--hp-purple-light) !important;
        border: 1px solid var(--hp-border-subtle);
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
        background: var(--hp-v-card);
        border: 1px solid var(--hp-border-subtle);
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
        background: rgba(168, 85, 247, 0.25);
        border: 1px solid var(--hp-border-highlight);
        display: flex; align-items: center; justify-content: center;
        font-weight: 700; color: #fff;
      }
      .hp-review-name { font-weight: 700; font-size: 14px; color: #fff; }
      .hp-review-role { font-size: 12px; color: var(--hp-text-muted); }

      /* FAQ АККОРДЕОН */
      .hp-faq-list {
        max-width: 820px;
        margin: 0 auto 75px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .hp-faq-item {
        background: var(--hp-v-card);
        border: 1px solid var(--hp-border-subtle);
        border-radius: 18px;
        overflow: hidden;
        transition: border-color 0.2s ease;
      }
      .hp-faq-item.active { border-color: var(--hp-border-highlight); }
      .hp-faq-question {
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }
      .hp-faq-icon {
        font-size: 20px;
        color: var(--hp-purple-bright);
        transition: transform 0.25s ease;
      }
      .hp-faq-item.active .hp-faq-icon { transform: rotate(45deg); }
      .hp-faq-answer {
        padding: 0 24px 20px;
        font-size: 14px;
        color: var(--hp-text-muted);
        line-height: 1.6;
        display: none;
      }
      .hp-faq-item.active .hp-faq-answer { display: block; }

      /* КОНТАКТЫ И ШОУРУМ */
      .hp-contacts-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        background: var(--hp-v-card);
        border: 1px solid var(--hp-border-highlight);
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
      .hp-ci-icon { font-size: 20px; color: var(--hp-purple-bright); line-height: 1.2; }
      .hp-ci-label { font-size: 12px; color: var(--hp-text-muted); text-transform: uppercase; letter-spacing: 1px; }
      .hp-ci-val { font-size: 15px; color: #fff; font-weight: 600; margin-top: 2px; }
      .hp-ci-val a { color: var(--hp-purple-light); text-decoration: none; }
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
        background: rgba(15, 9, 29, 0.88);
        backdrop-filter: blur(8px);
        border: 1px solid var(--hp-border-highlight);
        color: #fff;
        padding: 8px 14px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }

      /* FOOTER */
      .hp-footer {
        padding: 40px 0 60px;
        border-top: 1px solid var(--hp-border-subtle);
        text-align: center;
        font-size: 13px;
        color: #9283a8;
        line-height: 1.65;
      }
      .hp-footer-links {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 14px;
      }
      .hp-footer-link { color: #ccc; cursor: pointer; text-decoration: underline; }

      /* ==============================================================
         РЕСТАЙЛИНГ ВСЕХ НА ТИЛЬДЕ ПОПАПОВ (rec1915062531 и rec1935129061)
         ============================================================== */
      .t-popup,
      #rec1915062531 .t-popup,
      #rec1935129061 .t-popup {
        background-color: rgba(6, 3, 11, 0.9) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
      }

      #rec1915062531 .t-popup__container,
      #rec1935129061 .t-popup__container {
        background: #150b28 !important;
        border: 1px solid var(--hp-border-highlight) !important;
        border-radius: 28px !important;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(168, 85, 247, 0.3) !important;
        padding: 36px 32px !important;
        color: #f9f8fc !important;
        position: relative !important;
        overflow: hidden !important;
      }

      #rec1915062531 .t-popup__container::before,
      #rec1935129061 .t-popup__container::before {
        content: '';
        position: absolute;
        top: 0; left: 50%;
        transform: translateX(-50%);
        width: 70%;
        height: 2px;
        background: linear-gradient(90deg, transparent 0%, var(--hp-purple-bright) 50%, transparent 100%);
        pointer-events: none;
      }

      #rec1915062531 .t-popup__close-wrapper,
      #rec1935129061 .t-popup__close-wrapper {
        background: rgba(255, 255, 255, 0.08) !important;
        border-radius: 50% !important;
        width: 36px !important;
        height: 36px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: background-color 0.2s ease, transform 0.2s ease !important;
      }
      #rec1915062531 .t-popup__close-wrapper:hover,
      #rec1935129061 .t-popup__close-wrapper:hover {
        background: rgba(168, 85, 247, 0.3) !important;
        transform: scale(1.08) !important;
      }
      #rec1915062531 .t-popup__close-icon g,
      #rec1915062531 .t-popup__close-icon rect,
      #rec1935129061 .t-popup__close-icon g,
      #rec1935129061 .t-popup__close-icon rect {
        fill: var(--hp-purple-light) !important;
      }

      #rec1915062531 .t702__title,
      #rec1935129061 .t702__title {
        font-family: 'Cormorant Garamond', serif !important;
        font-size: clamp(26px, 3.4vw, 36px) !important;
        font-weight: 700 !important;
        color: #ffffff !important;
        line-height: 1.2 !important;
        margin-bottom: 10px !important;
        text-align: center !important;
      }
      #rec1915062531 .t702__descr,
      #rec1935129061 .t702__descr {
        font-family: 'Montserrat', sans-serif !important;
        font-size: 14px !important;
        color: var(--hp-text-muted) !important;
        line-height: 1.55 !important;
        margin-bottom: 24px !important;
        text-align: center !important;
      }

      #rec1915062531 .t-input,
      #rec1935129061 .t-input {
        background: #1b0e33 !important;
        border: 1px solid rgba(255, 255, 255, 0.12) !important;
        border-radius: 14px !important;
        color: #ffffff !important;
        padding: 14px 18px !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      #rec1915062531 .t-input:focus,
      #rec1935129061 .t-input:focus {
        border-color: var(--hp-purple-bright) !important;
        box-shadow: 0 0 16px rgba(168, 85, 247, 0.35) !important;
        outline: none !important;
      }

      #rec1915062531 .t-input-title,
      #rec1935129061 .t-input-title {
        color: var(--hp-purple-light) !important;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        margin-bottom: 10px !important;
      }
      #rec1915062531 .t-contact-method__types-container {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 8px !important;
        margin-bottom: 16px !important;
      }
      #rec1915062531 .t-contact-method__type {
        background: #1b0e33 !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 12px !important;
        padding: 10px 6px !important;
        transition: all 0.2s ease !important;
        margin: 0 !important;
      }
      #rec1915062531 .t-contact-method__type-label {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        cursor: pointer !important;
      }
      #rec1915062531 .t-contact-method__title {
        color: #d1c8db !important;
        font-size: 12px !important;
        font-weight: 600 !important;
      }
      #rec1915062531 .t-contact-method__type:has(>.t-radio:checked) {
        background-color: rgba(168, 85, 247, 0.25) !important;
        border-color: var(--hp-purple-bright) !important;
        box-shadow: 0 0 16px rgba(168, 85, 247, 0.4) !important;
      }
      #rec1915062531 .t-contact-method__type:has(>.t-radio:checked) .t-contact-method__title {
        color: #ffffff !important;
        font-weight: 700 !important;
      }

      #rec1915062531 .t-btnflex.t-btnflex_type_submit,
      #rec1915062531 .t-submit,
      #rec1935129061 .t-btnflex.t-btnflex_type_submit,
      #rec1935129061 .t-submit {
        background: var(--hp-grad-primary) !important;
        color: #120521 !important;
        border: none !important;
        border-radius: 16px !important;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        padding: 16px 28px !important;
        box-shadow: 0 6px 25px rgba(168, 85, 247, 0.5) !important;
        cursor: pointer !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        width: 100% !important;
        margin-top: 10px !important;
      }
      #rec1915062531 .t-btnflex__text,
      #rec1935129061 .t-btnflex__text {
        color: #120521 !important;
        font-weight: 700 !important;
      }

      /* ПЛАВАЮЩИЕ КНОПКИ (MOBILE-FIRST) */
      /* Кнопка наверх: СТРОГО СЛЕВА ВНИЗУ (14px, 14px, 40x40px) */
      #hp-btn-top {
        position: fixed;
        bottom: 14px;
        left: 14px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(22, 13, 40, 0.9);
        border: 1px solid var(--hp-border-highlight);
        color: var(--hp-purple-bright);
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        transition: transform 0.2s ease, background 0.2s ease;
      }
      #hp-btn-top:hover {
        transform: translateY(-2px);
        background: rgba(168, 85, 247, 0.3);
      }
      #hp-btn-top svg { width: 20px; height: 20px; fill: currentColor; }

      /* Плавающий виджет заявки: СТРОГО СПРАВА ВНИЗУ (14px, 14px) */
      #hp-widget-lead {
        position: fixed;
        bottom: 14px;
        right: 14px;
        z-index: 9998;
      }
      .hp-widget-pulse-btn {
        background: var(--hp-grad-primary);
        color: #120521 !important;
        font-weight: 700;
        font-size: 13.5px;
        padding: 12px 22px;
        border-radius: 30px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 6px 25px rgba(168, 85, 247, 0.6);
        animation: hpPulse 2.8s infinite;
        transition: transform 0.2s ease;
      }
      .hp-widget-pulse-btn:hover { transform: scale(1.05); }
      @keyframes hpPulse {
        0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7); }
        70% { box-shadow: 0 0 0 16px rgba(168, 85, 247, 0); }
        100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
      }

      /* МОДАЛ 152-ФЗ */
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
        background: #170d2f;
        border: 1px solid var(--hp-border-highlight);
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

      /* АДАПТИВНОСТЬ */
      @media (max-width: 1024px) {
        .hp-calc-grid { grid-template-columns: 1fr; }
        .hp-ai-match-card { grid-template-columns: 1fr; }
        .hp-master-box { grid-template-columns: 1fr; }
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
        .hp-catalog-grid { grid-template-columns: 1fr; }
        .hp-feed-grid { grid-template-columns: 1fr; }
        .hp-calc-card { padding: 26px 20px; }
        .hp-method-selector { grid-template-columns: repeat(2, 1fr); }
        .hp-hero-float-badge.top-left { top: 12px; left: 12px; font-size: 11.5px; padding: 6px 12px; }
        .hp-hero-float-badge.bottom-right { bottom: 12px; right: 12px; font-size: 11.5px; padding: 6px 12px; }
      }
    `;
    document.head.appendChild(s);
  }

  // HTML ШАБЛОН
  var html = `
<div id="hp-app">
  <!-- ХЕДЕР -->
  <header class="hp-container hp-header">
    <a href="https://hipretty.ru" class="hp-logo-wrap">
      <div class="hp-logo">привет, волосы!</div>
      <div class="hp-logo-sub">магазин натуральных волос • москва</div>
    </a>
    <nav class="hp-nav-links">
      <a href="#calculator" class="hp-nav-link">Калькулятор среза</a>
      <a href="#ai-match" class="hp-nav-link">AI-Подбор по фото</a>
      <a href="#catalog" class="hp-nav-link">Срезы в наличии</a>
      <a href="#masters" class="hp-nav-link">Мастерам & Салонам</a>
      <a href="#kanalTG" class="hp-nav-link">Telegram-канал</a>
      <a href="#contacts" class="hp-nav-link">Контакты</a>
    </nav>
    <div class="hp-header-actions">
      <a href="tel:+79933365357" class="hp-header-phone">8 (993) 336-53-57</a>
      <a href="#popup:contact" class="hp-btn-header-cta">Консультация ✦</a>
    </div>
  </header>

  <!-- ГЛАВНЫЙ ЭКРАН (HERO) С ТРЕМЯ ДЕВОЧКАМИ В ФИОЛЕТОВОМ НЕОНЕ -->
  <section class="hp-container hp-hero">
    <div class="hp-hero-grid">
      <div class="hp-hero-info">
        <div class="hp-badge-brand"><span></span> Премиальный бутик натуральных волос</div>
        <h1 class="hp-hero-title">Детские и славянские срезы <span>высшей категории</span></h1>
        <p class="hp-hero-desc">
          Коллекция отборных некрашеных волос в студии на Арбате. 
          100% живой срез от одного донора без силикона, вычеса и химии. 
          Видео-демонстрация на весах перед отправкой. Экспресс-доставка по РФ и миру.
        </p>
        <div class="hp-hero-cta-box">
          <a href="#calculator" class="hp-btn-main">✦ Рассчитать срез в калькуляторе</a>
          <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="hp-btn-max">
            <span>●</span> Написать в MAX (без VPN)
          </a>
          <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-btn-tg-soft">
            <span>✈</span> Telegram (@hi_pretty)
          </a>
        </div>
        <div class="hp-hero-stats">
          <div class="hp-stat-card">
            <div class="hp-stat-val">>35 кг</div>
            <div class="hp-stat-lbl">Живого фонда волос в наличии в шоуруме</div>
          </div>
          <div class="hp-stat-card">
            <div class="hp-stat-val">40–80 см</div>
            <div class="hp-stat-lbl">Длины славянских и детских люкс-хвостиков</div>
          </div>
          <div class="hp-stat-card">
            <div class="hp-stat-val">100% Lux</div>
            <div class="hp-stat-lbl">Срез в один донор: не путаются и служат годами</div>
          </div>
        </div>
      </div>

      <!-- ФОТОГРАФИЯ ТРЕХ ДЕВОЧЕК -->
      <div class="hp-hero-girls-showcase">
        <img src="https://static.tildacdn.com/tild6662-3065-4338-a165-323261623835/169.svg" alt="Магазин натуральных волос привет, волосы! — три девочки" class="hp-girls-img" loading="eager">
        <div class="hp-hero-float-badge top-left">
          <span class="hp-badge-icon">✨</span>
          <span>100% Детские шелковые срезы</span>
        </div>
        <div class="hp-hero-float-badge bottom-right">
          <span class="hp-badge-icon">💎</span>
          <span>Оптовый прайс для мастеров</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================================================
       КИЛЛЕР-ФИШКА №1: ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР НАРАЩИВАНИЯ
       ============================================================== -->
  <section class="hp-container hp-calc-section" id="calculator">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Инновация студии «привет, волосы!»</span>
      <h2 class="hp-sec-title">Калькулятор объема, <span>граммовки и капсул</span></h2>
      <p class="hp-sec-desc">Узнайте точные параметры нужного среза за 3 клика и получите индивидуальный подбор с фиксацией скидки 3 000 ₽.</p>
    </div>

    <div class="hp-calc-card">
      <div class="hp-calc-grid">
        <div class="hp-calc-inputs">
          <div class="hp-calc-step-title">1. Ваша текущая длина волос:</div>
          <div class="hp-calc-pill-group" id="calc-current-len">
            <div class="hp-calc-pill" data-v="short">Каре / Короткие</div>
            <div class="hp-calc-pill active" data-v="mid">До плеч</div>
            <div class="hp-calc-pill" data-v="long">Ниже лопаток</div>
          </div>

          <div class="hp-calc-step-title">2. Желаемая длина наращивания:</div>
          <div class="hp-calc-pill-group" id="calc-target-len">
            <div class="hp-calc-pill" data-len="50">50 см (до лопаток)</div>
            <div class="hp-calc-pill active" data-len="60">60 см (до талии)</div>
            <div class="hp-calc-pill" data-len="70">70 см (ниже талии)</div>
            <div class="hp-calc-pill" data-len="80">80 см (эксклюзив)</div>
          </div>

          <div class="hp-calc-step-title">3. Густота своих волос:</div>
          <div class="hp-calc-pill-group" id="calc-density">
            <div class="hp-calc-pill" data-d="thin">Тонкие</div>
            <div class="hp-calc-pill active" data-d="normal">Средняя густота</div>
            <div class="hp-calc-pill" data-d="thick">Очень густые</div>
          </div>
        </div>

        <div class="hp-calc-result-box">
          <span class="hp-calc-result-badge">Ваш идеальный расчет</span>
          <div class="hp-calc-val-big" id="calc-weight-val">125 г</div>
          <div class="hp-calc-val-sub">Рекомендуемый вес натурального среза</div>

          <div class="hp-calc-details-grid">
            <div class="hp-calc-detail-item">
              <div class="hp-cd-lbl">Капсулы (микро)</div>
              <div class="hp-cd-val" id="calc-caps-val">~ 180–200 шт</div>
            </div>
            <div class="hp-calc-detail-item">
              <div class="hp-cd-lbl">Категория среза</div>
              <div class="hp-cd-val">Детский Люкс</div>
            </div>
          </div>

          <a href="#lead-box" class="hp-btn-main" style="width:100%;justify-content:center;">Зафиксировать расчет и скидку 3 000 ₽ ✦</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================================================
       КИЛЛЕР-ФИШКА №2: AI-ПОДБОР ПО ФОТО СО СПИНЫ
       ============================================================== -->
  <section class="hp-container" id="ai-match">
    <div class="hp-ai-match-card">
      <div>
        <div class="hp-ai-tag"><span>✦</span> 99.8% Точность оттенка</div>
        <h2 class="hp-ai-title">Подбор среза по фото со спины за 5 минут</h2>
        <p class="hp-ai-desc">
          Сфотографируйте ваши волосы со спины при дневном свете у окна. 
          Эксперт-колорист сопоставит структуру волос и тон по палитре и пришлет в MAX или Telegram видео 2–3 подходящих срезов прямо на весах.
        </p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="hp-btn-max">
            <span>●</span> Отправить фото в MAX
          </a>
          <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-btn-tg-soft">
            <span>✈</span> Отправить в Telegram
          </a>
        </div>
      </div>

      <div class="hp-ai-drop-area" onclick="document.querySelector('#lead-box').scrollIntoView({behavior:'smooth'})">
        <div class="hp-ai-drop-icon">📸</div>
        <div class="hp-ai-drop-title">Прикрепить фото своих волос</div>
        <div class="hp-ai-drop-sub">Нажмите для мгновенного подбора среза</div>
      </div>
    </div>
  </section>

  <!-- КАТАЛОГ СРЕЗОВ В НАЛИЧИИ -->
  <section class="hp-container hp-catalog-section" id="catalog">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Собственный склад в Москве</span>
      <h2 class="hp-sec-title">Свежие партии срезов <span>в наличии</span></h2>
      <p class="hp-sec-desc">Более 35 кг отборных волос. Выберите категорию или закажите индивидуальный подбор по фото ваших волос.</p>
    </div>

    <div class="hp-catalog-filters">
      <button type="button" class="hp-filter-btn active" data-filter="all">Все срезы (>35 кг)</button>
      <button type="button" class="hp-filter-btn" data-filter="kids">Детские блонды (Extra Lux)</button>
      <button type="button" class="hp-filter-btn" data-filter="slav">Светло-русые и пшеничные</button>
      <button type="button" class="hp-filter-btn" data-filter="dark">Шоколад и брюнет</button>
    </div>

    <div class="hp-catalog-grid">
      <div class="hp-cut-card" data-cat="kids">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3137-6435-4061-b463-393264316465/IMG_2585.JPG" alt="Славянский детский блонд" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Детский шелк • Lux</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Славянский детский блонд</h3>
          <div class="hp-cut-meta"><span>60 см</span> • <span>115 г</span> • <span>Плотный срез</span></div>
          <p class="hp-cut-desc">Неокрашенный детский волос редкого холодного оттенка. Тончайшая шелковистая структура, густые плотные концы.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео и цену ✦</a>
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
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео и цену ✦</a>
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
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео и цену ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="kids">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3931-6430-4537-a363-303233336237/IMG_0167.jpg" alt="Золотистый детский блонд" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Extra Virgin</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Золотистый детский блонд</h3>
          <div class="hp-cut-meta"><span>55 см</span> • <span>110 г</span> • <span>Нежный шелк</span></div>
          <p class="hp-cut-desc">Уникальный детский срез с мягким медовым подтоном. Не требует осветления, струящийся и невесомый в носке.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео и цену ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="slav">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild3462-6536-4133-b738-393237383563/IMG_4007.jpg" alt="Натуральная славянская волна" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Природная волна</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Натуральная волна</h3>
          <div class="hp-cut-meta"><span>65 см</span> • <span>120 г</span> • <span>Русый тон</span></div>
          <p class="hp-cut-desc">Красивый завиток, который сохраняет форму после каждого мытья головы. Волосы мягкие, без пористости.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео и цену ✦</a>
        </div>
      </div>

      <div class="hp-cut-card" data-cat="kids">
        <div class="hp-cut-img-wrap">
          <img src="https://static.tildacdn.com/tild6432-3836-4134-b430-656364333035/IMG_6521.PNG" alt="Платиновый славянский срез" class="hp-cut-img" loading="lazy">
          <span class="hp-cut-badge">Ультра-блонд</span>
        </div>
        <div class="hp-cut-body">
          <h3 class="hp-cut-title">Светлый платиновый блонд</h3>
          <div class="hp-cut-meta"><span>50 см</span> • <span>105 г</span> • <span>Гладкий шелк</span></div>
          <p class="hp-cut-desc">Редчайший светлый тон. Плотные упругие концы, сохраненный кутикулярный слой, роскошный салонный вид.</p>
          <a href="#popup:contact" class="hp-cut-btn">Запросить видео и цену ✦</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ==============================================================
       КИЛЛЕР-ФИШКА №3: VIP-ПРОГРАММА ДЛЯ МАСТЕРОВ И САЛОНОВ
       ============================================================== -->
  <section class="hp-container" id="masters">
    <div class="hp-master-box">
      <div>
        <span class="hp-master-badge">Для профессионалов бьюти-индустрии</span>
        <h2 class="hp-master-title">Партнерская программа для мастеров и салонов</h2>
        <p class="hp-master-desc">
          Получите оптовый доступ к закрытому фонду срезов студии «привет, волосы!». 
          Бесплатный комплект тест-прядей детских и славянских волос для демонстрации вашим клиенткам.
        </p>
        <div class="hp-master-perks">
          <div class="hp-master-perk">💎 Оптовые цены от 1 среза</div>
          <div class="hp-master-perk">⚡ Бронь редких хвостов на 48ч</div>
          <div class="hp-master-perk">🎁 Бесплатные тест-пряди</div>
          <div class="hp-master-perk">🚚 Отправка день в день СДЭК</div>
        </div>
        <a href="#lead-box" class="hp-btn-main">Получить оптовый прайс мастера ✦</a>
      </div>
      <div>
        <img src="https://static.tildacdn.com/tild6532-6566-4133-b335-336432383935/IMG_0159.jpg" alt="Оптовый фонд срезов волос" style="width:100%;border-radius:24px;border:1px solid var(--hp-border-highlight);box-shadow:0 15px 40px rgba(0,0,0,0.6);" loading="lazy">
      </div>
    </div>
  </section>

  <!-- ЖИВАЯ ЛЕНТА TELEGRAM КАНАЛА (@hi_pretty) -->
  <section class="hp-container hp-tg-feed-section" id="kanalTG">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Прямой эфир со склада • @hi_pretty</span>
      <h2 class="hp-sec-title">Живые поступления и видео <span>срезов</span></h2>
      <p class="hp-sec-desc">Каждый день выкладываем новые срезы прямо со стола мастера с демонстрацией на весах.</p>
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

  <!-- ОТЗЫВЫ КЛИЕНТОВ И МАСТЕРОВ -->
  <section class="hp-container" id="reviews" style="padding: 30px 0 65px;">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Репутация и доверие</span>
      <h2 class="hp-sec-title">Отзывы мастеров и <span>клиенток</span></h2>
      <p class="hp-sec-desc">Более 500 мастеров по всей России и миру выбирают срезы студии «привет, волосы!» для своих клиенток.</p>
    </div>
    <div class="hp-reviews-grid">
      <div class="hp-review-card">
        <div>
          <div class="hp-review-stars">★★★★★</div>
          <p class="hp-review-text">«Работаю с "привет, волосы!" уже третий год. Девочки отбирают срезы идеально под тон! Концы всегда плотные, вычеса минимум. Мои клиентки носят по 4–5 коррекций без потери длины!»</p>
        </div>
        <div class="hp-review-author">
          <div class="hp-review-avatar">АН</div>
          <div>
            <div class="hp-review-name">Анна Новикова</div>
            <div class="hp-review-role">Мастер по наращиванию, Москва</div>
          </div>
        </div>
      </div>

      <div class="hp-review-card">
        <div>
          <div class="hp-review-stars">★★★★★</div>
          <p class="hp-review-text">«Заказывала детский блонд 65 см. Качество — невероятный восторг! Волосы мягчайшие, легкие как паутинка, при этом кончик ровный. Доставили СДЭКом в Петербург на следующий день.»</p>
        </div>
        <div class="hp-review-author">
          <div class="hp-review-avatar">ЕС</div>
          <div>
            <div class="hp-review-name">Елена Смирнова</div>
            <div class="hp-review-role">Клиентка, Санкт-Петербург</div>
          </div>
        </div>
      </div>

      <div class="hp-review-card">
        <div>
          <div class="hp-review-stars">★★★★★</div>
          <p class="hp-review-text">«Очень ценю, что перед отправкой всегда присылают видео на весах при дневном освещении. Сразу видно текстуру и цвет 1-в-1. Для нашего салона это надежный поставщик №1!»</p>
        </div>
        <div class="hp-review-author">
          <div class="hp-review-avatar">МК</div>
          <div>
            <div class="hp-review-name">Марина Ковалева</div>
            <div class="hp-review-role">Топ-стилист, Екатеринбург</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ЦЕНТРАЛЬНЫЙ БЛОК ЗАХВАТА ЗАЯВКИ (LEAD GENERATION BLOCK) -->
  <section id="lead-box" class="hp-lead-section">
    <div class="hp-container">
      <div class="hp-lead-box">
        <span class="hp-lead-badge">Прямая связь с экспертом</span>
        <h2 class="hp-lead-title">Мечтаете о роскошных натуральных волосах?</h2>
        <p class="hp-lead-subtitle">
          Сделайте это сейчас на лучших условиях. Оставьте контакты, и ваш личный менеджер поможет с выбором идеальных волос и пришлет видео с весов.
        </p>

        <form id="hp-lead-form">
          <div class="hp-input-group">
            <input type="text" id="hp-user-name" class="hp-input" placeholder="Ваше имя" required>
          </div>

          <div class="hp-method-label">Выберите удобный способ связи:</div>
          <div class="hp-method-selector">
            <button type="button" class="hp-method-btn active max" data-m="max_messenger">
              <span>●</span> MAX (Без VPN)
            </button>
            <button type="button" class="hp-method-btn tg" data-m="telegram">
              <span>●</span> Telegram
            </button>
            <button type="button" class="hp-method-btn wa" data-m="whatsapp">
              <span>●</span> WhatsApp
            </button>
            <button type="button" class="hp-method-btn phone" data-m="phone">
              <span>●</span> Телефон
            </button>
          </div>

          <div class="hp-input-group">
            <input type="text" id="hp-user-contact" class="hp-input" placeholder="Ссылка на профиль в MAX или телефон" required>
            <div id="hp-contact-hint" class="hp-input-hint">
              <strong>Внимание! При выборе MAX:</strong> Укажите ссылку на профиль в MAX или телефон.
            </div>
          </div>

          <button type="submit" id="hp-submit-btn" class="hp-form-submit">Получить подбор и бронь среза ✦</button>

          <div class="hp-form-policy">
            Нажимая кнопку, вы соглашаетесь с <a id="hp-open-policy">Политикой конфиденциальности</a> (152-ФЗ РФ).
          </div>
          <div id="hp-form-success" style="display:none;margin-top:20px;color:#10B981;font-weight:700;font-size:15px;line-height:1.5;">
            ✓ Заявка успешно отправлена! Менеджер студии уже готовит индивидуальную видеоподборку срезов с весов.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- ВОПРОС-ОТВЕТ (FAQ) -->
  <section class="hp-container" id="faq" style="padding: 30px 0 65px;">
    <div class="hp-sec-head">
      <span class="hp-sec-badge">Часто задаваемые вопросы</span>
      <h2 class="hp-sec-title">Ответы на <span>главные вопросы</span></h2>
    </div>
    <div class="hp-faq-list">
      <div class="hp-faq-item active">
        <div class="hp-faq-question">
          <span>Как подобрать срез дистанционно без ошибки в оттенке?</span>
          <span class="hp-faq-icon">+</span>
        </div>
        <div class="hp-faq-answer">
          Вы присылаете фото или видео своих волос при дневном свете у окна. Эксперт сравнивает текстуру и подтон с наличием на складе и снимает для вас подробное видео выбранного среза рядом с эталонной палитрой и на весах.
        </div>
      </div>
      <div class="hp-faq-item">
        <div class="hp-faq-question">
          <span>В чем разница между детскими и взрослыми славянскими срезами?</span>
          <span class="hp-faq-icon">+</span>
        </div>
        <div class="hp-faq-answer">
          Детские волосы — это 100% некрашеный шелк наивысшей категории (Virgin Hair). Они тоньше, легче, никогда не подвергались воздействию красителей или термоприборов, поэтому сохраняют мягкость и зеркальный блеск дольше любых других волос.
        </div>
      </div>
      <div class="hp-faq-item">
        <div class="hp-faq-question">
          <span>Как осуществляется доставка по России и миру?</span>
          <span class="hp-faq-icon">+</span>
        </div>
        <div class="hp-faq-answer">
          По Москве доставляем курьером день в день или ждем вас в шоуруме на Арбате. По городам России отправляем экспресс-доставкой СДЭК (1–3 дня). Доступна надежная международная отправка в любую страну.
        </div>
      </div>
      <div class="hp-faq-item">
        <div class="hp-faq-question">
          <span>Предоставляете ли вы оптовые скидки мастерам?</span>
          <span class="hp-faq-icon">+</span>
        </div>
        <div class="hp-faq-answer">
          Да! Для действующих мастеров по наращиванию и салонов красоты действует специальный оптовый прайс, накопительная система скидок и возможность оперативной брони редких срезов.
        </div>
      </div>
    </div>
  </section>

  <!-- КОНТАКТЫ И ШОУРУМ В МОСКВЕ -->
  <section class="hp-container" id="contacts" style="padding: 20px 0 60px;">
    <div class="hp-contacts-grid">
      <div>
        <h2 class="hp-contact-title">Контакты и Шоурум</h2>
        <div class="hp-contact-item">
          <div class="hp-ci-icon">📍</div>
          <div>
            <div class="hp-ci-label">Адрес шоурума в Москве</div>
            <div class="hp-ci-val">г. Москва, м. Арбатская / Смоленская / Кропоткинская, Староконюшенный переулок 35с2, 1 этаж</div>
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
            <div class="hp-ci-val">Вт – Вск: с 11:00 до 20:00 (по предварительной записи). Онлайн-консультации: 24/7</div>
          </div>
        </div>
        <div class="hp-contact-item">
          <div class="hp-ci-icon">💬</div>
          <div>
            <div class="hp-ci-label">Мессенджеры для быстрой связи</div>
            <div class="hp-ci-val">
              <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" style="color:#90CAF9;margin-right:12px;">MAX (без VPN)</a>
              <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:var(--hp-purple-bright);margin-right:12px;">Telegram</a>
              <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:#69F0AE;">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hp-showroom-img-box">
        <img src="https://static.tildacdn.com/tild6532-6566-4133-b335-336432383935/IMG_0159.jpg" alt="Шоурум натуральных волос в Москве на Арбате" class="hp-showroom-img" loading="lazy">
        <div class="hp-showroom-badge">🏛 Студия и шоурум в центре Москвы</div>
      </div>
    </div>
  </section>

  <!-- ПОДВАЛ (FOOTER) -->
  <footer class="hp-container hp-footer">
    <div class="hp-footer-links">
      <span id="hp-footer-policy" class="hp-footer-link">Политика конфиденциальности</span>
      <span>•</span>
      <span id="hp-footer-consent" class="hp-footer-link">Согласие на обработку данных (152-ФЗ)</span>
    </div>
    <div style="margin-bottom:8px;">
      Прямая связь: 
      <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" style="color:var(--hp-purple-light);margin:0 6px;">MAX</a> | 
      <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" style="color:var(--hp-purple-light);margin:0 6px;">Telegram</a> | 
      <a href="https://wa.me/79933365357" target="_blank" rel="noopener" style="color:var(--hp-purple-light);margin:0 6px;">WhatsApp</a> | 
      <a href="tel:+79933365357" style="color:var(--hp-purple-light);margin:0 6px;">8 (993) 336-53-57</a>
    </div>
    <div>Магазин натуральных волос «привет, волосы!» • ИП Лесовая В. С. • ИНН: 100201988457 • ОГРНИП: 323774600090577</div>
    <div style="margin-top:4px;">г. Москва, Староконюшенный переулок 35с2 • Доставка по всей России и миру</div>
  </footer>
</div>

<!-- МОДАЛ 152-ФЗ -->
<div id="hp-legal-modal">
  <div class="hp-legal-box">
    <button type="button" class="hp-legal-close">&times;</button>
    <h3 style="margin-top:0;color:var(--hp-purple-bright);">Политика конфиденциальности и Согласие 152-ФЗ</h3>
    <p>Настоящим я даю согласие ИП Лесовая В. С. (ИНН 100201988457, ОГРНИП 323774600090577) на обработку персональных данных (имя, номер телефона, никнейм/ссылка в мессенджере MAX, Telegram или WhatsApp) в целях подбора натуральных волос, обратной связи и оформления заказа в соответствии с законодательством РФ.</p>
  </div>
</div>
`;

  var currentMethod = 'max_messenger';

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
    // Удаляем устаревшие элементы Tilda
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

    // Логика Калькулятора срезов
    var curLen = 'mid';
    var targetLen = 60;
    var density = 'normal';

    function updateCalc() {
      var baseWeight = 100;
      if (curLen === 'short') baseWeight += 35;
      else if (curLen === 'mid') baseWeight += 15;
      else baseWeight += 0;

      if (targetLen >= 70) baseWeight += 25;
      else if (targetLen >= 60) baseWeight += 10;

      if (density === 'thick') baseWeight += 30;
      else if (density === 'normal') baseWeight += 10;

      var capsMin = Math.round(baseWeight * 1.4);
      var capsMax = Math.round(baseWeight * 1.6);

      var wEl = document.getElementById('calc-weight-val');
      var cEl = document.getElementById('calc-caps-val');
      if (wEl) wEl.textContent = baseWeight + ' г';
      if (cEl) cEl.textContent = '~ ' + capsMin + '–' + capsMax + ' шт';
    }

    function setupPills(containerId, callback) {
      var container = document.getElementById(containerId);
      if (!container) return;
      var pills = container.querySelectorAll('.hp-calc-pill');
      pills.forEach(function(p) {
        p.addEventListener('click', function() {
          pills.forEach(function(x) { x.classList.remove('active'); });
          p.classList.add('active');
          callback(p);
          updateCalc();
        });
      });
    }

    setupPills('calc-current-len', function(p) { curLen = p.getAttribute('data-v'); });
    setupPills('calc-target-len', function(p) { targetLen = parseInt(p.getAttribute('data-len'), 10); });
    setupPills('calc-density', function(p) { density = p.getAttribute('data-d'); });

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

    // Селектор мессенджеров
    var methodBtns = document.querySelectorAll('.hp-method-btn');
    var contactInput = document.getElementById('hp-user-contact');
    var contactHint = document.getElementById('hp-contact-hint');

    methodBtns.forEach(function(b) {
      b.addEventListener('click', function() {
        methodBtns.forEach(function(x) { x.classList.remove('active'); });
        b.classList.add('active');
        currentMethod = b.getAttribute('data-m');
        if (currentMethod === 'max_messenger') {
          contactInput.placeholder = 'Ссылка на профиль в MAX или телефон';
          contactHint.innerHTML = '<strong>Внимание! При выборе MAX:</strong> Укажите ссылку на профиль в MAX или телефон.';
        } else if (currentMethod === 'telegram') {
          contactInput.placeholder = 'Никнейм в Telegram (@username) или телефон';
          contactHint.innerHTML = '<strong>Внимание! При выборе Telegram:</strong> Укажите ник в Telegram в формате @username или телефон.';
        } else if (currentMethod === 'whatsapp') {
          contactInput.placeholder = '+7 (999) 000-00-00 (WhatsApp)';
          contactHint.innerHTML = '<strong>При выборе WhatsApp:</strong> Укажите ваш номер в WhatsApp.';
        } else {
          contactInput.placeholder = '+7 (999) 000-00-00';
          contactHint.innerHTML = '<strong>При выборе телефона:</strong> Мы перезвоним для подтверждения параметров среза.';
        }
      });
    });

    // FAQ аккордеон
    var faqItems = document.querySelectorAll('.hp-faq-item');
    faqItems.forEach(function(item) {
      var q = item.querySelector('.hp-faq-question');
      if (q) {
        q.addEventListener('click', function() {
          var isActive = item.classList.contains('active');
          faqItems.forEach(function(x) { x.classList.remove('active'); });
          if (!isActive) item.classList.add('active');
        });
      }
    });

    // Отправка формы заявки
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

        // Синхронизация с формой Тильды
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

    // Рестайлинг нативного попапа Tilda
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

  // Кнопка «Наверх» (Слева внизу: bottom 14px, left 14px, 40x40px)
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

  // Плавающий виджет подбора среза (Справа внизу: bottom 14px, right 14px)
  if (!document.getElementById('hp-widget-lead')) {
    var leadWidget = document.createElement('div');
    leadWidget.id = 'hp-widget-lead';
    leadWidget.innerHTML = '<a href="#calculator" class="hp-widget-pulse-btn"><span>✦</span> Рассчитать срез</a>';
    document.body.appendChild(leadWidget);
  }

  // Cookie плашка
  if (!localStorage.getItem('hp_cookie_accepted') && !document.getElementById('hp-cookie-banner')) {
    var cBanner = document.createElement('div');
    cBanner.id = 'hp-cookie-banner';
    cBanner.innerHTML = `
      <div>Мы используем cookie для наилучшей работы сайта и аналитики (Яндекс.Метрика).</div>
      <div style="display:flex;gap:10px;margin-top:8px;">
        <button id="hp-cookie-accept" style="background:var(--hp-grad-primary);color:#120521;border:none;padding:6px 16px;border-radius:14px;font-weight:700;cursor:pointer;">Принять</button>
      </div>
    `;
    cBanner.style.cssText = 'position:fixed;bottom:14px;left:70px;background:#180d31;border:1px solid rgba(168,85,247,0.35);padding:14px 20px;border-radius:18px;color:#eee;font-size:12.5px;z-index:9990;box-shadow:0 10px 30px rgba(0,0,0,0.6);';
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
