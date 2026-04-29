import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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
      details: ['24/7 Customer Support', 'Coming Soon'],
      color: 'bg-taxi-yellow'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['General Inquiries', 'Coming Soon'],
      color: 'bg-taxi-yellow'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Udaipur, Rajasthan 313001', 'India'],
      color: 'bg-taxi-yellow'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['24/7 Service Available', 'Always Open'],
      color: 'bg-taxi-yellow'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-yellow-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-taxi-black mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with us for bookings, inquiries, or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-700">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-taxi-black mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-taxi-yellow transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold text-taxi-black mb-6">Find Us</h2>
            <div className="glass rounded-2xl p-6 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-taxi-yellow mx-auto mb-4" size={64} />
                <h3 className="text-xl font-semibold text-taxi-black mb-2">Map Loading...</h3>
                <p className="text-gray-700">Interactive map will be displayed here</p>
                <p className="text-sm text-gray-600 mt-2">Udaipur, Rajasthan 313001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-taxi-black mb-4">Quick Contact Options</h2>
          <p className="text-xl text-gray-700">Choose your preferred way to reach us</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Call for Booking',
              desc: 'Instant booking over phone',
              action: 'Call Now',
              icon: Phone
            },
            {
              title: 'WhatsApp Support',
              desc: 'Chat with our team',
              action: 'Start Chat',
              icon: Send
            },
            {
              title: 'Email Support',
              desc: 'Detailed inquiries',
              action: 'Send Email',
              icon: Mail
            }
          ].map((option, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-2">{option.title}</h3>
              <p className="text-gray-700 mb-4">{option.desc}</p>
              <button className="btn-secondary w-full">{option.action}</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Link */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-taxi-black mb-4">Have Questions?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Check out our FAQ section for quick answers to common questions
          </p>
          <a href="/faq" className="btn-primary inline-flex items-center">
            View FAQ
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
