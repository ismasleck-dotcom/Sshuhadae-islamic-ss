export interface AcademicSubject {
  name: string;
  code: string;
  department: string;
  level: string;
  description: string;
  features: string[];
}

export interface Department {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  headOfDept: string;
  qualification: string;
  subjects: AcademicSubject[];
}

export interface EventItem {
  id: string;
  title: string;
  category: 'academic' | 'islamic' | 'sports' | 'admissions';
  date: string;
  time: string;
  venue: string;
  description: string;
  urgent?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  capacity: string;
  image: string;
  highlights: string[];
}

export const SCHOOL_INFO = {
  name: "Shuhadae Islamic Secondary School",
  shortName: "Shuhadae Secondary Mbarara",
  locationName: "Mbarara, Uganda",
  arabicName: "مدرسة الشهداء الثانوية الإسلامية - مبارارا أوغندا",
  motto: "Islam is Religion and Administration",
  arabicMotto: "الإسلام دين وإدارة",
  schoolType: "A Community Secondary School (Both Day & Boarding)",
  established: 1999,
  affiliation: "Affiliated to Uganda Muslim Supreme Council (UMSC) Mbarara",
  umscDistrict: "Uganda Muslim Supreme Council (UMSC) - Mbarara Muslim District",
  moesRegNumber: "MoES Reg: PSS/S/218",
  unebCenterNumber: "UNEB Center: U1036",
  poBox: "P.O. Box 1472, Mbarara, Uganda",
  phoneNumbers: ["0751933301", "0700173448", "0700850069"],
  phoneFormatted: "0751 933 301 / 0700 173 448 / 0700 850 069",
  intlPhone: "+256 751 933 301",
  email: "shuhadaeislamicss@gmail.com",
  address: "P.O. Box 1472, Mbarara, Uganda (Affiliated to UMSC Mbarara)",
  city: "Mbarara City",
  country: "Uganda",
  coordinates: "0.6072° S, 30.6545° E (Mbarara, Ankole Sub-region)",
  prayerTimes: [
    { name: "Fajr (Dawn)", azan: "05:14 AM", iqamah: "05:30 AM", activity: "Morning Tahajjud & Tahfeez Halaqah" },
    { name: "Dhuhr (Noon)", azan: "12:44 PM", iqamah: "01:00 PM", activity: "Congregational Campus Prayer & Khutbah" },
    { name: "Asr (Afternoon)", azan: "04:02 PM", iqamah: "04:20 PM", activity: "Post-Salah Hadith Reflection & Sports" },
    { name: "Maghrib (Sunset)", azan: "06:46 PM", iqamah: "06:55 PM", activity: "Evening Adhkar, Iftar & Dining" },
    { name: "Isha (Night)", azan: "07:54 PM", iqamah: "08:10 PM", activity: "Night Salah & Supervised Prep" },
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: "sciences",
    name: "Natural Sciences & STEM",
    arabicName: "العلوم الطبيعية والرياضيات",
    description: "UNEB-certified laboratory science and mathematics, cultivating investigative rigor and Quranic reflection on physical creation.",
    headOfDept: "Hajj Dr. Harun S. Kasujja, Ph.D.",
    qualification: "Ph.D. Applied Chemistry (Makerere University), Dip. Ed. (Kyambogo)",
    subjects: [
      {
        name: "Physics (UCE & UACE)",
        code: "PHY-P510",
        department: "sciences",
        level: "Senior 1 to Senior 6",
        description: "Mechanics, heat, wave optics, electricity, magnetism, and modern nuclear physics with weekly UNEB lab practicals.",
        features: ["Double weekly laboratory practicals", "Optics and circuit testing benches", "Western Uganda Science Fair Champions"]
      },
      {
        name: "Chemistry (UCE & UACE)",
        code: "CHM-P525",
        department: "sciences",
        level: "Senior 1 to Senior 6",
        description: "Inorganic, organic, physical chemistry, stoichiometry, and volumetric/qualitative chemical analysis.",
        features: ["Fully compliant fume hoods and gas taps", "Industrial factory tour program", "Continuous assessment practical tests"]
      },
      {
        name: "Biology (UCE & UACE)",
        code: "BIO-P530",
        department: "sciences",
        level: "Senior 1 to Senior 6",
        description: "Cytology, genetics, physiology, ecology, botanical taxonomy, and mammalian dissection and microscopy.",
        features: ["High-power compound microscopes", "Ankole flora and fauna ecological field studies", "Bio-ethics seminars"]
      },
      {
        name: "Mathematics & Sub-Math",
        code: "MTH-P425",
        department: "sciences",
        level: "Senior 1 to Senior 6",
        description: "Pure calculus, vectors, coordinate geometry, mechanics, probability, and numerical methods.",
        features: ["Uganda National Mathematics Contest squad", "Algorithmic problem-solving clinics", "Peer mentoring study circles"]
      }
    ]
  },
  {
    id: "islamic-studies",
    name: "Islamic Theological Studies & Tahfeez",
    arabicName: "الدراسات الإسلامية وحفظ القرآن الكريم",
    description: "Embodying our motto 'Islam is Religion and Administration': integrating Tajweed, 30-Juz' Tahfeez-ul-Qur'an, IRE (UNEB P225), Fiqh, and leadership governance.",
    headOfDept: "Sheikh Abdul-Rahim Mugisha Al-Azhari",
    qualification: "B.A. Shariah (Al-Azhar University, Cairo), Ijazah in Hafs & Shu'bah",
    subjects: [
      {
        name: "Tahfeez-ul-Qur'an (Quran Memorization)",
        code: "QRN-T100",
        department: "islamic-studies",
        level: "Senior 1 to Senior 6",
        description: "Intensive memorization, daily Sabaq, Sabaqi, and Manzil revisions with Sanad-accredited Quran teachers.",
        features: ["Individual Hifdh tracking ledger", "Annual Mbarara Regional Quran Competition", "Sanad-certified Muqri' Sheikhs"]
      },
      {
        name: "Islamic Religious Education (IRE - UNEB P225)",
        code: "IRE-P225",
        department: "islamic-studies",
        level: "UCE & UACE National Exam",
        description: "History of Islam, Prophetic Sirah, Quranic Exegesis, Hadith Sciences, and Islamic social jurisprudence and governance.",
        features: ["100% Principal pass track record in UACE", "Comparative theology modules", "Contemporary moral ethics"]
      },
      {
        name: "Fiqh & Islamic Jurisprudence (Administration & Ethics)",
        code: "FQH-T202",
        department: "islamic-studies",
        level: "Idad & Thanawi",
        description: "Taharah, Salah, Zakat, Sawm, Hajj, Islamic commercial contracts (Mu'amalat), public administration, and inheritance (Mirath).",
        features: ["Classical Shafi'i and Maliki texts", "Contemporary Halal finance", "Youth arbitration and leadership skills"]
      },
      {
        name: "Arabic Language & Literature",
        code: "ARB-P230",
        department: "islamic-studies",
        level: "UCE & UACE National Exam",
        description: "Grammar (Nahw), Morphology (Sarf), Balaghah (Rhetoric), and classical/modern conversational prose.",
        features: ["Arabic speaking campus days", "Arabic debating society", "Direct translation of Islamic texts"]
      }
    ]
  },
  {
    id: "humanities",
    name: "Humanities, Languages & Economics",
    arabicName: "العلوم الإنسانية واللغات",
    description: "Developing articulate critical thinkers and ethical administrators through Economics, History, Geography, and Literature.",
    headOfDept: "Ustadh Sulaiman Byaruhanga, M.A.",
    qualification: "M.A. Educational Leadership (IUIU), B.A. History & Economics (Makerere)",
    subjects: [
      {
        name: "Economics (UACE P220)",
        code: "ECO-P220",
        department: "humanities",
        level: "Senior 5 & Senior 6",
        description: "Microeconomics, macroeconomic policies, monetary theory, public finance administration, and development economics.",
        features: ["Case studies on Bank of Uganda & East African Community", "Business plan simulations", "Fiscal policy debate"]
      },
      {
        name: "Geography (UCE & UACE P250)",
        code: "GEO-P250",
        department: "humanities",
        level: "Senior 1 to Senior 6",
        description: "Physical geography, map reading, aerial photograph interpretation, human geography of East Africa and North America.",
        features: ["Field trips to Lake Mburo National Park & Rwenzori", "GIS mapping fundamentals", "Meteorological campus weather station"]
      },
      {
        name: "History & Political Education (UCE & UACE P210)",
        code: "HIS-P210",
        department: "humanities",
        level: "Senior 1 to Senior 6",
        description: "History of East Africa, African Nationalism, Modern European History, public administration, and World Affairs since 1914.",
        features: ["Archival document analysis", "Inter-school debates on African unity", "Model African Union Club"]
      },
      {
        name: "English Language & Literature",
        code: "ENG-P112",
        department: "humanities",
        level: "Senior 1 to Senior 6",
        description: "English composition, comprehension, African prose, Shakespearean drama, and world poetry.",
        features: ["Writers' workshop and school magazine", "Annual English oratory & debate cup", "Public speaking mastery"]
      }
    ]
  },
  {
    id: "ict",
    name: "ICT & Technological Innovation",
    arabicName: "تكنولوجيا المعلومات والاتصالات",
    description: "Equipping young Muslims with digital literacy, computer applications, programming, and administrative software proficiency.",
    headOfDept: "Mr. Farouq Tumwesigye, B.Sc.",
    qualification: "B.Sc. Information Technology (Mbarara University of Science & Technology - MUST)",
    subjects: [
      {
        name: "Subsidiary ICT (UACE P475)",
        code: "ICT-P475",
        department: "ict",
        level: "Senior 5 & Senior 6 (Compulsory)",
        description: "Spreadsheets, word processing, relational databases, web authoring, and presentation tools.",
        features: ["UNEB ICT practical examination suite", "Individual student workstations", "High-speed internet research"]
      },
      {
        name: "Computer Studies (UCE New Curriculum)",
        code: "CSC-840",
        department: "ict",
        level: "Senior 1 to Senior 4",
        description: "Algorithm development, introduction to Python, digital safety, computer hardware, and networks.",
        features: ["Coding club projects", "Robotics and electronics tinkering", "Ethical cybersecurity principles"]
      }
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "campus-mosque",
    title: "Masjid As-Shuhadae & Tahfeez Sanctuary",
    category: "Spiritual & Administrative Center",
    description: "A serene 1,200-capacity central mosque located on the school hill in Mbarara, reflecting our motto 'Islam is Religion and Administration', featuring acoustic arches and dedicated Tahfeez halaqahs.",
    capacity: "1,200 Worshippers",
    image: "/src/assets/images/hero_shuhadae_campus_1792997837418.jpg",
    highlights: ["Solar lighting & purified wudu facilities", "Daily 5 congregational prayers & Friday Jumu'ah", "Acoustic recitation dome"]
  },
  {
    id: "science-complex",
    title: "Ibn Al-Haytham Science Laboratories",
    category: "Academic STEM",
    description: "Three fully equipped UNEB-certified laboratories for Physics, Chemistry, and Biology with dedicated gas manifolds, optical stations, and preparation rooms.",
    capacity: "70 Students per Lab",
    image: "/src/assets/images/academic_science_lab_1792997838553.jpg",
    highlights: ["Compliant with UNEB practical exam standards", "Digital electronic balances & microscopes", "Regular mock practical assessments"]
  },
  {
    id: "scholastic-library",
    title: "Bayt Al-Hikmah Main Library & ICT Lab",
    category: "Research & E-Learning",
    description: "Comprehensive multi-level library with over 18,000 physical volumes, Islamic classical texts (Kutub), and a connected 60-seat ICT digital learning center.",
    capacity: "250 Readers",
    image: "/src/assets/images/islamic_library_tahfeedh_1792997839724.jpg",
    highlights: ["Curriculum textbooks for all subjects", "Silent study cubicles", "E-library access for Senior 5 & 6 scholars"]
  },
  {
    id: "sports-grounds",
    title: "Al-Fursan Athletics Ground & Sports Complex",
    category: "Athletics & Physical Fitness",
    description: "Spacious green football pitch, running track, basketball and netball courts overlooking the scenic hills of Mbarara, supporting UMEA and district sports galas.",
    capacity: "1,500 Spectators",
    image: "/src/assets/images/campus_sports_athletics_1792997839132.jpg",
    highlights: ["Standard football pitch", "Volleyball, basketball & netball courts", "Islamic martial arts, athletics & archery"]
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "ev-1",
    title: "2026/2027 Senior One (S.1) & Senior Five (S.5) Entrance Examinations",
    category: "admissions",
    date: "Saturday, November 21, 2026",
    time: "08:00 AM - 01:00 PM EAT",
    venue: "Main Hall, Shuhadae Campus, Mbarara",
    description: "Written entrance assessments in Mathematics, English, General Science, and Arabic/Islamic knowledge for PLE and UCE leavers.",
    urgent: true
  },
  {
    id: "ev-2",
    title: "Western Uganda Inter-School Quran & Hadith Championship",
    category: "islamic",
    date: "Saturday - Sunday, December 5-6, 2026",
    time: "09:00 AM Daily",
    venue: "Masjid As-Shuhadae, Mbarara",
    description: "Hosting 30 Islamic secondary schools across Western Uganda competing in 30 Juz', 15 Juz', and 5 Juz' under UMSC Mbarara patronage."
  },
  {
    id: "ev-3",
    title: "UNEB UCE & UACE Candidates Prayer & Dedication Du'a Day",
    category: "academic",
    date: "Friday, October 16, 2026",
    time: "10:00 AM - 01:00 PM",
    venue: "School Quadrangle & Mosque",
    description: "Special Quran recitation and blessing ceremony for Senior 4 and Senior 6 candidates ahead of final national examinations."
  },
  {
    id: "ev-4",
    title: "Annual General Parents-Teachers Association (PTA) Meeting",
    category: "academic",
    date: "Sunday, January 17, 2027",
    time: "09:00 AM - 02:00 PM",
    venue: "Shuhadae Memorial Pavilion, Mbarara",
    description: "Review of academic performance, infrastructure projects, and student welfare with the Board of Governors and UMSC Mbarara representatives."
  }
];

export const SAMPLE_STUDENT_PORTAL_DATA = {
  studentName: "Musa Abubakar Ssemwogerere",
  regNumber: "SHU/MBR/2024/0219",
  unebIndex: "U1036/042",
  form: "Senior Three (S.3) - Science Stream",
  currentTerm: "Term II, 2026",
  attendance: "98.7%",
  conduct: "Exceptional (Mumtaz - ممتاز)",
  aggregates: "Division 1 (Aggregate 12)",
  rank: "3rd out of 142 Students",
  tahfeedhStatus: {
    juzCompleted: 22,
    currentSurah: "Surah Maryam (Juz' 16)",
    tajweedGrade: "A+ (Excellent Ahkam & Makharij)",
    weeklyTarget: "12 Pages Memorized + 30 Pages Muraja'ah"
  },
  subjects: [
    { name: "Mathematics", score: 92, grade: "D1", teacher: "Mr. Kato Francis" },
    { name: "Physics", score: 88, grade: "D1", teacher: "Dr. Kasujja H." },
    { name: "Chemistry", score: 86, grade: "D1", teacher: "Mrs. Nakanwagi S." },
    { name: "Biology", score: 90, grade: "D1", teacher: "Mr. Bwambale J." },
    { name: "Islamic Religious Ed (IRE)", score: 97, grade: "D1", teacher: "Sheikh Mugisha A." },
    { name: "Arabic Language", score: 94, grade: "D1", teacher: "Ustadh Byaruhanga" },
    { name: "English Language", score: 85, grade: "D1", teacher: "Ms. Asiimwe Grace" },
    { name: "Geography", score: 89, grade: "D1", teacher: "Mr. Mwesigwa R." },
    { name: "History & Political Ed", score: 91, grade: "D1", teacher: "Mr. Tumusiime P." },
    { name: "Computer Studies", score: 95, grade: "D1", teacher: "Mr. Tumwesigye F." }
  ]
};

export const FEE_STRUCTURE_DATA = {
  currencies: ["UGX", "USD"],
  exchangeRate: 3800,
  levels: [
    {
      id: "s1-s2",
      name: "O-Level Lower Secondary (Senior 1 & 2)",
      dayTuitionUGX: 750000,
      boardTuitionUGX: 1350000,
      description: "NCDC Competency-Based Curriculum foundation with integrated Arabic, Tahfeez, and STEM practicals."
    },
    {
      id: "s3-s4",
      name: "O-Level Candidate Classes (Senior 3 & 4 - UCE)",
      dayTuitionUGX: 850000,
      boardTuitionUGX: 1480000,
      description: "Intensive UNEB examination preparation, science practical mocks, and Tahfeez completion track."
    },
    {
      id: "s5-s6",
      name: "A-Level Advanced High School (Senior 5 & 6 - UACE)",
      dayTuitionUGX: 950000,
      boardTuitionUGX: 1650000,
      description: "Direct university preparation in Sciences (BCM, PCM, PCB, PEM) and Arts/Humanities (HEG, MEA, HEL)."
    }
  ],
  addons: [
    { id: "tahfeedh-intensive", name: "Intensive Residential Tahfeez Sanad Program", costUGX: 250000 },
    { id: "transport-mbarara", name: "Daily Campus Shuttle Bus (Mbarara City & Suburbs)", costUGX: 300000 },
    { id: "uneb-practical-lab", name: "Senior Science Laboratory & Chemicals Subsidy", costUGX: 150000 },
    { id: "ict-robotics", name: "Computer Programming & Robotics Lab Access", costUGX: 120000 },
    { id: "sports-taekwondo", name: "Martial Arts & Athletics Academy", costUGX: 100000 }
  ]
};
