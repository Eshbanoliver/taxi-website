import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, HelpCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a taxi?',
      answer: 'You can book a taxi through multiple channels: call our hotline, use our mobile app, visit our website, or use WhatsApp booking.',
      category: 'Booking'
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept various payment methods including cash, credit/debit cards, UPI, Paytm, Google Pay, and other digital wallets.',
      category: 'Payment'
    },
    {
      question: 'Are your drivers licensed and verified?',
      answer: 'Yes, all our drivers go through a rigorous verification process including background checks, driving license verification.',
      category: 'Safety'
    },
    {
      question: 'How is the fare calculated?',
      answer: 'Our fares are calculated based on distance, time, vehicle type, and any additional services. We offer transparent pricing.',
      category: 'Pricing'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking. Free cancellation is available up to 30 minutes before the scheduled pickup time.',
      category: 'Booking'
    },
    {
      question: 'Do you provide airport transfers?',
      answer: 'Yes, we offer reliable airport pickup and drop services. Our drivers monitor flight schedules and provide meet & greet services.',
      category: 'Services'
    },
    {
      question: 'Are your vehicles air-conditioned?',
      answer: 'All our vehicles are equipped with air conditioning to ensure your comfort during the journey.',
      category: 'Vehicles'
    },
    {
      question: 'Do you offer outstation services?',
      answer: 'Yes, we provide outstation taxi services for both one-way and round trips with experienced drivers.',
      category: 'Services'
    },
    {
      question: 'Can I book a taxi for someone else?',
      answer: 'Yes, you can book a taxi for family members, friends, or colleagues. Simply provide the pickup details.',
      category: 'Booking'
    },
    {
      question: 'What if my flight is delayed?',
      answer: 'We track flight schedules and adjust pickup times accordingly for airport transfers.',
      category: 'Services'
    },
    {
      question: 'Do you have corporate packages?',
      answer: 'Yes, we offer customized corporate travel solutions including employee transportation and client pickups.',
      category: 'Corporate'
    },
    {
      question: 'How can I track my booked taxi?',
      answer: 'Once your booking is confirmed, you will receive real-time tracking information via SMS or our app.',
      category: 'Tracking'
    },
    {
      question: 'What safety measures do you have?',
      answer: 'We prioritize passenger safety with verified drivers, GPS-enabled vehicles, and 24/7 customer support.',
      category: 'Safety'
    },
    {
      question: 'Do you provide child seats?',
      answer: 'Yes, child seats are available upon request. Please mention this requirement while booking.',
      category: 'Services'
    },
    {
      question: 'What are your service hours?',
      answer: 'We operate 24/7, including holidays and weekends. You can book our services anytime.',
      category: 'General'
    }
  ];

  const categories = ['All', 'Booking', 'Payment', 'Safety', 'Services', 'Pricing', 'Corporate', 'Tracking', 'Vehicles', 'General'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="text-white" size={20} />
              <span className="text-white font-bold">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-taxi-black mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our taxi services
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-taxi-black mb-4">Browse by Category</h2>
          <p className="text-gray-700">Find answers specific to your needs</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => {
            const colors = [
              'from-purple-500 to-pink-500',
              'from-blue-500 to-cyan-500',
              'from-green-500 to-emerald-500',
              'from-orange-500 to-red-500',
              'from-indigo-500 to-purple-500'
            ];
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-full font-bold transition-all duration-500 transform hover:scale-105 ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${colors[index % colors.length]} text-white shadow-xl`
                    : 'glass text-taxi-black hover:bg-white/30 hover:shadow-lg'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <HelpCircle size={16} />
                  <span>{category}</span>
                </span>
                {selectedCategory === category && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} rounded-full animate-pulse opacity-50`}></div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ Items */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredFAQs.map((faq, index) => {
            const cardColors = [
              'from-purple-500/20 to-pink-500/10',
              'from-blue-500/20 to-cyan-500/10',
              'from-green-500/20 to-emerald-500/10',
              'from-orange-500/20 to-red-500/10',
              'from-indigo-500/20 to-purple-500/10'
            ];
            const categoryColors = {
              'Booking': 'from-blue-500 to-cyan-500',
              'Payment': 'from-green-500 to-emerald-500',
              'Safety': 'from-red-500 to-pink-500',
              'Pricing': 'from-orange-500 to-yellow-500',
              'General': 'from-purple-500 to-indigo-500'
            };
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div
                  className={`relative glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                    activeIndex === index ? 'scale-105 shadow-2xl' : ''
                  }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[index % cardColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Floating decoration */}
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${cardColors[index % cardColors.length]} rounded-full animate-pulse opacity-30`}></div>
                  
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-300 relative z-10"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Q Icon */}
                      <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-br ${cardColors[index % cardColors.length]} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                          <span className="text-white font-bold text-lg">Q</span>
                        </div>
                        {/* Ring animation */}
                        <div className={`absolute inset-0 rounded-2xl border-2 ${cardColors[index % cardColors.length].split(' ')[0].replace('from-', 'border-').split('/')[0]} opacity-30 animate-ping`}></div>
                      </div>
                      
                      {/* Question */}
                      <h3 className="text-xl font-bold text-taxi-black group-hover:text-gray-800 transition-colors duration-300">{faq.question}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {/* Category Badge */}
                      <span className={`text-sm text-white bg-gradient-to-r ${categoryColors[faq.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'} px-3 py-1 rounded-full font-medium shadow-lg`}>
                        {faq.category}
                      </span>
                      
                      {/* Chevron */}
                      <div className={`w-10 h-10 bg-gradient-to-br ${cardColors[index % cardColors.length]} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        {activeIndex === index ? (
                          <ChevronUp className="text-white" size={20} />
                        ) : (
                          <ChevronDown className="text-white" size={20} />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer */}
                  {activeIndex === index && (
                    <div className="px-6 pb-6 animate-fadeIn">
                      <div className="flex items-start space-x-4 pt-4 border-t border-white/20">
                        {/* A Icon */}
                        <div className="relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${cardColors[index % cardColors.length]} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <span className="text-white font-bold text-lg">A</span>
                          </div>
                        </div>
                        
                        {/* Answer Text */}
                        <p className="text-gray-700 leading-relaxed text-lg flex-1">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[index % cardColors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${cardColors[index % cardColors.length]} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Support */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-float opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full mb-6">
                <HelpCircle className="text-white" size={16} />
                <span className="text-white font-bold">Need Help?</span>
              </div>
              <h2 className="text-4xl font-bold text-taxi-black mb-4">Still Have Questions?</h2>
              <p className="text-xl text-gray-700">Our support team is here to help you 24/7</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group relative">
                <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-30"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Phone className="text-white" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-30 animate-ping"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-blue-600 transition-colors duration-300">Call Us</h3>
                    <p className="text-gray-700 mb-2">24/7 customer support</p>
                    <p className="text-blue-600 font-bold">+91 98765 43210</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-pulse opacity-30"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Mail className="text-white" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-green-500 opacity-30 animate-ping"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-green-600 transition-colors duration-300">Email Us</h3>
                    <p className="text-gray-700 mb-2">Get quick responses</p>
                    <p className="text-green-600 font-bold">info@taxigo.com</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse opacity-30"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <MapPin className="text-white" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-30 animate-ping"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-purple-600 transition-colors duration-300">Visit Us</h3>
                    <p className="text-gray-700 mb-2">Udaipur, Rajasthan</p>
                    <p className="text-purple-600 font-bold">313001</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <button className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
                  <Phone className="group-hover:animate-pulse" size={20} />
                  <span>Contact Support</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-taxi-black mb-4">Quick Help</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Book a Taxi', desc: 'Quick and easy booking', icon: CheckCircle },
            { title: 'Check Fare', desc: 'Get instant price estimates', icon: CheckCircle },
            { title: 'Track Ride', desc: 'Real-time ride tracking', icon: CheckCircle },
            { title: 'Cancel Booking', desc: 'Easy cancellation process', icon: CheckCircle },
          ].map((item, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <item.icon className="text-taxi-yellow mx-auto mb-4" size={48} />
              <h3 className="text-lg font-semibold text-taxi-black mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
