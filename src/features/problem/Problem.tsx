import './Problem.css';

const Problem = () => {
  const problems = [
    'Купить или арендовать терминал',
    'Купить или арендовать кассовый аппарат',
    'Получить ЭЦП',
    'Купить фискальный накопитель',
    'Регистрация кассы и ФК в налоговой',
    'Купить чековую ленту',
    'Купить компьютер и программу учёта',
    'Нанять специалиста для настройки',
  ];

  return (
    <section className="problem" id="problem">
      <div className="problem__container">
        <div className="problem__content">
          <h2 className="problem__title">
            <span className="problem__title-label">Проблема:</span>
            Микробизнесу проще работать за наличные или «на карту» — риск получить штраф!
          </h2>
          
          <p className="problem__description">
            19 400 000 микро- и малых предпринимателей в России сталкиваются с большими расходами на ведение легального бизнеса. Для запуска бизнеса необходимо от 67 000 ₽:
          </p>

          <ul className="problem__list">
            {problems.map((item, index) => (
              <li key={index} className="problem__item">
                <span className="problem__item-check">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="problem__visual">
          <div className="problem__equipment">
            {/* Кассовое оборудование с ценниками */}
            <div className="problem__equipment-grid">
              <div className="problem__equipment-item problem__equipment-item--monitor">
                <div className="problem__price-tag problem__price-tag--red">
                  35 000 ₽
                </div>
              </div>
              <div className="problem__equipment-item problem__equipment-item--scanner">
                <div className="problem__price-tag problem__price-tag--red">
                  12 000 ₽
                </div>
              </div>
              <div className="problem__equipment-item problem__equipment-item--printer">
                <div className="problem__price-tag problem__price-tag--red">
                  12 000 ₽
                </div>
              </div>
              <div className="problem__equipment-item problem__equipment-item--fiscal">
                <div className="problem__price-tag problem__price-tag--red">
                  2,5%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
