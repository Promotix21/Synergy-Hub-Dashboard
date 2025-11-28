'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Send,
  Paperclip,
  Smile,
  Mic,
  Check,
  CheckCheck,
  Image as ImageIcon,
  File,
  X
} from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { useSidebar } from '@/lib/SidebarContext'

interface Contact {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
  color: string
}

interface Message {
  id: number
  sender: 'me' | 'other'
  content: string
  time: string
  status: 'sent' | 'delivered' | 'read'
  type: 'text' | 'image' | 'file'
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Johnson', avatar: 'SJ', lastMessage: 'Let\'s schedule the campaign review', time: '2m', unread: 3, online: true, color: 'from-pink-500 to-rose-500' },
  { id: 2, name: 'Mike Chen', avatar: 'MC', lastMessage: 'The client approved the design!', time: '15m', unread: 0, online: true, color: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Emma Davis', avatar: 'ED', lastMessage: 'Can you review the Instagram posts?', time: '1h', unread: 1, online: false, color: 'from-purple-500 to-indigo-500' },
  { id: 4, name: 'John Smith', avatar: 'JS', lastMessage: 'Meeting at 3 PM confirmed', time: '2h', unread: 0, online: true, color: 'from-green-500 to-emerald-500' },
  { id: 5, name: 'Lisa Wang', avatar: 'LW', lastMessage: 'Great job on the presentation!', time: '5h', unread: 0, online: false, color: 'from-orange-500 to-amber-500' },
]

const messages: Message[] = [
  { id: 1, sender: 'other', content: 'Hey! How\'s the campaign going?', time: '10:30 AM', status: 'read', type: 'text' },
  { id: 2, sender: 'me', content: 'Going great! We\'ve reached 80% of our target already.', time: '10:32 AM', status: 'read', type: 'text' },
  { id: 3, sender: 'other', content: 'That\'s amazing! Can you share the analytics?', time: '10:33 AM', status: 'read', type: 'text' },
  { id: 4, sender: 'me', content: 'Sure, let me send you the report.', time: '10:35 AM', status: 'delivered', type: 'text' },
  { id: 5, sender: 'me', content: 'campaign_report.pdf', time: '10:35 AM', status: 'delivered', type: 'file' },
  { id: 6, sender: 'other', content: 'Perfect, thanks! Let\'s schedule the campaign review', time: '10:40 AM', status: 'read', type: 'text' },
]

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [message, setMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const { isSubmenuOpen } = useSidebar()

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send:', message)
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Sidebar />
      <div className={`transition-all duration-300 ${isSubmenuOpen ? 'lg:ml-[330px]' : 'lg:ml-[70px]'}`}>
        <TopBar />

        <main className="pt-[65px] h-screen">
          <div className="h-[calc(100vh-65px)] flex">
            {/* Contacts Sidebar */}
            <div className="w-full md:w-96 border-r border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-[var(--border-color)]">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-small"
                  />
                </div>
              </div>

              {/* Contacts List */}
              <div className="flex-1 overflow-y-auto">
                {filteredContacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    whileHover={{ backgroundColor: 'var(--bg-base)' }}
                    onClick={() => setSelectedContact(contact)}
                    className={`flex items-center gap-3 p-4 cursor-pointer border-b border-[var(--border-color)] transition-colors ${
                      selectedContact.id === contact.id ? 'bg-[var(--bg-base)]' : ''
                    }`}
                  >
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-white font-semibold text-small`}>
                        {contact.avatar}
                      </div>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--bg-card)] rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-body text-[var(--text-primary)] truncate">
                          {contact.name}
                        </h3>
                        <span className="text-xs text-[var(--text-tertiary)]">{contact.time}</span>
                      </div>
                      <p className="text-small text-[var(--text-secondary)] truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs flex items-center justify-center font-bold">
                        {contact.unread}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-[var(--bg-base)]">
              {/* Chat Header */}
              <div className="h-16 px-6 flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedContact.color} flex items-center justify-center text-white font-semibold text-small`}>
                      {selectedContact.avatar}
                    </div>
                    {selectedContact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[var(--bg-card)] rounded-full" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-body text-[var(--text-primary)]">
                      {selectedContact.name}
                    </h2>
                    <p className="text-xs text-[var(--text-tertiary)]">
                      {selectedContact.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                  >
                    <Phone size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                  >
                    <Video size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                  >
                    <MoreVertical size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
                      {msg.type === 'text' && (
                        <div className={`px-4 py-2 rounded-2xl ${
                          msg.sender === 'me'
                            ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-br-md'
                            : 'bg-[var(--bg-card)] text-[var(--text-primary)] rounded-bl-md'
                        }`}>
                          <p className="text-body">{msg.content}</p>
                        </div>
                      )}
                      {msg.type === 'file' && (
                        <div className={`px-4 py-3 rounded-2xl flex items-center gap-3 ${
                          msg.sender === 'me'
                            ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-br-md'
                            : 'bg-[var(--bg-card)] text-[var(--text-primary)] rounded-bl-md'
                        }`}>
                          <File size={20} />
                          <span className="text-small">{msg.content}</span>
                        </div>
                      )}
                      <div className={`flex items-center gap-1 mt-1 text-xs text-[var(--text-tertiary)] ${
                        msg.sender === 'me' ? 'justify-end' : 'justify-start'
                      }`}>
                        <span>{msg.time}</span>
                        {msg.sender === 'me' && (
                          <span>
                            {msg.status === 'read' && <CheckCheck size={14} className="text-blue-500" />}
                            {msg.status === 'delivered' && <CheckCheck size={14} />}
                            {msg.status === 'sent' && <Check size={14} />}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="flex items-end gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                  >
                    <Paperclip size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                  >
                    <ImageIcon size={20} />
                  </motion.button>

                  <div className="flex-1 relative">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                      placeholder="Type a message..."
                      rows={1}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors"
                  >
                    <Smile size={20} />
                  </motion.button>

                  {message.trim() ? (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSend}
                      className="p-3 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Send size={20} />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Mic size={20} />
                    </motion.button>
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
