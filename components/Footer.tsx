'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Links */}
          <div className="flex items-center gap-4 text-small text-[var(--text-tertiary)]">
            <Link href="/privacy" className="hover:text-[var(--color-primary)] transition-colors">
              Privacy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors">
              Terms
            </Link>
            <span>|</span>
            <Link href="/help" className="hover:text-[var(--color-primary)] transition-colors">
              Help
            </Link>
          </div>

          {/* Center: Copyright */}
          <div className="text-small text-[var(--text-tertiary)]">
            © 2024 Synergy Hub. All rights reserved.
          </div>

          {/* Right: Version */}
          <div className="text-small text-[var(--text-tertiary)] font-mono">
            Version 1.0.0
          </div>
        </div>
      </div>
    </footer>
  )
}
