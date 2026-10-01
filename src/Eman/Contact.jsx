import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Us</h2>

        {/* Main Card Container */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              We'd love to hear from you!
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#374151] text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#2C3E35] text-white rounded-lg font-medium text-sm hover:bg-[#1e2b24] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="lg:border-l lg:border-gray-100 lg:pl-12 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Contact Information
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form or reach us directly through our details
                below.
              </p>

              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-[#2C3E35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-gray-700">
                    Our Location
                  </p>
                  <p className="text-sm text-gray-600">Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-[#2C3E35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-gray-700">Email Us</p>
                  <p className="text-sm text-gray-600">support@glowcraft.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-[#2C3E35] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-gray-700">Call Us</p>
                  <p className="text-sm text-gray-600">+20 123 456 789</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex space-x-4 space-x-reverse text-gray-600">
              <a href="#" className="hover:text-[#2C3E35] transition-colors">
                🌐
              </a>
              <a href="#" className="hover:text-[#2C3E35] transition-colors">
                📘
              </a>
              <a href="#" className="hover:text-[#2C3E35] transition-colors">
                📸
              </a>
              <a href="#" className="hover:text-[#2C3E35] transition-colors">
                🐦
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
