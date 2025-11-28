'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Calendar as CalendarIcon,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Edit,
  Trash2,
  Copy,
  Eye
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'

interface ScheduledPost {
  id: number
  platform: 'facebook' | 'instagram' | 'whatsapp' | 'email'
  title: string
  content: string
  scheduledDate: string
  scheduledTime: string
  status: 'pending' | 'published' | 'failed'
  color: string
}

const scheduledPosts: ScheduledPost[] = [
  {
    id: 1,
    platform: 'facebook',
    title: 'Summer Sale Announcement',
    content: 'Get ready for our biggest summer sale! 50% off everything! 🌞',
    scheduledDate: '2024-06-20',
    scheduledTime: '10:00 AM',
    status: 'pending',
    color: 'from-blue-600 to-blue-500'
  },
  {
    id: 2,
    platform: 'instagram',
    title: 'New Product Showcase',
    content: 'Introducing our latest collection! Swipe to see more ✨',
    scheduledDate: '2024-06-20',
    scheduledTime: '2:00 PM',
    status: 'pending',
    color: 'from-pink-600 via-purple-600 to-indigo-600'
  },
  {
    id: 3,
    platform: 'whatsapp',
    title: 'Flash Sale Reminder',
    content: 'Only 2 hours left! Don\'t miss out on our flash sale! ⚡',
    scheduledDate: '2024-06-20',
    scheduledTime: '6:00 PM',
    status: 'pending',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    platform: 'email',
    title: 'Weekly Newsletter',
    content: 'Your weekly digest: Top products, new arrivals, and exclusive offers',
    scheduledDate: '2024-06-21',
    scheduledTime: '9:00 AM',
    status: 'pending',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 5,
    platform: 'facebook',
    title: 'Customer Testimonial',
    content: 'See what our customers are saying about us! ⭐⭐⭐⭐⭐',
    scheduledDate: '2024-06-19',
    scheduledTime: '3:00 PM',
    status: 'published',
    color: 'from-blue-600 to-blue-500'
  },
]

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageCircle,
  email: Mail
}

export default function ScheduledPostsPage() {
  const [selectedDate, setSelectedDate] = useState<string>('all')
  const { isSubmenuOpen } = useSidebar()

  const filteredPosts = selectedDate === 'all'
    ? scheduledPosts
    : scheduledPosts.filter(post => post.scheduledDate === selectedDate)

  const pendingCount = scheduledPosts.filter(p => p.status === 'pending').length
  const publishedCount = scheduledPosts.filter(p => p.status === 'published').length

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Sidebar />
      <div className={`transition-all duration-300 ${isSubmenuOpen ? 'lg:ml-[330px]' : 'lg:ml-[70px]'}`}>
        <TopBar />

        <main className="pt-[65px] p-6">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-h1 font-heading font-bold text-gradient mb-2">
                  Scheduled Posts
                </h1>
                <p className="text-body text-[var(--text-secondary)]">
                  Manage and schedule content across all platforms
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
              >
                <Plus size={18} />
                <span className="text-small font-medium">Schedule Post</span>
              </motion.button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Pending Posts</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{pendingCount}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-green-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Published</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{publishedCount}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <CalendarIcon size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-purple-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">This Week</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">12</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <CalendarIcon size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-orange-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">This Month</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">48</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                    <CalendarIcon size={24} />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar View - Left Side */}
              <div className="lg:col-span-1">
                <div className="card-neumorphic rounded-xl p-6">
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                    Calendar
                  </h3>

                  {/* Mini Calendar */}
                  <div className="mb-4">
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-center text-xs font-semibold text-[var(--text-tertiary)]">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 2
                        const hasPost = day > 0 && day <= 30 && Math.random() > 0.7
                        return (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`aspect-square rounded-lg text-xs font-medium transition-all ${
                              day > 0 && day <= 30
                                ? hasPost
                                  ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-sm'
                                  : 'bg-[var(--bg-base)] text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                                : 'text-[var(--text-tertiary)]'
                            }`}
                          >
                            {day > 0 && day <= 30 ? day : ''}
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Quick Filters */}
                  <div className="space-y-2 mt-6">
                    <h4 className="text-small font-semibold text-[var(--text-secondary)] mb-3">Filter by Date</h4>
                    {['all', '2024-06-19', '2024-06-20', '2024-06-21'].map((date) => (
                      <motion.button
                        key={date}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedDate(date)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-small transition-all ${
                          selectedDate === date
                            ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white'
                            : 'text-[var(--text-secondary)] hover:bg-[var(--bg-base)]'
                        }`}
                      >
                        {date === 'all' ? 'All Dates' : new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Posts List - Right Side */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {filteredPosts.map((post, index) => {
                    const PlatformIcon = platformIcons[post.platform]
                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card-neumorphic rounded-xl p-5"
                      >
                        <div className="flex items-start gap-4">
                          {/* Platform Icon */}
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${post.color} flex items-center justify-center text-white flex-shrink-0`}>
                            <PlatformIcon size={24} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="text-body font-semibold text-[var(--text-primary)] mb-1">
                                  {post.title}
                                </h4>
                                <p className="text-small text-[var(--text-secondary)] line-clamp-2">
                                  {post.content}
                                </p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4 ${
                                post.status === 'pending' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                                post.status === 'published' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                                'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                              }`}>
                                {post.status}
                              </div>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)] mb-3">
                              <div className="flex items-center gap-1">
                                <CalendarIcon size={14} />
                                <span>{new Date(post.scheduledDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{post.scheduledTime}</span>
                              </div>
                              <div className="px-2 py-0.5 rounded bg-[var(--bg-base)] capitalize">
                                {post.platform}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
                              >
                                <Eye size={14} />
                                Preview
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
                              >
                                <Edit size={14} />
                                Edit
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all"
                              >
                                <Copy size={14} />
                                Duplicate
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--bg-base)] border border-red-200 dark:border-red-900/30 text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                              >
                                <Trash2 size={14} />
                                Delete
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
