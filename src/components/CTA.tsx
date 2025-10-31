import { Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Let's work together to unlock the power of data and build solutions that drive real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <Mail className="mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:info@2mcorp.com" className="text-blue-100 hover:text-white transition">
              info@2mcorp.com
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <Phone className="mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">Phone</h3>
            <a href="tel:+22276123456" className="text-blue-100 hover:text-white transition">
              +220 76 123 456
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <MapPin className="mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-blue-100">Banjul, The Gambia</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Start a Conversation</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <input
              type="text"
              placeholder="Organization"
              className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Tell us about your project or challenge..."
              rows={5}
              className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            ></textarea>
            <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
