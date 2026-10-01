# Scroll-Driven Hero Section Animation

A premium scroll-driven hero section created for a frontend animation assignment.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GSAP
- GSAP ScrollTrigger

## Features

- Responsive above-the-fold hero section
- Letter-spaced headline
- Staggered page-load animations
- Animated statistics
- Scroll-linked central visual
- GSAP ScrollTrigger with scrub interpolation
- Transform-based animations for better performance
- Responsive mobile layout
- Reduced-motion accessibility support
- No local image assets required

## Run Locally

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/scroll-hero-animation.git
cd scroll-hero-animation
```

Then open `index.html` in a browser.

For the best local development experience, use VS Code Live Server.

## GitHub Pages Deployment

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**.
6. GitHub will generate the live URL.

Typical URL:

`https://YOUR-USERNAME.github.io/scroll-hero-animation/`

## Animation Logic

The core hero animation is controlled by GSAP ScrollTrigger:

- `scrub: 1.2` links the animation to scroll position while smoothing movement.
- The main visual uses `translate`, `scale`, and `rotation`.
- Text and statistics fade/move away as the user progresses through the hero.
- Decorative rings rotate at different speeds to create depth.

## Assignment Submission

Live Website:
`PASTE-YOUR-GITHUB-PAGES-LINK-HERE`

GitHub Repository:
`PASTE-YOUR-GITHUB-REPOSITORY-LINK-HERE`
