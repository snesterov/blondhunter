/**
 * BLONDHUNTER LUXURY LANDING - UNIFIED UNIVERSAL SCRIPT (RU & EN)
 * Auto-detects /eng or query parameter ?lang=en
 * Synced automatically via GitHub (snesterov/blondhunter)
 * Features: 12 Live Lots, Kinescope 9:16 Video, Luxury Footer, HUD Cookie Banner, Policy Modal
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

/* АВТОМАТИЧЕСКИ СКРЫВАЕМ СТАРЫЙ ПОДВАЛ ТИЛЬДЫ */
#rec812427328, [data-record-type="345"], .t345, footer#footer_812427328 {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  min-height: 0 !important;
  overflow: hidden !important;
}

/* FOOTER (LUXURY STYLE) */
.bh-footer {
  background: #08080A;
  border-top: 1px solid var(--bh-border);
  padding: 60px 0 35px;
  margin-top: 40px;
  width: 100%;
}
.bh-footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}
.bh-footer-brand { display: flex; flex-direction: column; gap: 14px; }
.bh-footer-tagline {
  font-size: 13px;
  color: var(--bh-text-muted);
  line-height: 1.6;
  max-width: 380px;
}
.bh-footer-col-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--bh-gold-light);
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.bh-footer-links-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.bh-footer-link {
  color: #A1A1AA;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s ease;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
}
.bh-footer-link:hover { color: var(--bh-gold-light); transform: translateX(3px); }
.bh-footer-bottom {
  padding-top: 25px;
  border-top: 1px solid var(--bh-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 12px;
  color: #71717A;
}
.bh-footer-bottom-links {
  display: flex;
  gap: 18px;
  align-items: center;
}
.bh-footer-bottom-link {
  color: #71717A;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
  transition: color 0.2s;
}
.bh-footer-bottom-link:hover { color: var(--bh-gold-light); }

/* SCROLL TO TOP BUTTON */
.bh-scroll-top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(18, 18, 22, 0.9);
  border: 1px solid var(--bh-border);
  color: var(--bh-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: all 0.3s ease;
  z-index: 998;
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
}
.bh-scroll-top-btn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.bh-scroll-top-btn:hover {
  background: var(--bh-gold-gradient);
  color: #0B0B0D;
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
  transform: translateY(-3px);
}

/* COOKIE BANNER (YANDEX / HUD LUXURY STYLE) */
.bh-cookie-banner {
  position: fixed;
  bottom: 24px;
  left: 24px;
  max-width: 420px;
  width: calc(100% - 48px);
  background: rgba(18, 18, 22, 0.96);
  backdrop-filter: blur(16px);
  border: 1.5px solid var(--bh-border);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85), 0 0 25px rgba(212, 175, 55, 0.15);
  border-radius: 18px;
  padding: 22px;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  gap: 14px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease;
  box-sizing: border-box;
  color: var(--bh-text-light);
}
.bh-cookie-banner.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.bh-cookie-close-corner {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #A1A1AA;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  transition: all 0.2s;
}
.bh-cookie-close-corner:hover {
  background: rgba(212, 175, 55, 0.2);
  color: var(--bh-gold-light);
  border-color: var(--bh-gold);
}
.bh-cookie-view { display: flex; flex-direction: column; gap: 12px; }
.bh-cookie-view.hidden { display: none !important; }
.bh-cookie-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--bh-gold-light);
  margin-right: 28px;
  line-height: 1.2;
}
.bh-cookie-text {
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--bh-text-muted);
}
.bh-cookie-text a {
  color: var(--bh-gold);
  text-decoration: underline;
  cursor: pointer;
}
.bh-cookie-btn-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}
.bh-cookie-btn-primary {
  background: var(--bh-gold-gradient);
  color: #0B0B0D;
  border: none;
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}
.bh-cookie-btn-primary:hover {
  background: var(--bh-gold-hover);
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.35);
  transform: translateY(-1px);
}
.bh-cookie-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--bh-text-light);
  border: 1px solid var(--bh-border);
  padding: 9px 18px;
  border-radius: 25px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}
