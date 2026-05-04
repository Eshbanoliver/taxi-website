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
    <footer className="relative glass-dark mt-20 overflow-hidden w-full overflow-x-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/5 to-yellow-400/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-taxi-yellow/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow animate-float" size={16} />
            <span className="text-taxi-yellow font-bold">Stay Connected</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Let's Take You
            <span className="block text-taxi-yellow">Wherever You Need</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily transportation needs
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div className="space-y-4 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-taxi-black font-bold text-lg">T</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-taxi-yellow transition-colors duration-300">Taxi GO</h3>
                <p className="text-xs text-gray-400">Your Journey Partner</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for professional taxi services in Udaipur and beyond. Safe, reliable, and affordable transportation solutions.
            </p>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="text-taxi-yellow" size={14} />
                <span className="text-white font-semibold text-sm">4.9</span>
              </div>
              <div className="w-px h-3 bg-white/30"></div>
              <div className="text-white text-xs">50K+ Rides</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <ArrowRight className="text-taxi-yellow" size={14} />
              </div>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-taxi-yellow transition-all duration-300 hover:translate-x-2 text-sm"
                  >
                    <div className="w-0 h-0.5 bg-taxi-yellow group-hover:w-6 transition-all duration-300"></div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <Car className="text-taxi-yellow" size={14} />
              </div>
              <span>Our Services</span>
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-taxi-yellow transition-all duration-300 hover:translate-x-2 text-sm"
                  >
                    <div className="w-0 h-0.5 bg-taxi-yellow group-hover:w-6 transition-all duration-300"></div>
                    <span className="font-medium">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <Phone className="text-taxi-yellow" size={14} />
              </div>
              <span>Get In Touch</span>
            </h4>
            
            <div className="space-y-3">
              <div className="group flex items-center space-x-2">
                <div className="w-8 h-8 bg-taxi-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-taxi-yellow" size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">+91 98765 43210</span>
              </div>
              
              <div className="group flex items-center space-x-2">
                <div className="w-8 h-8 bg-taxi-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-taxi-yellow" size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">info@taxigo.com</span>
              </div>
              
              <div className="group flex items-center space-x-2">
                <div className="w-8 h-8 bg-taxi-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-taxi-yellow" size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">Udaipur, Rajasthan</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-white">Follow Us</h5>
              <div className="flex space-x-2">
                <div className="group relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Facebook className="text-white" size={16} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div className="group relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Instagram className="text-white" size={16} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div className="group relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Twitter className="text-white" size={16} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-sky-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div className="group relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Youtube className="text-white" size={16} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-300 text-center md:text-left text-sm">
              ©️ Copyright 2026 | Taxi GO | All Rights Reserved
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="/privacy" className="text-gray-400 hover:text-taxi-yellow transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-taxi-yellow transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-taxi-yellow transition-colors duration-300 text-sm">
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
