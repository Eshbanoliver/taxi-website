import React, { useState } from 'react';
import { Car, Plane, Clock, Briefcase, Heart, Calendar, MapPin, CheckCircle, ArrowRight, Award, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import VehicleDetailsModal from '../components/VehicleDetailsModal';

interface ServicesProps {
  onOpenBooking: () => void;
}

const Services = ({ onOpenBooking }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const services = [
    {
      id: 'local',
      title: 'Local City Rides',
      icon: Car,
      description: 'Quick and affordable transportation within the city with premium comfort.',
      features: ['Point-to-point service', '24/7 availability', 'Experienced drivers', 'Clean vehicles'],
      price: 'Starting from ₹8/km',
      popular: true,
      color: 'gold'
    },
    {
      id: 'airport',
      title: 'Airport Transfers',
      icon: Plane,
      description: 'Reliable airport transfers with flight tracking and meet & greet service.',
      features: ['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'No waiting charges'],
      price: 'Fixed rates available',
      popular: true,
      color: 'sapphire'
    },
    {
      id: 'outstation',
      title: 'Outstation Trips',
      icon: MapPin,
      description: 'Comfortable long-distance travel to any destination across the country.',
      features: ['Round trip options', 'Experienced highway drivers', 'Multiple vehicle options', 'Transparent pricing'],
      price: 'Custom packages',
      popular: false,
      color: 'sunset'
    },
    {
      id: 'hourly',
      title: 'Hourly Rentals',
      icon: Clock,
      description: 'Flexible hourly packages for your convenience and business needs.',
      features: ['Multiple stops allowed', 'No kilometer limits', 'Flexible duration', 'Professional chauffeurs'],
      price: 'Starting from ₹200/hour',
      popular: false,
      color: 'gold'
    },
    {
      id: 'corporate',
      title: 'Corporate Travel',
      icon: Briefcase,
      description: 'Professional transportation solutions for modern enterprises.',
      features: ['Monthly billing', 'Priority service', 'Dedicated account manager', 'Executive vehicles'],
      price: 'Custom corporate rates',
      popular: false,
      color: 'sapphire'
    },
    {
      id: 'luxury',
      title: 'Luxury Rentals',
      icon: Award,
      description: 'Premium vehicles for special occasions and executive travel.',
      features: ['BMW, Mercedes, Audi', 'Professional chauffeurs', 'Premium experience', 'Refreshments'],
      price: 'Starting from ₹25/km',
      popular: true,
      color: 'gold'
    }
  ];

  const vehicleCategories = [
    {
      category: 'Economy',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop&auto=format&q=80',
      vehicles: ['Swift', 'WagonR', 'i10'],
      price: '₹7-10/km',
      features: ['AC', '4 Seats', 'Fuel Efficient'],
    },
    {
      category: 'Sedan',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop&auto=format&q=80',
      vehicles: ['Dzire', 'City', 'Ciaz'],
      price: '₹10-15/km',
      features: ['AC', '4 Seats', 'Comfortable', 'Spacious'],
    },
    {
      category: 'SUV',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop&auto=format&q=80',
      vehicles: ['XUV500', 'Innova'],
      price: '₹13-20/km',
      features: ['AC', '7 Seats', 'Powerful'],
    },
    {
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format&q=80',
      vehicles: ['BMW', 'Mercedes'],
      price: '₹25-35/km',
      features: ['AC', '4 Seats', 'Premium', 'Executive'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Taxi Services & Fleet | Local, Airport & Outstation Taxi in Udaipur"
        description="Explore our premium vehicle fleet and services. From local Udaipur city rides to outstation travel and airport transfers at transparent rates."
        keywords="taxi services Udaipur, car fleet Udaipur, airport cab Udaipur, outstation taxi service Udaipur, Udaipur vehicle rental"
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1600&h=900&fit=crop&auto=format&q=80')` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-taxi-yellow/10 rounded-full blur-[120px] animate-blob" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 glass-premium px-8 py-3 rounded-full">
              <div className="w-2.5 h-2.5 bg-taxi-yellow rounded-full animate-pulse shadow-soft-glow" />
              <span className="text-white font-black text-xs tracking-[0.3em] uppercase">Excellence in Motion</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-tight">
              Our <span className="font-serif italic text-gradient-gold shimmer">Premium</span> <br />
              Services
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-200 max-w-2xl font-medium leading-relaxed">
              Comprehensive transportation solutions tailored to meet your every need with precision and luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Refined Bento */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8 animate-fade-in-up">
             <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight">
              A Service for <span className="font-serif italic text-taxi-yellow">Every</span> Need
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              From daily commutes to executive travel, we've perfected the art of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bento-card-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 space-y-12">
                  <div className="flex justify-between items-start">
                    <div className="w-20 h-20 icon-container bg-slate-900 text-white shadow-2xl group-hover:scale-110 transition-transform">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    {service.popular && (
                      <div className="bg-taxi-yellow text-taxi-black text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-lg">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">{service.title}</h3>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">{service.description}</p>
                    <div className="text-2xl font-black text-taxi-yellow">{service.price}</div>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-slate-600 font-bold">
                        <CheckCircle size={18} className="text-emerald-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    <button 
                      onClick={onOpenBooking}
                      className="w-full btn-premium mt-8 py-5"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                
                {/* Background Icon Decoration */}
                <div className="absolute -bottom-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-150 group-hover:-rotate-12">
                  <service.icon size={240} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase - Luxury Cards */}
      <section className="py-32 md:py-64 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-vibrant-emerald opacity-10 animate-moving-mesh" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight">
              Select Your <span className="font-serif italic text-taxi-yellow">Class</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">Experience the fleet of Udaipur's premier taxi service.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative glass-dark rounded-[3.5rem] overflow-hidden border-white/5 hover:border-white/20 transition-all duration-700">
                  <div className="h-64 overflow-hidden relative">
                    <img src={category.image} alt={`${category.category} taxi class vehicle - Taxi GO Udaipur`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-10 space-y-8">
                    <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                      <div className="w-2 h-2 bg-taxi-yellow rounded-full animate-pulse shadow-soft-glow" />
                      <span className="text-taxi-yellow font-black text-xs tracking-widest uppercase">{category.category}</span>
                    </div>
                    
                    <div className="text-4xl font-black text-white shimmer">{category.price}</div>
                    
                    <div className="space-y-4">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-slate-400 font-bold">
                          <CheckCircle size={16} className="text-taxi-yellow" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDetailsOpen(true);
                      }}
                      className="w-full py-5 rounded-2xl bg-white/5 text-white font-black uppercase tracking-widest text-xs border border-white/10 hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-500"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services CTA */}
      <section className="py-32 md:py-64 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative glass-dark p-12 md:p-32 rounded-[4rem] overflow-hidden group">
            <div className="absolute inset-0 bg-vibrant-indigo opacity-30 animate-moving-mesh" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12 animate-fade-in-up">
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Tailored <span className="font-serif italic text-taxi-yellow">Luxury</span> for Your Events
                </h2>
                <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed">
                  We offer bespoke transportation solutions for weddings, corporate galas, and specialized requirements. 
                </p>
                <div className="flex flex-wrap gap-8">
                  <button 
                    onClick={onOpenBooking}
                    className="btn-premium py-6 px-16 text-lg"
                  >
                    <Phone size={24} />
                    <span>Get Custom Quote</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Heart, label: 'Weddings' },
                  { icon: Briefcase, label: 'Corporate' },
                  { icon: Calendar, label: 'Events' },
                  { icon: Shield, label: 'Security' },
                ].map((item, idx) => (
                  <div key={idx} className="glass-premium p-10 rounded-3xl text-center space-y-6 hover:bg-white/20 transition-all cursor-default">
                    <div className="w-16 h-16 mx-auto icon-container bg-taxi-yellow text-taxi-black shadow-2xl">
                      <item.icon size={28} />
                    </div>
                    <div className="font-black text-white uppercase tracking-widest text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <VehicleDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        category={selectedCategory} 
      />
    </div>
  );
};

export default Services;
