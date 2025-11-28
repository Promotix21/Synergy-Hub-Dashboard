'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Play,
  Save,
  Settings,
  Trash2,
  Copy,
  MessageSquare,
  Clock,
  Filter,
  Send,
  Users,
  GitBranch,
  Zap
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'

interface FlowNode {
  id: string
  type: 'trigger' | 'action' | 'condition' | 'delay'
  title: string
  icon: any
  color: string
  x: number
  y: number
  connections: string[]
}

const initialNodes: FlowNode[] = [
  { id: '1', type: 'trigger', title: 'New Contact Added', icon: Users, color: 'from-blue-500 to-cyan-500', x: 100, y: 100, connections: ['2'] },
  { id: '2', type: 'delay', title: 'Wait 5 minutes', icon: Clock, color: 'from-purple-500 to-pink-500', x: 100, y: 250, connections: ['3'] },
  { id: '3', type: 'action', title: 'Send Welcome Message', icon: MessageSquare, color: 'from-green-500 to-emerald-500', x: 100, y: 400, connections: ['4'] },
  { id: '4', type: 'condition', title: 'Check Response', icon: GitBranch, color: 'from-orange-500 to-red-500', x: 100, y: 550, connections: ['5', '6'] },
  { id: '5', type: 'action', title: 'Send Follow-up', icon: Send, color: 'from-green-500 to-emerald-500', x: 300, y: 700, connections: [] },
  { id: '6', type: 'action', title: 'Tag as Interested', icon: Filter, color: 'from-indigo-500 to-purple-500', x: -100, y: 700, connections: [] },
]

const nodeTypes = [
  { type: 'trigger', label: 'Trigger', icon: Zap, color: 'from-blue-500 to-cyan-500' },
  { type: 'action', label: 'Action', icon: Send, color: 'from-green-500 to-emerald-500' },
  { type: 'condition', label: 'Condition', icon: GitBranch, color: 'from-orange-500 to-red-500' },
  { type: 'delay', label: 'Delay', icon: Clock, color: 'from-purple-500 to-pink-500' },
]

