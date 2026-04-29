import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="glass-dark mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-taxi-yellow rounded-full flex items-center justify-center">
                <span className="text-taxi-black font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-white">Taxi Services</h3>
            </div>
            <p className="text-gray-300">
              Your trusted partner for professional taxi services in Udaipur and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-taxi-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-taxi-yellow" size={20} />
                <span className="text-gray-300">Phone: [Coming Soon]</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-taxi-yellow" size={20} />
                <span className="text-gray-300">Email: [Coming Soon]</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-taxi-yellow" size={20} />
                <span className="text-gray-300">Udaipur, Rajasthan 313001</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                <Facebook className="text-white" size={20} />
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                <Instagram className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            ©️ Copyright 2026 | MS Infinix | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
