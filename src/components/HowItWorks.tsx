import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Прикоснуться или отсканировать',
      description: 'Покупатель подносит телефон к NFC-модулю или сканирует QR-код камерой смартфона',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="4" width="32" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="12" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="38" r="2" fill="currentColor"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Оплата',
      description: 'Клиент выбирает банк и подтверждает платёж в приложении своего банка',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 18h36" stroke="currentColor" strokeWidth="2"/>
          <rect x="10" y="26" width="12" height="4" rx="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Получение чека',
      description: 'Чек автоматически отправляется покупателю и в налоговую. Всё в соответствии с 54-ФЗ',
      icon: (
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M12 8h24l-4 32H16L12 8z" stroke="currentColor" strokeWidth="2"/>
          <path d="M18 16h12M18 22h12M18 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 4l2 4M33 4l-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const useCases = [
    { label: 'в кафе', emoji: '☕' },
    { label: 'в фитнессе', emoji: '💪' },
    { label: 'в автомойке', emoji: '🚗' },
    { label: 'в магазине', emoji: '🛒' },
    { label: 'для курьеров', emoji: '📦' },
  ];

  return (
    <section className="how-it-works" id="how">
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">Как работает</h2>
          <p className="how-it-works__description">
            UDMPAY ― запатентованный сервис для приёма платежей. Оплата в 3 клика без установки приложений.
          </p>
          <div className="how-it-works__patent">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l2 4 4.5.5-3.25 3 .75 4.5L8 11l-4 2 .75-4.5-3.25-3L6 5l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span>Патент №2022685673 от 27.12.2022</span>
          </div>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works__step">
              <div className="how-it-works__step-icon">
                {step.icon}
              </div>
              <div className="how-it-works__step-number">{step.number}</div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-description">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="how-it-works__step-arrow">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M15 20h10M20 15l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works__use-cases">
          <span className="how-it-works__use-cases-label">Используйте везде:</span>
          <div className="how-it-works__use-cases-list">
            {useCases.map((useCase, index) => (
              <div key={index} className="how-it-works__use-case">
                <span className="how-it-works__use-case-emoji">{useCase.emoji}</span>
                <span>{useCase.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

