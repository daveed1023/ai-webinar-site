# AI Mastery Academy

A modern, production-ready website for selling AI training webinars with cutting-edge design and smooth user experience.

![React](https://img.shields.io/badge/react-18.3.1-blue)
![Vite](https://img.shields.io/badge/vite-7.3.1-purple)
![Tailwind](https://img.shields.io/badge/tailwind-3.4.17-cyan)

## 🚀 Features

- **Modern Design**: Glassmorphism UI, gradient effects, and smooth animations
- **Dark Mode**: Toggle between light and dark themes (persists to localStorage)
- **Smooth Scrolling**: Buttery smooth scrolling with Lenis
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Animated**: Framer Motion scroll-triggered animations
- **SEO Ready**: Optimized meta tags for search engines and social sharing

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite 7** - Build tool with SWC
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling
- **Lucide React** - Icon library

## 🏗️ Project Structure

```
ai-webinar-site/
├── src/
│   ├── assets/data/          # JSON content (courses, testimonials, etc.)
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Hero, Services, Contact
│   │   └── ui/               # Reusable UI components
│   ├── contexts/             # React contexts (Theme, SmoothScroll)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and helpers
│   └── styles/               # Global CSS
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

Update content by editing JSON files in `src/assets/data/`:

- **courses.json** - Course offerings, pricing, features
- **site-config.json** - Site name, navigation, SEO, Calendly URL
- **testimonials.json** - Customer testimonials
- **instructor.json** - Instructor bio and credentials

## 🎨 Customization

### Colors

Edit the CSS custom properties in `src/styles/globals.css`:

```css
:root {
  --primary: 262 83% 58%;
  --background: 0 0% 100%;
  /* ... */
}
```

### Tailwind Config

Customize design tokens in `tailwind.config.js` for animations, colors, and spacing.

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 🎯 Sections

- **Hero** - Animated gradient background with compelling headline and CTAs
- **Services** - Bento grid showcasing 3 course tiers
- **Contact** - Contact form with validation and info
- **Navbar** - Responsive navigation with dark mode toggle
- **Footer** - Links, social icons, and brand info

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

Built with ❤️ using React, Vite, and Tailwind CSS
