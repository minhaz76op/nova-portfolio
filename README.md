# Nova — 3D Animated Portfolio

A dark, glassmorphic personal portfolio built with React, Three.js
(via `@react-three/fiber` + `@react-three/drei`), Tailwind CSS, and
Framer Motion. Smooth scrolling powered by Lenis.

## Stack

- **Vite + React 18** — build tooling and component model
- **Tailwind CSS** — utility-first styling, custom glass/glow tokens in `tailwind.config.js`
- **@react-three/fiber / drei** — the interactive 3D "Neural Core" hero object and ambient particle field
- **Framer Motion** — page-entry and scroll-reveal animations
- **Lenis** — smooth, inertial scrolling (auto-disabled for `prefers-reduced-motion`)
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx        floating glass nav with mobile menu
    Hero.jsx           headline, bio, CTAs + 3D scene
    HeroScene.jsx       the interactive "Neural Core" 3D object
    ParticleField.jsx  fixed background particle canvas
    Projects.jsx / ProjectCard.jsx   project grid with 3D tilt on hover
    Skills.jsx         floating skill badge groups
    Experience.jsx     glowing-node vertical timeline
    Contact.jsx        interactive form + social links
    Footer.jsx         copyright + live local time
  hooks/
    useSmoothScroll.js  Lenis setup
    useTilt.js          vanilla 3D tilt-on-hover for cards
  data/
    projects.js, skills.js, experience.js   content — edit these to personalize
```

## Personalizing

- Swap the name, bio, and location in `Hero.jsx` and `Footer.jsx`.
- Edit `src/data/*.js` to replace projects, skills, and experience with your own.
- Update social links in `Navbar.jsx` and `Contact.jsx`.
- Colors and fonts live in `tailwind.config.js` under `theme.extend` — the
  `cyan-glow` / `violet-glow` tokens drive the whole neon accent system.

## Performance notes

- The particle field and hero mesh are capped in polycount and use `dpr={[1, 1.8]}`
  / `dpr={[1, 1.5]}` device-pixel-ratio clamps to stay smooth on mobile.
- Lenis and all CSS animations are disabled automatically when the OS-level
  "reduce motion" preference is set.
- Only two point lights are used in the 3D scene to keep the shader cost low.
