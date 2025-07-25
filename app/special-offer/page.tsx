'use client'

import { useState, useEffect } from 'react'
import { ClockIcon, PhoneIcon, CheckIcon, StarIcon, FireIcon } from '@heroicons/react/24/solid'

export default function SpecialOfferPage() {
  const [userDetails, setUserDetails] = useState<any>({})
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds
  const [hasDiscount, setHasDiscount] = useState(false)
  const [viewCount, setViewCount] = useState(0)

  useEffect(() => {
    // Get user details
    const details = localStorage.getItem('userDetails')
    if (details) {
      setUserDetails(JSON.parse(details))
    }

    // Check view count and set discount appropriately
    const views = localStorage.getItem('specialOfferViews') || '0'
    const currentViews = parseInt(views) + 1
    setViewCount(currentViews)
    localStorage.setItem('specialOfferViews', currentViews.toString())
    
    // If they've viewed multiple times, give bigger discount
    if (currentViews >= 2) {
      setHasDiscount(true)
      localStorage.setItem('hasDiscount', 'true')
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleClaimOffer = (packageType: string) => {
    // Store selection and redirect to purchase
    localStorage.setItem('selectedPackage', packageType)
    localStorage.setItem('specialOfferClaimed', 'true')
    window.location.href = '/purchase'
  }

  const bookStrategyCall = () => {
    // Could integrate with Calendly or similar
    window.open('tel:+14035030601', '_self')
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      {/* Urgent Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center space-x-4">
            <FireIcon className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">LIMITED TIME: Your Special Offer Expires In</span>
            <div className="bg-black/20 px-4 py-2 rounded-lg font-mono text-xl">
              {formatTime(timeLeft)}
            </div>
            <FireIcon className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-4">
            Congratulations <span className="gold-gradient">{userDetails.firstName}</span>! 🎉
          </h1>
          <p className="text-2xl text-gray-300 mb-8 font-bold">
            You've Unlocked My <span className="text-gold-500">Exclusive {hasDiscount ? '50% Off' : '25% Off'}</span> Offer
          </p>
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gold-500">🚗 This Offer Is Only For People Who:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-5 h-5 text-gold-500" />
                <span>Watched my exclusive presentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-5 h-5 text-gold-500" />
                <span>Are serious about growing their limo business</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-5 h-5 text-gold-500" />
                <span>Want results in the next 10 days</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-5 h-5 text-gold-500" />
                <span>Are ready to take action TODAY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Pricing */}
      <section className="section-padding bg-luxury-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gold-gradient">{hasDiscount ? '50% OFF' : '25% OFF'}</span> - Presentation Viewers Only
            </h2>
            <p className="text-xl text-gray-300">
              This pricing will never be available again after this page closes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Launch Package - Special Pricing */}
            <div className="bg-luxury-700 p-8 rounded-xl border-2 border-red-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                {hasDiscount ? '50%' : '25%'} OFF TODAY ONLY
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Limo Launch Package</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 line-through">Original Price: $3,450</div>
                {hasDiscount && (
                  <div className="text-sm text-gray-400 line-through">With 15% Discount: $2,933</div>
                )}
                <div className="text-5xl font-black text-red-400">{hasDiscount ? '$1,725' : '$2,588'}</div>
                <div className="text-lg text-red-400 font-bold">Save {hasDiscount ? '$1,725' : '$862'} Today!</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Custom luxury limo website (normally $2,500)",
                  "Local Georgia SEO optimization (normally $800)",
                  "Real-time booking integration (normally $500)",
                  "Mobile-first design (normally $400)",
                  "SSL certificate included (normally $150)",
                  "48-hour delivery (normally $100 rush fee)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClaimOffer('launch')}
                className="w-full bg-red-500 hover:bg-red-400 text-white py-4 rounded-lg font-bold text-lg transition-colors mb-4"
              >
                🔥 CLAIM THIS OFFER - {hasDiscount ? '$1,725' : '$2,588'}
              </button>
              
              <div className="text-center text-sm text-gray-400">
                💳 Payment plans available • 💰 30-day money-back guarantee
              </div>
            </div>

            {/* Growth Package - Special Pricing */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-xl border-2 border-gold-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-luxury-900 px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR - {hasDiscount ? '50%' : '25%'} OFF
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Elite Limo Growth</h3>
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 line-through">Original Price: $295/month</div>
                {hasDiscount && (
                  <div className="text-sm text-gray-400 line-through">With 15% Discount: $250/month</div>
                )}
                <div className="text-5xl font-black text-gold-500">{hasDiscount ? '$125' : '$200'}<span className="text-2xl">/month</span></div>
                <div className="text-lg text-gold-500 font-bold">Save {hasDiscount ? '$170' : '$95'}/month = {hasDiscount ? '$2,040' : '$1,140'}/year!</div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Launch Package (valued at $3,450)",
                  "Premium hosting included (normally $50/month)",
                  "Monthly optimization (normally $200/month)",
                  "24/7 priority support (normally $100/month)",
                  "Performance monitoring (normally $75/month)",
                  "Georgia market domination strategy (priceless)",
                  "BONUS: Free launch package (save $1,725)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClaimOffer('growth')}
                className="w-full btn-primary py-4 font-bold text-lg mb-4"
              >
                🚀 CLAIM THIS OFFER - {hasDiscount ? '$125' : '$200'}/MONTH
              </button>
              
              <div className="text-center text-sm text-gray-400">
                💳 No setup fees • 💰 Cancel anytime • 🎯 Results guaranteed
              </div>
            </div>
          </div>

          {/* Strategy Call Option */}
          <div className="mt-12 bg-luxury-700 p-8 rounded-xl max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gold-500">
              Not Sure Which Package Is Right For You?
            </h3>
            <p className="text-gray-300 mb-6">
              Book a free 15-minute strategy call and I'll personally help you choose 
              the best option for your specific situation and goals.
            </p>
            <button
              onClick={bookStrategyCall}
              className="btn-secondary inline-flex items-center space-x-3 px-8 py-4"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>Book FREE Strategy Call</span>
            </button>
            <div className="mt-4 text-sm text-gray-400">
              📞 Call now: (403) 503-0601 • Available 9 AM - 6 PM EST
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="section-padding bg-gradient-to-r from-red-900/50 to-red-800/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-400">
            ⚠️ This Offer Disappears When You Leave This Page
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This 50% discount is only available to people who watched my presentation. 
            Once you leave this page, the offer expires forever.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-luxury-800 p-6 rounded-xl">
              <div className="text-2xl font-bold text-red-400 mb-2">🚫</div>
              <h4 className="font-bold mb-2">No Second Chances</h4>
              <p className="text-sm text-gray-400">This offer will not be available again at this price</p>
            </div>
            <div className="bg-luxury-800 p-6 rounded-xl">
              <div className="text-2xl font-bold text-red-400 mb-2">⏰</div>
              <h4 className="font-bold mb-2">Time Sensitive</h4>
              <p className="text-sm text-gray-400">Only available for the next {Math.floor(timeLeft / 3600)} hours</p>
            </div>
            <div className="bg-luxury-800 p-6 rounded-xl">
              <div className="text-2xl font-bold text-gold-500 mb-2">🎯</div>
              <h4 className="font-bold mb-2">Guaranteed Results</h4>
              <p className="text-sm text-gray-400">Or get your money back - no questions asked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-luxury-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <span className="gold-gradient">Transform Your Limo Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your package below and let's get your calendar booked solid in the next 10 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <button
              onClick={() => handleClaimOffer('launch')}
              className="bg-red-500 hover:bg-red-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Launch Package - $1,725
            </button>
            <button
              onClick={() => handleClaimOffer('growth')}
              className="btn-primary px-8 py-4 font-bold text-lg"
            >
              Growth Package - $125/month
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            💳 Secure payment • 🔒 SSL encrypted • 💰 Money-back guarantee
          </div>
        </div>
      </section>
    </div>
  )
}
