import React, { useState } from 'react';
import { Star, CheckCircle, Users, MapPin, Clock, Shield, Car, ArrowRight, Plane, Phone, TrendingUp, HelpCircle, BookOpen, MessageCircle, Mail, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sedan', 'SUV', 'Luxury', 'Economy'];
  
  const testimonials = [
    { name: 'Rahul Sharma', text: 'Excellent service! The driver was professional and the car was spotless.', rating: 5, image: '/user_rahul_1778825783527.png' },
    { name: 'Priya Patel', text: 'Very reliable and affordable. Best taxi service in Udaipur!', rating: 5, image: '/user_priya_1778825801950.png' },
    { name: 'Amit Kumar', text: 'Punctual pickups and comfortable rides. Highly recommended!', rating: 5, image: '/user_amit_1778825821792.png' },
    { name: 'Kavya Nair', text: 'Transparent pricing and no hidden charges. Trustworthy service!', rating: 5, image: '/user_priya_1778825801950.png' }, // Reusing Priya for now due to quota
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
      {/* About Us Preview */}
      <section className="section-container relative overflow-hidden">
        <div className="absolute inset-0 bg-vibrant-emerald animate-moving-mesh"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative glass rounded-[3rem] p-8 sm:p-16 md:p-24 overflow-hidden mask-slant shadow-2xl border-white/20">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl"></div>
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
                
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
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
                      <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl group hover:border-white/40 transition-all duration-300">
                        <div className={`icon-container w-12 h-12 sm:w-16 sm:h-16 bg-${item.color}-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
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
                  <div className="w-full h-[400px] md:h-[550px] relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                    <img src="/about_hero_taxi_1778825012509.png" alt="Premium Taxi" className="w-full h-full object-cover transition-transform duration-[10000ms] animate-ken-burns" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                    {/* Main content */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-8">
                      <div className="w-24 h-24 icon-container mx-auto mb-6 shadow-[0_0_50px_rgba(251,191,36,0.4)] bg-taxi-yellow border-none">
                        <Car className="text-taxi-black w-12 h-12 animate-float" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 shimmer text-gradient-gold">Premium Taxi</h3>
                      <p className="text-slate-100 text-xl font-bold">World Class Experience</p>
                    </div>
                    
                    {/* Floating badges with 3D shadow */}
                    <div className="absolute top-12 left-12 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl px-6 py-3 rounded-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                      <span className="text-white font-black text-lg">50K+ Rides</span>
                    </div>
                    <div className="absolute bottom-12 right-12 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl px-6 py-3 rounded-2xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                      <span className="text-taxi-yellow font-black text-lg">4.9 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators restored */}
            <div className="relative z-10 mt-16 pt-12 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "15+", label: "Cities" },
                  { number: "100%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group animate-slide-in-up" style={{ animationDelay: `${800 + index * 100}ms` }}>
                    <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-taxi-yellow transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-widest mt-2">{stat.label}</div>
                  </div>
                ))}
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
      <section className="section-container relative overflow-hidden">
        <div className="absolute inset-0 bg-vibrant-indigo animate-moving-mesh"></div>
        <div className="page-header relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(129,140,248,1)]"></div>
            <span className="text-white font-black text-xs sm:text-sm tracking-wider uppercase text-glow">What We Offer</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 animate-slide-in-up shimmer">Premium Services</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto font-medium px-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>Comprehensive transportation solutions with excellence</p>
        </div>
        
        <div className="relative perspective-1000 max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 p-6 sm:p-8">
            {[
              { 
                title: 'Local Rides', 
                desc: 'Quick and affordable city transportation',
                icon: Car,
                features: ['Quick Pickup', 'Affordable Rates', 'City Coverage'],
                badge: 'Popular',
                color: 'gold'
              },
              { 
                title: 'Airport Transfer', 
                desc: 'Punctual pickup and drop services',
                icon: Plane,
                features: ['Flight Tracking', 'Luggage Help', 'Meet & Greet'],
                badge: 'Premium',
                color: 'sapphire'
              },
              { 
                title: 'Outstation Trips', 
                desc: 'Comfortable long-distance travel',
                icon: MapPin,
                features: ['One-way & Round', 'Experienced Drivers', 'Comfortable'],
                badge: 'Expert',
                color: 'sunset'
              },
            ].map((service, index) => (
              <div key={index} className="card-3d animate-slide-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="relative glass-dark rounded-[3rem] p-10 transition-all duration-700 overflow-hidden border-white/5 shadow-2xl">
                  {service.badge && (
                    <div className="absolute top-6 right-6">
                      <div className="bg-taxi-yellow text-taxi-black text-xs font-black px-4 py-1.5 rounded-full shadow-xl animate-pulse">
                        {service.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="icon-container w-20 h-20 mb-8 bg-white/5 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-float" style={{ animationDelay: `${index * 400}ms` }}>
                      <service.icon className="text-white w-10 h-10" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className={`text-2xl sm:text-3xl font-black mb-4 text-gradient-${service.color} shimmer`}>
                      {service.title}
                    </h3>
                  
                    <p className="text-slate-300 mb-8 leading-relaxed text-lg font-medium">{service.desc}</p>
                    
                    <div className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-slate-200 font-bold">
                          <CheckCircle className="text-taxi-yellow w-5 h-5 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a href="/services" className="inline-flex items-center space-x-3 text-white font-black hover:text-taxi-yellow transition-all duration-300 group text-lg">
                      <span>Learn More</span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center relative z-10">
          <div className="relative inline-block group animate-slide-in-up" style={{ animationDelay: '600ms' }}>
            <a href="/services" className="btn-primary inline-flex items-center space-x-3 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              <span>Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
          <p className="text-slate-300 mt-4 animate-slide-in-up font-bold" style={{ animationDelay: '800ms' }}>Discover our complete range of transportation solutions</p>
        </div>
      </section>

      {/* How It Works - Clean Minimalist Section */}
      <section className="bg-minimal py-32 sm:py-48 lg:py-64">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-24 sm:mb-32">
            <div className="section-badge mb-8 mx-auto">
              <div className="w-2 h-2 bg-taxi-yellow rounded-full animate-pulse"></div>
              <span className="text-slate-900 font-black text-xs sm:text-sm tracking-[0.3em] uppercase">Simple Process</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 mb-10 leading-tight">
              Booking Your Ride <span className="text-taxi-yellow">Simplified</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-500 font-medium leading-relaxed">
              Experience the ease of modern travel. We've optimized every step to get you moving faster.
            </p>
          </div>

          <div className="bento-grid">
            {[
              { 
                step: '01', 
                title: 'Choose Destination', 
                desc: 'Select your pickup and drop-off points with precision using our interactive map.',
                span: 'md:col-span-2 lg:col-span-2',
                icon: MapPin,
                color: 'bg-amber-50 text-amber-600'
              },
              { 
                step: '02', 
                title: 'Select Class', 
                desc: 'From Economy to Luxury, pick the vehicle that matches your style and budget perfectly.',
                span: 'md:col-span-2 lg:col-span-2',
                icon: Car,
                color: 'bg-indigo-50 text-indigo-600'
              },
              { 
                step: '03', 
                title: 'Live Tracking', 
                desc: 'Monitor your ride in real-time as it approaches your location.',
                span: 'md:col-span-2 lg:col-span-2',
                icon: Clock,
                color: 'bg-emerald-50 text-emerald-600'
              },
              { 
                step: '04', 
                title: 'Safe Arrival', 
                desc: 'Enjoy a secure journey with professional drivers and reach your destination safely.',
                span: 'md:col-span-4 lg:col-span-6',
                icon: Shield,
                color: 'bg-rose-50 text-rose-600'
              },
            ].map((item, index) => (
              <div key={index} className={`bento-card ${item.span} group`}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">{item.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <div className="mt-12">
                    <span className="text-6xl font-black text-slate-100 group-hover:text-taxi-yellow/20 transition-colors duration-500">{item.step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - More Spacing */}
      <section className="section-container relative overflow-hidden">
        <div className="absolute inset-0 bg-vibrant-rose animate-moving-mesh"></div>
        <div className="page-header relative z-10">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-full mb-12">
            <div className="w-2.5 h-2.5 bg-rose-400 rounded-full animate-pulse"></div>
            <span className="text-white font-black text-xs sm:text-sm tracking-[0.2em] uppercase">Trusted Voice</span>
          </div>
          <h2 className="text-5xl sm:text-8xl font-black text-white mb-10 shimmer">Client Stories</h2>
          <p className="text-xl sm:text-2xl text-slate-200 max-w-4xl mx-auto font-medium px-4">Real feedback from Udaipur's most satisfied travelers</p>
        </div>
        
        <div className="relative perspective-1000 max-w-7xl mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-3d animate-slide-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="glass-dark rounded-[3.5rem] p-12 transition-all duration-700 overflow-hidden border-white/5 shadow-2xl">
                  {/* Stars with intense glow */}
                  <div className="flex space-x-2 mb-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-taxi-yellow fill-current w-6 h-6 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
                    ))}
                  </div>
                  
                  <p className="text-slate-200 mb-12 text-xl leading-relaxed italic font-medium">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-5 pt-10 border-t border-white/10">
                    <div className="w-20 h-20 relative">
                      <div className="absolute inset-0 bg-taxi-yellow rounded-[1.5rem] rotate-6 group-hover:rotate-12 duration-500"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="relative z-10 w-full h-full object-cover rounded-[1.5rem] border-4 border-white shadow-2xl"
                      />
                    </div>
                    <div>
                      <div className="text-white font-black text-xl">{testimonial.name}</div>
                      <div className="text-taxi-yellow font-black text-xs tracking-[0.2em] uppercase">verified</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview - Clean Bento Style */}
      <section className="bg-white py-32 sm:py-48 lg:py-64 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="section-badge mb-8 mx-auto">
              <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
              <span className="text-slate-900 font-black text-xs sm:text-sm tracking-[0.3em] uppercase">Knowledge Base</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8">Got Questions?</h2>
            <p className="text-xl text-slate-500 font-medium">Everything you need to know about our services, answered by our team.</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="group bento-card flex items-start space-x-8 p-10 hover:border-taxi-yellow/30">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-taxi-yellow/10 transition-colors duration-500">
                  <HelpCircle className="text-taxi-yellow" size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{faq.q}</h4>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <a href="/faq" className="btn-secondary bg-slate-900 text-white hover:bg-taxi-yellow hover:text-taxi-black py-6 px-16 shadow-2xl group">
              <span>View Full FAQ Center</span>
              <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
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
