'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Megaphone,
  MessageCircle,
  Calendar,
  Settings,
  Workflow,
  Share2,
  MessagesSquare,
  X
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSidebar } from '@/lib/SidebarContext'

interface MenuItem {
  icon: any
  label: string
  href: string
  submenu?: { label: string; href: string }[]
  color: string
}

const menuItems: MenuItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Users,
    label: 'Clients',
    href: '/clients',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Megaphone,
    label: 'Campaigns',
    href: '/campaigns',
    color: 'from-pink-500 to-rose-500',
    submenu: [
      { label: 'All Campaigns', href: '/campaigns' },
      { label: 'Active', href: '/campaigns/active' },
      { label: 'Archived', href: '/campaigns/archived' }
    ]
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: '/whatsapp',
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-purple-500 to-indigo-500',
    submenu: [
      { label: 'Instagram', href: '/social/instagram' },
      { label: 'Facebook', href: '/social/facebook' },
      { label: 'Content Calendar', href: '/social/calendar' }
    ]
  },
  {
    icon: Workflow,
    label: 'Automation',
    href: '/automation',
    color: 'from-orange-500 to-amber-500',
    submenu: [
      { label: 'Flow Designer', href: '/automation/flows' },
      { label: 'Triggers', href: '/automation/triggers' },
      { label: 'Templates', href: '/automation/templates' }
    ]
  },
  {
    icon: MessagesSquare,
    label: 'Team Chat',
    href: '/chat',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Calendar,
    label: 'Scheduled Posts',
    href: '/scheduled',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Settings,
    label: 'Settings',
    href: '/settings',
    color: 'from-gray-500 to-slate-600'
  },
]

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState('Dashboard')
  const { setIsSubmenuOpen } = useSidebar()

  // Update context when submenu opens/closes
  useEffect(() => {
    setIsSubmenuOpen(expandedItem !== null)
  }, [expandedItem, setIsSubmenuOpen])

  const handleItemClick = (item: MenuItem) => {
    if (item.submenu) {
      setExpandedItem(expandedItem === item.label ? null : item.label)
    } else {
      setActiveItem(item.label)
      setExpandedItem(null)
    }
  }

  return (
    <>
      {/* Icon Sidebar - Hidden on Mobile, Visible on Desktop */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:flex fixed left-0 top-0 h-full w-[70px] bg-[var(--bg-card)] border-r border-[var(--border-color)] z-50 flex-col"
      >
        {/* Logo */}
        <div className="h-[65px] flex items-center justify-center border-b border-[var(--border-color)]">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg"
          >
            <span className="text-white font-heading font-bold text-xl">S</span>
          </motion.div>
        </div>

        {/* Menu Icons */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleItemClick(item)}
                className={`w-full relative group ${
                  activeItem === item.label || expandedItem === item.label
                    ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:' + item.color
                    : ''
                }`}
                title={item.label}
              >
                <div
                  className={`w-full h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    activeItem === item.label || expandedItem === item.label
                      ? `bg-gradient-to-br ${item.color} shadow-lg`
                      : 'hover:bg-[var(--bg-base)]'
                  }`}
                >
                  <item.icon
                    size={22}
                    className={
                      activeItem === item.label || expandedItem === item.label
                        ? 'text-white'
                        : 'text-[var(--text-secondary)] group-hover:text-[var(--color-primary)]'
                    }
                  />
                </div>

                {/* Active Indicator Pulse */}
                {expandedItem === item.label && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* User Avatar at Bottom */}
        <div className="p-2 border-t border-[var(--border-color)]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-semibold shadow-lg"
          >
            JD
          </motion.button>
        </div>
      </motion.aside>

      {/* Submenu Panel - Slides in from left */}
      <AnimatePresence>
        {expandedItem && (
          <>
            {/* Overlay for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedItem(null)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Submenu */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 70, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[260px] bg-[var(--bg-card)] border-r border-[var(--border-color)] z-40 shadow-2xl"
            >
              {/* Header */}
              <div className="h-[65px] flex items-center justify-between px-6 border-b border-[var(--border-color)]">
                <h2 className="text-h3 font-heading font-semibold text-gradient">
                  {expandedItem}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setExpandedItem(null)}
                  className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Submenu Items */}
              <nav className="p-4">
                {menuItems
                  .find(item => item.label === expandedItem)
                  ?.submenu?.map((subItem, index) => (
                    <motion.div
                      key={subItem.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={subItem.href}
                        onClick={() => setExpandedItem(null)}
                        className="group block"
                      >
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[var(--color-primary)] hover:to-[var(--color-primary-end)] hover:text-white transition-all duration-200 text-[var(--text-secondary)] mb-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-current" />
                          <span className="text-body font-medium">{subItem.label}</span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
              </nav>

              {/* Quick Actions */}
              <div className="absolute bottom-6 left-4 right-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 rounded-xl glass-effect"
                >
                  <p className="text-xs text-[var(--text-tertiary)] mb-2">Quick Tip</p>
                  <p className="text-small text-[var(--text-secondary)]">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-color)] text-xs font-mono">⌘K</kbd> to search
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
