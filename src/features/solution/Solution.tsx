import './Solution.css';

const Solution = () => {
  const features = [
    'Подключение — 0₽',
    'Абонентская плата — 0₽',
    'Платёжные модули выдаются бесплатно!',
    { text: 'Комиссия в России — 1,65% «Всё включено»', highlight: 'Комиссия от 1% для акционеров АО «УДМПЭЙ»' },
    'Встроенные терминал и касса UDMPAY — полное соответствие 54-ФЗ',
    'Автоматическая отправка чеков покупателям и в налоговую без необходимости оплаты за смс',
    'Можно использовать в магазинах, для курьеров, через мессенджеры и на сайтах',
    'Работает по QR и NFC на iPhone и Android без установки приложений',
    'Международные платежи в странах БРИКС+',
  ];

  return (
    <section className="solution" id="solution">
      <div className="solution__container">
        <div className="solution__visual">
          {/* Телефон с интерфейсом */}
          <div className="solution__phone">
            <div className="solution__phone-notch"></div>
            <div className="solution__phone-screen">
              <div className="solution__app-header">
                <span className="solution__app-logo">UDMPAY</span>
              </div>
              <p className="solution__app-title">Выберите способ оплаты</p>
              
              <div className="solution__payment-list">
                <div className="solution__payment-item solution__payment-item--active">
                  <span className="solution__payment-radio"></span>
                  <span className="solution__payment-name">СБП</span>
                </div>
                <div className="solution__payment-item">
                  <span className="solution__payment-radio"></span>
                  <span className="solution__payment-name" style={{color: '#07C160'}}>微信支付 WeChat Pay</span>
                </div>
                <div className="solution__payment-item">
                  <span className="solution__payment-radio"></span>
                  <span className="solution__payment-name" style={{color: '#5B2D90'}}>UPI</span>
                </div>
                <div className="solution__payment-item">
                  <span className="solution__payment-radio"></span>
                  <span className="solution__payment-name">troy</span>
                </div>
                <div className="solution__payment-item">
                  <span className="solution__payment-radio"></span>
                  <span className="solution__payment-name" style={{color: '#F7941D'}}>AFRICA</span>
                </div>
              </div>

              <button className="solution__app-btn">ОПЛАТИТЬ</button>
            </div>
          </div>

          {/* NFC карточка */}
          <div className="solution__nfc-card">
            <div className="solution__nfc-inner">
              <div className="solution__nfc-brand">UDMPAY</div>
              <div className="solution__nfc-icon">
                <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#7C9082"/>
                </svg>
                <span>NFC</span>
              </div>
              <div className="solution__nfc-qr">
                <svg viewBox="0 0 80 80" fill="none">
                  <rect x="5" y="5" width="20" height="20" stroke="#7C9082" strokeWidth="2"/>
                  <rect x="55" y="5" width="20" height="20" stroke="#7C9082" strokeWidth="2"/>
                  <rect x="5" y="55" width="20" height="20" stroke="#7C9082" strokeWidth="2"/>
                  <rect x="10" y="10" width="10" height="10" fill="#7C9082"/>
                  <rect x="60" y="10" width="10" height="10" fill="#7C9082"/>
                  <rect x="10" y="60" width="10" height="10" fill="#7C9082"/>
                  <rect x="30" y="30" width="20" height="20" fill="#7C9082"/>
                </svg>
              </div>
              <p className="solution__nfc-text">или отсканируй</p>
              <p className="solution__nfc-patent">ЗАПАТЕНТОВАНО</p>
            </div>
          </div>
        </div>

        <div className="solution__content">
          <h2 className="solution__title">
            Решение для клиентов — <span className="solution__title-accent">0₽</span>:
            <br />
            UDMPAY вместо терминала и кассового аппарата для оффлайн и онлайн торговли!
          </h2>
          
          <p className="solution__description">
            «All Inclusive» решение для микробизнеса и банков: облачные терминал, касса, чеки, учёт продаж и даже международные платежи.
          </p>

          <ul className="solution__list">
            {features.map((item, index) => (
              <li key={index} className="solution__item">
                <span className="solution__item-check">✓</span>
                <div className="solution__item-content">
                  {typeof item === 'string' ? (
                    <span>{item}</span>
                  ) : (
                    <>
                      <span>{item.text}</span>
                      <strong className="solution__item-highlight">{item.highlight}</strong>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solution;
