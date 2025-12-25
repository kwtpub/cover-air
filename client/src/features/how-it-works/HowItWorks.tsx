import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how">
      <div className="how-it-works__gradient-top"></div>
      
      <div className="how-it-works__container">
        <h2 className="how-it-works__title">
          Как работает <span className="how-it-works__title-brand">Cover Air</span>
        </h2>
        
        <p className="how-it-works__description">
        COVER AIR ― платежное решение на основе сервиса для приёма платежей, запатентованного UDMPAY. Мы создаем для вас готовые онлайн-страницы, которые позволяют вашим клиентам платить смартфоном iPhone/Android по QR-коду или NFC. С помощью бесконтактных модулей вы сможете принимать платежи в офисе, магазине и даже на улице без терминала и кассового аппарата. Полностью соответствует 54-ФЗ.
        </p>

        <div className="how-it-works__steps">
          <div className="how-it-works__step">
            <h3 className="how-it-works__step-title">
              <span className="how-it-works__step-number">1.</span> Прикоснуться или отсканировать
            </h3>
            <div className="how-it-works__step-visual">
              <div className="how-it-works__phone">
                <div className="how-it-works__phone-screen">
                  <div className="how-it-works__nfc-tag">
                    <span>NFC</span>
                  </div>
                  <div className="how-it-works__qr-code"></div>
                </div>
              </div>
              <div className="how-it-works__nfc-card-small"></div>
            </div>
            <p className="how-it-works__step-note">Без установки приложений</p>
          </div>

          <div className="how-it-works__arrow">→</div>

          <div className="how-it-works__step">
            <h3 className="how-it-works__step-title">
              <span className="how-it-works__step-number">2.</span> Оплата
            </h3>
            <div className="how-it-works__step-visual">
              <div className="how-it-works__phone how-it-works__phone--green">
                <div className="how-it-works__phone-screen">
                  <p className="how-it-works__bank-title">UDMPAY.RU</p>
                  <p className="how-it-works__amount">Сумма к оплате</p>
                  <p className="how-it-works__amount-value">2 400 Р</p>
                  <div className="how-it-works__qr-small"></div>
                  <button className="how-it-works__pay-btn">Оплатить</button>
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works__arrow">→</div>

          <div className="how-it-works__step">
            <h3 className="how-it-works__step-title">
              <span className="how-it-works__step-number">3.</span> Получение чека
            </h3>
            <div className="how-it-works__step-visual">
              <div className="how-it-works__phone how-it-works__phone--green">
                <div className="how-it-works__phone-screen">
                  <p className="how-it-works__receipt-title">Оплата прошла успешно!</p>
                  <div className="how-it-works__receipt">
                    <p>Кассовый чек</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="how-it-works__patent">Патент №2022685673 от 27.12.2022</p>
      </div>
    </section>
  );
};

export default HowItWorks;
