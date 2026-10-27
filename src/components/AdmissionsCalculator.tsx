import React, { useState } from 'react';
import { Calculator, Download, Check, HelpCircle, ArrowRight, ShieldCheck, FileCheck, Coins } from 'lucide-react';
import { FEE_STRUCTURE_DATA, SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsCalculatorProps {
  onOpenApply: () => void;
}

export const AdmissionsCalculator: React.FC<AdmissionsCalculatorProps> = ({ onOpenApply }) => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>('s1-s2');
  const [residency, setResidency] = useState<'day' | 'boarding'>('boarding');
  const [currency, setCurrency] = useState<'UGX' | 'USD'>('UGX');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['tahfeedh-intensive']);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const currentLevel = FEE_STRUCTURE_DATA.levels.find(l => l.id === selectedLevelId) || FEE_STRUCTURE_DATA.levels[0];
  const baseTuitionTermUGX = residency === 'boarding' ? currentLevel.boardTuitionUGX : currentLevel.dayTuitionUGX;

  const addonsTotalTermUGX = selectedAddons.reduce((sum, addonId) => {
    const addon = FEE_STRUCTURE_DATA.addons.find(a => a.id === addonId);
    return sum + (addon ? addon.costUGX : 0);
  }, 0);

  const totalTermUGX = baseTuitionTermUGX + addonsTotalTermUGX;
  const annualTotalUGX = totalTermUGX * 3;

  const formatMoney = (valUGX: number) => {
    if (currency === 'USD') {
      const valUSD = Math.round(valUGX / FEE_STRUCTURE_DATA.exchangeRate);
      return `$${valUSD.toLocaleString()}`;
    }
    return `${valUGX.toLocaleString()} UGX`;
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleDownloadProspectus = () => {
    setIsDownloaded(true);
    const prospectusText = `=====================================================
SHUHADAE ISLAMIC SECONDARY SCHOOL, MBARARA
A Community Secondary School (Both Day & Boarding)
Affiliated to Uganda Muslim Supreme Council (UMSC) Mbarara
Motto: ISLAM IS RELIGION AND ADMINISTRATION
P.O. Box 1472, Mbarara, Uganda
Telephone: 0751933301 / 0700173448 / 0700850069
Email: ${SCHOOL_INFO.email}
UNEB Center Number: ${SCHOOL_INFO.unebCenterNumber}
=====================================================

PROGRAM: ${currentLevel.name}
ENROLLMENT MODE: ${residency === 'boarding' ? 'Full Boarding Residential (Separate Hostels)' : 'Day Scholar with Midday Halal Meals'}
ESTIMATED FEES PER TERM: ${formatMoney(totalTermUGX)}
ANNUAL ACADEMIC FEES (3 Terms): ${formatMoney(annualTotalUGX)}

TERMLY SCHEDULE (Ugandan MoES Calendar):
- Term I (February - May):    ${formatMoney(totalTermUGX)}
- Term II (May - August):      ${formatMoney(totalTermUGX)}
- Term III (September - Dec):  ${formatMoney(totalTermUGX)}

OPTIONAL PRACTICAL ADD-ONS:
${selectedAddons.map(id => {
  const item = FEE_STRUCTURE_DATA.addons.find(a => a.id === id);
  return `- ${item?.name}: ${formatMoney(item ? item.costUGX : 0)} / term`;
}).join('\n')}

ADMISSIONS CRITERIA:
1. Senior One (S.1): PLE Pass Slip/Certificate (Grades/Aggregates 4 - 24 accepted for community entrance).
2. Senior Five (S.5): UNEB UCE Certificate with minimum Division 1 or 2.
3. Written entrance assessment in English, Mathematics, and General Science.
4. Birth certificate, two passport photos, and former school recommendation.
5. Medical fitness report.

ADMISSIONS OFFICE - MBARARA:
Address: P.O. Box 1472, Mbarara, Uganda
Hotlines: 0751933301 | 0700173448 | 0700850069
Email: ${SCHOOL_INFO.email}
=====================================================`;

    const blob = new Blob([prospectusText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Shuhadae_Mbarara_Prospectus_POBox1472.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setIsDownloaded(false), 4000);
  };

  return (
    <section id="admissions" className="py-18 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-900 mb-2">
            <span>Community Education · P.O. Box 1472 Mbarara · Academic Year 2026/2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-brand text-black [text-wrap:balance]">
            Tuition Fees Estimator (UGX) & Admissions Pathway
          </h2>
          <p className="text-base text-stone-700 mt-3 leading-relaxed">
            As a community secondary school affiliated to UMSC Mbarara, we maintain affordable, transparent fees 
            for both day scholars and boarding students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Currency & Level Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <span className="text-sm font-bold text-black flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-800" />
                <span>Configure Student Class & Residency</span>
              </span>

              {/* Currency Toggle (Black & White) */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-black">
                <button
                  onClick={() => setCurrency('UGX')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    currency === 'UGX' ? 'bg-black text-white shadow-xs' : 'text-stone-600 hover:text-black'
                  }`}
                >
                  UGX (Uganda Shilling)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    currency === 'USD' ? 'bg-black text-white shadow-xs' : 'text-stone-600 hover:text-black'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Academic Level */}
            <div>
              <label className="text-xs font-bold text-black uppercase tracking-wide block mb-2">
                1. Select Academic Class / Level · School Fees Per Term
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {FEE_STRUCTURE_DATA.levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevelId(level.id)}
                    className={`p-3 text-left rounded-xl border-2 text-xs transition-all cursor-pointer ${
                      selectedLevelId === level.id
                        ? 'border-black bg-stone-100 font-bold text-black shadow-xs'
                        : 'border-stone-200 hover:border-black text-stone-700 bg-white'
                    }`}
                  >
                    <div className="font-bold text-black mb-1 flex items-center justify-between">
                      <span>{level.name.split('(')[0].trim()}</span>
                      {selectedLevelId === level.id && (
                        <span className="w-2 h-2 rounded-full bg-emerald-800 shrink-0"></span>
                      )}
                    </div>
                    <div className="text-[11px] text-stone-600 space-y-0.5">
                      <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                        Fees Per Term:
                      </div>
                      <div className="text-xs font-black text-black">
                        {residency === 'boarding' ? formatMoney(level.boardTuitionUGX) : formatMoney(level.dayTuitionUGX)}
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {residency === 'boarding'
                          ? `(Boarding • Day: ${formatMoney(level.dayTuitionUGX)})`
                          : `(Day • Boarding: ${formatMoney(level.boardTuitionUGX)})`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Residency Option */}
            <div>
              <label className="text-xs font-bold text-black uppercase tracking-wide block mb-2">
                2. Enrollment Residency Mode (Day vs Boarding) · School Fees Per Term
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setResidency('boarding')}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    residency === 'boarding'
                      ? 'border-emerald-800 bg-emerald-50 text-black font-semibold'
                      : 'border-stone-200 hover:border-black text-stone-700 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-black">Full Boarding (Hostels)</span>
                    <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      {formatMoney(currentLevel.boardTuitionUGX)} / term
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-normal">
                    Includes supervised dormitories on Mbarara campus, 3 nutritious halal meals daily, evening prep, laundry service, and 24/7 clinic.
                  </p>
                </button>

                <button
                  onClick={() => setResidency('day')}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    residency === 'day'
                      ? 'border-emerald-800 bg-emerald-50 text-black font-semibold'
                      : 'border-stone-200 hover:border-black text-stone-700 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-black">Day Scholar</span>
                    <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      {formatMoney(currentLevel.dayTuitionUGX)} / term
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-normal">
                    Includes complete UNEB instruction, library access, mid-morning porridge/tea break, and hot balanced halal lunch daily.
                  </p>
                </button>
              </div>
            </div>

            {/* Optional Enrichments */}
            <div>
              <label className="text-xs font-bold text-black uppercase tracking-wide block mb-2">
                3. Optional Practical & Enrichment Programs (Per Term)
              </label>
              <div className="space-y-2">
                {FEE_STRUCTURE_DATA.addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border-2 flex items-center justify-between gap-3 text-xs transition-colors cursor-pointer ${
                        isChecked
                          ? 'border-black bg-stone-100 text-black font-semibold'
                          : 'border-stone-200 hover:border-black text-stone-600 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-black border-black text-white'
                              : 'border-stone-400 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono font-bold tabular-nums text-black">
                        +{formatMoney(addon.costUGX)} / term
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Fee Summary (Green, Black, White) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border-2 border-black">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-300">
                  School Fees Estimate · 2026/2027
                </span>
                <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-emerald-500 shadow-xs shrink-0">
                  <img
                    src="/assets/aistudio/logo_fd3abfe0.png"
                    alt="Shuhadae Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>

              <div className="mt-3 mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold font-serif-brand tabular-nums text-white">
                  {formatMoney(totalTermUGX)} <span className="text-xs font-sans text-stone-300 font-normal">/ Term</span>
                </div>
                <div className="text-xs text-emerald-200 mt-1">
                  Annual Total (3 Terms): <strong className="text-white font-mono">{formatMoney(annualTotalUGX)}</strong>
                </div>
              </div>

              {/* Termly installment schedule */}
              <div className="bg-black/60 rounded-xl p-4 border border-emerald-800 space-y-2.5 text-xs">
                <div className="font-bold text-white uppercase tracking-wide text-[11px]">
                  Termly Payment Schedule (MoES Calendar)
                </div>
                <div className="flex justify-between items-center text-stone-200">
                  <span>Term I (February Opening)</span>
                  <span className="font-mono font-bold tabular-nums text-emerald-300">{formatMoney(totalTermUGX)}</span>
                </div>
                <div className="flex justify-between items-center text-stone-200">
                  <span>Term II (May Session)</span>
                  <span className="font-mono font-bold tabular-nums text-emerald-300">{formatMoney(totalTermUGX)}</span>
                </div>
                <div className="flex justify-between items-center text-stone-200">
                  <span>Term III (September Final)</span>
                  <span className="font-mono font-bold tabular-nums text-emerald-300">{formatMoney(totalTermUGX)}</span>
                </div>
              </div>

              {/* Contact info strip */}
              <div className="mt-6 pt-4 border-t border-emerald-900 text-xs text-stone-200 space-y-1">
                <div className="text-emerald-300 font-bold">Direct Admission Inquiries:</div>
                <div className="font-mono text-white font-bold">0751933301 · 0700173448 · 0700850069</div>
                <div className="text-[11px] text-stone-300">Email: shuhadaeislamicss@gmail.com</div>
              </div>

              {/* Action buttons (Black, Green, White) */}
              <div className="mt-6 pt-4 border-t border-emerald-900 flex flex-col gap-3">
                <button
                  onClick={onOpenApply}
                  className="w-full py-3.5 px-4 bg-white hover:bg-stone-100 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs border border-black"
                >
                  <span>Submit Online Application Now</span>
                  <ArrowRight className="w-4 h-4 text-emerald-800" />
                </button>

                <button
                  onClick={handleDownloadProspectus}
                  className="w-full py-2.5 px-4 bg-black hover:bg-stone-900 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-emerald-700"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>{isDownloaded ? "Prospectus Downloaded ✓" : "Download Official Mbarara Prospectus"}</span>
                </button>
              </div>
            </div>

            {/* Admission Roadmap Card */}
            <div className="bg-white rounded-2xl border-2 border-black p-6 shadow-2xs">
              <h4 className="text-sm font-bold text-black uppercase tracking-wide mb-3">
                Community Admissions Procedure
              </h4>
              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-black text-white font-bold flex items-center justify-center shrink-0">1</span>
                  <span><strong>Online Form or Physical Application:</strong> Submit at school offices P.O. Box 1472, Mbarara.</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-black text-white font-bold flex items-center justify-center shrink-0">2</span>
                  <span><strong>Entrance Assessment:</strong> Written assessment in Math, English & Science.</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-black text-white font-bold flex items-center justify-center shrink-0">3</span>
                  <span><strong>Interview & Placement:</strong> Day or boarding hostel placement & Tahfeez level.</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-black text-white font-bold flex items-center justify-center shrink-0">4</span>
                  <span><strong>Admission Letter:</strong> Pick up official package or receive via email/SMS.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
