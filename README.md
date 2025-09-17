# GTA-Style Landing — React + GSAP Playground

A small interactive landing page inspired by GTA6 visuals that demonstrates using **GSAP** with **React**: masked intro animation, a custom cursor, and simple parallax text/background movement.

Live demo: https://gta-vi-anshit.vercel.app/

## Features
- Intro SVG text mask that scales & fades into the main site.
- Smooth timeline animation using GSAP.
- Custom cursor that follows the mouse with easing.
- Simple parallax: headline, sky, and background move slightly with mouse.
- Tailwind-style classes (used in the project) — easy to style.

## Tech
- React (functional components + hooks)
- GSAP (`gsap`) and `@gsap/react` hook
- Remix Icon (icons)
- Tailwind CSS (or regular CSS — classes in code assume Tailwind-like utilities)





## Install & run (recommended: Vite)
```bash
# clone
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

# install
npm install
# or
yarn

# dev
npm run dev
# or for CRA
npm start
