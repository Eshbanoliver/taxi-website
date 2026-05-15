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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img src="/logo.png" alt="TaxiGO Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Taxi<span className="text-taxi-yellow">GO</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  activeSection === item.icon
                    ? 'text-taxi-yellow'
                    : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Book Now Button */}
            <div className="ml-6">
              <button className="bg-taxi-yellow text-taxi-black font-bold py-2.5 px-6 rounded-full hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 flex items-center space-x-2 text-sm">
                <Phone size={16} strokeWidth={2} />
                <span>Book Now</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
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
