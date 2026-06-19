import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'About Us', href: '/about', icon: 'about' },
    { name: 'Services', href: '/services', icon: 'services' },
    { name: 'FAQ', href: '/faq', icon: 'faq' },
    { name: 'Contact Us', href: '/contact', icon: 'contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'py-4 sm:py-6' 
        : 'py-6 sm:py-8'
    }`}>
      <div className={`container mx-auto px-4 sm:px-8 transition-all duration-700 ${
        isScrolled 
          ? 'max-w-6xl' 
          : 'max-w-7xl'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-700 px-6 sm:px-10 py-4 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img src="/logo.png" alt="TaxiGO Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-2xl font-black tracking-tight transition-colors duration-700 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
                Taxi<span className="text-taxi-yellow">GO</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-700 hover:scale-110 ${
                  activeSection === item.icon
                    ? 'text-taxi-yellow'
                    : isScrolled ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-taxi-yellow'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Book Now Button */}
            <div className="ml-6">
              <button className={`font-black py-3 px-8 rounded-2xl transition-all duration-700 flex items-center space-x-3 text-xs uppercase tracking-widest shadow-2xl ${
                isScrolled 
                  ? 'bg-taxi-yellow text-taxi-black hover:bg-white hover:scale-105' 
                  : 'bg-taxi-black text-white hover:bg-taxi-yellow hover:text-taxi-black hover:scale-105'
              }`}>
                <Phone size={16} strokeWidth={3} />
                <span>Book Now</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-full transition-all duration-700 ${
              isScrolled 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-black/5 text-slate-900 hover:bg-black/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-2xl animate-slide-in-up">
            <nav className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 rounded-xl font-medium text-slate-600 hover:text-slate-900 hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                </a>
              ))}
              <button className="mt-4 bg-taxi-yellow text-taxi-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Phone size={18} strokeWidth={2} />
                <span>Book Now</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
