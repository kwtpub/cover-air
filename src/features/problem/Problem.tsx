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
          <div className="problem__image">
            <img 
              src="/images/photo.webp" 
              alt="Problem illustration" 
              className="problem__image-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
