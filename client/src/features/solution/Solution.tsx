import './Solution.css';

const Solution = () => {
  const features = [
    'Подключение — 0₽',
    'Абонентская плата — 0₽',
    'Платёжные модули выдаются бесплатно!',
    'Комиссия в России — 2% «Всё включено',
    'Встроенные терминал и касса Cover Air — полное соответствие 54-ФЗ',
    'Автоматическая отправка чеков покупателям и в налоговую без необходимости оплаты за смс',
    'Можно использовать в магазинах, для курьеров, через мессенджеры и на сайтах',
    'Работает по QR и NFC на iPhone и Android без установки приложений',
    'Международные платежи в странах БРИКС+',
  ];

  return (
    <section className="solution" id="solution">
      <div className="solution__container">
        <div className="solution__visual">
          <div className="solution__image">
            <img 
              src="/images/process-pay.svg" 
              alt="iPhone" 
              className="solution__image-img"
            />
          </div>
        </div>

        <div className="solution__content">
          <h2 className="solution__title">
            Решение для клиентов — <span className="solution__title-accent">0₽</span>:
            <br />
            Cover Air вместо терминала и кассового аппарата для оффлайн и онлайн торговли!
          </h2>
          
          <p className="solution__description">
            «All Inclusive» решение для микробизнеса и банков: облачные терминал, касса, чеки, учёт продаж и даже международные платежи.
          </p>

          <ul className="solution__list">
            {features.map((item, index) => (
              <li key={index} className="solution__item">
                <span className="solution__item-check">✓</span>
                <div className="solution__item-content">
                  <span>{item}</span>
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
