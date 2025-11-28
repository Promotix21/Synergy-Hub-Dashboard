'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface SidebarContextType {
  isSubmenuOpen: boolean
  setIsSubmenuOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isSubmenuOpen, setIsSubmenuOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
