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
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['General Inquiries', 'info@taxigo.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Udaipur, Rajasthan 313001', 'India'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Service Available', 'Always Open'],
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
              <span className="text-taxi-yellow font-bold text-sm tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mx-auto">
              Get in touch with us for bookings, inquiries, or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Phone className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Contact Info</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Multiple ways to reach us anytime</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 border border-white/10">
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto transition-colors duration-300 group-hover:bg-taxi-yellow">
                        <info.icon className="text-taxi-yellow group-hover:text-taxi-black transition-colors duration-300" size={32} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`text-gray-400 ${idx === 0 ? 'text-sm mb-1' : 'text-base font-bold text-taxi-yellow'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12 p-6 md:p-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                  <Send className="text-taxi-yellow" size={16} />
                  <span className="text-taxi-yellow font-bold text-sm tracking-wider uppercase">Send Message</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-taxi-yellow transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-taxi-yellow transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-taxi-yellow transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-taxi-yellow transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-taxi-yellow text-taxi-black font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <Send className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
                
                {isSubmitted && (
                  <div className="mt-6 p-4 bg-white/5 border border-taxi-yellow/30 rounded-lg flex items-center space-x-2 animate-fadeIn">
                    <CheckCircle className="text-taxi-yellow" size={20} />
                    <span className="text-white font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="relative glass rounded-3xl p-8 h-full min-h-[400px] flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                    <MapPin className="text-taxi-yellow" size={16} />
                    <span className="text-taxi-yellow font-bold text-sm tracking-wider uppercase">Location</span>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto">
                      <MapPin className="text-taxi-yellow" size={48} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Find Us in Udaipur</h3>
                  <p className="text-gray-400 mb-2">Interactive map will be displayed here</p>
                  <p className="text-lg font-bold text-taxi-yellow">Udaipur, Rajasthan 313001</p>
                  
                  {/* CTA */}
                  <div className="mt-8">
                    <a href="#" className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300">
                      <MapPin size={16} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Phone className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Quick Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Quick Contact Options</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Choose your preferred way to reach us</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-3 gap-8 p-6 md:p-12">
            {[
              {
                title: 'Call for Booking',
                desc: 'Instant booking over phone',
                action: 'Call Now',
                icon: Phone,
              },
              {
                title: 'WhatsApp Support',
                desc: 'Chat with our team',
                action: 'Start Chat',
                icon: Send,
              },
              {
                title: 'Email Support',
                desc: 'Detailed inquiries',
                action: 'Send Email',
                icon: Mail,
              }
            ].map((option, index) => (
              <div key={index} className="group relative">
                <div className="relative glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 border border-white/10">
                  <div className="relative z-10 text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto transition-colors duration-300 group-hover:bg-taxi-yellow">
                        <option.icon className="text-taxi-yellow group-hover:text-taxi-black transition-colors duration-300" size={40} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
                    <p className="text-gray-400 mb-8">{option.desc}</p>
                    <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 px-6 rounded-xl hover:bg-taxi-yellow hover:text-taxi-black transition-all duration-300">
                      <span>{option.action}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-taxi-yellow/10 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-12 md:p-20 text-center border border-white/10">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="text-taxi-yellow" size={16} />
              <span className="text-taxi-yellow font-bold text-sm tracking-wider uppercase">Need Help?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Have Questions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Check out our FAQ section for quick answers to common questions
            </p>
            
            <a href="/faq" className="inline-flex items-center space-x-3 bg-taxi-yellow text-taxi-black font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300 group">
              <HelpCircle size={20} />
              <span>View FAQ</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
