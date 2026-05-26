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
    description: 'AI-assisted architecture workflow platform built with full-stack engineering.',
    thumbnail: '/images/ss.jpg',
    featured: true,
    year: '2026',
    tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'AI Integration', 'Web3 Ready'],
    live: 'https://arch-flow-mu.vercel.app/',
    github: 'https://github.com/faezur/ArchFlow',
    data: {
      tagline: 'AI-powered platform to convert 2D floor plans into visual architectural renders using a structured workflow system.',
      problem:
        'Architects struggle to convert 2D plans into clear visual presentations. The workflow is fragmented — switching between drawings, references, client feedback, and final renders slows down delivery and reduces clarity.',
      solution:
        'ArchFlow is a full-stack platform that transforms raw 2D plans into structured, presentation-ready visual workflows.  It combines visualization, authentication, and project management into one streamlined system.',
      features: [
        '• Two-stage AI pipeline (Groq + Stability AI) for plan-to-render conversion', 
        '• Fast response time (~5–8 seconds) with optimized API handling',  
        '• Secure authentication using JWT and Google OAuth',
        '• Scalable backend APIs with retry logic (429 & 5xx handling)',  
        '• Cloudinary integration for image storage and delivery',  
        '• MongoDB-based render history and project tracking'
      ],
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT','Cloudinary', 'Groq','Stability AI','Vercel','Railway'],
      screenshots: [
        { title: 'Project Home', image: '/images/ss.jpg' },
        { title: 'Project Generate', image: '/images/generate.png' },
        { title: 'Project Render', image: '/images/generate1.jpg' },
        { title: 'Project History', image: '/images/history.png' },
      ],
      challenges:
        'Integrating a design-heavy architecture workflow with a clean and scalable web application. Handling unreliable external AI APIs using retry logic and ensuring consistent performance while maintaining fast response times.',
      architectureLogic:
        'The system is designed around real-world architecture workflows — from plan analysis to final presentation. ',
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
    description: 'Modern residential elevation and planning for a premium urban home.',
    thumbnail: '/images/ELEVATION.png',
    featured: true,
    location: 'India',
    year: '2023',
    tools: ['AutoCAD', 'SketchUp', 'Residential Planning', 'Elevation Design'],
    data: {
      projectType: 'Luxury residential design',
      plotSize: 'Residential plot',
      clientRequirement:
        'A clean, premium residence with strong front elevation, practical planning, open balcony expression, and refined lighting.',
      intro:
        'The project focuses on balancing modern minimalism with a confident facade language. Planning, elevation, material rhythm, and lighting were treated as one connected design problem.',
      problem:
        'The design needed to create a premium identity without making the facade visually heavy. The layout also had to keep circulation simple while giving the elevation enough depth and hierarchy.',
      solution:
        'The facade uses layered horizontal geometry, framed balcony zones, warm lighting pockets, and material contrast. The planning keeps movement direct and separates public and private spaces clearly.',
      drawings: [
        { title: 'Ground Floor Plan', image: '/images/GF.png' },
        { title: 'First Floor Plan', image: '/images/FF.png' },
      ],
      visuals: [
        { title: 'Front Elevation', image: '/images/ELEVATION.png' },
      ],
      result:
        'The final presentation gives the client a clear view of the home identity, planning logic, and elevation direction before execution.',
    },
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}
