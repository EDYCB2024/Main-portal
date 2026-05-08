---
name: Portal Hub Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#061528'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c2a3d'
  on-tertiary-container: '#8391a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for high-utility environments where clarity and trust are paramount. It centers on a **Minimalist Corporate** aesthetic, prioritizing information density without sacrificing breathing room. The visual language is intentionally restrained to reduce cognitive load, making complex navigation feel intuitive and calm.

The target audience consists of professionals seeking a reliable "single source of truth." The UI evokes an emotional response of stability and efficiency through a systematic application of whitespace and a precise, limited color palette. Every element serves a functional purpose, eschewing decorative flourishes for structural integrity and readability.

## Colors

This design system utilizes a high-contrast, professional palette. 
- **Primary (#1A2B3C):** A deep navy used for brand moments, primary actions, and top-level navigation to instill authority.
- **Secondary (#64748B):** A soft slate gray reserved for supporting text, icons, and non-interactive decorative elements.
- **Backgrounds:** The interface relies heavily on white space (`#FFFFFF`) and very light neutral washes (`#F8FAFC`) to separate content zones without the need for heavy lines.
- **Accents:** A slightly more vibrant blue is utilized sparingly for interactive states (hover/focus) to ensure the interface feels responsive and modern.

## Typography

The design system exclusively uses **Inter**, a typeface optimized for screen readability and systematic UI layouts. 

- **Weight Usage:** Medium and Semi-bold weights are used for semantic hierarchy, while Regular is reserved for long-form body text to maintain a "clean" look.
- **Scale:** The scale is generous to accommodate professional users who may be scanning large amounts of data. 
- **Readability:** Line heights are set slightly wider (1.5x for body) to ensure a welcoming, open feel. Large headlines use a slight negative letter-spacing to appear more cohesive and premium.

## Layout & Spacing

The design system employs a **Fixed Grid** philosophy for desktop to maintain a professional, organized "dashboard" feel, while transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid is used for desktop (1280px max-width).
- **Rhythm:** An 8pt spatial system governs all margins and padding. 24px (`md`) is the standard padding for cards and containers.
- **Mobile Adaptivity:** At the 768px breakpoint, margins shrink to 16px, and complex multi-column grids collapse into a single-column stack. 
- **Whitespace:** Emphasize "macro-whitespace" between distinct sections (using `lg` or `xl` tokens) to ensure the portal feels expansive and organized rather than cluttered.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows. This maintains the minimalist aesthetic.

- **Level 0 (Base):** The primary background (`#F8FAFC`).
- **Level 1 (Cards/Containers):** White surfaces (`#FFFFFF`) with a subtle 1px border (`#E2E8F0`). 
- **Level 2 (Interactive/Floating):** Used for dropdowns and modals. These incorporate a very soft, highly diffused ambient shadow (0px 4px 20px, 5% opacity black) to separate them from the Level 1 surface.
- **Focus States:** Elements use a 2px offset ring in the accent color to indicate keyboard focus, ensuring high accessibility.

## Shapes

The design system uses a **Soft** shape language. This subtly rounds the corners of the professional navy and slate elements to make the interface feel more "welcoming" and less "institutional."

- **Standard Radius:** 0.25rem (4px) for small components like checkboxes and input fields.
- **Large Radius:** 0.5rem (8px) for cards, buttons, and larger containers.
- **Pill:** Reserved exclusively for status indicators (Chips/Badges) to differentiate them from interactive buttons.

## Components

- **Buttons:** Primary buttons use the Deep Navy background with white text. Secondary buttons use a ghost style (slate border or slate text on clear) to maintain hierarchy.
- **Input Fields:** Use a 1px slate-gray border. Upon focus, the border thickens or shifts to the primary navy color. Labels are always positioned above the field for maximum clarity.
- **Cards:** The primary container for the portal. They should have no shadow by default, relying on a subtle border and internal padding (`md`) to house content.
- **Chips:** Used for filtering and status. They use light tint backgrounds of the primary or secondary colors (e.g., a 10% opacity navy background with navy text).
- **Navigation:** Top-level navigation items should have a clear "active" state using a bottom-weighted stroke in the primary color, reinforcing the structural grid.
- **Progress Indicators:** Use thin, linear bars rather than circular loaders to align with the systematic, horizontal nature of the layout.