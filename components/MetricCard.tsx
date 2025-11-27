'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  trend: number
  icon: LucideIcon
  gradient: 'primary' | 'secondary' | 'accent1' | 'accent2'
  delay?: number
}

const gradientClasses = {
  primary: 'from-[#E8AA96] to-[#C4B5D8]',
  secondary: 'from-[#C4B5D8] to-[#A8C5DA]',
  accent1: 'from-[#B8E3D1] to-[#A8C5DA]',
  accent2: 'from-[#A8C5DA] to-[#E8AA96]',
}

export default function MetricCard({ title, value, trend, icon: Icon, gradient, delay = 0 }: MetricCardProps) {
  const isPositive = trend >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
      className="card-neumorphic rounded-2xl p-6 relative overflow-hidden transition-all duration-300"
    >
      {/* Background gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClasses[gradient]} opacity-10 rounded-full blur-2xl`} />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClasses[gradient]} flex items-center justify-center mb-4 shadow-lg`}
        >
          <Icon size={24} className="text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-small text-[var(--text-secondary)] font-medium mb-2">
          {title}
        </h3>

        {/* Value and Trend */}
        <div className="flex items-end justify-between">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="text-metric font-mono font-bold text-[var(--text-primary)]"
          >
            {value}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 }}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
              isPositive
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}
          >
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span className="text-xs font-semibold">{Math.abs(trend)}%</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
