import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Membership from './pages/Membership';
import WhyChoose from './pages/WhyChoose';
import Chapters from './pages/Chapters';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = 'ICRDT - Indian Council for Robotics & Drone Technology';
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'certifications':
        return <Certifications />;
      case 'membership':
        return <Membership />;
      case 'why-choose':
        return <WhyChoose />;
      case 'chapters':
        return <Chapters />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="pt-36">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
