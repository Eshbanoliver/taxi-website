import React from 'react';
import { Users, Award, Clock, CheckCircle, Target, Eye, Heart, Shield } from 'lucide-react';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-yellow-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-taxi-black mb-6">About Us</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn more about our journey, mission, and the team behind Udaipur's most trusted taxi service
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-taxi-black mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2013, Taxi Services started as a small fleet of 5 cars with a simple mission: 
                to provide safe, reliable, and affordable transportation in Udaipur. Today, we've grown into 
                the city's leading taxi service with over 100 vehicles and a team of dedicated professionals.
              </p>
              <p className="text-gray-700 mb-6">
                Our journey has been driven by our commitment to customer satisfaction and our passion for 
                excellence. We've continuously expanded our services, upgraded our fleet, and embraced technology 
                to better serve our customers.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be the preferred choice for locals and tourists alike, offering 
                comprehensive transportation solutions that meet every need and budget.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-taxi-yellow/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-taxi-yellow mb-2">2013</div>
                  <div className="text-xl text-taxi-black">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 text-center">
            <Target className="text-taxi-yellow mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-taxi-black mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide safe, reliable, and affordable transportation services that exceed customer expectations 
              and contribute to the community's mobility needs while maintaining the highest standards of professionalism.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 text-center">
            <Eye className="text-taxi-yellow mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-taxi-black mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become the most trusted and preferred taxi service provider in Rajasthan, known for our 
              commitment to excellence, customer satisfaction, and innovative transportation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-700">The principles that guide everything we do</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Safety First', desc: 'Your safety is our top priority', icon: Shield },
            { title: 'Punctuality', desc: 'Always on time, every time', icon: Clock },
            { title: 'Customer Focus', desc: 'Your satisfaction drives us', icon: Users },
            { title: 'Integrity', desc: 'Honest and transparent service', icon: Heart },
          ].map((value, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-taxi-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Our Achievements</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-taxi-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-taxi-black" size={32} />
              </div>
              <div className="text-3xl font-bold text-taxi-black mb-2">{achievement.number}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-700">The dedicated professionals behind your trusted service</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-taxi-yellow/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-3xl font-bold text-taxi-yellow">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-taxi-black mb-1">{member.name}</h3>
              <p className="text-taxi-yellow font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-taxi-black mb-4">Why Choose Taxi Services?</h2>
            <p className="text-xl text-gray-700">Setting the standard for excellence in transportation</p>
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
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-taxi-yellow mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-taxi-yellow to-yellow-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-taxi-black mb-4">Ready to Experience the Best Taxi Service?</h2>
          <p className="text-xl text-gray-800 mb-8">Join thousands of satisfied customers who trust us for their transportation needs</p>
          <button className="bg-taxi-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
            Book Your Ride Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
