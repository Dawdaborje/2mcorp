import { useState } from 'react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import Approach from './components/Approach';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Services />
      <Approach />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
}
