'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface QuickActionProps {
  title: string
  icon: LucideIcon
  onClick: () => void
  delay?: number
}

export default function QuickAction({ title, icon: Icon, onClick, delay = 0 }: QuickActionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="card-neumorphic rounded-xl p-6 text-left group relative overflow-hidden"
    >
      {/* Hover gradient effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 transition-opacity duration-300"
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow"
        >
          <Icon size={20} className="text-white" />
        </motion.div>

        <h3 className="text-body font-heading font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </h3>
      </div>

      {/* Ripple effect */}
      <span className="absolute inset-0 ripple" />
    </motion.button>
  )
}
