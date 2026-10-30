import { projects } from './projects';

// Single source of truth for the navbar.
export const navItems = [
  { type: 'link', label: 'Home', to: '/' },
  {
    type: 'dropdown',
    id: 'about',
    label: 'About',
    items: [
      { to: '/about', eyebrow: 'Profile', title: 'About Me' },
      { to: '/skills', eyebrow: 'Progress', title: 'Skills' },
    ],
  },
  {
    type: 'dropdown',
    id: 'projects',
    label: 'Projects',
    featured: { to: '/projects', title: 'View My Work', sub: 'Browse the full project grid' },
    items: projects.map((p) => ({
      to: `/projects/${p.slug}`,
      eyebrow: p.category,
      title: p.menuName ?? p.name,
    })),
  },
];
