import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Зарабатывайте с нами", href: "#earn" },
    { label: "Агентам", href: "#agent" },
    { label: "Франчайзи", href: "#franchise" },
    { label: "Международные платежи", href: "#international" },
    { label: "Подключиться к сервису", href: "#connect" },
  ];

  return (
    <>
      <div
        className={`header__overlay ${isMenuOpen ? "header__overlay--visible" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header className="header">
        <div className="header__container">
          <a
            href="/"
            className="header__logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/ЛогоСАчерн.png"
              alt="COVER AIR"
              className="header__logo-img"
            />
          </a>

          <nav
            className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          >
            <ul className="header__nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="header__nav-item">
                  <a
                    href={item.href}
                    className="header__nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href === "#connect") {
                        // Переход на главную страницу с якорем
                        const currentHash = window.location.hash;
                        if (
                          currentHash &&
                          currentHash !== "#connect" &&
                          currentHash !== ""
                        ) {
                          // Если мы на другой странице, сначала переходим на главную
                          window.location.hash = "";
                          setTimeout(() => {
                            window.location.hash = "#connect";
                            setIsMenuOpen(false);
                          }, 50);
                        } else {
                          // Если уже на главной, просто скроллим к якорю
                          window.location.hash = "#connect";
                          setIsMenuOpen(false);
                          setTimeout(() => {
                            const element = document.getElementById("connect");
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }, 100);
                        }
                      } else {
                        window.location.hash = item.href;
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`header__burger ${isMenuOpen ? "header__burger--active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
