import React, { useState } from 'react';
import { Car, Plane, Clock, Users, Briefcase, Heart, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

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
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedService === service.id ? 'ring-4 ring-taxi-yellow' : ''
              }`}
              onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
            >
              {service.popular && (
                <div className="bg-taxi-yellow text-taxi-black text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Popular
                </div>
              )}
              <div className="w-16 h-16 bg-taxi-yellow/20 rounded-full flex items-center justify-center mb-4">
                <service.icon className="text-taxi-yellow" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="text-lg font-semibold text-taxi-yellow mb-4">{service.price}</div>
              
              {selectedService === service.id && (
                <div className="mt-4 pt-4 border-t border-white/30">
                  <h4 className="font-semibold text-taxi-black mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="text-taxi-yellow mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary w-full mt-4">Book Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Our Fleet</h2>
          <p className="text-xl text-gray-700">Choose from our wide range of well-maintained vehicles</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleCategories.map((category, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-taxi-black mb-3">{category.category}</h3>
              <div className="text-lg font-semibold text-taxi-yellow mb-3">{category.price}</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Available Vehicles:</p>
                <div className="flex flex-wrap gap-2">
                  {category.vehicles.map((vehicle, idx) => (
                    <span key={idx} className="bg-taxi-yellow/20 text-taxi-black px-2 py-1 rounded text-sm">
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-1 mb-4">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="text-taxi-yellow mr-2" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary w-full">Select Category</button>
            </div>
          ))}
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
