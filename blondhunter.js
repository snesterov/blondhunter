/**
 * BLONDHUNTER LUXURY LANDING & TELEGRAM SYNC FOR TILDA
 * Hosted on GitHub & auto-synced with Telegram Channel @blondhunter
 */
(function() {
  if (window.__blondhunter_initialized) return;
  window.__blondhunter_initialized = true;

  // 1. Подключение шрифтов
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(fontLink);

  // 2. Внедрение стилей
  var style = document.createElement('style');
  style.id = 'blondhunter-styles';
  style.textContent = `
:root {
  --bh-bg-main: #0B0B0D;
  --bh-bg-card: rgba(20, 20, 24, 0.85);
  --bh-gold: #D4AF37;
  --bh-gold-light: #F3E5AB;
  --bh-gold-gradient: linear-gradient(135deg, #ECC880 0%, #D4AF37 50%, #A67C1E 100%);
  --bh-gold-hover: linear-gradient(135deg, #F8DB9E 0%, #E6C258 50%, #B88B27 100%);
  --bh-text-light: #F5F5F7;
  --bh-text-muted: #A1A1AA;
  --bh-border: rgba(212, 175, 55, 0.25);
  --bh-border-subtle: rgba(255, 255, 255, 0.08);
}

#blondhunter-wrapper {
  background-color: var(--bh-bg-main);
  color: var(--bh-text-light);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
}

#blondhunter-wrapper * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.bh-container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* Header */
.bh-header {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--bh-border-subtle);
}
.bh-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--bh-gold-light);
  text-transform: uppercase;
  text-decoration: none;
}
.bh-logo span { color: #fff; font-weight: 300; }
.bh-header-nav { display: flex; gap: 12px; align-items: center; }

/* Buttons */
.bh-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  white-space: nowrap;
}
.bh-btn-primary {
  background: var(--bh-gold-gradient);
  color: #0B0B0D !important;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.25);
  border: 1px solid transparent;
}
.bh-btn-primary:hover {
  background: var(--bh-gold-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
}
.bh-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--bh-text-light) !important;
  border: 1px solid var(--bh-border);
}
.bh-btn-secondary:hover {
  background: rgba(212, 175, 55, 0.12);
  border-color: var(--bh-gold);
  color: var(--bh-gold-light) !important;
  transform: translateY(-2px);
}
.bh-btn-max {
  background: rgba(255, 255, 255, 0.07);
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.bh-btn-max:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* 2-колоночный Hero */
.bh-hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
  padding: 50px 0 60px;
}
.bh-hero-content { text-align: left; }
.bh-badge-exclusive {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid var(--bh-border);
  border-radius: 30px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--bh-gold);
  margin-bottom: 20px;
}
.bh-hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(34px, 4.5vw, 54px);
  line-height: 1.15;
  font-weight: 600;
  margin: 0 0 18px;
  background: linear-gradient(180deg, #FFFFFF 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bh-hero-subtitle {
  font-size: 16px;
  line-height: 1.6;
  color: var(--bh-text-muted);
  margin: 0 0 28px;
  font-weight: 300;
}
.bh-hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 480px;
}
.bh-action-row { display: flex; flex-wrap: wrap; gap: 10px; }

.bh-vpn-note-subtle {
  font-size: 12px;
  line-height: 1.5;
  color: #9E9EA6;
  margin-top: 14px;
}
.bh-vpn-note-subtle a {
  color: var(--bh-gold-light);
  font-weight: 600;
  text-decoration: underline;
}

/* Вертикальное видео 9:16 без черных полей */
.bh-video-side-wrap {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}
.bh-video-card {
  background: var(--bh-bg-card);
  border: 1px solid var(--bh-border);
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(16px);
}
.bh-video-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px 10px;
  border-bottom: 1px solid var(--bh-border-subtle);
  margin-bottom: 10px;
}
.bh-video-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--bh-gold-light);
  display: flex;
  align-items: center;
  gap: 8px;
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
  aspect-ratio: 9 / 16;
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

/* Лента срезов */
.bh-tg-feed {
  padding: 40px 0 80px;
  border-top: 1px solid var(--bh-border-subtle);
}
.bh-section-head { text-align: center; margin-bottom: 36px; }
.bh-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(28px, 3.5vw, 42px);
  color: #fff;
  margin: 10px 0;
}
.bh-section-desc { color: var(--bh-text-muted); font-size: 14px; }
.bh-tg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.bh-tg-card-native {
  background: var(--bh-bg-card);
  border: 1px solid var(--bh-border);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, border-color 0.25s;
}
.bh-tg-card-native:hover {
  transform: translateY(-4px);
  border-color: var(--bh-gold);
}
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
.bh-tg-badge {
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
  font-weight: 600;
}
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

/* Разметка кнопок в карточках */
.bh-card-actions { display: flex; flex-direction: column; gap: 8px; }
.bh-card-btn-tg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(36, 161, 222, 0.12);
  border: 1px solid rgba(36, 161, 222, 0.35);
  color: #55b7ff !important;
  padding: 9px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.bh-card-btn-tg:hover { background: rgba(36, 161, 222, 0.25); }
.bh-card-btn-max {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid var(--bh-border);
  color: var(--bh-gold-light) !important;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.bh-card-btn-max:hover {
  background: var(--bh-gold);
  color: #0B0B0D !important;
}

/* Mobile Sticky Bar */
.bh-mobile-sticky {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(11, 11, 13, 0.96);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--bh-border);
  padding: 8px 12px;
  z-index: 999;
  justify-content: space-between;
  gap: 8px;
}
@media (max-width: 860px) {
  .bh-hero-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px 0 40px;
    text-align: center;
  }
  .bh-hero-content { text-align: center; }
  .bh-hero-actions { margin: 0 auto; }
  .bh-action-row { justify-content: center; }
  .bh-mobile-sticky { display: flex; }
  #blondhunter-wrapper { padding-bottom: 65px; }
  .bh-header-nav { display: none; }
}
`;
  document.head.appendChild(style);

  // 3. Создание структуры
  var html = `
<div id="blondhunter-wrapper">
  <div class="bh-container">
    <!-- Header -->
    <header class="bh-header">
      <a href="/" class="bh-logo">Blond<span>hunter</span></a>
      <div class="bh-header-nav">
        <a href="https://t.me/blondhunter" onclick="window.location.href='tg://resolve?domain=blondhunter';" target="_blank" rel="noopener" class="bh-btn bh-btn-secondary">
          Канал в Telegram
        </a>
        <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-max">
          Мессенджер MAX (без VPN)
        </a>
        <a href="https://t.me/m/xprw4w4JNzY6" target="_blank" rel="noopener" class="bh-btn bh-btn-primary">
          Личка в Telegram (прайс)
        </a>
      </div>
    </header>

    <!-- Hero + Вертикальное видео без полей -->
    <section class="bh-hero-grid">
      <div class="bh-hero-content">
        <div class="bh-badge-exclusive">● Коллекционный детский блонд</div>
        <h1 class="bh-hero-title">Охота за эталонным славянским блондом</h1>
        <p class="bh-hero-subtitle">
          Неокрашенные детские срезы со всего мира. Живой природный блеск, тончайшая шелковая структура, сохраненная кутикула и строгий отбор.
        </p>
        
        <div class="bh-hero-actions">
          <div class="bh-action-row">
            <a href="https://t.me/blondhunter" onclick="window.location.href='tg://resolve?domain=blondhunter';" target="_blank" rel="noopener" class="bh-btn bh-btn-primary" style="flex:1;">
              Канал добычи в Telegram
            </a>
            <a href="https://t.me/m/xprw4w4JNzY6" target="_blank" rel="noopener" class="bh-btn bh-btn-secondary" style="flex:1;">
              Запросить прайс в Telegram (личка)
            </a>
          </div>
          <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-max" style="width:100%;">
            Написать в мессенджер MAX (без VPN в РФ)
          </a>
        </div>

        <div class="bh-vpn-note-subtle">
          💡 Для пользователей из РФ: клик по кнопкам открывает приложение Telegram напрямую. Если нет VPN — пишите в <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener">мессенджер MAX</a>.
        </div>
      </div>

      <!-- Вертикальное видео 9:16 -->
      <div class="bh-video-side-wrap">
        <div class="bh-video-card">
          <div class="bh-video-header">
            <div class="bh-video-title">
              <span>Охота</span>
              <a href="https://t.me/blondhunter" onclick="window.location.href='tg://resolve?domain=blondhunter';" target="_blank" rel="noopener">(канал в Telegram →)</a>
            </div>
            <span style="font-size:11px;color:var(--bh-gold);font-weight:600;">● Видео из канала</span>
          </div>
          <div class="bh-video-frame-wrap">
            <iframe 
              src="https://kinescope.io/embed/2yLz74sfURhUvc2rUP9Zzn" 
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Свежие партии срезов -->
    <section class="bh-tg-feed">
      <div class="bh-section-head">
        <span class="bh-badge-exclusive" style="color:#10B981;border-color:rgba(16,185,129,0.3);">● Прямой эфир поступлений</span>
        <h2 class="bh-section-title">Свежие партии срезов</h2>
        <p class="bh-section-desc">Актуальные лоты из студии. Переходите в Telegram-пост или бронируйте в MAX.</p>
      </div>

      <div class="bh-tg-grid" id="bh-feed-grid">
        <!-- Посты по умолчанию (обновляются скриптом динамически) -->
        <div class="bh-tg-card-native">
          <div class="bh-tg-card-head">
            <div class="bh-tg-author">
              <img src="https://static.tildacdn.com/tild3766-6535-4366-b139-386435646564/photo_2024-09-19_17-.jpg" alt="Blondhunter" class="bh-tg-avatar">
              <div>
                <div class="bh-tg-channel-name">Blondhunter</div>
                <div class="bh-tg-post-time">Лот #99</div>
              </div>
            </div>
            <span class="bh-tg-badge">● Со скидкой</span>
          </div>
          <div class="bh-tg-media-wrap">
            <img src="https://static.tildacdn.com/tild3766-6535-4366-b139-386435646564/photo_2024-09-19_17-.jpg" alt="Срез 99">
            <div class="bh-tg-media-tag">Холод 8/9 • 57 см • 187 г</div>
          </div>
          <h4 class="bh-tg-card-title">Срез #99 — Cold Blonde</h4>
          <p class="bh-tg-card-desc">Эксклюзивный холодный срез из студии в Москве. Идеальная густота и шелк. Со скидкой: 177 000 ₽ / 1 770 €.</p>
          <div class="bh-card-actions">
            <a href="https://t.me/blondhunter/4550" onclick="window.location.href='tg://resolve?domain=blondhunter&post=4550';" target="_blank" rel="noopener" class="bh-card-btn-tg">
              Смотреть срез в Telegram →
            </a>
            <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-card-btn-max">
              Забронировать в MAX (без VPN)
            </a>
          </div>
        </div>

        <div class="bh-tg-card-native">
          <div class="bh-tg-card-head">
            <div class="bh-tg-author">
              <img src="https://static.tildacdn.com/tild3766-6535-4366-b139-386435646564/photo_2024-09-19_17-.jpg" alt="Blondhunter" class="bh-tg-avatar">
              <div>
                <div class="bh-tg-channel-name">Blondhunter</div>
                <div class="bh-tg-post-time">Лот #37</div>
              </div>
            </div>
            <span class="bh-tg-badge">● First Haircut 👶</span>
          </div>
          <div class="bh-tg-media-wrap">
            <img src="https://static.tildacdn.com/tild3666-6163-4737-a561-333062663262/2.png" alt="Срез 37">
            <div class="bh-tg-media-tag">Детский • 56 см • 147 г</div>
          </div>
          <h4 class="bh-tg-card-title">Срез #37 — First Haircut</h4>
          <p class="bh-tg-card-desc">Первый срез ребенка, нетронутый и тончайший волос. Редкий натуральный блонд. Hottest лот: 195 000 ₽ / 1 950 €.</p>
          <div class="bh-card-actions">
            <a href="https://t.me/blondhunter/4545" onclick="window.location.href='tg://resolve?domain=blondhunter&post=4545';" target="_blank" rel="noopener" class="bh-card-btn-tg">
              Смотреть срез в Telegram →
            </a>
            <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-card-btn-max">
              Забронировать в MAX (без VPN)
            </a>
          </div>
        </div>

        <div class="bh-tg-card-native">
          <div class="bh-tg-card-head">
            <div class="bh-tg-author">
              <img src="https://static.tildacdn.com/tild3766-6535-4366-b139-386435646564/photo_2024-09-19_17-.jpg" alt="Blondhunter" class="bh-tg-avatar">
              <div>
                <div class="bh-tg-channel-name">Blondhunter</div>
                <div class="bh-tg-post-time">Лот #47</div>
              </div>
            </div>
            <span class="bh-tg-badge">● Кудри 🦁</span>
          </div>
          <div class="bh-tg-media-wrap">
            <img src="https://static.tildacdn.com/tild3835-6234-4530-a466-363031626664/3.png" alt="Срез 47">
            <div class="bh-tg-media-tag">Кудри • 48 см • 173 г</div>
          </div>
          <h4 class="bh-tg-card-title">Срез #47 — In Curly</h4>
          <p class="bh-tg-card-desc">Натуральный детский завиток. Упругая природная волна, невероятный живой блеск и объем. 195 000 ₽ / 1 950 €.</p>
          <div class="bh-card-actions">
            <a href="https://t.me/blondhunter/4544" onclick="window.location.href='tg://resolve?domain=blondhunter&post=4544';" target="_blank" rel="noopener" class="bh-card-btn-tg">
              Смотреть срез в Telegram →
            </a>
            <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-card-btn-max">
              Забронировать в MAX (без VPN)
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Мобильный бар -->
  <div class="bh-mobile-sticky">
    <a href="https://t.me/blondhunter" onclick="window.location.href='tg://resolve?domain=blondhunter';" target="_blank" rel="noopener" class="bh-btn bh-btn-primary" style="flex:1;padding:10px 8px;font-size:11px;">
      Канал в Telegram
    </a>
    <a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-btn bh-btn-secondary" style="flex:1;padding:10px 8px;font-size:11px;">
      В MAX (без VPN)
    </a>
    <a href="https://t.me/m/xprw4w4JNzY6" target="_blank" rel="noopener" class="bh-btn bh-btn-secondary" style="flex:1;padding:10px 8px;font-size:11px;">
      Прайс в личку
    </a>
  </div>
</div>
`;

  // 4. Монтирование в страницу Тильды
  function mount() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;

    var script = document.currentScript || document.querySelector('script[src*="blondhunter.js"]');
    var target = script ? script.closest('.t123') || script.parentNode : null;
    
    if (target) {
      target.innerHTML = '';
      target.appendChild(wrapper.firstElementChild);
    } else {
      document.body.prepend(wrapper.firstElementChild);
    }

    // 5. Динамическая подгрузка свежих постов из GitHub
    fetch('https://raw.githubusercontent.com/snesterov/blondhunter/main/posts.json?v=' + Date.now())
      .then(function(res) { return res.json(); })
      .then(function(posts) {
        if (!posts || !posts.length) return;
        var grid = document.getElementById('bh-feed-grid');
        if (!grid) return;
        
        var cardsHtml = posts.map(function(p) {
          var postId = p.id || '';
          return '<div class="bh-tg-card-native">' +
            '<div class="bh-tg-card-head">' +
              '<div class="bh-tg-author">' +
                '<img src="https://static.tildacdn.com/tild3766-6535-4366-b139-386435646564/photo_2024-09-19_17-.jpg" alt="Blondhunter" class="bh-tg-avatar">' +
                '<div>' +
                  '<div class="bh-tg-channel-name">Blondhunter</div>' +
                  '<div class="bh-tg-post-time">Пост #' + postId + '</div>' +
                '</div>' +
              '</div>' +
              '<span class="bh-tg-badge">● В наличии</span>' +
            '</div>' +
            '<div class="bh-tg-media-wrap">' +
              '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
              '<div class="bh-tg-media-tag">' + p.tag + '</div>' +
            '</div>' +
            '<h4 class="bh-tg-card-title">' + p.title + '</h4>' +
            '<p class="bh-tg-card-desc">' + p.desc + '</p>' +
            '<div class="bh-card-actions">' +
              '<a href="' + p.url + '" target="_blank" rel="noopener" class="bh-card-btn-tg">Смотреть срез в Telegram →</a>' +
              '<a href="https://max.ru/u/f9LHodD0cOKu_NdSA68R7JlIWv1dBiiK_yoA5ITTmEVHTmQdiijwgmxBvBc" target="_blank" rel="noopener" class="bh-card-btn-max">Забронировать в MAX (без VPN)</a>' +
            '</div>' +
          '</div>';
        }).join('');
        
        grid.innerHTML = cardsHtml;
      })
      .catch(function(err) {
        console.log('Using default cards');
      });
  }

  // Делегированный обработчик кликов по Telegram-ссылкам
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('t.me') !== -1) {
      var match = href.match(/t\.me\/([^\/\?]+)(?:\/(\d+))?/);
      if (match && match[1]) {
        var domain = match[1];
        var postId = match[2];
        var deeplink = 'tg://resolve?domain=' + domain + (postId ? '&post=' + postId : '');
        window.location.href = deeplink;
      }
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
  // Дополнительная страховка: повторный вызов при полной загрузке страницы
  window.addEventListener('load', function() {
    if (!document.getElementById('blondhunter-wrapper')) {
      mount();
    }
  });
})();
