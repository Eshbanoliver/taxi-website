import React, { useState } from 'react';
import { Star, CheckCircle, Users, MapPin, Clock, Shield, Car, ArrowRight, Plane, Phone, TrendingUp, HelpCircle, BookOpen, MessageCircle, Mail, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sedan', 'SUV', 'Luxury', 'Economy'];
  
  const testimonials = [
    { name: 'Rahul Sharma', text: 'Excellent service! The driver was professional and the car was spotless.', rating: 5 },
    { name: 'Priya Patel', text: 'Very reliable and affordable. Best taxi service in Udaipur!', rating: 5 },
    { name: 'Amit Kumar', text: 'Punctual pickups and comfortable rides. Highly recommended!', rating: 5 },
    { name: 'Kavya Nair', text: 'Transparent pricing and no hidden charges. Trustworthy service!', rating: 5 },
  ];

  const faqs = [
    { q: 'How do I book a taxi?', a: 'You can book through our app, website, or by calling our hotline.' },
    { q: 'What are your payment options?', a: 'We accept cash, credit cards, and digital payments.' },
    { q: 'Are your drivers licensed?', a: 'Yes, all our drivers are licensed and professionally trained.' },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Us Preview */}
      <section className="section-container bg-emerald-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-200/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-100/20 blur-[120px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-mesh-emerald border border-emerald-100/50 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/30 to-transparent rounded-3xl"></div>
          
          <div className="relative glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden mask-slant shadow-2xl border-white/20">
            <div className="absolute inset-0 bg-mesh-dark-vibrant opacity-95 animate-moving-mesh"></div>
            <div className="relative content-grid">
              <div className="space-y-8 sm:space-y-12 text-center lg:text-left">
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl animate-float">
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,1)]"></div>
                    <span className="text-white font-black text-xs sm:text-sm tracking-[0.2em] uppercase">Since 2014</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight animate-slide-in-up">
                    Your Trusted
                    <span className="block text-gradient-gold mt-2 shimmer">Journey Partner</span>
                  </h2>
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                  With over a decade of excellence, we stand as Udaipur's premier transportation provider. 
                  We combine cutting-edge technology with traditional hospitality to deliver safe, comfortable, and affordable journeys.
                </p>
                
                {/* Key highlights with 3D Effect */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 perspective-1000">
                  {[
                    { icon: Shield, text: "Fully Licensed & Insured", color: "emerald" },
                    { icon: Clock, text: "24/7 Availability", color: "amber" },
                    { icon: Users, text: "Professional Drivers", color: "indigo" },
                    { icon: MapPin, text: "City Wide Coverage", color: "rose" }
                  ].map((item, index) => (
                    <div key={index} className="card-3d animate-slide-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                      <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl group hover:border-white/20 transition-all duration-300">
                        <div className={`icon-container w-12 h-12 sm:w-16 sm:h-16 bg-${item.color}-500/10 border-${item.color}-500/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                          <item.icon className={`text-white w-6 h-6 sm:w-8 sm:h-8 animate-float`} style={{ animationDelay: `${index * 500}ms` }} strokeWidth={2} />
                        </div>
                        <span className="text-white font-black text-base sm:text-lg group-hover:text-taxi-yellow transition-colors duration-300 tracking-wide">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a href="/about" className="btn-primary shimmer hover-glow inline-flex items-center space-x-3 text-lg py-5 px-12 shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-slide-in-up" style={{ animationDelay: '700ms' }}>
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
              
              <div className="relative perspective-1000">
                {/* Main visual with 3D Float */}
                <div className="relative animate-float card-3d">
                  <div className="absolute -inset-10 bg-taxi-yellow/20 blur-[100px] rounded-full animate-pulse"></div>
                  <div className="w-full h-[400px] md:h-[550px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                    {/* Main content */}
                    <div className="relative z-10 text-center animate-slide-in-up">
                      <div className="w-32 h-32 icon-container mx-auto mb-8 shadow-[0_0_50px_rgba(251,191,36,0.4)] bg-taxi-yellow border-none">
                        <Car className="text-taxi-black w-16 h-16 animate-float" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 shimmer text-gradient-gold">Premium Taxi</h3>
                      <p className="text-slate-300 text-xl font-bold">World Class Experience</p>
                    </div>
                    
                    {/* Floating badges with 3D shadow */}
                    <div className="absolute top-12 left-12 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-6 py-3 rounded-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                      <span className="text-white font-black text-lg">50K+ Rides</span>
                    </div>
                    <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-6 py-3 rounded-2xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                      <span className="text-taxi-yellow font-black text-lg">4.9 Rating</span>
                    </div>
                  </div>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-8">
                  {[
                    { number: "10+", label: "Years Experience" },
                    { number: "15+", label: "Cities" },
                    { number: "100%", label: "Satisfaction" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group animate-slide-in-up" style={{ animationDelay: `${800 + index * 100}ms` }}>
                      <div className="text-2xl font-bold text-taxi-black group-hover:text-taxi-yellow transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-container bg-amber-50/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/4 h-1/4 bg-amber-200/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-orange-100/20 blur-[100px] rounded-full"></div>
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Our Impact</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up">Numbers That Define Excellence</h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>Metrics that showcase our commitment to quality service</p>
        </div>
        
        <div className="relative perspective-1000">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-mesh-dark-vibrant rounded-[3rem] animate-moving-mesh shadow-inner"></div>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 p-10 sm:p-16">
            {[
              { number: '50K+', label: 'Rides Completed', icon: Car, description: 'Safe journeys delivered', color: 'gold' },
              { number: '10K+', label: 'Happy Customers', icon: Users, description: 'Satisfied passengers', color: 'sapphire' },
              { number: '15+', label: 'Cities Covered', icon: MapPin, description: 'Wide network reach', color: 'sunset' },
              { number: '24/7', label: 'Service Available', icon: Clock, description: 'Always here for you', color: 'gold' },
          ].map((metric, index) => (
            <div key={index} className="group relative animate-slide-in-up card-3d" style={{ animationDelay: `${300 + index * 100}ms` }}>
              {/* Card with Intense Glow */}
              <div className="relative glass-dark rounded-[2.5rem] p-10 text-center transition-all duration-700 overflow-hidden border-white/5 hover:border-white/20 shadow-2xl">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-10 pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container with float */}
                  <div className="relative mx-auto mb-10">
                    <div className="icon-container w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white/5 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-700 animate-float" style={{ animationDelay: `${index * 300}ms` }}>
                      <metric.icon className="text-white w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Number with vibrant gradient */}
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 shimmer text-gradient-${metric.color}`}>
                    {metric.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base font-black text-white uppercase tracking-[0.3em] mb-4 text-glow">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-slate-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {metric.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white border border-slate-100 px-8 py-4 rounded-full shadow-lg backdrop-blur-sm animate-slide-in-up hover-lift">
            <div className="flex items-center space-x-2">
              <Star className="text-taxi-yellow" size={20} />
              <span className="text-slate-900 font-bold">Trusted by thousands daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container bg-indigo-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-indigo-200/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-100/20 blur-[120px] rounded-full"></div>
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span className="text-indigo-600 font-bold text-xs sm:text-sm tracking-wider uppercase">What We Offer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up">Premium Transportation Services</h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>Comprehensive transportation solutions tailored to meet your every need with excellence and reliability</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-mesh-indigo border border-indigo-100/50 rounded-3xl shadow-sm"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 p-6 sm:p-8">
            {[
              { 
                title: 'Local Rides', 
                desc: 'Quick and affordable city transportation',
                icon: Car,
                features: ['Quick Pickup', 'Affordable Rates', 'City Coverage'],
                badge: 'Popular'
              },
              { 
                title: 'Airport Transfer', 
                desc: 'Punctual pickup and drop services',
                icon: Plane,
                features: ['Flight Tracking', 'Luggage Help', 'Meet & Greet'],
                badge: 'Premium'
              },
              { 
                title: 'Outstation Trips', 
                desc: 'Comfortable long-distance travel',
                icon: MapPin,
                features: ['One-way & Round', 'Experienced Drivers', 'Comfortable'],
                badge: null
              },
            ].map((service, index) => (
              <div key={index} className="group relative animate-slide-in-up hover-lift" style={{ animationDelay: `${300 + index * 100}ms` }}>
                {/* Card */}
                <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden border border-slate-100 shadow-sm">
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <div className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {service.badge}
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="icon-container w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 bg-indigo-50/50 border-indigo-100/50">
                      <service.icon className="text-indigo-500 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-taxi-yellow transition-colors duration-300">
                      {service.title}
                    </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm text-slate-600">
                        <CheckCircle className="text-taxi-yellow w-4 h-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <a href="/services" className="inline-flex items-center space-x-2 text-indigo-500 font-semibold hover:text-indigo-600 transition-colors duration-300 group">
                    <span>Learn More</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block group animate-slide-in-up" style={{ animationDelay: '600ms' }}>
            <a href="/services" className="btn-primary inline-flex items-center space-x-3">
              <span className="text-taxi-black">Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
          <p className="text-slate-600 mt-4 animate-slide-in-up" style={{ animationDelay: '800ms' }}>Discover our complete range of transportation solutions</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container bg-slate-50/50">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span className="text-indigo-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Simple Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">How It Works</h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">Get your ride in three easy steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {[
            { 
              step: '01', 
              title: 'Book Your Ride', 
              desc: 'Choose your destination and car type through our app or website.',
              icon: BookOpen 
            },
            { 
              step: '02', 
              title: 'Get Driver Details', 
              desc: 'Receive instant confirmation with driver and vehicle information.',
              icon: Shield 
            },
            { 
              step: '03', 
              title: 'Enjoy Your Journey', 
              desc: 'Sit back and relax as our professional driver takes you safely to your destination.',
              icon: Car 
            },
          ].map((item, index) => (
            <div key={index} className="relative group text-center px-6">
              {/* Connector Line (Desktop) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-taxi-yellow/50 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-slate-100 shadow-sm rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-taxi-yellow/10 group-hover:border-taxi-yellow/30 transition-all duration-500 hover-lift">
                  <item.icon className="text-taxi-yellow w-8 h-8 sm:w-10 sm:h-10" />
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-taxi-yellow text-taxi-black rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container bg-rose-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-rose-200/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pink-100/20 blur-[100px] rounded-full"></div>
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">What Our Customers Say</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">Real experiences from satisfied passengers</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-mesh-rose border border-rose-100/50 rounded-3xl shadow-sm"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 p-6 sm:p-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 border border-slate-100">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-taxi-yellow fill-current w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-taxi-yellow rounded-full flex items-center justify-center">
                      <span className="text-taxi-black font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-slate-500 text-xs">Verified Customer</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-container">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
            <span className="text-taxi-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Quick Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">Get answers to common questions about our services</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-white border border-slate-100 rounded-3xl shadow-sm"></div>
          
          <div className="relative space-y-6 sm:space-y-8 p-6 sm:p-8">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-slate-100 hover:bg-slate-50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-taxi-yellow w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-slate-900 font-semibold mb-2 text-sm sm:text-base">{faq.q}</h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-8">
            <a href="/faq" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA with Premium Mesh Dark */}
      <section className="section-container">
        <div className="relative max-w-5xl mx-auto group overflow-hidden rounded-[3rem]">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-mesh-dark opacity-90 transition-transform duration-1000 group-hover:scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 via-transparent to-amber-500/10"></div>
          
          <div className="relative glass-dark p-10 sm:p-20 lg:p-28 text-center border-white/10 shadow-2xl overflow-hidden">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer opacity-20 pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12 relative z-10">
              <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 backdrop-blur-md border border-taxi-yellow/30 px-6 py-2 rounded-full animate-float">
                <div className="w-2 h-2 bg-taxi-yellow rounded-full animate-pulse"></div>
                <span className="text-taxi-yellow font-black text-xs sm:text-sm tracking-widest uppercase text-glow">Premium Journey</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                Ready to Experience
                <span className="block text-gradient-vibrant mt-2 shimmer drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">World Class Service?</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
                Join thousands of satisfied customers who trust Taxi GO for their transportation needs. 
                Book your ride today and experience the difference!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 sm:px-0">
                <a href="/contact" className="btn-primary shimmer hover-glow w-full sm:w-auto flex justify-center py-5 px-12 shadow-[0_0_30px_rgba(251,191,36,0.3)] text-lg">
                  <Phone className="w-6 h-6 mr-3" />
                  <span>Book Now</span>
                </a>
                <a href="/services" className="btn-secondary bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-taxi-black w-full sm:w-auto flex justify-center py-5 px-12 text-lg">
                  <BookOpen className="w-6 h-6 mr-3" />
                  <span>View Services</span>
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 pt-10 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <Star className="text-taxi-yellow fill-current w-5 h-5" />
                  <span className="text-white font-bold text-sm sm:text-lg">4.9 Rating</span>
                </div>
                <div className="hidden sm:block text-white/20">•</div>
                <div className="text-white font-bold text-sm sm:text-lg">50K+ Customers</div>
                <div className="hidden sm:block text-white/20">•</div>
                <div className="text-white font-bold text-sm sm:text-lg">24/7 Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
