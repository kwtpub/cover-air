import './Partners.css';

const Partners = () => {
  const partnerOptions = [
    {
      title: 'Стать инвестором',
      icon: '📈',
      benefits: [
        'Купите долю в нашей компании и заработайте на росте бизнеса',
        'Резидент Фонда «Сколково», 1-е место в FinAward 2025',
        '91% доходность за 2024 год',
      ],
      link: '#investors',
      color: '#6C63FF',
    },
    {
      title: 'Купить франшизу',
      icon: '🏢',
      benefits: [
        'Создадим платёжный сервис под вашим брендом (White Label)',
        'Вы сами выбираете формат сотрудничества и комиссию с платежей',
      ],
      link: '#franchise',
      color: '#00C853',
    },
    {
      title: 'Стать агентом',
      icon: '🤝',
      benefits: [
        'Зарабатывайте на комиссии с платежей',
        'Получайте вознаграждение каждый месяц',
      ],
      link: '#agents',
      color: '#0ABAB5',
    },
  ];

  const reviews = [
    {
      text: 'Благодаря UDMPAY мои клиенты могут быстро и безопасно производить платежи с помощью своих смартфонов. Это упростило процесс оформления заказа, и я заметил увеличение продаж.',
      author: 'Тимур',
      role: 'Доставка заказов',
    },
    {
      text: 'С UDMPAY я больше не теряю клиентов, которые не имеют наличных или карту под рукой. Они могут быстро и удобно оплатить прикосновением телефона, а я экономлю на комиссии!',
      author: 'Ирина',
      role: 'Владелец кафе',
    },
    {
      text: 'С помощью UDMPAY мы смогли упростить процесс оплаты наших услуг для клиентов. Теперь они могут оплатить через NFC в любое время и в любом месте!',
      author: 'Андрей',
      role: 'Владелец салона красоты',
    },
  ];

  return (
    <section className="partners" id="earn">
      <div className="partners__container">
        <div className="partners__header">
          <h2 className="partners__title">Зарабатывайте с нами</h2>
          <p className="partners__subtitle">
            Выберите удобный формат сотрудничества
          </p>
        </div>

        <div className="partners__grid">
          {partnerOptions.map((option, index) => (
            <div
              key={index}
              className="partners__card"
              style={{ '--accent-color': option.color } as React.CSSProperties}
            >
              <div className="partners__card-icon">{option.icon}</div>
              <h3 className="partners__card-title">{option.title}</h3>
              <ul className="partners__card-benefits">
                {option.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href={option.link} className="partners__card-btn">
                Подробнее
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="partners__reviews">
          <h3 className="partners__reviews-title">Отзывы от 1000+ клиентов</h3>
          <div className="partners__reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="partners__review">
                <div className="partners__review-quote">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M13 8H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4l2 4V10c0-1.1-.9-2-2-2zm14 0h-6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4l2 4V10c0-1.1-.9-2-2-2z" fill="currentColor" opacity="0.2"/>
                  </svg>
                </div>
                <p className="partners__review-text">{review.text}</p>
                <div className="partners__review-author">
                  <div className="partners__review-avatar">
                    {review.author[0]}
                  </div>
                  <div>
                    <div className="partners__review-name">{review.author}</div>
                    <div className="partners__review-role">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

