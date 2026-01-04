import { useEffect } from "react";
import PipelineBackground from "./PipelineBackground";
import "./EarnWithUs.css";

const EarnWithUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="earn-page">
      {/* Hero Section */}
      <section className="earn-hero">
        <PipelineBackground />
        <div className="earn-hero__waves"></div>
        <div className="container">
          <h1 className="earn-hero__title">
            Зарабатывайте
            <br />с нами
          </h1>
          <div className="earn-hero__buttons">
            <a
              href="#franchise"
              className="earn-hero__btn earn-hero__btn--orange"
            >
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
            Вы сами выбираете
            <br />
            формат сотрудничества
          </h2>
          <div className="earn-format__options">
            <div className="earn-format__option">
              <div className="earn-format__icon earn-format__icon--pink">
                <img
                  src="/images/Рубли монеты-no-bg-preview (carve.photos).png"
                  alt="Пассивный доход"
                />
              </div>
              <p className="earn-format__label">
                Получать
                <br />
                пассивный доход
              </p>
            </div>
            <div className="earn-format__option">
              <div className="earn-format__icon earn-format__icon--orange">
                <img
                  src="/images/Гистограмма_роста_no_bg_preview_carve_photos.png"
                  alt="Развивать бизнес"
                />
              </div>
              <p className="earn-format__label">
                Развивать
                <br />
                свой бизнес
              </p>
            </div>
            <div className="earn-format__option">
              <div className="earn-format__icon earn-format__icon--cyan">
                <img
                  src="/images/Процент в круге.png"
                  alt="Получать комиссию"
                />
              </div>
              <p className="earn-format__label">
                Получать комиссию с<br />
                платежей
              </p>
            </div>
          </div>
          <p className="earn-format__text">
            Чтобы стать партнером инновационного платежного сервиса Cover Air,
            <br />
            не нужны знания финансовых рынков и программирования.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EarnWithUs;
