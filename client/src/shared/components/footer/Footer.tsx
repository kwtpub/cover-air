import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/images/ЛогоСАбир.png"
                alt="Cover Air"
                className="footer__logo-img"
              />
            </div>
            <p className="footer__tagline">
              Сервис для приема платежей по QR-кодам и NFC
            </p>
          </div>

          <div className="footer__contacts">
            <h4>Контакты</h4>
            <a href="mailto:info@coverair.ru" className="footer__contact">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  fill="currentColor"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  fill="currentColor"
                />
              </svg>
              <span>info@coverair.ru</span>
            </a>
            <div className="footer__address">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 18s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="10"
                  cy="8"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>
                127106, г.Москва, Нововладыкинский проезд, д.8, стр.3 оф 104, БЦ
                "Красивый Дом"
              </span>
            </div>
          </div>

          <div className="footer__links">
            <h4>Навигация</h4>
            <nav className="footer__nav">
              <a href="#problem">О сервисе</a>
              <a href="#how">Как работает</a>
              <a href="#features">Преимущества</a>
              <a href="#faq">Вопросы</a>
              <a href="#connect">Подключение</a>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 ООО "ЕСТЭК" совместно с АО "УДМПЭЙ". Все права защищены.
          </p>
          <div className="footer__legal">
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
