import React from 'react';
import { Users, Award, Clock, CheckCircle, Target, Eye, Heart, Shield, Car, Star, ArrowRight, MapPin } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', experience: '15+ years', image: '/team_ceo_1778825666916.png' },
    { name: 'Priya Sharma', role: 'Operations Manager', experience: '10+ years', image: '/team_ops_1778825703910.png' },
    { name: 'Amit Patel', role: 'Customer Relations', experience: '8+ years', image: '/team_customer_1778825739366.png' },
    { name: 'Suman Verma', role: 'Fleet Manager', experience: '12+ years', image: '/team_fleet_1778825719491.png' },
  ];

  const achievements = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Professional Drivers', icon: Users },
    { number: '24/7', label: 'Service Available', icon: Clock },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Background Image with Vibrant Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] animate-ken-burns"
          style={{ backgroundImage: `url('/about_hero_taxi_1778825012509.png')` }}
        ></div>
        <div className="absolute inset-0 bg-vibrant-emerald opacity-90 animate-moving-mesh"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-3 rounded-full shadow-2xl animate-float">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,1)]"></div>
              <span className="text-white font-black text-sm tracking-[0.3em] uppercase">Since 2014</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-tight animate-slide-in-up shimmer">
              Our <span className="text-gradient-gold">Excellence</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-100 leading-relaxed font-medium max-w-4xl mx-auto animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              Udaipur's most trusted taxi service, built on a decade of safety, hospitality, and professional commitment.
            </p>
            
            {/* Stats preview with 3D effect */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 perspective-1000">
              {[
                { number: '10+', label: 'Years Exp', icon: Award, color: 'gold' },
                { number: '50K+', label: 'Customers', icon: Users, color: 'sapphire' },
                { number: '100+', label: 'Pro Drivers', icon: Shield, color: 'sunset' },
                { number: '24/7', label: 'Service', icon: Clock, color: 'gold' }
              ].map((stat, index) => (
                <div key={index} className="card-3d animate-slide-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <div className="glass-dark rounded-3xl p-6 border border-white/10 text-center shadow-2xl hover:border-white/30 transition-all duration-500">
                    <div className="icon-container w-14 h-14 mx-auto mb-4 bg-white/5 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                      <stat.icon className="text-white w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-black mb-1 shimmer text-gradient-${stat.color}`}>{stat.number}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-black uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="container mx-auto px-4 py-24 lg:py-36 bg-violet-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-200/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/20 blur-[120px] rounded-full"></div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 shadow-sm px-4 py-2 rounded-full mb-4">
            <Car className="text-violet-500" size={16} />
            <span className="text-violet-600 font-semibold">Our Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Story</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">From humble beginnings to becoming Udaipur's trusted transportation partner</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-mesh-violet border border-violet-100/50 rounded-3xl shadow-sm"></div>
          
          <div className="relative glass rounded-3xl p-6 sm:p-16 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-6 sm:space-y-8">
                {/* Timeline item 1 */}
                <div className="group relative">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-taxi-yellow flex-shrink-0">
                      <span className="text-slate-700 group-hover:text-taxi-black font-bold text-sm sm:text-base">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-taxi-yellow transition-colors duration-300">The Beginning</h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Founded in 2013, Taxi GO started as a small fleet of 5 cars with a simple mission: 
                        to provide safe, reliable, and affordable transportation in Udaipur.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 2 */}
                <div className="group relative">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 border border-slate-100 shadow-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-taxi-yellow flex-shrink-0">
                      <span className="text-slate-900 group-hover:text-taxi-black font-bold text-sm sm:text-base">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-taxi-yellow transition-colors duration-300">Growth & Expansion</h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Our journey has been driven by our commitment to customer satisfaction and our passion for 
                        excellence. We've continuously expanded our services, upgraded our fleet, and embraced technology.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 3 */}
                <div className="group relative">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 border border-slate-100 shadow-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-taxi-yellow flex-shrink-0">
                      <span className="text-slate-900 group-hover:text-taxi-black font-bold text-sm sm:text-base">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-taxi-yellow transition-colors duration-300">Today's Success</h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Today, we're proud to be the preferred choice for locals and tourists alike, offering 
                        comprehensive transportation solutions with over 100 vehicles and dedicated professionals.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Visual Timeline */}
              <div className="relative mt-8 sm:mt-0">
                <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 transition-all duration-500 overflow-hidden shadow-sm">
                  <div className="relative z-10 text-center">
                    <div className="relative mb-4 sm:mb-8">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <div className="text-center">
                          <div className="text-2xl sm:text-4xl font-black text-violet-600">2013</div>
                          <div className="text-xs sm:text-sm font-bold text-violet-500">Founded</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Current status */}
                    <div className="mt-4 sm:mt-8">
                      <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-taxi-yellow rounded-full"></div>
                        <span className="text-slate-900 font-bold text-xs sm:text-sm">Leading Service Provider</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 shadow-sm px-4 py-2 rounded-full mb-4">
            <Target className="text-indigo-500" size={16} />
            <span className="text-indigo-600 font-semibold">Our Purpose</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Mission & Vision</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">The driving force behind everything we do</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white border border-slate-100 rounded-3xl shadow-sm"></div>
          
          <div className="relative grid md:grid-cols-2 gap-8 p-6 md:p-12">
            {/* Mission Card */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-slate-100 transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative z-10 text-center">
                <div className="icon-container w-20 h-20 mx-auto mb-8">
                  <Target className="icon-primary w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  To provide safe, reliable, and affordable transportation services that exceed customer expectations 
                  and contribute to the community's mobility needs while maintaining the highest standards of professionalism.
                </p>
                <div className="space-y-3 text-left">
                  {[
                    'Safe & Reliable Service',
                    'Affordable Pricing',
                    'Community Contribution',
                    'Professional Standards'
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-taxi-yellow flex-shrink-0" size={18} />
                      <span className="text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative z-10 text-center">
                <div className="icon-container w-20 h-20 mx-auto mb-8">
                  <Eye className="icon-primary w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  To become the most trusted and preferred taxi service provider in Rajasthan, known for our 
                  commitment to excellence, customer satisfaction, and innovative transportation solutions.
                </p>
                <div className="space-y-3 text-left">
                  {[
                    'Trusted Provider',
                    'Customer Satisfaction',
                    'Innovation Focus',
                    'Rajasthan Leadership'
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-taxi-yellow flex-shrink-0" size={18} />
                      <span className="text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-24 lg:py-36 bg-emerald-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-emerald-200/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-100/20 blur-[100px] rounded-full"></div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 shadow-sm px-4 py-2 rounded-full mb-4">
            <Heart className="text-emerald-500" size={16} />
            <span className="text-emerald-600 font-semibold">Our Principles</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">The foundation of everything we do and believe in</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-mesh-emerald border border-emerald-100/50 rounded-3xl shadow-sm"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-12">
            {[
              { 
                title: 'Safety First', 
                desc: 'Your safety is our top priority with comprehensive measures and protocols', 
                icon: Shield,
                features: ['GPS Tracking', 'Verified Drivers', 'Insurance', '24/7 Support']
              },
              { 
                title: 'Punctuality', 
                desc: 'Always on time, every time with our commitment to reliability', 
                icon: Clock,
                features: ['Real-time Tracking', 'ETA Updates', 'Pro Drivers', 'Optimized Routes']
              },
              { 
                title: 'Customer Focus', 
                desc: 'Your satisfaction drives us to deliver exceptional service', 
                icon: Users,
                features: ['24/7 Support', 'Feedback System', 'Custom Service', 'Loyalty Rewards']
              },
              { 
                title: 'Integrity', 
                desc: 'Honest and transparent service in all our dealings', 
                icon: Heart,
                features: ['Transparent Pricing', 'No Hidden Fees', 'Honest Comms', 'Ethical Practice']
              }
            ].map((value, index) => (
              <div key={index} className="glass rounded-3xl p-6 border border-slate-100 transition-transform duration-300 hover:-translate-y-2">
                <div className="relative z-10 text-center">
                  <div className="icon-container w-16 h-16 mx-auto mb-6 bg-emerald-50/50 border-emerald-100/50">
                    <value.icon className="text-emerald-500 w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">{value.desc}</p>
                  
                  <div className="space-y-2 text-left">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-taxi-yellow flex-shrink-0" size={14} />
                        <span className="text-sm text-slate-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Team */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">The dedicated professionals behind your trusted service</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass rounded-3xl p-8 border border-slate-100 text-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-taxi-yellow rounded-full rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-taxi-yellow font-black text-sm uppercase tracking-widest mb-2">{member.role}</p>
              <p className="text-slate-500 text-sm font-bold">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="glass rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Why Choose Taxi GO?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Setting the standard for excellence in transportation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Experienced and professional drivers with thorough background checks',
              'Well-maintained, clean, and comfortable vehicles',
              'Competitive and transparent pricing with no hidden charges',
              '24/7 customer support and emergency assistance',
              'Easy booking process through multiple channels',
              'Flexible payment options including digital payments',
              'GPS-enabled vehicles for real-time tracking',
              'Comprehensive insurance coverage for all rides',
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle className="text-taxi-yellow mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-600">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="relative">
          <div className="absolute inset-0 bg-white border border-taxi-yellow/20 rounded-3xl shadow-sm"></div>
          <div className="relative glass rounded-3xl p-12 md:p-20 text-center border border-slate-100">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Ready to Experience the Best Taxi Service?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us for their transportation needs</p>
            <button className="bg-taxi-yellow text-taxi-black font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all duration-300">
              Book Your Ride Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
