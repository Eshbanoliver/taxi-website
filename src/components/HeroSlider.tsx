import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Star, Shield, Clock, CheckCircle } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Premium Taxi Service",
      subtitle: "Experience luxury and comfort",
      description: "Professional drivers, clean vehicles, and affordable rates for your journey",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["24/7 Service", "GPS Tracking", "Safe & Secure"],
      ctaText: "Book Premium Ride",
      bgGradient: "from-white/90 via-white/40 to-white/90"
    },
    {
      id: 2,
      title: "Airport Transfers",
      subtitle: "Never miss your flight",
      description: "Reliable airport pickup and drop services with real-time flight tracking",
      image: "https://images.unsplash.com/photo-1436491865334-268b13d53b3a?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Flight Monitoring", "Luggage Help", "Meet & Greet"],
      ctaText: "Book Airport Ride",
      bgGradient: "from-white/95 via-white/70 to-white/95"
    },
    {
      id: 3,
      title: "Corporate Solutions",
      subtitle: "Business travel made easy",
      description: "Customized transportation solutions for companies and corporate events",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Monthly Billing", "Priority Service", "Executive Vehicles"],
      ctaText: "Corporate Plans",
      bgGradient: "from-white/95 via-white/70 to-white/95"
    },
    {
      id: 4,
      title: "City Tours & Sightseeing",
      subtitle: "Explore the city in comfort",
      description: "Guided city tours and sightseeing packages with experienced drivers",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Local Guides", "Flexible Routes", "Photo Stops"],
      ctaText: "Book City Tour",
      bgGradient: "from-white/95 via-white/70 to-white/95"
    },
    {
      id: 5,
      title: "Outstation Travel",
      subtitle: "Journey beyond the city",
      description: "Comfortable long-distance travel with experienced highway drivers",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["One-way & Round-trip", "Highway Expert", "Comfortable"],
      ctaText: "Plan Outstation Trip",
      bgGradient: "from-white/95 via-white/70 to-white/95"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
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
    <div className="relative" style={{ height: '100vh' }}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Intense Ken Burns effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover animate-ken-burns scale-110"
              />
              {/* Animated Mesh Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} mix-blend-multiply opacity-70 animate-moving-mesh`} />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80" />
            </div>
            
            {/* Content */}
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-7xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left space-y-10 lg:space-y-16">
                  {/* Title Section */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full animate-float shadow-2xl">
                      <div className="w-2.5 h-2.5 bg-taxi-yellow rounded-full animate-pulse shadow-[0_0_15px_rgba(251,191,36,1)]"></div>
                      <span className="text-white font-black text-sm tracking-[0.2em] uppercase text-glow">{slide.subtitle}</span>
                    </div>
                    
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={`inline-block mr-4 ${i === 0 ? 'text-gradient-gold shimmer' : ''}`}>
                          {word}
                        </span>
                      ))}
                    </h1>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xl sm:text-2xl lg:text-3xl text-slate-100 leading-relaxed max-w-4xl mx-auto lg:mx-0 font-medium drop-shadow-lg">
                    {slide.description}
                  </p>
                  
                  {/* Features with 3D effect */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 perspective-1000">
                    {slide.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="card-3d inline-flex items-center space-x-3 bg-white/10 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/20 shadow-2xl cursor-pointer"
                      >
                        <div className="icon-container w-10 h-10 bg-taxi-yellow shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                          <CheckCircle className="text-taxi-black w-6 h-6" strokeWidth={2.5} />
                        </div>
                        <span className="text-white font-black text-base sm:text-lg tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
                    <button className="group relative btn-primary shimmer hover-glow py-4 sm:py-5 px-8 sm:px-12 shadow-2xl flex items-center justify-center space-x-3 w-full sm:w-auto text-base sm:text-lg">
                      <Phone size={20} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                      <span>{slide.ctaText}</span>
                    </button>
                    <a href="/services" className="group bg-white/80 backdrop-blur-md text-slate-900 font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-full hover:bg-white transform hover:scale-105 transition-all duration-300 border border-slate-200 flex items-center justify-center w-full sm:w-auto text-base sm:text-lg shadow-xl">
                      <span>Explore Services</span>
                      <ChevronRight size={20} strokeWidth={2} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Navigation Controls */}
      <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between items-center pointer-events-none z-30">
        <button
          onClick={prevSlide}
          className="pointer-events-auto group bg-white text-slate-900 p-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 border border-slate-200 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto group bg-white text-slate-900 p-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 border border-slate-200 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={28} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Professional Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-taxi-yellow w-16'
                : 'bg-slate-300 hover:bg-slate-400 w-10'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Professional Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-6 right-6 lg:top-12 lg:right-12 bg-white text-slate-900 p-3 lg:p-4 rounded-full hover:bg-gray-50 transition-all duration-300 border border-slate-200 z-30 shadow-lg"
        aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlay ? (
          <div className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-current rounded-sm" />
          </div>
        ) : (
          <div className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center space-x-1.5">
            <div className="w-1 h-4 lg:w-1.5 lg:h-5 bg-current" />
            <div className="w-1 h-4 lg:w-1.5 lg:h-5 bg-current" />
          </div>
        )}
      </button>

      {/* Professional Trust Badges - Hidden on mobile for less clutter */}
      <div className="hidden lg:flex absolute top-12 left-12 flex-col space-y-4 z-20">
        <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center space-x-3 shadow-lg">
          <div className="icon-container w-12 h-12">
            <Star className="icon-primary w-6 h-6" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-xl">4.9</p>
            <p className="text-slate-500 text-sm">Rating</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center space-x-3 shadow-lg">
          <div className="icon-container w-12 h-12">
            <Shield className="icon-dark w-6 h-6" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-xl">100%</p>
            <p className="text-slate-500 text-sm">Insured</p>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex absolute bottom-12 right-12 bg-white p-4 rounded-xl border border-slate-100 flex items-center space-x-3 z-20 shadow-lg">
        <div className="icon-container w-12 h-12">
          <Clock className="icon-dark w-6 h-6" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-slate-900 font-bold text-xl">24/7</p>
          <p className="text-slate-500 text-sm">Service</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
