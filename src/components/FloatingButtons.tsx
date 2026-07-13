import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle, X, MessageSquare } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col items-end gap-4">
      {/* Speed Dial Actions */}
      <div className={`flex flex-col items-end gap-4 transition-all duration-500 origin-bottom ${
        isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-75 translate-y-6 pointer-events-none'
      }`}>
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-white group-hover:text-taxi-yellow transition-colors size-5" />
            <span className="absolute right-16 bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
              Back to Top
            </span>
          </button>
        )}

        {/* Call Us */}
        <a
          href="tel:+919876543210"
          className="relative w-12 h-12 bg-taxi-yellow rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(251,191,36,0.3)] hover:shadow-[0_8px_40px_rgb(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Call us"
        >
          <div className="absolute inset-0 bg-taxi-yellow rounded-full animate-ping opacity-20" />
          <Phone className="text-taxi-black relative z-10 size-5" strokeWidth={2.5} />
          <span className="absolute right-16 bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
            Call for Booking
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 group"
          aria-label="WhatsApp"
        >
          <MessageCircle size={22} />
          <span className="absolute right-16 bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-105 ${
          isOpen ? 'bg-slate-900 text-white rotate-180 border border-white/10' : 'bg-taxi-yellow text-taxi-black'
        }`}
        aria-label="Quick Contacts"
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full" />
            <MessageSquare size={22} />
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;
