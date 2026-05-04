# Jupiter Law - Design System & Architecture

This document outlines the design system, typography, and technical architecture for the **Jupiter Law** project (internally referred to as the "Celestial Authority" theme).

## 1. Core Brand Identity
- **Brand Vibe**: Authoritative, elite, precise, and sophisticated.
- **Theme**: Dark Mode Exclusive.
- **Target Audience**: High-net-worth individuals, corporate entities, and clients requiring complex litigation in Manchester.

## 2. Color Palette
The color system is built on a deep, authoritative navy background with stark contrast text and sophisticated gold/amber accents.

### Backgrounds & Surfaces
- **Background / Surface Dim**: `#081425` (Deep Navy)
- **Surface Container Lowest**: `#040e1f`
- **Surface Container Low**: `#111c2d`
- **Surface Container**: `#152031` (Cards / Sections)
- **Surface Container High**: `#1f2a3c`
- **Surface Container Highest / Variant**: `#2a3548`

### Typography Colors
- **On Background / On Surface**: `#d8e3fb` (Primary Light Blue/White)
- **On Surface Variant**: `#c6c6cd` (Secondary Muted Text)
- **Outline / Borders**: `#45464d` / `#909097` (Subtle dividers)

### Accents
- **Secondary (Gold / Amber)**: `#e9c176` (Used for CTAs, Labels, Accents)
- **On Secondary (Dark Text on Gold)**: `#412d00`
- **Primary**: `#bec6e0`

## 3. Typography
The entire application uses the **Inter** font family, relying on strong tracking and varying weights to establish hierarchy.

- **Display Hero**: 64px | Line Height: 1.1 | Tracking: -0.02em | Weight: 600 (Semibold)
- **Headline Large**: 40px | Line Height: 1.2 | Tracking: -0.01em | Weight: 600 (Semibold)
- **Headline Medium**: 30px | Line Height: 1.3 | Weight: 500 (Medium)
- **Body Large**: 18px | Line Height: 1.6 | Weight: 400 (Regular)
- **Body Medium**: 16px | Line Height: 1.6 | Weight: 400 (Regular)
- **Button**: 14px | Line Height: 1.0 | Tracking: 0.02em (Uppercase) | Weight: 600
- **Label Caps**: 12px | Line Height: 1.2 | Tracking: 0.1em (Uppercase) | Weight: 700

## 4. UI Elements & Micro-Interactions
- **Border Radius**: Subtle and sharp.
  - Default: `2px` (0.125rem)
  - Large (`rounded-lg`): `4px` (0.25rem)
  - Extra Large (`rounded-xl`): `8px` (0.5rem)
- **Buttons**: Magnetic hover interactions `scale(1.05)`, opacity shifts.
- **Glassmorphism**: `backdrop-blur(12px)` with `rgba(21, 32, 49, 0.7)` backgrounds for floating elements like the Navbar.
- **Borders**: 1px "Tonal Borders" utilizing low opacity outlines rather than heavy drop shadows to create depth.
- **Imagery**: Grayscale by default, fading to full color on hover `transition-all duration-700`.

## 5. Layout & Spacing
- **Max Width Container**: `1280px`
- **Gutter**: `32px`
- **Margin Edge**: `64px`
- **Section Gap**: `120px` (used for large vertical breathing room between distinct blocks).

## 6. Iconography
- **Library**: Google Material Symbols Outlined.
- **Styling**: `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`.

## 7. Tech Stack
- **Framework**: React 19 + Vite
- **Routing**: `react-router-dom` v6
- **Styling**: Tailwind CSS v3 (Custom Configured Theme)
- **Icons**: Material Symbols via Google Fonts

## 8. Directory Structure
```
/src
  /components
    Navbar.jsx       # Global Top Navigation
    Footer.jsx       # Global Footer with sitemap
  /pages
    Home.jsx         # Landing page & value props
    About.jsx        # Firm history & principal profile
    PracticeAreas.jsx# Bento grid of legal services
    Contact.jsx      # Enquiry form & location map
  App.jsx            # Router definitions
  main.jsx           # App entry point
```
