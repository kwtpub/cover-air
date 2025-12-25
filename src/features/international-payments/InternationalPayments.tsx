import { useEffect, useState } from 'react';
import './InternationalPayments.css';

const InternationalPayments = () => {
  const [country, setCountry] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState('WhatsApp');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ country, amount, phone, messenger });
  };

  return (
    <div className="intl-page">
      {/* Hero Section */}
      <section className="intl-hero">
        <div className="intl-hero__waves"></div>
        <div className="container">
          <h1 className="intl-hero__title">
            Международные платежи<br />
            для юридических и<br />
            физических лиц
          </h1>
          <p className="intl-hero__subtitle">
            Переводы, эквайринг, оплата за импорт и экспорт
          </p>
          <div className="intl-hero__button">
            <a href="#request" className="intl-hero__btn">
              Запрос на расчёт условий
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="intl-about">
        <div className="container">
          <div className="intl-about__content">
            <div className="intl-about__text">
              <h2 className="intl-about__title">
                Как работает <span className="intl-about__title-brand">COVER AIR</span>
              </h2>
              <p>
                <span className="intl-about__highlight">COVER AIR</span> ― платежное решение на базе международного платёжного сервиса <span className="intl-about__highlight">UDMPAY (UP)</span>. Мы помогаем юридическим и физическим лицам получать и отправлять платежи в любых странах 
                с учётом всех законодательных требований.
              </p>
              <p>
                При международных расчётах UDMPAY (UP) выступает платёжным агентом, принимает от вас 
                платёж в локальной валюте и переводит за вас денежные средства в другой стране в нужной 
                вам валюте, при этом денежные средства не пересекают границу, что позволяет производить 
                платежи даже при международных ограничениях.
              </p>
            </div>
            <div className="intl-about__logo">
              <div className="intl-about__logo-circle">
                <span>UP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Types Section */}
      <section className="intl-types">
        <div className="container">
          <h2 className="intl-types__title">
            Какие виды платежей<br />мы поддерживаем
          </h2>
          <div className="intl-types__grid">
            <div className="intl-types__card intl-types__card--gray">
              <div className="intl-types__number">1</div>
              <p className="intl-types__text">
                Платежи за импорт и экспорт для юридических лиц
              </p>
            </div>
            <div className="intl-types__card intl-types__card--black">
              <div className="intl-types__number">2</div>
              <p className="intl-types__text">
                Международный эквайринг для оплаты товаров и услуг онлайн и на торговых точках
              </p>
            </div>
            <div className="intl-types__card intl-types__card--cyan">
              <div className="intl-types__number">3</div>
              <p className="intl-types__text">
                Переводы между физическими лицами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="intl-request" id="request">
        <div className="container">
          <div className="intl-request__content">
            <h2 className="intl-request__title">Запрос на расчёт</h2>
            <p className="intl-request__subtitle">
              Оставьте заявку и наш консультант с вами свяжется.
            </p>
            <form className="intl-request__form" onSubmit={handleSubmit}>
              <div className="intl-request__field">
                <input
                  type="text"
                  placeholder="Страна и валюта"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="intl-request__field">
                <input
                  type="text"
                  placeholder="Сумма платежа"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className="intl-request__field">
                <input
                  type="tel"
                  placeholder="+7 (000) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="intl-request__field">
                <div className="intl-request__select-wrapper">
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
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="intl-request__select-arrow">
                    <path d="M6 8L0 0h12L6 8z" fill="#000"/>
                  </svg>
                </div>
              </div>
              <button type="submit" className="intl-request__btn">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalPayments;


