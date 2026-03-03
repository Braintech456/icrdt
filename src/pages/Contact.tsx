import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2647] to-[#205295] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us for certifications, memberships, or any inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* ================= CONTACT FORM ================= */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2647] mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24-48 hours
              </p>

              <form
                action="https://formspree.io/f/mqedvnyp"
                method="POST"
                className="space-y-6"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none transition-colors"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#1B4FA3] hover:bg-[#163E82] text-white px-6 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2647] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us directly through any of the following channels
              </p>

              <div className="space-y-6 mb-8">

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#1B4FA3] rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2647] mb-2">Email</h3>
                    <a
                      href="mailto:icrdt.info@gmail.com"
                      className="text-[#1B4FA3] hover:underline"
                    >
                      icrdt.info@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#1B4FA3] rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2647] mb-2">Phone</h3>
                    <a
                      href="tel:+919324352753"
                      className="text-[#1B4FA3] hover:underline"
                    >
                      +91 93243 52753
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#1B4FA3] rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2647] mb-2">
                      Office Locations
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Head Office: Kaushal, 1st Floor, Near Gauri Shankar Mandir,
                      Sector 9A, Gurugram - 122001
                      <br /><br />
                      Regional Office: 3rd Floor, Indira Heights,
                      Gangapur Road, Nashik - 422005
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#0A1F44] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}