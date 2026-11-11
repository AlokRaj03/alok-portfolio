export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', short: 'GH', href: 'https://github.com/AlokRaj' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/in/alok-raj1' },
  { label: 'X', short: 'X', href: 'https://x.com/AlokRaj93880' },
  { label: 'Instagram', short: 'IG', href: 'https://www.instagram.com/_ig_alokraj__' },
]

export const skills = [
  { title: 'Languages', note: 'Core', items: ['Java', 'C++', 'JavaScript'] },
  { title: 'Front-end', note: 'Interfaces', items: ['HTML5', 'CSS3', 'React'] },
  { title: 'Back-end & data', note: 'Server side', items: ['Node.js', 'MongoDB'] },
  { title: 'Fundamentals', note: 'Problem solving', items: ['Data structures', 'Algorithms', 'Git & GitHub'] },
  { title: 'Design', note: 'Visual', items: ['Canva', 'Figma', 'UI/UX', 'Posters'] },
  { title: 'Exploring', note: 'Next up', items: ['AI', 'WebGL / Three.js', 'SAP ABAP basics'] },
]

export const projects = [
  {
    type: 'Web',
    status: 'Live',
    statusType: 'live',
    title: 'Student Council TIT Website',
    description: 'A site presenting the council, its leadership, clubs and activities to the college community. I worked on structure, layout and visual identity.',
    tags: ['Responsive', 'Branding'],
    href: 'https://council-website-zeta.vercel.app',
    linkLabel: 'Visit site',
  },
  {
    type: 'Web app',
    status: 'Built',
    statusType: 'build',
    title: 'Dusty Player',
    description: "A music player with a clean interface and local MP3 playback. Online song search with in-app playback is the next thing I'm exploring.",
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    type: 'Concept',
    status: 'Concept',
    statusType: 'idea',
    title: 'Meet-Up',
    description: "A Google Meet-style app with chat, scheduling and a voice assistant called Aasta. Right now it's a concept I'm designing toward.",
    tags: ['React', 'Node.js', 'Planned'],
  },
  {
    type: 'Experience',
    status: 'In progress',
    statusType: 'build',
    title: 'Personal portfolio',
    description: "The site you're on, with a cinematic 3D version still in development. Storytelling first, résumé second.",
    tags: ['Design', 'Motion', 'Three.js'],
  },
  {
    type: 'Visual',
    status: 'Ongoing',
    statusType: 'build',
    title: 'Posters & campaigns',
    description: 'Council graphics, festival and event posters, and social-media campaigns for college activities.',
    tags: ['Canva', 'Figma'],
    href: 'https://www.instagram.com/studentcounciltit',
    linkLabel: '@studentcounciltit',
  },
  {
    type: 'Learning',
    status: 'Practice',
    statusType: 'learn',
    title: 'SAP ABAP exercises',
    description: 'Practice with ABAP syntax, internal tables, loops, conditions and simple purchase-discount logic.',
    tags: ['ABAP', 'Internal tables'],
  },
]

export const journey = [
  {
    title: '2024',
    items: [
      'Started B.Tech in Computer Science & Engineering at TIT Bhopal',
      'Began building foundations in Java and data structures',
      'Joined the Cyber Cop Cell as Assistant Secretary',
    ],
  },
  {
    title: 'Along the way',
    items: [
      'Promoted to Academic Council Officer, Student Council TIT',
      'Worked on the Student Council website and digital identity',
      'Designed posters and campaigns in Canva and Figma',
    ],
  },
  {
    title: 'Now',
    items: [
      'Building Dusty Player and designing the Meet-Up concept',
      'Practising SAP ABAP fundamentals',
      'Creating this portfolio',
    ],
  },
  {
    title: 'Next',
    items: [
      'Stronger Java, DSA and full-stack projects',
      'AI features and interactive 3D on the web',
      'Well-documented open-source work on GitHub',
    ],
  },
]
