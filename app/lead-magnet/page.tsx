'use client'

import { useState } from 'react'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function LeadMagnetPage() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'd integrate with your email service
    console.log('Lead captured:', { email, firstName })
    // Redirect to first value page
    // Store email and redirect to first chapter
    localStorage.setItem('userEmail', email)
    window.location.href = '/value-1'
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Get the FREE{' '}
              <span className="gold-gradient">"Georgia Limo Business Boom Guide"</span>
            </h1>
            
            <p className="text-2xl text-gray-300 font-bold mb-8">
              The exact 3-step system that helped Georgia limo owners fill their calendars 
              and increase revenue by 300% in just 90 days
            </p>

            {/* Preview of what's inside */}
            <div className="bg-luxury-800 rounded-xl p-8 mb-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-gold-500">🎯 What You'll Get Inside:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "Chapter 1: The Website Foundation That Converts",
                  "Chapter 2: Local SEO Secrets for Georgia Markets", 
                  "Chapter 3: Booking System That Runs Itself",
                  "Chapter 4: Pricing Strategies That Maximize Profit",
                  "Chapter 5: Marketing That Fills Your Calendar",
                  "BONUS: Ready-to-Use Email Templates"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
                required
              />
              <button
                type="submit"
                className="w-full btn-primary text-xl py-6 flex items-center justify-center"
              >
                GET MY FREE BOOM GUIDE NOW
                <ArrowRightIcon className="w-6 h-6 ml-2" />
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              100% Free • No Spam • Instant Access
            </p>

            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Join 2,847+ Georgia limo owners who are already growing their business</p>
              <div className="flex justify-center items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gold-500 rounded-full border-2 border-luxury-900"></div>
                  ))}
                </div>
                <span className="text-gold-500 font-bold">+2,847 others</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
