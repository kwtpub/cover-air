import { useEffect, useState } from 'react';
import './InternationalPayments.css';

const InternationalPayments = () => {
  const [phone, setPhone] = useState('+7');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/^\+7/, '');
    }
    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', phone);
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
              <h2 className="intl-about__title">Как работает</h2>
              <p>
                <span className="intl-about__brand">UDMPAY (UP)</span> ― международный платёжный сервис. 
                Мы помогаем юридическим и физическим лицам получать и отправлять платежи в любых странах 
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
            <div className="intl-types__card">
              <div className="intl-types__number">1</div>
              <p className="intl-types__text">
                Платежи за импорт и экспорт для юридических лиц
              </p>
            </div>
            <div className="intl-types__card">
              <div className="intl-types__number">2</div>
              <p className="intl-types__text">
                Международный эквайринг для оплаты товаров и услуг онлайн и на торговых точках
              </p>
            </div>
            <div className="intl-types__card">
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
              <input
                type="tel"
                className="intl-request__input"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+7"
              />
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


