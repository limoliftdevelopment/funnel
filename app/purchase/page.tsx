'use client'

import { useState } from 'react'
import { CheckIcon, CreditCardIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function PurchasePage() {
  const [selectedPlan, setSelectedPlan] = useState('elite')
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'd integrate with Stripe/PayPal
    console.log('Order submitted:', { selectedPlan, orderData })
    // Redirect to thank you page
    window.location.href = '/thank-you'
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
        <div className="container-custom max-w-6xl mx-auto">
          
          {/* Special Offer Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg mb-6 inline-block">
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-5 h-5" />
                <span className="font-bold">LIMITED TIME: 67% OFF + Bonuses Worth $2,397</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="gold-gradient">One-Time Special Offer</span>
            </h1>
            
            <p className="text-2xl text-gray-300 font-bold">
              Get your high-converting limo website built in 48 hours + everything you need to dominate Georgia's luxury transport market
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Pricing Options */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Package:</h2>
              
              {/* Elite Package - Recommended */}
              <div className={`bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl p-8 border-2 mb-6 cursor-pointer transition-all ${selectedPlan === 'elite' ? 'border-gold-500 shadow-2xl' : 'border-gold-500/50'}`}
                   onClick={() => setSelectedPlan('elite')}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  🔥 BEST VALUE - Save $1,500
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gold-500 mb-2">Elite Limo Growth</h3>
                  <div className="text-5xl font-black mb-2">
                    <span className="line-through text-gray-500 text-2xl mr-2">$495/mo</span>
                    <span className="text-gold-500">$167/mo</span>
                  </div>
                  <p className="text-gray-300">First 3 months, then $295/mo</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Complete limo website built in 48 hours",
                    "Georgia-focused SEO optimization",
                    "Real-time booking system integration",
                    "Mobile-first luxury design",
                    "24/7 priority support",
                    "Monthly performance optimization",
                    "Conversion tracking & analytics",
                    "BONUS: $997 Marketing Automation Setup",
                    "BONUS: $497 Georgia Market Research",
                    "BONUS: $397 Social Media Templates",
                    "BONUS: $297 Email Marketing Sequences",
                    "BONUS: $209 Review Generation System"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-luxury-900/50 p-4 rounded-lg">
                  <p className="text-center text-gold-500 font-bold">
                    Total Value: $5,894 | Today Only: $167/mo
                  </p>
                </div>
              </div>

              {/* Launch Package */}
              <div className={`bg-luxury-800 rounded-xl p-8 border cursor-pointer transition-all ${selectedPlan === 'launch' ? 'border-gold-500' : 'border-gold-500/20'}`}
                   onClick={() => setSelectedPlan('launch')}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gold-500 mb-2">Limo Launch Package</h3>
                  <div className="text-4xl font-black mb-2">
                    <span className="line-through text-gray-500 text-xl mr-2">$3,450</span>
                    <span>$1,997</span>
                  </div>
                  <p className="text-gray-300">One-time payment</p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Complete limo website built in 48 hours",
                    "Basic SEO optimization",
                    "Contact form integration",
                    "Mobile-responsive design",
                    "30-day support included"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <div className="bg-luxury-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Secure Your Website Now</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      value={orderData.firstName}
                      onChange={(e) => setOrderData({...orderData, firstName: e.target.value})}
                      className="w-full p-4 bg-luxury-700 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      value={orderData.lastName}
                      onChange={(e) => setOrderData({...orderData, lastName: e.target.value})}
                      className="w-full p-4 bg-luxury-700 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={orderData.email}
                    onChange={(e) => setOrderData({...orderData, email: e.target.value})}
                    className="w-full p-4 bg-luxury-700 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={orderData.phone}
                    onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                    className="w-full p-4 bg-luxury-700 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Limo Company Name *"
                    value={orderData.company}
                    onChange={(e) => setOrderData({...orderData, company: e.target.value})}
                    className="w-full p-4 bg-luxury-700 border border-gold-500/20 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    required
                  />

                  {/* Payment Method Selection */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold">Payment Method:</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="payment" value="card" defaultChecked className="text-gold-500" />
                        <CreditCardIcon className="w-5 h-5 text-gold-500" />
                        <span>Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="payment" value="paypal" className="text-gold-500" />
                        <span className="text-blue-400 font-bold">PayPal</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-xl py-6 flex items-center justify-center"
                  >
                    <ShieldCheckIcon className="w-6 h-6 mr-2" />
                    SECURE MY WEBSITE NOW
                  </button>
                </form>

                {/* Security Badges */}
                <div className="mt-6 text-center">
                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-400 mb-4">
                    <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                    <span>256-bit SSL Secured</span>
                    <span>•</span>
                    <span>Money-back Guarantee</span>
                  </div>
                  
                  <p className="text-xs text-gray-400">
                    Your payment information is processed securely. We do not store credit card details.
                  </p>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-6">
                <h4 className="text-xl font-bold text-green-400 mb-3">🛡️ 60-Day Money-Back Guarantee</h4>
                <p className="text-gray-300">
                  If you don't see a significant increase in bookings within 60 days, we'll refund every penny. No questions asked.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
