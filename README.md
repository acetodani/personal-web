# Portfolio Website - Vite React

A modern, fast portfolio website built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - Modern UI library
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Type-safe development
- 🚀 **Fast development server** with Hot Module Replacement (HMR)
- 🔧 **Pre-configured** with all necessary tools

## Project Structure

```
src/
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
├── globals.css       # Global styles
├── ui/              # Reusable UI components
└── figma/           # Figma-related components
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

   The application opens automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- **Vite** - Build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library

## Customization

### Tailwind Configuration

Edit `tailwind.config.ts` to customize:
- Colors and themes
- Typography
- Spacing and sizing
- Responsive breakpoints

### Global Styles

Modify `src/globals.css` for:
- Global variable definitions
- Base styles
- Custom font imports

## Component Development

Create new components in the `src/` directory and import them in your pages:

```tsx
import { MyComponent } from './MyComponent'

export default function App() {
  return <MyComponent />
}
```

## Deployment

The project is ready to be deployed to any static hosting service:

- **Vercel** - Zero-config deployment
- **Netlify** - Connect your Git repository
- **GitHub Pages** - Static hosting
- **AWS S3 + CloudFront** - CDN delivery

Build the project first:
```bash
npm run build
```

Then deploy the `dist/` folder.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## License

MIT - feel free to use this for personal or commercial projects.
