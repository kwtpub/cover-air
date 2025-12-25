import { useEffect, useState } from 'react';
import './AgentPage.css';

const AgentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState('WhatsApp');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, messenger });
    // Handle form submission
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="agent-page">
      {/* Hero Section */}
      <section className="agent-hero">
        <div className="agent-hero__content">
          <div className="agent-hero__left">
            <h1 className="agent-hero__title">
              Зарабатывайте с нами на инновационном сервисе по приему платежей
            </h1>
            <p className="agent-hero__subtitle">
              Стабильный доход от каждого проведенного платежа
            </p>
            <button onClick={handleOpenModal} className="agent-hero__btn">
              Получить предложение
            </button>
          </div>
          <div className="agent-hero__right">
            <div className="agent-hero__circle"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="agent-about">
        <div className="agent-about__container">
          <div className="agent-about__content">
            <div className="agent-about__text">
              <h2 className="agent-about__title">
                Что такое <span className="agent-about__title-brand">COVER AIR</span>
              </h2>
              <p>
                <span className="agent-about__highlight">COVER AIR</span> ― платежное решение на базе сервиса для приема платежей по QR-кодам и NFC <span className="agent-about__highlight">UDMPAY</span>. Мы создаем для организаций готовые онлайн-страницы. Технология не требует IT-разработки и смены банка. Для оплаты достаточно смартфона Apple или Android.
              </p>
              <p>
                Сервис подходит для любых организаций, принимающих платежи от населения. Все технологии и методы патентуются, что исключает копирование конкурентами. Первый патент No2022685673 получен 27.12.2022, еще 11 ― на стадии оформления.
              </p>
            </div>
            <div className="agent-about__logo">
              <div className="agent-about__logo-circle">
                <span>CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Agents Earn Section */}
      <section className="agent-earn">
        <div className="agent-earn__container">
          <h2 className="agent-earn__title">
            Как зарабатывают <span className="agent-earn__title-brand">наши агенты</span>
          </h2>
          
          <div className="agent-earn__steps">
            <div className="agent-earn__step-card agent-earn__step-card--pink">
              <div className="agent-earn__step-number">1</div>
              <div className="agent-earn__step-content">
                <p>Вы привлекаете компании-клиентов, готовых принимать платежи через сервис UDMPAY.</p>
              </div>
            </div>
            
            <div className="agent-earn__step-card agent-earn__step-card--orange">
              <div className="agent-earn__step-number">2</div>
              <div className="agent-earn__step-content">
                <p>Мы настраиваем интеграцию с сервисом UDMPAY и создаем для компании индивидуальную платежную страницу.</p>
              </div>
            </div>
            
            <div className="agent-earn__step-card agent-earn__step-card--cyan">
              <div className="agent-earn__step-number">3</div>
              <div className="agent-earn__step-content">
                <p>Техническая готовность к приему платежей.</p>
              </div>
            </div>
          </div>

          <div className="agent-earn__remuneration">
            <div className="agent-earn__remuneration-number">4</div>
            <div className="agent-earn__remuneration-card">
              <p className="agent-earn__remuneration-text">
                Процент агента от объема успешных платежей составляет 0,1%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="agent-modal" onClick={handleCloseModal}>
          <div className="agent-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="agent-modal__close" onClick={handleCloseModal}>
              ×
            </button>
            <h2 className="agent-modal__title">
              Создайте пассивный доход с UDMPAY!
            </h2>
            <p className="agent-modal__subtitle">
              Оставьте свои контакты и наш консультант пришлет все материалы
            </p>
            <form onSubmit={handleSubmit} className="agent-modal__form">
              <div className="agent-modal__field">
                <input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="agent-modal__field">
                <div className="agent-modal__phone-input">
                  <div className="agent-modal__phone-prefix">
                    <span className="agent-modal__phone-flag">🇷🇺</span>
                    <span>+7</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ marginLeft: '4px' }}>
                      <path d="M6 8L0 0h12L6 8z" fill="#000"/>
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="(000) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="agent-modal__field">
                <div className="agent-modal__select-wrapper">
                  <select
                    value={messenger}
                    onChange={(e) => setMessenger(e.target.value)}
                    required
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Viber">Viber</option>
                    <option value="Звонок">Звонок</option>
                  </select>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="agent-modal__select-arrow">
                    <path d="M6 8L0 0h12L6 8z" fill="#000"/>
                  </svg>
                </div>
              </div>
              <button type="submit" className="agent-modal__submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentPage;

