---
name: CardWise Circle System
colors:
  surface: '#f3fcf3'
  surface-dim: '#d3dcd4'
  surface-bright: '#f3fcf3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6ed'
  surface-container: '#e7f0e8'
  surface-container-high: '#e2eae2'
  surface-container-highest: '#dce5dd'
  on-surface: '#151d18'
  on-surface-variant: '#424844'
  inverse-surface: '#2a322d'
  inverse-on-surface: '#eaf3eb'
  outline: '#727974'
  outline-variant: '#c1c8c2'
  surface-tint: '#466556'
  primary: '#032217'
  on-primary: '#ffffff'
  primary-container: '#1a382b'
  on-primary-container: '#81a291'
  inverse-primary: '#adcebc'
  secondary: '#446900'
  on-secondary: '#ffffff'
  secondary-container: '#b2f746'
  on-secondary-container: '#496f00'
  tertiary: '#132119'
  on-tertiary: '#ffffff'
  tertiary-container: '#28362d'
  on-tertiary-container: '#8f9f94'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8ead7'
  primary-fixed-dim: '#adcebc'
  on-primary-fixed: '#022115'
  on-primary-fixed-variant: '#2f4d3f'
  secondary-fixed: '#b2f746'
  secondary-fixed-dim: '#98da27'
  on-secondary-fixed: '#121f00'
  on-secondary-fixed-variant: '#334f00'
  tertiary-fixed: '#d6e7da'
  tertiary-fixed-dim: '#bacbbf'
  on-tertiary-fixed: '#101e17'
  on-tertiary-fixed-variant: '#3b4a41'
  background: '#f3fcf3'
  on-background: '#151d18'
  surface-variant: '#dce5dd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  numeric-stat:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system blends Scandinavian functionalism with modern intelligent fintech. Designed specifically for financial intelligence, credit card optimization, and communal financial insights via the "CardWise Circle" feature, the UI evokes algorithmic precision, quiet wealth, and airtight security. 

The aesthetic is grounded in a modern minimalist foundation enhanced with tactile micro-surfaces and organic warmth:
- **Canvas & Presence**: Organic, warm ivory and off-white environments that reject stark clinical whites in favor of an inviting, editorial financial feel.
- **Architectural Framing**: Anchored by deep forest greens that project stability, regulatory maturity, and discreet trust.
- **Dynamic Energy**: High-potency soft lime accents illuminate algorithmic recommendations, optimization yield percentages, and key circle interactions without devolving into visual noise.
- **Trust Metaphors**: Crisp, micro-detailed privacy trust badges, discreet hairline boundaries, and restrained physical elevation models.

## Colors

The palette is engineered to balance heavyweight institutional financial trust with high-yield tech clarity.

### Functional Color Applications
- **Canvas & Structural Layers**:
  - `Base Canvas`: `#FBFBF8` (warm ivory primary ground)
  - `Layer 1 Surface`: `#F4F4EE` (secondary containers, input backings, elevated card strata)
  - `Layer 2 Surface`: `#EBEBE2` (segmented controls, recessed indicators, table headers)
- **Primary Architecture**:
  - `Forest Prime`: `#1A382B` (primary brand surfaces, high-priority CTAs, hero navigation states)
  - `Forest Deep`: `#0F291E` (modal headers, active micro-containers, security states)
- **Signal & Accents (The Yield Spectrum)**:
  - `Lime Bright`: `#A3E635` (optimization badges, circle rank indicators, active toggles)
  - `Lime Mid`: `#BEF264` (hover borders, recommendation micro-treatments)
  - `Lime Soft`: `#D9F99D` (badge backdrops, circle highlight fields)
- **Typography & Structural Contrast**:
  - `Charcoal Dominant`: `#19211C` (headline, primary figures, critical ledger balances)
  - `Charcoal Muted`: `#414B44` (body copy, label meta, field placeholders)
  - `Sage Tint`: `#86968B` (hairlines, ghost borders, structural grid lines, privacy tokens)

## Typography

The type hierarchy couples the friendly yet geometric authority of **Plus Jakarta Sans** for display figures and structural headings with the clinical, high-legibility precision of **Inter** for dense transactional data, multi-tiered tables, and card metadata.

### Typography Rules
- **Monetary & Analytic Figures**: Use `Plus Jakarta Sans` with tabular numeric alignment (`font-variant-numeric: tabular-nums`) to maintain vertical parity across balances and rewards calculators.
- **Circle & Status Badges**: Must utilize `label-sm` in full uppercase (`letterSpacing: 0.04em`) to establish visual separation from underlying narrative text.
- **Mobile Readability**: At viewports narrower than 480px, long financial summaries transition automatically from `body-lg` to `body-md` to preserve 45–65 character line lengths.

## Layout & Spacing

This design system operates on an 8pt architectural grid with a mobile-first fluid approach. 

### Breakpoints & Adaptive Rhythm
- **Mobile (0 – 639px)**: 4-column fluid grid, 16px margins, 16px gutters. Structural blocks span full width; stack multi-card comparisons into edge-to-edge swipe containers with negative margin bleeding (`-1rem`).
- **Tablet (640 – 1023px)**: 8-column grid, 32px margins, 20px gutters. Modals anchor as floating bottom sheets or centered floating dialogs with 480px fixed max-widths.
- **Desktop (1024px+)**: 12-column grid constrained to a max-width of 1280px, 48px margins, 24px gutters. Secondary insight rails ("CardWise Circle Analytics") pin to the right column segment (4 cols).

