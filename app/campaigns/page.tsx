'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Play,
  Pause,
  Eye,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Target,
  BarChart3
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'
import Link from 'next/link'

interface Campaign {
  id: number
  name: string
  status: 'active' | 'paused' | 'completed' | 'draft'
  type: 'email' | 'social' | 'whatsapp' | 'sms'
  startDate: string
  endDate: string
  budget: number
  spent: number
  reach: number
  conversions: number
  color: string
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: 'Summer Sale 2024',
    status: 'active',
    type: 'email',
    startDate: 'Jun 1, 2024',
    endDate: 'Jun 30, 2024',
    budget: 5000,
    spent: 3200,
    reach: 45000,
    conversions: 1250,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 2,
    name: 'Product Launch - New Collection',
    status: 'active',
    type: 'social',
    startDate: 'Jun 15, 2024',
    endDate: 'Jul 15, 2024',
    budget: 8000,
    spent: 2400,
    reach: 68000,
    conversions: 890,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    name: 'Customer Re-engagement',
    status: 'paused',
    type: 'whatsapp',
    startDate: 'May 20, 2024',
    endDate: 'Jun 20, 2024',
    budget: 3000,
    spent: 1800,
    reach: 12000,
    conversions: 450,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    name: 'Flash Sale Weekend',
    status: 'completed',
    type: 'sms',
    startDate: 'May 10, 2024',
    endDate: 'May 12, 2024',
    budget: 2000,
    spent: 1950,
    reach: 25000,
    conversions: 2100,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    name: 'Black Friday Prep',
    status: 'draft',
    type: 'email',
    startDate: 'Nov 1, 2024',
    endDate: 'Nov 30, 2024',
    budget: 15000,
    spent: 0,
    reach: 0,
    conversions: 0,
    color: 'from-gray-500 to-gray-600'
  },
]

const statusConfig = {
  active: { label: 'Active', bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', dot: 'bg-green-500' },
  paused: { label: 'Paused', bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400', dot: 'bg-yellow-500' },
  completed: { label: 'Completed', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400', dot: 'bg-blue-500' },
  draft: { label: 'Draft', bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-700 dark:text-gray-400', dot: 'bg-gray-500' },
}

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const { isSubmenuOpen } = useSidebar()

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || campaign.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const totalBudget = campaigns.reduce((sum, c) => sum + c.budget, 0)
  const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0)
  const totalReach = campaigns.reduce((sum, c) => sum + c.reach, 0)
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length

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
                Campaign Management
              </h1>
              <p className="text-body text-[var(--text-secondary)]">
                Create, manage, and track all your marketing campaigns
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-green-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Active Campaigns</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{activeCampaigns}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <Target size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Total Reach</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{(totalReach / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <Users size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Total Budget</p>
                    <p className="text-h2 font-mono font-bold text-[var(--text-primary)]">
                      ${(totalBudget / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <DollarSign size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Total Spent</p>
                    <p className="text-h2 font-mono font-bold text-[var(--text-primary)]">
                      ${(totalSpent / 1000).toFixed(1)}K
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                    <BarChart3 size={24} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Filters and Actions */}
            <div className="card-neumorphic rounded-xl p-4 mb-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                {/* Search */}
                <div className="flex-1 w-full lg:max-w-md">
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                    <input
                      type="text"
                      placeholder="Search campaigns..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex flex-wrap gap-2">
                  {['all', 'active', 'paused', 'completed', 'draft'].map((status) => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-lg text-small font-medium transition-all capitalize ${
                        selectedStatus === status
                          ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                      }`}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
                >
                  <Plus size={18} />
                  <span className="text-small font-medium">New Campaign</span>
                </motion.button>
              </div>
            </div>

            {/* Campaigns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-neumorphic rounded-xl p-6"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${campaign.color} flex items-center justify-center text-white shadow-sm`}>
                        <Target size={24} />
                      </div>
                      <div>
                        <Link href={`/campaigns/${campaign.id}`} className="text-h3 font-heading font-semibold text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
                          {campaign.name}
                        </Link>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig[campaign.status].bg}`}>
                            <span className={`w-2 h-2 rounded-full ${statusConfig[campaign.status].dot} animate-pulse`} />
                            <span className={`text-xs font-medium ${statusConfig[campaign.status].text}`}>
                              {statusConfig[campaign.status].label}
                            </span>
                          </div>
                          <span className="px-2 py-1 rounded bg-[var(--bg-base)] text-xs font-medium text-[var(--text-secondary)] capitalize">
                            {campaign.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-[var(--bg-base)] transition-colors"
                    >
                      <MoreVertical size={18} className="text-[var(--text-secondary)]" />
                    </motion.button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[var(--text-tertiary)] mb-1">Reach</p>
                      <p className="text-body font-mono font-semibold text-[var(--text-primary)]">
                        {campaign.reach.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-tertiary)] mb-1">Conversions</p>
                      <p className="text-body font-mono font-semibold text-[var(--text-primary)]">
                        {campaign.conversions.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-tertiary)] mb-1">Budget</p>
                      <p className="text-body font-mono font-semibold text-[var(--text-primary)]">
                        ${campaign.budget.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-tertiary)] mb-1">Spent</p>
                      <p className="text-body font-mono font-semibold text-[var(--text-primary)]">
                        ${campaign.spent.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[var(--text-tertiary)]">Budget Spent</span>
                      <span className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                        {((campaign.spent / campaign.budget) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[var(--bg-base)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${campaign.color}`}
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                      <Calendar size={14} />
                      <span>{campaign.startDate} - {campaign.endDate}</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 transition-colors"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </motion.button>
                      {campaign.status === 'active' ? (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 text-yellow-600 transition-colors"
                          title="Pause Campaign"
                        >
                          <Pause size={16} />
                        </motion.button>
                      ) : campaign.status === 'paused' ? (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 transition-colors"
                          title="Resume Campaign"
                        >
                          <Play size={16} />
                        </motion.button>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
