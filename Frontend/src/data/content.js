// ---------------------------------------------------------------------------
// Central content file. Everything editorial (copy, numbers, addresses) lives
// here so the rest of the app stays purely presentational.
//
// NOTE: Stats, staff, dates, and contact details below are SAMPLE placeholder
// content written to fit Hillwoods Academy's profile (Deoria, est. 2010).
// Swap them for the school's real figures before this goes live.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Hillwoods Academy',
  shortName: 'Hillwoods',
  tagline: 'Dedicated to Excellence',
  founded: 2010,
  city: 'Deoria',
  state: 'Uttar Pradesh',
  fullAddress: 'Civil Lines Road, Deoria, Uttar Pradesh 274001',
  phone: '+91 98000 00000',
  phoneAlt: '+91 55350 00000',
  email: 'info@hillwoodsacademy.in',
  admissionsEmail: 'admissions@hillwoodsacademy.in',
  mapEmbedQuery: 'Deoria, Uttar Pradesh, India',
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const currentYear = new Date().getFullYear()
export const yearsOfExcellence = currentYear - site.founded

export const heroStats = [
  { label: 'Years of Excellence', value: yearsOfExcellence, suffix: '+' },
  { label: 'Students on Campus', value: 2400, suffix: '+' },
  { label: 'Expert Faculty', value: 130, suffix: '+' },
  { label: 'Board Result', value: 100, suffix: '%' },
]

export const marqueeItems = [
  'CBSE Affiliated',
  'Est. 2010',
  '8-Acre Campus',
  'Smart Classrooms',
  'STEM & Robotics Lab',
  '20+ Co-curricular Clubs',
  'Deoria, Uttar Pradesh',
  'Dedicated to Excellence',
]

export const homePrograms = [
  {
    title: 'Early Years',
    range: 'Nursery – KG',
    description:
      'Play-based learning that builds curiosity, language, and motor skills through story, song, and structured discovery.',
    icon: 'Sprout',
  },
  {
    title: 'Primary School',
    range: 'Grades I – V',
    description:
      'A strong foundation in literacy and numeracy alongside art, music, and values education in small, attentive classrooms.',
    icon: 'BookOpen',
  },
  {
    title: 'Middle School',
    range: 'Grades VI – VIII',
    description:
      'Subject specialists take over, with hands-on labs, coding, and the first electives that let students find their strengths.',
    icon: 'FlaskConical',
  },
  {
    title: 'Senior School',
    range: 'Grades IX – XII',
    description:
      'CBSE board preparation across Science, Commerce, and Humanities streams, with dedicated mentoring for board and entrance exams.',
    icon: 'GraduationCap',
  },
]

export const homeTestimonials = [
  {
    quote:
      'Every teacher at Hillwoods knows my daughter by name — not just her grades. That kind of attention is rare to find.',
    name: 'Parent, Grade IV',
    role: 'Deoria',
  },
  {
    quote:
      'The robotics lab is the reason I want to study engineering. We built our first working circuit in Grade VII.',
    name: 'Aarav S.',
    role: 'Alumnus, Batch of 2024',
  },
  {
    quote:
      'From the annual sports day to the science exhibition, there is always something building confidence outside the textbook.',
    name: 'Parent, Grade IX',
    role: 'Deoria',
  },
]

export const aboutMission =
  'To nurture confident, capable learners who lead with curiosity and character — equipped not just to clear an exam, but to meet the world that comes after it.'

export const aboutVision =
  'To be the school families in Deoria and the wider Purvanchal region turn to first, known equally for academic rigour and for the kind of adults our students grow up to be.'

export const aboutValues = [
  {
    title: 'Excellence',
    description: 'We hold every student, teacher, and process to a standard worth reaching for — never a ceiling.',
    icon: 'Award',
  },
  {
    title: 'Curiosity',
    description: 'Questions matter more than answers. We build classrooms where asking "why" is the whole point.',
    icon: 'Lightbulb',
  },
  {
    title: 'Character',
    description: 'Discipline, honesty, and respect are taught as deliberately as mathematics and language.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Community',
    description: 'A school is a shared responsibility between teachers, families, and students — we build it together.',
    icon: 'Users',
  },
]

