# Statisticon Conference Website

A simple, fast, and professional website for the **Statisticon** conference.

- **Built with [Hugo](https://gohugo.io/)**
- **Program is generated from a corresponding YAML data file**


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

---
## Todos
- **Archive page with programms of previous conferences**

---

