import React, { useState } from 'react';
import { Clock, Sun, Moon, Sparkles, BookOpen, Coffee, Dumbbell, BookMarked, CheckCircle2, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const TimetablePrayerWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prayer' | 'day' | 'boarding'>('prayer');

  const dayScholarSchedule = [
    { time: "06:45 - 07:15 EAT", title: "Campus Arrival & Morning Inspection", icon: Clock, note: "Punctuality check at Mbarara campus gates" },
    { time: "07:15 - 07:45 EAT", title: "Tahfeez Muraja'ah & Morning Assembly", icon: BookOpen, note: "Holy Quran recitation, Dua, and Uganda National Anthem" },
    { time: "07:45 - 10:15 EAT", title: "Academic Block 1: STEM & Science Practicals", icon: BookMarked, note: "UNEB double laboratory sessions & mathematics" },
    { time: "10:15 - 10:45 EAT", title: "Mid-Morning Nutrition Break", icon: Coffee, note: "Wholesome dining hall African tea & escort" },
    { time: "10:45 - 12:45 EAT", title: "Academic Block 2: Languages & Humanities", icon: BookOpen, note: "Arabic syntax, English literature, IRE & Economics" },
    { time: "12:45 - 01:45 EAT", title: "Salat al-Dhuhr & Halal Hot Lunch", icon: Sun, note: "Congregational prayer in Masjid As-Shuhadae" },
    { time: "01:45 - 04:00 EAT", title: "Academic Block 3: ICT Labs & Islamic Sciences", icon: BookMarked, note: "Computer studies, Fiqh & Hadith studies" },
    { time: "04:00 - 05:00 EAT", title: "Salat al-Asr & Co-Curricular / Athletics", icon: Dumbbell, note: "Football, martial arts, debate society, archery" },
    { time: "05:00 - 05:30 EAT", title: "Day Scholars Departure / Mbarara Shuttles", icon: Clock, note: "Coaches departure to Kakoba, Katete & Mbarara City" },
  ];

  const boardingSchedule = [
    { time: "04:30 - 05:15 EAT", title: "Wakeup & Tahajjud Reflection", icon: Moon, note: "Personal devotion & wudu preparation" },
    { time: "05:15 - 06:15 EAT", title: "Salat al-Fajr & Dawn Tahfeez Circle", icon: Sun, note: "New lesson memorization (Hifdh Sabaq)" },
    { time: "06:15 - 07:15 EAT", title: "Hostel Inspection & Healthy Breakfast", icon: Coffee, note: "Dormitory tidiness & dining hall meal" },
    { time: "07:45 - 04:00 EAT", title: "Full UNEB Secondary Academic Day", icon: BookMarked, note: "Joint classes with day scholars" },
    { time: "04:00 - 05:30 EAT", title: "Salat al-Asr, Athletics & Clubs", icon: Dumbbell, note: "Physical conditioning, robotics club, speech" },
    { time: "05:30 - 06:30 EAT", title: "Ablution, Relaxation & Dinner", icon: Coffee, note: "Nutritious balanced evening meal" },
    { time: "06:46 - 07:45 EAT", title: "Salat al-Maghrib & Halaqah Circle", icon: BookOpen, note: "Hadith reading, Sirah reflection, Tajweed drill" },
    { time: "07:54 - 09:45 EAT", title: "Salat al-Isha & Supervised Evening Prep", icon: Moon, note: "Quiet academic study with resident duty masters" },
    { time: "09:45 - 10:15 EAT", title: "Night Adhkar & Lights Out", icon: Moon, note: "Restful sleep in secure ventilated hostels" },
  ];

  return (
    <section id="prayer-routine" className="py-16 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-emerald-900 mb-2">
              Holistic Islamic Tarbiyah · Mbarara Campus Routine
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-brand text-black">
              Campus Daily Routine & Prayer Cadence
            </h2>
          </div>
          <p className="text-sm text-stone-700 max-w-md leading-relaxed">
            Our daily cadence anchors intellect to spiritual devotion. Every scholar in Mbarara cultivates 
            time discipline, communal responsibility, and academic vigor.
          </p>
        </div>

        {/* Tab Controls (Green, Black & White) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-xl max-w-xl mb-8 border border-black">
          <button
            onClick={() => setActiveTab('prayer')}
            className={`flex-1 py-2 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 text-center ${
              activeTab === 'prayer'
                ? 'bg-black text-white shadow-xs'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            Masjid Prayer Times
          </button>
          <button
            onClick={() => setActiveTab('day')}
            className={`flex-1 py-2 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 text-center ${
              activeTab === 'day'
                ? 'bg-black text-white shadow-xs'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            Day Scholars Schedule
          </button>
          <button
            onClick={() => setActiveTab('boarding')}
            className={`flex-1 py-2 px-4 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 text-center ${
              activeTab === 'boarding'
                ? 'bg-black text-white shadow-xs'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            Boarding 24-Hr Routine
          </button>
        </div>

        {/* Tab 1: Prayer Times */}
        {activeTab === 'prayer' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {SCHOOL_INFO.prayerTimes.map((prayer, idx) => (
                <div
                  key={prayer.name}
                  className="bg-white border-2 border-stone-200 rounded-xl p-5 hover:border-emerald-800 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-2 font-mono">
                    <span className="font-bold text-black">WAQT 0{idx + 1}</span>
                    <span className="font-arabic text-sm text-emerald-900 font-bold">
                      {idx === 0 ? "الفجر" : idx === 1 ? "الظهر" : idx === 2 ? "العصر" : idx === 3 ? "المغرب" : "العشاء"}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">{prayer.name}</h3>
                  <div className="my-3 py-2 border-y border-stone-200 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-500">Adhan</span>
                      <span className="font-semibold text-black font-mono tabular-nums">{prayer.azan}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-emerald-900 font-bold">Iqamah</span>
                      <span className="font-bold text-black font-mono tabular-nums">{prayer.iqamah}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">{prayer.activity}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-900 text-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs border border-black shadow-sm">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>
                  <strong>Friday Jumu'ah Notice:</strong> Khutbah begins at 12:45 PM followed by congregational prayer in Masjid As-Shuhadae, Mbarara. The Muslim community of Kakoba and Nyamitanga is warmly welcome.
                </span>
              </div>
              <span className="text-emerald-200 font-mono text-[11px] whitespace-nowrap font-medium">
                {SCHOOL_INFO.coordinates}
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Day Scholars Schedule */}
        {activeTab === 'day' && (
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 sm:p-8">
            <div className="max-w-3xl mb-6">
              <h3 className="text-lg font-bold text-black mb-1 font-serif-brand">
                Standard School Day for Day Scholars (Mbarara)
              </h3>
              <p className="text-xs text-stone-600">
                Punctuality is strictly maintained. Dedicated school vans service students across Mbarara City center, 
                Ruharo, Nyamitanga, Katete, Biharwe, and Kamukuzi.
              </p>
            </div>

            <div className="divide-y divide-stone-200">
              {dayScholarSchedule.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50 px-3 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black">{item.title}</div>
                        <div className="text-xs text-stone-600">{item.note}</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold text-black sm:text-right tabular-nums bg-white px-2.5 py-1 rounded border border-black self-start sm:self-center">
                      {item.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Boarding Students Schedule */}
        {activeTab === 'boarding' && (
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 sm:p-8">
            <div className="max-w-3xl mb-6">
              <h3 className="text-lg font-bold text-black mb-1 font-serif-brand">
                24-Hour Residential Boarding Routine (Mbarara Hostels)
              </h3>
              <p className="text-xs text-stone-600">
                Separate gated boarding houses for boys and girls on the Mbarara campus with full-time resident Matrons, 
                Patrons, registered clinical officers, and qualified Sheikhs.
              </p>
            </div>

            <div className="divide-y divide-stone-200">
              {boardingSchedule.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50 px-3 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black">{item.title}</div>
                        <div className="text-xs text-stone-600">{item.note}</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold text-black sm:text-right tabular-nums bg-white px-2.5 py-1 rounded border border-black self-start sm:self-center">
                      {item.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
