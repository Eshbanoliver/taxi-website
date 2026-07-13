import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';

// Eagerly load Home (critical first paint)
import Home from './pages/Home';

// Lazy-load all other pages — downloaded only when user navigates there
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

// Minimal loading fallback — avoids layout shift
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-taxi-yellow border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden relative text-slate-900 font-sans">
        <CustomCursor />
        
        {/* Vibrant Background Orbs / Mesh Gradient */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-taxi-yellow/10 blur-[100px] sm:blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-slate-200/50 blur-[100px] sm:blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Header - Fixed Position */}
        <Header onOpenBooking={openBooking} />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home onOpenBooking={openBooking} />} />
              <Route path="/about" element={<About onOpenBooking={openBooking} />} />
              <Route path="/services" element={<Services onOpenBooking={openBooking} />} />
              <Route path="/faq" element={<FAQ onOpenBooking={openBooking} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Elements */}
        <FloatingButtons />

        {/* Booking Dialog */}
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}

export default App;
