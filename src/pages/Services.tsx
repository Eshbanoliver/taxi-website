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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mx-auto">
              Comprehensive transportation solutions tailored to meet your every need
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Premium Transportation</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Comprehensive solutions tailored to meet your every need</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative ${
                  selectedService === service.id ? 'scale-[1.02]' : ''
                }`}
              >
                {/* Card */}
                <div
                  className={`relative glass rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 border border-white/10 cursor-pointer ${
                    selectedService === service.id ? 'ring-2 ring-taxi-yellow' : ''
                  }`}
                  onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                >
                  
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-taxi-yellow text-taxi-black text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 pt-4">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:bg-taxi-yellow">
                        <service.icon className="text-taxi-yellow group-hover:text-taxi-black transition-colors duration-300" size={32} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-4 text-sm">{service.description}</p>
                      
                      {/* Price */}
                      <div className="text-lg font-bold text-taxi-yellow mb-4">{service.price}</div>
                    </div>
                    
                    {/* Features (shown when selected) */}
                    {selectedService === service.id && (
                      <div className="mt-6 pt-6 border-t border-white/10 animate-fadeIn">
                        <h4 className="font-bold text-white mb-4">Features:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="text-taxi-yellow" size={12} />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-taxi-yellow text-taxi-black font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 mt-6">
                          Book Now
                        </button>
                      </div>
                    )}
                    
                    {/* View more hint (when not selected) */}
                    {selectedService !== service.id && (
                      <div className="text-center mt-4">
                        <div className="inline-flex items-center space-x-2 text-gray-400 font-medium group-hover:text-taxi-yellow transition-colors duration-300">
                          <span className="text-sm">View Details</span>
                          <CheckCircle className="transition-transform duration-300" size={14} />
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
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Fleet</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Premium Vehicles</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Choose from our wide range of well-maintained vehicles</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-12">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2 border border-white/10">
                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4">
                      <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                      <span className="text-taxi-yellow font-bold text-sm">{category.category}</span>
                    </div>
                    
                    {/* Price */}
                    <div className="text-2xl font-bold text-white mb-4 group-hover:text-taxi-yellow transition-colors duration-300">
                      {category.price}
                    </div>
                    
                    {/* Vehicles */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-3 font-medium">Available Vehicles:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.vehicles.map((vehicle, idx) => (
                          <span key={idx} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                            {vehicle}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <CheckCircle className="text-taxi-yellow mr-2 flex-shrink-0" size={14} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Button */}
                    <button className="w-full bg-white/5 text-white font-bold py-3 px-6 rounded-full hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300 border border-white/10">
                      Select Category
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
        <div className="glass rounded-3xl p-10 md:p-16 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Simple steps to book your ride</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/10"></div>
            {[
              { step: '1', title: 'Book Your Ride', desc: 'Call, app, or website' },
              { step: '2', title: 'Get Confirmation', desc: 'Instant booking confirmation' },
              { step: '3', title: 'Driver Assigned', desc: 'Professional driver assigned' },
              { step: '4', title: 'Enjoy Your Trip', desc: 'Safe and comfortable journey' },
            ].map((item, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-16 h-16 bg-white border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-taxi-yellow transition-colors duration-300">
                  <span className="text-2xl font-bold text-taxi-black">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-300">No hidden charges, fair and affordable rates</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'No Hidden Charges', desc: 'What you see is what you pay', icon: CheckCircle },
            { title: 'Competitive Rates', desc: 'Best prices in the market', icon: CheckCircle },
            { title: 'Multiple Payment Options', desc: 'Cash, card, and digital payments', icon: CheckCircle },
          ].map((item, index) => (
            <div key={index} className="glass rounded-3xl p-8 text-center transition-transform duration-300 hover:-translate-y-2 border border-white/10">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-taxi-yellow" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-taxi-yellow/10 rounded-3xl"></div>
          <div className="relative glass rounded-3xl p-12 md:p-20 text-center border border-white/10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need a Custom Service?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We offer customized transportation solutions for special requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-taxi-yellow text-taxi-black font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300">
                Get Custom Quote
              </button>
              <button className="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
