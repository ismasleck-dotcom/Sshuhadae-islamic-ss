import React from 'react';
import { Award, BookOpen, Compass, ShieldCheck, ArrowRight, MapPin, Phone, Mail, Building2, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenApply: () => void;
  onOpenVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onOpenVisit }) => {
  return (
    <section id="top" className="relative overflow-hidden bg-white border-b border-black">
      {/* Decorative architectural background hint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Mission & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Unboxed Metadata Kicker (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-900">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                <span>P.O. Box 1472, Mbarara</span>
              </span>
              <span aria-hidden="true" className="text-black">·</span>
              <span className="text-black font-medium">A Community Secondary School (Day & Boarding)</span>
              <span aria-hidden="true" className="text-black">·</span>
              <span className="font-mono text-emerald-800 font-bold">UNEB Center U1036</span>
            </div>

            {/* School Motto Banner (Green, Black & White) */}
            <div className="bg-emerald-900 text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm border border-black">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 border border-emerald-600">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200 block font-mono">
                    Official School Motto
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-white font-serif tracking-wide">
                    "{SCHOOL_INFO.motto.toUpperCase()}"
                  </span>
                </div>
              </div>
              <span className="font-arabic text-white font-bold text-base sm:text-lg bg-black/40 px-3 py-1 rounded border border-emerald-700/60 text-center">
                الإسلام دين وإدارة
              </span>
            </div>

            {/* Arabic Quranic Inscription */}
            <div className="border-l-0 pl-0">
              <p className="font-arabic text-xl sm:text-2xl text-black font-bold leading-relaxed dir-rtl text-right lg:text-left">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ
              </p>
              <p className="text-xs text-stone-600 italic mt-1 font-serif">
                "Allah will elevate those of you who have believed and those who have been given knowledge, by degrees." (Surah Al-Mujadilah: 11)
              </p>
            </div>

            {/* Primary Refined Headline with text-wrap: balance */}
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.15] font-serif-brand [text-wrap:balance]">
              Premier Community Secondary School in Mbarara, Uganda
            </h2>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed max-w-2xl">
              Shuhadae Islamic Secondary School is a community secondary school offering both day and boarding sections, 
              proudly affiliated to <strong>Uganda Muslim Supreme Council (UMSC) Mbarara</strong>. Under our motto, 
              <em> "Islam is Religion and Administration"</em>, we cultivate students who excel in UNEB national examinations 
              while developing administrative competence, civic leadership, and noble Islamic character.
            </p>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-black bg-stone-50 p-3.5 rounded-xl border border-stone-300">
              <div className="flex items-center gap-1.5 font-medium">
                <Phone className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <span className="text-stone-600 font-semibold">Hotlines:</span>
                <a href="tel:0751933301" className="text-black hover:text-emerald-800 font-mono font-bold">0751 933 301</a>
                <span>·</span>
                <a href="tel:0700173448" className="text-black hover:text-emerald-800 font-mono font-bold">0700 173 448</a>
                <span>·</span>
                <a href="tel:0700850069" className="text-black hover:text-emerald-800 font-mono font-bold">0700 850 069</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="text-emerald-900 font-bold hover:underline">{SCHOOL_INFO.email}</a>
              </div>
            </div>

            {/* Action Buttons (Green, Black, and White) */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="px-6 py-3.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 group border border-emerald-950"
              >
                <span>Apply for S.1 & S.5 (Day / Boarding)</span>
                <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenVisit}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-black hover:bg-stone-900 rounded-lg shadow-2xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Visit Mbarara Campus
              </button>

              <a
                href="#admissions"
                className="px-4 py-3.5 text-xs font-bold text-emerald-900 hover:text-black transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4 text-[#00843d]" />
                <span>View Fees & Curriculum</span>
              </a>
            </div>

            {/* Accreditation trust indicators */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs text-stone-700">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Affiliated to Uganda Muslim Supreme Council (UMSC) Mbarara</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>UNEB Examination Center (U1036)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Resolution Photographic Visual Frame */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-black shadow-md bg-stone-100 group">
              <img
                src="/assets/aistudio/IMG_5246_dde828ec.PNG"
                alt="Shuhadae Islamic Secondary School Mbarara Multi-Storey Main Academic Complex with Students"
                className="w-full h-[400px] sm:h-[460px] lg:h-[520px] object-cover object-center group-hover:scale-101 transition-transform duration-500"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* In-Frame Curatorial Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-400">
                  Main Academic Complex & Classroom Block
                </span>
                <p className="text-sm font-medium text-white">
                  Motto: "{SCHOOL_INFO.motto}" · Mbarara Campus.
                </p>
                <div className="text-[11px] text-stone-200 pt-1 flex items-center gap-3">
                  <span>P.O. Box 1472, Mbarara</span>
                  <span>·</span>
                  <span>UNEB Center U1036</span>
                  <span>·</span>
                  <span>Affiliated to UMSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency Row: Full 4-Column Metric Strip directly below hero */}
        <div className="mt-14 pt-8 border-t border-black grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black tabular-nums">
              100%
            </div>
            <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
              UNEB UCE & UACE Qualification
            </div>
            <p className="text-xs text-stone-600 leading-normal">
              Consistent Division 1 scores and high principal pass rates for university admissions.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black tabular-nums">
              Day & Boarding
            </div>
            <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
              Flexible Community Enrollment
            </div>
            <p className="text-xs text-stone-600 leading-normal">
              Comfortable, supervised residential boarding hostels alongside convenient day scholar options with lunch.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black tabular-nums">
              UMSC Mbarara
            </div>
            <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
              Faith & Community Oversight
            </div>
            <p className="text-xs text-stone-600 leading-normal">
              Direct institutional guidance and moral mentorship under the Uganda Muslim Supreme Council Mbarara.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black tabular-nums">
              30 Juz'
            </div>
            <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
              Integrated Tahfeez Track
            </div>
            <p className="text-xs text-stone-600 leading-normal">
              Daily structured memorization and Tajweed instruction under certified Sheikhs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
