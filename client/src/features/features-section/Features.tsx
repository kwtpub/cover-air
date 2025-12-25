import './Features.css';

const Features = () => {
  const featureGroups = [
    {
      title: 'Удобно',
      titleAccent: 'для ваших клиентов',
      items: [
        'Платежи без регистрации и номера карты',
        'Через iPhone и Android',
        'Без мобильного приложения',
        'Чек сразу на экране смартфона',
      ],
    },
    {
      title: 'Удобно',
      titleAccent: 'для вас',
      items: [
        'Без программирования и смены банка',
        'Встроенные терминал и касса UDMPAY',
        'Без абонентской платы',
        'Работает без интернета и электричества',
      ],
    },
    {
      title: 'Безопасно и прозрачно',
      items: [
        'Программное обеспечение на территории России',
        'Полно соответствие 54-ФЗ по кассовым чекам',
        'Автоматизированный обмен данными с любыми форматами реестров и учетными системами',
      ],
    },
    {
      title: 'Экономно',
      items: [
        'Выгодная комиссия 1,65% «Всё включено»',
        'Не нужен платежный терминал',
        'Не нужен кассовый аппарат',
        'Сокращение издержек в 3-16 раз',
      ],
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features__background-text">
        <span>УДОБНО</span>
        <span>ЭКОНОМ</span>
      </div>
      
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">
            Преимущества <span className="features__title-brand">COVER AIR</span>
          </h2>
        </div>

        <div className="features__grid">
          {featureGroups.map((group, index) => (
            <div key={index} className="features__group">
              <h3 className="features__group-title">
                <span className="features__group-title-accent">{group.title}</span>
                {group.titleAccent && <span> {group.titleAccent}</span>}
              </h3>
              <ul className="features__list">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="features__item">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="features__patent">Патент №2022685673 от 27.12.2022</p>
      </div>
    </section>
  );
};

export default Features;
