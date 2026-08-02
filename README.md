# Huseyn Ashirov — Portfolio

A React + Vite rebuild of the personal portfolio, built entirely from the content
in `src/data/cv.js` (transcribed directly from the CV — no invented facts, companies,
certifications, or projects).

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion (subtle, scroll-triggered reveals)
- lucide-react (icons)

## Structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Skills, Experience, Projects, Education,
                Certificates, CurrentlyLearning, Contact
    ui/         Reusable pieces: Button, SectionHeading, ProjectCard,
                NetworkMesh (hero visual), TopologyDiagram, LinkedinIcon
  data/
    cv.js       Single source of truth for all site content
```

To add a new project later, add an entry to the `projects` array in
`src/data/cv.js` — `ProjectCard` and the grid layout are already built to
scale to more cards.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploying to GitHub Pages (ashirovhuseyn.github.io/portfolio)

`vite.config.js` is already set with `base: '/portfolio/'` to match the
existing GitHub Pages project site. To deploy:

```bash
npm run build
# push the contents of dist/ to the gh-pages branch of the portfolio repo,
# or use a GitHub Action / the `gh-pages` npm package to automate this.
```

## Notes on content accuracy

- The Experience section shows the one role from the CV (Rockvell Tech) —
  no dates were on the CV, so none are shown.
- "Currently Learning" only lists CCNA and RHCSA, since that's the only
  forward-looking learning goal stated in the CV summary.
- The project card uses an illustrative topology diagram (not a screenshot),
  since no project screenshot exists — it visualizes the VLAN/router-on-a-stick
  setup described in the CV.
- No GitHub link appears in the hero because no GitHub profile is listed on
  the CV.
