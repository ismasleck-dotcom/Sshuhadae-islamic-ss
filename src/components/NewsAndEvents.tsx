import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Bell, ChevronRight, Check } from 'lucide-react';
import { UPCOMING_EVENTS, EventItem } from '../data/schoolData';

export const NewsAndEvents: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'islamic' | 'sports' | 'admissions'>('all');
  const [savedEvents, setSavedEvents] = useState<string[]>([]);

  const filteredEvents = filter === 'all'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(e => e.category === filter);

  const toggleSaveEvent = (id: string) => {
    if (savedEvents.includes(id)) {
      setSavedEvents(savedEvents.filter(e => e !== id));
    } else {
      setSavedEvents([...savedEvents, id]);
    }
  };

  const academicCalendar = [
    { term: "Term I (Foundation & Entrance)", dates: "February 2 - May 1, 2026", note: "Senior 1 Orientation · Eid-ul-Fitr Recess · Term I Visitation Day" },
    { term: "Term II (Academics & Sports Gala)", dates: "May 25 - August 21, 2026", note: "UMEA National Solidarity Games · Western Uganda Science Fair" },
    { term: "Term III (UNEB National Sittings)", dates: "September 14 - December 4, 2026", note: "UNEB UCE & UACE National Examinations · Graduation & Du'a" },
  ];

  return (
    <section id="news" className="py-18 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-900 mb-2">
              Official Bulletin & Mbarara Campus Notices
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-stone-900">
              Notices, Competitions & Ugandan Academic Calendar
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md leading-relaxed">
            Stay informed on S.1 and S.5 entrance assessments, UNEB timetables, Quran recitation galas, and MoES school term schedules.
          </p>
        </div>

        {/* Filter Controls (Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {(['all', 'academic', 'islamic', 'admissions', 'sports'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer capitalize ${
                filter === cat
                  ? 'bg-emerald-900 text-white shadow-2xs font-semibold'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {cat === 'all' ? 'All Notices' : cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredEvents.map((event) => {
            const isSaved = savedEvents.includes(event.id);
            return (
              <div
                key={event.id}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                    <span className="font-semibold uppercase tracking-wider text-emerald-900">
                      {event.category}
                    </span>
                    {event.urgent && (
                      <span className="text-white font-bold bg-black px-2 py-0.5 rounded border border-stone-800 text-[11px] tracking-wide uppercase">
                        Urgent Notice
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-serif-brand text-stone-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-stone-100 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span className="font-medium text-stone-800">{event.date}</span>
                    <span className="text-stone-400">·</span>
                    <span className="font-mono text-stone-600">{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>{event.venue}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => toggleSaveEvent(event.id)}
                      className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isSaved ? 'text-emerald-800 font-bold' : 'text-stone-500 hover:text-stone-900'
                      }`}
                    >
                      {isSaved ? <Check className="w-3.5 h-3.5" /> : <Bell className="w-3.5 h-3.5" />}
                      <span>{isSaved ? "Saved to Calendar" : "Set Calendar Reminder"}</span>
                    </button>
                    <span className="text-[11px] text-stone-400 font-mono">Notice ID: {event.id}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Term Calendar 2026/2027 Strip */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-semibold text-emerald-900 tracking-wider uppercase">
              Ministry of Education and Sports (MoES) Almanac
            </span>
            <h3 className="text-xl font-bold font-serif-brand text-stone-900 mt-1">
              Official 2026/2027 Uganda Secondary Academic Calendar
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicCalendar.map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-5 rounded-xl border border-stone-200/90 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-900">0{idx + 1} / THREE</span>
                <h4 className="text-sm font-bold text-stone-900">{item.term}</h4>
                <div className="text-xs font-mono font-semibold text-stone-800 py-1 border-y border-stone-200/80">
                  {item.dates}
                </div>
                <p className="text-xs text-stone-500 leading-snug">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
