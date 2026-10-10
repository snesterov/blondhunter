/**
 * BLONDHUNTER LUXURY LANDING - UNIFIED UNIVERSAL SCRIPT (RU & EN)
 * Auto-detects /eng or query parameter ?lang=en
 * Synced automatically via GitHub (snesterov/blondhunter)
 */
(function() {
  var isEn = window.location.pathname.indexOf('/eng') !== -1 || 
             (document.currentScript && document.currentScript.src.indexOf('lang=en') !== -1);

  // 1. Подключение шрифтов
  if (!document.getElementById('bh-fonts')) {
    var fontLink = document.createElement('link');
    fontLink.id = 'bh-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);
  }

  // 2. Внедрение стилей
  if (!document.getElementById('bh-styles')) {
    var style = document.createElement('style');
    style.id = 'bh-styles';
    style.textContent = `
:root {
  --bh-bg-main: #0B0B0D;
  --bh-bg-card: rgba(22, 22, 26, 0.92);
  --bh-gold: #D4AF37;
  --bh-gold-light: #F3E5AB;
  --bh-gold-gradient: linear-gradient(135deg, #ECC880 0%, #D4AF37 50%, #A67C1E 100%);
  --bh-gold-hover: linear-gradient(135deg, #F8DB9E 0%, #E6C258 50%, #B88B27 100%);
  --bh-text-light: #F5F5F7;
  --bh-text-muted: #A1A1AA;
  --bh-border: rgba(212, 175, 55, 0.25);
  --bh-border-subtle: rgba(255, 255, 255, 0.08);
  --bh-wa: #25D366;
}

html, body {
  overflow-x: hidden !important;
  width: 100% !important;
  max-width: 100% !important;
  background-color: var(--bh-bg-main) !important;
  margin: 0 !important;
  padding: 0 !important;
}

#blondhunter-wrapper {
  background-color: var(--bh-bg-main);
  color: var(--bh-text-light);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0 auto;
  padding: 0;
  width: 100% !important;
  max-width: 100vw !important;
  overflow-x: hidden !important;
  position: relative;
  box-sizing: border-box;
}

#blondhunter-wrapper * {
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
}

.bh-container {
  width: 100% !important;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box !important;
  position: relative;
  z-index: 1;
}

/* HEADER */
.bh-header {
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--bh-border-subtle);
  width: 100%;
}
.bh-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--bh-gold-light);
  text-transform: uppercase;
  text-decoration: none;
}
.bh-logo span { color: #fff; font-weight: 300; }
.bh-header-right { display: flex; align-items: center; gap: 14px; }
.bh-header-nav { display: flex; gap: 10px; align-items: center; }

/* LANG SWITCH */
.bh-lang-switch {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--bh-border);
  border-radius: 20px;
  padding: 3px 6px;
  gap: 2px;
}
.bh-lang-btn {
  font-size: 12px;
  font-weight: 600;
  color: var(--bh-text-muted);
  text-decoration: none;
  padding: 4px 9px;
  border-radius: 14px;
  transition: all 0.2s ease;
  line-height: 1;
}
.bh-lang-btn:hover { color: var(--bh-gold-light); }
.bh-lang-btn.active {
  background: var(--bh-gold-gradient);
  color: #0B0B0D !important;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
}
.bh-lang-divider { color: rgba(255, 255, 255, 0.25); font-size: 11px; }

/* BUTTONS */
.bh-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
}
.bh-btn-gold {
  background: var(--bh-gold-gradient);
  color: #0B0B0D !important;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);
}
.bh-btn-gold:hover {
  background: var(--bh-gold-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}
.bh-btn-wa {
  background: #25D366;
  color: #fff !important;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.25);
}
.bh-btn-wa:hover {
  background: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}
.bh-btn-outline {
  background: rgba(255, 255, 255, 0.04);
  color: var(--bh-text-light) !important;
  border: 1px solid var(--bh-border);
}
.bh-btn-outline:hover {
  background: rgba(212, 175, 55, 0.12);
  border-color: var(--bh-gold);
  color: var(--bh-gold-light) !important;
  transform: translateY(-2px);
}
.bh-btn-tg { background: #24A1DE; color: #fff !important; }
.bh-btn-tg:hover { background: #1e8ec5; transform: translateY(-2px); }

/* HERO */
.bh-hero { padding: 40px 0 60px; width: 100%; }
.bh-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 36px;
  align-items: center;
  width: 100%;
}
.bh-badge-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid var(--bh-border);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--bh-gold-light);
  margin-bottom: 16px;
}
.bh-hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(28px, 4.5vw, 52px);
  font-weight: 700;
  line-height: 1.12;
  margin: 0 0 16px;
  color: #fff;
  letter-spacing: -0.5px;
  word-break: break-word;
}
.bh-hero-title span {
  background: var(--bh-gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bh-hero-subtitle {
  font-size: clamp(14px, 1.8vw, 16px);
  line-height: 1.6;
  color: var(--bh-text-muted);
  margin: 0 0 24px;
}
.bh-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}
.bh-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--bh-border-subtle);
}
.bh-stat-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 700;
  color: var(--bh-gold-light);
  line-height: 1;
}
.bh-stat-label {
  font-size: 11px;
  color: var(--bh-text-muted);
  margin-top: 4px;
  line-height: 1.3;
}

/* VIDEO 9:16 */
.bh-video-side-wrap { width: 100%; max-width: 300px; margin: 0 auto; }
.bh-video-card {
  background: var(--bh-bg-card);
  border: 1px solid var(--bh-border);
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(16px);
  width: 100%;
}
.bh-video-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px 10px;
  border-bottom: 1px solid var(--bh-border-subtle);
  margin-bottom: 10px;
}
.bh-video-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--bh-gold-light);
  display: flex;
  align-items: center;
  gap: 6px;
}
.bh-video-title a {
  color: var(--bh-gold);
  text-decoration: none;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.bh-video-frame-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 177.78%;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
}
.bh-video-frame-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* CATALOG (12 LOTS) */
.bh-catalog-section { padding: 40px 0 70px; border-top: 1px solid var(--bh-border-subtle); }
.bh-section-head { text-align: center; max-width: 600px; margin: 0 auto 36px; }
.bh-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(26px, 3.5vw, 40px);
  margin: 8px 0;
  color: #fff;
}
.bh-section-desc { font-size: 14px; color: var(--bh-text-muted); }
.bh-tg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
}

/* CARD */
.bh-tg-card-native {
  background: var(--bh-bg-card);
  border: 1px solid var(--bh-border);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, border-color 0.25s;
  width: 100%;
}
.bh-tg-card-native:hover { transform: translateY(-4px); border-color: var(--bh-gold); }
.bh-tg-card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.bh-tg-author { display: flex; align-items: center; gap: 8px; }
.bh-tg-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--bh-gold);
}
.bh-tg-channel-name { font-size: 13px; font-weight: 600; color: #fff; }
.bh-tg-post-time { font-size: 11px; color: var(--bh-text-muted); }

/* BADGES */
.bh-tg-badge {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.bh-badge-sold {
  background: rgba(239, 68, 68, 0.18) !important;
  color: #EF4444 !important;
  border: 1px solid rgba(239, 68, 68, 0.4) !important;
}
.bh-badge-hot {
  background: rgba(245, 158, 11, 0.18) !important;
  color: #F59E0B !important;
  border: 1px solid rgba(245, 158, 11, 0.4) !important;
}
.bh-card-sold { border-color: rgba(239, 68, 68, 0.25) !important; }

.bh-tg-media-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  background: #1a1a20;
}
.bh-tg-media-wrap img { width: 100%; height: 100%; object-fit: cover; }
.bh-tg-media-tag {
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: rgba(11, 11, 13, 0.85);
  backdrop-filter: blur(6px);
  border: 1px solid var(--bh-border);
  color: var(--bh-gold-light);
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 5px;
  font-weight: 600;
  z-index: 3;
}

.bh-sold-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-10deg);
  background: rgba(220, 38, 38, 0.92);
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 2px solid #fff;
  box-shadow: 0 4px 15px rgba(0,0,0,0.6);
  pointer-events: none;
  z-index: 2;
  text-transform: uppercase;
}

.bh-tg-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  color: #fff;
  margin: 0 0 6px;
}
.bh-tg-card-desc {
  font-size: 12px;
  line-height: 1.5;
  color: var(--bh-text-muted);
  margin-bottom: 14px;
  flex-grow: 1;
}

/* CARD BUTTONS */
.bh-card-actions { display: flex; flex-direction: column; gap: 8px; width: 100%; }
.bh-card-btn-tg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(36, 161, 222, 0.12);
  border: 1px solid rgba(36, 161, 222, 0.35);
  color: #55b7ff !important;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  width: 100%;
}
.bh-card-btn-act {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  width: 100%;
  transition: all 0.2s ease;
}
.bh-btn-max-act {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid var(--bh-border);
  color: var(--bh-gold-light) !important;
}
.bh-btn-wa-act {
  background: rgba(37, 211, 102, 0.12);
  border: 1px solid rgba(37, 211, 102, 0.4);
  color: #25D366 !important;
}
.bh-btn-wa-act:hover { background: #25D366; color: #fff !important; }
.bh-btn-request-analog {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0.1)) !important;
  border: 1px solid var(--bh-gold) !important;
  color: var(--bh-gold-light) !important;
}

/* MOBILE STICKY */
.bh-mobile-sticky {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(11, 11, 13, 0.96);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--bh-border);
  padding: 10px 14px;
  z-index: 999;
  justify-content: space-between;
  gap: 10px;
}

@media (max-width: 820px) {
  .bh-header-nav { display: none; }
  .bh-btn-desktop-only { display: none !important; }
  .bh-hero-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px 0 32px;
    text-align: center;
  }
  .bh-hero-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bh-hero-btns { display: flex; flex-direction: column; width: 100%; gap: 10px; }
  .bh-hero-btns .bh-btn { width: 100%; padding: 14px 20px; font-size: 14px; }
  .bh-stats-grid { width: 100%; gap: 8px; }
  .bh-video-side-wrap { max-width: 280px; width: 100%; }
  .bh-mobile-sticky { display: flex !important; }
  #blondhunter-wrapper { padding-bottom: 70px; }
}
`;
    document.head.appendChild(style);
  }

  // 3. Формирование HTML разметки
  var ruHtml = `
<div id="blondhunter-wrapper">
  <header class="bh-container bh-header">
    <a href="https://blondhunter.com" class="bh-logo">BLOND<span>HUNTER</span></a>
    <div class="bh-header-right">
      <div class="bh-lang-switch">
        <span class="bh-lang-btn active">RU</span>
        <span class="bh-lang-divider">/</span>
        <a href="https://blondhunter.com/eng" class="bh-lang-btn" title="English version">EN</a>
      </div>
      <div class="bh-header-nav">
        <a href="https://t.me/blondhunter" target="_blank" rel="noopener" class="bh-btn bh-btn-outline" style="padding: 8px 16px; font-size: 12px;">Канал в Telegram</a>
        <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-gold" style="padding: 8px 16px; font-size: 12px;">Написать в MAX</a>
      </div>
    </div>
  </header>

  <section class="bh-container bh-hero">
    <div class="bh-hero-grid">
      <div class="bh-hero-content">
        <div class="bh-badge-top"><span>●</span> 100% Натуральный срез</div>
        <h1 class="bh-hero-title">Детский славянский блонд <span>высшей категории</span></h1>
        <p class="bh-hero-subtitle">Редчайшие тонкие детские волосы от Ольги (Blondhunter). Без окрашиваний, без силиконов и перевертышей. Поставки напрямую из студии в Москве и отправка по всему миру.</p>
        <div class="bh-hero-btns">
          <a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-btn bh-btn-gold">Личка в Telegram (запросить прайс) ↗</a>
          <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-outline">Написать в MAX (без VPN в РФ)</a>
          <a href="https://t.me/blondhunter" target="_blank" rel="noopener" class="bh-btn bh-btn-tg bh-btn-desktop-only">Канал в Telegram</a>
        </div>
        <div class="bh-stats-grid">
          <div><div class="bh-stat-num">100%</div><div class="bh-stat-label">Детский волос</div></div>
          <div><div class="bh-stat-num">50–75 см</div><div class="bh-stat-label">Длина срезов</div></div>
          <div><div class="bh-stat-num">0%</div><div class="bh-stat-label">Химии и силикона</div></div>
        </div>
      </div>
      <div class="bh-video-side-wrap">
        <div class="bh-video-card">
          <div class="bh-video-header">
            <div class="bh-video-title"><span>Охота</span><a href="https://t.me/blondhunter" target="_blank" rel="noopener">(канал в Telegram →)</a></div>
            <span style="font-size:11px;color:var(--bh-gold);font-weight:600;">● Видео из канала</span>
          </div>
          <div class="bh-video-frame-wrap">
            <iframe src="https://kinescope.io/embed/2yLz74sfURhUvc2rUP9Zzn" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bh-container bh-catalog-section">
    <div class="bh-section-head">
      <span class="bh-tg-badge" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);">● ПРЯМОЙ ЭФИР ИЗ КАНАЛА</span>
      <h2 class="bh-section-title">Свежие партии срезов</h2>
      <p class="bh-section-desc">12 последних лотов из Telegram-канала Ольги.</p>
    </div>
    <div class="bh-tg-grid" id="bh-feed-container"></div>
  </section>

  <div class="bh-mobile-sticky">
    <a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-btn bh-btn-gold" style="flex:1; padding: 12px 10px; font-size: 13px;">Личка в Telegram</a>
    <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-outline" style="flex:1; padding: 12px 10px; font-size: 13px; color: var(--bh-gold-light) !important; border-color: var(--bh-gold);">В MAX (без VPN)</a>
  </div>
</div>`;

  var enHtml = `
<div id="blondhunter-wrapper">
  <header class="bh-container bh-header">
    <a href="https://blondhunter.com/eng" class="bh-logo">BLOND<span>HUNTER</span></a>
    <div class="bh-header-right">
      <div class="bh-lang-switch">
        <a href="https://blondhunter.com/" class="bh-lang-btn" title="Русская версия">RU</a>
        <span class="bh-lang-divider">/</span>
        <span class="bh-lang-btn active">EN</span>
      </div>
      <div class="bh-header-nav">
        <a href="https://t.me/blondhunter" target="_blank" rel="noopener" class="bh-btn bh-btn-outline" style="padding: 8px 16px; font-size: 12px;">Telegram Channel</a>
        <a href="https://wa.me/79266721978?text=Hello%20Olga!%20I%20would%20like%20to%20inquire%20about%20virgin%20Slavic%20blonde%20hair." target="_blank" rel="noopener" class="bh-btn bh-btn-wa" style="padding: 8px 16px; font-size: 12px;">Chat on WhatsApp</a>
      </div>
    </div>
  </header>

  <section class="bh-container bh-hero">
    <div class="bh-hero-grid">
      <div class="bh-hero-content">
        <div class="bh-badge-top"><span>●</span> 100% Raw Virgin Slavic Hair</div>
        <h1 class="bh-hero-title">Exclusive Child Slavic Blonde <span>of the Highest Grade</span></h1>
        <p class="bh-hero-subtitle">Rarest virgin single-donor ponytails directly from Olga (Blondhunter). Untreated, zero silicones, ethically sourced. Available directly from Moscow studio with fast worldwide express delivery.</p>
        <div class="bh-hero-btns">
          <a href="https://wa.me/79266721978?text=Hello%20Olga!%20I%20would%20like%20to%20request%20available%20cuts%20and%20prices." target="_blank" rel="noopener" class="bh-btn bh-btn-wa">Inquire via WhatsApp ↗</a>
          <a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-btn bh-btn-gold">DM Olga in Telegram ↗</a>
          <a href="https://t.me/blondhunter" target="_blank" rel="noopener" class="bh-btn bh-btn-outline bh-btn-desktop-only">Telegram Channel</a>
        </div>
        <div class="bh-stats-grid">
          <div><div class="bh-stat-num">100%</div><div class="bh-stat-label">Child Virgin Hair</div></div>
          <div><div class="bh-stat-num">50–75 cm</div><div class="bh-stat-label">Ponytail Length</div></div>
          <div><div class="bh-stat-num">0%</div><div class="bh-stat-label">Silicone & Chemical</div></div>
        </div>
      </div>
      <div class="bh-video-side-wrap">
        <div class="bh-video-card">
          <div class="bh-video-header">
            <div class="bh-video-title"><span>Channel Live</span><a href="https://t.me/blondhunter" target="_blank" rel="noopener">(Telegram →)</a></div>
            <span style="font-size:11px;color:var(--bh-gold);font-weight:600;">● Video Feed</span>
          </div>
          <div class="bh-video-frame-wrap">
            <iframe src="https://kinescope.io/embed/2yLz74sfURhUvc2rUP9Zzn" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bh-container bh-catalog-section">
    <div class="bh-section-head">
      <span class="bh-tg-badge" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);">● LIVE FROM TELEGRAM FEED</span>
      <h2 class="bh-section-title">Latest Studio Ponytails</h2>
      <p class="bh-section-desc">12 real-time inventory lots from Olga's official channel.</p>
    </div>
    <div class="bh-tg-grid" id="bh-feed-container"></div>
  </section>

  <div class="bh-mobile-sticky">
    <a href="https://wa.me/79266721978?text=Hello%20Olga!%20I%20would%20like%20to%20order%20virgin%20Slavic%20hair." target="_blank" rel="noopener" class="bh-btn bh-btn-wa" style="flex:1; padding: 12px 10px; font-size: 13px;">WhatsApp Direct ↗</a>
    <a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-btn bh-btn-gold" style="flex:1; padding: 12px 10px; font-size: 13px;">Telegram DM ↗</a>
  </div>
</div>`;

  // 4. Монтирование
  function mount() {
    var mountTarget = document.getElementById('blondhunter-root') || 
                      (document.currentScript && (document.currentScript.closest('.t123') || document.currentScript.parentNode)) || 
                      document.querySelector('.t123 .t-container_100') ||
                      document.body;

    var temp = document.createElement('div');
    temp.innerHTML = isEn ? enHtml : ruHtml;
    var node = temp.firstElementChild;

    var existing = document.getElementById('blondhunter-wrapper');
    if (existing) existing.remove();

    if (mountTarget.id === 'blondhunter-root') {
      mountTarget.innerHTML = '';
      mountTarget.appendChild(node);
    } else {
      mountTarget.prepend(node);
    }

    // 5. Загрузка 12 лотов
    var jsonFile = isEn ? 'posts_en.json' : 'posts.json';
    var feedUrl = 'https://raw.githubusercontent.com/snesterov/blondhunter/main/' + jsonFile + '?v=' + Date.now();

    fetch(feedUrl)
      .then(function(res) { return res.json(); })
      .then(function(posts) {
        if (!Array.isArray(posts) || posts.length === 0) return;
        var grid = document.getElementById('bh-feed-container');
        if (!grid) return;

        var out = '';
        posts.forEach(function(p, i) {
          var isSold = p.is_sold || (p.badge_type === 'sold');
          var badgeClass = isSold ? 'bh-badge-sold' : (p.badge_type === 'hot' ? 'bh-badge-hot' : '');
          var cardClass = 'bh-tg-card-native' + (isSold ? ' bh-card-sold' : '');
          var pTime = (isEn ? 'Lot #' : 'Пост #') + p.id + (i === 0 ? (isEn ? ' (Latest)' : ' (Свежий)') : '');
          var watermark = isSold ? ('<div class="bh-sold-watermark">' + (isEn ? 'SOLD OUT' : 'SOLD / ПРОДАН') + '</div>') : '';
          
          var actBtn = '';
          if (isEn) {
            var btnTextEn = isSold ? 'Request Similar Cut via WhatsApp ↗' : 'Order via WhatsApp ↗';
            var btnClassEn = isSold ? 'bh-card-btn-act bh-btn-request-analog' : 'bh-card-btn-act bh-btn-wa-act';
            actBtn = '<a href="' + p.wa_url + '" target="_blank" rel="noopener" class="' + btnClassEn + '">' + btnTextEn + '</a>';
          } else {
            var btnTextRu = isSold ? 'Запросить аналог в MAX (без VPN)' : 'Забронировать в MAX (без VPN)';
            var btnClassRu = isSold ? 'bh-card-btn-act bh-btn-request-analog' : 'bh-card-btn-act bh-btn-max-act';
            actBtn = '<a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="' + btnClassRu + '">' + btnTextRu + '</a>';
          }

          out += '<div class="' + cardClass + '">' +
            '<div class="bh-tg-card-head">' +
              '<div class="bh-tg-author">' +
                '<img src="https://static.tildacdn.com/tild3766-6535-4366-b139-386435646564/photo_2024-09-19_17-.jpg" alt="Blondhunter" class="bh-tg-avatar">' +
                '<div><div class="bh-tg-channel-name">Blondhunter</div><div class="bh-tg-post-time">' + pTime + '</div></div>' +
              '</div>' +
              '<span class="bh-tg-badge ' + badgeClass + '">' + (p.badge || (isEn ? '● Fresh Arrival' : '● Свежий лот')) + '</span>' +
            '</div>' +
            '<div class="bh-tg-media-wrap">' +
              '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
              watermark +
              '<div class="bh-tg-media-tag">' + (p.tag || (isEn ? 'Virgin Slavic Blonde' : 'Детский блонд')) + '</div>' +
            '</div>' +
            '<h4 class="bh-tg-card-title">' + (p.title || (isEn ? 'Virgin Hair Cut' : 'Эксклюзивный срез')) + '</h4>' +
            '<p class="bh-tg-card-desc">' + (p.desc || '') + '</p>' +
            '<div class="bh-card-actions">' +
              '<a href="' + p.url + '" target="_blank" rel="noopener" class="bh-card-btn-tg">' + (isEn ? 'View in Telegram ↗' : 'Смотреть лот в Telegram ↗') + '</a>' +
              actBtn +
            '</div>' +
          '</div>';
        });
        grid.innerHTML = out;
      })
      .catch(function(e) {
        console.log('GitHub sync ready');
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