export const timeline = [
  {
    year: '2010',
    title: 'Hillwoods Academy is founded',
    description:
      'Opens its doors in Deoria with two classrooms, a handful of teachers, and a founding class of 64 students.',
  },
  {
    year: '2013',
    title: 'First Board batch graduates',
    description:
      'Our founding Grade X batch sits for CBSE boards for the first time, posting a 100% pass rate.',
  },
  {
    year: '2016',
    title: 'Campus expansion',
    description:
      'A new academic block, library, and playing fields open, growing the campus to its current 8 acres.',
  },
  {
    year: '2019',
    title: 'Smart classrooms & STEM lab',
    description:
      'Every classroom is fitted with interactive boards, and a dedicated robotics and computer science lab opens.',
  },
  {
    year: '2022',
    title: 'Senior Secondary wing opens',
    description:
      'Hillwoods becomes a full K-12 campus, adding Grades XI-XII across Science, Commerce, and Humanities.',
  },
  {
    year: String(currentYear),
    title: 'A growing community',
    description: `${yearsOfExcellence}+ years on, ${heroStats[1].value}+ students and ${heroStats[2].value}+ faculty call Hillwoods home.`,
  },
]

export const leadership = [
  {
    name: 'Dr. Meera Srivastava',
    role: 'Principal',
    bio: 'Twenty-two years in CBSE education, leading Hillwoods since 2015 with a focus on teacher mentorship.',
  },
  {
    name: 'Rajeev Nath Tiwari',
    role: 'Vice Principal, Academics',
    bio: 'Oversees curriculum design and board-exam readiness across the middle and senior school.',
  },
  {
    name: 'Sunita Pandey',
    role: 'Head of Primary Wing',
    bio: 'Shapes the early-years and primary experience, from foundational literacy to first electives.',
  },
]

export const academicStreams = [
  {
    name: 'Science',
    detail: 'Physics, Chemistry, Mathematics/Biology, English, Computer Science or Physical Education',
    forWhom: 'For future engineers, doctors, researchers, and technologists.',
  },
  {
    name: 'Commerce',
    detail: 'Accountancy, Business Studies, Economics, English, Mathematics or Informatics Practices',
    forWhom: 'For future entrepreneurs, analysts, and finance professionals.',
  },
  {
    name: 'Humanities',
    detail: 'History, Political Science, Economics/Psychology, English, Geography or Sociology',
    forWhom: 'For future civil servants, lawyers, writers, and policy thinkers.',
  },
]

export const academicStages = [
  {
    stage: 'Foundational',
    grades: 'Nursery – Grade II',
    focus: 'Play-based learning, phonics, motor skills, and social development.',
  },
  {
    stage: 'Preparatory',
    grades: 'Grades III – V',
    focus: 'Structured literacy and numeracy, environmental studies, first languages.',
  },
  {
    stage: 'Middle',
    grades: 'Grades VI – VIII',
    focus: 'Subject specialisation begins: science labs, coding, a second language, electives.',
  },
  {
    stage: 'Secondary',
    grades: 'Grades IX – X',
    focus: 'Full CBSE curriculum with structured board-exam preparation and career counselling.',
  },
  {
    stage: 'Senior Secondary',
    grades: 'Grades XI – XII',
    focus: 'Stream specialisation, entrance-exam coaching, and independent research projects.',
  },
]

