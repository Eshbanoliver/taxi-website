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
      bgGradient: "from-black/70 via-black/50 to-black/70"
    },
    {
      id: 2,
      title: "Airport Transfers",
      subtitle: "Never miss your flight",
      description: "Reliable airport pickup and drop services with real-time flight tracking",
      image: "https://images.unsplash.com/photo-1436491865334-268b13d53b3a?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Flight Monitoring", "Luggage Help", "Meet & Greet"],
      ctaText: "Book Airport Ride",
      bgGradient: "from-black/70 via-black/50 to-black/70"
    },
    {
      id: 3,
      title: "Corporate Solutions",
      subtitle: "Business travel made easy",
      description: "Customized transportation solutions for companies and corporate events",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Monthly Billing", "Priority Service", "Executive Vehicles"],
      ctaText: "Corporate Plans",
      bgGradient: "from-black/70 via-black/50 to-black/70"
    },
    {
      id: 4,
      title: "City Tours & Sightseeing",
      subtitle: "Explore the city in comfort",
      description: "Guided city tours and sightseeing packages with experienced drivers",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Local Guides", "Flexible Routes", "Photo Stops"],
      ctaText: "Book City Tour",
      bgGradient: "from-black/70 via-black/50 to-black/70"
    },
    {
      id: 5,
      title: "Outstation Travel",
      subtitle: "Journey beyond the city",
      description: "Comfortable long-distance travel with experienced highway drivers",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["One-way & Round-trip", "Highway Expert", "Comfortable"],
      ctaText: "Plan Outstation Trip",
      bgGradient: "from-black/70 via-black/50 to-black/70"
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
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            
            {/* Content */}
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-7xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left space-y-8 lg:space-y-12">
                  {/* Title */}
                  <div className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-taxi-yellow font-semibold">
                      {slide.subtitle}
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                    {slide.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center space-x-2 bg-taxi-yellow/20 backdrop-blur-sm px-6 py-3 rounded-full border border-taxi-yellow/30"
                      >
                        <CheckCircle className="text-taxi-yellow" size={20} />
                        <span className="text-white font-medium text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <button className="group relative bg-taxi-yellow text-taxi-black font-bold py-5 px-10 rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 min-w-[220px] text-lg">
                      <Phone size={24} className="group-hover:animate-pulse" />
                      <span>{slide.ctaText}</span>
                      <div className="absolute inset-0 bg-white/20 rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    <a href="/services" className="group bg-white/10 backdrop-blur-md text-white font-semibold py-5 px-10 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20 flex items-center justify-center min-w-[220px] text-lg">
                      <span>View All Services</span>
                      <ChevronRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
          className="pointer-events-auto group bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto group bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20 shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
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
                : 'bg-white/40 hover:bg-white/60 w-10'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Professional Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-12 right-12 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 z-30 shadow-xl"
        aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlay ? (
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-5 h-5 bg-current rounded-sm" />
          </div>
        ) : (
          <div className="w-6 h-6 flex items-center justify-center space-x-1.5">
            <div className="w-1.5 h-5 bg-current" />
            <div className="w-1.5 h-5 bg-current" />
          </div>
        )}
      </button>

      {/* Professional Trust Badges */}
      <div className="absolute top-12 left-12 flex flex-col space-y-4 z-20">
        <div className="bg-taxi-yellow/20 backdrop-blur-sm p-4 rounded-xl border border-taxi-yellow/30 flex items-center space-x-3 shadow-xl">
          <Star className="text-taxi-yellow" size={24} />
          <div>
            <p className="text-white font-bold text-xl">4.9</p>
            <p className="text-white/80 text-sm">Rating</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex items-center space-x-3 shadow-xl">
          <Shield className="text-white" size={24} />
          <div>
            <p className="text-white font-bold text-xl">100%</p>
            <p className="text-white/80 text-sm">Insured</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex items-center space-x-3 z-20 shadow-xl">
        <Clock className="text-white" size={24} />
        <div>
          <p className="text-white font-bold text-xl">24/7</p>
          <p className="text-white/80 text-sm">Service</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
