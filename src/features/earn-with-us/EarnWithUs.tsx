import { useEffect } from 'react';
import './EarnWithUs.css';

const EarnWithUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="earn-page">
      {/* Hero Section */}
      <section className="earn-hero">
        <div className="earn-hero__waves"></div>
        <div className="container">
          <h1 className="earn-hero__title">
            Зарабатывайте<br />с нами
          </h1>
          <div className="earn-hero__buttons">
            <a href="#investor" className="earn-hero__btn earn-hero__btn--pink">
              Инвестировать и купить долю
            </a>
            <a href="#franchise" className="earn-hero__btn earn-hero__btn--orange">
              Купить франшизу
            </a>
            <a href="#agent" className="earn-hero__btn earn-hero__btn--cyan">
              Стать агентом
            </a>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="earn-format">
        <div className="earn-format__waves"></div>
        <div className="container">
          <h2 className="earn-format__title">
            Вы сами выбираете<br />формат сотрудничества
          </h2>
          <div className="earn-format__options">
            <div className="earn-format__option">
              <div className="earn-format__icon earn-format__icon--pink">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="12" r="4"/>
                  <circle cx="24" cy="20" r="4"/>
                  <circle cx="40" cy="20" r="4"/>
                  <circle cx="16" cy="28" r="4"/>
                  <circle cx="32" cy="28" r="4"/>
                  <circle cx="48" cy="28" r="4"/>
                  <path d="M20 36h24v4H20z"/>
                  <path d="M16 42h32v4H16z"/>
                  <path d="M12 48h40v4H12z"/>
                  <path d="M32 20 L40 28 L48 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="earn-format__label">Получать<br />пассивный доход</p>
            </div>
            <div className="earn-format__option">
              <div className="earn-format__icon earn-format__icon--orange">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <rect x="8" y="48" width="8" height="8"/>
                  <rect x="20" y="38" width="8" height="18"/>
                  <rect x="32" y="28" width="8" height="28"/>
                  <rect x="44" y="18" width="8" height="38"/>
                  <path d="M50 12 L56 18 L50 24" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="50" y1="18" x2="44" y2="18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <p className="earn-format__label">Развивать<br />свой бизнес</p>
            </div>
            <div className="earn-format__option">
              <div className="earn-format__icon earn-format__icon--cyan">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8 L28 20 L16 20 L26 28 L22 40 L32 32 L42 40 L38 28 L48 20 L36 20 Z"/>
                  <text x="32" y="36" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor">%</text>
                </svg>
              </div>
              <p className="earn-format__label">Получать комиссию с<br />платежей</p>
            </div>
          </div>
          <p className="earn-format__text">
            Чтобы стать партнером инновационного платежного сервиса UDMPAY,<br />
            не нужны знания финансовых рынков и программирования.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="earn-about">
        <div className="container">
          <div className="earn-about__content">
            <div className="earn-about__text">
              <h2 className="earn-about__title">
                Что такое <span className="earn-about__brand">UDMPAY</span>
              </h2>
              <p>
                Мы создаем для организаций готовые онлайн-страницы для{' '}
                <span className="earn-about__link">приема платежей по QR-кодам и NFC</span>.
                Технология не требует IT-разработки и смены банка. Для оплаты достаточно смартфона Apple или Android.
              </p>
              <p>
                Сервис подходит для любых организаций, принимающих платежи от населения.
                Все технологии и методы патентуются, что исключает копирование конкурентами.
                Первый патент No2022685673 получен 27.12.2022, еще 11 ― на стадии оформления.
              </p>
            </div>
            <div className="earn-about__logo">
              <div className="earn-about__logo-circle">
                <span>UP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="earn-cards">
        <div className="container">
          <h2 className="earn-cards__title">Зарабатывайте с нами</h2>
          <div className="earn-cards__list">
            <div className="earn-card earn-card--pink" id="invest">
              <div className="earn-card__icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4"/>
                  <path d="M32 16 L40 32 L32 32 Z" />
                  <circle cx="32" cy="32" r="4"/>
                </svg>
              </div>
              <div className="earn-card__content">
                <h3 className="earn-card__title">Стать инвестором</h3>
                <ul className="earn-card__list">
                  <li>Купите долю в нашей компании и заработайте на росте бизнеса</li>
                  <li>Резидент Фонда «Сколково», 1-е место в FinAward 2025</li>
                  <li>91% доходность за 2024 год</li>
                </ul>
              </div>
              <a href="#investor" className="earn-card__btn">
                Подробнее
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            <div className="earn-card earn-card--orange" id="franchise">
              <div className="earn-card__icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <circle cx="32" cy="32" r="24"/>
                  <text x="32" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#fff">UP</text>
                </svg>
              </div>
              <div className="earn-card__content">
                <h3 className="earn-card__title">Купить франшизу</h3>
                <ul className="earn-card__list">
                  <li>Создадим платёжный сервис под вашим брендом (White Label)</li>
                  <li>Вы сами выбираете формат сотрудничества и комиссию с платежей</li>
                </ul>
              </div>
              <a href="#franchise-details" className="earn-card__btn">
                Подробнее
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            <div className="earn-card earn-card--cyan" id="agent">
              <div className="earn-card__icon">
                <svg viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8 L28 20 L16 20 L26 28 L22 40 L32 32 L42 40 L38 28 L48 20 L36 20 Z"/>
                  <text x="32" y="36" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor">%</text>
                </svg>
              </div>
              <div className="earn-card__content">
                <h3 className="earn-card__title">Стать агентом</h3>
                <ul className="earn-card__list">
                  <li>Зарабатывайте на комиссии с платежей</li>
                  <li>Получайте вознаграждение каждый месяц</li>
                </ul>
              </div>
              <a href="#agent-details" className="earn-card__btn">
                Подробнее
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarnWithUs;
