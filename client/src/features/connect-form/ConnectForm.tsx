import { useState } from "react";
import "./ConnectForm.css";
import { submitForm } from "../../shared/services/api";

const ConnectForm = () => {
  const [phone, setPhone] = useState("");
  const [messenger, setMessenger] = useState("WhatsApp");
  const [promo, setPromo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const result = await submitForm({
        phone,
        contactMethod: messenger,
        promo: promo || undefined,
      });

      if (result.success) {
        setMessage({
          type: "success",
          text: result.message || "Заявка успешно отправлена!",
        });
        setPhone("");
        setMessenger("WhatsApp");
        setPromo("");
      } else {
        setMessage({
          type: "error",
          text: result.message || "Ошибка при отправке формы",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Не удалось отправить форму. Попробуйте позже.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    "Зарегистрируем документы.",
    "Настроим подключение.",
    "Создадим платежную страницу.",
    "Обучим ваш персонал.",
    "Бесплатно выдадим платежные модули.",
  ];

  return (
    <section className="connect-form" id="connect">
      <div className="connect-form__container">
        <div className="connect-form__content">
          <h2 className="connect-form__title">Как подключиться</h2>
          <p className="connect-form__subtitle">
            Только отправьте заявку. Все остальное мы сделаем за вас:
          </p>

          <ul className="connect-form__steps">
            {steps.map((step, index) => (
              <li key={index} className="connect-form__step">
                <div className="connect-form__step-number">{index + 1}</div>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="connect-form__card">
          <div className="connect-form__card-header">
            <h3>Оставить заявку</h3>
            <p>Подключение бесплатно и занимает 1-3 дня</p>
          </div>

          <form onSubmit={handleSubmit} className="connect-form__form">
            <div className="connect-form__field">
              <label>Телефон</label>
              <div className="connect-form__phone-input">
                <div className="connect-form__phone-prefix">
                  <span className="connect-form__phone-flag">🇷🇺</span>
                  <span>+7</span>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    style={{ marginLeft: "4px" }}
                  >
                    <path d="M6 8L0 0h12L6 8z" fill="#000" />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="(000) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="connect-form__field">
              <label>Способ связи</label>
              <select
                value={messenger}
                onChange={(e) => setMessenger(e.target.value)}
              >
                <option value="WhatsApp">WhatsApp</option>
                <option value="Telegram">Telegram</option>
                <option value="Viber">Viber</option>
                <option value="Звонок">Звонок</option>
              </select>
            </div>

            <div className="connect-form__field">
              <label>Промокод (если есть)</label>
              <input
                type="text"
                placeholder="Промокод (если есть)"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="connect-form__submit"
              disabled={isLoading}
            >
              {isLoading ? "Отправка..." : "Отправить"}
            </button>
            {message && (
              <div
                className={`connect-form__message connect-form__message--${message.type}`}
              >
                {message.text}
              </div>
            )}
          </form>

          <p className="connect-form__disclaimer">
            Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
