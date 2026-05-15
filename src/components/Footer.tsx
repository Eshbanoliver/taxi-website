import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, Youtube, Car, Star, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'About Us', href: '/about', icon: 'about' },
    { name: 'Services', href: '/services', icon: 'services' },
    { name: 'FAQ', href: '/faq', icon: 'faq' },
    { name: 'Contact Us', href: '/contact', icon: 'contact' },
  ];

  const services = [
    { name: 'Local Rides', href: '/services#local' },
    { name: 'Airport Transfer', href: '/services#airport' },
    { name: 'Outstation Trips', href: '/services#outstation' },
    { name: 'Corporate Travel', href: '/services#corporate' },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-100 mt-20 overflow-hidden w-full overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-4 sm:py-6">
        {/* Top Section */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/10 px-3 py-1 rounded-full mb-3 border border-taxi-yellow/20">
            <Car className="text-taxi-yellow w-4 h-4" />
            <span className="text-taxi-yellow font-bold text-xs sm:text-sm">Stay Connected</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Let's Take You
            <span className="block text-taxi-yellow">Wherever You Need</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who trust us for their daily transportation needs
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-6">
          {/* Company Info */}
          <div className="space-y-2 sm:space-y-3 group">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/logo.png" alt="TaxiGO Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-taxi-yellow transition-colors duration-300">Taxi GO</h3>
                <p className="text-xs text-slate-500 hidden sm:block">Your Journey Partner</p>
              </div>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Your trusted partner for professional taxi services in Udaipur and beyond. Safe, reliable, and affordable transportation solutions.
            </p>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="text-taxi-yellow w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-slate-900 font-semibold text-xs">4.9</span>
              </div>
              <div className="w-px h-2 bg-slate-200"></div>
              <div className="text-slate-700 text-xs">50K+ Rides</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
              <div className="w-5 h-5 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <ArrowRight className="text-taxi-yellow" size={12} />
              </div>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-1 text-slate-600 hover:text-taxi-yellow transition-all duration-300 hover:translate-x-1 text-xs"
                  >
                    <div className="w-0 h-0.5 bg-taxi-yellow group-hover:w-4 transition-all duration-300"></div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
              <div className="w-5 h-5 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <Car className="text-taxi-yellow" size={12} />
              </div>
              <span>Our Services</span>
            </h4>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center space-x-1 text-slate-600 hover:text-taxi-yellow transition-all duration-300 hover:translate-x-1 text-xs"
                  >
                    <div className="w-0 h-0.5 bg-taxi-yellow group-hover:w-4 transition-all duration-300"></div>
                    <span className="font-medium">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
              <div className="w-5 h-5 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <Phone className="text-taxi-yellow" size={12} />
              </div>
              <span>Get In Touch</span>
            </h4>
            
            <div className="space-y-2">
              <div className="group flex items-center space-x-2">
                <div className="w-6 h-6 icon-container group-hover:scale-110">
                  <Phone className="icon-primary" size={12} strokeWidth={1.5} />
                </div>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 text-xs">+91 98765 43210</span>
              </div>
              
              <div className="group flex items-center space-x-2">
                <div className="w-6 h-6 icon-container group-hover:scale-110">
                  <Mail className="icon-primary" size={12} strokeWidth={1.5} />
                </div>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 text-xs">info@taxigo.com</span>
              </div>
              
              <div className="group flex items-center space-x-2">
                <div className="w-6 h-6 icon-container group-hover:scale-110">
                  <MapPin className="icon-primary" size={12} strokeWidth={1.5} />
                </div>
                <span className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 text-xs">Udaipur, Rajasthan</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-semibold text-slate-900">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 icon-container hover:bg-taxi-yellow group">
                  <Facebook className="icon-dark group-hover:text-taxi-black transition-colors" size={14} strokeWidth={1.5} />
                </a>
                
                <a href="#" className="w-8 h-8 icon-container hover:bg-taxi-yellow group">
                  <Instagram className="icon-dark group-hover:text-taxi-black transition-colors" size={14} strokeWidth={1.5} />
                </a>
                
                <a href="#" className="w-8 h-8 icon-container hover:bg-taxi-yellow group">
                  <Twitter className="icon-dark group-hover:text-taxi-black transition-colors" size={14} strokeWidth={1.5} />
                </a>
                
                <a href="#" className="w-8 h-8 icon-container hover:bg-taxi-yellow group">
                  <Youtube className="icon-dark group-hover:text-taxi-black transition-colors" size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <p className="text-slate-500 text-center md:text-left text-xs">
              ©️ Copyright 2026 | Taxi GO | All Rights Reserved
            </p>
            
            <div className="flex items-center space-x-3">
              <a href="/sitemap" className="text-slate-400 hover:text-taxi-yellow transition-colors duration-300 text-xs">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
