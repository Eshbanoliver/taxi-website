import React, { useState } from 'react';
import { Star, CheckCircle, Users, MapPin, Clock, Shield, Car, ArrowRight, Plane, Phone } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('hatchback');

  const categories = ['hatchback', 'sedan', 'suv', 'luxury'];
  
  const cars = {
    hatchback: [
      { name: 'Swift', price: '₹8/km', features: ['AC', '4 Seats', 'Luggage Space'] },
      { name: 'WagonR', price: '₹7/km', features: ['AC', '4 Seats', 'Compact'] },
      { name: 'i10', price: '₹8/km', features: ['AC', '4 Seats', 'Fuel Efficient'] },
    ],
    sedan: [
      { name: 'Dzire', price: '₹10/km', features: ['AC', '4 Seats', 'Comfortable'] },
      { name: 'City', price: '₹12/km', features: ['AC', '4 Seats', 'Premium'] },
      { name: 'Ciaz', price: '₹11/km', features: ['AC', '4 Seats', 'Spacious'] },
    ],
    suv: [
      { name: 'Brezza', price: '₹13/km', features: ['AC', '5 Seats', 'Off-road'] },
      { name: 'XUV500', price: '₹15/km', features: ['AC', '7 Seats', 'Luxury'] },
      { name: 'Scorpio', price: '₹14/km', features: ['AC', '7 Seats', 'Powerful'] },
    ],
    luxury: [
      { name: 'BMW 3 Series', price: '₹25/km', features: ['AC', '4 Seats', 'Premium'] },
      { name: 'Mercedes C-Class', price: '₹28/km', features: ['AC', '4 Seats', 'Luxury'] },
      { name: 'Audi A4', price: '₹30/km', features: ['AC', '4 Seats', 'Executive'] },
    ],
  };

  const testimonials = [
    { name: 'Rahul Sharma', text: 'Excellent service! Very professional and punctual drivers.', rating: 5 },
    { name: 'Priya Patel', text: 'Clean cars and affordable rates. Highly recommended!', rating: 5 },
    { name: 'Amit Kumar', text: 'Best taxi service in Udaipur. Always on time!', rating: 5 },
  ];

  const faqs = [
    { q: 'How do I book a taxi?', a: 'You can book through our app, website, or by calling our hotline.' },
    { q: 'What are your payment options?', a: 'We accept cash, credit cards, and digital payments.' },
    { q: 'Are your drivers licensed?', a: 'Yes, all our drivers are licensed and professionally trained.' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Us Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-taxi-yellow/20 rounded-full animate-float"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full">
                    <span className="text-taxi-yellow font-semibold">Since 2014</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-taxi-black leading-tight">
                    Your Trusted
                    <span className="block text-taxi-yellow">Journey Partner</span>
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over 10 years of excellence, Taxi Services stands as Udaipur's premier transportation provider. 
                  We combine cutting-edge technology with traditional hospitality to deliver safe, comfortable, and affordable journeys that exceed expectations.
                </p>
                
                {/* Key highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: "Fully Licensed & Insured" },
                    { icon: Clock, text: "24/7 Availability" },
                    { icon: Users, text: "Professional Drivers" },
                    { icon: MapPin, text: "City Wide Coverage" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-12 h-12 bg-taxi-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-taxi-yellow" size={20} />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <a href="/about" className="group inline-flex items-center space-x-3 bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span>Discover Our Story</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
                    
                    {/* Central car icon */}
                    <div className="relative z-10">
                      <div className="w-32 h-32 bg-taxi-yellow rounded-full flex items-center justify-center shadow-2xl animate-float">
                        <Car className="text-taxi-black" size={64} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
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
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-700">Numbers that speak for our excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              number: '50K+', 
              label: 'Rides Completed', 
              icon: Car, 
              color: 'from-blue-500 to-blue-600',
              bgColor: 'bg-blue-500/10',
              description: 'Safe journeys delivered'
            },
            { 
              number: '10K+', 
              label: 'Happy Customers', 
              icon: Users, 
              color: 'from-green-500 to-green-600',
              bgColor: 'bg-green-500/10',
              description: 'Satisfied passengers'
            },
            { 
              number: '15+', 
              label: 'Cities Covered', 
              icon: MapPin, 
              color: 'from-purple-500 to-purple-600',
              bgColor: 'bg-purple-500/10',
              description: 'Wide network reach'
            },
            { 
              number: '24/7', 
              label: 'Service Available', 
              icon: Clock, 
              color: 'from-orange-500 to-orange-600',
              bgColor: 'bg-orange-500/10',
              description: 'Always here for you'
            },
          ].map((metric, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Floating decoration */}
                <div className={`absolute top-4 right-4 w-8 h-8 ${metric.bgColor} rounded-full animate-pulse`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <metric.icon className="text-white" size={40} />
                    </div>
                    {/* Ring animation */}
                    <div className={`absolute inset-0 rounded-full border-2 ${metric.color.replace('from-', 'border-').split(' ')[0]} opacity-30 animate-ping`}></div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-5xl font-bold text-taxi-black mb-3 group-hover:scale-110 transition-transform duration-300">
                    {metric.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {metric.description}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${metric.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-taxi-yellow to-yellow-400 px-8 py-4 rounded-full shadow-xl">
            <div className="flex items-center space-x-2">
              <Star className="text-taxi-black" size={20} />
              <span className="text-taxi-black font-bold">Trusted by thousands daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <span className="text-taxi-yellow font-semibold">What We Offer</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Comprehensive transportation solutions tailored to meet your every need</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { 
              title: 'Local Rides', 
              desc: 'Quick and affordable city transportation',
              icon: Car,
              color: 'from-blue-500 to-blue-600',
              features: ['Quick Pickup', 'Affordable Rates', 'City Coverage'],
              badge: 'Popular'
            },
            { 
              title: 'Airport Transfer', 
              desc: 'Punctual pickup and drop services',
              icon: Plane,
              color: 'from-green-500 to-green-600',
              features: ['Flight Tracking', 'Luggage Help', 'Meet & Greet'],
              badge: 'Premium'
            },
            { 
              title: 'Outstation Trips', 
              desc: 'Comfortable long-distance travel',
              icon: MapPin,
              color: 'from-purple-500 to-purple-600',
              features: ['One-way & Round', 'Experienced Drivers', 'Comfortable'],
              badge: null
            },
          ].map((service, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${service.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse`}>
                      {service.badge}
                    </div>
                  </div>
                )}
                
                {/* Floating decoration */}
                <div className={`absolute bottom-4 right-4 w-12 h-12 ${service.color.replace('from-', 'bg-').split(' ')[0]}/20 rounded-full animate-float`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.desc}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className={`text-${service.color.replace('from-', '').split(' ')[0]}-500`} size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <button className={`group/btn w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <span>Learn More</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
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
          <p className="text-gray-600 mt-4">Discover our complete range of transportation solutions</p>
        </div>
      </section>

      {/* Cars Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Fleet</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Choose Your Ride</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Select from our wide range of well-maintained vehicles for your perfect journey</p>
        </div>
        
        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-8 py-4 rounded-full font-bold transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black shadow-xl'
                  : 'glass text-taxi-black hover:bg-white/30 hover:shadow-lg'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Car size={18} />
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </span>
              {activeCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full animate-pulse opacity-50"></div>
              )}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars[activeCategory as keyof typeof cars].map((car, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-taxi-yellow/20 rounded-full animate-pulse"></div>
                
                {/* Car Visual */}
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-taxi-yellow/30 to-yellow-400/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-taxi-yellow/20 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Car icon */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-taxi-yellow rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Car className="text-taxi-black" size={48} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  {/* Title and Price */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-taxi-black mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {car.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="text-3xl font-bold text-taxi-yellow">{car.price}</div>
                        <div className="text-sm text-gray-600">per km</div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 px-3 py-1 rounded-full">
                      <span className="text-green-600 text-sm font-semibold">Available</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group/feature">
                        <div className="w-8 h-8 bg-taxi-yellow/20 rounded-full flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                          <CheckCircle className="text-taxi-yellow" size={16} />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Book Button */}
                  <button className="group/btn w-full bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-6 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Phone size={20} className="group-hover/btn:animate-pulse" />
                    <span>Book Now</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-taxi-yellow to-yellow-400 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <a href="/services" className="relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
              <span>View Complete Fleet</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
          <p className="text-gray-600 mt-4">Explore all our vehicles and find your perfect match</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Star className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Foundation</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Mission & Vision</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">The driving force behind our commitment to excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative">
            <div className="relative glass rounded-3xl p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full animate-pulse"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <Shield className="text-white" size={32} />
                </div>
                {/* Ring animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-30 animate-ping"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-taxi-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide safe, reliable, and affordable transportation services that exceed customer expectations 
                  and contribute to the community's mobility needs.
                </p>
                
                {/* Key points */}
                <div className="space-y-3">
                  {[
                    'Safe & Reliable Service',
                    'Affordable Pricing',
                    'Community Focus'
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3 group/point">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover/point:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-blue-500" size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>
          
          {/* Vision Card */}
          <div className="group relative">
            <div className="relative glass rounded-3xl p-10 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-full animate-pulse"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <Star className="text-white" size={32} />
                </div>
                {/* Ring animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-30 animate-ping"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-taxi-black mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To become the most trusted and preferred taxi service provider in Rajasthan, known for our 
                  commitment to excellence and customer satisfaction.
                </p>
                
                {/* Key points */}
                <div className="space-y-3">
                  {[
                    'Trusted Provider',
                    'Excellence in Service',
                    'Customer Satisfaction'
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3 group/point">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover/point:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-purple-500" size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <a href="/about" className="relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
              <span>Learn More About Us</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
          <p className="text-gray-600 mt-4">Discover our story and commitment to excellence</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Star className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Principles</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Core Values</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">The fundamental beliefs that guide our every action and decision</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: 'Safety', 
              desc: 'Your safety is our top priority', 
              icon: Shield, 
              color: 'from-red-500 to-red-600',
              bgColor: 'bg-red-500/10',
              features: ['Regular Vehicle Checks', 'Trained Drivers', '24/7 Support']
            },
            { 
              title: 'Punctuality', 
              desc: 'Always on time, every time', 
              icon: Clock, 
              color: 'from-blue-500 to-blue-600',
              bgColor: 'bg-blue-500/10',
              features: ['Real-time Tracking', 'Smart Scheduling', 'On-time Guarantee']
            },
            { 
              title: 'Comfort', 
              desc: 'Travel in comfort and style', 
              icon: Car, 
              color: 'from-green-500 to-green-600',
              bgColor: 'bg-green-500/10',
              features: ['Clean Vehicles', 'AC Comfort', 'Spacious Seating']
            },
            { 
              title: 'Trust', 
              desc: 'Building lasting relationships', 
              icon: Users, 
              color: 'from-purple-500 to-purple-600',
              bgColor: 'bg-purple-500/10',
              features: ['Transparent Pricing', 'Reliable Service', 'Customer Care']
            },
          ].map((value, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${value.bgColor} rounded-full animate-pulse`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <value.icon className="text-white" size={40} />
                  </div>
                  {/* Ring animation */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${value.color.replace('from-', 'border-').split(' ')[0]} opacity-30 animate-ping`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-taxi-black mb-2 group-hover:text-${value.color.replace('from-', '').split(' ')[0]}-600 transition-colors duration-300`}>
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mt-4">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600 group/feature">
                        <div className={`w-6 h-6 ${value.bgColor} rounded-full flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300`}>
                          <CheckCircle className={`text-${value.color.replace('from-', '').split(' ')[0]}-500`} size={12} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${value.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <a href="/about" className="relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
              <span>Learn About Our Values</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
          <p className="text-gray-600 mt-4">Discover what makes us different and better</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Star className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Advantages</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Discover the reasons that make us the preferred choice for thousands of customers</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-taxi-yellow/20 rounded-full animate-float"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-yellow-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  reason: 'Experienced and professional drivers', 
                  icon: Users, 
                  color: 'from-blue-500 to-blue-600',
                  bgColor: 'bg-blue-500/10',
                  description: 'Licensed and trained professionals'
                },
                { 
                  reason: 'Well-maintained and clean vehicles', 
                  icon: Car, 
                  color: 'from-green-500 to-green-600',
                  bgColor: 'bg-green-500/10',
                  description: 'Regular maintenance and sanitation'
                },
                { 
                  reason: 'Competitive and transparent pricing', 
                  icon: Shield, 
                  color: 'from-purple-500 to-purple-600',
                  bgColor: 'bg-purple-500/10',
                  description: 'No hidden charges, fair rates'
                },
                { 
                  reason: '24/7 customer support', 
                  icon: Clock, 
                  color: 'from-orange-500 to-orange-600',
                  bgColor: 'bg-orange-500/10',
                  description: 'Always here to help you'
                },
                { 
                  reason: 'Easy booking process', 
                  icon: Phone, 
                  color: 'from-red-500 to-red-600',
                  bgColor: 'bg-red-500/10',
                  description: 'Book in seconds, hassle-free'
                },
                { 
                  reason: 'Flexible payment options', 
                  icon: Star, 
                  color: 'from-indigo-500 to-indigo-600',
                  bgColor: 'bg-indigo-500/10',
                  description: 'Multiple payment methods available'
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="relative glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <item.icon className="text-white" size={24} />
                      </div>
                      
                      {/* Text */}
                      <h4 className="text-lg font-bold text-taxi-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                        {item.reason}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <a href="/about" className="relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
                  <span>Learn More About Our Services</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
              <p className="text-gray-600 mt-4">Join thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-yellow-400/30 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-taxi-yellow/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-300/40 rounded-full animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Main content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-6 py-3 rounded-full">
                <Car className="text-taxi-yellow animate-float" size={20} />
                <span className="text-taxi-yellow font-bold">Book Your Journey</span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-bold text-taxi-black leading-tight">
                Ready to Book
                <span className="block text-taxi-yellow">Your Ride?</span>
              </h2>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Experience the best taxi service in Udaipur with our professional drivers and well-maintained vehicles
              </p>
              
              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: Shield, text: "Safe & Secure", color: "text-green-600" },
                  { icon: Clock, text: "24/7 Available", color: "text-blue-600" },
                  { icon: Star, text: "Best Prices", color: "text-purple-600" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 group">
                    <div className="w-12 h-12 bg-taxi-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`text-taxi-yellow ${feature.color}`} size={24} />
                    </div>
                    <span className="text-gray-700 font-semibold">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <Phone size={24} className="group-hover:animate-pulse" />
                  <span>Book Now</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-white/20 rounded-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <a href="/contact" className="group relative glass text-taxi-black font-bold py-4 px-8 rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 border border-taxi-yellow/30">
                  <Phone size={24} />
                  <span>Contact Us</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                {[
                  { number: "50K+", label: "Happy Customers" },
                  { number: "4.9", label: "Average Rating" },
                  { number: "10+", label: "Years Experience" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold text-taxi-black group-hover:text-taxi-yellow transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-taxi-yellow to-yellow-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-taxi-yellow fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-taxi-black">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/testimonials" className="btn-primary">View All Testimonials</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-taxi-black mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/faq" className="btn-primary">View All FAQs</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