.bh-cookie-btn-secondary:hover {
  background: rgba(212, 175, 55, 0.1);
  border-color: var(--bh-gold);
  color: var(--bh-gold-light);
}
.bh-cookie-btn-dark {
  background: transparent;
  color: #A1A1AA;
  border: none;
  font-size: 11.5px;
  cursor: pointer;
  text-align: center;
  padding: 4px;
  transition: color 0.2s;
  text-decoration: underline;
}
.bh-cookie-btn-dark:hover { color: var(--bh-gold-light); }

/* COOKIE SETTINGS VIEW */
.bh-cookie-top-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.bh-cookie-back-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--bh-border);
  color: var(--bh-gold);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.bh-cookie-back-btn:hover { background: rgba(212, 175, 55, 0.2); }
.bh-cookie-toggles-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 6px 0;
}
.bh-cookie-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--bh-border-subtle);
  padding: 10px 14px;
  border-radius: 12px;
}
.bh-cookie-item-label {
  font-size: 12px;
  color: var(--bh-text-light);
  font-weight: 500;
}
.bh-switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}
.bh-switch input { opacity: 0; width: 0; height: 0; }
.bh-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(255, 255, 255, 0.15);
  transition: .3s;
  border-radius: 20px;
}
.bh-slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  transition: .3s;
  border-radius: 50%;
}
.bh-switch input:checked + .bh-slider { background: var(--bh-gold-gradient); }
.bh-switch input:checked + .bh-slider:before { transform: translateX(16px); background-color: #0B0B0D; }

/* POLICY MODAL */
.bh-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.bh-modal-overlay.visible {
  opacity: 1;
  visibility: visible;
}
.bh-modal-box {
  background: #111115;
  border: 1.5px solid var(--bh-border);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  width: 100%;
  max-width: 680px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  color: var(--bh-text-light);
}
.bh-modal-header {
  padding: 22px 26px;
  border-bottom: 1px solid var(--bh-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bh-modal-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  color: var(--bh-gold-light);
  font-weight: 700;
  margin: 0;
}
.bh-modal-close-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #A1A1AA;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s;
}
.bh-modal-close-btn:hover {
  background: rgba(212, 175, 55, 0.2);
  color: var(--bh-gold-light);
  border-color: var(--bh-gold);
}
.bh-modal-body {
  padding: 26px;
  overflow-y: auto;
  font-size: 13.5px;
  line-height: 1.7;
  color: #D1D1D6;
}
.bh-modal-body h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--bh-gold-light);
  margin: 18px 0 8px;
}
.bh-modal-body p { margin: 0 0 12px; }

/* RESPONSIVE */
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
  
  .bh-footer-grid { grid-template-columns: 1fr; gap: 30px; }
  .bh-footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
  .bh-footer-bottom-links { flex-direction: column; align-items: flex-start; gap: 8px; }
  
  .bh-cookie-banner {
    bottom: 74px !important;
    left: 12px !important;
    width: calc(100% - 24px) !important;
    padding: 16px;
  }
  .bh-scroll-top-btn {
    bottom: 75px !important;
    right: 14px !important;
    width: 38px;
    height: 38px;
  }
  .bh-mobile-sticky { display: flex !important; }
  #blondhunter-wrapper { padding-bottom: 70px; }
}
`;
    document.head.appendChild(style);
  }

  // 3. Формирование HTML разметки
  var ruHtml = `
