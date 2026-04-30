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
      bgGradient: "from-blue-900/90 to-blue-700/90"
    },
    {
      id: 2,
      title: "Airport Transfers",
      subtitle: "Never miss your flight",
      description: "Reliable airport pickup and drop services with real-time flight tracking",
      image: "https://images.unsplash.com/photo-1436491865334-268b13d53b3a?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Flight Monitoring", "Luggage Help", "Meet & Greet"],
      ctaText: "Book Airport Ride",
      bgGradient: "from-purple-900/90 to-purple-700/90"
    },
    {
      id: 3,
      title: "Corporate Solutions",
      subtitle: "Business travel made easy",
      description: "Customized transportation solutions for companies and corporate events",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Monthly Billing", "Priority Service", "Executive Vehicles"],
      ctaText: "Corporate Plans",
      bgGradient: "from-gray-900/90 to-gray-700/90"
    },
    {
      id: 4,
      title: "City Tours & Sightseeing",
      subtitle: "Explore the city in comfort",
      description: "Guided city tours and sightseeing packages with experienced drivers",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["Local Guides", "Flexible Routes", "Photo Stops"],
      ctaText: "Book City Tour",
      bgGradient: "from-green-900/90 to-green-700/90"
    },
    {
      id: 5,
      title: "Outstation Travel",
      subtitle: "Journey beyond the city",
      description: "Comfortable long-distance travel with experienced highway drivers",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center&auto=format",
      features: ["One-way & Round-trip", "Highway Expert", "Comfortable"],
      ctaText: "Plan Outstation Trip",
      bgGradient: "from-orange-900/90 to-orange-700/90"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
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
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
            
            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-yellow-300 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {slide.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                        >
                          <CheckCircle className="text-yellow-300" size={16} />
                          <span className="text-white font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-taxi-yellow text-taxi-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                        <Phone size={20} />
                        <span>{slide.ctaText}</span>
                      </button>
                      <a href="/services" className="bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30">
                        View All Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between items-center pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-taxi-yellow w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
        aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlay ? (
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-3 h-3 bg-current rounded-sm" />
          </div>
        ) : (
          <div className="w-4 h-4 flex items-center justify-center space-x-0.5">
            <div className="w-1 h-4 bg-current" />
            <div className="w-1 h-4 bg-current" />
          </div>
        )}
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-taxi-yellow/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
          <Star className="text-yellow-300" size={24} />
          <p className="text-white font-semibold mt-2">4.9 Rating</p>
        </div>
      </div>
      
      <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
          <Shield className="text-white" size={24} />
          <p className="text-white font-semibold mt-2">Fully Insured</p>
        </div>
      </div>
      
      <div className="absolute bottom-40 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
          <Clock className="text-white" size={24} />
          <p className="text-white font-semibold mt-2">24/7 Service</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
