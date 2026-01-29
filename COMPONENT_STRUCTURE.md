# Salon Website - Component Structure

## Project Overview
A premium salon website built with React, TypeScript, and Vite featuring an elegant dark theme with gold accents.

## Component Architecture

### Component Tree
```
App (main container)
├── Header (sticky navigation)
├── Hero (hero section with image grid)
├── Services (signature services grid)
├── ChooseUs (about section with image grid)
├── Features (why choose us cards)
├── Elevate (haircut service highlight)
├── Hygiene (hygiene excellence cards)
├── Booking (appointment booking form)
└── Footer (footer with links and info)
```

## Components Details

### 1. Header (`/src/components/Header.tsx`)
- Sticky navigation bar
- Scroll-based background change
- Navigation links: Home, Services, About, Gallery, Contact
- "Book Now" CTA button
- **Styles**: `Header.css`

### 2. Hero (`/src/components/Hero.tsx`)
- Main hero section
- Headline: "Eternal Beauty For the Modern Woman"
- 3-column image grid with salon photos
- Statistics showcase (150+ Clients, 20+ Services, 10+ Years)
- **Images used**: Group 1597881429.png, Group 1597881430.png, Group 1597881431.png
- **Styles**: `Hero.css`

### 3. Services (`/src/components/Services.tsx`)
- Service cards grid (6 services)
- Hover effects with "Learn More" overlay
- Services: Hair Styling, Spa Treatment, Nail Art, Makeup, Facial Care, Bridal Package
- **Images used**: Rectangle 54375.png - 54380.png, Group 1597881472.png
- **Styles**: `Services.css`

### 4. ChooseUs (`/src/components/ChooseUs.tsx`)
- Two-column layout
- Left: Text content with "Discover More" CTA
- Right: 6-image grid showcasing salon work
- **Images used**: Group 1597881429-1597881434.png (all 6 images)
- **Styles**: `ChooseUs.css`

### 5. Features (`/src/components/Features.tsx`)
- 4 feature cards in grid layout
- Icons: Expert Team ✨, Premium Products 💎, Personalized Care 🎯, Luxury Experience ⭐
- Each card has icon, title, and description
- **Styles**: `Features.css`

### 6. Elevate (`/src/components/Elevate.tsx`)
- Two-column layout
- Left: Large feature image
- Right: Text with checkmarked list and CTA
- Highlights haircut services
- **Images used**: Group 1597881432.png
- **Styles**: `Elevate.css`

### 7. Hygiene (`/src/components/Hygiene.tsx`)
- Grid of 6 hygiene commitment cards
- Each with checkmark icon and description
- Emphasizes safety and cleanliness
- **Styles**: `Hygiene.css`

### 8. Booking (`/src/components/Booking.tsx`)
- Centralized booking form
- Fields: Name, Email, Phone, Service Selection, Date
- "Book Appointment" CTA button
- **Styles**: `Booking.css`

### 9. Footer (`/src/components/Footer.tsx`)
- 4-column layout
- Columns: Brand, Quick Links, Contact Info, Opening Hours
- Copyright notice
- **Styles**: `Footer.css`

## Design System (`/src/index.css`)

### Color Palette
- **Primary**: #0a0a0a (Dark background)
- **Secondary**: #1a1a1a (Secondary background)
- **Accent**: #c9a961 (Gold/Bronze)
- **Accent Light**: #d4ba7a
- **Accent Dark**: #b8964f
- **Text**: #ffffff
- **Text Muted**: #a0a0a0

### Typography
- **Headings**: 'Playfair Display', serif (elegant serif)
- **Body**: 'Inter', sans-serif (modern sans-serif)

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem
- 3xl: 6rem

### Animations
- fadeInUp: Fade in from bottom
- fadeIn: Simple fade in
- scaleIn: Scale from 90% to 100%

### Responsive Breakpoints
- Mobile: < 768px
- Small devices: < 480px

## Images Used

### From Untitled.zip
- Group 1597881429.png - Hero & Choose Us grid
- Group 1597881430.png - Hero & Choose Us grid
- Group 1597881431.png - Hero & Choose Us grid
- Group 1597881432.png - Elevate section & Choose Us grid
- Group 1597881433.png - Choose Us grid
- Group 1597881434.png - Choose Us grid

### From Untitled (1).zip
- Rectangle 54375.png - Hair Styling service
- Rectangle 54376.png - Spa Treatment service
- Rectangle 54377.png - Nail Art service
- Rectangle 54378.png - Makeup service
- Rectangle 54380.png - Facial Care service

### Additional
- Group 1597881472.png - Bridal Package service

## Build Information
- **Build Status**: ✅ Success (No warnings)
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7.2.5
- **CSS**: Vanilla CSS with CSS Variables
- **Bundle Size**: 
  - HTML: 0.45 kB
  - CSS: 11.78 kB (2.78 kB gzipped)
  - JS: 200.71 kB (62.51 kB gzipped)

## Features
✅ Fully componentized architecture
✅ TypeScript for type safety
✅ Responsive design (mobile-first)
✅ Smooth animations and transitions
✅ Hover effects on interactive elements
✅ Custom scrollbar matching theme
✅ No build warnings or errors
✅ Production-ready build
✅ SEO-friendly structure
✅ Accessible markup

## Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
```

## Component File Structure
```
src/
├── components/
│   ├── Header.tsx + Header.css
│   ├── Hero.tsx + Hero.css
│   ├── Services.tsx + Services.css
│   ├── ChooseUs.tsx + ChooseUs.css
│   ├── Features.tsx + Features.css
│   ├── Elevate.tsx + Elevate.css
│   ├── Hygiene.tsx + Hygiene.css
│   ├── Booking.tsx + Booking.css
│   └── Footer.tsx + Footer.css
├── App.tsx (Main component composition)
├── index.css (Global styles & design system)
└── main.tsx (Entry point)
```

## Notes
- All components are modular and reusable
- Each component has its own CSS file for maintainability
- Global design system defined in index.css
- All images are optimized and properly referenced
- Production build is clean with no warnings
