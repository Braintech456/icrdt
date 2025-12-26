import { Award, Users, Building2, Briefcase, CheckCircle, Trophy, Target, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="text-[#FF6B35]" size={20} />
              <span className="text-sm font-medium">ISO 9001:2015 Certified Organization</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Setting Benchmark Standards in<br />
              <span className="text-[#2196F3]">Robotics & Drone Technology</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              India's Trusted Certification Body for Robotics, Drones & Automation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('certifications')}
                className="bg-[#2196F3] hover:bg-[#1976D2] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Certified
              </button>
              <button
                onClick={() => onNavigate('membership')}
                className="bg-white hover:bg-gray-100 text-[#0A2647] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2196F3] rounded-full mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-[#0A2647] mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-gray-600 text-sm">Internationally recognized quality standards</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-full mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-[#0A2647] mb-2">Industry-Aligned Curriculum</h3>
              <p className="text-gray-600 text-sm">Designed with industry experts and leaders</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2196F3] rounded-full mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-[#0A2647] mb-2">National-Level Body</h3>
              <p className="text-gray-600 text-sm">Recognized professional certification authority</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-full mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-[#0A2647] mb-2">Trusted by Institutions</h3>
              <p className="text-gray-600 text-sm">Partnership with leading educational bodies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">Our Impact</h2>
            <p className="text-gray-600 text-lg">Building India's robotics and drone technology ecosystem</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Users className="mx-auto text-[#2196F3] mb-4" size={48} />
              <div className="text-4xl font-bold text-[#0A2647] mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Certified Professionals</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Building2 className="mx-auto text-[#FF6B35] mb-4" size={48} />
              <div className="text-4xl font-bold text-[#0A2647] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Partner Institutions</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Briefcase className="mx-auto text-[#2196F3] mb-4" size={48} />
              <div className="text-4xl font-bold text-[#0A2647] mb-2">200+</div>
              <div className="text-gray-600 font-medium">Industry Experts</div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Award className="mx-auto text-[#FF6B35] mb-4" size={48} />
              <div className="text-4xl font-bold text-[#0A2647] mb-2">25+</div>
              <div className="text-gray-600 font-medium">Active Chapters</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have validated their expertise with ICRDT certifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('certifications')}
                className="bg-[#2196F3] hover:bg-[#1976D2] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Explore Certifications
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-gray-100 text-[#0A2647] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
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
