import { useEffect, useState } from 'react';
import './FranchisePage.css';
import { submitForm } from '../../shared/services/api';

const FranchisePage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState('WhatsApp');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const result = await submitForm({
        phone,
        contactMethod: messenger,
      });

      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Заявка успешно отправлена!' });
        setName('');
        setPhone('');
        setMessenger('WhatsApp');
      } else {
        setMessage({ 
          type: 'error', 
          text: result.message || 'Ошибка при отправке формы' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Не удалось отправить форму. Попробуйте позже.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="franchise-page">
      {/* Hero Section */}
      <section className="franchise-hero">
        <div className="franchise-hero__content">
          <div className="franchise-hero__left">
            <h1 className="franchise-hero__title">
              Купите франшизу платежного сервиса
            </h1>
            <p className="franchise-hero__subtitle">
              Вы сами выбираете формат сотрудничества и размер комиссии с платежей
            </p>
          </div>
          <div className="franchise-hero__right">
            <div className="franchise-hero__chart">
              <svg viewBox="0 0 200 200" className="franchise-hero__chart-svg">
                {/* Сектор 1 - Тиффани (50% = 180°) от -90° до 90° */}
                <path
                  d="M 100 100 L 100 20 A 80 80 0 0 1 100 180 Z"
                  fill="#0ABAB5"
                />
                {/* Сектор 2 - Серый (30% = 108°) от 90° до 198° */}
                <path
                  d="M 100 100 L 100 180 A 80 80 0 0 1 24 75 Z"
                  fill="#404040"
                />
                {/* Сектор 3 - Черный (20% = 72°) от 198° до 270° (или -90°) */}
                <path
                  d="M 100 100 L 24 75 A 80 80 0 0 1 100 20 Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Offer Section */}
      <section className="franchise-offer">
        <div className="franchise-offer__container">
          <h2 className="franchise-offer__title">Предлагаем франшизу</h2>
          <div className="franchise-offer__grid">
            <div className="franchise-offer__card" style={{ '--card-color': '#0ABAB5', backgroundColor: '#E0E0E0', '--card-content-bg': 'rgba(10, 186, 181, 0.2)' } as React.CSSProperties}>
              <div className="franchise-offer__card-badge">
                <h3>ФРАНШИЗА</h3>
              </div>
              <div className="franchise-offer__card-content" style={{ backgroundColor: '#F5F5F5' } as React.CSSProperties}>
                <h4 className="franchise-offer__headline">От 20 млн руб</h4>
                <ul className="franchise-offer__features">
                  <li>Инвестируйте в платежный сервис</li>
                  <li>Получайте стабильный доход</li>
                  <li>Выбирайте формат сотрудничества</li>
                  <li>Определяйте размер комиссии</li>
                </ul>
                <button className="franchise-offer__btn" style={{ backgroundColor: '#0ABAB5' }}>
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="franchise-questions">
        <div className="franchise-questions__container">
          <h2 className="franchise-questions__title">Остались вопросы?</h2>
          <p className="franchise-questions__subtitle">
            Оставьте свои контакты и наш консультант свяжется с вами
          </p>
          
          <div className="franchise-questions__card">
            <form onSubmit={handleSubmit} className="franchise-questions__form">
              <div className="franchise-questions__field">
                <label>Имя</label>
                <input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="franchise-questions__field">
                <label>Телефон</label>
                <div className="franchise-questions__phone-input">
                  <div className="franchise-questions__phone-prefix">
                    <span className="franchise-questions__phone-flag">🇷🇺</span>
                    <span>+7</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ marginLeft: '4px' }}>
                      <path d="M6 8L0 0h12L6 8z" fill="#000"/>
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="(000) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="franchise-questions__field">
                <label>Способ связи</label>
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
              </div>
              <button 
                type="submit" 
                className="franchise-questions__submit"
                disabled={isLoading}
              >
                {isLoading ? 'Отправка...' : 'Отправить'}
              </button>
              {message && (
                <div className={`franchise-questions__message franchise-questions__message--${message.type}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;

