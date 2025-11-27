'use client'

import { motion } from 'framer-motion'
import { Calendar as CalendarIcon, Clock, Instagram, Facebook } from 'lucide-react'
import { useState } from 'react'

interface ScheduledPost {
  id: number
  platform: 'instagram' | 'facebook'
  content: string
  date: string
  time: string
}

const mockPosts: ScheduledPost[] = [
  { id: 1, platform: 'instagram', content: 'Summer sale announcement', date: 'Nov 28', time: '10:00 AM' },
  { id: 2, platform: 'facebook', content: 'New product launch', date: 'Nov 28', time: '2:00 PM' },
  { id: 3, platform: 'instagram', content: 'Behind the scenes story', date: 'Nov 29', time: '9:00 AM' },
  { id: 4, platform: 'facebook', content: 'Customer testimonial', date: 'Nov 30', time: '11:00 AM' },
]

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
}

const platformColors = {
  instagram: 'from-pink-500 to-purple-500',
  facebook: 'from-blue-600 to-blue-400',
}

export default function ScheduledCalendar() {
  const [selectedDate, setSelectedDate] = useState(28)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="card-neumorphic rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h3 font-heading font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <CalendarIcon size={24} className="text-[var(--color-primary)]" />
          Scheduled Posts
        </h2>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-small font-medium hover:shadow-lg transition-shadow">
          Schedule New
        </button>
      </div>

      {/* Mini Calendar */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center text-xs text-[var(--text-tertiary)] font-medium">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => {
          const hasPost = [28, 29, 30].includes(day)
          return (
            <motion.button
              key={day}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDate(day)}
              className={`aspect-square rounded-lg text-small font-medium transition-all ${
                day === selectedDate
                  ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md'
                  : hasPost
                  ? 'bg-[var(--color-primary)]/10 text-[var(--text-primary)] relative'
                  : 'text-[var(--text-tertiary)] hover:bg-[var(--bg-base)]'
              }`}
            >
              {day > 7 && day < 35 ? day - 7 : ''}
              {hasPost && day !== selectedDate && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Upcoming Posts */}
      <div className="space-y-3">
        <h3 className="text-small font-semibold text-[var(--text-secondary)] mb-3">
          Upcoming Posts
        </h3>
        {mockPosts.map((post, index) => {
          const Icon = platformIcons[post.platform]
          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-base)] hover:bg-[var(--bg-card)] border border-[var(--border-color)] transition-all cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platformColors[post.platform]} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body text-[var(--text-primary)] font-medium truncate group-hover:text-[var(--color-primary)] transition-colors">
                  {post.content}
                </p>
                <div className="flex items-center gap-3 mt-1 text-small text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-1">
                    <CalendarIcon size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.time}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
