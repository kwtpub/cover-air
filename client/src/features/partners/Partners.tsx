import "./Partners.css";

const Partners = () => {
  const partners = [
    { id: 2, name: "Партнер 2", logo: "/images/partners/partner-2.png" },
    { id: 3, name: "Партнер 3", logo: "/images/partners/partner-3.png" },
    { id: 4, name: "Партнер 4", logo: "/images/partners/partner-4.png" },
  ];

  return (
    <section className="partners">
      <div className="partners__container">
        <h2 className="partners__title">Партнеры</h2>
        <p className="partners__subtitle">
          Государственные и крупные корпорации
        </p>

        <div className="partners__grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partners__card">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partners__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
