# Statisticon Conference Website

A simple, fast, and professional website for the **Statisticon** conference.

## Key points
- **Site of Statisticon conference**
- **Built with [Hugo](https://gohugo.io/)**
- **Program is generated from a corresponding YAML data file**

---

## Quick start

```bash
# 1) Install Hugo (https://gohugo.io/installation/)
# 2) Run the local dev server
hugo server -D

# 3) Build for production (outputs to ./public)
hugo
```

## Structure

```
├── content/
│   ├── _index.md          # Landing page (supports a top banner image)
│   ├── timetable.md       # Timetable page (type: timetable)
│   ├── contact.md         # Contact page
│   ├── archive.md         # Archive page (placeholder)
│   └── news/              # News (blog-style) section
│       ├── _index.md
│       └── <article>/index.md  # page bundles for posts
├── data/
│   └── timetable.yaml     # Source of the conference program
├── layouts/
│   ├── _default/
│   │   ├── baseof.html    # Global layout shell (header, footer, theme)
│   │   └── single.html    # Generic single page template
│   ├── index.html         # Home page layout
│   ├── news/
│   │   ├── list.html      # News list (paginated)
│   │   └── single.html    # News article template
│   └── partials/
│       └── timetable.html # Renders program per day from YAML
└── static/
    ├── css/main.css       # Theme styles
    └── images/            # Static assets (e.g., banner/logo)
```

## Conference Program (YAML-driven)

Edit `data/timetable.yaml` to manage the schedule. The site renders **one table per day**, and each row is a **time slot**:

```yaml
- date: "2025-09-18"
  sessions:
    - slot: "08:30-09:00"
      speaker: "Registration Desk"
      topic: "Check-in & Coffee"
    - slot: "09:00-09:30"
      speaker: "Linh Tran"
      topic: "Opening Keynote: Introduction to Hugo"
- date: "2025-09-19"
  sessions:
    - slot: "09:00-09:45"
      speaker: "Jasper van Dijk"
      topic: "Performance Tips"
```

The timetable is available at **`/timetable/`** and is linked in the header as **Program**.

## Adding News Articles

Create a new article (recommended: page bundle so you can include images):

```bash
hugo new news/welcome/index.md
```

Then edit the front matter and body:

```md
---
title: "Welcome to Statisticon"
date: 2025-09-05
author: "Team Statisticon"
summary: "Kicking off our new News section with highlights and key dates."
draft: false
---

Intro paragraph. <!--more-->

Full article body...
```

Your article will appear at **`/news/`** and at its own permalink.

## Pages & Navigation

- **Home** — `/`
- **News** — `/news/` (blog-style list + article pages)
- **Program** — `/timetable/` (generated from `data/timetable.yaml`)
- **Contact** — `/contact/`
- **Archive** — `/archive/` (placeholder page)

## Theming

A clean, professional theme is included via `static/css/main.css`, with responsive typography, sticky header, and styled tables. The layout shell lives in `layouts/_default/baseof.html`.

---

## Todos
- **Archive page with programms of previous conferences**
  - Suggested approach: create a `data/archive/` folder with per-year YAML files (e.g., `2019.yaml`, `2020.yaml`) and add a new layout to render them on `/archive/`.

---

## Deployment

Any static host works (Netlify, GitHub Pages, Cloudflare Pages, S3, etc.):

```bash
hugo           # builds to ./public
```

Upload the `public/` folder to your host of choice.
