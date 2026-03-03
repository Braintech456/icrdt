import {
  User,
  Building2,
  Award,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Handshake,
  FileText,
  BookOpen,
  Target
} from 'lucide-react';

interface MembershipProps {
  onNavigate: (page: string) => void;
}

export default function Membership({ onNavigate }: MembershipProps) {

  const handleApplyClick = () => {
    onNavigate('contact');

    // small delay so page renders first
    setTimeout(() => {
      const section = document.getElementById('contact-form');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const individualBenefits = [
    {
      icon: Award,
      title: 'Professional Credibility',
      description: 'Use post-nominal titles (e.g., Member ICRDT) to enhance your professional identity'
    },
    {
      icon: TrendingUp,
      title: 'Exclusive Discounts',
      description: 'Special pricing on certifications, workshops, conferences, and training programs'
    },
    {
      icon: Users,
      title: 'National Network',
      description: 'Connect with a thriving community of robotics and drone technology professionals'
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Access career counseling, mentorship programs, and professional resume assistance'
    }
  ];

  const institutionalBenefits = [
    {
      icon: FileText,
      title: 'Curriculum Alignment',
      description: 'Industry-aligned curriculum support and institutional accreditation assistance'
    },
    {
      icon: GraduationCap,
      title: 'Faculty Development',
      description: 'Professional development programs and training for your teaching staff'
    },
    {
      icon: Target,
      title: 'Test Center Authorization',
      description: 'Become an authorized on-campus examination and certification center'
    },
    {
      icon: TrendingUp,
      title: 'Enhanced Placements',
      description: 'Strengthen industry connections and improve student placement outcomes'
    },
    {
      icon: BookOpen,
      title: 'Guest Lectures',
      description: 'Access to industry experts for guest lectures and specialized training sessions'
    },
    {
      icon: Handshake,
      title: 'Industry Projects',
      description: 'Facilitate internships, live projects, and hands-on industry collaboration'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ICRDT Membership
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join India's premier professional body for robotics and drone technology
          </p>
        </div>
      </section>

      {/* Individual */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Individual Membership
          </h2>
          <p className="text-lg text-gray-600">
            Elevate your professional standing and accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 mb-12">
          {individualBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2196F3] rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A2647] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleApplyClick}
            className="bg-[#2196F3] hover:bg-[#1976D2] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Apply for Individual Membership
          </button>
        </div>
      </section>

      {/* Institutional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Institutional Membership
          </h2>
          <p className="text-lg text-gray-600">
            Transform your institution into a center of excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mb-12">
          {institutionalBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2647] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleApplyClick}
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Partner as an Institution
          </button>
        </div>
      </section>

    </div>
  );
}