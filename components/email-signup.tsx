"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      const { data, error } = await supabase
        .from('email_signups')
        .insert([
          { 
            email: email,
            source: 'landing_page'
          }
        ])

      if (error) {
        setError('Something went wrong. Please try again.')
        console.error('Supabase error:', error)
      } else {
        setIsSubmitted(true)
        console.log('Email saved successfully:', email)
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
      console.error('Error:', error)
    }

    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center space-x-3 bg-[#B4DAD8]/20 rounded-full px-6 py-4">
        <CheckCircle className="w-6 h-6 text-[#4CAF50]" />
        <span className="text-[#2C2C2C] font-medium">You're on the list! 🎉</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4 w-full">
      <div className="relative w-full">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2C2C2C]/40" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full pl-10 pr-4 py-3 rounded-full border border-[#B4DAD8]/30 bg-white/90 backdrop-blur text-[#2C2C2C] placeholder-[#2C2C2C]/50 focus:outline-none focus:ring-2 focus:ring-[#B4DAD8] focus:border-transparent transition-all"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="bg-[#B4DAD8] hover:bg-[#A0CCC9] text-[#2C2C2C] rounded-full px-6 py-3 font-medium w-full transition-all disabled:opacity-50"
      >
        {isLoading ? 'Joining...' : '📬 Join the waitlist'}
      </Button>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </form>
  )
}