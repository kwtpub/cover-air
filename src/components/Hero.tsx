import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__particles"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <img src="/images/skolkovo.webp" alt="Сколково" className="hero__badge-logo" />
            <span>Резидент Сколково</span>
          </div>
          
          <h1 className="hero__title">
            <span className="hero__title-line">Сервис</span>
            <span className="hero__title-line">для приема платежей</span>
            <span className="hero__title-accent">по QR-кодам и NFC</span>
            <span className="hero__title-sub">без терминала и кассового аппарата</span>
          </h1>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">0₽</span>
              <span className="hero__stat-label">Подключение</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">0₽</span>
              <span className="hero__stat-label">Абонентская плата</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">1,65%</span>
              <span className="hero__stat-label">Комиссия</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#connect" className="hero__btn hero__btn--primary">
              <span>Подключиться за 0 ₽</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#partners" className="hero__btn hero__btn--secondary">
              Стать партнёром
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__phone">
            <div className="hero__phone-screen">
              <div className="hero__qr">
                <svg viewBox="0 0 100 100" className="hero__qr-code">
                  <rect x="10" y="10" width="25" height="25" fill="currentColor"/>
                  <rect x="65" y="10" width="25" height="25" fill="currentColor"/>
                  <rect x="10" y="65" width="25" height="25" fill="currentColor"/>
                  <rect x="40" y="40" width="20" height="20" fill="currentColor"/>
                  <rect x="15" y="15" width="15" height="15" fill="white"/>
                  <rect x="70" y="15" width="15" height="15" fill="white"/>
                  <rect x="15" y="70" width="15" height="15" fill="white"/>
                  <rect x="20" y="20" width="5" height="5" fill="currentColor"/>
                  <rect x="75" y="20" width="5" height="5" fill="currentColor"/>
                  <rect x="20" y="75" width="5" height="5" fill="currentColor"/>
                  <rect x="40" y="10" width="5" height="5" fill="currentColor"/>
                  <rect x="50" y="10" width="5" height="5" fill="currentColor"/>
                  <rect x="40" y="20" width="5" height="5" fill="currentColor"/>
                  <rect x="55" y="25" width="5" height="5" fill="currentColor"/>
                  <rect x="10" y="40" width="5" height="5" fill="currentColor"/>
                  <rect x="25" y="45" width="5" height="5" fill="currentColor"/>
                  <rect x="65" y="45" width="5" height="5" fill="currentColor"/>
                  <rect x="80" y="50" width="5" height="5" fill="currentColor"/>
                  <rect x="45" y="65" width="5" height="5" fill="currentColor"/>
                  <rect x="65" y="65" width="5" height="5" fill="currentColor"/>
                  <rect x="75" y="70" width="5" height="5" fill="currentColor"/>
                  <rect x="55" y="80" width="5" height="5" fill="currentColor"/>
                  <rect x="70" y="85" width="5" height="5" fill="currentColor"/>
                </svg>
              </div>
              <div className="hero__payment-amount">1 250 ₽</div>
              <div className="hero__payment-status">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#00C853"/>
                  <path d="M4.5 8L7 10.5L11.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Оплачено</span>
              </div>
            </div>
          </div>
          
          <div className="hero__nfc-tag">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M6 8.586L8.586 6 18 15.414 15.414 18 6 8.586z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3.5 11.5l-2-2M8.5 6.5l-2-2M11.5 3.5l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>NFC</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Узнать больше</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

