import { Award, CheckCircle, TrendingUp, Briefcase, Star, Bot, Plane, Cpu, Zap } from 'lucide-react';

export default function Certifications() {
  const benefits = [
    {
      icon: Award,
      title: 'Industry-Endorsed Curriculum',
      description: 'Certification content developed in collaboration with leading industry experts and organizations'
    },
    {
      icon: CheckCircle,
      title: 'Job-Ready Skill Validation',
      description: 'Demonstrate verified competencies that employers trust and value'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth & Salary Impact',
      description: 'Certified professionals command higher salaries and faster career advancement'
    },
    {
      icon: Star,
      title: 'Prestige & Professional Recognition',
      description: 'Join an elite community of certified professionals recognized across the industry'
    }
  ];

  const certifications = [
    {
      icon: Bot,
      title: 'Certified Robotics Professional',
      code: 'CRP',
      description: 'Comprehensive certification covering robotics fundamentals, design, programming, and industrial applications',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Plane,
      title: 'Certified Drone Technology Professional',
      code: 'CDTP',
      description: 'Specialized certification in drone technology, operations, regulations, and advanced aerial applications',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Cpu,
      title: 'Industrial Automation Specialist',
      code: 'IAS',
      description: 'Expert-level certification in PLC programming, SCADA systems, and industrial automation solutions',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'AI in Robotics Specialist',
      code: 'AIRS',
      description: 'Advanced certification in artificial intelligence, machine learning, and intelligent robotics systems',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="text-[#FF6B35]" size={20} />
              <span className="text-sm font-medium">Professional Certifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ICRDT Certifications</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Validate your expertise with industry-recognized certifications
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              A Mark of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An ICRDT certification is not just a certificate; it is a mark of excellence that validates your professional competency and commitment to the highest standards in robotics and drone technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#2196F3] transition-all transform hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2196F3] rounded-lg mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A2647] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Our Certification Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the certification that aligns with your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{cert.title}</h3>
                        <p className="text-sm opacity-90">Certification Code: {cert.code}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Industry-recognized certification</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Comprehensive assessment</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>Career advancement support</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#2196F3] hover:bg-[#1976D2] text-white py-3 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Certified?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Take the next step in your professional journey with ICRDT certification
            </p>
            <button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Start Your Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
