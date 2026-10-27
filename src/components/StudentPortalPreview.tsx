import React, { useState } from 'react';
import { Award, BookOpen, Calendar, CheckCircle2, Clock, FileText, Search, UserCheck, ShieldCheck, Printer } from 'lucide-react';
import { SAMPLE_STUDENT_PORTAL_DATA } from '../data/schoolData';

export const StudentPortalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grades' | 'tahfeedh' | 'schedule' | 'fees'>('grades');
  const [isPrinting, setIsPrinting] = useState(false);

  const student = SAMPLE_STUDENT_PORTAL_DATA;

  const handlePrintReport = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  return (
    <section id="portal" className="py-18 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-emerald-900 mb-2">
              Integrated School Management System (SMS) · Mbarara Campus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-brand text-black">
              Parent & Student Digital Portal
            </h2>
          </div>
          <p className="text-sm text-stone-700 max-w-md leading-relaxed">
            Parents across Uganda and abroad track continuous assessment scores, UNEB mock results, 
            Tahfeez memorization milestones, and fees payment receipts in real time.
          </p>
        </div>

        {/* Portal Dashboard Mockup Container (Green, Black, and White) */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-md overflow-hidden">
          {/* Top Bar of Student Portal */}
          <div className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-900">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-0.5 flex items-center justify-center border-2 border-emerald-500 overflow-hidden shrink-0 shadow-xs">
                <img
                  src="/assets/aistudio/logo_fd3abfe0.png"
                  alt="Shuhadae Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>{student.studentName}</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono border border-emerald-700">
                    {student.unebIndex}
                  </span>
                </div>
                <div className="text-xs text-stone-300">
                  {student.form} · {student.currentTerm} · {student.regNumber}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-700">
                <span className="text-stone-300">Standing: </span>
                <span className="font-mono font-bold text-emerald-400 tabular-nums">{student.aggregates}</span>
              </div>
              <div className="bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-700">
                <span className="text-stone-300">Class Rank: </span>
                <span className="font-semibold text-white">{student.rank}</span>
              </div>
              <button
                onClick={handlePrintReport}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg transition-colors cursor-pointer text-xs font-bold border border-emerald-600"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isPrinting ? "Opening Print..." : "Print Term Report"}</span>
              </button>
            </div>
          </div>

          {/* Portal Navigation Tabs */}
          <div className="bg-stone-100 border-b border-black px-6 flex gap-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('grades')}
              className={`py-3.5 text-xs font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === 'grades'
                  ? 'border-black text-black'
                  : 'border-transparent text-stone-600 hover:text-black'
              }`}
            >
              Academic Termly Report (UNEB Grades)
            </button>
            <button
              onClick={() => setActiveTab('tahfeedh')}
              className={`py-3.5 text-xs font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === 'tahfeedh'
                  ? 'border-black text-black'
                  : 'border-transparent text-stone-600 hover:text-black'
              }`}
            >
              Tahfeez-ul-Qur'an Tracker (22/30 Juz')
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`py-3.5 text-xs font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === 'schedule'
                  ? 'border-black text-black'
                  : 'border-transparent text-stone-600 hover:text-black'
              }`}
            >
              Attendance & Mock Examinations
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`py-3.5 text-xs font-bold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeTab === 'fees'
                  ? 'border-black text-black'
                  : 'border-transparent text-stone-600 hover:text-black'
              }`}
            >
              SchoolPay & Fees Ledger (UGX)
            </button>
          </div>

          {/* Tab 1: Academic Report Card */}
          {activeTab === 'grades' && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Summary row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border-2 border-stone-200">
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wide block">
                    Total Subjects
                  </span>
                  <span className="text-xl font-bold text-black font-mono tabular-nums">
                    {student.subjects.length} Subjects
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-stone-200">
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wide block">
                    Performance Level
                  </span>
                  <span className="text-xl font-bold text-emerald-900 font-mono tabular-nums">
                    Division 1 (Mumtaz)
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-stone-200">
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wide block">
                    Conduct & Tarbiyah
                  </span>
                  <span className="text-sm font-bold text-black">
                    {student.conduct}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-stone-200">
                  <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wide block">
                    Term Attendance
                  </span>
                  <span className="text-xl font-bold text-black font-mono tabular-nums">
                    {student.attendance}
                  </span>
                </div>
              </div>

              {/* Subject Breakdown Table with Tabular Numerals */}
              <div className="bg-white rounded-xl border-2 border-black overflow-hidden">
                <div className="px-5 py-3.5 bg-black text-white flex items-center justify-between text-xs font-bold">
                  <span>Subject / Course</span>
                  <div className="flex gap-8">
                    <span className="w-16 text-right">Score / 100</span>
                    <span className="w-16 text-center">UNEB Grade</span>
                    <span className="w-28 text-left hidden sm:inline">Subject Teacher</span>
                  </div>
                </div>

                <div className="divide-y divide-stone-200">
                  {student.subjects.map((sub, idx) => (
                    <div key={idx} className="px-5 py-3 flex items-center justify-between text-xs hover:bg-stone-50 transition-colors">
                      <span className="font-bold text-black">{sub.name}</span>
                      <div className="flex items-center gap-8">
                        <span className="w-16 text-right font-mono font-bold text-black tabular-nums">
                          {sub.score}%
                        </span>
                        <span className="w-16 text-center font-mono font-bold text-white bg-black py-0.5 rounded">
                          {sub.grade}
                        </span>
                        <span className="w-28 text-stone-600 hidden sm:inline truncate">
                          {sub.teacher}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Headmaster's Term Remark */}
              <div className="bg-emerald-900 text-white rounded-xl p-5 text-xs space-y-1 border border-black">
                <span className="font-bold text-emerald-300 uppercase tracking-wide text-[11px] block">
                  Headteacher's Assessment & Recommendation:
                </span>
                <p className="leading-relaxed text-white">
                  "Musa continues to be an outstanding role model in both academic sciences and Islamic character, 
                  reflecting our school motto: 'Islam is Religion and Administration'. His consistent Distinction 1 scores 
                  across mathematics, sciences, and IRE reflect exemplary discipline."
                </p>
                <div className="pt-2 text-[11px] text-emerald-200 font-serif">
                  — Hajj Dr. Harun S. Kasujja, Headteacher · Shuhadae Secondary School, Mbarara
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Tahfeez Progress */}
          {activeTab === 'tahfeedh' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div>
                    <h3 className="text-lg font-bold text-black font-serif-brand">
                      Tahfeez-ul-Qur'an Memorization Record
                    </h3>
                    <p className="text-xs text-stone-600">
                      Supervised daily in Masjid As-Shuhadae under Sanad-certified Sheikhs. Daily evaluation of new Sabaq and Muraja'ah.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-serif-brand text-black tabular-nums">
                      22 / 30 Juz'
                    </span>
                    <span className="text-xs text-stone-600 block font-semibold">73% of the Holy Quran Memorized</span>
                  </div>
                </div>

                {/* Visual Progress Bar (Green & Black) */}
                <div>
                  <div className="flex justify-between text-xs text-black mb-1.5 font-bold">
                    <span>Memorized: 22 Ajza'</span>
                    <span>Remaining: 8 Ajza'</span>
                  </div>
                  <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden border border-black">
                    <div className="h-full bg-emerald-800 rounded-full transition-all duration-500" style={{ width: '73.3%' }} />
                  </div>
                </div>

                {/* 30 Juz Grid Representation */}
                <div>
                  <span className="text-xs font-bold text-black uppercase tracking-wide block mb-3">
                    Juz' Breakdown Visualizer:
                  </span>
                  <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const juzNum = i + 1;
                      const isCompleted = juzNum <= student.tahfeedhStatus.juzCompleted;
                      return (
                        <div
                          key={juzNum}
                          className={`p-2 text-center rounded-lg border-2 text-xs font-mono font-bold transition-colors ${
                            isCompleted
                              ? 'bg-black border-black text-white'
                              : 'bg-stone-50 border-stone-300 text-stone-400'
                          }`}
                        >
                          J.{juzNum}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Current Recitation Detail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200 text-xs">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-300">
                    <span className="text-stone-600 block text-[11px] uppercase font-bold">Current Active Surah</span>
                    <span className="font-bold text-black text-sm mt-0.5 block">{student.tahfeedhStatus.currentSurah}</span>
                    <span className="text-emerald-900 font-semibold text-[11px] mt-1 block">Tajweed Grade: {student.tahfeedhStatus.tajweedGrade}</span>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-300">
                    <span className="text-stone-600 block text-[11px] uppercase font-bold">Weekly Target Pace</span>
                    <span className="font-bold text-black text-sm mt-0.5 block">{student.tahfeedhStatus.weeklyTarget}</span>
                    <span className="text-emerald-900 font-semibold text-[11px] mt-1 block">Target Sanad Completion: Senior 4 Term II</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Attendance & Exam Schedule */}
          {activeTab === 'schedule' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upcoming Exams */}
                <div className="bg-white rounded-xl border-2 border-stone-200 p-6 space-y-4">
                  <h4 className="text-sm font-bold text-black uppercase tracking-wide">
                    Upcoming UNEB Mocks & Terminal Timetable
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-lg border border-black flex justify-between items-center">
                      <div>
                        <div className="font-bold text-black">Mathematics Paper 1 & 2</div>
                        <div className="text-stone-600">Mbarara Campus Main Examination Hall</div>
                      </div>
                      <span className="font-mono text-emerald-900 font-bold">Nov 23, 08:30 AM</span>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-black flex justify-between items-center">
                      <div>
                        <div className="font-bold text-black">Physics Practical (Paper 3)</div>
                        <div className="text-stone-600">Ibn Al-Haytham Lab 1</div>
                      </div>
                      <span className="font-mono text-emerald-900 font-bold">Nov 25, 09:00 AM</span>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-black flex justify-between items-center">
                      <div>
                        <div className="font-bold text-black">Islamic Religious Education (P225)</div>
                        <div className="text-stone-600">Masjid Sanctuary Gallery</div>
                      </div>
                      <span className="font-mono text-emerald-900 font-bold">Nov 27, 08:00 AM</span>
                    </div>
                  </div>
                </div>

                {/* Attendance Summary */}
                <div className="bg-white rounded-xl border-2 border-stone-200 p-6 space-y-4">
                  <h4 className="text-sm font-bold text-black uppercase tracking-wide">
                    Term Attendance & Punctuality Record
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="text-stone-700">Total Academic Days:</span>
                      <span className="font-bold text-black font-mono">105 Days</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="text-stone-700">Days Present:</span>
                      <span className="font-bold text-emerald-900 font-mono">104 Days (98.7%)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-200">
                      <span className="text-stone-700">Authorized Medical Leave:</span>
                      <span className="font-bold text-black font-mono">1 Day</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-stone-700">Unexcused Absences:</span>
                      <span className="font-bold text-black font-mono">0 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Fee Ledger */}
          {activeTab === 'fees' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-white rounded-xl border-2 border-stone-200 p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div>
                    <h4 className="text-sm font-bold text-black uppercase tracking-wide">
                      Student Fees Ledger & SchoolPay Uganda Record
                    </h4>
                    <span className="text-xs text-stone-600">SchoolPay Registration: 8942-0219-SHU · Bank: Stanbic Bank Mbarara Branch</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-600 block">Current Balance Status</span>
                    <span className="text-xs font-bold font-mono text-white bg-black px-2.5 py-1 rounded">
                      PAID IN FULL (0 UGX DUE)
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-stone-200 text-xs">
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-black">Term I Boarding Fees & Tuition</span>
                      <span className="text-stone-600 block text-[11px]">SchoolPay Txn #SP-819201 · Feb 04, 2026</span>
                    </div>
                    <span className="font-mono font-bold text-black tabular-nums">1,480,000 UGX</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-black">Term II Boarding Fees & Tuition</span>
                      <span className="text-stone-600 block text-[11px]">SchoolPay Txn #SP-938214 · May 18, 2026</span>
                    </div>
                    <span className="font-mono font-bold text-black tabular-nums">1,480,000 UGX</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-black">Term III Boarding Fees & Tuition</span>
                      <span className="text-stone-600 block text-[11px]">SchoolPay Txn #SP-994320 · Sep 09, 2026</span>
                    </div>
                    <span className="font-mono font-bold text-black tabular-nums">1,480,000 UGX</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
