'use client'

import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  const handleGoogleLogin = () => {
    console.log('Google Login')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image/Brand */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent1)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center mb-8"
          >
            <span className="text-4xl font-heading font-bold">S</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-heading font-bold mb-4 text-center"
          >
            Synergy Hub CRM
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-center opacity-90 max-w-md"
          >
            Manage your campaigns, clients, and social media all in one beautiful dashboard
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1.2K</div>
              <div className="text-sm opacity-80">Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-80">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[var(--bg-base)]"
      >
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] items-center justify-center mb-4">
              <span className="text-2xl font-heading font-bold text-white">S</span>
            </div>
            <h2 className="text-h2 font-heading font-bold text-gradient">Synergy Hub</h2>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-h1 font-heading font-bold text-[var(--text-primary)] mb-2">
              Welcome back!
            </h2>
            <p className="text-body text-[var(--text-secondary)] mb-8">
              Please enter your credentials to access your dashboard
            </p>
          </motion.div>

          {/* Google Login */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-[var(--border-color)] hover:border-[var(--color-primary)] bg-[var(--bg-card)] text-[var(--text-primary)] font-medium transition-all mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </motion.button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border-color)]" />
            </div>
            <div className="relative flex justify-center text-small">
              <span className="px-4 bg-[var(--bg-base)] text-[var(--text-tertiary)]">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleLogin}
            className="space-y-4"
          >
            {/* Email */}
            <div>
              <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-small font-medium text-[var(--text-secondary)] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-small">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[var(--border-color)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                <span className="text-[var(--text-secondary)]">Remember me</span>
              </label>
              <a href="#" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Sign In
            </motion.button>
          </motion.form>

          {/* Sign Up Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-small text-[var(--text-secondary)]"
          >
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-medium transition-colors">
              Sign up for free
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
