import React from 'react';
import { Quote, Award, Shield, HeartHandshake, Compass, Building2, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const PrincipalMessage: React.FC = () => {
  const pillars = [
    {
      title: "Ihsan (Excellence)",
      arabic: "الإحسان",
      desc: "Striving for perfection in every academic thesis, laboratory experiment, and act of worship, conscious of Allah's presence."
    },
    {
      title: "Tarbiyah (Moral Nurturing)",
      arabic: "التربية",
      desc: "Cultivating humility, modesty (Haya'), reverence for parents and elders, and unwavering truthfulness in conduct."
    },
    {
      title: "Amanah (Integrity & Governance)",
      arabic: "الأمانة",
      desc: "Upholding supreme administrative honesty, academic ethics in UNEB examinations, and community stewardship."
    },
    {
      title: "Khidmah (Selfless Service)",
      arabic: "الخدمة",
      desc: "Applying scientific knowledge and theological understanding to alleviate societal hardship and uplift Uganda and humanity."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Principal Editorial Essay */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-900">
              <span>Community Leadership</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Message from Administration · Mbarara</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-stone-900 [text-wrap:balance]">
              Islam is Religion and Administration: Nurturing Pious Thinkers and Competent Leaders
            </h2>

            {/* Editorial Body with Classical Drop Cap */}
            <div className="space-y-4 text-stone-700 leading-relaxed text-base max-w-2xl font-sans">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-emerald-950 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                At Shuhadae Islamic Secondary School, our guiding philosophy is enshrined in our foundational motto: 
                <strong className="text-emerald-950"> "Islam is Religion and Administration" (الإسلام دين وإدارة)</strong>. 
                Islam is neither confined to private ritual nor divorced from the practicalities of social order, scientific 
                progress, and sound public management. Rather, it is a comprehensive way of life that demands both sincere devotion 
                to Allah and superior administrative competence in the affairs of the community.
              </p>

              <p>
                As a community secondary school affiliated to the <strong>Uganda Muslim Supreme Council (UMSC) Mbarara</strong>, 
                we ensure our learners excel in the Uganda National Examinations Board (UNEB) curriculum—from Lower Secondary UCE 
                competency assessments through to Advanced Level UACE science and humanities combinations. Concurrently, 
                our students develop administrative discipline, organizational management skills, and civic responsibility.
              </p>

              {/* Classical Editorial Pull Quote celebrating the motto */}
              <div className="my-8 py-6 border-y border-stone-300">
                <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-900 leading-snug">
                  "Our motto—Islam is Religion and Administration—is our charge to every graduate: 
                  lead with integrity in the boardroom, clinic, court, and civil service, with hearts steadfast in the remembrance of Allah."
                </blockquote>
                <div className="text-xs uppercase tracking-widest text-emerald-900 font-semibold mt-3">
                  — The School Philosophy · UMSC Mbarara
                </div>
              </div>

              <p>
                Whether a scholar joins our day section from Mbarara City or resides in our boarding hostels from across Uganda, 
                they will be groomed as ethical administrators and pious citizens ready to serve the nation.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-stone-200 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white p-1 flex items-center justify-center border-2 border-emerald-800 shrink-0 shadow-sm">
                <img
                  src="/assets/aistudio/logo_fd3abfe0.png"
                  alt="Shuhadae Islamic Secondary School Official Seal"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <div className="text-base font-bold text-stone-900">
                  Headteacher & Management Committee
                </div>
                <div className="text-xs text-stone-600">
                  Shuhadae Islamic Secondary School · Affiliated to UMSC Mbarara
                </div>
                <div className="text-[11px] text-emerald-800 font-mono mt-0.5">
                  P.O. Box 1472, Mbarara · Tel: 0751933301 / 0700173448 / 0700850069
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Governing Pillars & UMSC Affiliation Card */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Motto Highlight Box */}
            <div className="p-5 bg-black text-white rounded-xl border-2 border-emerald-700 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Foundational School Motto</span>
              </div>
              <h4 className="text-lg font-black font-serif-brand tracking-wide text-white">
                "ISLAM IS RELIGION AND ADMINISTRATION"
              </h4>
              <p className="text-xs text-emerald-300 leading-relaxed font-arabic text-base font-bold">
                الإسلام دين وإدارة
              </p>
              <p className="text-xs text-stone-200 leading-snug pt-1">
                Combining spiritual devotion, moral rectitude, and executive administrative competence in every pupil.
              </p>
            </div>

            {/* UMSC Mbarara Highlight Box */}
            <div className="p-5 bg-emerald-950 text-white rounded-xl border border-emerald-900 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Community Affiliation</span>
              </div>
              <h4 className="text-base font-bold text-white font-serif-brand">
                Uganda Muslim Supreme Council (UMSC) Mbarara
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Operating under the institutional patronage of UMSC Mbarara Muslim District Council to provide day and boarding secondary education.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wider block mb-1">
                The Shuhadae Creed
              </span>
              <h3 className="text-xl font-bold font-serif-brand text-stone-900">
                Four Pillars of Student Formation
              </h3>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-stone-900">{pillar.title}</span>
                    <span className="font-arabic text-emerald-900 font-bold text-base">{pillar.arabic}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
