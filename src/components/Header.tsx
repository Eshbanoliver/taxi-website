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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-taxi-yellow/95 via-yellow-400/95 to-taxi-yellow/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-gradient-to-r from-taxi-yellow/80 via-yellow-300/80 to-taxi-yellow/80 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-taxi-black to-gray-800 rounded-full flex items-center justify-center animate-pulse shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Car className="text-taxi-yellow animate-float" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-taxi-black group-hover:text-gray-800 transition-colors duration-300">
                Taxi
                <span className="text-taxi-yellow bg-taxi-black px-1 rounded ml-1 text-sm">GO</span>
              </h1>
              <p className="text-xs text-gray-700 font-medium">Your Journey, Our Priority</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.icon
                      ? 'bg-taxi-black text-taxi-yellow shadow-lg'
                      : 'text-taxi-black hover:bg-white/30 hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-taxi-black group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
            
            {/* Enhanced Book Now Button */}
            <div className="ml-6 relative group">
              <button className="relative bg-gradient-to-r from-taxi-black to-gray-800 text-taxi-yellow font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10 flex items-center space-x-2">
                  <Phone size={18} />
                  <span>Book Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-taxi-yellow transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-taxi-black flex items-center space-x-2">
                    <Phone size={18} />
                    <span>Book Now</span>
                  </span>
                </div>
              </button>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-10 h-10 bg-taxi-black rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
              {isMenuOpen ? (
                <X className="text-taxi-yellow animate-spin" size={20} />
              ) : (
                <Menu className="text-taxi-yellow animate-pulse" size={20} />
              )}
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-3 rounded-xl font-medium text-taxi-black hover:bg-taxi-yellow/30 hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-taxi-yellow rounded-full flex items-center justify-center">
                      <Car size={16} className="text-taxi-black" />
                    </div>
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-taxi-yellow rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                </a>
              ))}
              <button className="mt-4 bg-gradient-to-r from-taxi-black to-gray-800 text-taxi-yellow font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>Book Now</span>
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Animated Underline */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-taxi-yellow to-transparent animate-gradient"></div>
    </header>
  );
};

export default Header;
