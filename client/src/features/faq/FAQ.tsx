import { useState } from "react";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const formatTextWithBrand = (text: string): React.ReactNode[] => {
    // Заменяем проценты на 2%
    let formatted = text
      .replace(/\d+[.:]\d+%/g, "2%")
      .replace(/\d+%/g, (match) => {
        const num = parseInt(match);
        if (num > 0 && num < 10) return "2%";
        return match;
      });

    // Разбиваем текст на части и заменяем "Cover Air" на изображение
    const parts = formatted.split(/(Cover Air)/gi);
    return parts.map((part, index) =>
      part.toLowerCase() === "cover air" ? (
        <img
          key={index}
          src="/images/ЛогоСАбир.png"
          alt="Cover Air"
          className="faq__brand-logo"
        />
      ) : (
        part
      ),
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "Сколько стоит подключение к сервису?",
      answer: "Подключение бесплатно! Абонентской платы нет!",
    },
    {
      question:
        "Необходимо ли менять действующий банк при подключении к Cover Air?",
      answer:
        "Нет, банк менять не надо, сервис Cover Air можно подключить к любому банку.",
    },
    {
      question: "Как происходит оплата?",
      answer:
        "Ваш покупатель сканирует QR-код камерой своего смартфона или прикладывает смартфон к платёжному модулю Cover Air и подтверждает оплату в приложении любого банка РФ. Дополнительных приложений устанавливать не требуется. Оплата происходит моментально, и деньги зачисляются на ваш счёт в Cover Air. Вы получаете дневную выручку на свой расчётный счёт в любом банке на следующий рабочий день.",
    },
    {
      question:
        "Может ли клиент самостоятельно указывать сумму платежа при оплате через QR-код или NFC?",
      answer:
        "Вы можете настроить несколько способов приёма платежей. С фиксированной суммой, которую покупатель изменить не может, или дать возможность покупателю указывать или изменять сумму платежа. Принимайте платежи так, как вам удобно, с помощью Cover Air!",
    },
    {
      question:
        "Как принимать платежи по QR-коду через мессенджеры Telegram, WhatsApp, Viber или по электронной почте?",
      answer:
        "Вместо QR-кода вы можете отправить платёжную ссылку, перейдя по которой, покупатель сможет сразу произвести оплату, без использования камеры.",
    },
    {
      question: "Как вы обеспечиваете безопасность платежей и личных данных?",
      answer:
        "Все передаваемые данные надёжно шифруются по протоколу TLS. Безопасность платежных форм подтверждена международным сертификатом PCI DSS. Все данные хранятся на территории стран, в которых обслуживаются платёжные системы. Для России информация хранится на российских серверах с соблюдением всех правил и требований законодательства Российской Федерации.",
    },
    {
      question: "Как быстро происходит подключение к Cover Air?",
      answer:
        "Специалисты Cover Air весь функционал подключения берут на себя, от компании потребуется минимальный пакет документов и заявление для подсоединения к оферте, к стандартным услугам по приему платежей Cover Air понадобится от 1 до 3 дней.",
    },
    {
      question: "Нужно ли отбивать кассовый чек при оплате через Cover Air?",
      answer:
        "Да, но с помощью Cover Air это можно сделать без покупки кассы! Cover Air может отбивать чеки за вас и отправлять их в налоговую инспекцию и покупателю. Не нужно никакого оборудования и кассовых лент!",
    },
    {
      question: "От чего зависит размер комиссии?",
      answer:
        "Размер комиссии зависит от вида деятельности компании и от выбора подключенных услуг Cover Air по приему платежей. Комиссия составляет 2%.",
    },
    {
      question: "Когда денежные средства будут зачислены на расчетный счет?",
      answer:
        "Денежные средства будут зачислены на ваш расчётный счёт в любом банке РФ на следующий рабочий день. Не нужно открывать дополнительных расчётных счетов, работайте с любимыми банками и принимайте платежи выгодно с помощью Cover Air!",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <h2 className="faq__title">Ответы на частые вопросы</h2>

        <div className="faq__list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? "faq__item--open" : ""}`}
            >
              <button
                className="faq__question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{formatTextWithBrand(item.question)}</span>
                <svg
                  className="faq__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq__answer">
                <p>{formatTextWithBrand(item.answer)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
