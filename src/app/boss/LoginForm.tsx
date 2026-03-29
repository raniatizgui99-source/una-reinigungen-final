'use client'

import { useState } from 'react'
import { loginAdmin } from './actions'
import { motion } from 'motion/react'
import { Lock, Mail, ArrowRight } from 'lucide-react'

export default function LoginForm() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const formData = new FormData(e.currentTarget)
    const res = await loginAdmin(formData)
    
    if (res?.error) {
      setError(res.error)
      setLoading(false)
    } else {
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 hero-mesh-bg">
      <div className="noise-overlay"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass relative z-10 w-full max-w-md p-8 rounded-3xl border border-white/40 shadow-xl"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
          <Lock className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-center mt-6 mb-2 text-slate-900">Boss Portal</h1>
        <p className="text-center text-slate-500 mb-8 text-sm">Sign in to view cleaning leads</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Admin Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                name="email"
                type="email" 
                required
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red bg-white/50 backdrop-blur-sm transition-all outline-none"
                placeholder="info@una-reinigungen.ch"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                name="password"
                type="password" 
                required
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red bg-white/50 backdrop-blur-sm transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <p className="text-brand-red text-sm text-center font-medium">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors font-medium cursor-pointer"
          >
            {loading ? 'Authenticating...' : 'Secure Login'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
