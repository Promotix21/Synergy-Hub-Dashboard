'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const data = [
  { month: 'Jan', campaigns: 12, engagement: 65 },
  { month: 'Feb', campaigns: 19, engagement: 72 },
  { month: 'Mar', campaigns: 15, engagement: 68 },
  { month: 'Apr', campaigns: 25, engagement: 85 },
  { month: 'May', campaigns: 22, engagement: 78 },
  { month: 'Jun', campaigns: 30, engagement: 92 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-3 shadow-lg">
        <p className="text-small font-semibold text-[var(--text-primary)] mb-1">
          {payload[0].payload.month}
        </p>
        <p className="text-small text-[var(--color-primary)]">
          Campaigns: <span className="font-bold">{payload[0].value}</span>
        </p>
        <p className="text-small text-[var(--color-secondary)]">
          Engagement: <span className="font-bold">{payload[1].value}%</span>
        </p>
      </div>
    )
  }
  return null
}

export default function CampaignChart() {
  const [activeMetric, setActiveMetric] = useState<'campaigns' | 'engagement'>('campaigns')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="card-neumorphic rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h3 font-heading font-semibold text-[var(--text-primary)]">
          Campaign Performance
        </h2>

        <div className="flex gap-2 bg-[var(--bg-base)] rounded-lg p-1">
          <button
            onClick={() => setActiveMetric('campaigns')}
            className={`px-4 py-2 rounded-lg text-small font-medium transition-all duration-200 ${
              activeMetric === 'campaigns'
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Campaigns
          </button>
          <button
            onClick={() => setActiveMetric('engagement')}
            className={`px-4 py-2 rounded-lg text-small font-medium transition-all duration-200 ${
              activeMetric === 'engagement'
                ? 'bg-[var(--color-secondary)] text-white shadow-md'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Engagement
          </button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCampaigns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E8AA96" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#E8AA96" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C4B5D8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C4B5D8" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" opacity={0.3} />
            <XAxis
              dataKey="month"
              stroke="var(--text-tertiary)"
              style={{ fontSize: '12px' }}
            />
            <YAxis stroke="var(--text-tertiary)" style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="campaigns"
              stroke="#E8AA96"
              strokeWidth={2}
              fill="url(#colorCampaigns)"
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="engagement"
              stroke="#C4B5D8"
              strokeWidth={2}
              fill="url(#colorEngagement)"
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
