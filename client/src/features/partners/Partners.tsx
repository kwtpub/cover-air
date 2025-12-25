import './Partners.css';

const Partners = () => {
  const partners = [
    { id: 1, name: 'Партнер 1', logo: '/images/partners/partner-1.png' },
    { id: 2, name: 'Партнер 2', logo: '/images/partners/partner-2.png' },
    { id: 3, name: 'Партнер 3', logo: '/images/partners/partner-3.png' },
    { id: 4, name: 'Партнер 4', logo: '/images/partners/partner-4.png' },
    { id: 5, name: 'Партнер 5', logo: '/images/partners/partner-5.png' },
    { id: 6, name: 'Партнер 6', logo: '/images/partners/partner-6.png' },
    { id: 7, name: 'Партнер 7', logo: '/images/partners/partner-7.png' },
    { id: 8, name: 'Партнер 8', logo: '/images/partners/partner-8.png' },
    { id: 9, name: 'Партнер 9', logo: '/images/partners/partner-9.png' },
    { id: 10, name: 'Партнер 10', logo: '/images/partners/partner-10.png' },
    { id: 11, name: 'Партнер 11', logo: '/images/partners/partner-11.png' },
    { id: 12, name: 'Партнер 12', logo: '/images/partners/partner-12.png' },
    { id: 13, name: 'Партнер 13', logo: '/images/partners/partner-13.png' },
    { id: 14, name: 'Партнер 14', logo: '/images/partners/partner-14.png' },
    { id: 15, name: 'Партнер 15', logo: '/images/partners/partner-15.png' },
    { id: 16, name: 'Партнер 16', logo: '/images/partners/partner-16.png' },
  ];

  return (
    <section className="partners">
      <div className="partners__container">
        <h2 className="partners__title">Партнеры</h2>
        <p className="partners__subtitle">Государственные и крупные корпорации</p>

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

