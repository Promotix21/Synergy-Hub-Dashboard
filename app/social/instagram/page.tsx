'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Image as ImageIcon,
  Video,
  Film,
  TrendingUp,
  Users,
  Eye,
  Calendar
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'

interface InstagramPost {
  id: number
  type: 'post' | 'story' | 'reel'
  caption: string
  imageUrl?: string
  scheduled: string
  status: 'published' | 'scheduled' | 'draft'
  engagement: {
    likes: number
    comments: number
    saves: number
    reach: number
  }
}

const instaPosts: InstagramPost[] = [
  {
    id: 1,
    type: 'post',
    caption: 'New product launch! Swipe to see more 📸 #NewCollection',
    scheduled: 'Jun 15, 2024 - 9:00 AM',
    status: 'published',
    engagement: { likes: 1245, comments: 89, saves: 156, reach: 8900 }
  },
  {
    id: 2,
    type: 'reel',
    caption: 'Behind the scenes of our latest photoshoot 🎬',
    scheduled: 'Jun 18, 2024 - 6:00 PM',
    status: 'scheduled',
    engagement: { likes: 0, comments: 0, saves: 0, reach: 0 }
  },
  {
    id: 3,
    type: 'story',
    caption: 'Limited time offer! 24h only ⏰',
    scheduled: 'Jun 20, 2024 - 12:00 PM',
    status: 'draft',
    engagement: { likes: 0, comments: 0, saves: 0, reach: 0 }
  },
]

export default function InstagramPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'post' | 'story' | 'reel'>('all')
  const { isSubmenuOpen } = useSidebar()

  const filteredPosts = selectedFilter === 'all'
    ? instaPosts
    : instaPosts.filter(post => post.type === selectedFilter)

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
                  Instagram Automation
                </h1>
                <p className="text-body text-[var(--text-secondary)]">
                  Create stunning posts, stories, and reels
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white shadow-md"
              >
                <Plus size={18} />
                <span className="text-small font-medium">Create Content</span>
              </motion.button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-purple-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Followers</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">24.8K</p>
                    <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                      <TrendingUp size={12} />
                      <span>+12.5%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white">
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Avg. Likes</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">1.2K</p>
                    <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                      <TrendingUp size={12} />
                      <span>+8.3%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
                    <Heart size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-indigo-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Engagement</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">5.2%</p>
                    <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                      <TrendingUp size={12} />
                      <span>+2.1%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                    <MessageCircle size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Reach</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">45K</p>
                    <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
                      <TrendingUp size={12} />
                      <span>+18%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                    <Eye size={24} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Filters */}
            <div className="flex gap-3 mb-6">
              {['all', 'post', 'story', 'reel'].map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter as any)}
                  className={`px-4 py-2 rounded-lg text-small font-medium transition-all capitalize ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                  }`}
                >
                  {filter === 'all' ? 'All Content' : `${filter}s`}
                </motion.button>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-neumorphic rounded-xl overflow-hidden group cursor-pointer"
                >
                  {/* Mock Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                      {post.type === 'post' && <ImageIcon size={48} className="text-white/80" />}
                      {post.type === 'reel' && <Film size={48} className="text-white/80" />}
                      {post.type === 'story' && <Video size={48} className="text-white/80" />}
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        post.type === 'post' ? 'bg-blue-500/80 text-white' :
                        post.type === 'reel' ? 'bg-purple-500/80 text-white' :
                        'bg-pink-500/80 text-white'
                      }`}>
                        {post.type.toUpperCase()}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        post.status === 'published' ? 'bg-green-500/80 text-white' :
                        post.status === 'scheduled' ? 'bg-blue-500/80 text-white' :
                        'bg-gray-500/80 text-white'
                      }`}>
                        {post.status}
                      </div>
                    </div>
                  </div>

                  {/* Post Info */}
                  <div className="p-4">
                    <p className="text-small text-[var(--text-primary)] mb-2 line-clamp-2">
                      {post.caption}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)] mb-3">
                      <Calendar size={12} />
                      <span>{post.scheduled}</span>
                    </div>

                    {post.status === 'published' && (
                      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[var(--border-color)]">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-small text-[var(--text-primary)]">
                            <Heart size={14} />
                            <span className="font-mono">{post.engagement.likes.toLocaleString()}</span>
                          </div>
                          <span className="text-xs text-[var(--text-tertiary)]">Likes</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-small text-[var(--text-primary)]">
                            <MessageCircle size={14} />
                            <span className="font-mono">{post.engagement.comments}</span>
                          </div>
                          <span className="text-xs text-[var(--text-tertiary)]">Comments</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-small text-[var(--text-primary)]">
                            <Bookmark size={14} />
                            <span className="font-mono">{post.engagement.saves}</span>
                          </div>
                          <span className="text-xs text-[var(--text-tertiary)]">Saves</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-small text-[var(--text-primary)]">
                            <Eye size={14} />
                            <span className="font-mono">{(post.engagement.reach / 1000).toFixed(1)}K</span>
                          </div>
                          <span className="text-xs text-[var(--text-tertiary)]">Reach</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Add New Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-neumorphic rounded-xl aspect-square flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white mb-4">
                  <Plus size={32} />
                </div>
                <p className="text-body font-semibold text-[var(--text-primary)] mb-1">Create New</p>
                <p className="text-small text-[var(--text-tertiary)]">Post, Story, or Reel</p>
              </motion.div>
            </div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 card-neumorphic rounded-xl p-6"
            >
              <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                Instagram Best Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-body font-semibold text-[var(--text-primary)] mb-2">📸 Visual Quality</h4>
                  <p className="text-small text-[var(--text-secondary)]">Use high-resolution images (1080x1080px minimum) for feed posts</p>
                </div>
                <div>
                  <h4 className="text-body font-semibold text-[var(--text-primary)] mb-2">⏰ Post Timing</h4>
                  <p className="text-small text-[var(--text-secondary)]">Schedule posts when your audience is most active (check insights)</p>
                </div>
                <div>
                  <h4 className="text-body font-semibold text-[var(--text-primary)] mb-2">#️⃣ Hashtags</h4>
                  <p className="text-small text-[var(--text-secondary)]">Use 20-30 relevant hashtags to maximize reach and discoverability</p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
