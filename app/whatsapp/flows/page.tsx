'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Play,
  Save,
  MessageCircle,
  Clock,
  Users,
  Send,
  FileText,
  Image as ImageIcon,
  Video,
  Phone,
  CheckCircle,
  Settings,
  Copy,
  Trash2
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'

interface FlowTemplate {
  id: number
  name: string
  description: string
  icon: any
  color: string
  messages: number
  active: boolean
}

const templates: FlowTemplate[] = [
  { id: 1, name: 'Welcome Series', description: 'Greet new contacts and introduce your business', icon: MessageCircle, color: 'from-green-500 to-emerald-500', messages: 3, active: true },
  { id: 2, name: 'Order Confirmation', description: 'Send order details and tracking info', icon: CheckCircle, color: 'from-blue-500 to-cyan-500', messages: 2, active: true },
  { id: 3, name: 'Appointment Reminder', description: 'Remind customers about upcoming appointments', icon: Clock, color: 'from-purple-500 to-pink-500', messages: 2, active: false },
  { id: 4, name: 'Product Catalog', description: 'Showcase products with images and descriptions', icon: ImageIcon, color: 'from-orange-500 to-amber-500', messages: 5, active: true },
  { id: 5, name: 'Customer Survey', description: 'Collect feedback from customers', icon: FileText, color: 'from-indigo-500 to-purple-500', messages: 4, active: false },
  { id: 6, name: 'Promotional Campaign', description: 'Announce special offers and discounts', icon: Send, color: 'from-pink-500 to-rose-500', messages: 3, active: true },
]

export default function WhatsAppFlowsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<FlowTemplate | null>(null)
  const { isSubmenuOpen } = useSidebar()

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Sidebar />
      <div className={`transition-all duration-300 ${isSubmenuOpen ? 'lg:ml-[330px]' : 'lg:ml-[70px]'}`}>
        <TopBar />

        <main className="pt-[65px] p-6">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-h1 font-heading font-bold text-gradient mb-2">
                WhatsApp Flow Designer
              </h1>
              <p className="text-body text-[var(--text-secondary)]">
                Create automated WhatsApp message flows for your campaigns
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-green-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Active Flows</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">4</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <MessageCircle size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Messages Sent</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">2.4K</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <Send size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Response Rate</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">68%</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <Users size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Avg. Response Time</p>
                    <p className="text-h2 font-mono font-bold text-[var(--text-primary)]">2m</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
                >
                  <Plus size={18} />
                  <span className="text-small font-medium">Create New Flow</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <FileText size={18} />
                  <span className="text-small font-medium">Templates</span>
                </motion.button>
              </div>
            </div>

            {/* Flow Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-neumorphic rounded-xl p-6 cursor-pointer transition-all"
                  onClick={() => setSelectedTemplate(template)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center text-white shadow-lg`}>
                      <template.icon size={28} />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      template.active
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                    }`}>
                      {template.active ? 'Active' : 'Draft'}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-2">
                    {template.name}
                  </h3>
                  <p className="text-small text-[var(--text-secondary)] mb-4">
                    {template.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                    <div className="flex items-center gap-2 text-small text-[var(--text-tertiary)]">
                      <MessageCircle size={16} />
                      <span>{template.messages} messages</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Settings size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Copy size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Start Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 card-neumorphic rounded-xl p-6"
            >
              <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                Getting Started with WhatsApp Flows
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-body font-semibold text-[var(--text-primary)] mb-1">Choose a Template</h4>
                    <p className="text-small text-[var(--text-secondary)]">Select from pre-built flows or start from scratch</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-body font-semibold text-[var(--text-primary)] mb-1">Customize Messages</h4>
                    <p className="text-small text-[var(--text-secondary)]">Add your content, images, and call-to-actions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-body font-semibold text-[var(--text-primary)] mb-1">Launch & Monitor</h4>
                    <p className="text-small text-[var(--text-secondary)]">Activate your flow and track performance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
