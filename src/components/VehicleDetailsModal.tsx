import React from 'react';
import { X, Users, Briefcase, Shield, Gauge, Check } from 'lucide-react';

interface VehicleCategory {
  category: string;
  image: string;
  vehicles: string[];
  price: string;
  features: string[];
}

interface VehicleDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: VehicleCategory | null;
}

const VehicleDetailsModal = ({ isOpen, onClose, category }: VehicleDetailsModalProps) => {
  if (!isOpen || !category) return null;

  // Additional details mapping based on category
  const detailsMap: Record<string, { seats: number; bags: number; speed: string; desc: string }> = {
    Economy: {
      seats: 4,
      bags: 2,
      speed: '120 km/h max',
      desc: 'Ideal for small groups, solo business travelers, or quick city runs. Compact, fuel-efficient, and easy to navigate through city streets.'
    },
    Sedan: {
      seats: 4,
      bags: 3,
      speed: '140 km/h max',
      desc: 'Premium sedans offering extra legroom, standard trunk capacity, and silent suspension. Best for airport pick-and-drops and elegant business trips.'
    },
    SUV: {
      seats: 7,
      bags: 5,
      speed: '140 km/h max',
      desc: 'Heavy-duty SUVs designed for family sightseeing tours and outstation highway travel. High ground clearance and premium comfort for long-distance roads.'
    },
    Luxury: {
      seats: 4,
      bags: 3,
      speed: '180 km/h max',
      desc: 'Elite luxury cruisers for high-profile client operations, weddings, or bespoke tourist journeys. Inclusions feature refreshments, custom climate control, and certified expert drivers.'
    }
  };

  const info = detailsMap[category.category] || { seats: 4, bags: 2, speed: '120 km/h max', desc: '' };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-500 animate-slide-in-up flex flex-col md:flex-row">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-20"
        >
          <X size={18} />
        </button>

        {/* Vehicle Image section */}
        <div className="md:w-1/2 relative min-h-[250px] md:min-h-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <img 
            src={category.image} 
            alt={category.category} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950/90 md:to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="bg-taxi-yellow text-taxi-black text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-lg">
              {category.category} Class
            </span>
          </div>
        </div>

        {/* Details section */}
        <div className="p-8 md:p-12 md:w-1/2 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900">{category.category} Fleet Details</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-1">Available Cabs: {category.vehicles.join(', ')}</p>
            </div>

            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              {info.desc}
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-6">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                  <Users size={18} />
                </div>
                <div className="text-sm font-black text-slate-900">{info.seats} Seats</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Max Capacity</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                  <Briefcase size={18} />
                </div>
                <div className="text-sm font-black text-slate-900">{info.bags} Luggage</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Bag Limit</div>
              </div>

              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                  <Gauge size={18} />
                </div>
                <div className="text-sm font-black text-slate-900">AC/GPS</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Equipped</div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Included in pricing</h4>
              <div className="grid grid-cols-2 gap-2">
                {['Verified Driver', 'Fuel charges', 'Clean Cabin', 'No surge fee'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-600 font-bold text-xs">
                    <Check size={14} className="text-emerald-500" strokeWidth={3} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 pt-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Rate</span>
              <span className="text-3xl font-black text-taxi-yellow">{category.price}</span>
            </div>
            <button 
              onClick={onClose}
              className="btn-premium flex-1 py-4 text-xs font-black"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
