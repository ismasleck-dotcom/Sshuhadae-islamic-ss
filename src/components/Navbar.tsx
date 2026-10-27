import React, { useState } from 'react';
import { Menu, X, GraduationCap, Phone, Clock, Mail, ShieldCheck, ChevronRight, MapPin, Building2, BookOpen } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenVisit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b border-black">
      {/* 1. TOP UTILITY INFORMATION STRIP (IUIU GREEN SCHEME) */}
      <div className="bg-[#045d2f] text-white text-xs py-2.5 px-4 border-b border-[#034422]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-sans">
          <div className="flex items-center gap-3 text-[12px] tracking-wide">
            <span className="font-bold text-[#40e3a2] uppercase tracking-wider">2026/2027 Admissions Open</span>
            <span className="text-[#109850]" aria-hidden="true">·</span>
            <span className="text-white flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#40e3a2]" />
              <span>P.O. Box 1472, Mbarara, Uganda</span>
            </span>
            <span className="hidden md:inline text-[#109850]" aria-hidden="true">·</span>
            <span className="hidden md:inline text-white font-medium">Affiliated to UMSC Mbarara</span>
            <span className="hidden lg:inline text-[#109850]" aria-hidden="true">·</span>
            <span className="hidden lg:inline text-[#40e3a2] font-mono">UNEB Center U1036</span>
          </div>

          <div className="flex items-center gap-4 text-[12px] text-white">

            <div className="hidden lg:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-emerald-300 transition-colors">
                {SCHOOL_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-stone-300 hidden sm:inline">Tel:</span>
              <a href="tel:0751933301" className="hover:text-emerald-300 transition-colors font-mono font-medium text-white">0751 933 301</a>
              <span className="text-emerald-600 hidden sm:inline">/</span>
              <a href="tel:0700173448" className="hover:text-emerald-300 transition-colors font-mono font-medium text-white hidden sm:inline">0700 173 448</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE GRAND HEADER AND TITLE (MASTHEAD) */}
      <div className="bg-white border-b border-stone-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Crest + Title Lockup */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 lg:gap-5">
            {/* School Crest Emblem */}
            <a href="#top" className="shrink-0 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-emerald-700 p-1 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/aistudio/logo_fd3abfe0.png"
                  alt="Shuhadae Islamic Secondary School Official Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </a>

            {/* School Title, Motto & Affiliations */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white bg-black px-2 py-0.5 rounded">
                  A Community Secondary School (Both Day & Boarding)
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-950 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  Affiliated to UMSC Mbarara
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-black font-serif-brand">
                SHUHADAE ISLAMIC SECONDARY SCHOOL
              </h1>

              {/* Motto: ISLAM IS RELIGION AND ADMINISTRATION */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs">
                <span className="text-white font-extrabold uppercase tracking-wider bg-emerald-900 px-2.5 py-0.5 rounded border border-emerald-700 font-serif">
                  Motto: {SCHOOL_INFO.motto.toUpperCase()}
                </span>
                <span className="text-black font-bold font-arabic text-sm tracking-wide">
                  الإسلام دين وإدارة
                </span>
                <span className="text-stone-300 hidden sm:inline">·</span>
                <span className="text-emerald-900 font-semibold font-arabic text-xs">
                  مدرسة الشهداء الثانوية الإسلامية - مبارارا
                </span>
              </div>
            </div>
          </div>

          {/* Right Institutional Verification Badges */}
          <div className="hidden lg:flex flex-col items-end gap-2 text-right shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="bg-black text-white border border-stone-800 px-2.5 py-1 rounded font-semibold">
                UNEB Center: <strong className="text-emerald-400">U1036</strong>
              </span>
              <span className="bg-stone-100 border border-stone-300 text-black px-2.5 py-1 rounded">
                MoES: <strong className="text-emerald-900">PSS/S/218</strong>
              </span>
            </div>
            <div className="text-[11px] text-stone-700 flex items-center gap-1.5 justify-end">
              <Phone className="w-3 h-3 text-emerald-800" />
              <span className="font-mono font-medium">0751933301 · 0700173448 · 0700850069</span>
            </div>
            <button
              onClick={onOpenVisit}
              className="text-xs font-bold text-emerald-900 hover:text-black underline underline-offset-2 transition-colors cursor-pointer"
            >
              Book Mbarara Campus Visit →
            </button>
          </div>
        </div>
      </div>

      {/* 3. THE MENU (NAVIGATION BAR) - IUIU GREEN SCHEME (#00843d) */}
      <nav className="sticky top-0 z-40 bg-[#00843d] text-white shadow-md border-b-2 border-[#045d2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a
                href="#top"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#045d2f] rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="#academics"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#045d2f] rounded-md transition-colors"
              >
                Academics & UNEB
              </a>
              <a
                href="#admissions"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#045d2f] rounded-md transition-colors"
              >
                Admissions & Fees (UGX)
              </a>
              <a
                href="#facilities"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#045d2f] rounded-md transition-colors"
              >
                Campus & Hostels
              </a>
              <a
                href="#prayer-routine"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#045d2f] rounded-md transition-colors"
              >
                Islamic Tarbiyah
              </a>
              <a
                href="#portal"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#045d2f] rounded-md transition-colors"
              >
                Student Portal
              </a>
              <a
                href="#news"
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#045d2f] rounded-md transition-colors"
              >
                Notices & Almanac
              </a>
            </div>

            {/* Mobile Title View in Sticky Nav */}
            <div className="lg:hidden flex items-center gap-2">
              <img
                src="/assets/aistudio/logo_fd3abfe0.png"
                alt="Shuhadae Logo"
                className="w-7 h-7 rounded-full bg-white p-0.5 object-contain shrink-0"
              />
              <span className="text-xs font-bold font-serif-brand text-white tracking-wide truncate max-w-[210px] sm:max-w-none">
                SHUHADAE ISLAMIC S.S MBARARA
              </span>
            </div>

            {/* Right Action Button on Menu Bar */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenApply}
                className="px-4 py-2 text-xs font-extrabold text-[#045d2f] bg-white hover:bg-stone-100 rounded-lg transition-all duration-150 cursor-pointer shadow-xs uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-stone-200"
              >
                <span>Apply for 2026/27</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#00843d]" />
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-[#045d2f] rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-emerald-950 border-t border-black px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            <div className="pb-3 border-b border-emerald-900 text-xs text-stone-200 space-y-1">
              <div className="text-white font-bold font-serif-brand text-sm">Shuhadae Secondary School, Mbarara</div>
              <div className="text-emerald-300 font-semibold">Motto: ISLAM IS RELIGION AND ADMINISTRATION</div>
              <div className="text-white">P.O. Box 1472, Mbarara · Affiliated to UMSC Mbarara</div>
              <div className="text-emerald-400 font-mono text-[11px]">Tel: 0751933301 / 0700173448 / 0700850069</div>
            </div>

            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-white hover:bg-black rounded-md"
            >
              Home
            </a>
            <a
              href="#academics"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-black rounded-md"
            >
              Academics & UNEB Curriculum
            </a>
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-black rounded-md"
            >
              Admissions & School Fees (UGX)
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-black rounded-md"
            >
              Campus & Boarding Hostels
            </a>
            <a
              href="#prayer-routine"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-black rounded-md"
            >
              Islamic Tarbiyah & Daily Routine
            </a>
            <a
              href="#portal"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-black rounded-md"
            >
              Student & Parent Portal (SMS)
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-black rounded-md"
            >
              School Announcements & Almanac
            </a>

            <div className="pt-3 border-t border-emerald-900 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-white rounded-lg shadow-sm"
              >
                Apply for Admission (S.1 - S.6)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisit();
                }}
                className="w-full py-2.5 text-center text-xs font-medium text-white bg-black hover:bg-stone-900 rounded-lg border border-emerald-600"
              >
                Schedule Mbarara Tour
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
