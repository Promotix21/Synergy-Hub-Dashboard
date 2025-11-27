# Synergy Hub CRM - Dashboard Design Specification

## Color Palette

### Light Theme
- **Base Background**: `#FAF8F3` (Warm Ivory)
- **Card Background**: `#FFFFFF` (Pure White)
- **Primary**: `#E8AA96` (Soft Terracotta/Peachy Coral)
- **Secondary**: `#C4B5D8` (Dusty Lavender)
- **Accent 1**: `#B8E3D1` (Mint Cream)
- **Accent 2**: `#A8C5DA` (Powder Blue)
- **Text Primary**: `#2A2726` (Deep Charcoal)
- **Text Secondary**: `#5C5855` (Warm Gray)
- **Text Tertiary**: `#8B8682` (Light Gray)
- **Border**: `#E8E5E0` (Subtle Cream)

### Dark Theme
- **Base Background**: `#2A2726` (Deep Warm Charcoal)
- **Card Background**: `#363331` (Lighter Charcoal)
- **Primary**: `#F0B8A6` (Brighter Terracotta)
- **Secondary**: `#D4C5E8` (Brighter Lavender)
- **Accent 1**: `#C8F3E1` (Brighter Mint)
- **Accent 2**: `#B8D5EA` (Brighter Blue)
- **Text Primary**: `#FAF8F3` (Cream White)
- **Text Secondary**: `#C8C5C0` (Warm Light Gray)
- **Text Tertiary**: `#9B9895` (Medium Gray)
- **Border**: `#4A4745` (Subtle Dark Border)

---

## Layout Structure

### Sidebar (Left)
- **Collapsed**: 70px width, icons only
- **Expanded**: 260px width on hover/toggle
- Smooth transition 300ms
- Icons in rounded containers with subtle shadow
- Active item: soft gradient glow background
- Submenu: nested indented with connecting dots
- Collapse button at bottom with morphing icon
- Icon micro-animations: scale + slight rotate on hover

### Top Bar
- **Height**: 65px
- **Left**: Breadcrumb navigation
- **Center**: Search bar (expands on focus)
- **Right**: Theme toggle, Notifications bell, Profile avatar
- Soft drop shadow
- Sticky position

### Content Area
- Generous padding: 32px
- Cards with soft neumorphism (raised, gentle shadows)
- Asymmetric grid layout - some cards offset/overlapping
- Staggered fade-in animation on load (0.1s intervals)
- Subtle animated gradient mesh background

### Floating Elements
- **Chat Bubble**: Bottom right, pulsing glow effect
- **Quick Actions FAB**: Bottom right (above chat), fans out 4-5 shortcuts
- Both have magnetic hover effect (move toward cursor)

---

## Typography

- **Headings**: "Outfit" - 500, 600, 700 weights
  - H1: 32px
  - H2: 24px
  - H3: 20px
- **Body**: "DM Sans" - 400, 500 weights
  - Regular: 15px
  - Small: 13px
- **Data/Metrics**: "Space Mono" - 400 weight
  - Numbers: 28px (dashboard metrics)

---

## Key Components

### Sidebar Menu
- Icon + label layout
- Rounded icon containers (12px border radius)
- Active state: gradient background (primary to secondary)
- Submenu items with dot connectors
- Smooth expand/collapse animation
- Hover: entire row highlights

### Search Modal
- Full-screen backdrop (blur effect)
- Center card with shadow
- Recent searches list
- Quick action shortcuts
- Keyboard navigation
- Close: Esc or click outside

### Notification Panel
- Dropdown from bell icon
- Stacked card design
- Unread: subtle glow border
- Mark all read button
- Filter by type
- Max 5 visible, scroll for more

### Profile Dropdown
- Avatar + name + role
- Quick links: Profile, Settings, Billing
- Theme switcher toggle
- Logout at bottom
- Smooth dropdown animation

### Theme Toggle
- Sun/moon icon morph
- Color transition 500ms
- Smooth gradient morphing
- Toggle in top bar + profile dropdown

---

## Dashboard Content Sections

### Metrics Cards (Top Row)
- Active Campaigns
- Total Clients
- Monthly Revenue
- Engagement Rate
- Big numbers with trend arrows
- Icon + gradient background

### Quick Actions Grid
- Create Campaign
- Add Client
- Schedule Post
- Send WhatsApp Broadcast
- Icon cards with hover lift

### Activity Timeline
- Recent actions feed
- User avatars
- Timestamps
- Action type indicators

### Campaign Performance Chart
- Line/Area chart
- Gradient fill matching palette
- Smooth animation on load
- Tooltip on hover

### Client List Preview
- Table/Grid hybrid
- Avatar + name + status
- Quick action buttons
- "View All" link

### Scheduled Posts Calendar
- Mini calendar view
- Dots for scheduled dates
- Upcoming posts list

---

## Animation Specifications

### Page Load Sequence
1. Sidebar slides in from left (200ms)
2. Top bar fades down (300ms, 100ms delay)
3. Cards fade up with stagger (400ms, 100ms interval each)

### Transitions
- Standard: 300ms cubic-bezier(0.4, 0.0, 0.2, 1)
- Fast: 150ms cubic-bezier(0.4, 0.0, 0.2, 1)
- Slow: 500ms cubic-bezier(0.4, 0.0, 0.2, 1)

### Hover States
- Cards: lift 4px with increased shadow (150ms)
- Buttons: soft ripple from click point
- Icons: scale 1.1 + rotate 5deg (200ms)
- Links: underline slide-in (150ms)

### Modal/Search
- Backdrop: fade in 200ms
- Content: scale from 0.95 to 1 (300ms)
- Exit: reverse animation

### Micro-interactions
- Button ripple effect on click
- Input glow focus state
- Icon breathing pulse (subtle)
- Loading spinners: smooth rotation

---

## Unique Design Elements

### Organic Flow Lines
- Connecting related elements with curved gradient lines
- Not harsh borders

### Depth Layering
- Background layer: gradient mesh
- Mid layer: cards/content
- Foreground layer: modals/dropdowns

### Asymmetric Card Layout
- Cards slightly offset in grid
- Some overlap at edges
- Creates visual interest

### Data Visualization
- Charts with gradient fills
- Colors from palette
- Smooth animations on load
- Interactive tooltips

### Neumorphism (Soft)
- Cards raised with soft shadows
- Not harsh, gentle elevation
- Light: shadow + subtle inner shadow
- Dark: glow effect instead of shadow

---

## Footer

- Minimal design at bottom of content
- **Center**: © 2024 Synergy Hub. All rights reserved.
- **Left**: Privacy | Terms | Help
- **Right**: Version 1.0.0
- Text: 13px, secondary color
- Padding: 24px

---

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px (sidebar auto-collapse)
- **Mobile**: < 768px (sidebar overlay, hamburger menu)

---

## Technical Stack

- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Recharts (data visualization)
- CSS Variables (theme switching)
