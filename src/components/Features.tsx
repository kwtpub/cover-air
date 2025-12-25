import './Features.css';

const Features = () => {
  const featureGroups = [
    {
      title: 'Удобно для вас',
      icon: '✨',
      color: '#6C63FF',
      items: [
        'Без программирования и смены банка',
        'Встроенные терминал и касса UDMPAY',
        'Без абонентской платы',
        'Работает без интернета и электричества',
      ],
    },
    {
      title: 'Удобно для клиентов',
      icon: '💫',
      color: '#00C853',
      items: [
        'Платежи без регистрации и номера карты',
        'Через iPhone и Android',
        'Без мобильного приложения',
        'Чек сразу на экране смартфона',
      ],
    },
    {
      title: 'Безопасно и прозрачно',
      icon: '🛡️',
      color: '#3B82F6',
      items: [
        'ПО на территории России',
        'Полное соответствие 54-ФЗ',
        'Автоматизированный обмен данными',
        'Сертификат PCI DSS',
      ],
    },
    {
      title: 'Экономно',
      icon: '💰',
      color: '#0ABAB5',
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
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">Преимущества</h2>
          <p className="features__subtitle">
            Всё, что нужно для приёма платежей в одном сервисе
          </p>
        </div>

        <div className="features__grid">
          {featureGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="features__card"
              style={{ '--accent-color': group.color } as React.CSSProperties}
            >
              <div className="features__card-header">
                <span className="features__card-icon">{group.icon}</span>
                <h3 className="features__card-title">{group.title}</h3>
              </div>
              <ul className="features__list">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="features__item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="features__patent">
          <div className="features__patent-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3 6 6.5.75-4.75 4.5 1.25 6.75L12 17l-6 3 1.25-6.75L2.5 8.75 9 8l3-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span>Патент №2022685673 от 27.12.2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

