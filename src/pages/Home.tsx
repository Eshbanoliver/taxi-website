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
      <section className="section-container">
        <div className="relative max-w-7xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-slate-50 border border-slate-100 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent rounded-3xl"></div>
          
          <div className="relative glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden">
            <div className="content-grid">
              <div className="space-y-8 sm:space-y-12 text-center lg:text-left">
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-slate-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-100 shadow-sm backdrop-blur-sm">
                    <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
                    <span className="text-taxi-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Since 2014</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight animate-slide-in-up">
                    Your Trusted
                    <span className="block text-gradient-vibrant mt-2">Journey Partner</span>
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                  With over a decade of excellence, we stand as Udaipur's premier transportation provider. 
                  We combine cutting-edge technology with traditional hospitality to deliver safe, comfortable, and affordable journeys that exceed expectations.
                </p>
                
                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {[
                    { icon: Shield, text: "Fully Licensed & Insured" },
                    { icon: Clock, text: "24/7 Availability" },
                    { icon: Users, text: "Professional Drivers" },
                    { icon: MapPin, text: "City Wide Coverage" }
                  ].map((item, index) => (
                    <div key={index} className="group relative animate-slide-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                      <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-slate-100 hover:bg-slate-50 transition-all duration-300 hover-lift">
                        <div className="icon-container w-10 h-10 sm:w-14 sm:h-14">
                          <item.icon className="icon-primary w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.5} />
                        </div>
                        <span className="text-slate-700 font-medium text-sm sm:text-base group-hover:text-slate-900 transition-colors duration-300">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a href="/about" className="btn-primary inline-flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base animate-slide-in-up" style={{ animationDelay: '700ms' }}>
                  <span className="text-taxi-black">Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              
              <div className="relative">
                {/* Main visual */}
                <div className="relative">
                  <div className="w-full h-80 md:h-96 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {/* Main content */}
                    <div className="relative z-10 text-center animate-slide-in-up">
                      <div className="w-24 h-24 icon-container mx-auto mb-6 shadow-2xl">
                        <Car className="icon-dark w-12 h-12" strokeWidth={1.25} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Taxi Service</h3>
                      <p className="text-slate-600">Experience luxury and comfort</p>
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute top-8 left-8 bg-white border border-slate-100 shadow-xl px-3 py-2 rounded-full">
                      <span className="text-slate-900 font-bold text-sm">50K+ Rides</span>
                    </div>
                    <div className="absolute bottom-8 right-8 bg-white border border-slate-100 shadow-xl px-3 py-2 rounded-full" style={{ animationDelay: '1s' }}>
                      <span className="text-taxi-yellow font-bold text-sm">4.9 Rating</span>
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
      <section className="section-container">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
            <span className="text-taxi-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Our Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up">Numbers That Define Excellence</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>Metrics that showcase our commitment to quality service</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-white border border-slate-100 rounded-3xl shadow-sm"></div>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 p-6 sm:p-8">
            {[
              { number: '50K+', label: 'Rides Completed', icon: Car, description: 'Safe journeys delivered' },
              { number: '10K+', label: 'Happy Customers', icon: Users, description: 'Satisfied passengers' },
              { number: '15+', label: 'Cities Covered', icon: MapPin, description: 'Wide network reach' },
              { number: '24/7', label: 'Service Available', icon: Clock, description: 'Always here for you' },
          ].map((metric, index) => (
            <div key={index} className="group relative animate-slide-in-up hover-lift" style={{ animationDelay: `${300 + index * 100}ms` }}>
              {/* Card */}
              <div className="relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-500 overflow-hidden">
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    <div className="icon-container w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6">
                      <metric.icon className="icon-primary w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-2 sm:mb-3">
                    {metric.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-slate-700 mb-2">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <section className="section-container">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
            <span className="text-taxi-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up">Premium Transportation Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>Comprehensive transportation solutions tailored to meet your every need with excellence and reliability</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-white border border-slate-100 shadow-sm rounded-3xl"></div>
          
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
                      <div className="bg-taxi-yellow text-taxi-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {service.badge}
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="icon-container w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6">
                      <service.icon className="icon-primary w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
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
                  <a href="/services" className="inline-flex items-center space-x-2 text-taxi-yellow font-semibold hover:text-yellow-400 transition-colors duration-300 group">
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
            <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
            <span className="text-taxi-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">How It Works</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">Get your ride in three easy steps</p>
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
                <div className="w-20 h-20 bg-white border border-slate-100 shadow-sm rounded-3xl flex items-center justify-center mb-6 group-hover:bg-taxi-yellow/10 group-hover:border-taxi-yellow/30 transition-all duration-500 hover-lift">
                  <item.icon className="text-taxi-yellow w-10 h-10" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-taxi-yellow text-taxi-black rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
            <span className="text-taxi-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">What Our Customers Say</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-light px-4">Real experiences from satisfied passengers</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-white border border-slate-100 shadow-sm rounded-3xl"></div>
          
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

      {/* Final CTA */}
      <section className="section-container">
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-white border border-taxi-yellow/20 rounded-3xl shadow-sm"></div>
          
          <div className="relative glass rounded-3xl p-10 sm:p-16 lg:p-24 text-center border border-slate-100">
            <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Ready to Experience
                <span className="block text-gradient-vibrant mt-2">Premium Taxi Service?</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Join thousands of satisfied customers who trust Taxi GO for their transportation needs. 
                Book your ride today and experience the difference!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/contact" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  <span>Book Now</span>
                </a>
                <a href="/services" className="btn-secondary">
                  <BookOpen className="w-5 h-5" />
                  <span>View Services</span>
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center space-x-8 pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-2">
                  <Star className="text-taxi-yellow w-5 h-5" />
                  <span className="text-slate-900 font-semibold">4.9 Rating</span>
                </div>
                <div className="text-slate-300">•</div>
                <div className="text-slate-900">50K+ Happy Customers</div>
                <div className="text-slate-300">•</div>
                <div className="text-slate-900">24/7 Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
