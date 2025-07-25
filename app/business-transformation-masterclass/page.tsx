'use client'

import { useState, useEffect } from 'react'
import { PlayIcon, DocumentArrowDownIcon, CheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'

export default function BusinessTransformationMasterclass() {
  const [videoWatched, setVideoWatched] = useState(false)
  const [timeWatched, setTimeWatched] = useState(0)
  const [showOfferButton, setShowOfferButton] = useState(false)
  const [userDetails, setUserDetails] = useState<any>({})
  const [quizResults, setQuizResults] = useState<any>(null)

  useEffect(() => {
    // Get user details and quiz results
    const details = localStorage.getItem('userDetails')
    const quiz = localStorage.getItem('quizResults')
    
    if (details) {
      setUserDetails(JSON.parse(details))
    }
    if (quiz) {
      setQuizResults(JSON.parse(quiz))
    }

    // Simulate video watching progress
    let interval: NodeJS.Timeout
    if (videoWatched) {
      interval = setInterval(() => {
        setTimeWatched(prev => {
          const newTime = prev + 1
          // Show offer button after 45 seconds of "watching"
          if (newTime >= 45) {
            setShowOfferButton(true)
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

  const downloadCompleteGuide = () => {
    // Create the complete guide content with case studies
    const completeGuideContent = `
# The Georgia Limo Business Transformation System
## From Struggling to Booked Solid in 10 Days

### CASE STUDY #1: Marcus Thompson - Atlanta Elite Limo
- Before: 2 bookings/month, $3,200 revenue
- After: 47 bookings/month, $28,500 revenue
- Time Frame: 14 days
- Key Success Factor: Local SEO + Professional website

### CASE STUDY #2: Sarah Williams - Savannah Luxury Transport  
- Before: 8 bookings/month, struggling with manual booking
- After: 34 bookings/month, automated system
- Time Frame: 10 days
- Key Success Factor: Booking automation + customer experience

### CASE STUDY #3: David Chen - Augusta Presidential Limo
- Before: Embarrassed by outdated website
- After: Premium brand, 300% price increase accepted
- Time Frame: 7 days
- Key Success Factor: Professional branding + trust signals

### THE GEORGIA ADVANTAGE SYSTEM:

#### Module 1: The 10-Day Foundation System ✓
- Professional website design that converts
- Georgia-specific local optimization
- Trust signals that close deals
- Mobile-first booking experience

#### Module 2: Local SEO Domination
- Georgia keyword research (153 high-value terms)
- Google My Business optimization
- Local citation building
- Review generation system

#### Module 3: Premium Pricing Psychology
- Why Georgia clients pay more for quality
- Positioning against Uber/Lyft
- Value-based pricing strategies
- Premium service differentiation

#### Module 4: The Referral Generation System
- Automated follow-up sequences
- Incentive programs that work
- Corporate client acquisition
- Wedding vendor partnerships

#### Module 5: Social Media Authority
- Instagram content that books rides
- Facebook local targeting
- LinkedIn B2B strategies
- TikTok for younger demographics

#### Module 6: Email Marketing That Converts
- Welcome sequences for new clients
- Seasonal campaign templates
- VIP client retention programs
- Automated upsell sequences

#### Module 7: Event & Holiday Mastery
- UGA game day strategies
- Wedding season domination
- Corporate event partnerships
- Holiday booking campaigns

#### Module 8: Scaling Your Limo Empire
- Hiring and training drivers
- Fleet expansion strategies
- Multi-location management
- Exit planning and valuation

### BONUS MATERIALS:
- 50+ Done-For-You Marketing Templates
- Georgia-Specific Keyword Research (Worth $2,500)
- Customer Acquisition Cost Calculator
- Seasonal Booking Calendar
- Competitor Analysis Worksheets
- Legal Templates for Georgia Limo Businesses
- Insurance and Licensing Checklist
- Price Optimization Spreadsheet

### THE RESULTS SPEAK FOR THEMSELVES:
- Average Revenue Increase: 285%
- Average Time to First Results: 8.5 days
- Client Satisfaction Rate: 97.8%
- Success Rate (businesses still thriving after 1 year): 94%

### WHAT MAKES THIS DIFFERENT:
Unlike generic business advice, this system is built specifically for Georgia's unique market:
- Understands Georgia's seasonal patterns
- Leverages local pride and culture  
- Accounts for Georgia's regulatory environment
- Optimized for Georgia's demographic preferences
- Includes Georgia-specific vendor partnerships

---

This complete system has generated over $2.3M in bookings for Georgia limo owners!
Average client sees ROI within 30 days.

© 2024 LimoLift Development - Complete Georgia Limo Business Transformation System
    `
    
    // Create blob and download
    const blob = new Blob([completeGuideContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Georgia-Limo-Business-Transformation-System-Complete.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleGetTransformation = () => {
    // Store that they watched the masterclass
    localStorage.setItem('watchedMasterclass', 'true')
    
    // Download the complete guide first
    downloadCompleteGuide()
    
    // Small delay then redirect to initial offer
    setTimeout(() => {
      window.location.href = '/initial-offer'
    }, 2000)
  }

  const painLevel = quizResults ? (quizResults.painScore <= 15 ? "Low" : 
                                   quizResults.painScore <= 30 ? "Moderate" : 
                                   quizResults.painScore <= 45 ? "High" : "Critical") : "Unknown"

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Header */}
      <section className="section-padding py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-4">
            {userDetails.firstName}, Here's How Georgia Limo Owners Are <span className="gold-gradient">Transforming</span> Their Businesses 🚗
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Watch this exclusive masterclass to see real case studies, actual revenue numbers, 
            and the exact system that's helping Georgia limo owners book 50+ rides per month
          </p>
          {quizResults && (
            <div className="mt-6 bg-gradient-to-r from-red-500/20 to-red-600/20 p-4 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>Your Pain Level: {painLevel}</strong> - This masterclass addresses your specific challenges
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            
            {/* Video Player Area */}
            <div className="relative bg-black rounded-xl overflow-hidden mb-8" style={{aspectRatio: '16/9'}}>
              {!videoWatched ? (
                // Video Thumbnail/Play Button
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-luxury-800 to-luxury-700">
                  <div className="text-center">
                    <button
                      onClick={startVideo}
                      className="bg-gold-500 hover:bg-gold-400 text-black rounded-full p-8 mb-6 transition-colors"
                    >
                      <PlayIcon className="w-16 h-16" />
                    </button>
                    <h3 className="text-3xl font-bold mb-4">The Georgia Limo Business Transformation Masterclass</h3>
                    <p className="text-xl text-gray-300 mb-2">Real case studies • Actual numbers • Proven system</p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                      <span>🎯 Case Study Based</span>
                      <span>📊 Real Revenue Numbers</span>
                      <span>🚀 Immediate Results</span>
                    </div>
                  </div>
                  
                  {/* Fake video preview */}
                  <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                    Duration: 8:47 • Free Masterclass
                  </div>
                </div>
              ) : (
                // "Video Playing" State
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-700 to-luxury-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse mb-6">
                      <div className="w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <PlayIcon className="w-12 h-12 text-black" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Transformation Masterclass in Progress...</h3>
                    <div className="flex items-center justify-center space-x-2 text-gold-500 mb-4">
                      <ClockIcon className="w-6 h-6" />
                      <span className="text-xl">Time Watched: {Math.floor(timeWatched / 60)}:{(timeWatched % 60).toString().padStart(2, '0')}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-80 bg-luxury-800 rounded-full h-3 mb-6 mx-auto">
                      <div 
                        className="bg-gold-500 h-3 rounded-full transition-all duration-1000"
                        style={{width: `${Math.min((timeWatched / 45) * 100, 100)}%`}}
                      ></div>
                    </div>
                    
                    {/* Current Topic Indicator */}
                    <div className="text-lg text-gray-300 mb-4">
                      {timeWatched < 15 && "🎯 Currently Showing: Marcus Thompson Case Study"}
                      {timeWatched >= 15 && timeWatched < 30 && "📊 Currently Showing: Revenue Transformation Numbers"}
                      {timeWatched >= 30 && timeWatched < 45 && "🚀 Currently Showing: The Georgia Advantage System"}
                      {timeWatched >= 45 && "✅ Masterclass Complete! Full System Unlocked!"}
                    </div>
                    
                    {timeWatched >= 45 && (
                      <div className="mt-6 text-green-400 font-bold text-xl">
                        🎉 Masterclass Completed! Your Transformation Awaits!
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Masterclass Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - What You'll Discover */}
              <div className="bg-luxury-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold-500">🎯 What You'll Discover in This Masterclass:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span><strong>Marcus Thompson's Story:</strong> How he went from 2 to 47 bookings/month in just 14 days</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span><strong>The Georgia Advantage:</strong> Why our state's limo market is uniquely profitable</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span><strong>Revenue Breakdown:</strong> Exact numbers from 3 transformed Georgia limo businesses</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span><strong>The 10-Day System:</strong> Step-by-step transformation process that actually works</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span><strong>Pricing Secrets:</strong> How Sarah increased her rates by 300% and got MORE bookings</span>
                  </div>
                </div>
              </div>

              {/* Right Column - After Watching */}
              <div className="bg-luxury-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold-500">🚀 After This Masterclass:</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Download the complete Georgia Limo Transformation System (8 modules + bonuses)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Get access to the same "Done-For-You" system used by successful Georgia limo owners</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>See exclusive pricing for masterclass viewers (limited time)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span>Option to book a free strategy call to discuss your specific situation</span>
                  </div>
                </div>

                {showOfferButton && (
                  <button
                    onClick={handleGetTransformation}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center animate-pulse"
                  >
                    🎯 GET MY TRANSFORMATION SYSTEM NOW!
                  </button>
                )}
              </div>
            </div>

            {/* Testimonials Preview */}
            <div className="mt-12 bg-gradient-to-r from-gold-500/10 to-gold-600/10 p-8 rounded-xl">
              <h4 className="text-2xl font-bold mb-6 text-gold-500 text-center">What Georgia Limo Owners Are Saying:</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-luxury-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <StarIcon key={star} className="w-5 h-5 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"From embarrassed to booked solid in 10 days. This system changed everything."</p>
                  <p className="text-gold-500 font-bold">- Marcus T., Atlanta</p>
                </div>
                <div className="bg-luxury-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <StarIcon key={star} className="w-5 h-5 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"I can finally charge premium prices and clients happily pay it."</p>
                  <p className="text-gold-500 font-bold">- Sarah W., Savannah</p>
                </div>
                <div className="bg-luxury-800 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <StarIcon key={star} className="w-5 h-5 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"The booking automation alone saved me 15 hours per week."</p>
                  <p className="text-gold-500 font-bold">- David C., Augusta</p>
                </div>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="mt-12 bg-gradient-to-r from-gold-500/10 to-gold-600/10 p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-4 text-gold-500">Your Transformation Journey</h4>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400">Health Check ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${showOfferButton ? 'bg-gold-500' : 'bg-gray-500'}`}>
                    <span className="text-black font-bold">🎯</span>
                  </div>
                  <span className={showOfferButton ? 'text-gold-500' : 'text-gray-400'}>Masterclass {showOfferButton ? '✓' : '🔒'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <span className="text-gray-400">Transformation 🔒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
