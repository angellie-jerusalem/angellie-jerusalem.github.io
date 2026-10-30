const GH = 'https://github.com/angellie-jerusalem';
const PAGES = 'https://angellie-jerusalem.github.io';

export const projects = [
  {
    slug: 'storyhive',
    name: 'StoryHive',
    category: 'Storytelling',
    cardCategory: 'Storytelling',
    cardDescription: 'A story-sharing app built with Flutter for writing and reading stories.',
    heroLabel: 'Storytelling Platform',
    tagline: 'A story-sharing app where writers and readers connect. Built with Flutter and Firebase.',
    overview:
      'StoryHive is a mobile-first platform that empowers writers to share their stories and readers to discover new voices. The app features per-user data isolation, author profiles, and a publishing workflow that makes it easy to go from draft to published.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    features: [
      'Write and publish stories with an intuitive editor',
      'Author profiles to showcase your work',
      'Secure per-user data isolation',
      'Publishing workflow from draft to live',
      'Discover and read stories from other writers',
    ],
    links: [{ label: 'View on GitHub', href: `${GH}/storyhive` }],
  },
  {
    slug: 'portfolio',
    name: 'Personal Portfolio',
    menuName: 'Portfolio Site',
    category: 'Web Development',
    cardCategory: 'Web Development',
    cardDescription: 'My first official portfolio — this site! Built with pure HTML & CSS.',
    heroLabel: 'Web Development',
    tagline: 'My digital home—a responsive portfolio built entirely with HTML and CSS.',
    overview:
      "This portfolio site is my first official web presence. It showcases my projects, skills, and background as a CS student. Built from scratch with HTML and CSS, it's a clean, responsive design that works across all devices.",
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Fully responsive design for mobile and desktop',
      'Multi-page navigation with dropdown menu',
      'Project showcase with GitHub links',
      'Contact form with email integration',
      'Skills section with visual progress bars',
    ],
    links: [{ label: 'View on GitHub', href: `${GH}/portfolio` }],
  },
  {
    slug: 'coffeecrud',
    name: 'Coffee CRUD',
    category: 'Desktop App',
    cardCategory: 'Desktop / CRUD',
    cardDescription: 'A desktop app for managing a coffee menu — add, edit, delete items.',
    heroLabel: 'Desktop Application',
    tagline: 'A desktop app for managing coffee shop menus and inventory with full CRUD operations.',
    overview:
      "Coffee CRUD is a desktop application designed to simplify coffee shop menu and inventory management. It provides an intuitive interface for adding, editing, viewing, and deleting menu items—making it easy to keep your coffee shop's offerings up to date.",
    tech: ['C#', 'Desktop App', 'CRUD Operations'],
    features: [
      'Add new menu items with full details',
      'Edit existing items and their descriptions',
      'Delete items from the menu',
      'View all menu items in an organized list',
      'Clean, user-friendly desktop interface',
    ],
    links: [{ label: 'View on GitHub', href: `${GH}/coffee-crud` }],
  },
  {
    slug: 'regexgame',
    name: 'Reg-Ex Game',
    category: 'Web Game',
    cardCategory: 'Web Game',
    cardDescription: 'A browser game for practicing regular expressions, built with HTML, CSS & JS.',
    heroLabel: 'Web Game',
    tagline: 'A browser-based game that makes learning and practicing regular expressions fun.',
    overview:
      'Reg-Ex Game turns regular expression practice into an interactive challenge. Players write and test regex patterns directly in the browser, getting instant feedback as they work through each level.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Interactive regex challenges with instant feedback',
      'Progressive levels for building regex skills',
      'Clean, distraction-free browser interface',
      'Playable directly, no installation needed',
    ],
    links: [
      { label: 'View on GitHub', href: `${GH}/reg-ex-game` },
      { label: 'Live Demo', href: `${PAGES}/reg-ex-game/` },
    ],
  },
  {
    slug: 'sysflow',
    name: 'System Flow Diagram',
    category: 'Software Design',
    cardCategory: 'Software Design',
    cardDescription: 'A system architecture and flow diagram project for software design coursework.',
    heroLabel: 'Software Design',
    tagline: 'A system architecture and flow diagram project built for software design coursework.',
    overview:
      "This project presents a system's architecture and process flow as an interactive web page, mapping out how different components and processes connect within the overall design.",
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Visual mapping of system architecture',
      'Clear representation of process flow',
      'Built to support software design coursework',
    ],
    links: [
      { label: 'View on GitHub', href: `${GH}/System-Flow-Diagram` },
      { label: 'Live Demo', href: `${PAGES}/System-Flow-Diagram/` },
    ],
  },
  {
    slug: 'productapi',
    name: 'Product API',
    category: 'Backend / API',
    cardCategory: 'Backend / API',
    cardDescription:
      'A REST API for product management with full CRUD operations, built with JavaScript.',
    heroLabel: 'Backend / API',
    tagline: 'A REST API for managing products with full CRUD operations.',
    overview:
      'Product API is a backend service for managing a product catalog. It exposes REST endpoints for creating, reading, updating, and deleting product records, making it a solid foundation for any storefront or inventory system.',
    tech: ['JavaScript', 'Node.js', 'REST API'],
    features: [
      'Create new product records',
      'Read and list existing products',
      'Update product details',
      'Delete products from the catalog',
      'Full CRUD operations via REST endpoints',
    ],
    links: [{ label: 'View on GitHub', href: `${GH}/product-api` }],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
