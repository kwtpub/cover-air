import './Comparison.css';

const Comparison = () => {
  const comparisonData = [
    {
      category: 'Запуск бизнеса',
      items: [
        { name: 'Кассовый аппарат', udmpay: '0 ₽ интегрировано', competitor: 'от 5 500 ₽' },
        { name: 'Фискальный накопитель', udmpay: '0 ₽ интегрировано', competitor: 'от 12 000 ₽' },
        { name: 'Настройка ПО', udmpay: '0 ₽ интегрировано', competitor: 'от 40 000 ₽' },
        { name: 'Подключение', udmpay: '0 ₽', competitor: '9 500 ₽' },
      ],
      total: { udmpay: '0 ₽', competitor: '67 000 ₽' },
    },
    {
      category: 'Ежемесячное обслуживание',
      items: [
        { name: 'Терминал и касса', udmpay: '0 ₽ интегрировано', competitor: '8 990 ₽/мес' },
        { name: 'Программное обеспечение', udmpay: '0 ₽ интегрировано', competitor: '3 500 ₽/мес' },
        { name: 'Интернет-магазин, CRM', udmpay: '0 ₽ интегрировано', competitor: '1 990 ₽/мес' },
        { name: 'Комиссия (300 000 ₽)', udmpay: '1,65% — 4 950 ₽', competitor: '2,5% — 7 500 ₽' },
      ],
      total: { udmpay: '4 950 ₽', competitor: '21 980 ₽' },
    },
  ];

  return (
    <section className="comparison" id="comparison">
      <div className="comparison__container">
        <div className="comparison__header">
          <h2 className="comparison__title">Сравнение с конкурентами</h2>
          <p className="comparison__subtitle">Экономия до 4.5 раз на обслуживании бизнеса</p>
        </div>

        <div className="comparison__table-wrapper">
          <div className="comparison__table">
            <div className="comparison__table-header">
              <div className="comparison__table-cell comparison__table-cell--name"></div>
              <div className="comparison__table-cell comparison__table-cell--udmpay">
                <div className="comparison__brand comparison__brand--udmpay">
                  <span className="comparison__brand-name">UDMPAY</span>
                  <span className="comparison__brand-label">всё включено!</span>
                </div>
              </div>
              <div className="comparison__table-cell comparison__table-cell--competitor">
                <div className="comparison__brand comparison__brand--competitor">
                  <span className="comparison__brand-name">Конкуренты</span>
                  <span className="comparison__brand-label">в России</span>
                </div>
              </div>
            </div>

            {comparisonData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="comparison__section">
                <div className="comparison__section-header">
                  <span>{section.category}</span>
                </div>

                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="comparison__row">
                    <div className="comparison__table-cell comparison__table-cell--name">
                      {item.name}
                    </div>
                    <div className="comparison__table-cell comparison__table-cell--udmpay">
                      <span className="comparison__value comparison__value--good">
                        {item.udmpay}
                      </span>
                    </div>
                    <div className="comparison__table-cell comparison__table-cell--competitor">
                      <span className="comparison__value comparison__value--bad">
                        {item.competitor}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="comparison__row comparison__row--total">
                  <div className="comparison__table-cell comparison__table-cell--name">
                    <strong>Итого</strong>
                  </div>
                  <div className="comparison__table-cell comparison__table-cell--udmpay">
                    <span className="comparison__total comparison__total--good">
                      {section.total.udmpay}
                    </span>
                  </div>
                  <div className="comparison__table-cell comparison__table-cell--competitor">
                    <span className="comparison__total comparison__total--bad">
                      {section.total.competitor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="comparison__cta">
          <a href="#connect" className="comparison__btn">
            Начать экономить сейчас
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

