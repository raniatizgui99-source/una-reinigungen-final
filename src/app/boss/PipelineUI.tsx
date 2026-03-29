'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, CheckCircle2, Circle, Clock, Mail, MapPin, Grid, MessageSquare, LogOut } from 'lucide-react'
import { updateLeadStatus, logoutAdmin } from './actions'

type Lead = {
  id: string
  name: string
  email: string
  phone: string
  zip: string
  date: string
  rooms: string
  category: string
  addons: string[]
  message: string
  status: string
  createdAt: Date
}

export default function PipelineUI({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [filter, setFilter] = useState<'NEW' | 'CONTACTED'>('NEW')

  const filteredLeads = leads.filter(l => l.status === filter)

  async function toggleStatus(id: string, currentStatus: string) {
    const newStatus = currentStatus === 'NEW' ? 'CONTACTED' : 'NEW'
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l))
    await updateLeadStatus(id, newStatus)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white sticky top-0 z-30 shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Lead Pipeline</h1>
            <p className="text-brand-red text-xs">UNA Reinigungen</p>
          </div>
          <button 
            onClick={() => logoutAdmin()} 
            className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="max-w-3xl mx-auto px-4 flex gap-4 pt-2">
          <button 
            onClick={() => setFilter('NEW')}
            className={`pb-3 px-2 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${filter === 'NEW' ? 'border-brand-red text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            New Leads
            <span className={`px-2 py-0.5 rounded-full text-xs ${filter === 'NEW' ? 'bg-brand-red text-white' : 'bg-slate-800 text-slate-400'}`}>
              {leads.filter(l => l.status === 'NEW').length}
            </span>
          </button>
          <button 
            onClick={() => setFilter('CONTACTED')}
            className={`pb-3 px-2 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${filter === 'CONTACTED' ? 'border-emerald-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            Contacted
            <span className={`px-2 py-0.5 rounded-full text-xs ${filter === 'CONTACTED' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
              {leads.filter(l => l.status === 'CONTACTED').length}
            </span>
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredLeads.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-20 text-slate-400"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-slate-300" />
              </div>
              <p>No {filter.toLowerCase()} leads currently.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredLeads.map((lead) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  key={lead.id}
                  className="bg-white border text-left border-slate-200 rounded-2xl p-5 shadow-sm overflow-hidden relative group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{lead.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{new Date(lead.createdAt).toLocaleDateString()} {new Date(lead.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                    </div>
                    <span className="bg-brand-cream text-brand-red text-xs px-3 py-1 font-semibold rounded-full border border-brand-red/20">
                      {lead.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <div className="flex items-center gap-2 text-sm text-slate-700">
                       <MapPin className="w-4 h-4 text-slate-400" />
                       <span className="font-medium text-slate-900">{lead.zip}</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-700">
                       <Grid className="w-4 h-4 text-slate-400" />
                       <span className="font-medium text-slate-900">{lead.rooms}</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-700">
                       <Mail className="w-4 h-4 text-slate-400" />
                       <span className="truncate">{lead.email}</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-700">
                       <MessageSquare className="w-4 h-4 text-slate-400" />
                       <span>{lead.addons.length} Addons</span>
                     </div>
                  </div>
                  
                  {lead.message && (
                    <div className="mb-5 text-sm text-slate-600 bg-amber-50 rounded-lg p-3 border border-amber-100">
                      <strong>Notes:</strong> {lead.message}
                    </div>
                  )}

                  <div className="flex gap-3 pt-2 border-t border-slate-100 mt-2">
                    <a 
                      href={`tel:${lead.phone}`}
                      className="flex-1 bg-brand-red text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-md hover:bg-red-700 active:scale-95 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call {lead.phone}
                    </a>
                    
                    <button 
                      onClick={() => toggleStatus(lead.id, lead.status)}
                      className={`px-4 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm font-medium active:scale-95 transition-all text-sm border ${lead.status === 'NEW' ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50' : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}
                    >
                      {lead.status === 'NEW' ? (
                        <>
                          <Circle className="w-5 h-5 text-slate-300" />
                          <span className="hidden sm:inline">Mark Done</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          <span className="hidden sm:inline">Done</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
