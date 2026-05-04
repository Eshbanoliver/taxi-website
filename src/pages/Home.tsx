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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-indigo-900/40 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          
          {/* Floating elements - hide on mobile */}
          <div className="hidden sm:block absolute top-8 right-8 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full animate-float backdrop-blur-sm"></div>
          <div className="hidden sm:block absolute bottom-8 left-8 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
          <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full animate-pulse backdrop-blur-sm"></div>
          
          <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-20 overflow-hidden border border-white/10">
            <div className="content-grid">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-500/30 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 font-bold text-xs sm:text-sm tracking-wider uppercase">Since 2014</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                    Your Trusted
                    <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey Partner</span>
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  With over a decade of excellence, we stand as Udaipur's premier transportation provider. 
                  We combine cutting-edge technology with traditional hospitality to deliver safe, comfortable, and affordable journeys that exceed expectations.
                </p>
                
                {/* Key highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: Shield, text: "Fully Licensed & Insured", color: "from-blue-500 to-cyan-500" },
                    { icon: Clock, text: "24/7 Availability", color: "from-indigo-500 to-purple-500" },
                    { icon: Users, text: "Professional Drivers", color: "from-cyan-500 to-blue-500" },
                    { icon: MapPin, text: "City Wide Coverage", color: "from-purple-500 to-indigo-500" }
                  ].map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className={`relative w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                          <item.icon className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                          <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} opacity-30 animate-pulse`}></div>
                        </div>
                        <span className="text-gray-200 font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <a href="/about" className="group inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  <span>Discover Our Story</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              
              <div className="relative">
                {/* Main visual */}
                <div className="relative">
                  <div className="w-full h-80 md:h-96 bg-gradient-to-br from-taxi-yellow/30 to-yellow-400/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 bg-taxi-yellow/20 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Main content */}
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
                        <Car className="text-taxi-black" size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-taxi-black mb-2">Premium Taxi Service</h3>
                      <p className="text-gray-800">Experience luxury and comfort</p>
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg animate-float">
                      <span className="text-taxi-black font-bold text-sm">50K+ Rides</span>
                    </div>
                    <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                      <span className="text-taxi-black font-bold text-sm">4.9 Rating</span>
                    </div>
                  </div>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { number: "10+", label: "Years Experience" },
                    { number: "15+", label: "Cities" },
                    { number: "100%", label: "Satisfaction" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
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
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-indigo-300 font-bold text-xs sm:text-sm tracking-wider uppercase">Our Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Numbers That Define Excellence</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4">Metrics that showcase our commitment to quality service</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-indigo-900/20 to-purple-900/30 rounded-3xl"></div>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                number: '50K+', 
                label: 'Rides Completed', 
                icon: Car, 
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'bg-blue-500/10',
                description: 'Safe journeys delivered'
              },
              { 
                number: '10K+', 
                label: 'Happy Customers', 
                icon: Users, 
                color: 'from-emerald-500 to-green-500',
                bgColor: 'bg-emerald-500/10',
                description: 'Satisfied passengers'
              },
              { 
                number: '15+', 
                label: 'Cities Covered', 
                icon: MapPin, 
                color: 'from-purple-500 to-pink-500',
                bgColor: 'bg-purple-500/10',
                description: 'Wide network reach'
              },
              { 
                number: '24/7', 
                label: 'Service Available', 
                icon: Clock, 
                color: 'from-orange-500 to-red-500',
                bgColor: 'bg-orange-500/10',
                description: 'Always here for you'
            },
          ].map((metric, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Floating decoration */}
                <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 ${metric.bgColor} rounded-full animate-pulse`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${metric.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <metric.icon className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                    </div>
                    {/* Ring animation */}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 ${metric.color.replace('from-', 'border-').split(' ')[0]} opacity-30 animate-ping`}></div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {metric.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-300 mb-2">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {metric.description}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${metric.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 rounded-full shadow-xl border border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Star className="text-taxi-black" size={20} />
              <span className="text-taxi-black font-bold">Trusted by thousands daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-bold text-xs sm:text-sm tracking-wider uppercase">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Premium Transportation Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-light px-4">Comprehensive transportation solutions tailored to meet your every need with excellence and reliability</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-purple-900/20 to-pink-900/30 rounded-3xl"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              { 
                title: 'Local Rides', 
                desc: 'Quick and affordable city transportation',
                icon: Car,
                color: 'from-blue-500 to-cyan-500',
                features: ['Quick Pickup', 'Affordable Rates', 'City Coverage'],
                badge: 'Popular'
              },
              { 
                title: 'Airport Transfer', 
                desc: 'Punctual pickup and drop services',
                icon: Plane,
                color: 'from-emerald-500 to-green-500',
                features: ['Flight Tracking', 'Luggage Help', 'Meet & Greet'],
                badge: 'Premium'
              },
              { 
                title: 'Outstation Trips', 
                desc: 'Comfortable long-distance travel',
                icon: MapPin,
                color: 'from-purple-500 to-pink-500',
                features: ['One-way & Round', 'Experienced Drivers', 'Comfortable'],
                badge: null
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden border border-white/10">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className={`bg-gradient-to-r ${service.color} text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg animate-pulse`}>
                        {service.badge}
                      </div>
                    </div>
                  )}
                  
                  {/* Floating decoration */}
                  <div className={`absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 ${service.color.replace('from-', 'bg-').split(' ')[0]}/20 rounded-full animate-float`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <service.icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="text-green-400 w-4 h-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <a href="/services" className="inline-flex items-center space-x-2 text-white font-semibold hover:text-taxi-yellow transition-colors duration-300 group">
                    <span>Learn More</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                  </a>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <a href="/services" className="relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
              <span>Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
          <p className="text-gray-300 mt-4">Discover our complete range of transportation solutions</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <div className="page-header">
          <div className="section-badge">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 font-bold text-xs sm:text-sm tracking-wider uppercase">Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">What Our Customers Say</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4">Real experiences from satisfied passengers</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-yellow-900/20 to-orange-900/30 rounded-3xl"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-white/10">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-taxi-yellow fill-current w-4 h-4 sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-taxi-black font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">Verified Customer</div>
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
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-bold text-xs sm:text-sm tracking-wider uppercase">Quick Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4">Get answers to common questions about our services</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-green-900/20 to-emerald-900/30 rounded-3xl"></div>
          
          <div className="relative space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-green-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{faq.q}</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-8">
            <a href="/faq" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-yellow-400/20 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center border border-white/20">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Experience
                <span className="block bg-gradient-to-r from-taxi-yellow to-yellow-400 bg-clip-text text-transparent">Premium Taxi Service?</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
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
              <div className="flex items-center justify-center space-x-8 pt-6 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <Star className="text-taxi-yellow w-5 h-5" />
                  <span className="text-white font-semibold">4.9 Rating</span>
                </div>
                <div className="text-gray-400">•</div>
                <div className="text-white">50K+ Happy Customers</div>
                <div className="text-gray-400">•</div>
                <div className="text-white">24/7 Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
