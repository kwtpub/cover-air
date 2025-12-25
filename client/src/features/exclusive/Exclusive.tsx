import './Exclusive.css';

const Exclusive = () => {
  return (
    <section className="exclusive" id="exclusive">
      <div className="exclusive__container">
        <div className="exclusive__content">
          <h2 className="exclusive__title">
            Эксклюзив от <span className="exclusive__title-brand">UDMPAY</span>
          </h2>
          
          <p className="exclusive__subtitle">
            Эксклюзивная комиссия от 1% на приём платежей в России только для инвесторов и акционеров АО «УДМПЭЙ».
          </p>

          <p className="exclusive__description">
            Инвестирование в UDMPAY открывает для вас доступ к беспрецедентно выгодным условиям, позволяя вам значительно снизить операционные расходы и максимизировать вашу прибыль.
          </p>
        </div>

        <div className="exclusive__visual">
          <div className="exclusive__phone-hand">
            <div className="exclusive__phone">
              <div className="exclusive__phone-screen">
                <div className="exclusive__app-logo">UP</div>
                <div className="exclusive__app-percent">1%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;

