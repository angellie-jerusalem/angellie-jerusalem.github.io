# Angellie Jerusalem — Portfolio (React)

React + Vite version of the original HTML/CSS/JS portfolio. Same look, same pages, same behavior.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build locally
```

## Deploy to GitHub Pages

1. Replace the contents of the `angellie-jerusalem.github.io` repo with this project (keep `.github/`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/`.

Routing uses `HashRouter` (`/#/projects/storyhive`), so deep links and refreshes work on GitHub Pages without a 404 workaround.

## Structure

```
src/
  main.jsx              entry (HashRouter)
  App.jsx               routes + contact modal state
  index.css             original styles, adapted for React
  data/                 all content lives here — edit these, not the components
    site.js             name, email, tagline, about text
    skills.js           skill groups and levels
    projects.js         every project (cards, detail pages, nav menu)
    navigation.js       navbar structure, derived from projects
  pages/                Home, About, Skills, Projects, ProjectDetail
  components/           Navbar, Dropdown, ContactModal, ProjectCard,
                        SkillBar, TechTags, DetailSection, Page, ...
  hooks/                useEscapeKey, useMediaQuery
  assets/               profile photo, institute logo
```

## Adding a project

Add one object to `src/data/projects.js`. The card, detail page (`/#/projects/<slug>`) and navbar entry all appear automatically.
