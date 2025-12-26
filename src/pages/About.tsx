import { Target, Eye, CheckCircle, Shield, Users, TrendingUp, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: Target,
      title: 'Benchmark Competency Standards',
      description: 'Establish and maintain industry-recognized standards for robotics and drone technology professionals'
    },
    {
      icon: Shield,
      title: 'Professional Validation',
      description: 'Validate professional expertise through rigorous examinations and assessment frameworks'
    },
    {
      icon: TrendingUp,
      title: 'Bridge Skill Gaps',
      description: 'Bridge the academia-industry skill gap with practical, job-ready competency development'
    },
    {
      icon: Lightbulb,
      title: 'Foster Innovation',
      description: 'Promote innovation, safety, and ethical practices in robotics and drone applications'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Create a thriving professional community for knowledge sharing and collaboration'
    },
    {
      icon: Award,
      title: 'Continuous Excellence',
      description: 'Drive continuous learning and professional development in emerging technologies'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About ICRDT</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Leading the charge in professional certification for robotics and drone technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0A2647] px-4 py-2 rounded-full mb-6">
                <Eye size={20} />
                <span className="font-semibold">Our Vision</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0A2647] mb-6">
                Empowering the Future of Automation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be the nation's most authoritative and trusted certification body for robotics and drone technology, empowering a future where professionals and industries lead the global automation revolution.
              </p>
              <p className="text-gray-600">
                We envision an India where every robotics and drone professional is equipped with validated, world-class competencies that drive innovation, safety, and sustainable technological advancement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border-2 border-blue-100">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6">
                <Target size={20} className="text-[#FF6B35]" />
                <span className="font-semibold text-[#0A2647]">Our Mission</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To advance the robotics and drone technology ecosystem by setting benchmark professional standards, certifying competent individuals, and fostering a culture of innovation, safety, and continuous learning to power the nation's technological future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">Our Objectives</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Strategic goals that drive our commitment to excellence in robotics and drone technology certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#2196F3] to-[#1976D2] rounded-lg mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2647] mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2647] to-[#144272] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why ICRDT Matters</h2>
                <p className="text-gray-200 text-lg mb-6">
                  In a rapidly evolving technological landscape, ICRDT serves as the cornerstone for professional excellence, ensuring that India's workforce is equipped with validated competencies that meet global standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={20} />
                    <span>Industry-recognized certification standards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={20} />
                    <span>Rigorous assessment and validation processes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={20} />
                    <span>Continuous professional development support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#2196F3] flex-shrink-0 mt-1" size={20} />
                    <span>Strong academic-industry collaboration</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <Award className="mx-auto text-[#FF6B35] mb-2" size={48} />
                  <h3 className="text-2xl font-bold">ISO 9001:2015</h3>
                  <p className="text-gray-200">Certified Organization</p>
                </div>
                <p className="text-gray-200 text-center">
                  Our commitment to quality and excellence is validated by international standards, ensuring the highest level of service and certification integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
