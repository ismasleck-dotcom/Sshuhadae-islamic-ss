import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Users, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import { FACILITIES, Facility, SCHOOL_INFO } from '../data/schoolData';

export const CampusFacilities: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-18 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-900 mb-2">
            <span>Modern Infrastructure · Mbarara Hilltop Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black [text-wrap:balance]">
            World-Class Campus Facilities in Western Uganda
          </h2>
          <p className="text-base text-stone-700 mt-3 leading-relaxed">
            Nestled on the serene heights of Mbarara City, our 28-acre educational complex harmoniously combines 
            classical Islamic architecture with UNEB-compliant science laboratories, athletic grounds, 
            an extensive digital library, and supervised residential hostels.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-2xl border-2 border-stone-200 overflow-hidden shadow-2xs hover:border-black transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative h-64 w-full overflow-hidden bg-stone-900">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/90 px-2.5 py-1 rounded border border-emerald-600">
                      {facility.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-bold text-emerald-300">Capacity: {facility.capacity}</span>
                    <button
                      onClick={() => setSelectedFacility(facility)}
                      className="inline-flex items-center gap-1 text-[11px] bg-white text-black font-bold px-2.5 py-1 rounded-md transition-colors cursor-pointer hover:bg-emerald-100"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Expand View</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif-brand text-black mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-stone-200">
                    {facility.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-black">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedFacility(facility)}
                  className="w-full py-2.5 text-xs font-bold text-black bg-stone-100 hover:bg-black hover:text-white border border-black rounded-lg transition-colors cursor-pointer text-center"
                >
                  Explore Facility Specifications
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Boarding & Welfare Guarantee Strip */}
        <div className="mt-12 bg-white border-2 border-black rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shrink-0 border border-emerald-600">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-black">
                Secure Gender-Separated Boarding Hostels in Mbarara
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                24/7 security wardens, on-campus health clinic with registered clinical officers, and full-time spiritual matrons.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-black whitespace-nowrap shrink-0">
            <span className="font-bold text-emerald-900">Registered Medical Clinic</span>
            <span>·</span>
            <span className="font-bold text-emerald-900">Purified Gravity Flow Water</span>
            <span>·</span>
            <span className="font-bold text-emerald-900">Backup Solar & Generator</span>
          </div>
        </div>

        {/* Modal View for Facility */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-black">
              <div className="relative h-72 w-full bg-black">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-black/90 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-emerald-900 transition-colors cursor-pointer border border-emerald-500"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    {selectedFacility.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-black">
                    Capacity: {selectedFacility.capacity}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif-brand text-black">
                  {selectedFacility.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-black uppercase tracking-wide block mb-2">
                    Key Features & Safety Standards:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-black">
                    {selectedFacility.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                      <span>Regular health & safety inspections</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex justify-end">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-black hover:bg-stone-900 rounded-lg cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
