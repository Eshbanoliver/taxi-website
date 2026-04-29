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
      <div className="fixed left-6 bottom-6 z-50 animate-float">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-float"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Call Button */}
      <div className="fixed left-6 bottom-24 z-50 animate-float" style={{ animationDelay: '1s' }}>
        <a
          href="#"
          className="w-14 h-14 bg-taxi-yellow rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors duration-300 group"
          aria-label="Call us"
        >
          <Phone className="text-taxi-black" size={24} />
          <span className="absolute left-16 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Now
          </span>
        </a>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed right-6 bottom-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-taxi-black" size={20} />
            <span className="absolute right-16 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Back to Top
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
