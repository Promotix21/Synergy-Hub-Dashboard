'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Key,
  Mail,
  Phone,
  Save,
  Moon,
  Sun
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'
import { useTheme } from '@/lib/ThemeProvider'

export default function SettingsPage() {
  const [selectedTab, setSelectedTab] = useState<'profile' | 'notifications' | 'security' | 'appearance'>('profile')
  const { isSubmenuOpen } = useSidebar()
  const { theme, toggleTheme } = useTheme()

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Sidebar />
      <div className={`transition-all duration-300 ${isSubmenuOpen ? 'lg:ml-[330px]' : 'lg:ml-[70px]'}`}>
        <TopBar />

        <main className="pt-[65px] p-6">
          <div className="max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-h1 font-heading font-bold text-gradient mb-2">
                Settings
              </h1>
              <p className="text-body text-[var(--text-secondary)]">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Tabs */}
              <div className="lg:col-span-1">
                <div className="card-neumorphic rounded-xl p-2">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTab(tab.id as any)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 ${
                        selectedTab === tab.id
                          ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-base)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <tab.icon size={20} />
                      <span className="text-small font-medium">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-3">
                <div className="card-neumorphic rounded-xl p-6">
                  {selectedTab === 'profile' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h2 className="text-h2 font-heading font-semibold text-[var(--text-primary)] mb-6">
                        Profile Information
                      </h2>

                      {/* Profile Picture */}
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-2xl">
                          JD
                        </div>
                        <div>
                          <h3 className="text-body font-semibold text-[var(--text-primary)] mb-1">John Doe</h3>
                          <p className="text-small text-[var(--text-secondary)] mb-3">john.doe@synergyhub.com</p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-small font-medium text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
                          >
                            Change Photo
                          </motion.button>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              defaultValue="John"
                              className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                            />
                          </div>
                          <div>
                            <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              defaultValue="Doe"
                              className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            <Mail className="inline mr-2" size={16} />
                            Email Address
                          </label>
                          <input
                            type="email"
                            defaultValue="john.doe@synergyhub.com"
                            className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                          />
                        </div>

                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            <Phone className="inline mr-2" size={16} />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                          />
                        </div>

                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            Bio
                          </label>
                          <textarea
                            rows={4}
                            defaultValue="Senior Marketing Manager specializing in digital campaigns and automation."
                            className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
                        >
                          <Save size={18} />
                          <span className="text-small font-medium">Save Changes</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-small font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === 'notifications' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h2 className="text-h2 font-heading font-semibold text-[var(--text-primary)] mb-6">
                        Notification Preferences
                      </h2>

                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 rounded-lg bg-[var(--bg-base)]">
                          <div>
                            <h4 className="text-body font-medium text-[var(--text-primary)] mb-1">Email Notifications</h4>
                            <p className="text-small text-[var(--text-secondary)]">Receive email updates about campaigns</p>
                          </div>
                          <label className="relative inline-block w-12 h-6">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[var(--color-primary)] peer-checked:to-[var(--color-secondary)]"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-lg bg-[var(--bg-base)]">
                          <div>
                            <h4 className="text-body font-medium text-[var(--text-primary)] mb-1">Push Notifications</h4>
                            <p className="text-small text-[var(--text-secondary)]">Get push notifications for important updates</p>
                          </div>
                          <label className="relative inline-block w-12 h-6">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[var(--color-primary)] peer-checked:to-[var(--color-secondary)]"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-lg bg-[var(--bg-base)]">
                          <div>
                            <h4 className="text-body font-medium text-[var(--text-primary)] mb-1">SMS Notifications</h4>
                            <p className="text-small text-[var(--text-secondary)]">Receive text messages for critical alerts</p>
                          </div>
                          <label className="relative inline-block w-12 h-6">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[var(--color-primary)] peer-checked:to-[var(--color-secondary)]"></div>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === 'security' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h2 className="text-h2 font-heading font-semibold text-[var(--text-primary)] mb-6">
                        Security Settings
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-body font-medium text-[var(--text-primary)] mb-3">Change Password</h4>
                          <div className="space-y-3">
                            <input
                              type="password"
                              placeholder="Current Password"
                              className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                            />
                            <input
                              type="password"
                              placeholder="New Password"
                              className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                            />
                            <input
                              type="password"
                              placeholder="Confirm New Password"
                              className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                            />
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md text-small font-medium"
                          >
                            <Key size={16} />
                            Update Password
                          </motion.button>
                        </div>

                        <div className="pt-6 border-t border-[var(--border-color)]">
                          <div className="flex items-center justify-between p-4 rounded-lg bg-[var(--bg-base)]">
                            <div>
                              <h4 className="text-body font-medium text-[var(--text-primary)] mb-1">Two-Factor Authentication</h4>
                              <p className="text-small text-[var(--text-secondary)]">Add an extra layer of security</p>
                            </div>
                            <label className="relative inline-block w-12 h-6">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[var(--color-primary)] peer-checked:to-[var(--color-secondary)]"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedTab === 'appearance' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h2 className="text-h2 font-heading font-semibold text-[var(--text-primary)] mb-6">
                        Appearance Settings
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-body font-medium text-[var(--text-primary)] mb-4">Theme</h4>
                          <div className="flex gap-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={toggleTheme}
                              className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                                theme === 'light'
                                  ? 'border-[var(--color-primary)] bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10'
                                  : 'border-[var(--border-color)] hover:border-[var(--color-primary)]'
                              }`}
                            >
                              <Sun size={32} className="mx-auto mb-3 text-[var(--color-primary)]" />
                              <p className="text-body font-medium text-[var(--text-primary)]">Light Mode</p>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={toggleTheme}
                              className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                                theme === 'dark'
                                  ? 'border-[var(--color-primary)] bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10'
                                  : 'border-[var(--border-color)] hover:border-[var(--color-primary)]'
                              }`}
                            >
                              <Moon size={32} className="mx-auto mb-3 text-[var(--color-primary)]" />
                              <p className="text-body font-medium text-[var(--text-primary)]">Dark Mode</p>
                            </motion.button>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-[var(--border-color)]">
                          <h4 className="text-body font-medium text-[var(--text-primary)] mb-3">Language & Region</h4>
                          <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--bg-base)]">
                            <Globe size={20} className="text-[var(--text-secondary)]" />
                            <select className="flex-1 bg-transparent border-none outline-none text-small text-[var(--text-primary)]">
                              <option>English (US)</option>
                              <option>Spanish</option>
                              <option>French</option>
                              <option>German</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