<div id="blondhunter-wrapper">
  <!-- HEADER -->
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

  <!-- HERO SECTION -->
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

  <!-- CATALOG (12 LOTS) -->
  <section class="bh-container bh-catalog-section">
    <div class="bh-section-head">
      <span class="bh-tg-badge" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);">● ПРЯМОЙ ЭФИР ИЗ КАНАЛА</span>
      <h2 class="bh-section-title">Свежие партии срезов</h2>
      <p class="bh-section-desc">12 последних лотов из Telegram-канала Ольги.</p>
    </div>
    <div class="bh-tg-grid" id="bh-feed-container"></div>
  </section>

  <!-- LUXURY FOOTER (RU) -->
  <footer class="bh-footer">
    <div class="bh-container">
      <div class="bh-footer-grid">
        <div class="bh-footer-brand">
          <a href="https://blondhunter.com" class="bh-logo">BLOND<span>HUNTER</span></a>
          <p class="bh-footer-tagline">
            Эксклюзивный детский славянский блонд высшей категории. Единственные доноры, сохраненная кутикула, ручной отбор без силиконов и химии.
          </p>
          <div style="font-size:12px;color:#A1A1AA;">
            Студия в Москве • Экспресс-доставка по всей России и миру
          </div>
        </div>
        <div>
          <div class="bh-footer-col-title">Контакты и заказы</div>
          <ul class="bh-footer-links-list">
            <li><a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-footer-link">Личка Ольги: @OlgaKryukova777 ↗</a></li>
            <li><a href="https://t.me/blondhunter" target="_blank" rel="noopener" class="bh-footer-link">Telegram-канал: @blondhunter ↗</a></li>
            <li><a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-footer-link">Мессенджер MAX (без VPN) ↗</a></li>
            <li><a href="https://wa.me/79266721978" target="_blank" rel="noopener" class="bh-footer-link">WhatsApp: +7 (926) 672-19-78 ↗</a></li>
          </ul>
        </div>
        <div>
          <div class="bh-footer-col-title">Информация</div>
          <ul class="bh-footer-links-list">
            <li><button type="button" class="bh-footer-link" onclick="window.openBhPolicyModal()">Политика конфиденциальности</button></li>
            <li><button type="button" class="bh-footer-link" onclick="window.openBhCookieSettings()">Настройки файлов Cookie</button></li>
            <li><a href="https://blondhunter.com/eng" class="bh-footer-link">English Version (Worldwide) →</a></li>
          </ul>
        </div>
      </div>
      <div class="bh-footer-bottom">
        <div>© 2024–2026 BLONDHUNTER • Все права защищены • blondhunter.com</div>
        <div class="bh-footer-bottom-links">
          <button type="button" class="bh-footer-bottom-link" onclick="window.openBhPolicyModal()">Конфиденциальность</button>
          <span>•</span>
          <button type="button" class="bh-footer-bottom-link" onclick="window.openBhCookieSettings()">Управление Cookie</button>
        </div>
      </div>
    </div>
  </footer>

  <!-- MOBILE STICKY BAR -->
  <div class="bh-mobile-sticky">
    <a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-btn bh-btn-gold" style="flex:1; padding: 12px 10px; font-size: 13px;">Личка в Telegram</a>
    <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-outline" style="flex:1; padding: 12px 10px; font-size: 13px; color: var(--bh-gold-light) !important; border-color: var(--bh-gold);">В MAX (без VPN)</a>
  </div>
</div>`;

  var enHtml = `
