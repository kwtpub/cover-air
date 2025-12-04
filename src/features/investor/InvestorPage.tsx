import { useEffect } from 'react';
import './InvestorPage.css';

const InvestorPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="investor-page">
      <section className="investor-hero">
        <div className="investor-hero__waves"></div>
        <div className="investor-hero__container">
          <div className="investor-hero__content">
            <h1 className="investor-hero__title">
              Получите доход<br />
              от 31% до 825%*.
            </h1>

            <p className="investor-hero__subtitle">
              Станьте инвестором международного платёжного сервиса 
              <span className="investor-hero__brand"> UDMPAY</span> без необходимости контролировать бизнес, 
              это делает профессиональная команда.
            </p>

            <p className="investor-hero__growth">
              Рост стоимости за 2024 год <span className="investor-hero__percent">91%</span>.
            </p>

            <div className="investor-hero__buttons">
              <a href="#calculator" className="investor-hero__btn investor-hero__btn--primary">
                Рассчитать доход
              </a>
              <a href="#consultation" className="investor-hero__btn investor-hero__btn--secondary">
                Получить консультацию
              </a>
            </div>

            <div className="investor-hero__badges">
              <div className="investor-hero__badge">
                <span className="investor-hero__badge-sk">Sk</span>
                <span className="investor-hero__badge-atom">⚛</span>
                <span className="investor-hero__badge-text">Участник</span>
              </div>
              <div className="investor-hero__award">
                <span className="investor-hero__award-icon">🏆</span>
                <div className="investor-hero__award-text">
                  <div className="investor-hero__award-place">1-е место</div>
                  <div className="investor-hero__award-name">из 500</div>
                </div>
                <span className="investor-hero__award-logo">fin<span>AWARD</span></span>
              </div>
              <div className="investor-hero__award">
                <span className="investor-hero__award-icon">🏆</span>
                <div className="investor-hero__award-text">
                  <div className="investor-hero__award-place">1-е место</div>
                  <div className="investor-hero__award-name">из 312</div>
                </div>
                <span className="investor-hero__award-logo">ГАЗПРОМБАНК</span>
              </div>
            </div>
          </div>

          <div className="investor-hero__visual">
            <div className="investor-hero__phone">
              <div className="investor-hero__phone-notch"></div>
              <div className="investor-hero__phone-screen">
                <div className="investor-hero__app-header">
                  <div className="investor-hero__app-logo">UDMPAY</div>
                  <div className="investor-hero__app-title">Выберите способ оплаты</div>
                </div>

                <div className="investor-hero__payment-options">
                  <div className="investor-hero__payment-option">
                    <div className="investor-hero__payment-radio investor-hero__payment-radio--active"></div>
                    <div className="investor-hero__payment-icon investor-hero__payment-icon--sbp">
                      <span>▶</span> СБП
                    </div>
                  </div>
                  <div className="investor-hero__payment-option">
                    <div className="investor-hero__payment-radio"></div>
                    <div className="investor-hero__payment-icon">WeChat Pay</div>
                  </div>
                  <div className="investor-hero__payment-option">
                    <div className="investor-hero__payment-radio"></div>
                    <div className="investor-hero__payment-icon">UPI</div>
                  </div>
                  <div className="investor-hero__payment-option">
                    <div className="investor-hero__payment-radio"></div>
                    <div className="investor-hero__payment-icon">VISA</div>
                  </div>
                </div>

                <button className="investor-hero__app-btn">Оплатить</button>
              </div>
            </div>

            <div className="investor-hero__nfc-card">
              <div className="investor-hero__nfc-lanyard"></div>
              <div className="investor-hero__nfc-card-inner">
                <div className="investor-hero__nfc-logo">UDMPAY</div>
                <div className="investor-hero__nfc-qr">
                  <div className="investor-hero__qr-placeholder">
                    <svg viewBox="0 0 100 100">
                      <rect x="0" y="0" width="20" height="20" fill="#000"/>
                      <rect x="25" y="0" width="20" height="20" fill="#000"/>
                      <rect x="75" y="0" width="20" height="20" fill="#000"/>
                      <rect x="0" y="25" width="20" height="20" fill="#000"/>
                      <rect x="75" y="25" width="20" height="20" fill="#000"/>
                      <rect x="0" y="75" width="20" height="20" fill="#000"/>
                      <rect x="25" y="75" width="20" height="20" fill="#000"/>
                      <rect x="75" y="75" width="20" height="20" fill="#000"/>
                    </svg>
                  </div>
                </div>
                <div className="investor-hero__nfc-text">
                  <p>Поднесите</p>
                  <p>для оплаты</p>
                </div>
                <div className="investor-hero__nfc-number">0344529810</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorPage;

