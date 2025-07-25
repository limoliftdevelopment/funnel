'use client'

import { useState } from 'react'
import { ArrowRightIcon, PlayIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function Value1Page() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to second value page
    window.location.href = '/value-2'
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Header */}
      <nav className="bg-luxury-800 p-4">
        <div className="container-custom">
          <div className="luxury-text text-2xl font-bold gold-gradient">
            LimoLift Development
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">Step 1 of 3</span>
              <span className="text-gold-500 font-bold">33% Complete</span>
            </div>
            <div className="w-full bg-luxury-800 rounded-full h-2">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full" style={{width: '33%'}}></div>
            </div>
          </div>

          {/* Chapter Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              Chapter 1: <span className="gold-gradient">The Website Foundation That Converts</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover the 5 essential elements every profitable limo website MUST have
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-luxury-800 rounded-xl p-8 mb-12">
            <div className="aspect-video bg-luxury-700 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <PlayIcon className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                <p className="text-gray-300">Chapter 1 Training Video</p>
                <p className="text-sm text-gray-400">(12 minutes)</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gold-500">What You'll Learn:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "The #1 mistake that kills limo website conversions",
                "How to structure your homepage for maximum bookings",
                "The 'Trust Triangle' that builds instant credibility",
                "Mobile optimization secrets for limo clients",
                "Call-to-action placement that converts 40% better"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter Content Preview */}
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gold-500">🔥 Key Takeaway from Chapter 1:</h3>
            <blockquote className="text-xl italic text-gray-300 border-l-4 border-gold-500 pl-6">
              "Most limo websites fail because they focus on looking pretty instead of making money. 
              The websites that generate $50K+ per month all follow the same 5-element formula..."
            </blockquote>
          </div>

          {/* Action Items */}
          <div className="bg-luxury-800 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gold-500">📋 Your Action Items:</h3>
            <div className="space-y-4">
              {[
                "Audit your current website using the 5-element checklist",
                "Identify which trust signals you're missing",
                "Plan your mobile-first redesign strategy",
                "Download the homepage template (included in guide)"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-900 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Continue to Next Chapter */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Chapter 2?</h3>
            <p className="text-gray-300 mb-8">
              Next up: "Local SEO Secrets for Georgia Markets" - Learn how to dominate your local search results
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <button
                type="submit"
                className="w-full btn-primary text-xl py-6 flex items-center justify-center"
              >
                UNLOCK CHAPTER 2 NOW
                <ArrowRightIcon className="w-6 h-6 ml-2" />
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              Plus get the Georgia Market Research Template
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
