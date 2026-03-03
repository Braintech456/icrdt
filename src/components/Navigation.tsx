import { Menu, X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'chapters', label: 'Authorized Centers' },
    { id: 'membership', label: 'Membership' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div
              className="flex items-center cursor-pointer flex-shrink-0"
              onClick={() => handleNavClick('home')}
            >
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold font-merriweather text-navy-primary">
                  ICRDT
                </div>
              </div>
              <div className="ml-4 border-l border-gray-300 pl-4 hidden sm:block">
                <div className="text-xs text-gray-700 font-medium leading-tight font-inter">
                  Indian Council for<br />Robotics &amp; Drone Technology
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors font-inter ${
                    currentPage === item.id
                      ? 'text-royal-blue border-b-2 border-royal-blue'
                      : 'text-gray-700 hover:text-navy-primary'
                  }`}
                  style={{ fontSize: '15px' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                className="bg-royal-blue hover:bg-navy-primary text-white px-6 py-2.5 font-medium transition-colors font-inter"
                style={{ borderRadius: '6px' }}
              >
                Verify Certificate
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-gray-700 hover:text-navy-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-24 left-0 right-0 bg-white border-b border-gray-200 z-40 lg:hidden">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium font-inter ${
                    currentPage === item.id
                      ? 'bg-light-bg text-royal-blue'
                      : 'text-gray-700 hover:bg-light-bg'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="w-full bg-royal-blue text-white px-4 py-2.5 mt-4 font-medium text-sm font-inter"
                style={{ borderRadius: '6px' }}
              >
                Verify Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-100 border-t border-gray-200 pt-3 pb-3 fixed top-24 w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-inter text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-royal-blue flex-shrink-0" />
              <span>ISO 9001:2015 Certified Organization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-royal-blue flex-shrink-0" />
              <span>National-Level Robotics &amp; Drone Certification Body</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
