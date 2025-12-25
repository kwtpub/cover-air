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


          <div className="hero__buttons">
            <a href="#connect" className="hero__btn hero__btn--orange">
              Подключиться за 0 ₽
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image">
            <img 
              src="/images/process-pay.svg" 
              alt="Phone" 
              className="hero__image-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
