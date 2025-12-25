import './Solution.css';

const Solution = () => {
  const features = [
    'Подключение — 0₽',
    'Абонентская плата — 0₽',
    'Платёжные модули выдаются бесплатно!',
    { text: 'Комиссия в России — 1,65% «Всё включено»', highlight: 'Комиссия от 1% для акционеров АО «УДМПЭЙ»' },
    'Встроенные терминал и касса UDMPAY — полное соответствие 54-ФЗ',
    'Автоматическая отправка чеков покупателям и в налоговую',
    'Можно использовать в магазинах, для курьеров, через мессенджеры и на сайтах',
    'Работает по QR и NFC на iPhone и Android без установки приложений',
    'Международные платежи в странах БРИКС+',
  ];

  const paymentSystems = [
    { name: 'СБП', color: '#0ABAB5' },
    { name: 'Мир', color: '#00A86B' },
    { name: 'WeChat Pay', color: '#07C160' },
    { name: 'AliPay', color: '#1677FF' },
    { name: 'UPI', color: '#5B2D90' },
  ];

  return (
    <section className="solution" id="solution">
      <div className="solution__container">
        <div className="solution__header">
          <div className="solution__label">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="2"/>
              <path d="M6.5 10l2.5 2.5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Решение</span>
          </div>

          <h2 className="solution__title">
            UDMPAY вместо терминала и кассового аппарата
            <span className="solution__title-accent"> для оффлайн и онлайн торговли!</span>
          </h2>

          <p className="solution__description">
            «All Inclusive» решение для микробизнеса и банков: облачные терминал, касса, 
            чеки, учёт продаж и даже международные платежи.
          </p>
        </div>

        <div className="solution__grid">
          <div className="solution__features">
            {features.map((item, index) => (
              <div key={index} className="solution__feature">
                <div className="solution__feature-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="solution__feature-content">
                  {typeof item === 'string' ? (
                    <span>{item}</span>
                  ) : (
                    <>
                      <span>{item.text}</span>
                      <span className="solution__feature-highlight">{item.highlight}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="solution__visual">
            <div className="solution__card">
              <div className="solution__card-header">
                <span className="solution__card-badge">Итого на запуск</span>
                <span className="solution__card-value">0 ₽</span>
              </div>
              
              <div className="solution__payments">
                <span className="solution__payments-label">Принимаем платежи:</span>
                <div className="solution__payments-list">
                  {paymentSystems.map((system, index) => (
                    <div
                      key={index}
                      className="solution__payment"
                      style={{ '--color': system.color } as React.CSSProperties}
                    >
                      {system.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="solution__savings">
                <div className="solution__savings-item">
                  <span className="solution__savings-label">Экономия</span>
                  <span className="solution__savings-value">до 67 000 ₽</span>
                </div>
                <div className="solution__savings-item">
                  <span className="solution__savings-label">Ежемесячно</span>
                  <span className="solution__savings-value">до 17 000 ₽</span>
                </div>
              </div>
            </div>

            <a href="#connect" className="solution__cta">
              <span>Подключиться бесплатно</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

