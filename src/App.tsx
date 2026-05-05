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
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col w-full overflow-x-hidden relative text-white font-sans">
        
        {/* Vibrant Background Orbs / Mesh Gradient */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/30 blur-[100px] sm:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/30 blur-[100px] sm:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] left-[50%] w-[30vw] h-[30vw] rounded-full bg-emerald-500/20 blur-[100px] sm:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="absolute top-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-pink-600/20 blur-[100px] sm:blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Header - Fixed Position */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Elements */}
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
