import './CoverAirProcess.css';

const CoverAirProcess = () => {
  return (
    <section className="cover-air-process">
      <div className="cover-air-process__container">
        <div className="cover-air-process__content">
          <h2 className="cover-air-process__title">
            Как работает <span className="cover-air-process__brand">Cover Air</span>
          </h2>
          
          <p className="cover-air-process__description">
          COVER AIR ― платежное решение на основе сервиса для приёма платежей, запатентованного UDMPAY. Мы создаем для вас готовые онлайн-страницы, которые позволяют вашим клиентам платить смартфоном iPhone/Android по QR-коду или NFC. С помощью бесконтактных модулей вы сможете принимать платежи в офисе, магазине и даже на улице без терминала и кассового аппарата. Работаем со всеми банками в России и платежными системами разных стран:
          </p>

          <div className="cover-air-process__text">
            <p className="cover-air-process__working-text">
              Работаем со всеми банками в России и платежными системами разных стран:
            </p>
          </div>

          <div className="cover-air-process__payment-systems">
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/sbp.svg" alt="СБП" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/mir.svg" alt="МИР" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/visa.svg" alt="VISA" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/master-card.svg" alt="Mastercard" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/rupay.svg" alt="RuPay" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/we-chat.svg" alt="WeChat Pay" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/RPP.svg" alt="RPP" className="cover-air-process__payment-icon" />
            </div>
            <div className="cover-air-process__payment-logo">
              <img src="/images/payment-method/asia-pay.svg" alt="Asia Pay" className="cover-air-process__payment-icon" />
            </div>
          </div>

          <p className="cover-air-process__patent">Патент №2022685673 от 27.12.2022</p>
        </div>

        <div className="cover-air-process__visual">
          <div className="cover-air-process__steps-label">
            Оплата<br/>в 3 клика
          </div>
          
          <div className="cover-air-process__step-circle cover-air-process__step-circle--1">
            <div className="cover-air-process__step-icon">
              <img src="/images/qr-code.png" alt="QR-код" />
            </div>
            <div className="cover-air-process__step-text">
              QR-код<br/>или NFC
            </div>
          </div>

          <div className="cover-air-process__step-circle cover-air-process__step-circle--2">
            <div className="cover-air-process__step-icon">
              <img src="/images/bank-building.png" alt="Банк" />
            </div>
            <div className="cover-air-process__step-text">
              Выбор<br/>банка
            </div>
          </div>

          <div className="cover-air-process__step-circle cover-air-process__step-circle--3">
            <div className="cover-air-process__step-icon">
              <img src="/images/credit-card.png" alt="Оплата" />
            </div>
            <div className="cover-air-process__step-text">
              Оплата
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverAirProcess;

