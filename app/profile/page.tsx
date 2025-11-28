'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Camera,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Link as LinkIcon,
  Briefcase,
  Award,
  Users,
  MessageCircle,
  MoreHorizontal,
  Settings
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'

const tabs = ['Timeline', 'About', 'Campaigns', 'Team', 'Activity']

const posts = [
  { id: 1, content: 'Just launched our new summer campaign! Excited to see the results 🚀', time: '2 hours ago', likes: 24, comments: 5 },
  { id: 2, content: 'Great meeting with the team today. We\'re making amazing progress!', time: '1 day ago', likes: 18, comments: 3 },
  { id: 3, content: 'Celebrating 100+ successful campaigns this year! 🎉', time: '3 days ago', likes: 45, comments: 12 },
]

const teamMembers = [
  { name: 'Sarah Johnson', role: 'Marketing Manager', avatar: 'SJ', color: 'from-pink-500 to-rose-500' },
  { name: 'Mike Chen', role: 'Social Media Lead', avatar: 'MC', color: 'from-blue-500 to-cyan-500' },
  { name: 'Emma Davis', role: 'Content Creator', avatar: 'ED', color: 'from-purple-500 to-indigo-500' },
  { name: 'John Smith', role: 'Analytics Specialist', avatar: 'JS', color: 'from-green-500 to-emerald-500' },
]

const achievements = [
  { title: 'Top Performer', description: 'Achieved 150% of Q1 targets', icon: Award, color: 'from-yellow-500 to-orange-500' },
  { title: 'Team Leader', description: 'Led 5+ successful campaigns', icon: Users, color: 'from-blue-500 to-indigo-500' },
  { title: 'Innovation Award', description: 'Best automation workflow 2024', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Timeline')

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Sidebar />
      <div className="lg:ml-[70px]">
        <TopBar />

        <main className="pt-[65px]">
          {/* Cover Photo */}
          <div className="relative h-80 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent1)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all"
            >
              <Camera size={18} />
              <span className="text-small font-medium">Edit Cover</span>
            </motion.button>
          </div>

          {/* Profile Header */}
          <div className="bg-[var(--bg-card)] border-b border-[var(--border-color)] shadow-sm">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-20 pb-6">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-4xl shadow-xl ring-4 ring-[var(--bg-card)]">
                    JD
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-2 right-2 p-2 rounded-lg bg-[var(--bg-card)] shadow-md hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  >
                    <Camera size={16} />
                  </motion.button>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  <h1 className="text-h1 font-heading font-bold text-[var(--text-primary)] mb-1">
                    John Doe
                  </h1>
                  <p className="text-body text-[var(--text-secondary)] mb-3">
                    Senior Marketing Manager • Campaign Expert
                  </p>
                  <div className="flex flex-wrap gap-4 text-small text-[var(--text-tertiary)]">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>Synergy Hub CRM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>Joined January 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>156 connections</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
                  >
                    <MessageCircle size={18} />
                    <span className="text-small font-medium">Message</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Settings size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-medium text-small whitespace-nowrap transition-all relative ${
                      activeTab === tab
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-[1400px] mx-auto px-6 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Sidebar */}
              <div className="space-y-6">
                {/* About Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-neumorphic rounded-xl p-4"
                >
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                    About
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-[var(--text-tertiary)]" />
                      <span className="text-small text-[var(--text-secondary)]">john.doe@synergyhub.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-[var(--text-tertiary)]" />
                      <span className="text-small text-[var(--text-secondary)]">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <LinkIcon size={18} className="text-[var(--text-tertiary)]" />
                      <a href="#" className="text-small text-[var(--color-primary)] hover:underline">linkedin.com/in/johndoe</a>
                    </div>
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="card-neumorphic rounded-xl p-4"
                >
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                    Achievements
                  </h3>
                  <div className="space-y-3">
                    {achievements.map((achievement) => (
                      <div key={achievement.title} className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                          <achievement.icon size={20} />
                        </div>
                        <div>
                          <p className="text-small font-semibold text-[var(--text-primary)]">
                            {achievement.title}
                          </p>
                          <p className="text-xs text-[var(--text-tertiary)]">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Team Members */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="card-neumorphic rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)]">
                      Team
                    </h3>
                    <span className="text-xs text-[var(--text-tertiary)]">{teamMembers.length} members</span>
                  </div>
                  <div className="space-y-3">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-semibold text-small`}>
                          {member.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-small font-medium text-[var(--text-primary)]">{member.name}</p>
                          <p className="text-xs text-[var(--text-tertiary)]">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {activeTab === 'Timeline' && (
                  <>
                    {/* Create Post */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="card-neumorphic rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-semibold text-small">
                          JD
                        </div>
                        <input
                          type="text"
                          placeholder="What's on your mind, John?"
                          className="flex-1 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                        />
                      </div>
                    </motion.div>

                    {/* Posts */}
                    {posts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="card-neumorphic rounded-xl p-4"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-semibold text-small">
                            JD
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-body text-[var(--text-primary)]">John Doe</h4>
                            <p className="text-xs text-[var(--text-tertiary)]">{post.time}</p>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-[var(--bg-base)] transition-colors">
                            <MoreHorizontal size={18} className="text-[var(--text-secondary)]" />
                          </button>
                        </div>

                        <p className="text-body text-[var(--text-primary)] mb-4">{post.content}</p>

                        <div className="flex items-center gap-6 pt-3 border-t border-[var(--border-color)] text-small text-[var(--text-tertiary)]">
                          <button className="hover:text-[var(--color-primary)] transition-colors">
                            👍 {post.likes} Likes
                          </button>
                          <button className="hover:text-[var(--color-primary)] transition-colors">
                            💬 {post.comments} Comments
                          </button>
                          <button className="hover:text-[var(--color-primary)] transition-colors">
                            🔗 Share
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}

                {activeTab === 'About' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="card-neumorphic rounded-xl p-6"
                  >
                    <h3 className="text-h2 font-heading font-semibold text-[var(--text-primary)] mb-4">
                      About Me
                    </h3>
                    <p className="text-body text-[var(--text-secondary)] mb-6">
                      Passionate marketing professional with over 8 years of experience in digital marketing,
                      campaign management, and team leadership. Specializing in data-driven strategies and
                      innovative automation solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-small font-semibold text-[var(--text-primary)] mb-3">Experience</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-body text-[var(--text-primary)]">Senior Marketing Manager</p>
                            <p className="text-small text-[var(--text-secondary)]">Synergy Hub CRM</p>
                            <p className="text-xs text-[var(--text-tertiary)]">Jan 2023 - Present</p>
                          </div>
                          <div>
                            <p className="font-medium text-body text-[var(--text-primary)]">Marketing Specialist</p>
                            <p className="text-small text-[var(--text-secondary)]">Digital Solutions Inc</p>
                            <p className="text-xs text-[var(--text-tertiary)]">Jun 2020 - Dec 2022</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-small font-semibold text-[var(--text-primary)] mb-3">Education</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium text-body text-[var(--text-primary)]">MBA in Marketing</p>
                            <p className="text-small text-[var(--text-secondary)]">Stanford University</p>
                            <p className="text-xs text-[var(--text-tertiary)]">2018 - 2020</p>
                          </div>
                          <div>
                            <p className="font-medium text-body text-[var(--text-primary)]">BSc in Business</p>
                            <p className="text-small text-[var(--text-secondary)]">UC Berkeley</p>
                            <p className="text-xs text-[var(--text-tertiary)]">2014 - 2018</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
