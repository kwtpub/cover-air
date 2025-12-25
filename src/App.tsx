import { useState, useEffect } from 'react';
import { Header } from './shared/components/header';
import { Hero } from './features/hero';
import { Problem } from './features/problem';
import { Solution } from './features/solution';
import { HowItWorks } from './features/how-it-works';
import { Features } from './features/features-section';
import { UseCases } from './features/use-cases';
import { Partners } from './features/partners';
import { IndustrySolutions } from './features/industry-solutions';
import { FAQ } from './features/faq';
import { EarnWithUs } from './features/earn-with-us';
import { AgentPage } from './features/agent';
import { FranchisePage } from './features/franchise';
import { InternationalPayments } from './features/international-payments';
import { ComparisonTable } from './features/comparison-table';
import { CoverAirProcess } from './features/cover-air-process';
import { ConnectForm } from './features/connect-form';
import { Footer } from './shared/components/footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'earn' | 'agent' | 'franchise' | 'international'>('home');

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      
      if (hash === '#earn') {
        setCurrentPage('earn');
      } else if (hash === '#agent') {
        setCurrentPage('agent');
      } else if (hash === '#franchise') {
        setCurrentPage('franchise');
      } else if (hash === '#international') {
        setCurrentPage('international');
      } else {
        setCurrentPage('home');
      }
      
      if (hash === '#earn' || hash === '#agent' || hash === '#franchise' || hash === '#international') {
        // Отменяем стандартное поведение скролла к якорю
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }, 0);
      } else if (hash === '#connect') {
        // Для #connect просто скроллим к якорю на главной странице
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.getElementById('connect');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);

    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (currentPage === 'earn') {
    return (
      <div className="app">
        <Header />
        <main>
          <EarnWithUs />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'agent') {
    return (
      <div className="app">
        <Header />
        <main>
          <AgentPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'franchise') {
    return (
      <div className="app">
        <Header />
        <main>
          <FranchisePage />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'international') {
    return (
      <div className="app">
        <Header />
        <main>
          <InternationalPayments />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ComparisonTable />
        <CoverAirProcess />
        <Features />
        <UseCases />
        <Partners />
        <IndustrySolutions />
        <ConnectForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
