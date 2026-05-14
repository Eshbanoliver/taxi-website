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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 border-b border-slate-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-8 border border-slate-200 shadow-sm">
              <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
              <span className="text-taxi-yellow font-bold text-sm tracking-wider uppercase">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mx-auto">
              Find answers to common questions about our taxi services
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Browse by Category</h2>
          <p className="text-slate-600">Find answers specific to your needs</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-taxi-yellow text-taxi-black border-taxi-yellow shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-2">
                {selectedCategory === category && <div className="w-2 h-2 bg-taxi-black rounded-full" />}
                <span>{category}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Items */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="group relative">
              <div
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 border border-slate-100 shadow-sm ${
                  activeIndex === index ? 'ring-1 ring-taxi-yellow bg-slate-50' : 'hover:bg-slate-50'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="icon-container w-10 h-10 flex-shrink-0">
                      <HelpCircle className={activeIndex === index ? 'icon-primary' : 'icon-dark opacity-40'} size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-taxi-yellow' : 'text-slate-900 group-hover:text-taxi-yellow'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="hidden md:inline-block text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      {faq.category}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'bg-taxi-yellow text-taxi-black rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </button>
                
                {/* Answer */}
                {activeIndex === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 opacity-0"></div>
                      <p className="text-slate-600 leading-relaxed text-base flex-1">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="relative">
          <div className="absolute inset-0 bg-mesh-amber border border-amber-100/50 rounded-3xl shadow-sm"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 border border-slate-100">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
              <p className="text-xl text-slate-600">Our support team is here to help you 24/7</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative">
                <div className="relative glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 border border-slate-100 shadow-sm">
                  <div className="relative z-10 text-center">
                    <div className="icon-container w-16 h-16 mx-auto mb-6 group-hover:bg-taxi-yellow transition-colors duration-300">
                      <Phone className="icon-primary group-hover:text-taxi-black transition-colors duration-300" size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Call Us</h3>
                    <p className="text-slate-500 mb-2">24/7 customer support</p>
                    <p className="text-taxi-yellow font-bold">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="relative glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 border border-slate-100 shadow-sm">
                  <div className="relative z-10 text-center">
                    <div className="icon-container w-16 h-16 mx-auto mb-6 group-hover:bg-taxi-yellow transition-colors duration-300">
                      <Mail className="icon-primary group-hover:text-taxi-black transition-colors duration-300" size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Email Us</h3>
                    <p className="text-slate-500 mb-2">Get quick responses</p>
                    <p className="text-taxi-yellow font-bold">info@taxigo.com</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="relative glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 border border-slate-100 shadow-sm">
                  <div className="relative z-10 text-center">
                    <div className="icon-container w-16 h-16 mx-auto mb-6 group-hover:bg-taxi-yellow transition-colors duration-300">
                      <MapPin className="icon-primary group-hover:text-taxi-black transition-colors duration-300" size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Visit Us</h3>
                    <p className="text-slate-500 mb-2">Udaipur, Rajasthan</p>
                    <p className="text-taxi-yellow font-bold">313001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-taxi-yellow text-taxi-black font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300 inline-flex items-center space-x-3 group">
                <Phone size={20} />
                <span>Contact Support</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Help</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="absolute inset-0 bg-mesh-indigo rounded-3xl -m-4 sm:-m-6 lg:-m-8"></div>
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            { title: 'Book a Taxi', desc: 'Quick and easy booking', icon: CheckCircle },
            { title: 'Check Fare', desc: 'Get instant price estimates', icon: CheckCircle },
            { title: 'Track Ride', desc: 'Real-time ride tracking', icon: CheckCircle },
            { title: 'Cancel Booking', desc: 'Easy cancellation process', icon: CheckCircle },
          ].map((item, index) => (
            <div key={index} className="glass rounded-3xl p-6 text-center border border-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-2">
              <div className="icon-container w-12 h-12 mx-auto mb-4">
                <item.icon className="icon-primary w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FAQ;
