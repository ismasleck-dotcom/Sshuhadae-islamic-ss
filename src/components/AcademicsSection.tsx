import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, ChevronRight, Binary, Microscope, Globe, FileText } from 'lucide-react';
import { DEPARTMENTS, Department, AcademicSubject } from '../data/schoolData';

export const AcademicsSection: React.FC = () => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>('sciences');
  const [activeSubject, setActiveSubject] = useState<AcademicSubject | null>(null);

  const currentDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  const aLevelCombinations = [
    { code: "BCM", name: "Biology, Chemistry, Mathematics", career: "Medicine, Pharmacy, Biotechnology, Surgery (MUST & Makerere)" },
    { code: "PCM", name: "Physics, Chemistry, Mathematics", career: "Civil, Electrical & Mechanical Engineering, Architecture" },
    { code: "PCB", name: "Physics, Chemistry, Biology", career: "Dentistry, Veterinary Medicine, Nursing, Clinical Pathology" },
    { code: "PEM", name: "Physics, Economics, Mathematics", career: "Actuarial Science, Quantity Surveying, Quantitative Finance" },
    { code: "HEG", name: "History, Economics, Geography", career: "Law, International Relations, Urban Planning, Public Policy" },
    { code: "MEA", name: "Mathematics, Economics, Arabic", career: "Islamic Banking, Shariah Financial Compliance, Diplomatic Trade" },
  ];

  return (
    <section id="academics" className="py-18 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-900 mb-2">
            <span>Dual Curriculum Excellence · Mbarara, Uganda</span>
            <span aria-hidden="true" className="text-black">·</span>
            <span>UNEB (UCE & UACE) & Tahfeez</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black [text-wrap:balance]">
            Academic Distinction Grounded in Faith & National Competence
          </h2>
          <p className="text-base text-stone-700 mt-3 leading-relaxed">
            We deliver the Ministry of Education and Sports (MoES) and UNEB national curriculum alongside 
            comprehensive Islamic theological disciplines (Thanawiyyah & Tahfeez). Our scholars consistently 
            secure direct government and private sponsorships at Uganda's prestigious universities.
          </p>
        </div>

        {/* Department Switcher Tabs (Green, Black, White) */}
        <div className="flex flex-wrap gap-2 pb-4 mb-8 border-b border-stone-200">
          {DEPARTMENTS.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => {
                  setSelectedDeptId(dept.id);
                  setActiveSubject(null);
                }}
                className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-black text-white shadow-xs border border-black'
                    : 'bg-white text-black hover:bg-stone-100 border border-stone-300'
                }`}
              >
                <span>{dept.name}</span>
                <span className="text-[11px] font-arabic hidden md:inline text-emerald-700">({dept.arabicName})</span>
              </button>
            );
          })}
        </div>

        {/* Current Department Spotlight */}
        <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-stone-200">
            <div>
              <div className="text-xs font-arabic text-emerald-900 font-bold mb-1">
                {currentDept.arabicName}
              </div>
              <h3 className="text-2xl font-bold font-serif-brand text-black">
                {currentDept.name}
              </h3>
              <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
                {currentDept.description}
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-300 rounded-xl p-4 lg:w-80 shrink-0">
              <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wide block mb-1">
                Departmental Leadership
              </span>
              <div className="text-sm font-bold text-black">
                {currentDept.headOfDept}
              </div>
              <div className="text-xs text-emerald-900 mt-1 font-semibold">
                {currentDept.qualification}
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {currentDept.subjects.map((subject) => (
              <div
                key={subject.code}
                className="bg-white border-2 border-stone-200 rounded-xl p-5 hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-2 font-mono">
                    <span className="font-bold text-emerald-900">{subject.code}</span>
                    <span className="text-stone-700 font-medium">{subject.level}</span>
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2">
                    {subject.name}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {subject.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-1.5 pt-3 border-t border-stone-200">
                    {subject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-black">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveSubject(subject)}
                    className="mt-4 text-xs font-bold text-emerald-900 hover:text-black transition-colors flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <span>View UNEB Syllabus Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Level Combinations Section (Deep Black, Emerald & White) */}
        <div className="bg-black text-white rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-emerald-800 shadow-md">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
              UACE Sixth-Form Combinations · Senior 5 & 6
            </span>
            <h3 className="text-2xl font-bold font-serif-brand mt-1 text-white">
              Recognized UNEB A-Level Combination Pathways
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Every A-Level student offers 3 principal subjects plus General Paper (GP) and Subsidiary ICT or Math. 
              Our graduates regularly secure places at Makerere University, MUST (Mbarara), IUIU, Kyambogo, and overseas universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aLevelCombinations.map((comb) => (
              <div
                key={comb.code}
                className="bg-stone-900 border border-emerald-900/80 rounded-xl p-5 hover:border-emerald-500 transition-colors"
              >
                <div className="text-2xl font-bold font-mono tracking-wider text-emerald-400 mb-1">
                  {comb.code}
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  {comb.name}
                </div>
                <div className="text-xs text-stone-300 border-t border-stone-800 pt-2.5">
                  <span className="text-emerald-300 font-medium">Career Destination: </span>
                  {comb.career}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Detail Modal */}
        {activeSubject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-black space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-900">{activeSubject.code} · {activeSubject.level}</span>
                  <h4 className="text-xl font-bold text-black">{activeSubject.name}</h4>
                </div>
                <button
                  onClick={() => setActiveSubject(null)}
                  className="text-stone-500 hover:text-black text-sm font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {activeSubject.description}
              </p>

              <div>
                <span className="text-xs font-bold text-black uppercase tracking-wide block mb-2">
                  Key Course Competencies & UNEB Exam Requirements:
                </span>
                <ul className="space-y-2 text-xs text-stone-800">
                  {activeSubject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-800 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-800 font-bold">•</span>
                    <span>Continuous termly assessment, project work, and mock examinations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-800 font-bold">•</span>
                    <span>Integration with practical Islamic values and administrative leadership.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setActiveSubject(null)}
                  className="px-4 py-2 text-xs font-bold text-white bg-black hover:bg-stone-800 rounded-lg cursor-pointer"
                >
                  Close Syllabus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
