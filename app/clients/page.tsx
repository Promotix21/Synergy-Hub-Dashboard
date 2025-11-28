'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  MessageCircle,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import Link from 'next/link'

interface Client {
  id: number
  name: string
  email: string
  phone: string
  company: string
  status: 'active' | 'inactive' | 'pending' | 'hot' | 'cold'
  revenue: number
  campaigns: number
  lastContact: string
  joinedDate: string
  avatar: string
  color: string
}

const clients: Client[] = [
  { id: 1, name: 'John Smith', email: 'john@acme.com', phone: '+1 234 567 8900', company: 'Acme Corp', status: 'active', revenue: 45000, campaigns: 12, lastContact: '2 hours ago', joinedDate: 'Jan 15, 2024', avatar: 'JS', color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@techstart.io', phone: '+1 234 567 8901', company: 'TechStart Inc', status: 'hot', revenue: 78000, campaigns: 18, lastContact: '1 day ago', joinedDate: 'Feb 20, 2024', avatar: 'SJ', color: 'from-pink-500 to-rose-500' },
  { id: 3, name: 'Mike Chen', email: 'mike@design.co', phone: '+1 234 567 8902', company: 'Design Studios', status: 'pending', revenue: 12000, campaigns: 3, lastContact: '3 days ago', joinedDate: 'Mar 10, 2024', avatar: 'MC', color: 'from-purple-500 to-indigo-500' },
  { id: 4, name: 'Emma Davis', email: 'emma@marketpro.com', phone: '+1 234 567 8903', company: 'Marketing Pro', status: 'active', revenue: 92000, campaigns: 24, lastContact: '5 hours ago', joinedDate: 'Jan 5, 2024', avatar: 'ED', color: 'from-green-500 to-emerald-500' },
  { id: 5, name: 'David Wilson', email: 'david@creative.net', phone: '+1 234 567 8904', company: 'Creative Agency', status: 'cold', revenue: 8000, campaigns: 2, lastContact: '2 weeks ago', joinedDate: 'Apr 1, 2024', avatar: 'DW', color: 'from-orange-500 to-amber-500' },
  { id: 6, name: 'Lisa Wang', email: 'lisa@brandify.com', phone: '+1 234 567 8905', company: 'Brandify Co', status: 'hot', revenue: 156000, campaigns: 32, lastContact: '1 hour ago', joinedDate: 'Dec 12, 2023', avatar: 'LW', color: 'from-indigo-500 to-purple-500' },
  { id: 7, name: 'Tom Brown', email: 'tom@social.io', phone: '+1 234 567 8906', company: 'Social Media Co', status: 'active', revenue: 34000, campaigns: 9, lastContact: '12 hours ago', joinedDate: 'Feb 28, 2024', avatar: 'TB', color: 'from-teal-500 to-cyan-500' },
  { id: 8, name: 'Anna Lee', email: 'anna@growth.com', phone: '+1 234 567 8907', company: 'Growth Hacks', status: 'inactive', revenue: 0, campaigns: 0, lastContact: '1 month ago', joinedDate: 'May 5, 2024', avatar: 'AL', color: 'from-gray-500 to-gray-600' },
]

const statusConfig = {
  active: { label: 'Active', bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', dot: 'bg-green-500' },
  inactive: { label: 'Inactive', bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-700 dark:text-gray-400', dot: 'bg-gray-500' },
  pending: { label: 'Pending', bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400', dot: 'bg-yellow-500' },
  hot: { label: 'Hot Lead', bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400', dot: 'bg-red-500' },
  cold: { label: 'Cold Lead', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400', dot: 'bg-blue-500' },
}

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const totalRevenue = clients.reduce((sum, c) => sum + c.revenue, 0)
  const activeClients = clients.filter(c => c.status === 'active').length
  const hotLeads = clients.filter(c => c.status === 'hot').length

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Sidebar />
      <div className="lg:ml-[70px]">
        <TopBar />

        <main className="pt-[65px] p-6">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-h1 font-heading font-bold text-gradient mb-2">
                Client Management
              </h1>
              <p className="text-body text-[var(--text-secondary)]">
                Manage and track all your clients in one place
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Total Clients</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{clients.length}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <TrendingUp size={24} />
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
                    <p className="text-small text-[var(--text-secondary)] mb-1">Active Clients</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{activeClients}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <TrendingUp size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-red-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Hot Leads</p>
                    <p className="text-metric font-mono font-bold text-[var(--text-primary)]">{hotLeads}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white">
                    <TrendingUp size={24} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-neumorphic rounded-xl p-4 border-l-4 border-purple-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-small text-[var(--text-secondary)] mb-1">Total Revenue</p>
                    <p className="text-h2 font-mono font-bold text-[var(--text-primary)]">
                      ${(totalRevenue / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                    <DollarSign size={24} />
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
                      placeholder="Search clients..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex flex-wrap gap-2">
                  {['all', 'active', 'hot', 'pending', 'cold', 'inactive'].map((status) => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-lg text-small font-medium transition-all ${
                        selectedStatus === status
                          ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md'
                          : 'bg-[var(--bg-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </motion.button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Download size={18} />
                    <span className="hidden sm:inline text-small font-medium">Export</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
                  >
                    <Plus size={18} />
                    <span className="hidden sm:inline text-small font-medium">Add Client</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Clients Table */}
            <div className="card-neumorphic rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--bg-base)] border-b-2 border-[var(--border-color)]">
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Client</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Contact</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Company</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Status</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Revenue</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Campaigns</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Last Contact</th>
                      <th className="text-left py-4 px-4 text-small font-semibold text-[var(--text-secondary)]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client, index) => (
                      <motion.tr
                        key={client.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ backgroundColor: 'var(--bg-base)' }}
                        className="border-b border-[var(--border-color)] transition-colors cursor-pointer"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-semibold text-small shadow-sm`}>
                              {client.avatar}
                            </div>
                            <div>
                              <Link href={`/clients/${client.id}`} className="font-medium text-body text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
                                {client.name}
                              </Link>
                              <p className="text-xs text-[var(--text-tertiary)]">
                                Joined {client.joinedDate}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-small">
                            <p className="text-[var(--text-primary)] mb-1">{client.email}</p>
                            <p className="text-[var(--text-tertiary)]">{client.phone}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-small text-[var(--text-primary)] font-medium">
                          {client.company}
                        </td>
                        <td className="py-4 px-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig[client.status].bg}`}>
                            <span className={`w-2 h-2 rounded-full ${statusConfig[client.status].dot} animate-pulse`} />
                            <span className={`text-xs font-medium ${statusConfig[client.status].text}`}>
                              {statusConfig[client.status].label}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-body font-mono font-semibold text-[var(--text-primary)]">
                              ${(client.revenue / 1000).toFixed(1)}K
                            </span>
                            {client.revenue > 50000 ? (
                              <TrendingUp size={14} className="text-green-500" />
                            ) : (
                              <TrendingDown size={14} className="text-red-500" />
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--bg-base)] text-small font-mono font-semibold text-[var(--text-primary)]">
                            {client.campaigns}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-small text-[var(--text-tertiary)]">
                          {client.lastContact}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-[var(--text-secondary)] hover:text-blue-600 transition-colors"
                              title="View Details"
                            >
                              <Eye size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-[var(--text-secondary)] hover:text-green-600 transition-colors"
                              title="Send Email"
                            >
                              <Mail size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 text-[var(--text-secondary)] hover:text-purple-600 transition-colors"
                              title="WhatsApp"
                            >
                              <MessageCircle size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                            >
                              <MoreVertical size={16} />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-4 py-4 border-t border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-base)]">
                <p className="text-small text-[var(--text-secondary)]">
                  Showing {filteredClients.length} of {clients.length} clients
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-small font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-small font-medium shadow-sm">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
