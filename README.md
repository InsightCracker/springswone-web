# Springswone Foundation — Home Page

React + Tailwind components for the Springswone Foundation homepage, built on the
exact light/dark color tokens from your design template.

## What's here

```
src/
  App.jsx                 entry point — imports the global stylesheet
  HomePage.jsx             composes the full page
  components/
    Navbar.jsx              sticky nav, mobile menu, theme toggle
    Hero.jsx                headline stagger-in + image reveal (the one big animated moment)
    ImpactStats.jsx         numbers count up once scrolled into view
    FocusAreas.jsx          the three program pillars
    About.jsx               mission / vision split
    Testimonial.jsx         quote panel
    DonateCTA.jsx           donation amount + frequency picker (functional state)
    Footer.jsx
    ThemeToggle.jsx
    LogoMark.jsx
  hooks/
    useInView.js            IntersectionObserver, fires once
    useCountUp.js            eased count-up, respects prefers-reduced-motion
  styles/
    theme.css                Google Fonts import + CSS variables for both themes
tailwind.config.js
```

## Setup

1. Drop the `src` contents into your app, and merge `tailwind.config.js` into
   your own (or replace it if this is a fresh project).
2. Make sure `theme.css` is imported once, near the root (`App.jsx` already does
   this).
3. Dark mode is class-based: toggling adds/removes `.dark` on `<html>`, which is
   what `ThemeToggle.jsx` does. `ImpactStats`/`Hero` need no extra wiring.
4. Fonts (Fraunces, Plus Jakarta Sans, Caveat) load via the `@import` in
   `theme.css`. Swap that for `<link>` tags in your `index.html` if you prefer
   not to load fonts through CSS.
5. Replace the two Unsplash image URLs in `Hero.jsx` and `About.jsx` with your
   own photography — they're placeholders.

## Design notes

- Colors are wired as CSS variables (`--color-primary`, etc.) rather than
  hard-coded into Tailwind, so both themes come from the same classes
  (`bg-primary`, `text-text-secondary`, ...) — no `dark:` prefix needed on
  most elements.
- Motion is deliberately concentrated in the hero: the headline stagger-reveals
  word by word, the portrait wipes in, and a soft accent shape floats in the
  background. Everything else uses motion only in response to something the
  visitor does (hover, scroll-into-view for the stat counters) rather than
  decorative entrance animations on every section.
- All animation respects `prefers-reduced-motion`.
