import { useState } from 'react';
import './UseCases.css';

const UseCases = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const cases = [
    { id: 1, title: 'Розничная торговля', image: '/images/photo.webp' },
    { id: 2, title: 'Медицина', image: '/images/photo.webp' },
    { id: 3, title: 'Международные платежи', image: '/images/photo.webp' },
    { id: 4, title: 'Лицевые счета', image: '/images/photo.webp' },
    { id: 5, title: 'Салоны красоты', image: '/images/photo.webp' },
    { id: 6, title: 'Торговля на АЗС', image: '/images/photo.webp' },
    { id: 7, title: 'Билеты', image: '/images/photo.webp' },
    { id: 8, title: 'Кафе и рестораны', image: '/images/photo.webp' },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="use-cases">
      <div className="use-cases__container">
        <h2 className="use-cases__title">Сферы применения</h2>
        <p className="use-cases__subtitle">
          Торговля онлайн и оффлайн, экспорт, импорт, курьеры, «полевые» сотрудники
        </p>

        <div className="use-cases__grid">
          {cases.map((item) => (
            <div key={item.id} className="use-cases__card">
              <div className="use-cases__image-wrapper">
                <img src={item.image} alt={item.title} className="use-cases__image" />
                <div className="use-cases__overlay">
                  <span className="use-cases__card-title">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="use-cases__carousel">
          <button className="use-cases__btn use-cases__btn--prev" onClick={prevSlide}>
            ←
          </button>
          
          <div className="use-cases__carousel-wrapper">
            <div className="use-cases__carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {cases.map((item) => (
                <div key={item.id} className="use-cases__slide">
                  <div className="use-cases__image-wrapper">
                    <img src={item.image} alt={item.title} className="use-cases__image" />
                    <div className="use-cases__overlay">
                      <span className="use-cases__card-title">{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="use-cases__btn use-cases__btn--next" onClick={nextSlide}>
            →
          </button>
        </div>

        <div className="use-cases__dots">
          {cases.map((_, index) => (
            <button
              key={index}
              className={`use-cases__dot ${index === activeSlide ? 'use-cases__dot--active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>

        <div className="use-cases__cta">
          <a href="#connect" className="use-cases__cta-btn">
            Подключиться
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

