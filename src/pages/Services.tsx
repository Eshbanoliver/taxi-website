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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-yellow-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-taxi-black mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive transportation solutions tailored to meet your every need
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Premium Transportation</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Comprehensive solutions tailored to meet your every need</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative ${
                  selectedService === service.id ? 'scale-105' : ''
                }`}
              >
                {/* Card */}
                <div
                  className={`relative glass rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer ${
                    selectedService === service.id ? 'ring-4 ring-taxi-yellow shadow-2xl' : ''
                  }`}
                  onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-taxi-yellow/20 rounded-full animate-pulse"></div>
                  
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <service.icon className="text-taxi-black" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-taxi-yellow opacity-30 animate-ping"></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-gray-800 transition-colors duration-300">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                    
                    {/* Price */}
                    <div className="text-xl font-bold text-taxi-yellow mb-4">{service.price}</div>
                    
                    {/* Features (shown when selected) */}
                    {selectedService === service.id && (
                      <div className="mt-6 pt-6 border-t border-white/30 animate-fadeIn">
                        <h4 className="font-bold text-taxi-black mb-4">Features:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700 group/item">
                              <div className="w-5 h-5 bg-taxi-yellow rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                <CheckCircle className="text-taxi-black" size={14} />
                              </div>
                              <span className="group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-3 px-6 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mt-6">
                          Book Now
                        </button>
                      </div>
                    )}
                    
                    {/* View more hint (when not selected) */}
                    {selectedService !== service.id && (
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 text-taxi-yellow font-medium group-hover:text-taxi-black transition-colors duration-300">
                          <span>View Details</span>
                          <CheckCircle className="group-hover:rotate-180 transition-transform duration-300" size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-taxi-yellow to-yellow-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Fleet</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Premium Vehicles</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Choose from our wide range of well-maintained vehicles</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-3xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-taxi-yellow/20 rounded-full animate-pulse"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-3 py-1 rounded-full mb-4">
                      <div className="w-2 h-2 bg-taxi-yellow rounded-full animate-pulse"></div>
                      <span className="text-taxi-yellow font-bold text-sm">{category.category}</span>
                    </div>
                    
                    {/* Price */}
                    <div className="text-2xl font-bold text-taxi-black mb-4 group-hover:text-taxi-yellow transition-colors duration-300">
                      {category.price}
                    </div>
                    
                    {/* Vehicles */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-3 font-medium">Available Vehicles:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.vehicles.map((vehicle, idx) => (
                          <span key={idx} className="bg-taxi-yellow/20 text-taxi-black px-3 py-1 rounded-full text-sm font-medium hover:bg-taxi-yellow/30 transition-colors duration-300">
                            {vehicle}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 group/item">
                          <div className="w-4 h-4 bg-taxi-yellow rounded-full flex items-center justify-center mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                            <CheckCircle className="text-taxi-black" size={12} />
                          </div>
                          <span className="text-sm group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Button */}
                    <button className="w-full glass text-taxi-black font-bold py-3 px-6 rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-taxi-yellow/30 group">
                      <span className="group-hover:text-taxi-yellow transition-colors duration-300">Select Category</span>
                    </button>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-taxi-yellow to-yellow-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-700">Simple steps to book your ride</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Book Your Ride', desc: 'Call, app, or website' },
              { step: '2', title: 'Get Confirmation', desc: 'Instant booking confirmation' },
              { step: '3', title: 'Driver Assigned', desc: 'Professional driver assigned' },
              { step: '4', title: 'Enjoy Your Trip', desc: 'Safe and comfortable journey' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-taxi-black">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-taxi-black mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-700">No hidden charges, fair and affordable rates</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'No Hidden Charges', desc: 'What you see is what you pay', icon: CheckCircle },
            { title: 'Competitive Rates', desc: 'Best prices in the market', icon: CheckCircle },
            { title: 'Multiple Payment Options', desc: 'Cash, card, and digital payments', icon: CheckCircle },
          ].map((item, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <item.icon className="text-taxi-yellow mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-taxi-black mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-taxi-yellow to-yellow-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Need a Custom Service?</h2>
          <p className="text-xl text-gray-800 mb-8">
            We offer customized transportation solutions for special requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-taxi-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
              Get Custom Quote
            </button>
            <button className="bg-white text-taxi-black font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
