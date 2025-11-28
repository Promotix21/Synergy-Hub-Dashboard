'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Sun,
  Moon,
  ChevronRight,
  User,
  Settings,
  CreditCard,
  LogOut,
  Menu
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/ThemeProvider'
import SearchModal from './SearchModal'

interface Notification {
  id: number
  title: string
  message: string
  time: string
  unread: boolean
  type: 'info' | 'success' | 'warning'
}

const mockNotifications: Notification[] = [
  { id: 1, title: 'New Client', message: 'John Doe signed up', time: '5m ago', unread: true, type: 'success' },
  { id: 2, title: 'Campaign Complete', message: 'Summer campaign ended', time: '1h ago', unread: true, type: 'info' },
  { id: 3, title: 'Low Balance', message: 'WhatsApp credits low', time: '2h ago', unread: false, type: 'warning' },
]

export default function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
  const { theme, toggleTheme } = useTheme()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [unreadCount, setUnreadCount] = useState(2)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = () => {
      setShowNotifications(false)
      setShowProfile(false)
    }
    if (showNotifications || showProfile) {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [showNotifications, showProfile])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 h-[65px] bg-[var(--bg-card)] border-b border-[var(--border-color)] z-30 shadow-sm"
    >
      <div className="h-full flex items-center justify-between px-6 gap-6">
        {/* Left: Mobile Menu + Breadcrumbs */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg-base)] transition-colors"
          >
            <Menu size={20} className="text-[var(--text-secondary)]" />
          </button>

          {/* Breadcrumbs */}
          <div className="hidden md:flex items-center gap-2 text-small">
            <span className="text-[var(--text-secondary)]">Home</span>
            <ChevronRight size={14} className="text-[var(--text-tertiary)]" />
            <span className="text-[var(--color-primary)] font-medium">Dashboard</span>
          </div>
        </div>

        {/* Center: Search Modal */}
        <div className="flex-1 max-w-xl">
          <SearchModal />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 text-[var(--text-secondary)] group"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Notifications */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation()
                setShowNotifications(!showNotifications)
                setShowProfile(false)
              }}
              className="relative p-2.5 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 text-[var(--text-secondary)]"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  {unreadCount}
                </motion.span>
              )}
            </motion.button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-full mt-2 w-80 bg-[var(--bg-card)] rounded-xl shadow-2xl border border-[var(--border-color)] overflow-hidden"
                >
                  <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-body">Notifications</h3>
                    <button className="text-small text-[var(--color-primary)] hover:underline">
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.map((notif) => (
                      <motion.div
                        key={notif.id}
                        whileHover={{ backgroundColor: 'var(--bg-base)' }}
                        className={`p-4 border-b border-[var(--border-color)] cursor-pointer transition-colors ${
                          notif.unread ? 'bg-[var(--color-primary)]/5' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notif.type === 'success' ? 'bg-green-500' :
                            notif.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <div className="flex-1">
                            <h4 className="font-medium text-small text-[var(--text-primary)]">
                              {notif.title}
                            </h4>
                            <p className="text-small text-[var(--text-tertiary)] mt-1">
                              {notif.message}
                            </p>
                            <span className="text-xs text-[var(--text-tertiary)] mt-1 block">
                              {notif.time}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation()
                setShowProfile(!showProfile)
                setShowNotifications(false)
              }}
              className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <span className="hidden md:block font-medium text-small text-[var(--text-secondary)]">
                John Doe
              </span>
            </motion.button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-full mt-2 w-64 bg-[var(--bg-card)] rounded-xl shadow-2xl border border-[var(--border-color)] overflow-hidden"
                >
                  <div className="p-4 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg">
                        JD
                      </div>
                      <div>
                        <h3 className="font-semibold text-body text-[var(--text-primary)]">John Doe</h3>
                        <p className="text-small text-[var(--text-tertiary)]">Admin</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    {[
                      { icon: User, label: 'Profile', href: '/profile' },
                      { icon: Settings, label: 'Settings', href: '/settings' },
                      { icon: CreditCard, label: 'Billing', href: '/billing' },
                    ].map((item) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                      >
                        <item.icon size={18} />
                        <span className="text-small">{item.label}</span>
                      </motion.a>
                    ))}
                  </div>
                  <div className="p-2 border-t border-[var(--border-color)]">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors w-full"
                    >
                      <LogOut size={18} />
                      <span className="text-small">Logout</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