<div id="blondhunter-wrapper">
  <!-- HEADER -->
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

  <!-- HERO SECTION -->
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

  <!-- CATALOG (12 LOTS) -->
  <section class="bh-container bh-catalog-section">
    <div class="bh-section-head">
      <span class="bh-tg-badge" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.3);">● LIVE FROM TELEGRAM FEED</span>
      <h2 class="bh-section-title">Latest Studio Ponytails</h2>
      <p class="bh-section-desc">12 real-time inventory lots from Olga's official channel.</p>
    </div>
    <div class="bh-tg-grid" id="bh-feed-container"></div>
  </section>

  <!-- LUXURY FOOTER (EN) -->
  <footer class="bh-footer">
    <div class="bh-container">
      <div class="bh-footer-grid">
        <div class="bh-footer-brand">
          <a href="https://blondhunter.com/eng" class="bh-logo">BLOND<span>HUNTER</span></a>
          <p class="bh-footer-tagline">
            Exclusive virgin child Slavic blonde of the highest grade. Single-donor ethical ponytails, intact cuticle, hand-selected without chemicals or silicones.
          </p>
          <div style="font-size:12px;color:#A1A1AA;">
            Studio in Moscow • Worldwide Express Door-to-Door Delivery
          </div>
        </div>
        <div>
          <div class="bh-footer-col-title">Inquiries & Orders</div>
          <ul class="bh-footer-links-list">
            <li><a href="https://wa.me/79266721978" target="_blank" rel="noopener" class="bh-footer-link">WhatsApp Direct: +7 (926) 672-19-78 ↗</a></li>
            <li><a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-footer-link">Telegram DM: @OlgaKryukova777 ↗</a></li>
            <li><a href="https://t.me/blondhunter" target="_blank" rel="noopener" class="bh-footer-link">Official Channel: @blondhunter ↗</a></li>
          </ul>
        </div>
        <div>
          <div class="bh-footer-col-title">Legal & Information</div>
          <ul class="bh-footer-links-list">
            <li><button type="button" class="bh-footer-link" onclick="window.openBhPolicyModal()">Privacy Policy</button></li>
            <li><button type="button" class="bh-footer-link" onclick="window.openBhCookieSettings()">Cookie Preferences</button></li>
            <li><a href="https://blondhunter.com/" class="bh-footer-link">Russian Version (RU) →</a></li>
          </ul>
        </div>
      </div>
      <div class="bh-footer-bottom">
        <div>© 2024–2026 BLONDHUNTER • All rights reserved • blondhunter.com/eng</div>
        <div class="bh-footer-bottom-links">
          <button type="button" class="bh-footer-bottom-link" onclick="window.openBhPolicyModal()">Privacy</button>
          <span>•</span>
          <button type="button" class="bh-footer-bottom-link" onclick="window.openBhCookieSettings()">Manage Cookies</button>
        </div>
      </div>
    </div>
  </footer>

  <!-- MOBILE STICKY BAR -->
  <div class="bh-mobile-sticky">
    <a href="https://wa.me/79266721978?text=Hello%20Olga!%20I%20would%20like%20to%20order%20virgin%20Slavic%20hair." target="_blank" rel="noopener" class="bh-btn bh-btn-wa" style="flex:1; padding: 12px 10px; font-size: 13px;">WhatsApp Direct ↗</a>
    <a href="https://t.me/OlgaKryukova777" target="_blank" rel="noopener" class="bh-btn bh-btn-gold" style="flex:1; padding: 12px 10px; font-size: 13px;">Telegram DM ↗</a>
  </div>