export default function FlowDesigner() {
  const [nodes, setNodes] = useState(initialNodes)
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null)
  const [flowName, setFlowName] = useState('Welcome Flow')
  const { isSubmenuOpen } = useSidebar()

  const handleAddNode = (type: string) => {
    const newNode: FlowNode = {
      id: Date.now().toString(),
      type: type as any,
      title: `New ${type}`,
      icon: nodeTypes.find(t => t.type === type)?.icon || Zap,
      color: nodeTypes.find(t => t.type === type)?.color || 'from-gray-500 to-gray-600',
      x: 100,
      y: nodes.length * 150 + 100,
      connections: []
    }
    setNodes([...nodes, newNode])
  }

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
                <input
                  type="text"
                  value={flowName}
                  onChange={(e) => setFlowName(e.target.value)}
                  className="text-h1 font-heading font-bold text-[var(--text-primary)] bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded px-2"
                />
                <p className="text-body text-[var(--text-secondary)] mt-1">
                  Design your automation workflow visually
                </p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Copy size={18} />
                  <span className="text-small font-medium">Duplicate</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Save size={18} />
                  <span className="text-small font-medium">Save</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md"
                >
                  <Play size={18} />
                  <span className="text-small font-medium">Activate</span>
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Node Palette */}
              <div className="col-span-3">
                <div className="card-neumorphic rounded-xl p-4">
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                    Components
                  </h3>
                  <div className="space-y-2">
                    {nodeTypes.map((nodeType) => (
                      <motion.button
                        key={nodeType.type}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddNode(nodeType.type)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-base)] hover:bg-gradient-to-r hover:from-[var(--bg-base)] hover:to-[var(--bg-card)] border border-[var(--border-color)] transition-all group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${nodeType.color} flex items-center justify-center text-white`}>
                          <nodeType.icon size={20} />
                        </div>
                        <div className="text-left">
                          <div className="text-small font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                            {nodeType.label}
                          </div>
                          <div className="text-xs text-[var(--text-tertiary)]">
                            Add {nodeType.type}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                    <h4 className="text-small font-semibold text-[var(--text-secondary)] mb-3">
                      Flow Stats
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-small">
                        <span className="text-[var(--text-tertiary)]">Total Nodes</span>
                        <span className="font-mono font-semibold text-[var(--text-primary)]">{nodes.length}</span>
                      </div>
                      <div className="flex items-center justify-between text-small">
                        <span className="text-[var(--text-tertiary)]">Triggers</span>
                        <span className="font-mono font-semibold text-blue-500">{nodes.filter(n => n.type === 'trigger').length}</span>
                      </div>
                      <div className="flex items-center justify-between text-small">
                        <span className="text-[var(--text-tertiary)]">Actions</span>
                        <span className="font-mono font-semibold text-green-500">{nodes.filter(n => n.type === 'action').length}</span>
                      </div>
                      <div className="flex items-center justify-between text-small">
                        <span className="text-[var(--text-tertiary)]">Conditions</span>
                        <span className="font-mono font-semibold text-orange-500">{nodes.filter(n => n.type === 'condition').length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Canvas */}
              <div className="col-span-6">
                <div className="card-neumorphic rounded-xl p-6 h-[800px] overflow-auto bg-[var(--bg-base)] relative">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, var(--border-color) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />

                  {/* Nodes */}
                  <div className="relative">
                    {nodes.map((node, index) => (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        drag
                        dragMomentum={false}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(node)}
                        className={`absolute cursor-move ${
                          selectedNode?.id === node.id ? 'ring-2 ring-[var(--color-primary)]' : ''
                        }`}
                        style={{ left: `${node.x}px`, top: `${node.y}px` }}
                      >
                        <div className="w-64 bg-[var(--bg-card)] rounded-xl border-2 border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow">
                          {/* Node Header */}
                          <div className={`h-2 rounded-t-xl bg-gradient-to-r ${node.color}`} />

                          <div className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white`}>
                                <node.icon size={20} />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-[var(--text-tertiary)] uppercase font-semibold mb-1">
                                  {node.type}
                                </div>
                                <div className="text-small font-semibold text-[var(--text-primary)]">
                                  {node.title}
                                </div>
                              </div>
                            </div>

                            {/* Connection Points */}
                            <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                              <div className="flex gap-2">
                                <button className="p-1.5 rounded hover:bg-[var(--bg-base)] transition-colors">
                                  <Settings size={14} className="text-[var(--text-tertiary)]" />
                                </button>
                                <button className="p-1.5 rounded hover:bg-[var(--bg-base)] transition-colors">
                                  <Copy size={14} className="text-[var(--text-tertiary)]" />
                                </button>
                              </div>
                              <button className="p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                <Trash2 size={14} className="text-red-500" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Connection dot */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-primary)] border-4 border-[var(--bg-card)] shadow-md" />
                      </motion.div>
                    ))}

                    {/* Connection lines */}
                    <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                      {nodes.map(node =>
                        node.connections.map(targetId => {
                          const target = nodes.find(n => n.id === targetId)
                          if (!target) return null
                          return (
                            <line
                              key={`${node.id}-${targetId}`}
                              x1={node.x + 128}
                              y1={node.y + 100}
                              x2={target.x + 128}
                              y2={target.y}
                              stroke="var(--color-primary)"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                              opacity="0.5"
                            />
                          )
                        })
                      )}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Properties Panel */}
              <div className="col-span-3">
                <div className="card-neumorphic rounded-xl p-4">
                  <h3 className="text-h3 font-heading font-semibold text-[var(--text-primary)] mb-4">
                    {selectedNode ? 'Properties' : 'Select a Node'}
                  </h3>

                  {selectedNode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={selectedNode.title}
                          onChange={(e) => {
                            const updated = nodes.map(n =>
                              n.id === selectedNode.id ? { ...n, title: e.target.value } : n
                            )
                            setNodes(updated)
                            setSelectedNode({ ...selectedNode, title: e.target.value })
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                        />
                      </div>

                      <div>
                        <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                          Type
                        </label>
                        <div className={`px-3 py-2 rounded-lg bg-gradient-to-r ${selectedNode.color} text-white text-small font-medium`}>
                          {selectedNode.type.toUpperCase()}
                        </div>
                      </div>

                      {selectedNode.type === 'trigger' && (
                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            Trigger Event
                          </label>
                          <select className="w-full px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small">
                            <option>New Contact</option>
                            <option>Message Received</option>
                            <option>Button Clicked</option>
                            <option>Time-based</option>
                          </select>
                        </div>
                      )}

                      {selectedNode.type === 'action' && (
                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            Message Template
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Enter your message..."
                            className="w-full px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small resize-none"
                          />
                        </div>
                      )}

                      {selectedNode.type === 'delay' && (
                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            Delay Duration
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="number"
                              placeholder="5"
                              className="px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                            />
                            <select className="px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small">
                              <option>Minutes</option>
                              <option>Hours</option>
                              <option>Days</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {selectedNode.type === 'condition' && (
                        <div>
                          <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                            Condition Type
                          </label>
                          <select className="w-full px-3 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small">
                            <option>Message Contains</option>
                            <option>User Tagged</option>
                            <option>Time Elapsed</option>
                            <option>Custom Field</option>
                          </select>
                        </div>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-small font-medium shadow-md"
                      >
                        Save Changes
                      </motion.button>
                    </div>
                  ) : (
                    <div className="text-center text-[var(--text-tertiary)] py-8">
                      <GitBranch size={48} className="mx-auto mb-3 opacity-30" />
                      <p className="text-small">
                        Click on a node to edit its properties
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
