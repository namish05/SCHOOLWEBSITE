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
  locality: 'C.C. Road (Uma Nagar)',
  fullAddress: 'C.C. Road, Uma Nagar, Deoria, Uttar Pradesh 274001',
  rating: '4.6',
  reviewsCount: '5+',
  phone: '+91 77030 17100',
  phoneAlt: '+91 77030 17200',
  phoneExtra: '+91 77030 17300',
  email: 'info@hillwoodsacademy.in',
  admissionsEmail: 'admissions@hillwoodsacademy.in',
  mapEmbedQuery: 'Hillwoods Academy, CC Road, Uma Nagar, Deoria, Uttar Pradesh 274001',
  socials: {
    facebook: 'https://www.facebook.com/hillwoodsdeoria/',
    instagram: 'https://www.instagram.com/hillwoodsacademy/',
    whatsapp: 'https://wa.me/917703017100?text=Hello%20Hillwoods%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions.',
  },
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Notices', to: '/#notices' },
  { label: 'Branches', to: '/#branches' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const initialNotices = [
  {
    id: 'notice-1',
    title: 'Admissions Open for Academic Session 2025-26',
    date: '2025-01-15',
    category: 'Admissions',
    badge: 'Important',
    content:
      'Registration and admission inquiries are now actively open for Classes Nursery to Class VIII across all 3 branches: C.C. Road (Uma Nagar), Saket Nagar, and M. S. Academy (Musaila Khurd). Parents can submit an online inquiry or visit campus during office hours (Mon–Sat 7:00 AM – 3:00 PM).',
    link: '/admissions',
    linkText: 'Apply for Admission',
    isUrgent: true,
  },
  {
    id: 'notice-2',
    title: 'Annual Sports Meet (Udaan) Schedule Announced',
    date: '2024-12-10',
    category: 'Sports',
    badge: 'Events',
    content:
      'The Annual Sports Meet "Udaan" is organized at the Sports Stadium, Deoria. Students from all grades will participate in athletic events, track & field races, march past, and award distribution ceremonies.',
    link: '/gallery',
    linkText: 'View Sports Gallery',
    isUrgent: false,
  },
  {
    id: 'notice-3',
    title: 'Interactive Smart Classrooms & Modern Computer Lab Sessions',
    date: '2024-11-20',
    category: 'Academics',
    badge: 'Facility',
    content:
      'Practical computer classes and smart audio-visual sessions are running regularly. Hands-on coding and digital literacy programs are being conducted for middle school students.',
    link: '/academics',
    linkText: 'Explore Academics',
    isUrgent: false,
  },
  {
    id: 'notice-4',
    title: 'Upcoming Cultural Celebrations & Summer Camp Registration',
    date: '2024-10-05',
    category: 'Events',
    badge: 'Celebrations',
    content:
      'Registrations for upcoming school cultural events and our creative Summer Camp (ice breakers, arts & crafts, dance, music, and team games) are now being accepted.',
    link: '/#branches',
    linkText: 'Branch Details',
    isUrgent: false,
  },
]

export const currentYear = new Date().getFullYear()
export const yearsOfExcellence = currentYear - site.founded

export const heroStats = [
  { label: 'Years of Excellence', value: yearsOfExcellence, suffix: '+' },
  { label: 'Campus Branches', value: 3, suffix: '' },
  { label: 'Classes Offered', value: 'NUR - 8th', suffix: '' },
  { label: 'Parent Satisfaction', value: 99, suffix: '%' },
]

export const marqueeItems = [
  'Classes Nursery to Class VIII',
  'Branch 1: C.C. Road (Uma Nagar), Deoria',
  'Branch 2: Saket Nagar, Deoria',
  'Branch 3: M. S. Academy, Musaila Khurd',
  'Modern Computer Lab',
  'Daily Games Period',
  'Annual Sports Meet (Udaan)',
  'Festive Events & Celebrations',
  'Smart Classrooms',
  'Dedicated to Excellence Since 2010',
]

export const homePrograms = [
  {
    title: 'Early Years',
    range: 'Nursery – KG / UKG',
    description:
      'Play-based learning building curiosity, foundational phonics, sensory exploration, and motor skills in a joyful atmosphere.',
    icon: 'Sprout',
  },
  {
    title: 'Lower Primary',
    range: 'Grades I – III',
    description:
      'Strong foundations in reading, writing, numbers, environmental studies, and creative arts with attentive mentoring.',
    icon: 'BookOpen',
  },
  {
    title: 'Upper Primary',
    range: 'Grades IV – V',
    description:
      'Conceptual understanding, math reasoning, introductory computer literacy, science discovery, and regular games periods.',
    icon: 'FlaskConical',
  },
  {
    title: 'Middle School',
    range: 'Grades VI – VIII',
    description:
      'Specialized subject educators, full computer lab practicals, sports meet training, arts & festive participation, preparing for high school.',
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
    title: 'Hillwoods Academy Founded',
    description:
      'Opens its doors on C.C. Road (Uma Nagar), Deoria, with a mission to deliver quality English-medium education.',
  },
  {
    year: '2014',
    title: 'Computer Lab & Games Period',
    description:
      'State-of-the-art computer lab and structured daily games periods launched to build well-rounded learners.',
  },
  {
    year: '2018',
    title: 'Annual Sports Meet (Udaan)',
    description:
      'Inauguration of our marquee sports meet at the Sports Stadium Deoria, fostering athletic excellence.',
  },
  {
    year: '2022',
    title: 'Branch 2 Opens in Saket Nagar',
    description:
      'Hillwoods expands its prominent presence in Deoria with a dedicated new campus in Saket Nagar.',
  },
  {
    year: '2024',
    title: 'Branch 3: M. S. Academy, Musaila Khurd',
    description:
      'M. S. Academy joins the network, bringing CBSE-based English-medium quality education to rural communities.',
  },
  {
    year: String(currentYear),
    title: '3 Branches Serving Deoria',
    description: `${yearsOfExcellence}+ years of excellence educating students from Nursery to Class VIII across Deoria.`,
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
    focus: 'Play-based discovery, phonics, number sense, motor skills, and creative self-expression in a joyful atmosphere.',
  },
  {
    stage: 'Preparatory',
    grades: 'Grades III – V',
    focus: 'Structured language literacy, mathematical problem-solving, environmental science, arts, and regular games periods.',
  },
  {
    stage: 'Middle School',
    grades: 'Grades VI – VIII',
    focus: 'Subject specialization, hands-on computer lab sessions, science projects, sports meet training, and leadership building.',
  },
]

export const facilities = [
  {
    title: 'Modern Computer Lab',
    description:
      'Well-equipped computer lab with modern systems, guided digital literacy, practical coding, and interactive learning software.',
    icon: 'Monitor',
  },
  {
    title: 'Dedicated Games Period',
    description:
      'Daily scheduled games period fostering physical fitness, motor agility, team spirit, sportsmanship, and outdoor play.',
    icon: 'Trophy',
  },
  {
    title: 'Annual Sports Meet (Udaan)',
    description:
      'Grand annual sports meet organized at the Sports Stadium featuring track and field athletics, drills, relay races, and awards.',
    icon: 'Award',
  },
  {
    title: 'Festive Events & Celebrations',
    description:
      'Vibrant school celebrations including Independence Day, Republic Day, cultural festivals, exhibitions, and annual summer camps.',
    icon: 'Palette',
  },
  {
    title: 'Interactive Smart Classrooms',
    description:
      'Technology-enabled classrooms equipped with interactive audio-visual displays to make conceptual learning vivid and engaging.',
    icon: 'Cpu',
  },
  {
    title: 'Library & Reading Room',
    description:
      'A rich collection of children’s literature, reference encyclopedias, illustrated storybooks, and educational periodicals.',
    icon: 'BookOpen',
  },
]

export const schoolBranches = [
  {
    id: 'branch-1',
    name: 'Hillwoods Academy',
    badge: 'Prominent School Branch',
    branchNumber: 'Branch 1',
    locality: 'C.C. Road (Uma Nagar)',
    address: 'C.C. Road, Uma Nagar, Deoria, Uttar Pradesh 274001',
    description:
      'Hillwoods Academy on C.C. Road (Uma Nagar) is one of the prominent school branches in Deoria, Uttar Pradesh. It offers complete schooling from Nursery to Class VIII with modern computer labs, regular games periods, and vibrant sports meets.',
    grades: 'Nursery to Class VIII',
    contactNumbers: [
      { label: 'Helpline 1', phone: '+91 77030 17100' },
      { label: 'Helpline 2', phone: '+91 77030 17200' },
      { label: 'Helpline 3', phone: '+91 77030 17300' },
    ],
    email: 'info@hillwoodsacademy.in',
    highlights: [
      'Classes Nursery to 8th',
      'Modern Computer Lab',
      'Daily Games Period',
      'Annual Sports Meet (Udaan)',
      'Festive & Cultural Events',
    ],
    mapEmbedQuery: 'Hillwoods Academy, CC Road, Uma Nagar, Deoria, Uttar Pradesh 274001',
    isMain: true,
  },
  {
    id: 'branch-2',
    name: 'Hillwoods Academy',
    badge: 'Newly Opened Branch',
    branchNumber: 'Branch 2',
    locality: 'Saket Nagar',
    address: 'Saket Nagar, Deoria, Uttar Pradesh 274001',
    description:
      'Hillwoods Academy in Saket Nagar, Deoria, is a newly opened branch of Hillwoods Academy, expanding one of the prominent school networks in Deoria, Uttar Pradesh with state-of-the-art classrooms and individualized student care.',
    grades: 'Pre-Primary & Primary Schooling',
    contactNumbers: [
      { label: 'Contact 1', phone: '+91 77030 17200' },
      { label: 'Contact 2', phone: '+91 8601007103' },
    ],
    email: 'info@hillwoodsacademy.in',
    highlights: [
      'Newly Opened Modern Campus',
      'Montessori & Play-Way Wing',
      'Creative Arts & Indoor Games',
      'Expanding Prominent School Network',
    ],
    mapEmbedQuery: 'Saket Nagar, Deoria, Uttar Pradesh 274001',
    isMain: false,
  },
  {
    id: 'branch-3',
    name: 'M. S. Academy',
    badge: 'CBSE English-Medium School',
    branchNumber: 'Branch 3',
    locality: 'Musaila Khurd',
    address: 'Musaila Khurd, Deoria, Uttar Pradesh',
    description:
      'M. S. Academy is a CBSE-based English-medium school located in Deoria, Uttar Pradesh, that provides quality education to students in rural and surrounding areas with dedicated educators and strong foundational academics.',
    grades: 'CBSE-Based English Medium',
    contactNumbers: [{ label: 'Contact', phone: '+91 94530 17200' }],
    email: 'msacademy200@gmail.com',
    highlights: [
      'CBSE-Based English Medium',
      'Quality Education in Rural & Surrounding Areas',
      'Dedicated & Caring Faculty',
      'Comprehensive Academic & Moral Growth',
    ],
    mapEmbedQuery: 'Musaila Khurd, Deoria, Uttar Pradesh',
    isMain: false,
  },
]

export const admissionSteps = [
  {
    step: '01',
    title: 'Submit an Inquiry',
    description: "Share your child's details through our online form or in person at any of our branches.",
  },
  {
    step: '02',
    title: 'Campus Visit',
    description: 'Tour the classrooms, computer lab, and activity areas, and meet our teachers by appointment.',
  },
  {
    step: '03',
    title: 'Interaction & Assessment',
    description: 'A warm, age-appropriate interaction for foundational and primary/middle school admissions.',
  },
  {
    step: '04',
    title: 'Offer of Admission',
    description: 'Families receive the enrollment confirmation along with fee schedule and documentation requirements.',
  },
  {
    step: '05',
    title: 'Enrollment Complete',
    description: "Complete verification and welcome your child to the Hillwoods Academy family.",
  },
]

export const admissionDates = [
  { label: 'Inquiries Open', value: 'Open for Session 2025-26' },
  { label: 'Campus Visits', value: 'Monday – Saturday' },
  { label: 'Classes Offered', value: 'Nursery to Class VIII' },
  { label: 'Branch Options', value: '3 Locations in Deoria' },
]

export const admissionDocuments = [
  'Birth certificate (original + self-attested copy)',
  "Previous school's transfer certificate (for Class I to VIII, if applicable)",
  "Previous academic year's report card",
  '4 passport-size photographs of the student',
  'Aadhar card / Address proof and parent ID proof',
]

export const galleryCategories = [
  'All',
  'Campus',
  'Sports Meet',
  'Festive Events',
  'Activities & Games',
]

export const galleryImages = [
  {
    id: 1,
    title: 'School Campus Building',
    caption: 'Hillwoods Academy building — Nursery to Class VIII (Admissions Open)',
    category: 'Campus',
    src: '/gallery/school-building-campus.jpg',
    h: 'tall',
  },
  {
    id: 2,
    title: 'Annual Sports Meet 2023 (Udaan)',
    caption: 'Annual Sports Meet ceremony at Sports Stadium, Deoria with faculty and distinguished guests',
    category: 'Sports Meet',
    src: '/gallery/annual-sports-meet.jpg',
    h: 'short',
  },
  {
    id: 3,
    title: 'Independence Day Celebration',
    caption: 'Independence Day festive celebration and stage presentation by teachers and students',
    category: 'Festive Events',
    src: '/gallery/independence-day-festive-event.jpg',
    h: 'short',
  },
  {
    id: 4,
    title: 'Creative Art & Games Period Activity',
    caption: 'Students joyfully collaborating on a creative art banner during activity and games period',
    category: 'Activities & Games',
    src: '/gallery/students-art-games-activity.jpg',
    h: 'tall',
  },
  {
    id: 5,
    title: 'Summer Camp Discovery',
    caption: 'Summer Camp activities: Ice breaker games, art & craft, dance & movement, music and team building',
    category: 'Festive Events',
    src: '/gallery/summer-camp-activities.jpg',
    h: 'tall',
  },
]

export const contactDepartments = [
  { label: 'Branch 1 (C.C. Road, Uma Nagar)', value: '+91 77030 17100 / 17200 / 17300' },
  { label: 'Branch 2 (Saket Nagar)', value: '+91 77030 17200 / 8601007103' },
  { label: 'Branch 3 (M. S. Academy, Musaila Khurd)', value: '+91 94530 17200' },
  { label: 'M. S. Academy Email', value: 'msacademy200@gmail.com' },
  { label: 'General & Admissions Email', value: site.email },
]

export const officeHours = [
  { day: 'Monday – Saturday', hours: '7:00 AM – 3:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export const detailedOperatingHours = [
  { day: 'Monday', hours: '7:00 AM – 3:00 PM', isOpen: true },
  { day: 'Tuesday', hours: '7:00 AM – 3:00 PM', isOpen: true },
  { day: 'Wednesday', hours: '7:00 AM – 3:00 PM', isOpen: true },
  { day: 'Thursday', hours: '7:00 AM – 3:00 PM', isOpen: true },
  { day: 'Friday', hours: '7:00 AM – 3:00 PM', isOpen: true },
  { day: 'Saturday', hours: '7:00 AM – 3:00 PM', isOpen: true },
  { day: 'Sunday', hours: 'Closed', isOpen: false },
]

export const schoolInfoData = {
  rating: '4.6',
  reviewsCount: '5+',
  location: 'C.C. Road (Uma Nagar), Deoria & 3 Branches',
  overview:
    'Hillwoods Academy on C.C. Road (Uma Nagar), Deoria is a prominent secondary educational institution offering quality education from Nursery to Class VIII. Equipped with a modern computer lab, daily games periods, grand annual sports meets, and vibrant festive celebrations, we foster both academic excellence and character in every child across our 3 school branches.',
  curriculum:
    'We offer a balanced curriculum combining foundational academics, computer science, creative arts, and physical education. Designed for students from Nursery through Class VIII, our program builds strong concepts and life skills.',
  levelsOfSchooling: [
    {
      title: 'Primary Schooling',
      range: 'Classes Nursery – V',
      description:
        'Catering to foundational early years and primary grades, building strong literacy, numeracy, environmental discovery, and inquisitive habits in an attentive, caring environment.',
    },
    {
      title: 'Secondary / Middle Schooling',
      range: 'Classes VI – VIII',
      description:
        'Structured academic framework with subject-matter specialists, dedicated computer laboratory, daily games period, annual sports meet, and vibrant co-curricular activities.',
    },
  ],
  governance:
    'Hillwoods Academy maintains transparent, effective governance across all three branches (C.C. Road Uma Nagar, Saket Nagar, and M. S. Academy Musaila Khurd) ensuring parents and students experience a disciplined, safe, and organized educational environment.',
  facilities:
    'Our campuses feature top facilities including a modern computer lab, daily games period, annual sports meets, festive events & celebrations, interactive smart classrooms, a library, and creative art zones.',
  admissions: {
    title: 'Admissions Open (Nursery to Class VIII)',
    description:
      'Admissions are open for Nursery through Class VIII across our branches in Deoria. We welcome inquiries from families seeking quality English-medium education with personal teacher attention.',
    guidance:
      'For detailed admission guidance, fee details, and registration forms, visit our main campus on C.C. Road (Uma Nagar), our Saket Nagar branch, or M. S. Academy in Musaila Khurd, or call our helplines.',
  },
}

export const schoolFaqs = [
  {
    question: 'Which classes are taught at Hillwoods Academy?',
    answer:
      'Hillwoods Academy is a secondary institution educating students from Nursery up to Class VIII (8th), with strong foundational learning, middle-school specialization, and complete co-curricular development.',
  },
  {
    question: 'What are the three school branches in Deoria?',
    answer:
      'Our network comprises 3 branches in Deoria: Branch 1 - Hillwoods Academy on C.C. Road (Uma Nagar); Branch 2 - Hillwoods Academy in Saket Nagar; and Branch 3 - M. S. Academy in Musaila Khurd.',
  },
  {
    question: 'What facilities are provided to students?',
    answer:
      'Students benefit from a state-of-the-art computer lab, daily scheduled games periods, grand annual sports meets (Udaan), festive events & celebrations (such as Independence Day and Summer Camps), interactive smart classrooms, and a library.',
  },
  {
    question: 'What are the school hours of operation?',
    answer:
      'The school and administrative offices operate Monday through Saturday from 7:00 AM to 3:00 PM. The campus is closed on Sundays.',
  },
  {
    question: 'How can parents contact the branches for admission?',
    answer:
      'You can reach Branch 1 (C.C. Road) at +91 77030 17100 / 17200 / 17300, Branch 2 (Saket Nagar) at +91 77030 17200 / 8601007103, and Branch 3 (M. S. Academy) at +91 94530 17200 or email msacademy200@gmail.com.',
  },
]

export const gradeOptions = [
  'Nursery', 'LKG', 'UKG',
  'Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V',
  'Grade VI', 'Grade VII', 'Grade VIII',
]


