'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Megaphone,
  MessageCircle,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Workflow,
  Share2,
  UserCircle2,
  MessagesSquare,
  Instagram,
  Facebook
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface MenuItem {
  icon: any
  label: string
  href: string
  submenu?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Clients', href: '/clients' },
  { icon: Megaphone, label: 'Campaigns', href: '/campaigns' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: '/whatsapp',
    submenu: [
      { label: 'Broadcasts', href: '/whatsapp/broadcasts' },
      { label: 'Flow Designer', href: '/whatsapp/flows' },
      { label: 'Templates', href: '/whatsapp/templates' }
    ]
  },
  {
    icon: Share2,
    label: 'Social Media',
    href: '/social',
    submenu: [
      { label: 'Instagram Automation', href: '/social/instagram' },
      { label: 'Facebook Automation', href: '/social/facebook' },
      { label: 'Content Calendar', href: '/social/calendar' }
    ]
  },
  {
    icon: Workflow,
    label: 'Automation',
    href: '/automation',
    submenu: [
      { label: 'Flow Designer', href: '/automation/flows' },
      { label: 'Triggers', href: '/automation/triggers' },
      { label: 'Templates', href: '/automation/templates' }
    ]
  },
  { icon: MessagesSquare, label: 'Team Chat', href: '/chat' },
  { icon: Calendar, label: 'Scheduled Posts', href: '/scheduled' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [activeItem, setActiveItem] = useState('Dashboard')
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`fixed left-0 top-0 h-full bg-[var(--bg-card)] border-r border-[var(--border-color)] z-40 transition-all duration-300 ${
        isExpanded ? 'w-[260px]' : 'w-[70px]'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-[65px] flex items-center justify-center border-b border-[var(--border-color)]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">S</span>
            </div>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-heading font-semibold text-h3 text-gradient"
              >
                Synergy Hub
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label)
                      if (item.submenu) {
                        setExpandedSubmenu(expandedSubmenu === item.label ? null : item.label)
                      }
                    }}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                      activeItem === item.label
                        ? 'gradient-primary text-white shadow-lg'
                        : 'hover:bg-[var(--bg-base)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {/* Icon container */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center justify-center w-9 h-9 rounded-lg ${
                        activeItem === item.label
                          ? 'bg-white/20'
                          : 'bg-[var(--bg-base)]'
                      }`}
                    >
                      <item.icon size={20} />
                    </motion.div>

                    {/* Label */}
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-body font-medium text-body flex-1"
                      >
                        {item.label}
                      </motion.span>
                    )}

                    {/* Submenu indicator */}
                    {isExpanded && item.submenu && (
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          expandedSubmenu === item.label ? 'rotate-90' : ''
                        }`}
                      />
                    )}
                  </Link>
                </motion.div>

                {/* Submenu */}
                {isExpanded && item.submenu && expandedSubmenu === item.label && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-6 mt-2 space-y-1 border-l-2 border-[var(--color-primary)] pl-4"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2 px-3 text-small text-[var(--text-tertiary)] hover:text-[var(--color-primary)] transition-colors duration-150 relative"
                      >
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[21px] w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Collapse Button */}
        <div className="p-3 border-t border-[var(--border-color)]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 text-[var(--text-secondary)] group"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft size={20} />
            </motion.div>
            {isExpanded && (
              <span className="font-body text-small">Collapse</span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.aside>
  )
}
