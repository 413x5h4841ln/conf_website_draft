# Student Conference — Static Website Starter

A simple, accessible static site for a student conference. Designed for GitHub Pages.

## ✨ Features
- Landing page (`index.html`)
- Program page (`program.html`)
- Archive of previous years with program/slide links (`archive.html`)
- Contact form (`contact.html`) using Formspree
- Responsive, dark UI with accessible contrast
- No build step — plain HTML/CSS/JS

## 🚀 Deploy on GitHub Pages
1. Create a new public repository on GitHub (e.g., `student-conference`).
2. Upload this folder's contents to the repo (or push via Git).
3. Go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and **/(root)** folder. Save.
5. Your site will be live at `https://<username>.github.io/<repo>/`.

## 📨 Contact Form (Formspree)
- Replace `your-form-id` in `contact.html` with your Formspree endpoint (e.g., `https://formspree.io/f/abcdwxyz`).
- Create the endpoint at https://formspree.io/ (free tier available).
- Optional: add a thank-you page by setting `action` to your endpoint and handling redirects per Formspree docs.

## 🗂️ Customize
- Update dates/venue in `index.html` and `program.html`.
- Add your past program and slide links in `archive.html`.
- Drop images into `assets/img/` (replace `hero.jpg` and `favicon.png`).

## 🧪 Local Preview
Just open `index.html` in your browser (no server needed).

## 🔒 Privacy
This starter collects no analytics. The form posts directly to Formspree.

## 📄 License
MIT — do whatever, no warranty.
