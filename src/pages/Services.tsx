import React, { useState } from 'react';
import { Car, Plane, Clock, Briefcase, Heart, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'local',
      title: 'Local City Rides',
      icon: Car,
      description: 'Quick and affordable transportation within the city',
      features: ['Point-to-point service', '24/7 availability', 'Experienced drivers', 'Clean vehicles'],
      price: 'Starting from ₹8/km',
      popular: true,
    },
    {
      id: 'airport',
      title: 'Airport Pickup & Drop',
      icon: Plane,
      description: 'Reliable airport transfers with flight tracking',
      features: ['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'No waiting charges'],
      price: 'Fixed rates available',
      popular: true,
    },
    {
      id: 'outstation',
      title: 'Outstation Trips',
      icon: MapPin,
      description: 'Comfortable long-distance travel to any destination',
      features: ['Round trip options', 'Experienced highway drivers', 'Multiple vehicle options', 'Transparent pricing'],
      price: 'Custom packages',
      popular: false,
    },
    {
      id: 'hourly',
      title: 'Hourly Rentals',
      icon: Clock,
      description: 'Flexible hourly packages for your convenience',
      features: ['Multiple stops allowed', 'No kilometer limits', 'Flexible duration', 'Professional chauffeurs'],
      price: 'Starting from ₹200/hour',
      popular: false,
    },
    {
      id: 'corporate',
      title: 'Corporate Travel',
      icon: Briefcase,
      description: 'Professional transportation solutions for businesses',
      features: ['Monthly billing', 'Priority service', 'Dedicated account manager', 'Executive vehicles'],
      price: 'Custom corporate rates',
      popular: false,
    },
    {
      id: 'wedding',
      title: 'Wedding & Event Transportation',
      icon: Heart,
      description: 'Special vehicles for weddings and special events',
      features: ['Decorated vehicles', 'Multiple car options', 'Professional chauffeurs', 'Special event packages'],
      price: 'Event-based pricing',
      popular: false,
    },
    {
      id: 'luxury',
      title: 'Luxury Car Rentals',
      icon: Car,
      description: 'Premium vehicles for special occasions',
      features: ['BMW, Mercedes, Audi', 'Professional chauffeurs', 'Premium experience', 'Complimentary refreshments'],
      price: 'Starting from ₹25/km',
      popular: true,
    },
    {
      id: 'custom',
      title: 'Custom Tours & Packages',
      icon: Calendar,
      description: 'Tailored travel solutions for your needs',
      features: ['Customized itineraries', 'Multi-city tours', 'Tour guide options', 'Flexible scheduling'],
      price: 'Custom quotes',
      popular: false,
    },
  ];

  const vehicleCategories = [
    {
      category: 'Economy',
      vehicles: ['Swift', 'WagonR', 'i10', 'Alto'],
      price: '₹7-10/km',
      features: ['AC', '4 Seats', 'Fuel Efficient'],
    },
    {
      category: 'Sedan',
      vehicles: ['Dzire', 'City', 'Ciaz', 'Verna'],
      price: '₹10-15/km',
      features: ['AC', '4 Seats', 'Comfortable', 'Spacious'],
    },
    {
      category: 'SUV',
      vehicles: ['Brezza', 'XUV500', 'Scorpio', 'Innova'],
      price: '₹13-20/km',
      features: ['AC', '7 Seats', 'Powerful', 'Off-road'],
    },
    {
      category: 'Luxury',
      vehicles: ['BMW 3 Series', 'Mercedes C-Class', 'Audi A4'],
      price: '₹25-35/km',
      features: ['AC', '4 Seats', 'Premium', 'Executive'],
    },
  ];

  return (
    <div className="min-h-screen">
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-vibrant-cyan animate-moving-mesh"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-10">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-full shadow-2xl animate-float">
              <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
              <span className="text-white font-black text-sm tracking-[0.3em] uppercase">Excellence in Motion</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-tight animate-slide-in-up shimmer">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-100 leading-relaxed font-medium max-w-4xl mx-auto animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              Comprehensive transportation solutions tailored to meet your every need with precision and luxury.
            </p>
          </div>
        </div>
        
        {/* Slant Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-vibrant-indigo mask-slant transform rotate-180"></div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-48">
        <div className="absolute inset-0 bg-vibrant-indigo animate-moving-mesh"></div>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full shadow-2xl">
              <Car className="text-taxi-yellow animate-float" size={20} />
              <span className="text-white font-black tracking-widest uppercase text-sm">Full Catalog</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white shimmer">Premium Transportation</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto font-medium">World-class solutions for every journey requirement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 perspective-1000">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card-3d group animate-slide-in-up ${
                  selectedService === service.id ? 'scale-[1.05] z-20' : 'z-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`relative glass-dark rounded-[3rem] p-8 sm:p-10 transition-all duration-700 border border-white/5 shadow-2xl cursor-pointer overflow-hidden ${
                    selectedService === service.id ? 'border-taxi-yellow/50 shadow-[0_0_50px_rgba(251,191,36,0.3)]' : 'hover:border-white/20'
                  }`}
                  onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                >
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 shimmer opacity-10 pointer-events-none"></div>
                  
                  {service.popular && (
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-taxi-yellow text-taxi-black text-xs font-black px-4 py-1.5 rounded-full shadow-2xl animate-pulse">
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="relative z-10 pt-4">
                    <div className="relative mb-10">
                      <div className="icon-container w-20 h-20 mx-auto bg-white/5 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500 animate-float">
                        <service.icon className="text-white w-10 h-10" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-3xl font-black text-white mb-4 text-gradient-gold shimmer">{service.title}</h3>
                      <p className="text-slate-300 leading-relaxed mb-6 text-lg font-medium">{service.description}</p>
                      <div className="text-xl font-black text-taxi-yellow mb-6 text-glow">{service.price}</div>
                    </div>
                    
                    {selectedService === service.id && (
                      <div className="mt-8 pt-8 border-t border-white/10 animate-fadeIn space-y-8">
                        <h4 className="font-black text-white text-lg tracking-widest uppercase">Key Features:</h4>
                        <ul className="space-y-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-slate-200 font-bold">
                              <CheckCircle className="text-taxi-yellow mr-4 shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={20} />
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full btn-primary shimmer py-5 px-8 text-lg shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                          Book This Experience
                        </button>
                      </div>
                    )}
                    
                    {selectedService !== service.id && (
                      <div className="text-center mt-6">
                        <div className="inline-flex items-center space-x-3 text-slate-400 font-black group-hover:text-taxi-yellow transition-colors duration-300 uppercase tracking-widest text-xs">
                          <span>View Details</span>
                          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="relative overflow-hidden pt-32 pb-48 lg:pt-48 lg:pb-64">
        <div className="absolute inset-0 bg-vibrant-emerald animate-moving-mesh"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full shadow-2xl">
              <Award className="text-emerald-400 animate-float" size={20} />
              <span className="text-white font-black tracking-widest uppercase text-sm">Premium Fleet</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white shimmer">Select Your Class</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto font-medium">Well-maintained luxury vehicles for every occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 perspective-1000">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="card-3d animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative glass-dark rounded-[2.5rem] p-8 transition-all duration-700 border border-white/5 shadow-2xl hover:border-white/20">
                  <div className="relative z-10">
                    <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8">
                      <div className="w-2 h-2 bg-taxi-yellow rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,1)]"></div>
                      <span className="text-taxi-yellow font-black text-xs sm:text-sm tracking-widest uppercase">{category.category}</span>
                    </div>
                    
                    <div className="text-3xl font-black text-white mb-8 shimmer">
                      {category.price}
                    </div>
                    
                    <div className="mb-10">
                      <p className="text-sm text-slate-400 mb-4 font-black tracking-widest uppercase">The Fleet:</p>
                      <div className="flex flex-wrap gap-3">
                        {category.vehicles.map((vehicle, idx) => (
                          <span key={idx} className="bg-white/5 border border-white/10 text-white px-4 py-1.5 rounded-xl text-xs font-black shadow-inner">
                            {vehicle}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-10">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 font-bold">
                          <CheckCircle className="text-taxi-yellow mr-3 shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-white/5 text-white font-black py-4 px-6 rounded-2xl hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-500 border border-white/10 shadow-xl group">
                      <span>Select Category</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="glass rounded-3xl p-6 sm:p-16 border border-slate-100 shadow-sm">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">How It Works</h2>
            <p className="text-sm sm:text-xl text-slate-600 px-4">Simple steps to book your ride</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-slate-100"></div>
            {[
              { step: '1', title: 'Book Ride', desc: 'Call, app, or website' },
              { step: '2', title: 'Confirmation', desc: 'Instant booking status' },
              { step: '3', title: 'Driver Info', desc: 'Pro driver details sent' },
              { step: '4', title: 'Enjoy Trip', desc: 'Safe & comfy journey' },
            ].map((item, index) => (
              <div key={index} className="text-center relative z-10 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-taxi-yellow transition-all duration-300 shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold text-taxi-black">{item.step}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-sm sm:text-xl text-slate-600 px-4">No hidden charges, fair and affordable rates</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'No Hidden Charges', desc: 'What you see is what you pay', icon: CheckCircle },
            { title: 'Competitive Rates', desc: 'Best prices in the market', icon: CheckCircle },
            { title: 'Multiple Payment Options', desc: 'Cash, card, and digital payments', icon: CheckCircle },
          ].map((item, index) => (
            <div key={index} className="glass rounded-3xl p-8 text-center transition-transform duration-300 hover:-translate-y-2 border border-slate-100 shadow-sm">
              <div className="icon-container w-16 h-16 mx-auto mb-6">
                <item.icon className="icon-primary w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom CTA */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-48">
        <div className="absolute inset-0 bg-vibrant-violet animate-moving-mesh"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative glass-dark rounded-[4rem] p-12 md:p-24 lg:p-32 text-center border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer opacity-20 pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-full animate-float">
                <div className="w-2.5 h-2.5 bg-taxi-yellow rounded-full animate-pulse shadow-[0_0_15px_rgba(251,191,36,1)]"></div>
                <span className="text-white font-black text-sm tracking-[0.4em] uppercase">Tailored Travel</span>
              </div>
              
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-tight">
                Need a <span className="text-gradient-gold shimmer">Custom Service?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-medium">
                We offer bespoke transportation solutions for weddings, corporate events, and specialized requirements. 
                Experience the difference with Taxi GO.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
                <button className="btn-primary shimmer hover-glow py-6 px-16 text-xl shadow-[0_0_50px_rgba(251,191,36,0.3)]">
                  Get Custom Quote
                </button>
                <button className="bg-white/10 backdrop-blur-2xl border border-white/20 text-white font-black py-6 px-16 rounded-3xl hover:bg-white hover:text-taxi-black transition-all duration-500 text-xl shadow-2xl">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
