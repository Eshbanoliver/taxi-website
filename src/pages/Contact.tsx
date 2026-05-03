import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['24/7 Customer Support', '+91 98765 43210'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['General Inquiries', 'info@taxigo.com'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Udaipur, Rajasthan 313001', 'India'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Service Available', 'Always Open'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-pink-500/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-orange-500/25 rounded-full animate-pulse"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-orange-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-red-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full mb-8 group">
              <Phone className="text-white animate-float" size={24} />
              <span className="text-white font-bold text-lg">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-taxi-black mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with us for bookings, inquiries, or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full mb-4">
            <Phone className="text-white" size={16} />
            <span className="text-white font-semibold">Contact Info</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Multiple ways to reach us anytime</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/15 to-pink-500/10 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Floating decoration */}
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${info.color} rounded-full animate-pulse opacity-30`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <info.icon className="text-white" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className={`absolute inset-0 rounded-2xl border-2 ${info.color.split(' ')[0].replace('from-', 'border-').split('/')[0]} opacity-30 animate-ping`}></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-taxi-black mb-4 group-hover:text-gray-800 transition-colors duration-300">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-gray-700 ${idx === 0 ? 'font-medium mb-1' : 'text-lg font-bold'} group-hover:text-gray-900 transition-colors duration-300`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${info.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-float opacity-30"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative glass rounded-3xl p-8 md:p-12">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full mb-6">
                  <Send className="text-white" size={16} />
                  <span className="text-white font-bold">Send Message</span>
                </div>
                
                <h2 className="text-4xl font-bold text-taxi-black mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-white/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-white/30"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:bg-white/30"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none hover:bg-white/30"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="relative w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <Send className="relative z-10 group-hover:animate-pulse" size={20} />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </form>
                
                {isSubmitted && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2 backdrop-blur-lg animate-fadeIn">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float opacity-30"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative glass rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5"></div>
                
                <div className="relative z-10 text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full mb-6">
                    <MapPin className="text-white" size={16} />
                    <span className="text-white font-bold">Location</span>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-pulse">
                      <MapPin className="text-white" size={48} />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-30 animate-ping"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-taxi-black mb-3">Find Us in Udaipur</h3>
                  <p className="text-gray-700 mb-2">Interactive map will be displayed here</p>
                  <p className="text-lg font-bold text-purple-600">Udaipur, Rajasthan 313001</p>
                  
                  {/* CTA */}
                  <div className="mt-6">
                    <button className="relative inline-block group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <a href="#" className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                        <MapPin className="group-hover:animate-pulse" size={16} />
                        <span>Get Directions</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-green-500 px-4 py-2 rounded-full mb-4">
            <Phone className="text-white" size={16} />
            <span className="text-white font-semibold">Quick Contact</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Quick Contact Options</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Choose your preferred way to reach us</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-green-500/15 to-emerald-500/10 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Call for Booking',
                desc: 'Instant booking over phone',
                action: 'Call Now',
                icon: Phone,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'WhatsApp Support',
                desc: 'Chat with our team',
                action: 'Start Chat',
                icon: Send,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Email Support',
                desc: 'Detailed inquiries',
                action: 'Send Email',
                icon: Mail,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((option, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Floating decoration */}
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${option.color} rounded-full animate-pulse opacity-30`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <option.icon className="text-white" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className={`absolute inset-0 rounded-2xl border-2 ${option.color.split(' ')[0].replace('from-', 'border-').split('/')[0]} opacity-30 animate-ping`}></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-gray-800 transition-colors duration-300">{option.title}</h3>
                    <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">{option.desc}</p>
                    <button className={`relative w-full bg-gradient-to-r ${option.color} text-white font-bold py-3 px-6 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                      <span className="relative z-10">{option.action}</span>
                    </button>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${option.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-float opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="text-white" size={16} />
              <span className="text-white font-bold">Need Help?</span>
            </div>
            
            <h2 className="text-4xl font-bold text-taxi-black mb-6">Have Questions?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Check out our FAQ section for quick answers to common questions
            </p>
            
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <a href="/faq" className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
                <HelpCircle className="group-hover:animate-pulse" size={20} />
                <span>View FAQ</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
