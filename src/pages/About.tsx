import React from 'react';
import { Users, Award, Clock, CheckCircle, Target, Eye, Heart, Shield, Car, Star, ArrowRight, MapPin } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', experience: '15+ years' },
    { name: 'Priya Sharma', role: 'Operations Manager', experience: '10+ years' },
    { name: 'Amit Patel', role: 'Customer Relations', experience: '8+ years' },
    { name: 'Suman Verma', role: 'Fleet Manager', experience: '12+ years' },
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-8 border border-white/10">
              <div className="w-2 h-2 bg-taxi-yellow rounded-full"></div>
              <span className="text-taxi-yellow font-bold text-sm tracking-wider uppercase">Our Story</span>
            </div>
            
            {/* Main heading */}
            <div className="relative mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                About <span className="text-taxi-yellow">Taxi GO</span>
              </h1>
            </div>
            
            {/* Enhanced description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-16">
              Discover our journey of excellence, from a small fleet to Udaipur's most trusted taxi service. 
              <span className="block text-white font-bold mt-4">Driven by passion, committed to you.</span>
            </p>
            
            {/* Stats preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: '10+', label: 'Years Experience', icon: Award },
                { number: '50K+', label: 'Happy Customers', icon: Users },
                { number: '100+', label: 'Pro Drivers', icon: Shield },
                { number: '24/7', label: 'Service', icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/10 text-center transition-transform duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <stat.icon className="text-taxi-yellow" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Car className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">From humble beginnings to becoming Udaipur's trusted transportation partner</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-8">
                {/* Timeline item 1 */}
                <div className="group relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-taxi-yellow flex-shrink-0">
                      <span className="text-white group-hover:text-taxi-black font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-taxi-yellow transition-colors duration-300">The Beginning</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Founded in 2013, Taxi GO started as a small fleet of 5 cars with a simple mission: 
                        to provide safe, reliable, and affordable transportation in Udaipur.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 2 */}
                <div className="group relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-taxi-yellow flex-shrink-0">
                      <span className="text-white group-hover:text-taxi-black font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-taxi-yellow transition-colors duration-300">Growth & Expansion</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our journey has been driven by our commitment to customer satisfaction and our passion for 
                        excellence. We've continuously expanded our services, upgraded our fleet, and embraced technology.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 3 */}
                <div className="group relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-taxi-yellow flex-shrink-0">
                      <span className="text-white group-hover:text-taxi-black font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-taxi-yellow transition-colors duration-300">Today's Success</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Today, we're proud to be the preferred choice for locals and tourists alike, offering 
                        comprehensive transportation solutions with over 100 vehicles and dedicated professionals.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Visual Timeline */}
              <div className="relative">
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden">
                  <div className="relative z-10 text-center">
                    <div className="relative mb-8">
                      <div className="w-32 h-32 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <div className="text-center">
                          <div className="text-4xl font-black text-taxi-black">2013</div>
                          <div className="text-sm font-bold text-taxi-black">Founded</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Current status */}
                    <div className="mt-8">
                      <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                        <div className="w-3 h-3 bg-taxi-yellow rounded-full"></div>
                        <span className="text-white font-bold">Leading Service Provider</span>
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
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Target className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Purpose</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Mission & Vision</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">The driving force behind everything we do</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 gap-8 p-6 md:p-12">
            {/* Mission Card */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="text-taxi-yellow" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
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
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Eye className="text-taxi-yellow" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
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
                      <span className="text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Heart className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Principles</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">The foundation of everything we do and believe in</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl"></div>
          
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
              <div key={index} className="glass rounded-3xl p-6 border border-white/10 transition-transform duration-300 hover:-translate-y-2">
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-taxi-yellow" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">{value.desc}</p>
                  
                  <div className="space-y-2 text-left">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-taxi-yellow flex-shrink-0" size={14} />
                        <span className="text-sm text-gray-400">{feature}</span>
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">The dedicated professionals behind your trusted service</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass rounded-3xl p-8 border border-white/10 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-bold text-taxi-yellow">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-taxi-yellow font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="glass rounded-3xl p-10 md:p-16 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Taxi GO?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Setting the standard for excellence in transportation</p>
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
              <div key={index} className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <CheckCircle className="text-taxi-yellow mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 lg:py-36">
        <div className="relative">
          <div className="absolute inset-0 bg-white/[0.02] border border-taxi-yellow/10 rounded-3xl"></div>
          <div className="relative glass rounded-3xl p-12 md:p-20 text-center border border-white/10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Experience the Best Taxi Service?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us for their transportation needs</p>
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
