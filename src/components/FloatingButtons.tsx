import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed left-6 bottom-6 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 group"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute left-16 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-x-4 group-hover:translate-x-0">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Call Button */}
      <div className="fixed left-6 bottom-24 z-50">
        <a
          href="tel:+919876543210"
          className="relative w-14 h-14 bg-taxi-yellow rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(251,191,36,0.4)] hover:shadow-[0_8px_40px_rgb(251,191,36,0.6)] transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Call us"
        >
          <div className="absolute inset-0 bg-taxi-yellow rounded-full animate-ping opacity-20"></div>
          <Phone className="text-taxi-black relative z-10" size={24} />
          <span className="absolute left-16 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap -translate-x-4 group-hover:translate-x-0">
            Call for Booking
          </span>
        </a>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-2xl hover:bg-white/20 transition-all duration-500 group animate-slide-in-up"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-white group-hover:text-taxi-yellow transition-colors" size={20} />
            <span className="absolute right-16 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-x-4 group-hover:translate-x-0">
              Back to Top
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
