import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text">Cover Air</span>
            </div>
            <p className="footer__tagline">
              Сервис для приема платежей по QR-кодам и NFC
            </p>
            <div className="footer__badges">
              <div className="footer__badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l2 4 4.5.5-3.25 3 .75 4.5L8 11l-4 2 .75-4.5-3.25-3L6 5l2-4z" fill="currentColor"/>
                </svg>
                <span>Резидент Сколково</span>
              </div>
              <div className="footer__badge">
                <span>🏆 1-е место FinAward 2025</span>
              </div>
            </div>
          </div>

          <div className="footer__contacts">
            <h4>Контакты</h4>
            <a href="tel:73412770600" className="footer__contact">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a2 2 0 01-2 2h-1C7.373 19 1 12.627 1 5V3a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>+7-3412-770600</span>
            </a>
            <a href="mailto:sales@udmpay.ru" className="footer__contact">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="currentColor"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="currentColor"/>
              </svg>
              <span>sales@udmpay.ru</span>
            </a>
            <div className="footer__address">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 18s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>
                г. Ижевск, ул. Пушкинская, 247А<br/>
                (Торговый дом «Сделано в Удмуртии»)
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

          <div className="footer__social-section">
            <h4>Социальные сети</h4>
            <div className="footer__social">
              <a href="https://t.me/udmmarket" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Telegram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a href="https://vk.com/udmmarket" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="VK">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
              <a href="https://instagram.com/udmmarket" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 АО «УДМПЭЙ». Все права защищены.
          </p>
          <div className="footer__legal">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

