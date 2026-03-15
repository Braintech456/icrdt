import { Award, CheckCircle } from "lucide-react";
import { icrdtCourses } from "../data/icrdtCourses";

export default function Certifications() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="text-[#FF6B35]" size={20} />
            <span className="text-sm font-medium">
              Professional Certifications
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ICRDT Certifications
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Industry-recognized certification programs in Robotics, Drone Technology, Automation & AI
          </p>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Our Certification Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the certification that aligns with your professional goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {icrdtCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Header */}
                <div className="bg-[#1B4FA3] p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    Certification Code: {course.code}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    {course.description}
                  </p>

                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Level:</strong> {course.level}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.modules.slice(0, 3).map((module, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-green-500" size={16} />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>

                  {/* ⭐ APPLY BUTTON — FINAL FIX */}
                  <button
                    onClick={() =>
                      window.open("/icrdt-application.html", "_blank")
                    }
                    className="w-full bg-[#1B4FA3] hover:bg-[#163E82] text-white py-3 rounded-md font-semibold transition-colors"
                  >
                    Apply Now
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#0A2647] rounded-xl p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Certified?
            </h2>

            <p className="text-gray-200 mb-8">
              Join the next generation of certified professionals in Robotics and Drone Technology.
            </p>

            {/* ⭐ CTA BUTTON — FINAL FIX */}
            <button
              onClick={() =>
                window.open("/icrdt-application.html", "_blank")
              }
              className="bg-[#FF6B35] hover:bg-[#E55A2B] px-8 py-4 rounded-md font-semibold text-lg transition-all"
            >
              Start Your Application
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}