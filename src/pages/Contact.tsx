import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

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

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us | Book Taxi GO Udaipur | 24/7 Support Hotline"
        description="Get in touch with Udaipur's premier taxi service. Call our 24/7 hotline, message us on WhatsApp, or send an inquiry online."
        keywords="contact Taxi GO, Udaipur taxi booking phone, WhatsApp taxi Udaipur, rent car Udaipur contact, taxi company Udaipur address"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1525013895643-8162c88d744e?w=1600&h=900&fit=crop&auto=format&q=80')` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 glass-premium px-8 py-3 rounded-full">
              <div className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse shadow-soft-glow" />
              <span className="text-white font-black text-xs tracking-[0.3em] uppercase">Connect With Us</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-tight">
              Get In <span className="font-serif italic text-gradient-gold shimmer">Touch</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-200 max-w-2xl font-medium leading-relaxed">
              We're here to help you 24/7. Reach out for elite transportation support in Udaipur.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Contact Form */}
            <div className="glass-premium p-12 md:p-24 rounded-[4rem] border-slate-100 shadow-premium animate-fade-in-up">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-slate-900">Send a <span className="font-serif italic text-taxi-yellow">Message</span></h2>
                  <p className="text-slate-500 font-medium">We usually respond within 30 minutes for urgent inquiries.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-taxi-yellow transition-all" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-taxi-yellow transition-all" 
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-slate-50 border-none rounded-3xl p-5 focus:ring-2 focus:ring-taxi-yellow transition-all resize-none" 
                      placeholder="How can we assist your journey?"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-premium w-full py-6 text-lg">
                    <Send size={24} />
                    <span>Send Message</span>
                  </button>

                  {isSubmitted && (
                    <div className="flex items-center space-x-3 text-emerald-500 font-black animate-fadeIn justify-center">
                      <CheckCircle size={20} />
                      <span>Message Received Successfully!</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-24">
              <div className="space-y-12">
                 <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                  Reach Out <br />
                  <span className="font-serif italic text-taxi-yellow">Directly</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 font-medium">Choose your preferred channel for immediate assistance.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { icon: Phone, title: 'Call Center', detail: '+91 98765 43210', desc: '24/7 Hotline' },
                  { icon: MessageCircle, title: 'WhatsApp', detail: '+91 98765 43211', desc: 'Instant Chat' },
                  { icon: Mail, title: 'Email', detail: 'info@taxigo.com', desc: 'General Inquiries' },
                  { icon: MapPin, title: 'Office', detail: 'Udaipur, India', desc: 'Main Headquarters' },
                ].map((item, index) => (
                  <div key={index} className="group space-y-6 p-10 glass rounded-[3rem] hover:shadow-premium-hover transition-all duration-700 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="w-16 h-16 icon-container bg-slate-900 text-white shadow-2xl group-hover:scale-110 transition-transform">
                      <item.icon size={28} />
                    </div>
                    <div className="space-y-2">
                      <div className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{item.desc}</div>
                      <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                      <p className="text-taxi-yellow font-black text-lg">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Immersive Placeholder */}
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl h-96 group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                 <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                    <MapPin size={48} className="text-taxi-yellow animate-bounce" />
                    <div className="absolute bottom-10 left-10 right-10">
                       <div className="glass-premium p-8 rounded-3xl flex items-center justify-between">
                          <div>
                             <div className="font-black text-white text-xl">Udaipur, Rajasthan</div>
                             <div className="text-slate-300 text-xs font-bold uppercase tracking-widest">Main Hub</div>
                          </div>
                          <button className="p-4 bg-taxi-yellow rounded-full text-taxi-black hover:scale-110 transition-transform">
                             <ArrowRight size={24} />
                          </button>
                       </div>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Support CTA */}
      <section className="py-32 md:py-64 bg-slate-50">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">Need immediate help?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+919876543210" className="btn-premium py-6 px-16 text-xl">
               <Phone size={24} />
               <span>Call 24/7 Hotline</span>
            </a>
            <a href="https://wa.me/919876543211" className="btn-outline-premium border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white py-6 px-16 text-xl">
               <MessageCircle size={24} />
               <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
