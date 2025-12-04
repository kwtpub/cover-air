import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">Сервис</span>
            <span className="hero__title-line">для приема платежей</span>
            <span className="hero__title-line">по QR-кодам и NFC</span>
            <span className="hero__title-line">без терминала и</span>
            <span className="hero__title-line">кассового аппарата</span>
          </h1>

          <p className="hero__subtitle">Подключение и интеграция бесплатн<span className="hero__cursor">|</span></p>

          <div className="hero__buttons">
            <a href="#connect" className="hero__btn hero__btn--orange">
              Подключиться за 0 ₽
            </a>
            <a href="#partners" className="hero__btn hero__btn--green">
              Стать партнёром
            </a>
          </div>

          <div className="hero__badges">
            <div className="hero__badge">
              <span className="hero__badge-sk">Sk</span>
              <span className="hero__badge-atom">⚛</span>
              <span className="hero__badge-text">Участник</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero__video-player"
            >
              <source src="/video/1080-final_1_min.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
