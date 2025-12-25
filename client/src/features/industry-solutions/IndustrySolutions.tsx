import './IndustrySolutions.css';

const IndustrySolutions = () => {
  const solutions = [
    {
      id: 'trade',
      title: 'ТОРГОВЛЯ',
      headline: 'Увеличьте прибыль торговой точки на 10%',
      features: [
        'Прием платежей по QR-кодам, NFC, ссылкам для мессенджеров, sms и e-mail',
        'Оплата курьерам',
        'Выездная торговля без терминала',
        'Интернет-магазины',
        'Стационарная розница',
      ],
      color: '#404040', // темно-серый
    },
    {
      id: 'housing',
      title: 'ЖКХ',
      headline: 'Собирайте на 30% больше платежей без просрочек',
      features: [
        'Прием коммунальных платежей без входа в личный кабинет',
        'Прием платежей без кассового узла',
        'Оплата капремонта, вывоза мусора и других услуг',
        'Выездные сборы платежей',
        'Сбор показаний приборов учета',
      ],
      color: 'var(--black-primary)', // черный
    },
    {
      id: 'education',
      title: 'ОБРАЗОВАНИЕ',
      headline: 'Автоматизируйте прием платежей и экономьте на ФОТ',
      features: [
        'Оплата за детские сады, школы и вузы',
        'Оплата за кружки и секции',
        'Попечительские взносы',
        'Продажа учебников',
        'Оплата за питание',
      ],
      color: '#008B8B', // темно-бирюзовый
    },
  ];

  return (
    <section className="industry-solutions" id="industry-solutions">
      <div className="industry-solutions__container">
        <h2 className="industry-solutions__title">Готовые отраслевые решения</h2>

        <div className="industry-solutions__grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="industry-solutions__card" style={{ '--card-color': solution.color, backgroundColor: solution.color, '--card-content-bg': solution.id === 'trade' ? 'rgba(64, 64, 64, 0.3)' : solution.id === 'housing' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 139, 139, 0.2)' } as React.CSSProperties}>
              <div className="industry-solutions__card-badge">
                <h3>{solution.title}</h3>
              </div>
              <div className="industry-solutions__card-content" style={{ backgroundColor: solution.id === 'trade' ? '#2a2a2a' : solution.id === 'housing' ? '#0f0f0f' : '#1a2a2a' } as React.CSSProperties}>
                <h4 className="industry-solutions__headline">{solution.headline}</h4>
                <ul className="industry-solutions__features">
                  {solution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="industry-solutions__btn" style={{ backgroundColor: solution.color }}>
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="industry-solutions__info">
          <p>Больше не надо подстраиваться под банки: выбирайте сами, как вам удобнее принимать платежи!</p>
          <p>Не нашли свою отрасль? Оставьте заявку и мы разработаем готовое решение для вашей сферы деятельности</p>
        </div>

        <a href="#connect" className="industry-solutions__cta">
          Получить<br />консультацию
        </a>
      </div>
    </section>
  );
};

export default IndustrySolutions;

