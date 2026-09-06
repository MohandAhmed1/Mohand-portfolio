# Portfolio — Mohand Ahmed

A personal front-end portfolio built with plain HTML, CSS and JavaScript (no build step), designed to be hosted on GitHub Pages. It includes **five real, fully working apps** — not mockups — each with its own visual identity, live data or interactivity, and its own source code.

## Live demo
Once deployed, add the link here: `https://yourusername.github.io/portfolio/`

## Structure
```
.
├── index.html                     # main portfolio page
├── style.css
├── script.js
├── projects/
│   ├── taskflow/                  # multi-board Kanban task manager (React)
│   │   ├── index.html
│   │   ├── screenshot.png
│   │   └── vendor/                # local React + Babel builds (no CDN needed)
│   ├── climate-glance/             # weather dashboard w/ hourly chart + geolocation
│   │   ├── index.html
│   │   └── screenshot.png
│   ├── storefront/                 # shop demo: search, wishlist, quick view, checkout
│   │   ├── index.html
│   │   └── screenshot.png
│   ├── mealbox/                    # recipe finder on a live public API
│   │   ├── index.html
│   │   └── screenshot.png
│   └── pulse/                      # habit tracker: heatmap, streaks, weekly chart
│       ├── index.html
│       └── screenshot.png
└── README.md
```

Each project under `projects/` is fully self-contained — open its `index.html` directly and it works, no server or build step required. The screenshots on the main page are real captures of these apps running, not illustrations.

## What each project actually does

- **Taskflow** — a Kanban board built with React (loaded locally, no bundler). Switch between two boards, drag tasks between columns, edit task text inline, set a priority per task. Everything is saved to `localStorage` per board.
- **Climate Glance** — real weather from the free [Open-Meteo](https://open-meteo.com/) API. Search any city, use your live location (via the browser's Geolocation API + a reverse-geocoding lookup), switch °C/°F, and see a 24-hour temperature curve drawn on an HTML canvas.
- **Storefront (Norrland)** — a full shop demo with a hero banner, category browsing, live search and sorting, a wishlist, quick-view modals, and a real cart. Checkout requires signing in first (demo login provided), and completes with an order confirmation screen — clearly marked as a demo, no real payment is taken.
- **Mealbox** — a recipe finder on the free [TheMealDB](https://www.themealdb.com/api.php) public API. Search by dish name, hit "Surprise me" for a random recipe, view full ingredients and instructions, and save favorites (persisted locally, reloaded from the API by ID).
- **Pulse** — a habit tracker with a GitHub-style contribution heatmap per habit, automatic streak counting, a "today" completion ring, and a canvas-drawn bar chart of completions by day of the week. All data is local to your browser.

## Before you publish — replace these placeholders
- [ ] Email and social links in the **Contact** section (`index.html`) — currently `mohand.ahmed.dev@example.com` and `yourusername`
- [ ] The "Source code" links under each project point to `github.com/yourusername/portfolio/tree/main/projects/...` — update `yourusername` once you push this to your own GitHub account
- [ ] `resume.pdf` — add your résumé file at the project root, or remove the download button
- [ ] Page `<title>` and meta description at the top of `index.html`
- [ ] Over time, swap any of these five for your own real projects — each just needs its own folder under `projects/`, an `index.html`, and a `screenshot.png`

## Running locally
No build tools required — open `index.html` directly in a browser, or serve the whole folder so relative links between pages work smoothly:
```bash
npx serve .
```
This also serves each sub-project at `/projects/taskflow/`, `/projects/climate-glance/`, `/projects/storefront/`, `/projects/mealbox/`, and `/projects/pulse/`.

## Deploying to GitHub Pages
1. Push this whole folder (including `projects/`) to a GitHub repo.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set Source to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://yourusername.github.io/repo-name/` within a minute or two — all project links and screenshots use relative paths, so they work automatically.

## A note on the two live APIs
Climate Glance and Mealbox call real, free, public APIs (Open-Meteo and TheMealDB) directly from the browser — no API key or backend needed. They'll work the same after deployment as they do locally, as long as the visitor's browser can reach those domains.

## Tech
- Main site: HTML5, CSS3 (Grid/Flexbox, custom properties), vanilla JavaScript
- Taskflow: React 18 (local UMD build, no bundler) + Babel standalone for in-browser JSX
- Climate Glance: vanilla JS, Canvas API, Geolocation API, Open-Meteo + BigDataCloud APIs
- Storefront: vanilla JS, no dependencies
- Mealbox: vanilla JS, TheMealDB API
- Pulse: vanilla JS, Canvas API
- Fonts: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
