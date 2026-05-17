import React from 'react';
import { Users, Award, Clock, CheckCircle, Target, Eye, Heart, Shield, Car, Phone, ArrowRight, MapPin } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', image: '/team_ceo_1778825666916.png' },
    { name: 'Priya Sharma', role: 'Operations Manager', image: '/team_ops_1778825703910.png' },
    { name: 'Amit Patel', role: 'Customer Relations', image: '/team_customer_1778825739366.png' },
    { name: 'Suman Verma', role: 'Fleet Manager', image: '/team_fleet_1778825719491.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url('/about_hero_taxi_1778825012509.png')` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-blob" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 glass-premium px-8 py-3 rounded-full">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-soft-glow" />
              <span className="text-white font-black text-xs tracking-[0.3em] uppercase">Since 2014</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-tight">
              Crafting <span className="font-serif italic text-gradient-gold shimmer">Journeys</span> <br />
              of Excellence
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-200 max-w-2xl font-medium leading-relaxed">
              Udaipur's most trusted taxi service, built on a decade of safety, hospitality, and professional commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Editorial Layout */}
      <section className="py-32 md:py-64 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-[4rem]" />
               <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                 <img src="/about_hero_taxi_1778825012509.png" alt="Our Heritage" loading="lazy" decoding="async" className="w-full object-cover" />
               </div>
            </div>
            
            <div className="space-y-12 animate-fade-in-up">
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight">
                Our <span className="font-serif italic text-taxi-yellow">Heritage</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                Founded in 2013, Taxi GO started as a small fleet of 5 cars with a simple mission: 
                to provide safe, reliable, and affordable transportation in Udaipur.
              </p>
              
              <div className="space-y-8">
                {[
                  { year: '2013', title: 'The Beginning', desc: 'Started with 5 vehicles and a passion for service.' },
                  { year: '2018', title: 'Expansion', desc: 'Became the leading provider for corporate and airport transfers.' },
                  { year: '2024', title: 'Excellence', desc: 'Over 100+ luxury vehicles and 50k+ happy customers.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-8 group">
                    <div className="text-4xl font-black text-slate-200 group-hover:text-taxi-yellow transition-colors font-serif">{item.year}</div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Immersive Grid */}
      <section className="py-32 md:py-64 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-vibrant-emerald opacity-10 animate-moving-mesh" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '10+', label: 'Years Exp', icon: Award, color: 'gold' },
              { number: '50K+', label: 'Happy Guests', icon: Users, color: 'sapphire' },
              { number: '100+', label: 'Pro Drivers', icon: Shield, color: 'sunset' },
              { number: '24/7', label: 'Support', icon: Clock, color: 'gold' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-20 h-20 mx-auto icon-container bg-white/5 border-white/10 text-white">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <div className={`text-5xl md:text-7xl font-black text-gradient-${stat.color} shimmer`}>{stat.number}</div>
                <div className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Bento Cards */}
      <section className="py-32 md:py-64 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight">
              Driven by <span className="font-serif italic text-taxi-yellow">Values</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Our principles define every kilometer we travel and every guest we host.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Safety First', icon: Shield, desc: 'Advanced GPS tracking and verified driver protocols.' },
              { title: 'Punctuality', icon: Clock, desc: 'Real-time monitoring ensuring we are always on time.' },
              { title: 'Hospitality', icon: Heart, desc: 'Traditional values met with modern service standards.' },
              { title: 'Integrity', icon: Target, desc: 'Honest pricing and transparent business ethics.' }
            ].map((value, index) => (
              <div key={index} className="group bento-card-premium p-12 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="space-y-10">
                  <div className="w-16 h-16 icon-container bg-slate-900 text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{value.title}</h3>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Luxury Portrait Style */}
      <section className="py-32 md:py-64 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12 animate-fade-in-up">
            <div className="space-y-8 max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-black leading-tight text-slate-900">
                The <span className="font-serif italic text-taxi-yellow">Visionaries</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 font-medium">The dedicated professionals behind Udaipur's finest transportation service.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:-translate-y-4">
                  <img src={member.image} alt={member.name} loading="lazy" decoding="async" className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10 right-10 text-center">
                    <div className="font-black text-white text-2xl mb-2">{member.name}</div>
                    <div className="text-taxi-yellow font-black uppercase tracking-widest text-[10px]">{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-64 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative glass-dark p-12 md:p-32 rounded-[4rem] overflow-hidden group">
            <div className="absolute inset-0 bg-vibrant-emerald opacity-30 animate-moving-mesh" />
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-tight">
                Experience the <br />
                <span className="font-serif italic text-taxi-yellow">Taxi GO</span> Difference
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed">
                Join thousands of satisfied customers who trust us for their transportation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <a href="/contact" className="btn-premium py-6 px-20 text-xl">
                  <Phone size={24} />
                  <span>Book Now</span>
                </a>
                <a href="/services" className="btn-outline-premium py-6 px-20 text-xl">
                  <span>Explore Fleet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
