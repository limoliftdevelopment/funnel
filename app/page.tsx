'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon, PhoneIcon, CalendarIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDiscount, setShowDiscount] = useState(false)
  const [discountEmail, setDiscountEmail] = useState('')
  const [hasDiscount, setHasDiscount] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Show discount popup after 15 seconds
    const timer = setTimeout(() => {
      setShowDiscount(true)
    }, 15000)
    return () => clearTimeout(timer)
  }, [])


  const handleDiscountSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Discount email:', discountEmail)
    localStorage.setItem('hasDiscount', 'true')
    localStorage.setItem('discountEmail', discountEmail)
    setHasDiscount(true)
    alert('Code HOLIDAY15 sent to your email!')
    setShowDiscount(false)
  }

  const handleDiscountClick = () => {
    const savedDiscount = localStorage.getItem('hasDiscount')
    if (savedDiscount) {
      // User already has discount, do nothing
      return
    }
    setShowDiscount(true)
  }

  useEffect(() => {
    const savedDiscount = localStorage.getItem('hasDiscount')
    if (savedDiscount) {
      setHasDiscount(true)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white overflow-x-hidden">
      {/* Holiday Discount Popup */}
      {showDiscount && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-8 rounded-2xl max-w-md w-full relative">
            <button 
              onClick={() => setShowDiscount(false)}
              className="absolute top-4 right-4 text-black hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-black mb-4">🚗 Limo Lovers' Extravaganza!</h3>
            <p className="mb-6 font-bold">Rev up your ride bookings with a 15% discount! Perfect for those bustling event nights and seasonal rushes.</p>
            <form onSubmit={handleDiscountSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email for discount code"
                value={discountEmail}
                onChange={(e) => setDiscountEmail(e.target.value)}
                className="w-full p-3 rounded-lg text-black font-bold"
                required
              />
              <button 
                type="submit"
                className="w-full bg-black text-yellow-400 p-3 rounded-lg font-black hover:bg-gray-800 transition"
              >
                GET MY 15% DISCOUNT CODE
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-900/95 backdrop-blur-sm border-b border-gold-500/20">
        <div className="container-custom section-padding py-4">
          <div className="flex justify-between items-center">
            <div className="luxury-text text-2xl font-bold gold-gradient">
              LimoLift Development
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-gold-500 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('proof')} className="hover:text-gold-500 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gold-500 transition-colors">
                Contact
              </button>
            </div>
            <a href="tel:+14035030601" className="btn-secondary hidden md:inline-flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`hero-gradient min-h-screen flex items-center relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-900/90 to-transparent"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Stop Losing Money on Empty Rides - {' '}
                <span className="gold-gradient">Get Booked Solid</span>{' '}
                in 10 Days
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 font-bold leading-relaxed">
                Get the FREE "Georgia Limo Business Boom Guide" - The exact system that helps limo owners fill their calendars and 3x their revenue!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary text-lg"
                >
                  GET MY FREE BOOM GUIDE
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="btn-secondary text-lg inline-flex items-center justify-center"
                >
                  See How It Works →
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-gold-500 mr-1" />
                  <span>5-Star Rated</span>
                </div>
                <div>⚡ Instant Access</div>
                <div>🔒 SSL Included</div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Limousine Fleet - Georgia's Premier Transportation"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon 
            className="w-8 h-8 text-gold-500 cursor-pointer" 
            onClick={() => scrollToSection('problems')}
          />
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="section-padding bg-luxury-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="luxury-text text-4xl lg:text-5xl font-bold mb-6">
              Are Low-Quality Websites, Missed Bookings, and High PPC Costs{' '}
              <span className="gold-gradient">Holding Your Business Back?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚫",
                title: "Outdated Websites",
                description: "Low-converting websites that turn prospects away and fail to capture leads effectively."
              },
              {
                icon: "📱",
                title: "Missed Opportunities",
                description: "Poor user experience causing lost online booking opportunities and frustrated customers."
              },
              {
                icon: "💸",
                title: "High Ad Costs",
                description: "Skyrocketing pay-per-click advertising costs with minimal return on investment."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-luxury-700 p-8 rounded-xl text-center hover:bg-luxury-600 transition-colors">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gold-500">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="section-padding bg-luxury-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              The {' '}
              <span className="gold-gradient">10-Day Website That Fills Your Calendar</span>
            </h2>
            <p className="text-xl text-gray-300 font-bold max-w-3xl mx-auto">
              Get more bookings than you can handle - Guaranteed results in 10 days or your money back.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Website Design"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Mobile-First Design",
                  description: "Responsive design that converts on all devices with lightning-fast loading speeds."
                },
                {
                  title: "Booking Integration", 
                  description: "Seamless Calendly integration for instant bookings and automated follow-ups."
                },
                {
                  title: "SEO Optimized",
                  description: "Built for search engines with local SEO to dominate your market area."
                },
                {
                  title: "Conversion Focused",
                  description: "Every element designed to convert visitors into paying customers."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-luxury-900 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold-500">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="section-padding bg-luxury-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="luxury-text text-4xl lg:text-5xl font-bold mb-6">
              <span className="gold-gradient">Proven Results</span> That Speak Volumes
            </h2>
          </div>
          
          {/* Georgia Limo Community */}
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 p-8 rounded-xl mb-16 text-center">
            <h3 className="text-3xl font-bold mb-4 text-gold-500">🍑 Built by Georgians, for Georgians 🍑</h3>
            <p className="text-xl text-gray-300 mb-6">
              We're not just another web company - we're your neighbors, your partners, your fellow Georgians who understand what it takes to succeed in the Peach State. When you work with us, you're not just paying us - you're working WITH us. We're all in this together, we're all Georgia, and we're all committed to making your limo business the pride of our great state.
            </p>
            <div className="flex justify-center items-center space-x-4 text-2xl">
              <span>🤝</span>
              <span className="text-gold-500 font-bold">Partners in Your Success</span>
              <span>🤝</span>
            </div>
          </div>

          {/* Georgia Limo Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "LimoLift transformed our Atlanta limo service! Bookings increased 400% in just 3 months. Our fleet stays busy now!",
                author: "Marcus Thompson, Elite Atlanta Limousines",
                location: "Atlanta, GA",
                rating: 5
              },
              {
                quote: "Finally, a website that understands Georgia's luxury transport market. Our Savannah weddings are booked solid!",
                author: "Sarah Mitchell, Coastal Luxury Transport", 
                location: "Savannah, GA",
                rating: 5
              },
              {
                quote: "Best investment we made for our Columbus limo business. The Georgia SEO optimization brought us tons of local clients.",
                author: "David Rodriguez, Peach State Limousines",
                location: "Columbus, GA",
                rating: 5
              },
              {
                quote: "These folks get the Georgia market! Our Augusta corporate accounts doubled after launching with LimoLift.",
                author: "Jennifer Williams, Masters Luxury Cars",
                location: "Augusta, GA",
                rating: 5
              },
              {
                quote: "From Macon to Atlanta, our routes are packed! LimoLift's booking system keeps our Georgia fleet moving 24/7.",
                author: "Robert Johnson, Central Georgia Limos",
                location: "Macon, GA",
                rating: 5
              },
              {
                quote: "Athens game days used to be chaos. Now our UGA transport bookings are seamless thanks to LimoLift's platform!",
                author: "Lisa Chen, Bulldog Luxury Transport",
                location: "Athens, GA",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-luxury-700 p-6 rounded-xl hover:bg-luxury-600 transition-colors">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold-500" />
                  ))}
                </div>
                <p className="text-sm italic mb-4 text-gray-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gold-500 text-sm">— {testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Georgia Testimonials for Bottom */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote: "Our Valdosta to Atlanta routes were struggling until LimoLift built us a conversion machine. Now we're the go-to limo service in South Georgia!",
                author: "Michael Brown, South Georgia Executive Transport",
                location: "Valdosta, GA",
                rating: 5
              },
              {
                quote: "Warner Robins Air Force Base contracts were hard to get. LimoLift's military-focused pages brought us steady government business!",
                author: "Patricia Davis, Robins Luxury Rides",
                location: "Warner Robins, GA",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-luxury-700 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-gold-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4 text-gray-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gold-500">— {testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "300%", label: "Average ROI Increase" },
              { number: "48hrs", label: "Delivery Time" },
              { number: "24/7", label: "Support Included" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="luxury-text text-4xl font-bold gold-gradient mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-luxury-900">
        <div className="container-custom">
          {/* Discount Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-xl mb-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2">🎯 Don't Forget Your 15% Discount!</h3>
              <p className="font-bold text-lg">For the full year - That's only $250/month! Don't wait for your developer to learn Wix - time is money and you can't afford to waste it!</p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="luxury-text text-4xl lg:text-5xl font-bold mb-6">
              <span className="gold-gradient">Pricing Built for Georgia Limo Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 font-bold max-w-3xl mx-auto">
              Stop losing money on empty rides. Get a limo website that fills your calendar and keeps Georgia's finest chauffeurs busy.
            </p>
            {!hasDiscount && (
              <div className="mt-8">
                <button 
                  onClick={handleDiscountClick}
                  className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  🎯 Get 15% Discount Code
                </button>
              </div>
            )}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-luxury-800 p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Limo Launch Package</h3>
              <div className="text-4xl font-bold mb-4 relative">
                {hasDiscount ? (
                  <>
                    <span className="line-through text-gray-500 text-2xl">$3,450</span>
                    <div>$2,933</div>
                  </>
                ) : (
                  <div>$3,450</div>
                )}
              </div>
              <p className="text-gray-300 mb-6">Complete professional limo website with everything you need to start filling your fleet and generating revenue immediately.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom luxury limo design",
                  "Local Georgia SEO optimization",
                  "Real-time booking integration", 
                  "Mobile-first limo experience",
                  "SSL certificate included",
                  "48-hour limo site delivery"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold-500 mr-3">🚗</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary w-full"
              >
                Launch My Limo Business
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-xl border-2 border-gold-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-luxury-900 px-4 py-2 rounded-full text-sm font-bold">
                GEORGIA'S CHOICE
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Elite Limo Growth</h3>
              <div className="text-4xl font-bold mb-4 relative">
                {hasDiscount ? (
                  <>
                    <span className="line-through text-gray-500 text-2xl">$295</span>
                    <div>$250<span className="text-lg">/month</span></div>
                    <div className="text-sm text-yellow-400 font-bold mt-1">(With 15% discount applied)</div>
                  </>
                ) : (
                  <div>$295<span className="text-lg">/month</span></div>
                )}
              </div>
              <p className="text-gray-300 mb-6">Complete limo website + ongoing support, hosting, and optimization to dominate Georgia's luxury transport market.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Launch Package",
                  "Premium limo hosting included",
                  "Monthly fleet & booking optimization",
                  "24/7 limo business support",
                  "Performance & conversion monitoring",
                  "Georgia market domination strategy"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gold-500 mr-3">🚗</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                Dominate Georgia's Limo Market
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="section-padding bg-gold-500/10">
        <div className="container-custom text-center">
          <h2 className="luxury-text text-3xl lg:text-4xl font-bold mb-4 text-gold-500">
            Only 10 Spots Available for July Launch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Secure your premium website before this exclusive opportunity closes.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-xl px-12 py-6"
          >
            SECURE MY SPOT NOW
          </button>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section id="contact" className="section-padding bg-luxury-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="luxury-text text-4xl lg:text-6xl font-bold mb-6">
                Get Your FREE <span className="gold-gradient">Georgia Limo Boom Guide</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-8 font-bold">
                The exact system that helps Georgia limo owners fill their calendars and 3x their revenue!
              </p>
              
              <button 
                onClick={() => window.location.href = '/chapter-1-download'}
                className="btn-primary text-2xl px-12 py-6 mb-8"
              >
                GET MY FREE BOOM GUIDE NOW
              </button>
              
              <p className="text-lg text-gray-400">
                ✅ Instant access to Module 1 • 🔒 100% Free • 🛡️ Safe automatic download
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-luxury-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold-500">📚 What You'll Get Inside:</h3>
                <ul className="text-gray-300 space-y-3 text-left">
                  <li className="flex items-center space-x-3">
                    <span className="text-gold-500">✓</span>
                    <span>Module 1: The 10-Day Georgia Limo Foundation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gold-500">✓</span>
                    <span>Module 2: Local SEO secrets for Georgia markets</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gold-500">✓</span>
                    <span>Module 3: Conversion scripts that fill calendars</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gold-500 font-bold">
                    <span>✨</span>
                    <span>Module 4: The $50K Secret - Advanced Revenue Automation (EXCLUSIVE)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-luxury-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold-500">🎯 What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    "Download Module 1 instantly",
                    "Continue with the implementation masterclass",
                    "Access remaining modules through the course",
                    "Complete the advanced revenue strategies module"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center text-left">
                      <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-luxury-900 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-800 section-padding">
        <div className="container-custom">
          <div className="text-center">
            <div className="luxury-text text-3xl font-bold gold-gradient mb-4">
              LimoLift Development
            </div>
            <p className="text-gray-400 mb-6">
              Transforming Transportation Businesses Through Premium Web Solutions
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="tel:+14035030601" className="text-gray-400 hover:text-gold-500 transition-colors">
                Call Us
              </a>
              <a href="mailto:info@limoliftdevelopment.com" className="text-gray-400 hover:text-gold-500 transition-colors">
                Email
              </a>
              <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-gold-500 transition-colors">
                Get Quote
              </button>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 LimoLift Development. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
