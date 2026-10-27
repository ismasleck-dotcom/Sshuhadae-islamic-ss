import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Users, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface CampusVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVisitModal: React.FC<CampusVisitModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '09:30 AM Morning Tour',
    attendees: '2 Persons (Parent & Student)',
    primaryInterest: 'UNEB Science Laboratories & Boarding Hostels'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-emerald-500 shadow-sm shrink-0 flex items-center justify-center">
              <img
                src="/assets/aistudio/logo_fd3abfe0.png"
                alt="Shuhadae Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                P.O. Box 1472, Mbarara · Affiliated to UMSC Mbarara
              </span>
              <h3 className="text-xl font-bold font-serif-brand">
                Schedule an In-Person Campus Tour
              </h3>
            </div>
          </div>
          <button
            onClick={resetModal}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-stone-600 leading-relaxed">
                Tours of our Mbarara campus are led by senior school administrators and Sheikhs. You will inspect 
                day and boarding hostels, science laboratories, and Masjid As-Shuhadae.
              </p>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Parent / Visitor Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hajjat Aisha & Musa Byamukama"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Phone Number (Uganda) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07XX XXX XXX or +256..."
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="visitor@example.com"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Time Slot (EAT) *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="09:30 AM Morning Tour">09:30 AM (Classroom Sessions)</option>
                    <option value="11:30 AM Midday Tour">11:30 AM (Science Labs & Library)</option>
                    <option value="02:30 PM Afternoon Tour">02:30 PM (Athletics & Hostels)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.primaryInterest}
                  onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                >
                  <option value="UNEB Science Laboratories & Boarding Hostels">UNEB Science Laboratories & Boarding Hostels</option>
                  <option value="Masjid As-Shuhadae & Tahfeez Quran Track">Masjid As-Shuhadae & Tahfeez Quran Track</option>
                  <option value="Day Scholar Lunch & Transport Facilities">Day Scholar Lunch & Transport Facilities</option>
                  <option value="A-Level Combinations (BCM, PCM, PCB, HEG)">A-Level Combinations (BCM, PCM, PCB, HEG)</option>
                  <option value="General Campus Tour & Headteacher Consultation">General Campus Tour & Headteacher Consultation</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Confirm Tour Booking
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-serif-brand text-stone-900">
                Tour Appointment Confirmed!
              </h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                We look forward to welcoming you, <strong>{formData.name}</strong>, to our Mbarara campus on <strong>{formData.date || 'your selected date'}</strong> at <strong>{formData.timeSlot}</strong>.
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs text-stone-600 max-w-xs mx-auto text-left space-y-1">
                <div><span className="text-stone-500">Campus Pass: </span><span className="font-mono font-bold text-emerald-950">TOUR-MBR-2026</span></div>
                <div><span className="text-stone-500">Contact: </span><span className="font-mono text-stone-800 font-semibold text-[11px]">0751933301 / 0700173448</span></div>
                <div className="text-[11px] text-stone-500">Shuhadae Islamic Secondary School, P.O. Box 1472, Mbarara.</div>
              </div>
              <button
                onClick={resetModal}
                className="px-5 py-2 bg-emerald-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
