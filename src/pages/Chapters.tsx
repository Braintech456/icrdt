import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

export default function AuthorizedCenters() {
  const centers = [
    {
      name: 'ICRDT Authorized Training Center – Nashik',
      address: '3rd Floor, Indira Heights, Gangapur Road, Nashik – 422005',
      region: 'Maharashtra',
      email: 'icrdt.info@gmail.com',
      phone: '+91 XXXXX XXXXX'
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Authorized Centers
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Officially recognized ICRDT centers delivering certified training programs across India
          </p>
        </div>
      </section>

      {/* Centers Listing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
              Recognized Training Centers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These centers are authorized to conduct ICRDT-approved certification programs and assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1B4FA3] rounded-md flex items-center justify-center">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2647]">
                    {center.name}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#1B4FA3] mt-1 flex-shrink-0" size={18} />
                    <p className="text-gray-700">{center.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-[#1B4FA3] flex-shrink-0" size={18} />
                    <p className="text-gray-700">{center.phone}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-[#1B4FA3] flex-shrink-0" size={18} />
                    <p className="text-gray-700">{center.email}</p>
                  </div>

                  <div className="inline-block bg-gray-100 text-[#0A2647] px-3 py-1 rounded-md text-xs font-medium mt-2">
                    {center.region}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Apply for Center Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">
            Become an Authorized Center
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Institutions interested in offering ICRDT certification programs can apply to become an officially recognized training center.
          </p>

          <button className="bg-[#1B4FA3] hover:bg-[#163E82] text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Apply for Authorization
          </button>
        </div>
      </section>

    </div>
  );
}