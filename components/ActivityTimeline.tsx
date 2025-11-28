'use client'

import { motion } from 'framer-motion'

interface Activity {
  id: number
  user: string
  avatar: string
  action: string
  time: string
  type: 'campaign' | 'client' | 'post' | 'message'
}

const mockActivities: Activity[] = [
  { id: 1, user: 'Sarah Johnson', avatar: 'SJ', action: 'Created new campaign "Summer Sale 2024"', time: '5 min ago', type: 'campaign' },
  { id: 2, user: 'Mike Chen', avatar: 'MC', action: 'Added new client "Tech Corp Inc."', time: '15 min ago', type: 'client' },
  { id: 3, user: 'Emma Davis', avatar: 'ED', action: 'Scheduled Instagram post for tomorrow', time: '1 hour ago', type: 'post' },
  { id: 4, user: 'John Smith', avatar: 'JS', action: 'Sent WhatsApp broadcast to 250 contacts', time: '2 hours ago', type: 'message' },
  { id: 5, user: 'Lisa Wang', avatar: 'LW', action: 'Updated campaign metrics dashboard', time: '3 hours ago', type: 'campaign' },
]

const typeColors = {
  campaign: 'from-purple-400 to-pink-400',
  client: 'from-blue-400 to-cyan-400',
  post: 'from-orange-400 to-red-400',
  message: 'from-green-400 to-emerald-400',
}

export default function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="card-neumorphic rounded-2xl p-6"
    >
      <h2 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {mockActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ x: 4 }}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-[var(--bg-base)] transition-colors cursor-pointer group"
          >
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${typeColors[activity.type]} flex items-center justify-center text-white font-semibold text-small shadow-md flex-shrink-0`}
            >
              {activity.avatar}
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-body text-[var(--text-primary)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                <span className="font-semibold">{activity.user}</span>{' '}
                <span className="font-normal text-[var(--text-secondary)]">{activity.action}</span>
              </p>
              <span className="text-small text-[var(--text-tertiary)] mt-1 block">
                {activity.time}
              </span>
            </div>

            {/* Indicator dot */}
            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${typeColors[activity.type]} mt-2 flex-shrink-0`} />
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 w-full py-2 text-small text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-medium transition-colors"
      >
        View all activity →
      </motion.button>
    </motion.div>
  )
}