export const facilities = [
  { title: 'Science Laboratories', description: 'Dedicated Physics, Chemistry, and Biology labs equipped for CBSE practicals.', icon: 'FlaskConical' },
  { title: 'STEM & Robotics Lab', description: 'Hands-on coding, electronics, and robotics from Grade VI onward.', icon: 'Cpu' },
  { title: 'Library & Reading Room', description: 'Over 12,000 titles across fiction, reference, and periodicals.', icon: 'BookOpen' },
  { title: 'Sports Complex', description: 'Cricket and football fields, basketball & volleyball courts, and an indoor games hall.', icon: 'Trophy' },
  { title: 'Art & Music Studio', description: 'Dedicated space for visual arts, classical and contemporary music, and dance.', icon: 'Palette' },
  { title: 'Smart Classrooms', description: 'Interactive boards and digital learning tools in every classroom, K-12.', icon: 'Monitor' },
]

export const admissionSteps = [
  {
    step: '01',
    title: 'Submit an Inquiry',
    description: "Share your child's details through our online form or in person at the admissions office.",
  },
  {
    step: '02',
    title: 'Campus Visit',
    description: 'Tour the campus, meet faculty, and see classrooms in session by appointment.',
  },
  {
    step: '03',
    title: 'Assessment',
    description: 'An age-appropriate interaction or written assessment, depending on the grade applied for.',
  },
  {
    step: '04',
    title: 'Offer of Admission',
    description: 'Families receive a decision along with fee structure and required documentation.',
  },
  {
    step: '05',
    title: 'Enrollment',
    description: "Complete documentation and fee payment to confirm your child's seat.",
  },
]

export const admissionDates = [
  { label: 'Inquiries Open', value: '1 November' },
  { label: 'Campus Tours Begin', value: '15 November' },
  { label: 'Assessment Window', value: 'December – January' },
  { label: 'New Session Begins', value: '1 April' },
]

export const admissionDocuments = [
  'Birth certificate (original + copy)',
  "Previous school's transfer certificate, if applicable",
  "Last academic year's report card",
  '4 passport-size photographs of the student',
  'Address proof and parent ID proof',
]

export const galleryCategories = [
  'All',
  'Campus',
  'Academics',
  'Sports',
  'Arts & Culture',
  'Events',
]

export const galleryImages = [
  { id: 1, category: 'Campus', caption: 'Main academic block', seed: 'hw-campus-main', h: 'tall' },
  { id: 2, category: 'Academics', caption: 'Chemistry lab session', seed: 'hw-chem-lab', h: 'short' },
  { id: 3, category: 'Sports', caption: 'Inter-house cricket final', seed: 'hw-cricket', h: 'medium' },
  { id: 4, category: 'Arts & Culture', caption: 'Annual day rehearsal', seed: 'hw-annual-day', h: 'tall' },
  { id: 5, category: 'Events', caption: 'Science exhibition', seed: 'hw-science-fair', h: 'short' },
  { id: 6, category: 'Campus', caption: 'Library reading room', seed: 'hw-library', h: 'medium' },
  { id: 7, category: 'Academics', caption: 'Robotics workshop', seed: 'hw-robotics', h: 'tall' },
  { id: 8, category: 'Sports', caption: 'Basketball court', seed: 'hw-basketball', h: 'short' },
  { id: 9, category: 'Arts & Culture', caption: 'Classical dance recital', seed: 'hw-dance', h: 'medium' },
  { id: 10, category: 'Events', caption: 'Graduation day, Batch 2025', seed: 'hw-graduation', h: 'tall' },
  { id: 11, category: 'Campus', caption: 'Front lawns and assembly ground', seed: 'hw-lawns', h: 'short' },
  { id: 12, category: 'Academics', caption: 'Primary wing classroom', seed: 'hw-classroom', h: 'medium' },
]

export const contactDepartments = [
  { label: 'Front Office', value: site.phone },
  { label: 'Admissions', value: site.phoneAlt },
  { label: 'General Inquiries', value: site.email },
  { label: 'Admissions Office', value: site.admissionsEmail },
]

export const officeHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 4:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export const gradeOptions = [
  'Nursery', 'LKG', 'UKG',
  'Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V',
  'Grade VI', 'Grade VII', 'Grade VIII',
  'Grade IX', 'Grade X', 'Grade XI', 'Grade XII',
]
