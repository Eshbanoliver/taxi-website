import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, Check, Car } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicleClass: 'Sedan'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      vehicleClass: 'Sedan'
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={resetForm}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-500 animate-slide-in-up">
        {/* Close Button */}
        <button 
          onClick={resetForm}
          className="absolute top-6 right-6 p-3 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors z-20"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="p-12 md:p-20 text-center space-y-8 animate-fadeIn">
            <div className="w-24 h-24 mx-auto bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Check size={48} strokeWidth={3} />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Booking Request <br /><span className="text-emerald-500 font-serif italic">Received!</span></h2>
              <p className="text-slate-500 font-medium max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our team will contact you at <span className="font-bold text-slate-900">{formData.phone}</span> within 10 minutes to confirm your ride.
              </p>
            </div>
            <div className="pt-4">
              <button 
                onClick={resetForm}
                className="btn-premium py-5 px-12 mx-auto"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-taxi-yellow/10 border border-taxi-yellow/30 px-4 py-1.5 rounded-full text-taxi-black font-black text-[10px] tracking-widest uppercase">
                Chauffeur Drive
              </div>
              <h2 className="text-4xl font-black text-slate-900 leading-none">
                Book Your <span className="font-serif italic text-taxi-yellow">Journey</span>
              </h2>
              <p className="text-slate-500 font-medium text-sm">24/7 Premium taxi and outstation cabs in Udaipur.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-taxi-yellow transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Number"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-taxi-yellow transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Pickup Location */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Pickup Location</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="Where should we pick you up?"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-taxi-yellow transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Destination</label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      name="dropoff"
                      value={formData.dropoff}
                      onChange={handleChange}
                      placeholder="Where are you going?"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-taxi-yellow transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Pickup Date</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-taxi-yellow transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2 relative">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Pickup Time</label>
                  <div className="relative">
                    <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-taxi-yellow transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Class */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Select Vehicle Class</label>
                <div className="relative">
                  <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select 
                    name="vehicleClass"
                    value={formData.vehicleClass}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4.5 pl-12 pr-4 text-slate-900 appearance-none focus:ring-2 focus:ring-taxi-yellow transition-all cursor-pointer"
                    disabled={isLoading}
                  >
                    <option value="Economy">Economy Class (Swift, WagonR)</option>
                    <option value="Sedan">Sedan Class (Dzire, City)</option>
                    <option value="SUV">SUV Class (Innova, XUV500)</option>
                    <option value="Luxury">Luxury Class (BMW, Mercedes)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-premium w-full py-5 text-base flex justify-center items-center gap-3 relative overflow-hidden"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Booking...</span>
                  </>
                ) : (
                  <>
                    <Check size={20} strokeWidth={2.5} />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
