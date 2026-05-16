import React, { useState } from 'react';
import { Star, CheckCircle, Users, MapPin, Clock, Shield, Car, ArrowRight, Plane, Phone, BookOpen, HelpCircle } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const testimonials = [
    { name: 'Rahul Sharma', text: 'Excellent service! The driver was professional and the car was spotless.', rating: 5, image: '/user_rahul_1778825783527.png' },
    { name: 'Priya Patel', text: 'Very reliable and affordable. Best taxi service in Udaipur!', rating: 5, image: '/user_priya_1778825801950.png' },
    { name: 'Amit Kumar', text: 'Punctual pickups and comfortable rides. Highly recommended!', rating: 5, image: '/user_amit_1778825821792.png' },
    { name: 'Kavya Nair', text: 'Transparent pricing and no hidden charges. Trustworthy service!', rating: 5, image: '/user_priya_1778825801950.png' },
  ];

  return (
    <div className="w-full bg-white selection:bg-taxi-yellow selection:text-taxi-black">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section - Luxury Reveal */}
      <section className="relative py-32 md:py-64 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-[120px] rounded-full animate-blob" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 animate-fade-in-up">
              <div className="inline-flex items-center space-x-3 glass-premium px-6 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-soft-glow" />
                <span className="text-slate-900 font-black text-xs tracking-widest uppercase">Since 2014</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black leading-tight">
                <span className="font-serif italic block">Redefining</span> 
                Udaipur's <span className="text-gradient-gold shimmer">Urban Mobility</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                With over a decade of excellence, we combine cutting-edge technology with traditional hospitality to deliver safe, comfortable, and affordable journeys.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Shield, text: "Fully Licensed & Insured", color: "text-emerald-500" },
                  { icon: Clock, text: "24/7 Availability", color: "text-amber-500" },
                  { icon: Users, text: "Professional Drivers", color: "text-indigo-500" },
                  { icon: MapPin, text: "City Wide Coverage", color: "text-rose-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 glass border-white/50 rounded-3xl hover:shadow-premium-hover transition-all duration-500 group">
                    <div className={`p-4 rounded-2xl bg-white shadow-premium group-hover:scale-110 transition-transform`}>
                      <item.icon className={`${item.color}`} size={24} strokeWidth={2.5} />
                    </div>
                    <span className="font-black text-slate-900 tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <a href="/about" className="btn-premium inline-flex py-6 px-16 text-lg">
                <span>Discover Our Story</span>
                <ArrowRight size={24} />
              </a>
            </div>
            
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-taxi-yellow/20 blur-3xl rounded-[4rem] group-hover:bg-taxi-yellow/30 transition-colors duration-1000" />
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:scale-105">
                <img src="/about_hero_taxi_1778825012509.png" alt="Premium Taxi" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="glass-premium p-8 rounded-3xl flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-black text-white">50K+</div>
                      <div className="text-slate-300 font-bold uppercase tracking-widest text-xs">Rides Completed</div>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div>
                      <div className="text-4xl font-black text-taxi-yellow">4.9</div>
                      <div className="text-slate-300 font-bold uppercase tracking-widest text-xs">Avg Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section - Dark Immersive */}
      <section className="relative py-32 md:py-64 bg-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-vibrant-indigo opacity-20 animate-moving-mesh" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight">
              Numbers that <span className="font-serif italic text-taxi-yellow">Inspire</span> Confidence
            </h2>
            <p className="text-xl text-slate-400 font-medium">Metrics that showcase our commitment to world-class service standards.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: '50K+', label: 'Rides Done', icon: Car, color: 'gold' },
              { number: '10K+', label: 'Happy Guests', icon: Users, color: 'sapphire' },
              { number: '15+', label: 'Cities Served', icon: MapPin, color: 'sunset' },
              { number: '24/7', label: 'Availability', icon: Clock, color: 'gold' },
            ].map((metric, index) => (
              <div key={index} className="group relative glass-dark rounded-[3rem] p-12 text-center border-white/5 hover:border-white/20 transition-all duration-700 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="mb-10 mx-auto w-20 h-20 icon-container bg-white/5 border-white/10 group-hover:scale-110 transition-transform">
                  <metric.icon className="text-white" size={32} strokeWidth={1.5} />
                </div>
                <div className={`text-5xl font-black mb-4 text-gradient-${metric.color} shimmer`}>{metric.number}</div>
                <div className="text-slate-400 font-black uppercase tracking-[0.2em] text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Bento Style Refined */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12 animate-fade-in-up">
            <div className="space-y-8 max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-black leading-tight">
                Our <span className="font-serif italic">Premium</span> <br />
                <span className="text-gradient-gold">Services</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">Comprehensive transportation solutions designed for the discerning traveler.</p>
            </div>
            <a href="/services" className="btn-premium py-6 px-16 text-lg">
              <span>View All Fleet</span>
              <ArrowRight size={24} />
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: 'Local Rides', desc: 'Luxury city transport at your fingertips.', icon: Car, color: 'gold' },
              { title: 'Airport Transfers', desc: 'Punctual, elite airport pickup and drop.', icon: Plane, color: 'sapphire' },
              { title: 'Outstation Trips', desc: 'Premium long-distance highway comfort.', icon: MapPin, color: 'sunset' },
            ].map((service, index) => (
              <div key={index} className="group bento-card-premium animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative z-10 space-y-12">
                  <div className="w-20 h-20 icon-container bg-slate-900 text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">{service.title}</h3>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-taxi-yellow font-black uppercase tracking-widest text-xs group-hover:translate-x-4 transition-transform">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                   <service.icon size={120} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories - Luxury Carousel Style */}
      <section className="relative py-32 md:py-64 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight">
              Client <span className="font-serif italic text-taxi-yellow">Stories</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">Real experiences from our community of travelers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="glass-premium p-12 rounded-[3.5rem] space-y-12 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-taxi-yellow fill-current" size={20} />
                  ))}
                </div>
                <p className="text-2xl text-slate-900 font-serif leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-3xl object-cover shadow-premium" />
                  <div>
                    <div className="font-black text-slate-900 text-xl">{testimonial.name}</div>
                    <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Verified Traveler</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive Dark */}
      <section className="py-32 md:py-64 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative glass-dark p-12 md:p-32 rounded-[4rem] overflow-hidden group">
            <div className="absolute inset-0 bg-vibrant-rose opacity-40 animate-moving-mesh" />
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-tight">
                Ready for a <br />
                <span className="font-serif italic text-taxi-yellow">First Class</span> Journey?
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed">
                Join thousands of satisfied customers who trust Taxi GO for their transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <a href="/contact" className="btn-premium py-6 px-20 text-xl">
                  <Phone size={24} />
                  <span>Book Now</span>
                </a>
                <a href="/services" className="btn-outline-premium py-6 px-20 text-xl">
                  <span>View Fleet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
