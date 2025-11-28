'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Clock, TrendingUp, Users, Megaphone, Calendar, Settings, File } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  category: 'pages' | 'clients' | 'campaigns' | 'recent'
  icon: any
  href: string
}

const searchResults: SearchResult[] = [
  { id: '1', title: 'Dashboard', description: 'View your main dashboard', category: 'pages', icon: TrendingUp, href: '/' },
  { id: '2', title: 'Clients', description: 'Manage your clients', category: 'pages', icon: Users, href: '/clients' },
  { id: '3', title: 'Campaigns', description: 'View all campaigns', category: 'pages', icon: Megaphone, href: '/campaigns' },
  { id: '4', title: 'Team Chat', description: 'Open team chat', category: 'pages', icon: Users, href: '/chat' },
  { id: '5', title: 'Calendar', description: 'View scheduled posts', category: 'pages', icon: Calendar, href: '/calendar' },
  { id: '6', title: 'Settings', description: 'App settings', category: 'pages', icon: Settings, href: '/settings' },
  { id: '7', title: 'Acme Corp', description: 'Client profile', category: 'clients', icon: Users, href: '/clients/1' },
  { id: '8', title: 'Summer Campaign', description: 'Active campaign', category: 'campaigns', icon: Megaphone, href: '/campaigns/1' },
  { id: '9', title: 'Recent Reports', description: 'Viewed 2 hours ago', category: 'recent', icon: File, href: '/reports' },
]

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredResults = query
    ? searchResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      )
    : searchResults.slice(0, 6)

  // Keyboard shortcut to open modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Navigation with arrow keys
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % filteredResults.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + filteredResults.length) % filteredResults.length)
      }
      if (e.key === 'Enter' && filteredResults[selectedIndex]) {
        window.location.href = filteredResults[selectedIndex].href
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredResults])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(0)
  }, [])

  return (
    <>
      {/* Trigger Button in TopBar */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
      >
        <Search size={16} />
        <span className="text-small">Search...</span>
        <kbd className="px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl glass-effect rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--border-color)]">
                  <Search size={20} className="text-[var(--color-primary)]" />
                  <input
                    type="text"
                    placeholder="Search for pages, clients, campaigns..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setSelectedIndex(0)
                    }}
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)] placeholder-[var(--text-tertiary)] text-body"
                  />
                  <kbd className="px-2 py-1 rounded bg-[var(--bg-base)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-tertiary)]">
                    ESC
                  </kbd>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {filteredResults.length === 0 ? (
                    <div className="px-6 py-12 text-center">
                      <p className="text-[var(--text-tertiary)] text-body">No results found for &quot;{query}&quot;</p>
                    </div>
                  ) : (
                    <div className="p-3">
                      {/* Group by category */}
                      {['pages', 'clients', 'campaigns', 'recent'].map(category => {
                        const categoryResults = filteredResults.filter(r => r.category === category)
                        if (categoryResults.length === 0) return null

                        return (
                          <div key={category} className="mb-4">
                            <div className="px-3 py-2 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                              {category}
                            </div>
                            <div className="space-y-1">
                              {categoryResults.map((result, index) => {
                                const globalIndex = filteredResults.indexOf(result)
                                const Icon = result.icon

                                return (
                                  <motion.a
                                    key={result.id}
                                    href={result.href}
                                    whileHover={{ x: 4 }}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer group ${
                                      selectedIndex === globalIndex
                                        ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-end)] text-white'
                                        : 'hover:bg-[var(--bg-base)] text-[var(--text-primary)]'
                                    }`}
                                    onMouseEnter={() => setSelectedIndex(globalIndex)}
                                  >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      selectedIndex === globalIndex
                                        ? 'bg-white/20'
                                        : 'bg-[var(--bg-base)]'
                                    }`}>
                                      <Icon size={18} className={selectedIndex === globalIndex ? 'text-white' : 'text-[var(--color-primary)]'} />
                                    </div>
                                    <div className="flex-1">
                                      <div className={`text-body font-medium ${
                                        selectedIndex === globalIndex ? 'text-white' : 'text-[var(--text-primary)]'
                                      }`}>
                                        {result.title}
                                      </div>
                                      <div className={`text-small ${
                                        selectedIndex === globalIndex ? 'text-white/80' : 'text-[var(--text-tertiary)]'
                                      }`}>
                                        {result.description}
                                      </div>
                                    </div>
                                    <ArrowRight size={16} className={`${
                                      selectedIndex === globalIndex ? 'text-white opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    } transition-opacity`} />
                                  </motion.a>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-tertiary)]">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-color)] font-mono">↑</kbd>
                      <kbd className="px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-color)] font-mono">↓</kbd>
                      <span>Navigate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border-color)] font-mono">↵</kbd>
                      <span>Select</span>
                    </div>
                  </div>
                  <span>Press ESC to close</span>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
