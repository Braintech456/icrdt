import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

export default function Chapters() {
  const chapters = [
    {
      name: 'ICRDT Nashik Chapter',
      address: '3rd Floor, Indira Heights, Gangapur Road, Nashik – 422005',
      region: 'Maharashtra'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ICRDT Chapters</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Connecting professionals across India through our nationwide chapter network
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Our Chapter Network
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ICRDT chapters provide local support, networking opportunities, and access to regional events and programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-[#2196F3] transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#2196F3] rounded-lg flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2647]">{chapter.name}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#FF6B35] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{chapter.address}</p>
                  </div>
                  <div className="inline-block bg-blue-100 text-[#0A2647] px-3 py-1 rounded-full text-sm font-medium">
                    {chapter.region}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[#0A2647] to-[#205295] rounded-xl shadow-lg p-6 text-white flex flex-col justify-center items-center text-center">
              <Building2 className="mb-4 text-[#2196F3]" size={48} />
              <h3 className="text-2xl font-bold mb-2">More Chapters</h3>
              <p className="text-gray-200 mb-4">
                We're expanding our presence across India
              </p>
              <button className="bg-white text-[#0A2647] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Start a Chapter in Your City
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interested in bringing ICRDT to your region? Contact us to learn about establishing a new chapter
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2196F3] rounded-full mb-4">
                  <Building2 className="text-white" size={32} />
                </div>
                <h4 className="font-semibold text-[#0A2647] mb-2">Expand Network</h4>
                <p className="text-gray-600 text-sm">Bring professional certification to your region</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-full mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h4 className="font-semibold text-[#0A2647] mb-2">Local Support</h4>
                <p className="text-gray-600 text-sm">Provide on-ground assistance to members</p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2196F3] rounded-full mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h4 className="font-semibold text-[#0A2647] mb-2">Get Started</h4>
                <p className="text-gray-600 text-sm">Contact us to begin the process</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-[#2196F3] hover:bg-[#1976D2] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us About Starting a Chapter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
