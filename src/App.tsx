import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 flex flex-col w-full overflow-x-hidden relative">
        {/* Animated Background Particles */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle w-2 h-2 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Dynamic Background Gradients */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 animate-gradient-shift"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-taxi-yellow/10 to-yellow-400/10 rounded-full blur-2xl animate-rotate-glow"></div>
        </div>
        
        {/* Header - Fixed Position */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full relative">
          {/* Content Container with animations */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Elements */}
        <FloatingButtons />
        
        {/* Animated Corner Decorations */}
        <div className="fixed top-4 left-4 w-8 h-8 bg-gradient-to-r from-taxi-yellow to-yellow-400 rounded-full animate-glow opacity-50"></div>
        <div className="fixed top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-glow opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="fixed bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-glow opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="fixed bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-glow opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>
    </Router>
  );
}

export default App;
