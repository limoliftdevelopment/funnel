'use client'

import { useState, useEffect } from 'react'
import { PlayIcon, DocumentArrowDownIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function VideoTraining1Page() {
  const [videoWatched, setVideoWatched] = useState(false)
  const [timeWatched, setTimeWatched] = useState(0)
  const [showChapter2Button, setShowChapter2Button] = useState(false)
  const [userDetails, setUserDetails] = useState<any>({})

  useEffect(() => {
    // Get user details
    const details = localStorage.getItem('userDetails')
    if (details) {
      setUserDetails(JSON.parse(details))
    }

    // Simulate video watching progress
    let interval: NodeJS.Timeout
    if (videoWatched) {
      interval = setInterval(() => {
        setTimeWatched(prev => {
          const newTime = prev + 1
          // Show Chapter 2 button after 30 seconds of "watching"
          if (newTime >= 30) {
            setShowChapter2Button(true)
          }
          return newTime
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [videoWatched])

  const startVideo = () => {
    setVideoWatched(true)
  }

  const downloadFullGuide = () => {
    // Create the complete guide content
    const fullGuideContent = `
# Georgia Limo Business Boom Guide - COMPLETE SYSTEM
## All 8 Modules + Bonus Materials

### Module 1: The 10-Day Foundation System ✓ (Already Downloaded)
### Module 2: Local SEO Secrets for Georgia Markets
### Module 3: Premium Pricing Psychology 
### Module 4: The Referral Generation System
### Module 5: Social Media Domination for Limo Companies
### Module 6: Email Marketing That Books Rides
### Module 7: Holiday & Event Booking Mastery
### Module 8: Scaling Your Limo Empire

### BONUS MATERIALS:
- 50+ Done-For-You Marketing Templates
- Georgia-Specific Keyword Research
- Customer Acquisition Cost Calculator
- Seasonal Booking Calendar
- Competitor Analysis Worksheets

---

This complete system has generated over $2.3M in bookings for Georgia limo owners!

© 2024 LimoLift Development - Complete Georgia Limo Business Boom Guide
    `
    
    // Create blob and download
    const blob = new Blob([fullGuideContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Complete-Georgia-Limo-Boom-Guide-All-8-Modules.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleSpecialOffer = () => {
    // Store that they watched the sales video
    localStorage.setItem('watchedSalesVideo', 'true')
    
    // Download the complete guide first
    downloadFullGuide()
    
    // Small delay then redirect to initial offer
    setTimeout(() => {
      window.location.href = '/initial-offer'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Header */}
      <section className="section-padding py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-4">
            {userDetails.firstName || 'Georgia Limo Owner'}, Here's How I <span className="gold-gradient">Guarantee</span> Your Success! 🚗
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch this exclusive presentation to see the EXACT system that's helping Georgia limo owners 
            go from struggling to booked solid in just 10 days (with proof!)
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Video Player Area */}
            <div className="relative bg-black rounded-xl overflow-hidden mb-8" style={{aspectRatio: '16/9'}}>
              {!videoWatched ? (
                // Video Thumbnail/Play Button
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-luxury-800 to-luxury-700">
                  <div className="text-center">
                    <button
                      onClick={startVideo}
                      className="bg-gold-500 hover:bg-gold-400 text-black rounded-full p-6 mb-4 transition-colors"
                    >
                      <PlayIcon className="w-12 h-12" />
                    </button>
                    <h3 className="text-2xl font-bold mb-2">The Georgia Limo Success System</h3>
                    <p className="text-gray-300">Click to see how you can get booked solid (with live results!)</p>
                  </div>
                  
                  {/* Fake video preview */}
                  <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                    Duration: 8:32
                  </div>
                </div>
              ) : (
                // "Video Playing" State
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-700 to-luxury-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse mb-4">
                      <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PlayIcon className="w-10 h-10 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Sales Presentation in Progress...</h3>
                    <div className="flex items-center justify-center space-x-2 text-gold-500">
                      <ClockIcon className="w-5 h-5" />
                      <span>Time Watched: {Math.floor(timeWatched / 60)}:{(timeWatched % 60).toString().padStart(2, '0')}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-64 bg-luxury-800 rounded-full h-2 mt-4 mx-auto">
                      <div 
                        className="bg-gold-500 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${Math.min((timeWatched / 30) * 100, 100)}%`}}
                      ></div>
                    </div>
                    
                    {timeWatched >= 30 && (
                      <div className="mt-4 text-green-400 font-bold">
                        ✅ Presentation Complete! Special Offer Unlocked!
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Training Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - What You'll Learn */}
              <div className="bg-luxury-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold-500">🚗 What You'll See in This Presentation:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Live case study: How Marcus went from 2 bookings/month to 47 bookings/month</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>The "Georgia Advantage" system that only works in our state</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Why DIY websites are costing you $10,000+ per month in lost revenue</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>My exclusive offer (only available after watching this presentation)</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Next Steps */}
              <div className="bg-luxury-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold-500">💰 After This Presentation:</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Get access to my exclusive "Done-For-You" offer</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>50% off for the next 24 hours (presentation viewers only)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Book a strategy call to see if you qualify</span>
                  </div>
                </div>

                {showChapter2Button && (
                  <button
                    onClick={handleSpecialOffer}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center animate-pulse"
                  >
                    🔥 GET MY SPECIAL OFFER NOW!
                  </button>
                )}
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="mt-12 bg-gradient-to-r from-gold-500/10 to-gold-600/10 p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-4 text-gold-500">Your Sales Funnel Progress</h4>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400">Module 1 ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${showChapter2Button ? 'bg-gold-500' : 'bg-gray-500'}`}>
                    <span className="text-black font-bold">💰</span>
                  </div>
                  <span className={showChapter2Button ? 'text-gold-500' : 'text-gray-400'}>Special Offer {showChapter2Button ? '🔓' : '🔒'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <span className="text-gray-400">Strategy Call 🔒</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <span className="text-gray-400">Launch 🔒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
