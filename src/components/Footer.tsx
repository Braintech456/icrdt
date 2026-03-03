import { Mail, MapPin, Award, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-merriweather mb-4">ICRDT</h3>
            <p className="text-gray-300 text-sm mb-4 font-inter leading-relaxed">
              India's trusted certification body for robotics, drones, and automation technology. 
              Setting benchmark standards for professional excellence.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-300 font-inter">
              <Award size={16} />
              <span>ISO 9001:2015 Certified Organization</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-merriweather mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-300 font-inter text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-royal-blue transition-colors"
                >
                  About ICRDT
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('certifications')}
                  className="hover:text-royal-blue transition-colors"
                >
                  Certifications
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('authorized-centers')}
                  className="hover:text-royal-blue transition-colors"
                >
                  Authorized Centers
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('verify')}
                  className="hover:text-royal-blue transition-colors"
                >
                  Verify Certificate
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-royal-blue transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-merriweather mb-4">
              Membership
            </h4>

            <ul className="space-y-2 text-gray-300 font-inter text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('membership')}
                  className="hover:text-royal-blue transition-colors"
                >
                  Individual Membership
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavClick('membership')}
                  className="hover:text-royal-blue transition-colors"
                >
                  Institutional Membership
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-merriweather mb-5">
              Contact Information
            </h4>

            <ul className="space-y-5 text-gray-300 text-sm font-inter">

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-royal-blue" />
                <div className="leading-relaxed">
                  Head Office: Kaushal, 1st Floor, Near Gauri Shankar Mandir, 
                  Sector 9A, Gurugram - 122 001
                  <br /><br />
                  Regional Office: 3rd Floor, Indira Heights, Old Gangapur Naka, 
                  Gangapur Road, Nashik - 422 005
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-royal-blue flex-shrink-0" />
                <a
                  href="tel:+919324352753"
                  className="hover:text-royal-blue transition-colors"
                >
                  +91 93243 52753
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-royal-blue flex-shrink-0" />
                <a
                  href="mailto:icrdt.info@gmail.com"
                  className="hover:text-royal-blue transition-colors"
                >
                  icrdt.info@gmail.com
                </a>
              </li>

              {/* Office Hours */}
              <li className="pt-4 border-t border-gray-700">
                <h5 className="font-semibold text-white mb-2">Office Hours</h5>
                <div className="text-gray-300">
                  Mon – Fri: 9:00 AM – 6:00 PM<br />
                  Sat: 9:00 AM – 2:00 PM
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm font-inter">
          <p>
            © 2024 ICRDT - Indian Council for Robotics & Drone Technology. All rights reserved.
          </p>
          <p className="mt-2">
            ISO 9001:2015 Certified Organization
          </p>
        </div>
      </div>
    </footer>
  );
}