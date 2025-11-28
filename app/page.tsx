'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Megaphone, DollarSign, TrendingUp, Plus, Calendar, Send, UserPlus } from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import MetricCard from '@/components/MetricCard'
import QuickAction from '@/components/QuickAction'
import ActivityTimeline from '@/components/ActivityTimeline'
import CampaignChart from '@/components/CampaignChart'
import ClientList from '@/components/ClientList'
import ScheduledCalendar from '@/components/ScheduledCalendar'
import FloatingActions from '@/components/FloatingActions'
import Footer from '@/components/Footer'

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-[70px] transition-all duration-300">
        {/* Top Bar */}
        <TopBar onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />

        {/* Page Content */}
        <main className="pt-[65px] px-4 md:px-8 pb-8">
          <div className="max-w-[1600px] mx-auto">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 mt-8"
            >
              <h1 className="text-h1 font-heading font-bold text-gradient mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-body text-[var(--text-secondary)]">
                Here&apos;s what&apos;s happening with your campaigns today.
              </p>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Active Campaigns"
                value="24"
                trend={12.5}
                icon={Megaphone}
                gradient="primary"
                delay={0}
              />
              <MetricCard
                title="Total Clients"
                value="156"
                trend={8.2}
                icon={Users}
                gradient="secondary"
                delay={0.1}
              />
              <MetricCard
                title="Monthly Revenue"
                value="$45.2K"
                trend={15.3}
                icon={DollarSign}
                gradient="accent1"
                delay={0.2}
              />
              <MetricCard
                title="Engagement Rate"
                value="78%"
                trend={-2.4}
                icon={TrendingUp}
                gradient="accent2"
                delay={0.3}
              />
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-h2 font-heading font-semibold text-[var(--text-primary)] mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <QuickAction
                  title="Create Campaign"
                  icon={Megaphone}
                  onClick={() => console.log('Create Campaign')}
                  delay={0}
                />
                <QuickAction
                  title="Add Client"
                  icon={UserPlus}
                  onClick={() => console.log('Add Client')}
                  delay={0.1}
                />
                <QuickAction
                  title="Schedule Post"
                  icon={Calendar}
                  onClick={() => console.log('Schedule Post')}
                  delay={0.2}
                />
                <QuickAction
                  title="Send Broadcast"
                  icon={Send}
                  onClick={() => console.log('Send Broadcast')}
                  delay={0.3}
                />
              </div>
            </motion.div>

            {/* Main Grid - Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Campaign Chart - Takes 2 columns */}
              <div className="lg:col-span-2">
                <CampaignChart />
              </div>

              {/* Activity Timeline - Takes 1 column */}
              <div className="lg:col-span-1">
                <ActivityTimeline />
              </div>
            </div>

            {/* Bottom Grid - Clients and Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Client List - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ClientList />
              </div>

              {/* Scheduled Calendar - Takes 1 column */}
              <div className="lg:col-span-1">
                <ScheduledCalendar />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </main>
      </div>

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  )
}
