# Synergy Hub CRM Dashboard

A modern, feature-rich CRM dashboard built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design
- **Modern UI/UX** - Clean, professional design with soft shadows and refined padding
- **Dark/Light Mode** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Fully optimized for desktop (1200px+), tablet (768-1199px), and mobile (<768px)
- **Smooth Animations** - Delightful micro-interactions using Framer Motion
- **Custom Color Palette** - Warm, inviting colors with gradients

### 📊 Dashboard
- **Metrics Cards** - Real-time KPIs with trend indicators
- **Campaign Performance Chart** - Interactive charts with gradient fills (Recharts)
- **Activity Timeline** - Recent actions feed with avatars
- **Client List Preview** - Table with quick actions
- **Scheduled Posts Calendar** - Mini calendar with upcoming posts
- **Quick Actions** - Fast access to common tasks

### 💬 Team Chat
- **WhatsApp-like Interface** - Familiar chat experience
- **Real-time Messaging** - Send/receive messages with status indicators
- **File Sharing** - Attach files and images
- **Contact List** - Searchable contacts with online status
- **Voice Messages** - Record and send audio

### 🔄 Automation Flow Designer
- **Drag-and-Drop Nodes** - Visual workflow builder
- **Multiple Node Types** - Triggers, Actions, Conditions, Delays
- **Properties Panel** - Configure each node
- **Node Stats** - Track flow complexity
- **Save & Activate** - Manage automation flows

### 👥 Client Management
- **Multicolor Tables** - Status-based color coding
- **Advanced Filters** - Filter by status, search clients
- **Quick Actions** - Email, call, WhatsApp from table
- **Revenue Tracking** - Monitor client value
- **Campaign Count** - Track active campaigns per client

### 📱 Social Media Management
- **Instagram & Facebook Automation** - Automated posting and scheduling
- **WhatsApp Flow Designer** - Create broadcast workflows
- **Content Calendar** - Plan posts ahead
- **Analytics** - Track engagement and performance

### 👤 Profile Page
- **Facebook-style Layout** - Familiar social profile design
- **Cover Photo & Avatar** - Customizable profile visuals
- **Timeline Posts** - Share updates with team
- **Achievements** - Showcase accomplishments
- **Team Members** - View colleagues
- **About Section** - Professional information

### 🔐 Authentication
- **Modern Login Page** - Split-screen design with branding
- **Google OAuth** - One-click social login
- **Form Validation** - Secure credential handling
- **Remember Me** - Session persistence

## 🛠️ Tech Stack

- **Next.js 14** - App Router for modern React development
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

\`\`\`bash
npm run build
\`\`\`

### Start Production

\`\`\`bash
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
synergy-hub-dashboard/
├── app/
│   ├── automation/flows/   # Flow designer
│   ├── chat/              # Team chat
│   ├── clients/           # Client management
│   ├── login/            # Authentication
│   ├── profile/          # User profile
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Dashboard home
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── TopBar.tsx        # Header with search/notifications
│   ├── MetricCard.tsx    # KPI cards
│   ├── QuickAction.tsx   # Action buttons
│   ├── ActivityTimeline.tsx
│   ├── CampaignChart.tsx
│   ├── ClientList.tsx
│   ├── ScheduledCalendar.tsx
│   ├── FloatingActions.tsx
│   └── Footer.tsx
├── lib/
│   └── ThemeProvider.tsx # Dark/light mode context
└── utils/
\`\`\`

## 🎨 Design System

### Colors

**Light Theme:**
- Background: `#FAF8F3` (Warm Ivory)
- Primary: `#E8AA96` (Soft Terracotta)
- Secondary: `#C4B5D8` (Dusty Lavender)
- Accent 1: `#B8E3D1` (Mint Cream)
- Accent 2: `#A8C5DA` (Powder Blue)

**Dark Theme:**
- Background: `#2A2726` (Deep Charcoal)
- Primary: `#F0B8A6` (Brighter Terracotta)
- Secondary: `#D4C5E8` (Brighter Lavender)
- Accent 1: `#C8F3E1` (Brighter Mint)
- Accent 2: `#B8D5EA` (Brighter Blue)

### Typography

- **Headings:** Outfit (500, 600, 700)
- **Body:** DM Sans (400, 500)
- **Data/Metrics:** Space Mono (400)

### Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

## 📦 Features Included

✅ Dashboard with real-time metrics
✅ Team chat (WhatsApp-style)
✅ Automation flow designer
✅ Client management with filters
✅ Profile page (Facebook-style)
✅ Login with Google OAuth
✅ Dark/light mode toggle
✅ Responsive design
✅ Smooth animations
✅ Modern UI components

## 🔮 Future Enhancements

- Real-time notifications
- Advanced analytics
- Multi-language support
- Email integration
- Calendar synchronization
- Export reports (PDF/CSV)

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Credits

Designed and developed with ❤️ following modern UI/UX best practices from Behance and Dribbble.

---

**Version:** 1.0.0
**Last Updated:** November 2024
