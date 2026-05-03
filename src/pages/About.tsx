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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ height: '100vh' }}>
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 via-white/90 to-gray-50/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-taxi-yellow/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-taxi-yellow/25 rounded-full animate-pulse"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-taxi-yellow rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-yellow-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-lg px-6 py-3 rounded-full mb-8 group">
              <Car className="text-white animate-float" size={24} />
              <span className="text-white font-bold text-lg">Our Story</span>
            </div>
            
            {/* Main heading with animation */}
            <div className="relative mb-16">
              <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-12 inline-block">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-loose mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  <span className="block mb-4">About</span>
                  <span className="block text-yellow-600 animate-pulse font-black" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Taxi GO</span>
                </h1>
              </div>
              
              {/* Decorative underline */}
              <div className="relative mt-8">
                <div className="h-3 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
                <div className="absolute inset-0 h-3 bg-gradient-to-r from-transparent via-yellow-600 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Enhanced description */}
            <div className="bg-white/80 backdrop-blur-sm border-2 border-yellow-600/30 rounded-3xl p-12 mb-16 max-w-5xl mx-auto shadow-2xl">
              <p className="text-xl md:text-2xl text-gray-900 leading-loose font-bold" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>
                Discover our journey of excellence, from a small fleet to Udaipur's most trusted taxi service. 
                <span className="block text-yellow-600 font-black mt-6 text-xl">Driven by passion, committed to you.</span>
              </p>
            </div>
            
            {/* Stats preview */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { number: '10+', label: 'Years of Excellence', icon: Award },
                { number: '50K+', label: 'Happy Customers', icon: Users },
                { number: '100+', label: 'Professional Drivers', icon: Shield },
                { number: '24/7', label: 'Service Available', icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <stat.icon className="text-taxi-black" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-taxi-black mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#story" className="group relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
                <Star className="group-hover:animate-pulse" size={20} />
                <span>Our Journey</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a href="#team" className="group relative glass text-taxi-black font-bold py-4 px-8 rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3 border border-taxi-yellow/30">
                <Users className="group-hover:animate-pulse" size={20} />
                <span>Meet Our Team</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <MapPin className="text-taxi-yellow" size={20} />
                <span className="text-gray-700 font-medium">Udaipur Based</span>
              </div>
              <div className="w-px h-6 bg-taxi-yellow/30"></div>
              <div className="flex items-center space-x-2">
                <Shield className="text-taxi-yellow" size={20} />
                <span className="text-gray-700 font-medium">Fully Licensed</span>
              </div>
              <div className="w-px h-6 bg-taxi-yellow/30"></div>
              <div className="flex items-center space-x-2">
                <Star className="text-taxi-yellow" size={20} />
                <span className="text-gray-700 font-medium">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-taxi-yellow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-taxi-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-full mb-4">
            <Car className="text-white" size={16} />
            <span className="text-white font-semibold">Our Journey</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Our Story</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">From humble beginnings to becoming Udaipur's trusted transportation partner</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-teal-500/20 rounded-3xl"></div>
          
          <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-float opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse opacity-30"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-8">
                {/* Timeline item 1 */}
                <div className="group relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <span className="text-taxi-black font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-taxi-black mb-2 group-hover:text-gray-800 transition-colors duration-300">The Beginning</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Founded in 2013, Taxi Services started as a small fleet of 5 cars with a simple mission: 
                        to provide safe, reliable, and affordable transportation in Udaipur.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 2 */}
                <div className="group relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-taxi-black mb-2 group-hover:text-gray-800 transition-colors duration-300">Growth & Expansion</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our journey has been driven by our commitment to customer satisfaction and our passion for 
                        excellence. We've continuously expanded our services, upgraded our fleet, and embraced technology.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline item 3 */}
                <div className="group relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-taxi-black mb-2 group-hover:text-gray-800 transition-colors duration-300">Today's Success</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Today, we're proud to be the preferred choice for locals and tourists alike, offering 
                        comprehensive transportation solutions with over 100 vehicles and dedicated professionals.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Stats highlight */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-taxi-black group-hover:text-taxi-yellow transition-colors duration-300">100+</div>
                    <div className="text-sm text-gray-600">Vehicles</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-taxi-black group-hover:text-taxi-yellow transition-colors duration-300">50K+</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-taxi-black group-hover:text-taxi-yellow transition-colors duration-300">10+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>
              
              {/* Visual Timeline */}
              <div className="relative">
                <div className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Year display */}
                    <div className="relative mb-8">
                      <div className="w-32 h-32 bg-gradient-to-br from-taxi-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                        <div className="text-center">
                          <div className="text-4xl font-black text-taxi-black">2013</div>
                          <div className="text-sm font-bold text-taxi-black">Founded</div>
                        </div>
                      </div>
                      {/* Ring animation */}
                      <div className="absolute inset-0 rounded-full border-4 border-taxi-yellow opacity-30 animate-ping"></div>
                    </div>
                    
                    {/* Journey visualization */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-taxi-yellow rounded-full animate-pulse"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-taxi-yellow to-yellow-400"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      </div>
                    </div>
                    
                    {/* Current status */}
                    <div className="mt-8">
                      <div className="inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 font-bold">Leading Service Provider</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-400/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Target className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Purpose</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Mission & Vision</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">The driving force behind everything we do</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 md:p-12 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating decoration */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110">
                      <Target className="text-white" size={48} />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-3xl border-4 border-blue-500 opacity-30 animate-ping"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-taxi-black mb-6 group-hover:text-blue-600 transition-colors duration-300">Our Mission</h3>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To provide safe, reliable, and affordable transportation services that exceed customer expectations 
                    and contribute to the community's mobility needs while maintaining the highest standards of professionalism.
                  </p>
                  
                  {/* Key points */}
                  <div className="space-y-3 text-left">
                    {[
                      'Safe & Reliable Service',
                      'Affordable Pricing',
                      'Community Contribution',
                      'Professional Standards'
                    ].map((point, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="text-white" size={16} />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 md:p-12 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating decoration */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110">
                      <Eye className="text-white" size={48} />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-3xl border-4 border-purple-500 opacity-30 animate-ping"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-taxi-black mb-6 group-hover:text-purple-600 transition-colors duration-300">Our Vision</h3>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To become the most trusted and preferred taxi service provider in Rajasthan, known for our 
                    commitment to excellence, customer satisfaction, and innovative transportation solutions.
                  </p>
                  
                  {/* Key points */}
                  <div className="space-y-3 text-left">
                    {[
                      'Trusted Provider',
                      'Customer Satisfaction',
                      'Innovation Focus',
                      'Rajasthan Leadership'
                    ].map((point, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="text-white" size={16} />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 px-4 py-2 rounded-full mb-4">
            <Heart className="text-taxi-yellow" size={16} />
            <span className="text-taxi-yellow font-semibold">Our Principles</span>
          </div>
          <h2 className="text-5xl font-bold text-taxi-black mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">The foundation of everything we do and believe in</p>
        </div>
        
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20 rounded-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Safety First', 
                desc: 'Your safety is our top priority with comprehensive measures and protocols', 
                icon: Shield,
                color: 'from-red-500 to-red-600',
                bgColor: 'bg-red-500/10',
                features: ['GPS Tracking', 'Verified Drivers', 'Insurance Coverage', '24/7 Support']
              },
              { 
                title: 'Punctuality', 
                desc: 'Always on time, every time with our commitment to reliability', 
                icon: Clock,
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-500/10',
                features: ['Real-time Tracking', 'ETA Updates', 'Professional Drivers', 'Optimized Routes']
              },
              { 
                title: 'Customer Focus', 
                desc: 'Your satisfaction drives us to deliver exceptional service', 
                icon: Users,
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-500/10',
                features: ['24/7 Support', 'Feedback System', 'Personalized Service', 'Loyalty Rewards']
              },
              { 
                title: 'Integrity', 
                desc: 'Honest and transparent service in all our dealings', 
                icon: Heart,
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-500/10',
                features: ['Transparent Pricing', 'No Hidden Fees', 'Honest Communication', 'Ethical Practices']
              }
            ].map((value, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative glass rounded-3xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Floating decoration */}
                  <div className={`absolute top-4 right-4 w-8 h-8 ${value.bgColor} rounded-full animate-pulse`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <value.icon className="text-white" size={40} />
                      </div>
                      {/* Ring animation */}
                      <div className={`absolute inset-0 rounded-2xl border-2 ${value.color.replace('from-', 'border-').split(' ')[0]} opacity-30 animate-ping`}></div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-taxi-black mb-3 group-hover:text-gray-800 transition-colors duration-300">{value.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-4">{value.desc}</p>
                    
                    {/* Features list */}
                    <div className="space-y-2 text-left">
                      {value.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 group/item">
                          <div className={`w-4 h-4 ${value.bgColor} rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                            <CheckCircle className="text-white" size={12} />
                          </div>
                          <span className="text-sm text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${value.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Values highlight */}
        <div className="mt-20 text-center">
          <div className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-taxi-yellow/10 to-yellow-100/20"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-taxi-yellow/20 rounded-full animate-float"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-yellow-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-taxi-yellow/20 backdrop-blur-lg px-4 py-2 rounded-full mb-6 group">
                <Heart className="text-taxi-yellow animate-pulse" size={16} />
                <span className="text-taxi-yellow font-bold">Our Promise</span>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-taxi-black mb-6 group-hover:text-gray-800 transition-colors duration-300">Our Commitment</h3>
              
              {/* Description */}
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
                These core values aren't just words on a page – they're the principles that guide every decision we make, 
                every interaction we have, and every service we provide to our valued customers.
              </p>
              
              {/* Trust indicators */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="group relative">
                  <div className="relative glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Shield className="text-white" size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-taxi-black mb-2 group-hover:text-green-600 transition-colors duration-300">Certified Safe</h4>
                      <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="relative glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Award className="text-white" size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-taxi-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">Award Winning</h4>
                      <p className="text-gray-600">Recognized for excellence in service</p>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="relative glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Star className="text-white" size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-taxi-black mb-2 group-hover:text-purple-600 transition-colors duration-300">Top Rated</h4>
                      <p className="text-gray-600">4.9/5 stars from 50,000+ customers</p>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <a href="#team" className="relative bg-gradient-to-r from-taxi-yellow to-yellow-400 text-taxi-black font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
                  <Users className="group-hover:animate-pulse" size={20} />
                  <span>Meet Our Team</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>
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
