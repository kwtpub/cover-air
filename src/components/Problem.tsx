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
          <div className="problem__label">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 6v4M10 14h.01M18 10a8 8 0 11-16 0 8 8 0 0116 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Проблема</span>
          </div>
          
          <h2 className="problem__title">
            Микробизнесу проще работать за наличные или «на карту» — 
            <span className="problem__title-accent"> риск получить штраф!</span>
          </h2>
          
          <p className="problem__description">
            <strong>19 400 000</strong> микро- и малых предпринимателей в России сталкиваются 
            с большими расходами на ведение легального бизнеса. 
            Для запуска бизнеса необходимо от <strong>67 000 ₽:</strong>
          </p>
        </div>

        <div className="problem__list">
          {problems.map((item, index) => (
            <div key={index} className="problem__item">
              <div className="problem__item-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M8 4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="problem__total">
          <div className="problem__total-label">Итого на запуск</div>
          <div className="problem__total-value">≥ 67 000 ₽</div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