### Spacing Guidelines
- Maintain `space-xs` (4px) or `space-sm` (8px) for internal pill and micro-indicator bounding.
- Form controls, input groups, and interactive list items consistently employ `space-md` (16px) internal padding.
- Module boundaries enforce `space-lg` (24px) vertically on mobile and `space-xl` (40px) on desktop.

## Elevation & Depth

To preserve an editorial, refined fintech presence, the system strictly shuns generic dark drop shadows, leaning instead into **tonal separation**, **low-contrast micro-outlines**, and **warm diffused ambient halos**.

### Layering Principles
- **Base Level (Canvas)**: `#FBFBF8`.
- **Level 1 (Card & Section Containers)**: `#F4F4EE` bounded by a 1px solid hairline border in `#86968B` at 18% opacity (`rgba(134, 150, 139, 0.18)`). Zero box-shadow.
- **Level 2 (Interactive Cards & Popovers)**: `#FFFFFF` ground backed by subtle dual-shadow:
  - Ambient: `0 4px 20px -2px rgba(25, 33, 28, 0.04)`
  - Key: `0 1px 3px 0 rgba(25, 33, 28, 0.06)`
  - Hairline: 1px outline of `#86968B` at 22% opacity.
- **Level 3 (Modals & Drawer Overlays)**: `#FFFFFF` or `#0F291E` (for dark mode alerts) lifted by an expansive ambient spread: `0 24px 48px -12px rgba(15, 41, 30, 0.18)`.
- **Scrim Overlay**: Backdrop dimming utilizes `#0F291E` at 40% opacity with a `backdrop-filter: blur(8px)` treatment for cinematic focus.

## Shapes

The design system incorporates geometric control through a standardized `roundedness: 2` (base 8px radius) scale, balancing structured financial conservatism with ergonomic touchpoints.

### Corner Radius Mapping
- **Base (0.5rem / 8px)**: Standard form inputs, segmented control segments, card containers, and toast banners.
- **Large (1rem / 16px)**: Primary application cards, financial balance containers, circle group summaries, and bottom-sheet desktop envelopes.
- **Pill / Fully Circular (9999px)**: Reserved strictly for metric tags, optimization badges, avatar boundaries, filter chips, and primary floating action buttons.

## Components

### Buttons
- **Primary**: Background `#1A382B`, text `#FFFFFF`, 12px vertical / 20px horizontal padding, 8px radius. Active state transitions to `#0F291E`.
- **Accent / Optimization**: Background `#A3E635`, text `#0F291E`, weight `600`. Applied exclusively to primary optimization triggers (e.g., "Apply Card Strategy").
- **Secondary / Ghost**: Hairline border 1px solid `rgba(134, 150, 139, 0.35)`, background `#F4F4EE`, text `#19211C`. Hover yields background `#EBEBE2`.

### Pill Badges & Chips
- **Circle Community Badges**: Fully rounded (pill), text in `label-sm`. Background `rgba(163, 230, 53, 0.20)`, text `#0F291E`, with a 1px solid `rgba(163, 230, 53, 0.40)` border.
- **Filter Chips**: Height 32px, radius 9999px, background `#F4F4EE`, text `#414B44`. When active: background `#1A382B`, text `#FFFFFF`.

### Privacy Trust Badges
- Micro-containers designed for end-to-end encryption visibility.
- 6px radius, background `rgba(26, 56, 43, 0.05)`, border 1px solid `rgba(134, 150, 139, 0.25)`. Includes an embedded 12px shield/lock icon in `#1A382B` accompanied by `label-sm` text ("256-Bit Encrypted • Zero Data Resale").

### Cards & CardWise Containers
- **Standard Account Container**: Background `#FFFFFF`, 16px border-radius, hairline border `rgba(134, 150, 139, 0.18)`.
- **CardWise Circle Card**: Distinguished by a subtle top border highlight (2px solid `#A3E635`), internal `#F4F4EE` sub-sections, and inline progress rings tracking collective community rewards.

### Form Inputs
- Background `#F4F4EE`, 8px radius, border 1px solid transparent, text `#19211C`, height 48px, horizontal padding 16px.
- Focus state: Background `#FFFFFF`, border 1.5px solid `#1A382B`, with an outer focus halo of `0 0 0 3px rgba(163, 230, 53, 0.35)`.

### Checkboxes & Radio Buttons
- 20px dimension with 4px radius (checkbox) or circular (radio).
- Default: Border 1.5px solid `#86968B`, background `#FFFFFF`. Selected: Background `#1A382B`, border-color `#1A382B`, checkmark icon in `#A3E635`.

### Interactive Modals & Drawers
- Mobile: Bottom-anchored sliding sheet with a 4px wide swipe handle `#86968B` at 30% opacity, top corners rounded at 24px.
- Desktop: Centered card container (max width 540px), rounded at 16px, dual-level ambient depth, header paired with a discrete dismiss action (`#414B44`).