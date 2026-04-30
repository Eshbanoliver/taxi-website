import React, { useState } from 'react';
import { Star, CheckCircle, Users, MapPin, Clock, Shield, Car, ArrowRight, Plane } from 'lucide-react';
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
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Choose Your Ride</h2>
          <p className="text-xl text-gray-700">Select from our wide range of vehicles</p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-taxi-yellow text-taxi-black'
                  : 'glass text-taxi-black hover:bg-white/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cars[activeCategory as keyof typeof cars].map((car, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-40 bg-taxi-yellow/20 rounded-xl mb-4 flex items-center justify-center">
                <Car className="text-taxi-yellow" size={60} />
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-2">{car.name}</h3>
              <div className="text-2xl font-bold text-taxi-yellow mb-3">{car.price}</div>
              <ul className="space-y-2 mb-4">
                {car.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="text-taxi-yellow mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-taxi-black mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide safe, reliable, and affordable transportation services that exceed customer expectations 
              and contribute to the community's mobility needs.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-taxi-black mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become the most trusted and preferred taxi service provider in Rajasthan, known for our 
              commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Core Values</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Safety', desc: 'Your safety is our top priority', icon: Shield },
            { title: 'Punctuality', desc: 'Always on time, every time', icon: Clock },
            { title: 'Comfort', desc: 'Travel in comfort and style', icon: Car },
            { title: 'Trust', desc: 'Building lasting relationships', icon: Users },
          ].map((value, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">Why Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Experienced and professional drivers',
              'Well-maintained and clean vehicles',
              'Competitive and transparent pricing',
              '24/7 customer support',
              'Easy booking process',
              'Flexible payment options',
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-taxi-yellow mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-taxi-yellow to-yellow-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Ready to Book Your Ride?</h2>
          <p className="text-xl text-gray-800 mb-8">Experience the best taxi service in Udaipur</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-taxi-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
              Book Now
            </button>
            <button className="bg-white text-taxi-black font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
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
