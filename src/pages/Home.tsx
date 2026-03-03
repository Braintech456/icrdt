import { Award, Users, Building2, Briefcase, CheckCircle, Trophy, Target, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-navy-primary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-merriweather mb-4 leading-tight">
              Setting Benchmark Standards in Robotics & Drone Technology
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-inter mb-10 max-w-3xl mx-auto">
              India's Trusted Certification Body for Robotics, Drones & Automation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('certifications')}
                className="bg-royal-blue hover:bg-navy-primary text-white px-8 py-3 font-medium transition-colors font-inter"
                style={{ borderRadius: '6px' }}
              >
                Get Certified
              </button>
              <button
                onClick={() => onNavigate('membership')}
                className="border-2 border-white text-white hover:bg-white hover:text-navy-primary px-8 py-3 font-medium transition-colors font-inter"
                style={{ borderRadius: '6px' }}
              >
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white border border-gray-200" style={{ borderRadius: '6px' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-royal-blue text-white mb-4" style={{ borderRadius: '6px' }}>
                <Award size={24} />
              </div>
              <h3 className="text-base font-semibold font-merriweather text-navy-primary mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-gray-600 text-sm font-inter">Internationally recognized quality standards</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200" style={{ borderRadius: '6px' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-royal-blue text-white mb-4" style={{ borderRadius: '6px' }}>
                <Target size={24} />
              </div>
              <h3 className="text-base font-semibold font-merriweather text-navy-primary mb-2">Industry-Aligned Curriculum</h3>
              <p className="text-gray-600 text-sm font-inter">Designed with industry experts and leaders</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200" style={{ borderRadius: '6px' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-royal-blue text-white mb-4" style={{ borderRadius: '6px' }}>
                <Trophy size={24} />
              </div>
              <h3 className="text-base font-semibold font-merriweather text-navy-primary mb-2">National-Level Body</h3>
              <p className="text-gray-600 text-sm font-inter">Recognized professional certification authority</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200" style={{ borderRadius: '6px' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-royal-blue text-white mb-4" style={{ borderRadius: '6px' }}>
                <Zap size={24} />
              </div>
              <h3 className="text-base font-semibold font-merriweather text-navy-primary mb-2">Trusted by Institutions</h3>
              <p className="text-gray-600 text-sm font-inter">Partnership with leading educational bodies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-navy-primary mb-3">Our Impact</h2>
            <p className="text-gray-600 text-base font-inter">Building India's robotics and drone technology ecosystem</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-light-bg border border-gray-200" style={{ borderRadius: '6px' }}>
              <Users className="mx-auto text-royal-blue mb-4" size={40} />
              <div className="text-3xl font-bold font-merriweather text-navy-primary mb-2">5000+</div>
              <div className="text-gray-600 font-medium text-sm font-inter">Certified Professionals</div>
            </div>

            <div className="text-center p-6 bg-light-bg border border-gray-200" style={{ borderRadius: '6px' }}>
              <Building2 className="mx-auto text-royal-blue mb-4" size={40} />
              <div className="text-3xl font-bold font-merriweather text-navy-primary mb-2">150+</div>
              <div className="text-gray-600 font-medium text-sm font-inter">Partner Institutions</div>
            </div>

            <div className="text-center p-6 bg-light-bg border border-gray-200" style={{ borderRadius: '6px' }}>
              <Briefcase className="mx-auto text-royal-blue mb-4" size={40} />
              <div className="text-3xl font-bold font-merriweather text-navy-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium text-sm font-inter">Industry Experts</div>
            </div>

            <div className="text-center p-6 bg-light-bg border border-gray-200" style={{ borderRadius: '6px' }}>
              <Award className="mx-auto text-royal-blue mb-4" size={40} />
              <div className="text-3xl font-bold font-merriweather text-navy-primary mb-2">25+</div>
              <div className="text-gray-600 font-medium text-sm font-inter">Active Chapters</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-primary p-8 md:p-12 text-white text-center" style={{ borderRadius: '6px' }}>
            <h2 className="text-3xl md:text-4xl font-bold font-merriweather mb-3">Ready to Advance Your Career?</h2>
            <p className="text-lg text-gray-200 font-inter mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have validated their expertise with ICRDT certifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('certifications')}
                className="bg-royal-blue hover:bg-navy-primary text-white px-8 py-3 font-medium font-inter transition-colors"
                style={{ borderRadius: '6px' }}
              >
                Explore Certifications
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-navy-primary px-8 py-3 font-medium font-inter transition-colors"
                style={{ borderRadius: '6px' }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
