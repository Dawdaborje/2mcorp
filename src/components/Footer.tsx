import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">2M</span>
              </div>
              <span className="font-bold text-white">2M Corp</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Africa through technology and data innovation.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Data Analytics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Survey Management</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Software Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Cloud Integration</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">IMS Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#approach" className="text-gray-400 hover:text-blue-400 transition">Our Approach</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-blue-400 transition">Our Impact</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <strong>Email:</strong> <a href="mailto:info@2mcorp.com" className="hover:text-blue-400 transition">info@2mcorp.com</a>
              </li>
              <li className="text-gray-400">
                <strong>Phone:</strong> <a href="tel:+22276123456" className="hover:text-blue-400 transition">+220 76 123 456</a>
              </li>
              <li className="text-gray-400">
                <strong>Location:</strong> Banjul, The Gambia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} 2M Corp. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
