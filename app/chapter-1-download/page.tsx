'use client'

import { useState, useEffect } from 'react'
import { ArrowRightIcon, DocumentArrowDownIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function Chapter1DownloadPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    company: '',
    goals: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user came from landing page
    const leadData = localStorage.getItem('leadData')
    if (leadData) {
      const data = JSON.parse(leadData)
      setFormData({
        firstName: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        company: data.company || '',
        goals: data.message || ''
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Store user data
    localStorage.setItem('userDetails', JSON.stringify(formData))
    localStorage.setItem('module1Downloaded', 'true')
    
    // Trigger download
    downloadChapter1()
    
    setIsSubmitted(true)
    
    // Redirect to emotional quiz after 3 seconds
    setTimeout(() => {
      window.location.href = '/emotional-quiz'
    }, 3000)
  }

  const downloadChapter1 = () => {
    // Create a simple PDF content for Chapter 1
    const pdfContent = `
# Georgia Limo Business Boom Guide - Module 1
## The 10-Day Foundation System

### Welcome to Your Limo Business Transformation!

Congratulations on taking the first step toward transforming your Georgia limo business! 

### What You'll Learn in This Module:

1. **The 10-Day Website Foundation**
   - Essential elements every limo website needs
   - Georgia-specific local optimization secrets
   - Mobile-first design principles that convert

2. **Customer Psychology in the Limo Industry**
   - Why customers choose premium transportation
   - Trust signals that close more bookings
   - Pricing psychology for luxury services

3. **The Georgia Advantage**
   - How to leverage local Georgia pride
   - Targeting Atlanta, Savannah, Augusta markets
   - Seasonal opportunities (UGA games, weddings, etc.)

### Your First Action Steps:

□ Audit your current website (if you have one)
□ List your top 3 Georgia target markets
□ Identify your biggest booking challenges
□ Set up Google My Business (if not done)

### Coming Up in Module 2:
"Local SEO Secrets for Georgia Markets" - Learn the exact keywords and strategies that get Georgia limo businesses found first!

---
Ready for Module 2? Complete our quick video training to unlock it!

© 2024 LimoLift Development - Georgia Limo Business Boom Guide
    `
    
    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Georgia-Limo-Boom-Guide-Module-1.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-luxury-900 text-white flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <CheckIcon className="w-20 h-20 text-gold-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Module 1 Downloaded Successfully! 🎉
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Check your downloads folder for "Georgia-Limo-Boom-Guide-Module-1.txt"
            </p>
            <div className="bg-luxury-800 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gold-500 mb-4">What's Next?</h3>
              <p className="text-gray-300">
              You're being redirected to a quick business health check that will help us understand 
                your specific challenges and show you exactly how to transform your limo business
              </p>
            </div>
            <div className="animate-pulse text-gold-500">
              Redirecting to your video training in 3 seconds...
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Header */}
      <div className="section-padding py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-4">
            Get Your FREE <span className="gold-gradient">Module 1</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enter your details below and Module 1: "The 10-Day Georgia Limo Foundation" 
            will download automatically to your device.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
                />
              </div>

              <textarea
                placeholder="Tell us about your business and goals..."
                rows={4}
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                className="w-full p-4 bg-luxury-800 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors text-lg"
              />

              <button
                type="submit"
                className="w-full btn-primary text-xl py-6 flex items-center justify-center"
              >
                <DocumentArrowDownIcon className="w-6 h-6 mr-3" />
                DOWNLOAD CHAPTER 1 NOW
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-400">
              Instant download • Safe automatic download • 100% Free
            </div>

            {/* Preview of Chapter 1 */}
            <div className="mt-12 bg-luxury-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-gold-500 text-center">
                📖 Module 1 Preview
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <span>The exact 10-day website foundation system</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <span>Customer psychology secrets for luxury transportation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <span>Georgia-specific market advantages and opportunities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <span>Your first action steps for immediate results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
