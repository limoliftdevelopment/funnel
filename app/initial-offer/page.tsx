'use client'

import { useState, useEffect } from 'react'
import { ClockIcon, CheckIcon, FireIcon, DocumentTextIcon } from '@heroicons/react/24/solid'

export default function InitialOfferPage() {
  const [userDetails, setUserDetails] = useState<any>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes
  const [viewCount, setViewCount] = useState(0)

  useEffect(() => {
    // Get user details
    const details = localStorage.getItem('userDetails')
    if (details) {
      setUserDetails(JSON.parse(details))
    }

    // Track view count
    const views = localStorage.getItem('initialOfferViews') || '0'
    const currentViews = parseInt(views) + 1
    setViewCount(currentViews)
    localStorage.setItem('initialOfferViews', currentViews.toString())

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleDecline = () => {
    // If they've seen this 2+ times, show special offer
    if (viewCount >= 2) {
      localStorage.setItem('hasViewedMultipleTimes', 'true')
      window.location.href = '/special-offer'
    } else {
      // Show a retention message
      alert('Wait! Before you go, let me show you something special...')
      setTimeout(() => {
        window.location.href = '/special-offer'
      }, 1000)
    }
  }

  const handleAccept = (packageType: string) => {
    localStorage.setItem('selectedPackage', packageType)
    localStorage.setItem('initialOfferAccepted', 'true')
    window.location.href = '/purchase'
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Urgent Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center space-x-4">
            <FireIcon className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">EXCLUSIVE OFFER: Valid for next</span>
            <div className="bg-black/20 px-4 py-2 rounded-lg font-mono text-xl">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding py-12">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            {userDetails.firstName}, You've Just Unlocked The Complete 
            <span className="gold-gradient"> Georgia Limo Boom Guide!</span>
          </h1>
          
          <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gold-500">
              🎯 Here's What Happens Next...
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              You've downloaded Module 1, but that's just the foundation. The <strong>complete guide</strong> contains 
              7 more modules that reveal the exact system I use to help Georgia limo owners 
              book 50+ rides per month. But here's the thing...
            </p>
          </div>

          <div className="bg-luxury-800 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              ⚠️ The Complete Guide Isn't Free
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Normally, I charge $3,450 for the complete Georgia Limo Boom system. 
              But since you just watched my presentation and downloaded Module 1, 
              I'm going to do something crazy...
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-luxury-700 p-6 rounded-lg">
                <DocumentTextIcon className="w-12 h-12 text-gold-500 mb-4 mx-auto" />
                <h4 className="font-bold mb-2">Complete 8-Module System</h4>
                <p className="text-sm text-gray-400">All the secrets to dominating Georgia's limo market</p>
              </div>
              <div className="bg-luxury-700 p-6 rounded-lg">
                <CheckIcon className="w-12 h-12 text-gold-500 mb-4 mx-auto" />
                <h4 className="font-bold mb-2">Professional Website</h4>
                <p className="text-sm text-gray-400">Custom-built to convert visitors into bookings</p>
              </div>
              <div className="bg-luxury-700 p-6 rounded-lg">
                <FireIcon className="w-12 h-12 text-gold-500 mb-4 mx-auto" />
                <h4 className="font-bold mb-2">Ongoing Support</h4>
                <p className="text-sm text-gray-400">I'll personally help you implement everything</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="section-padding bg-gradient-to-r from-luxury-800 to-luxury-700">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            But Today Only, You Can Get <span className="text-gold-500">Everything</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Launch Package */}
            <div className="bg-luxury-900 p-8 rounded-xl border-2 border-gold-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-luxury-900 px-4 py-2 rounded-full text-sm font-bold">
                COMPLETE SYSTEM
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Limo Launch Package</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 line-through">Regular Price: $3,450</div>
                <div className="text-5xl font-black text-gold-500">$3,450</div>
                <div className="text-lg text-gray-400">Complete Georgia Limo System</div>
              </div>
              
              <ul className="space-y-3 mb-8 text-left">
                {[
                  "Complete 8-Module Georgia Limo Boom Guide",
                  "Custom luxury limo website",
                  "Local Georgia SEO optimization", 
                  "Real-time booking integration",
                  "Mobile-first design",
                  "48-hour delivery",
                  "30-day money-back guarantee"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleAccept('launch')}
                className="w-full btn-primary py-4 font-bold text-lg mb-4"
              >
                GET COMPLETE SYSTEM - $3,450
              </button>
            </div>

            {/* Growth Package */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-xl border-2 border-gold-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Elite Limo Growth</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400">Monthly Investment:</div>
                <div className="text-5xl font-black text-gold-500">$295<span className="text-2xl">/month</span></div>
                <div className="text-lg text-gold-500 font-bold">Everything + Ongoing Growth</div>
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {[
                  "Everything in Launch Package (FREE)",
                  "Premium hosting included",
                  "Monthly optimization & updates",
                  "24/7 priority support",
                  "Performance monitoring",
                  "Georgia market domination strategy",
                  "Unlimited website changes"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleAccept('growth')}
                className="w-full bg-red-500 hover:bg-red-400 text-white py-4 rounded-lg font-bold text-lg transition-colors mb-4"
              >
                START GROWING - $295/MONTH
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Not ready to invest in your limo business growth today?
            </p>
            <button
              onClick={handleDecline}
              className="text-gray-400 underline hover:text-white transition-colors"
            >
              No thanks, I'll pass on this opportunity
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding bg-luxury-900">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto bg-luxury-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gold-500">
              💰 100% Satisfaction Guarantee
            </h3>
            <p className="text-lg text-gray-300">
              If you don't see a significant increase in bookings within 30 days, 
              I'll refund every penny - no questions asked. That's how confident I am 
              in this system.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
