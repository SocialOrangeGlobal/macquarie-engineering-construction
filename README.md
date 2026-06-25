# Macquarie Engineering & Construction

Welcome to the official website for Macquarie Engineering & Construction, a modern, highly interactive Next.js application designed to showcase comprehensive engineering and construction solutions. Built with cutting-edge web technologies, the site features a dark, premium aesthetic with smooth parallax scrolling, fluid animations, and a responsive layout.

## 🚀 Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules with custom variables for a consistent design system
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) (and custom inline SVGs)
- **Image Optimization:** `next/image` with optimized `sizes`
- **Package Manager:** npm

## 📁 File Structure

The project follows a modular, feature-based directory structure using the Next.js App Router:

```text
├── public/                  # Static assets (images, icons, fonts)
│   └── images/              # High-quality optimized images for the site
├── src/
│   ├── app/                 # Next.js App Router root
│   │   ├── about/           # About Us page
│   │   ├── contact/         # Contact Us page
│   │   ├── projects/        # Featured Projects page
│   │   ├── services/        # Services page
│   │   ├── globals.css      # Global CSS variables and styles
│   │   ├── layout.tsx       # Root layout containing Navbar and Footer
│   │   ├── page.tsx         # Home page
│   │   └── template.tsx     # Page transition wrapper
│   └── components/          # Reusable React components
│       ├── animations/      # Framer Motion custom wrappers (Typewriter, ParallaxImage, etc.)
│       ├── layout/          # Global layout parts (Navbar, Footer)
│       └── ui/              # UI elements (Button, ServiceCard, ProjectCard, Logo)
├── .gitignore               # Standard Git ignore rules
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🛠️ Setup & Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SocialOrangeGlobal/macquarie-engineering-construction.git
   cd macquarie-engineering-construction
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System

The site utilizes a custom CSS variables system defined in `globals.css`. 

- **Primary Colors:** Deep navy blues and bright orange accents.
- **Typography:** Modern, clean sans-serif stack ensuring readability.
- **Animations:** Extensive use of `framer-motion` for scroll-triggered reveals, interactive hover states, and seamless page transitions.

## 📝 Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the app for production deployment.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch syntax and style issues.

## 📄 License

Copyright &copy; Macquarie Engineering & Construction. All rights reserved.
