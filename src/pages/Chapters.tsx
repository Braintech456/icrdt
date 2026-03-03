import { ShieldCheck, Building2, FileCheck } from 'lucide-react';

export default function AuthorizedCenters() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Authorized Centers
          </h1>
          <p className="text-xl text-gray-200">
            Institutions officially recognized by ICRDT to conduct certification programs
          </p>
        </div>
      </section>

      {/* About Authorized Centers */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="mb-12">
            <ShieldCheck className="mx-auto text-[#1B4FA3] mb-4" size={48} />
            <h2 className="text-3xl font-bold text-[#0A2647] mb-4">
              What is an Authorized Center?
            </h2>
            <p className="text-lg text-gray-600">
              Authorized Centers are institutions that have been formally approved by ICRDT 
              to deliver standardized training and conduct certification assessments 
              under official guidelines and quality frameworks.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <Building2 className="mx-auto text-[#1B4FA3] mb-4" size={40} />
            <h3 className="text-2xl font-semibold text-[#0A2647] mb-4">
              Important Notice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To ensure authenticity and compliance, candidates and institutions are advised 
              to communicate directly with the ICRDT Head Office for enrollment, verification, 
              or partnership inquiries.  
              ICRDT does not take responsibility for any unauthorized claims made by third parties.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <FileCheck className="mx-auto text-[#1B4FA3] mb-4" size={48} />

          <h2 className="text-3xl font-bold text-[#0A2647] mb-4">
            Verify or Apply
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Verify the authenticity of a center or apply to become an officially recognized ICRDT Authorized Center.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#1B4FA3] hover:bg-[#163E82] text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Verify Center
            </button>

            <button className="border border-[#1B4FA3] text-[#1B4FA3] px-8 py-3 rounded-md font-semibold hover:bg-[#1B4FA3] hover:text-white transition-colors">
              Apply for Authorization
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}