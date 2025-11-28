'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Calendar,
  BarChart3,
  Users,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  TrendingUp,
  Image as ImageIcon,
  Video,
  Link as LinkIcon,
  Clock
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'

interface Post {
  id: number
  content: string
  image?: string
  type: 'text' | 'image' | 'video' | 'link'
  scheduled: string
  status: 'published' | 'scheduled' | 'draft'
  engagement: {
    likes: number
    comments: number
    shares: number
    reach: number
  }
}

const posts: Post[] = [
  {
    id: 1,
    content: 'Exciting news! Our summer collection is now live. Check out the latest trends! 🌞',
    type: 'image',
    scheduled: '2024-06-15 10:00 AM',
    status: 'published',
    engagement: { likes: 234, comments: 45, shares: 12, reach: 3400 }
  },
  {
    id: 2,
    content: 'Join us this Friday for a live Q&A session about sustainable fashion!',
    type: 'video',
    scheduled: '2024-06-18 3:00 PM',
    status: 'scheduled',
    engagement: { likes: 0, comments: 0, shares: 0, reach: 0 }
  },
  {
    id: 3,
    content: 'Behind the scenes: How we create our handmade products',
    type: 'image',
    scheduled: '2024-06-20 12:00 PM',
    status: 'draft',
    engagement: { likes: 0, comments: 0, shares: 0, reach: 0 }
  },
]

export default function FacebookPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'posts' | 'analytics'>('overview')
  const { isSubmenuOpen } = useSidebar()

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
                  Facebook Automation
                </h1>
                <p className="text-body text-[var(--text-secondary)]">
                  Schedule posts, track engagement, and grow your audience
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
              >
                <Plus size={18} />
                <span className="text-small font-medium">Create Post</span>
              </motion.button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-[var(--border-color)]">
              {['overview', 'posts', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab as any)}
                  className={`px-6 py-3 font-medium text-small capitalize transition-all relative ${
                    selectedTab === tab
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab}
                  {selectedTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                    />
                  )}
                </button>
              ))}
            </div>

            {selectedTab === 'overview' && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card-neumorphic rounded-xl p-4 border-l-4 border-blue-500"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-small text-[var(--text-secondary)] mb-1">Total Followers</p>
                        <p className="text-metric font-mono font-bold text-[var(--text-primary)]">12.5K</p>
                        <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                          <TrendingUp size={12} />
                          <span>+8.2%</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white">
                        <Users size={24} />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="card-neumorphic rounded-xl p-4 border-l-4 border-pink-500"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-small text-[var(--text-secondary)] mb-1">Engagement Rate</p>
                        <p className="text-metric font-mono font-bold text-[var(--text-primary)]">4.8%</p>
                        <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                          <TrendingUp size={12} />
                          <span>+1.2%</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                        <ThumbsUp size={24} />
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
                        <p className="text-small text-[var(--text-secondary)] mb-1">Posts This Week</p>
                        <p className="text-metric font-mono font-bold text-[var(--text-primary)]">8</p>
                        <div className="flex items-center gap-1 text-xs text-[var(--text-tertiary)] mt-1">
                          <Calendar size={12} />
                          <span>3 scheduled</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                        <Calendar size={24} />
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
                        <p className="text-small text-[var(--text-secondary)] mb-1">Avg. Reach</p>
                        <p className="text-metric font-mono font-bold text-[var(--text-primary)]">3.2K</p>
                        <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                          <TrendingUp size={12} />
                          <span>+15%</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                        <Eye size={24} />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Recent Posts */}
                <div className="card-neumorphic rounded-xl p-6">
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {posts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon based on type */}
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                            post.type === 'image' ? 'from-blue-500 to-cyan-500' :
                            post.type === 'video' ? 'from-purple-500 to-pink-500' :
                            'from-green-500 to-emerald-500'
                          } flex items-center justify-center text-white flex-shrink-0`}>
                            {post.type === 'image' && <ImageIcon size={20} />}
                            {post.type === 'video' && <Video size={20} />}
                            {post.type === 'text' && <MessageCircle size={20} />}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <p className="text-body text-[var(--text-primary)] mb-2">{post.content}</p>
                            <div className="flex items-center gap-4 text-small text-[var(--text-tertiary)]">
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{post.scheduled}</span>
                              </div>
                              <div className={`px-2 py-1 rounded text-xs font-semibold ${
                                post.status === 'published' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                                post.status === 'scheduled' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                                'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                              }`}>
                                {post.status}
                              </div>
                            </div>
                            {post.status === 'published' && (
                              <div className="flex items-center gap-4 mt-3 text-small">
                                <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                  <ThumbsUp size={14} />
                                  <span>{post.engagement.likes}</span>
                                </div>
                                <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                  <MessageCircle size={14} />
                                  <span>{post.engagement.comments}</span>
                                </div>
                                <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                  <Share2 size={14} />
                                  <span>{post.engagement.shares}</span>
                                </div>
                                <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                                  <Eye size={14} />
                                  <span>{post.engagement.reach.toLocaleString()}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {selectedTab === 'posts' && (
              <div className="card-neumorphic rounded-xl p-6">
                <p className="text-[var(--text-secondary)]">Posts management interface coming soon...</p>
              </div>
            )}

            {selectedTab === 'analytics' && (
              <div className="card-neumorphic rounded-xl p-6">
                <p className="text-[var(--text-secondary)]">Analytics dashboard coming soon...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
