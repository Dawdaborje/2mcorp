import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">2M</span>
            </div>
            <span className="hidden sm:inline font-bold text-gray-900">2M Corp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('approach')} className="text-gray-600 hover:text-blue-600 transition">
              Our Approach
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-600 hover:text-blue-600 transition">
              Impact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded"
            >
              Get in Touch
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
