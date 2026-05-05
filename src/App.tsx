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
        
        {/* Subtle Background Pattern / Gradient */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-transparent via-[#0a0a0a] to-[#111111]"></div>
        
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
