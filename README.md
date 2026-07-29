<div align="center">
  <h1>🚀 Rakib Sarker — Portfolio</h1>
  <p>
    <strong>Crafting pixel-perfect, performant web experiences</strong>
  </p>
  <p>
    <a href="https://sarkrakib.vercel.app">Live Demo</a> •
    <a href="mailto:mdrakibsarkar1@gmail.com">Contact</a> •
    <a href="https://github.com/Sark-Rakib">GitHub</a> •
    <a href="https://linkedin.com/in/rakib-sarker-">LinkedIn</a>
  </p>
</div>

---

## ✨ Features

- **6 pages** — Home, About, Projects, Skills, Experience, Contact
- **Dark/Light theme** — Persisted to `localStorage`, respects system preference
- **Responsive design** — Fully mobile-optimized with Tailwind CSS breakpoints
- **Scroll animations** — Framer Motion powered entrance animations throughout
- **Typewriter hero** — Animated name and role on the homepage
- **Skill progress bars** — Animated bars showing proficiency levels
- **Project showcase** — 4 featured projects with screenshots and links
- **Contact form** — Functional form with validation
- **Scroll progress indicator** — Thin progress bar at the top of the page
- **Reduced motion support** — Respects `prefers-reduced-motion`

## 🛠️ Tech Stack

| Technology                                               | Purpose                         |
| -------------------------------------------------------- | ------------------------------- |
| [Next.js 16](https://nextjs.org)                         | React framework with App Router |
| [React 19](https://react.dev)                            | UI library                      |
| [Tailwind CSS v4](https://tailwindcss.com)               | Utility-first styling           |
| [Framer Motion 12](https://www.framer.com/motion)        | Animations                      |
| [React Icons](https://react-icons.github.io/react-icons) | Icon set (Ionicons 5)           |
| [React Compiler](https://react.dev/learn/react-compiler) | Automatic memoization           |
| [Geist Font](https://vercel.com/font)                    | Typography via `next/font`      |

## 📄 Pages

| Route         | Page                                                   |
| ------------- | ------------------------------------------------------ |
| `/`           | Home — Hero with typewriter effect, CTAs, social links |
| `/about`      | About — Bio, stats, skills, resume download            |
| `/projects`   | Projects — 4 project cards with screenshots & links    |
| `/skills`     | Skills — 4 categories with animated progress bars      |
| `/experience` | Experience — Timeline view of work history             |
| `/contact`    | Contact — Form, info card, social links                |

## 🚀 Getting Started

```bash
git clone https://github.com/Sark-Rakib/rakib-sarker-portfolio.git
cd rakib-sarker-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Homepage
│   ├── about/page.jsx
│   ├── contact/page.jsx
│   ├── experience/page.jsx
│   ├── projects/page.jsx
│   └── skills/page.jsx
├── components/
│   ├── layout/            # Navbar, Footer, ClientLayout
│   ├── providers/         # ThemeProvider
│   └── ui/                # ProjectCard, Counter, SectionHeading, etc.
├── data/
│   └── portfolio.js       # All portfolio content
└── lib/
    └── animations.js      # Framer Motion variants
```

## 📬 Contact

- **Email:** [mdrakibsarkar1@gmail.com](mailto:mdrakibsarkar1@gmail.com)
- **Location:** Bogura, Bangladesh
- **GitHub:** [@Sark-Rakib](https://github.com/Sark-Rakib)
- **LinkedIn:** [rakib-sarker-](https://linkedin.com/in/rakib-sarker-)
- **Twitter/X:** [@Cap_tain01](https://twitter.com/Cap_tain01)

## 📄 License

This project is private and not licensed for redistribution.
