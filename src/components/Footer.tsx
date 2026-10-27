import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, ShieldCheck, Heart, Building2, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply, onOpenVisit }) => {
  return (
    <footer className="bg-[#021f10] text-stone-300 font-sans border-t-2 border-[#00843d]">
      {/* Top Banner inside footer (IUIU Primary Green #00843d) */}
      <div className="bg-[#00843d] border-b border-[#045d2f] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#40e3a2]">
              Motto: {SCHOOL_INFO.motto.toUpperCase()} · الإسلام دين وإدارة
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-brand text-white">
              Shuhadae Islamic Secondary School, Mbarara
            </h3>
            <p className="text-xs text-emerald-100 max-w-xl">
              A Community Secondary School (Day & Boarding) affiliated to <strong>Uganda Muslim Supreme Council (UMSC) Mbarara</strong>. 
              UNEB Examination Center U1036 · P.O. Box 1472, Mbarara.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0">
            <button
              onClick={onOpenApply}
              className="px-5 py-3 text-xs font-bold text-white bg-black hover:bg-stone-900 border border-emerald-400 rounded-lg transition-colors cursor-pointer uppercase tracking-wider shadow-sm"
            >
              Start Admission Process
            </button>
            <button
              onClick={onOpenVisit}
              className="px-4 py-3 text-xs font-semibold text-white bg-[#045d2f] hover:bg-[#032a15] border border-[#109850] rounded-lg transition-colors cursor-pointer"
            >
              Visit Mbarara Campus
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: School Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center border-2 border-emerald-500 shadow-sm shrink-0">
                <img
                  src="/assets/aistudio/logo_fd3abfe0.png"
                  alt="Shuhadae Islamic Secondary School Official Crest"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight font-serif-brand block">
                  {SCHOOL_INFO.name}
                </span>
                <span className="text-xs text-emerald-400 font-arabic font-bold">
                  {SCHOOL_INFO.arabicName}
                </span>
              </div>
            </div>

            {/* Official School Motto badge in footer */}
            <div className="bg-black border border-stone-800 rounded-lg p-2.5 space-y-0.5">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block font-mono">
                Official Motto
              </span>
              <p className="text-xs font-bold text-white font-serif">
                "{SCHOOL_INFO.motto.toUpperCase()}"
              </p>
              <p className="text-xs text-emerald-400 font-arabic font-bold">
                الإسلام دين وإدارة
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              A community secondary school offering both day and boarding sections in Mbarara, Western Uganda. 
              Proudly affiliated to the Uganda Muslim Supreme Council (UMSC) Mbarara.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Affiliation: <strong className="text-emerald-300">Uganda Muslim Supreme Council (UMSC) Mbarara</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ministry of Education and Sports: <strong className="text-stone-200">{SCHOOL_INFO.moesRegNumber}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UNEB Examination Center: <strong className="text-stone-200">{SCHOOL_INFO.unebCenterNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Faculties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Academic Divisions
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#academics" className="hover:text-emerald-300 transition-colors">UACE Sciences (BCM, PCM, PCB)</a></li>
              <li><a href="#academics" className="hover:text-emerald-300 transition-colors">UACE Arts & Economics (HEG, PEM)</a></li>
              <li><a href="#academics" className="hover:text-emerald-300 transition-colors">30-Juz' Tahfeez-ul-Qur'an Track</a></li>
              <li><a href="#academics" className="hover:text-emerald-300 transition-colors">NCDC Lower Secondary (S.1 - S.4)</a></li>
              <li><a href="#academics" className="hover:text-emerald-300 transition-colors">Islamic Religious Ed (IRE P225)</a></li>
              <li><a href="#academics" className="hover:text-emerald-300 transition-colors">Computer Studies & Subsidiary ICT</a></li>
            </ul>
          </div>

          {/* Col 4: Institutional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Admissions & Student Life
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#admissions" className="hover:text-emerald-300 transition-colors">School Fees Structure (UGX)</a></li>
              <li><a href="#portal" className="hover:text-emerald-300 transition-colors">Student & Parent Portal (SMS)</a></li>
              <li><a href="#prayer-routine" className="hover:text-emerald-300 transition-colors">Masjid Prayer & Campus Cadence</a></li>
              <li><a href="#facilities" className="hover:text-emerald-300 transition-colors">Mbarara Boarding Hostels</a></li>
              <li><a href="#news" className="hover:text-emerald-300 transition-colors">Uganda MoES Almanac 2026/27</a></li>
              <li><button onClick={onOpenVisit} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">Schedule Mbarara Tour</button></li>
            </ul>
          </div>

          {/* Col 5: Exact Official Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              School Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong>P.O. Box 1472, Mbarara</strong><br />
                  Western Region, Uganda
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div className="space-y-1 font-mono text-[11px] text-stone-300">
                  <div><a href="tel:0751933301" className="hover:text-white transition-colors">0751 933 301</a></div>
                  <div><a href="tel:0700173448" className="hover:text-white transition-colors">0700 173 448</a></div>
                  <div><a href="tel:0700850069" className="hover:text-white transition-colors">0700 850 069</a></div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors font-medium text-emerald-300 break-all">
                  {SCHOOL_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-800">
                A Community Secondary School (Both Day and Boarding)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}, P.O. Box 1472 Mbarara, Uganda. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Motto: ISLAM IS RELIGION AND ADMINISTRATION</span>
            <span>·</span>
            <span>UMSC Mbarara Oversight</span>
            <span>·</span>
            <span className="text-emerald-400 font-arabic">الإسلام دين وإدارة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
