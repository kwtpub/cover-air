import { useEffect } from 'react';
import PipelineBackground from './PipelineBackground';
import './EarnWithUs.css';

const EarnWithUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="earn-page">
      {/* Hero Section */}
      <section className="earn-hero">
        <PipelineBackground />
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
            Чтобы стать партнером инновационного платежного сервиса Cover Air,<br />
            не нужны знания финансовых рынков и программирования.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EarnWithUs;