</div>`;

  // 4. Виджеты (Cookie, Modal, ScrollTop)
  var widgetsHtml = `
  <!-- КНОПКА «НАВЕРХ» -->
  <button id="bh-scroll-top-btn" class="bh-scroll-top-btn" onclick="window.bhScrollToTop()" aria-label="Наверх" title="Наверх">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>

  <!-- COOKIE BANNER (HUD LUXURY STYLE) -->
  <div id="bh-cookie-banner" class="bh-cookie-banner">
    <button type="button" class="bh-cookie-close-corner" onclick="window.closeBhCookieBanner()" title="Закрыть" aria-label="Закрыть">✕</button>
    
    <!-- Главный экран -->
    <div id="bh-cookie-view-main" class="bh-cookie-view">
      <div class="bh-cookie-title">` + (isEn ? 'BLONDHUNTER uses cookies' : 'BLONDHUNTER использует файлы cookie') + `</div>
      <div class="bh-cookie-text">
        ` + (isEn ? 
          'Cookies are essential for website security, saving your preferences, and connecting orders seamlessly. Learn more in our <a onclick="window.openBhPolicyModal()">Privacy Policy</a>.' : 
          'Они необходимы для правильной работы сайта, сохранения языка и быстрого оформления заказов на срезы волос. Подробнее в <a onclick="window.openBhPolicyModal()">Политике конфиденциальности</a>.') + `
      </div>
      <div class="bh-cookie-btn-col">
        <button type="button" class="bh-cookie-btn-primary" onclick="window.acceptAllBhCookies()">` + (isEn ? 'Accept All' : 'Разрешить все') + `</button>
        <button type="button" class="bh-cookie-btn-secondary" onclick="window.acceptEssentialBhCookies()">` + (isEn ? 'Essential Only' : 'Только обязательные') + `</button>
        <button type="button" class="bh-cookie-btn-dark" onclick="window.showBhCookieSettings()">` + (isEn ? 'Preferences' : 'Настроить') + `</button>
      </div>
    </div>

    <!-- Экран настроек -->
    <div id="bh-cookie-view-settings" class="bh-cookie-view hidden">
      <div class="bh-cookie-top-nav">
        <button type="button" class="bh-cookie-back-btn" onclick="window.hideBhCookieSettings()" title="Назад" aria-label="Назад">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div class="bh-cookie-title">` + (isEn ? 'Cookie Preferences' : 'Настройки Cookie') + `</div>
      </div>
      <div class="bh-cookie-text">
        ` + (isEn ? 
          'Technical cookies are required for site operation. Analytical cookies help optimize your browsing experience.' : 
          'Технические файлы cookie обеспечивают базовое функционирование витрины. Аналитические помогают ускорить отклик.') + `
      </div>
      <div class="bh-cookie-toggles-list">
        <div class="bh-cookie-item">
          <div class="bh-cookie-item-label">` + (isEn ? '● Technical (Always Active)' : '● Технические (Обязательные)') + `</div>
          <label class="bh-switch">
            <input type="checkbox" checked disabled>
            <span class="bh-slider"></span>
          </label>
        </div>
        <div class="bh-cookie-item">
          <div class="bh-cookie-item-label">` + (isEn ? '● Analytical & Marketing' : '● Аналитика и предпочтения') + `</div>
          <label class="bh-switch">
            <input type="checkbox" id="bh-cookie-toggle-analytics" checked>
            <span class="bh-slider"></span>
          </label>
        </div>
      </div>
      <button type="button" class="bh-cookie-btn-primary" onclick="window.saveBhCookiePreferences()">` + (isEn ? 'Save Preferences' : 'Сохранить выбор') + `</button>
    </div>
  </div>

  <!-- PRIVACY POLICY MODAL -->
  <div id="bh-policy-modal" class="bh-modal-overlay" onclick="window.closeBhPolicyModalOnBackdrop(event)">
    <div class="bh-modal-box">
      <div class="bh-modal-header">
        <h3 class="bh-modal-title">` + (isEn ? 'Privacy & Cookie Policy' : 'Политика конфиденциальности') + `</h3>
        <button type="button" class="bh-modal-close-btn" onclick="window.closeBhPolicyModal()">✕</button>
      </div>
      <div class="bh-modal-body">
        <h4>` + (isEn ? '1. General Provisions' : '1. Общие положения') + `</h4>
        <p>` + (isEn ? 
          'This policy describes how Blondhunter (blondhunter.com) handles data. We process only minimal technical data necessary for customer communication and order placement.' : 
          'Настоящая политика регулирует порядок обработки информации на сайте blondhunter.com. Мы бережно относимся к безопасности ваших данных и обрабатываем только минимально необходимый объем информации для связи и оформления бронирования срезов волос.') + `</p>

        <h4>` + (isEn ? '2. Direct Messaging & Orders' : '2. Оформление заказов и связь') + `</h4>
        <p>` + (isEn ? 
          'All communication regarding ponytail lots is performed directly through official channels: WhatsApp (+7 926 672-19-78), Telegram (@OlgaKryukova777), and MAX. We never sell or transfer personal data to third parties.' : 
          'Все заказы и консультации осуществляются напрямую через защищенные каналы связи: Telegram (@OlgaKryukova777), WhatsApp (+7 926 672-19-78) и мессенджер MAX. Ваши контакты не передаются сторонним организациям.') + `</p>

        <h4>` + (isEn ? '3. Cookie Usage' : '3. Использование файлов Cookie') + `</h4>
        <p>` + (isEn ? 
          'We use functional cookies to store interface preferences (such as selected language) and ensure high delivery performance via GitHub CDN. You can customize cookie settings at any time.' : 
          'Сайт использует файлы cookie для корректного отображения витрины, сохранения выбранного языка интерфейса и ускоренной загрузки актуального каталога через сеть доставки контента.') + `</p>
      </div>
    </div>
  </div>`;

  // 5. Монтирование
  function mount() {
    var mountTarget = document.getElementById('blondhunter-root') || 
                      (document.currentScript && (document.currentScript.closest('.t123') || document.currentScript.parentNode)) || 
                      document.querySelector('.t123 .t-container_100') ||
                      document.body;

    var temp = document.createElement('div');
    temp.innerHTML = isEn ? enHtml : ruHtml;
    var node = temp.firstElementChild;

    // Скрываем старый подвал Тильды (T345)
    var oldFooter = document.getElementById('rec812427328') || document.querySelector('[data-record-type="345"]') || document.querySelector('.t345');
    if (oldFooter) oldFooter.style.display = 'none';

    var existing = document.getElementById('blondhunter-wrapper');
    if (existing) existing.remove();

    if (mountTarget.id === 'blondhunter-root') {
      mountTarget.innerHTML = '';
      mountTarget.appendChild(node);
    } else {
      mountTarget.prepend(node);
    }

    // Добавление виджетов в body (один раз)
    if (!document.getElementById('bh-cookie-banner')) {
      var wWrap = document.createElement('div');
      wWrap.id = 'bh-global-widgets';
      wWrap.innerHTML = widgetsHtml;
      document.body.appendChild(wWrap);
    }

    // 6. Инициализация Cookie баннера и скролла
    initCookieBanner();
    initScrollTop();

    // 7. Загрузка 12 лотов
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

  // Функции Cookie баннера
  function initCookieBanner() {
    var consent = localStorage.getItem('bh_cookie_consent');
    if (!consent) {
      setTimeout(function() {
        var banner = document.getElementById('bh-cookie-banner');
        if (banner) banner.classList.add('visible');
      }, 1000);
    }
  }

  window.closeBhCookieBanner = function() {
    var banner = document.getElementById('bh-cookie-banner');
    if (banner) banner.classList.remove('visible');
    localStorage.setItem('bh_cookie_consent', 'dismissed');
  };

  window.acceptAllBhCookies = function() {
    var banner = document.getElementById('bh-cookie-banner');
    if (banner) banner.classList.remove('visible');
    localStorage.setItem('bh_cookie_consent', 'all');
  };

  window.acceptEssentialBhCookies = function() {
    var banner = document.getElementById('bh-cookie-banner');
    if (banner) banner.classList.remove('visible');
    localStorage.setItem('bh_cookie_consent', 'essential');
  };

  window.showBhCookieSettings = function() {
    var main = document.getElementById('bh-cookie-view-main');
    var settings = document.getElementById('bh-cookie-view-settings');
    if (main && settings) {
      main.classList.add('hidden');
      settings.classList.remove('hidden');
    }
  };

  window.hideBhCookieSettings = function() {
    var main = document.getElementById('bh-cookie-view-main');
    var settings = document.getElementById('bh-cookie-view-settings');
    if (main && settings) {
      settings.classList.add('hidden');
      main.classList.remove('hidden');
    }
  };

  window.saveBhCookiePreferences = function() {
    var toggle = document.getElementById('bh-cookie-toggle-analytics');
    var val = toggle && toggle.checked ? 'all' : 'essential';
    localStorage.setItem('bh_cookie_consent', val);
    var banner = document.getElementById('bh-cookie-banner');
    if (banner) banner.classList.remove('visible');
  };

  window.openBhCookieSettings = function() {
    var banner = document.getElementById('bh-cookie-banner');
    if (!banner) return;
    window.showBhCookieSettings();
    banner.classList.add('visible');
  };

  // Функции модального окна Политики
  window.openBhPolicyModal = function() {
    var modal = document.getElementById('bh-policy-modal');
    if (modal) modal.classList.add('visible');
  };

  window.closeBhPolicyModal = function() {
    var modal = document.getElementById('bh-policy-modal');
    if (modal) modal.classList.remove('visible');
  };

  window.closeBhPolicyModalOnBackdrop = function(e) {
    if (e.target && e.target.id === 'bh-policy-modal') {
      window.closeBhPolicyModal();
    }
  };

  // Кнопка скролла наверх
  function initScrollTop() {
    window.addEventListener('scroll', function() {
      var btn = document.getElementById('bh-scroll-top-btn');
      if (!btn) return;
      if (window.pageYOffset > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
  }

  window.bhScrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
