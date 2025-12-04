import { useState, useEffect } from 'react';
import { Header } from './shared/components/header';
import { Hero } from './features/hero';
import { Problem } from './features/problem';
import { Solution } from './features/solution';
import { Exclusive } from './features/exclusive';
import { HowItWorks } from './features/how-it-works';
import { Features } from './features/features-section';
import { Comparison } from './features/comparison';
import { FAQ } from './features/faq';
import { EarnWithUs } from './features/earn-with-us';
import { InvestorPage } from './features/investor';
import { ConnectForm } from './features/connect-form';
import { Footer } from './shared/components/footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'earn' | 'investor'>('home');

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      
      if (hash === '#earn') {
        setCurrentPage('earn');
      } else if (hash === '#investor') {
        setCurrentPage('investor');
      } else {
        setCurrentPage('home');
      }
      
      if (hash === '#earn' || hash === '#investor') {
        // Отменяем стандартное поведение скролла к якорю
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }, 0);
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

  if (currentPage === 'investor') {
    return (
      <div className="app">
        <Header />
        <main>
          <InvestorPage />
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
        <Exclusive />
        <HowItWorks />
        <Features />
        <Comparison />
        <FAQ />
        <ConnectForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
