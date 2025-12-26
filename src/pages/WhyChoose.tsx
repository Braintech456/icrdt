import { Target, Shield, Users, Lightbulb, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Target,
      title: 'Industry-Relevant Standards',
      description: 'Our certification standards are developed in close collaboration with industry leaders, ensuring that every competency framework reflects real-world requirements and emerging technology trends.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Credible Assessment Mechanism',
      description: 'Rigorous, unbiased evaluation processes conducted by experienced professionals guarantee that every certified individual has demonstrated genuine expertise and practical capabilities.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'National Professional Ecosystem',
      description: 'Join a thriving community of robotics and drone technology professionals across India, with access to networking, knowledge sharing, and collaborative opportunities.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Focus on Safety, Ethics & Innovation',
      description: 'We emphasize responsible technology use, ethical practices, and innovation-driven approaches that ensure sustainable and safe advancement in robotics and drone applications.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Strong Academic-Industry Linkage',
      description: 'Bridge the gap between theoretical education and practical industry needs through our extensive partnerships with universities, colleges, and leading technology companies.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Professional Development',
      description: 'Access ongoing training, workshops, and upskilling programs that keep you at the forefront of technological advancements throughout your career.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ICRDT</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in professional excellence and career advancement
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ICRDT stands as India's premier certification body, combining rigorous standards with industry relevance and professional support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${reason.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold">{reason.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2647] mb-6">
                The ICRDT Advantage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                When you choose ICRDT, you're not just getting a certification—you're gaining access to a comprehensive ecosystem designed to support your professional journey at every stage.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0A2647] mb-1">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600 text-sm">International quality management standards</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0A2647] mb-1">Industry Recognition</h4>
                    <p className="text-gray-600 text-sm">Trusted by leading companies and organizations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0A2647] mb-1">Expert Assessment</h4>
                    <p className="text-gray-600 text-sm">Evaluated by experienced industry professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0A2647] mb-1">Nationwide Network</h4>
                    <p className="text-gray-600 text-sm">25+ chapters across India for local support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#0A2647] mb-1">Career Support</h4>
                    <p className="text-gray-600 text-sm">Mentorship, counseling, and placement assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">By the Numbers</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-[#2196F3] pl-6">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-gray-200">Certified professionals driving innovation across industries</div>
                </div>

                <div className="border-l-4 border-[#FF6B35] pl-6">
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-gray-200">Partner institutions building future-ready talent</div>
                </div>

                <div className="border-l-4 border-[#2196F3] pl-6">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-gray-200">Industry experts contributing to curriculum development</div>
                </div>

                <div className="border-l-4 border-[#FF6B35] pl-6">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-gray-200">Active chapters providing nationwide support</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-200 text-center italic">
                  "Building India's robotics and drone technology ecosystem, one professional at a time"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the ICRDT Advantage?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join India's leading professional community for robotics and drone technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-[#2196F3] px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Get Certified
              </button>
              <button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
