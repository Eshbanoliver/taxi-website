import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // ... rest of setup ...
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
    }
  ];

  const categories = ['All', 'Booking', 'Payment', 'Safety', 'Services', 'Pricing', 'Vehicles'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Frequently Asked Questions (FAQ) | Taxi GO Udaipur"
        description="Got questions about booking, fares, or safety? Read our frequently asked questions about Udaipur's premier taxi service."
        keywords="Udaipur taxi FAQs, book cab Udaipur help, taxi fares Udaipur, cab cancellation policy Udaipur, safe rides Udaipur FAQ"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url('/faq_hero_taxi_1778825046153.png')` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 glass-premium px-8 py-3 rounded-full">
              <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse shadow-soft-glow" />
              <span className="text-white font-black text-xs tracking-[0.3em] uppercase">Help Center</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-tight">
              Common <span className="font-serif italic text-gradient-gold shimmer">Questions</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-200 max-w-2xl font-medium leading-relaxed">
              Find everything you need to know about Udaipur's premier transportation service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories & Items */}
      <section className="py-32 md:py-48 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Sidebar Categories */}
            <div className="lg:w-1/3 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-slate-900">Categories</h2>
                <div className="flex flex-wrap lg:flex-col gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all border text-left ${
                        selectedCategory === cat 
                        ? 'bg-taxi-yellow border-taxi-yellow text-taxi-black shadow-premium' 
                        : 'bg-white border-slate-100 text-slate-400 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="glass-dark p-12 rounded-[3rem] space-y-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-vibrant-rose opacity-20 animate-moving-mesh" />
                <h3 className="text-3xl font-black text-white relative z-10">Still have questions?</h3>
                <p className="text-slate-300 font-medium relative z-10">Our support team is available 24/7 to assist you with any inquiries.</p>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-4 text-taxi-yellow">
                    <Phone size={20} />
                    <span className="font-black">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-4 text-white">
                    <Mail size={20} />
                    <span className="font-black">support@taxigo.com</span>
                  </div>
                </div>
                <button className="btn-premium w-full py-5 relative z-10">
                  Contact Now
                </button>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:w-2/3 space-y-8">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="group">
                  <div 
                    className={`glass rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${
                      activeIndex === index ? 'border-taxi-yellow shadow-premium' : 'border-slate-100 hover:border-taxi-yellow/30'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-10 text-left flex items-center justify-between group-hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="flex items-center space-x-8">
                        <div className={`w-12 h-12 icon-container transition-colors ${activeIndex === index ? 'bg-taxi-yellow text-taxi-black' : 'bg-slate-100 text-slate-400'}`}>
                          <HelpCircle size={24} />
                        </div>
                        <h3 className={`text-xl md:text-2xl font-black transition-colors ${activeIndex === index ? 'text-taxi-yellow' : 'text-slate-900'}`}>
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown size={28} className={`text-slate-300 transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-taxi-yellow' : ''}`} />
                    </button>
                    
                    {activeIndex === index && (
                      <div className="px-10 pb-10 animate-fadeIn">
                        <div className="pt-10 border-t border-slate-100">
                          <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-32 md:py-64 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Phone, title: 'Call Center', desc: 'Available 24/7 for urgent bookings and support.', detail: '+91 98765 43210' },
              { icon: Mail, title: 'Email Support', desc: 'For corporate inquiries and formal complaints.', detail: 'info@taxigo.com' },
              { icon: MapPin, title: 'Head Office', desc: 'Visit us for long-term contracts and partnerships.', detail: 'Udaipur, Rajasthan' },
            ].map((item, index) => (
              <div key={index} className="bento-card-premium p-12 text-center space-y-8 group">
                <div className="w-20 h-20 mx-auto icon-container bg-slate-900 text-white shadow-2xl group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                <p className="text-slate-500 font-medium">{item.desc}</p>
                <div className="text-taxi-yellow font-black tracking-widest uppercase text-sm pt-4 border-t border-slate-100">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
