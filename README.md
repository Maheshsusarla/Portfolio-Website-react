# 💼 Mahesh Susarla | Portfolio Website

A modern, responsive developer portfolio built with **React + Vite**. It showcases my skills, projects, certifications and achievements, with a working contact form, dark/light theme and smooth scroll animations.

🔗 **Live Demo:** https://maheshsusarla.github.io/YOUR-REPO-NAME/

## 📸 Preview

![Portfolio Screenshot](./screenshots/home.png)

## ✨ Features

- 🎨 **Modern UI:** Animated gradient background, glass cards and floating navbar
- 🌙 **Dark / Light Mode:** Theme toggle
- ⌨️ **Typing Effect:** Custom `useTyping` hook in the hero section
- 🎞️ **Scroll Animations:** Sections fade in using `IntersectionObserver` (`useReveal` hook)
- 🧰 **Skills with Logos:** Tech stack grouped by category using Devicon
- 🗂️ **Project Filters:** Filter projects by category
- 📬 **Contact Form:** Form validation and real email delivery using Formspree
- 📱 **Fully Responsive:** Works on mobile, tablet and desktop
- 🗃️ **Data-driven:** All content lives in one file (`src/data.js`)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Library | React (Hooks) |
| Build Tool | Vite |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Form Handling | Formspree |
| Icons | Devicon |
| Deployment | GitHub Pages |

## 📁 Project Structure

```
src/
 ├─ components/   # Navbar, Hero, About, Skills, Projects, Achievements, Contact, Footer
 ├─ hooks/        # useTyping, useReveal
 ├─ data.js       # All portfolio content
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

## 🚀 Getting Started

```bash
git clone https://github.com/Maheshsusarla/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npm install
```

Create a `.env` file in the root folder:

```
VITE_FORMSPREE_URL=https://formspree.io/f/YOUR_FORM_ID
```

Run the app:

```bash
npm run dev
```

## 🌐 Deployment

```bash
npm run deploy
```

Then go to **Settings → Pages** in your GitHub repo and select the `gh-pages` branch.

## ✏️ Customization

- Edit `src/data.js` to change your name, skills, projects and links
- Add your resume as `public/resume.pdf`
- Change theme colors using `--a1` and `--a2` in `src/index.css`

## 📚 What I Learned

- Building reusable components and passing data with props
- Creating custom hooks (`useTyping`, `useReveal`)
- Handling forms with controlled inputs, validation and API submission
- Using environment variables with Vite
- Deploying a React app to GitHub Pages

## 👤 Author

**Mahesh Susarla**: [GitHub](https://github.com/Maheshsusarla) · [LinkedIn](https://www.linkedin.com/in/mahesh-susarla-509388279/) · maheshsusarla5@gmail.com