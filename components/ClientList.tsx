'use client'

import { motion } from 'framer-motion'
import { MoreVertical, Mail, Phone, MessageCircle } from 'lucide-react'

interface Client {
  id: number
  name: string
  avatar: string
  email: string
  status: 'active' | 'inactive' | 'pending'
  campaigns: number
}

const mockClients: Client[] = [
  { id: 1, name: 'Acme Corp', avatar: 'AC', email: 'contact@acme.com', status: 'active', campaigns: 5 },
  { id: 2, name: 'TechStart Inc', avatar: 'TS', email: 'hello@techstart.io', status: 'active', campaigns: 3 },
  { id: 3, name: 'Design Studios', avatar: 'DS', email: 'team@design.co', status: 'pending', campaigns: 1 },
  { id: 4, name: 'Marketing Pro', avatar: 'MP', email: 'info@marketpro.com', status: 'active', campaigns: 8 },
  { id: 5, name: 'Creative Agency', avatar: 'CA', email: 'hi@creative.net', status: 'inactive', campaigns: 2 },
]

const statusColors = {
  active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  inactive: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400',
  pending: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
}

export default function ClientList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="card-neumorphic rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h3 font-heading font-semibold text-[var(--text-primary)]">
          Recent Clients
        </h2>
        <button className="text-small text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-medium transition-colors">
          View All →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--border-color)]">
              <th className="text-left py-3 px-4 text-small font-semibold text-[var(--text-secondary)]">Client</th>
              <th className="text-left py-3 px-4 text-small font-semibold text-[var(--text-secondary)]">Email</th>
              <th className="text-left py-3 px-4 text-small font-semibold text-[var(--text-secondary)]">Status</th>
              <th className="text-left py-3 px-4 text-small font-semibold text-[var(--text-secondary)]">Campaigns</th>
              <th className="text-left py-3 px-4 text-small font-semibold text-[var(--text-secondary)]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockClients.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ backgroundColor: 'var(--bg-base)' }}
                className="border-b border-[var(--border-color)] transition-colors cursor-pointer"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-semibold text-small">
                      {client.avatar}
                    </div>
                    <span className="font-medium text-body text-[var(--text-primary)]">{client.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-small text-[var(--text-secondary)]">{client.email}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusColors[client.status]}`}>
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-small font-mono font-semibold text-[var(--text-primary)]">
                  {client.campaigns}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-[var(--color-accent1)]/20 text-[var(--text-secondary)] hover:text-[var(--color-accent1)] transition-colors"
                      title="Send Email"
                    >
                      <Mail size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-[var(--color-accent2)]/20 text-[var(--text-secondary)] hover:text-[var(--color-accent2)] transition-colors"
                      title="Call"
                    >
                      <Phone size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-[var(--color-primary)]/20 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      title="WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors"
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
    </motion.div>
  )
}
