# Fitness Club - Fitness & Gym Website

A modern, responsive fitness and gym website built with React, TypeScript, and Tailwind CSS. Fitness Club features a sleek design with smooth animations, custom cursor interactions, and a fully responsive layout optimized for all devices.

## 🚀 Features

- **Hero Section**: Eye-catching hero section with animated text and call-to-action buttons
- **Services Carousel**: Showcase gym services with interactive carousel
- **Plans Carousel**: Display membership plans with smooth transitions
- **Trainers Section**: Highlight gym trainers and their expertise
- **Gallery Page**: Image gallery with category filtering
- **Contact Section**: Contact form and information
- **Custom Cursor**: Interactive custom cursor for enhanced user experience
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout the site
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion 11.18.2
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack Query 5.83.0
- **Icons**: Lucide React 0.462.0
- **Forms**: React Hook Form 7.61.1 + Zod 3.25.76

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** or **bun** package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd kinetic-fit-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 📁 Project Structure

```
kinetic-fit-main/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── ContactSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlansCarousel.tsx
│   │   ├── ServicesCarousel.tsx
│   │   ├── SignInModal.tsx
│   │   └── TrainersSection.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Gallery.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── Profile.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Key Components

### HeroSection
The main landing section with animated text, background parallax effect, and call-to-action buttons. Features a marquee band at the bottom.

### Navbar
Fixed navigation bar with responsive mobile menu, user profile access, and sign-in functionality.

### ServicesCarousel
Interactive carousel showcasing gym services with smooth transitions.

### PlansCarousel
Membership plans displayed in a carousel format with detailed information.

### TrainersSection
Section highlighting gym trainers with their profiles and expertise.

### Gallery
Image gallery page with category filtering and responsive grid layout.

### ContactSection
Contact form and information section for user inquiries.

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 📦 Deployment

### Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings

### Netlify
1. Push your code to GitHub
2. Import the repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms
The `dist` folder contains the production-ready static files that can be deployed to any static hosting service like:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any other static file hosting service

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Notes

- The project uses TypeScript for type safety
- ESLint is configured for code quality
- Tailwind CSS is used for styling with custom configuration
- Framer Motion is used for animations
- React Router is used for client-side routing
- Custom cursor implementation for enhanced UX

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

Fitness Club

---

**Note**: Make sure to update the Git URL in the installation instructions with your actual repository URL.
