import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, FileCheck, CheckCircle2, User, Phone, BookOpen, Building, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submittedAppNumber, setSubmittedAppNumber] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Student
    firstName: '',
    lastName: '',
    gender: 'Male',
    dob: '',
    nationality: 'Ugandan',
    currentSchool: '',
    targetForm: 'Senior 1 (S.1 O-Level Entry)',
    
    // Step 2: Parent/Guardian
    parentName: '',
    parentRelation: 'Father',
    parentPhone: '',
    parentEmail: '',
    parentDistrict: 'Mbarara City',
    parentAddress: '',
    
    // Step 3: Academic & Quranic
    previousExamScore: 'PLE Division 1 (Aggregates 4 - 12)',
    quranLevel: '6 - 15 Juz\' Memorized',
    arabicLevel: 'Intermediate Conversational',
    specialTalent: '',
    
    // Step 4: Residency
    residencyType: 'Boarding Hostel (Residential)',
    needsBus: 'No',
    medicalDietaryNotes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      const generatedRef = `SHU-MBR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedAppNumber(generatedRef);
      setStep(5);
    }
  };

  const resetForm = () => {
    setSubmittedAppNumber(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-full bg-white p-0.5 border border-emerald-500 shadow-sm shrink-0 flex items-center justify-center">
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
                Community Admission Application (Day & Boarding)
              </h3>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Only if not submitted) */}
        {step < 5 && (
          <div className="bg-stone-50 border-b border-stone-200 px-6 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                step >= 1 ? 'bg-emerald-900 text-white' : 'bg-stone-200 text-stone-600'
              }`}>1</span>
              <span className={step === 1 ? 'text-stone-900 font-bold' : 'text-stone-500'}>Student</span>
            </div>
            <span className="text-stone-300">―</span>

            <div className="flex items-center gap-2 font-medium">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                step >= 2 ? 'bg-emerald-900 text-white' : 'bg-stone-200 text-stone-600'
              }`}>2</span>
              <span className={step === 2 ? 'text-stone-900 font-bold' : 'text-stone-500'}>Parent/Guardian</span>
            </div>
            <span className="text-stone-300">―</span>

            <div className="flex items-center gap-2 font-medium">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                step >= 3 ? 'bg-emerald-900 text-white' : 'bg-stone-200 text-stone-600'
              }`}>3</span>
              <span className={step === 3 ? 'text-stone-900 font-bold' : 'text-stone-500'}>Academic & Hifdh</span>
            </div>
            <span className="text-stone-300">―</span>

            <div className="flex items-center gap-2 font-medium">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                step >= 4 ? 'bg-emerald-900 text-white' : 'bg-stone-200 text-stone-600'
              }`}>4</span>
              <span className={step === 4 ? 'text-stone-900 font-bold' : 'text-stone-500'}>Residency</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8 flex-1">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                Applicant Personal Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    First / Given Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Musa"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Surname / Family Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Ssemwogerere"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="Male">Male (Boys Section)</option>
                    <option value="Female">Female (Girls Section)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Class Applying For *
                  </label>
                  <select
                    name="targetForm"
                    value={formData.targetForm}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="Senior 1 (S.1 O-Level Entry)">Senior 1 (S.1 O-Level Entry)</option>
                    <option value="Senior 2 Transfer">Senior 2 Transfer</option>
                    <option value="Senior 3 Transfer">Senior 3 Transfer</option>
                    <option value="Senior 5 (S.5 A-Level BCM)">Senior 5 (BCM - Bio, Chem, Math)</option>
                    <option value="Senior 5 (S.5 A-Level PCM)">Senior 5 (PCM - Phys, Chem, Math)</option>
                    <option value="Senior 5 (S.5 A-Level PCB)">Senior 5 (PCB - Phys, Chem, Bio)</option>
                    <option value="Senior 5 (S.5 A-Level PEM)">Senior 5 (PEM - Phys, Econ, Math)</option>
                    <option value="Senior 5 (S.5 A-Level HEG)">Senior 5 (HEG - Hist, Econ, Geog)</option>
                    <option value="Senior 5 (S.5 A-Level MEA)">Senior 5 (MEA - Math, Econ, Arabic)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Current / Previous School Attended *
                </label>
                <input
                  type="text"
                  required
                  name="currentSchool"
                  value={formData.currentSchool}
                  onChange={handleChange}
                  placeholder="e.g. Mbarara Primary School"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Continue to Parent Particulars</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                Parent or Guardian Particulars
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Hajj Sulaiman Ssemwogerere"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Relationship to Applicant *
                  </label>
                  <select
                    name="parentRelation"
                    value={formData.parentRelation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Legal Guardian">Legal Guardian</option>
                    <option value="Sponsor">Sponsor / Relative</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Mobile Phone Number (SMS alerts) *
                  </label>
                  <input
                    type="tel"
                    required
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX or +256 7XX XXX XXX"
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
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Home District / City *
                  </label>
                  <input
                    type="text"
                    required
                    name="parentDistrict"
                    value={formData.parentDistrict}
                    onChange={handleChange}
                    placeholder="e.g. Mbarara, Isingiro, Sheema, Bushenyi"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Physical Village / Parish / Street *
                  </label>
                  <input
                    type="text"
                    required
                    name="parentAddress"
                    value={formData.parentAddress}
                    onChange={handleChange}
                    placeholder="e.g. Kakoba / Nyamitanga, Mbarara"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Continue to Academic Records</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                Academic & Quranic Preparation
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Previous UNEB Score / Exam Result
                  </label>
                  <select
                    name="previousExamScore"
                    value={formData.previousExamScore}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="PLE Division 1 (Aggregates 4 - 8)">PLE Division 1 (Aggregates 4 - 8)</option>
                    <option value="PLE Division 1 (Aggregates 9 - 12)">PLE Division 1 (Aggregates 9 - 12)</option>
                    <option value="PLE Division 2 (Aggregates 13 - 20)">PLE Division 2 (Aggregates 13 - 20)</option>
                    <option value="UCE Division 1 (For S.5 Entry)">UCE Division 1 (For S.5 Entry)</option>
                    <option value="UCE Division 2 (For S.5 Entry)">UCE Division 2 (For S.5 Entry)</option>
                    <option value="International / Foreign Equivalent">Foreign / International Equivalent</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Quran Memorization Level (Hifdh) *
                  </label>
                  <select
                    name="quranLevel"
                    value={formData.quranLevel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="Beginner (Basic Reading with Tajweed)">Beginner (Reading with basic Tajweed)</option>
                    <option value="1 - 5 Juz' Memorized">1 - 5 Juz' Memorized</option>
                    <option value="6 - 15 Juz' Memorized">6 - 15 Juz' Memorized</option>
                    <option value="16 - 29 Juz' Memorized">16 - 29 Juz' Memorized</option>
                    <option value="Full 30 Juz' (Hafidh of Quran)">Full 30 Juz' Completed (Hafidh)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Arabic Language Level
                  </label>
                  <select
                    name="arabicLevel"
                    value={formData.arabicLevel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="Beginner">Beginner (Letters & Basic Vocabulary)</option>
                    <option value="Intermediate Conversational">Intermediate Conversational</option>
                    <option value="Advanced / Fluent">Advanced Fluent (Grammar & Reading)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Special Talent or Co-Curricular Interest
                  </label>
                  <input
                    type="text"
                    name="specialTalent"
                    value={formData.specialTalent}
                    onChange={handleChange}
                    placeholder="e.g. Football, Debating, Robotics, Taekwondo"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Continue to Residency Preference</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide">
                Residency Mode (Day or Boarding)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Enrollment Mode *
                  </label>
                  <select
                    name="residencyType"
                    value={formData.residencyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="Boarding Hostel (Residential)">Full Boarding Hostel (Residential)</option>
                    <option value="Day Scholar">Day Scholar (With Daily Halal Lunch)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Mbarara Campus Shuttle Bus Required?
                  </label>
                  <select
                    name="needsBus"
                    value={formData.needsBus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  >
                    <option value="No">No / Not Applicable (Boarding / Self Transport)</option>
                    <option value="Yes - Mbarara Central & Kakoba">Yes - Mbarara Central & Kakoba</option>
                    <option value="Yes - Nyamitanga & Katete">Yes - Nyamitanga & Katete</option>
                    <option value="Yes - Ruharo & Biharwe">Yes - Ruharo & Biharwe</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Medical Conditions, Allergies or Dietary Notes
                </label>
                <textarea
                  rows={3}
                  name="medicalDietaryNotes"
                  value={formData.medicalDietaryNotes}
                  onChange={handleChange}
                  placeholder="Specify any medical conditions or dietary requirements..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
                />
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
                <span className="font-bold text-stone-900 block mb-1">Community Declaration & Honor Code:</span>
                I confirm that all particulars are accurate. If admitted to Shuhadae Islamic Secondary School, the applicant will abide by Islamic values and school regulations under UMSC Mbarara.
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-black hover:bg-stone-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 cursor-pointer shadow-xs border border-emerald-600"
                >
                  <span>Submit Application</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </form>
          )}

          {step === 5 && submittedAppNumber && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-bold font-serif-brand text-stone-900">
                  Application Successfully Received!
                </h4>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Alhamdulillah! We have received the admission application for <strong>{formData.firstName} {formData.lastName}</strong> for {formData.targetForm}.
                </p>
              </div>

              {/* Reference Ticket Box */}
              <div className="bg-stone-50 border border-stone-300 rounded-xl p-5 max-w-sm mx-auto text-left space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Application Number:</span>
                  <span className="font-mono font-bold text-emerald-950 text-sm">{submittedAppNumber}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Applicant:</span>
                  <span className="font-semibold text-stone-800">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Class:</span>
                  <span className="font-semibold text-stone-800">{formData.targetForm}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-stone-200 pt-2">
                  <span className="text-stone-500">School Office:</span>
                  <span className="font-semibold text-stone-800">P.O. Box 1472, Mbarara</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Helplines:</span>
                  <span className="font-mono text-emerald-900 font-semibold text-[11px]">0751933301 / 0700173448</span>
                </div>
              </div>

              <div className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                For inquiries or hardcopy submission, contact the school office at <strong>shuhadaeislamicss@gmail.com</strong> or call <strong>0751933301 / 0700173448 / 0700850069</strong>.
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
