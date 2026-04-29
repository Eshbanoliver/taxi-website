import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-yellow-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <HelpCircle className="text-taxi-yellow mx-auto mb-6" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold text-taxi-black mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our taxi services
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-taxi-yellow text-taxi-black'
                  : 'glass text-taxi-black hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Items */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-taxi-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-taxi-yellow font-semibold text-sm">Q</span>
                  </div>
                  <h3 className="text-lg font-semibold text-taxi-black">{faq.question}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 bg-taxi-yellow/20 px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="text-taxi-yellow" size={20} />
                  ) : (
                    <ChevronDown className="text-taxi-yellow" size={20} />
                  )}
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-taxi-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-taxi-yellow font-semibold text-sm">A</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-taxi-black mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-700">Our support team is here to help you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-taxi-black mb-2">Call Us</h3>
              <p className="text-gray-700">24/7 customer support</p>
              <p className="text-taxi-yellow font-medium">Coming Soon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-taxi-black mb-2">Email Us</h3>
              <p className="text-gray-700">Get quick responses</p>
              <p className="text-taxi-yellow font-medium">Coming Soon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-taxi-black mb-2">Visit Us</h3>
              <p className="text-gray-700">Udaipur, Rajasthan</p>
              <p className="text-taxi-yellow font-medium">313001</p>
            </div>
          </div>
          <div className="text-center">
            <button className="btn-primary">Contact Support</button>
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
