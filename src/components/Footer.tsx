import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, Youtube, Car, Star, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { name: 'Local Rides', href: '/services#local' },
    { name: 'Airport Transfer', href: '/services#airport' },
    { name: 'Outstation Trips', href: '/services#outstation' },
    { name: 'Corporate Travel', href: '/services#corporate' },
  ];

  return (
    <footer className="relative bg-slate-900 pt-32 pb-12 overflow-hidden w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-vibrant-indigo opacity-20 animate-moving-mesh" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        {/* Top Branding Section */}
        <div className="grid lg:grid-cols-2 gap-24 mb-32 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
               <div className="w-16 h-16 bg-taxi-yellow rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform">
                  <Car size={32} className="text-taxi-black" />
               </div>
               <div>
                  <h2 className="text-4xl font-black text-white tracking-tight">Taxi GO</h2>
                  <p className="text-taxi-yellow font-black uppercase tracking-[0.3em] text-[10px]">Elite Mobility</p>
               </div>
            </div>
            <p className="text-xl text-slate-400 font-medium max-w-xl">
              Udaipur's premier transportation service. We combine luxury with reliability to craft the perfect journey for every guest.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 icon-container bg-white/5 border-white/10 text-white hover:bg-taxi-yellow hover:text-taxi-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="glass-premium p-12 rounded-[3rem] border-white/5">
            <h3 className="text-2xl font-black text-white mb-8">Newsletter</h3>
            <p className="text-slate-400 mb-8 font-medium">Subscribe for exclusive travel offers and city guides.</p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-taxi-yellow outline-none transition-all"
              />
              <button className="bg-taxi-yellow p-4 rounded-2xl text-taxi-black hover:scale-105 transition-transform">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-16 mb-32">
          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-taxi-yellow font-medium transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-slate-400 hover:text-taxi-yellow font-medium transition-colors">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Contact</h4>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-taxi-yellow">
                   <Phone size={18} />
                   <span className="font-black">+91 98765 43210</span>
                </div>
                <p className="text-slate-400 font-medium">24/7 Booking Support</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-taxi-yellow">
                   <MapPin size={18} />
                   <span className="font-black">Udaipur, India</span>
                </div>
                <p className="text-slate-400 font-medium">Rajasthan 313001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 font-medium text-sm">
            © 2026 Taxi GO. Crafted with excellence for Udaipur.
          </div>
          <div className="flex space-x-8">
             <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
             <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
