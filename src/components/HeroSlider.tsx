import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, CheckCircle } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Premium Taxi Service",
      subtitle: "Udaipur's Finest Journey",
      description: "Experience luxury and comfort with our elite fleet and professional chauffeurs.",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["24/7 Elite Service", "Real-time Tracking", "Safe & Discreet"],
      ctaText: "Book Premium Ride",
      color: "gold"
    },
    {
      id: 2,
      title: "Airport Transfers",
      subtitle: "Timeless Punctuality",
      description: "Reliable airport pickup and drop services with real-time flight tracking for peace of mind.",
      image: "https://images.unsplash.com/photo-1436491865334-268b13d53b3a?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Flight Monitoring", "Concierge Service", "Meet & Greet"],
      ctaText: "Book Airport Ride",
      color: "sapphire"
    },
    {
      id: 3,
      title: "Corporate Solutions",
      subtitle: "Executive Excellence",
      description: "Customized transportation solutions for modern enterprises and high-profile events.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Enterprise Billing", "Priority Dispatch", "Executive Fleet"],
      ctaText: "Corporate Plans",
      color: "gold"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative h-screen overflow-hidden group/hero">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
            }`}
          >
            {/* Background Image with Ken Burns */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
              
              {/* Animated Blobs */}
              <div className="absolute top-1/4 -left-24 w-96 h-96 bg-taxi-yellow/20 rounded-full blur-[120px] animate-blob" />
              <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            </div>
            
            {/* Content */}
            <div className="relative w-full h-full flex items-center">
              <div className="container mx-auto px-6 sm:px-12 lg:px-24">
                <div className="max-w-4xl space-y-12">
                  {/* Badge */}
                  <div className={`inline-flex items-center space-x-3 glass-premium px-8 py-3 rounded-full animate-fade-in-up`}>
                    <div className="w-2.5 h-2.5 bg-taxi-yellow rounded-full animate-pulse shadow-soft-glow"></div>
                    <span className="text-white font-black text-xs sm:text-sm tracking-[0.3em] uppercase">{slide.subtitle}</span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-[1] animate-fade-in-up animation-delay-300">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={`inline-block mr-6 font-serif ${i === 0 ? 'text-gradient-gold shimmer' : ''}`}>
                        {word}
                      </span>
                    ))}
                  </h1>
                  
                  {/* Description */}
                  <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed max-w-2xl font-medium animate-fade-in-up animation-delay-500">
                    {slide.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-700">
                    {slide.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="glass px-6 py-4 rounded-2xl border border-white/10 shadow-2xl flex items-center space-x-4 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-10 h-10 icon-container bg-taxi-yellow">
                          <CheckCircle className="text-taxi-black w-6 h-6" strokeWidth={2.5} />
                        </div>
                        <span className="text-white font-black text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up animation-delay-900">
                    <button className="btn-premium group py-6 px-16 text-lg shadow-2xl">
                      <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                      <span>{slide.ctaText}</span>
                    </button>
                    <a href="/services" className="btn-outline-premium py-6 px-16 text-lg">
                      <span>Explore Fleet</span>
                      <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-16 left-24 flex items-center space-x-12 z-30 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500">
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-5 glass-premium rounded-full text-white hover:bg-taxi-yellow hover:text-taxi-black transition-all border border-white/10"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="p-5 glass-premium rounded-full text-white hover:bg-taxi-yellow hover:text-taxi-black transition-all border border-white/10"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative h-12 w-1"
            >
              <div className={`absolute inset-0 w-full rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-taxi-yellow h-full' : 'bg-white/20 h-8'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroSlider;
