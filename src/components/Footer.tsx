import { Mail, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2647] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICRDT</h3>
            <p className="text-gray-300 text-sm mb-4">
              India's trusted certification body for robotics, drones, and automation technology.
              Setting benchmark standards for professional excellence.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Award size={16} />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  About ICRDT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('why-choose')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('chapters')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  Chapters
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => handleNavClick('certifications')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('membership')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  Individual Membership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('membership')}
                  className="hover:text-[#2196F3] transition-colors"
                >
                  Institutional Membership
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:icrdt.info@gmail.com"
                  className="hover:text-[#2196F3] transition-colors"
                >
                  icrdt.info@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  3rd Floor, Indira Heights,<br />
                  Gangapur Road,<br />
                  Nashik – 422005
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © 2024 ICRDT - Indian Council for Robotics & Drone Technology. All rights reserved.</p>
          <p className="mt-2">ISO 9001:2015 Certified Organization</p>
        </div>
      </div>
    </footer>
  );
}
