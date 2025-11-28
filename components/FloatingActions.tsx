'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Plus, X, Megaphone, Users, Calendar, Send } from 'lucide-react'
import { useState } from 'react'

const quickActions = [
  { icon: Megaphone, label: 'New Campaign', color: 'from-purple-500 to-pink-500' },
  { icon: Users, label: 'Add Client', color: 'from-blue-500 to-cyan-500' },
  { icon: Calendar, label: 'Schedule Post', color: 'from-orange-500 to-red-500' },
  { icon: Send, label: 'Send Broadcast', color: 'from-green-500 to-emerald-500' },
]

export default function FloatingActions() {
  const [showActions, setShowActions] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      {/* Quick Actions FAB */}
      <div className="fixed bottom-24 right-6 z-50">
        <AnimatePresence>
          {showActions && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, y: 20, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, x: -8 }}
                  className={`group flex items-center gap-3 bg-gradient-to-r ${action.color} text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <action.icon size={20} />
                  <span className="text-small font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs transition-all duration-200 overflow-hidden">
                    {action.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: showActions ? 45 : 0 }}
          onClick={() => setShowActions(!showActions)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] shadow-2xl flex items-center justify-center text-white"
        >
          {showActions ? <X size={24} /> : <Plus size={24} />}
        </motion.button>
      </div>

      {/* Chat Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(!chatOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl flex items-center justify-center text-white animate-pulse-glow"
        >
          <MessageCircle size={24} />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          />
        </motion.button>

        {/* Chat Window (simplified) */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 w-80 h-96 bg-[var(--bg-card)] rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden"
            >
              <div className="h-full flex flex-col">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Team Chat</h3>
                    <button onClick={() => setChatOpen(false)}>
                      <X size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto bg-[var(--bg-base)]">
                  <div className="text-center text-small text-[var(--text-tertiary)]">
                    No messages yet. Start a conversation!
                  </div>
                </div>
                <div className="p-3 border-t border-[var(--border-color)]">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-green-500 text-small"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
