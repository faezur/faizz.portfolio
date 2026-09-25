export const projectTypes = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Architecture', value: 'architecture' },
]

export const projects = [
  {
    id: 'arch-flow',
    type: 'hybrid',
    categories: ['fullstack', 'hybrid'],
    title: 'Arch Flow',
    description:
      'AI-assisted architecture workflow platform built with full-stack engineering.',
    thumbnail: '/images/ss.jpg',
    featured: true,
    year: '2026',
    tools: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
      'AI Integration',
      'Web3 Ready',
    ],
    live: 'https://arch-flow-mu.vercel.app/',
    github: 'https://github.com/faezur/ArchFlow',

    data: {
      tagline:
        'AI-powered platform to convert 2D floor plans into visual architectural renders using a structured workflow system.',

      problem:
        'Architects struggle to convert 2D plans into clear visual presentations. The workflow is fragmented — switching between drawings, references, client feedback, and final renders slows down delivery and reduces clarity.',

      solution:
        'ArchFlow is a full-stack platform that transforms raw 2D plans into structured, presentation-ready visual workflows. It combines visualization, authentication, and project management into one streamlined system.',

      features: [
        '• Two-stage AI pipeline (Groq + Stability AI) for plan-to-render conversion',
        '• Fast response time (~5–8 seconds) with optimized API handling',
        '• Secure authentication using JWT and Google OAuth',
        '• Scalable backend APIs with retry logic (429 & 5xx handling)',
        '• Cloudinary integration for image storage and delivery',
        '• MongoDB-based render history and project tracking',
      ],

      techStack: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'JWT',
        'Cloudinary',
        'Groq',
        'Stability AI',
        'Vercel',
        'Railway',
      ],

      screenshots: [
        { title: 'Project Home', image: '/images/ss.jpg' },
        { title: 'Project Generate', image: '/images/generate.png' },
        { title: 'Project Render', image: '/images/generate1.jpg' },
        { title: 'Project History', image: '/images/history.png' },
      ],

      challenges:
        'Integrating a design-heavy architecture workflow with a clean and scalable web application. Handling unreliable external AI APIs using retry logic and ensuring consistent performance while maintaining fast response times.',

      architectureLogic:
        'The system is designed around real-world architecture workflows — from plan analysis to final presentation.',

      visualization:
        'Instead of treating designs as static images, ArchFlow structures them into a reusable, interactive workflow, bridging architecture thinking with software systems.',

      result:
        'Reduced manual effort in converting architectural plans into visual presentations. Built a real-world AI-powered workflow system demonstrating full-stack development, API handling, and system design thinking.',
    },
  },

  {
    id: 'manoj-saxena-residence',
    type: 'architecture',
    categories: ['architecture'],
    title: 'Mr. Manoj Saxena Residence',
    description:
      'End-to-end residential design covering planning, elevation, interiors, working drawings, 3D visualization, and site execution.',
    thumbnail: '/images/ELEVATION.png',
    featured: true,
    location: 'India',
    year: '2024',

    tools: [
      'AutoCAD',
      'SketchUp',
      'Residential Planning',
      'Elevation Design',
      '3D Visualization',
      'Working Drawings',
    ],

    data: {
      projectType: 'G+1 Residential Residence',

      // IMPORTANT:
      // Replace this once you confirm the exact plot size.
      plotSize: "30'x50'",

      floors: 'Ground + 1',
      bedrooms: '3 Bedrooms',
      parking: '1 Car Parking',
      landscape: 'Front + Rear Garden',

      clientRequirement:
        'A modern G+1 residence designed for practical family living, with three bedrooms, dedicated parking, front and rear garden spaces, attached bathrooms, and a contemporary architectural identity.',

      intro:
        'This was an end-to-end residential project where I handled the design process from initial planning through execution coordination. The work included space planning, elevation design, structural coordination, interior design, 3D visualization, working drawings, client revisions, and regular site visits.',

      problem:
        'The residence needed to accommodate family requirements within the available plot while maintaining clear circulation, privacy between floors, dedicated parking, usable garden areas, and a strong contemporary front elevation.',

      solution:
        'The planning was organized as a G+1 residence with one bedroom on the ground floor and two bedrooms on the first floor. The ground floor includes an attached bathroom, while the first-floor bedrooms have their own attached bathrooms. Front and rear garden spaces were retained to improve openness around the residence, while the facade was developed with layered geometry, material contrast, balcony elements, and controlled lighting.',

      role: [
        'Concept and space planning',
        'Ground and first-floor planning',
        'Elevation design',
        'Structural planning / coordination',
        'Interior design',
        '3D visualization',
        'Working drawings',
        'Client revisions and design iterations',
        'Site visits and execution coordination',
      ],

      drawings: [
        {
          title: 'Ground Floor Plan',
          image: '/images/GF.jpg',
        },
        {
          title: 'First Floor Plan',
          image: '/images/FF2.jpg',
        },
      ],

      visuals: [
        {
          title: 'Front Elevation',
          image: '/images/ELEVATION.png',
        },
      ],

      execution:
        'The project was followed beyond the design stage through site visits and execution coordination, helping translate the drawings and design decisions into the built project.',

      result:
        'The final design brought together functional planning, a contemporary elevation, coordinated interiors, detailed working drawings, and execution support into one complete residential design workflow.',
    },
  },


  {
  id: 'praveen-commercial-residence',
  type: 'architecture',
  categories: ['architecture'],
  title: 'Mr. Praveen Commercial & Residence',
  description:
    'Mixed-use commercial and residential building combining a ground-floor clothing showroom with two residential floors.',
  thumbnail: '/images/Elevation2.png',
  featured: true,
  location: 'India',
  year: '2024',

  tools: [
    'AutoCAD',
    'SketchUp',
    'Commercial Planning',
    'Residential Planning',
    'Structural Coordination',
    'Elevation Design',
  ],

  data: {
    projectType: 'Mixed-use commercial & residential',
    plotSize: "22' × 60'",
    floors: 'Ground + First + Second',
    bedrooms: '3 Bedrooms',
    parking: 'As per site planning',
    landscape: 'As per site planning',

    clientRequirement:
      'A mixed-use building designed with a complete clothing showroom on the ground floor and residential accommodation across the first and second floors.',

    intro:
      'The project combines a commercial clothing showroom with a private residential layout above. The planning focuses on making the full 22-foot width usable by keeping the central span free of intermediate columns while organizing the upper floors into comfortable private spaces.',

    problem:
      'The building had to accommodate a full commercial clothing showroom at ground level while providing comfortable residential spaces above. A key structural requirement was to keep the 22-foot-wide commercial space free from intermediate columns so the showroom could remain open and flexible.',

    solution:
      'The ground floor was planned as an open clothing showroom, while the first and second floors were organized as residential spaces. The upper floors accommodate three bedrooms with attached toilets and dedicated dressing areas. The structural planning keeps the central 22-foot span free of intermediate columns, with structural supports positioned at the ends to preserve the usable commercial floor area.',

    role: [
      'Concept and space planning',
      'Ground-floor commercial planning',
      'First-floor residential planning',
      'Second-floor residential planning',
      'Structural planning / coordination',
      'Elevation design',
      'Interior planning',
      '3D visualization',
      'Working drawings',
      'Client revisions and design iterations',
      'Site visits and execution coordination',
    ],

        drawings: [
      {
        title: 'Ground Floor — Commercial Showroom',
        image: null,
        status:
          'Open commercial showroom layout. The ground floor is planned as a clear hall without internal partitions or intermediate columns.',
      },
      {
        title: 'First Floor — Residential Plan',
        image: '/images/praveen-ff.jpg',
      },
      {
        title: 'Second Floor — Residential Plan',
        image: null,
        status:
          'Residential planning is currently under development. The final second-floor layout will be developed according to the evolving requirements.',
      },
    ],

    visuals: [
      {
        title: 'Front Elevation',
        image: '/images/Elevation2.png',
      },
    ],

    execution:
      'The project was developed from planning and structural coordination through working drawings, design revisions, site visits, and execution support.',

    result:
      'The final planning separates the commercial and residential functions while maintaining an open, column-free commercial space and providing private residential accommodation across the upper floors.',
  },
},



  {
    id: 'smart-leads',
    type: 'fullstack',
    categories: ['fullstack'],
    title: 'Smart Leads',
    description:
      'Full-stack lead management system with dashboard analytics, filtering, and workflow tracking.',
    thumbnail: '/images/dashboard.jpg',
    featured: true,
    year: '2026',

    tools: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
    ],

    live: 'https://smart-leads-gilt.vercel.app',
    github: 'https://github.com/faezur/smart-leads',

    data: {
      tagline:
        'Built a full-stack lead management system with CRUD operations, filtering, dashboard analytics, and CSV export.',

      problem:
        'Managing leads manually becomes messy as data grows. There is no clear tracking, filtering, or visibility of lead status across the pipeline.',

      solution:
        'Smart Leads provides a centralized dashboard to manage, filter, and track leads with structured workflows and real-time updates.',

      features: [
        '• CRUD operations for lead management',
        '• Advanced filtering and sorting system',
        '• Dashboard analytics (total, new, qualified, lost)',
        '• Status tracking and workflow updates',
        '• CSV export functionality',
        '• Clean and responsive UI for fast usage',
      ],

      techStack: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'JWT',
        'Vercel',
      ],

      screenshots: [
        {
          title: 'Dashboard Overview',
          image: '/images/dashboard-light.jpg',
        },
        {
          title: 'Add Lead Form',
          image: '/images/add_lead.jpg',
        },
        {
          title: 'Filters & Search',
          image: '/images/filter.jpg',
        },
      ],

      challenges:
        'Handling dynamic filtering and maintaining consistent UI state while managing multiple lead statuses and user actions.',

      architectureLogic:
        'The system is designed around a simple business workflow — capturing, tracking, and converting leads through structured stages.',

      visualization:
        'Instead of raw data tables, the dashboard presents leads in a structured, easy-to-track format with clear status indicators.',

      result:
        'Improved lead tracking clarity and workflow management through a structured full-stack dashboard system.',
    },
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}