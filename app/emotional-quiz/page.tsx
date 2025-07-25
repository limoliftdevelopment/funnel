'use client'

import { useState, useEffect } from 'react'
import { CheckIcon, XMarkIcon, ChartBarIcon } from '@heroicons/react/24/solid'

interface Response {
  question: string;
  answer: string;
  weight: number;
}

interface UserDetails {
  firstName?: string;
  [key: string]: any;
}

export default function EmotionalQuizPage() {
  const [responses, setResponses] = useState<Response[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails>({})
  const [painScore, setPainScore] = useState(0)

  useEffect(() => {
    // Get user details
    const details = localStorage.getItem('userDetails')
    if (details) {
      setUserDetails(JSON.parse(details))
    }
  }, [])

  const questions = [
    {
      text: "How many potential bookings do you think you've lost in the past 6 months due to your current website?",
      options: ["0-2 bookings", "3-10 bookings", "11-25 bookings", "25+ bookings"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "How much time do you spend each week manually managing bookings and customer inquiries?",
      options: ["Less than 2 hours", "2-5 hours", "6-10 hours", "More than 10 hours"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "Have you ever had booking mishaps due to outdated information on your website?",
      options: ["Never", "Once or twice", "Several times", "Happens regularly"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "When potential clients visit your website, how do you think it compares to your competitors?",
      options: ["Much better", "Slightly better", "About the same", "Much worse"],
      weights: [1, 2, 4, 7]
    },
    {
      text: "On a scale of embarrassment, how do you feel when giving out your website to potential clients?",
      options: ["Very proud (1-2)", "Somewhat confident (3-5)", "A bit embarrassed (6-7)", "Very embarrassed (8-10)"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "Have clients ever complained about difficulty booking through your website?",
      options: ["Never", "Once or twice", "A few times", "Multiple complaints"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "How confident are you that your website converts visitors into paying customers?",
      options: ["Very confident", "Somewhat confident", "Not very confident", "Not confident at all"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "How much stress does managing your online presence and marketing cause you?",
      options: ["No stress", "Mild stress", "Moderate stress", "High stress"],
      weights: [1, 3, 5, 7]
    },
    {
      text: "How often do you find yourself making excuses about your website to potential clients?",
      options: ["Never", "Rarely", "Sometimes", "Frequently"],
      weights: [1, 3, 5, 7]
    }
  ]

  const handleResponse = (optionIndex: number) => {
    const newResponse = {
      question: questions[currentQuestion].text,
      answer: questions[currentQuestion].options[optionIndex],
      weight: questions[currentQuestion].weights[optionIndex]
    }
    
    const newResponses = [...responses, newResponse]
    setResponses(newResponses)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate pain score
      const totalScore = newResponses.reduce((sum, response) => sum + response.weight, 0)
      setPainScore(totalScore)
      
      // Store quiz results
      localStorage.setItem('quizResults', JSON.stringify({
        responses: newResponses,
        painScore: totalScore,
        completedAt: new Date().toISOString()
      }))
      
      setShowResults(true)
    }
  }

  const getPainLevel = (score: number) => {
    if (score <= 15) return { level: "Low", color: "text-green-400", message: "You're doing well, but there's room for growth!" }
    if (score <= 30) return { level: "Moderate", color: "text-yellow-400", message: "Some pain points are affecting your business." }
    if (score <= 45) return { level: "High", color: "text-orange-400", message: "Significant challenges are hurting your growth." }
    return { level: "Critical", color: "text-red-400", message: "Your current situation is costing you serious money!" }
  }

  const continueToVideo = () => {
    window.location.href = '/business-transformation-masterclass'
  }

  if (showResults) {
    const painLevel = getPainLevel(painScore)
    const potentialRevenueLoss = Math.min(painScore * 500, 25000) // Cap at $25k for realism
    
    return (
      <div className="min-h-screen bg-luxury-900 text-white">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              Your Results Are In, <span className="gold-gradient">{userDetails.firstName}</span>...
            </h1>
            
            <div className="bg-luxury-800 p-8 rounded-xl mb-8">
              <div className="flex items-center justify-center mb-6">
                <ChartBarIcon className="w-16 h-16 text-gold-500 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold">Pain Level: <span className={painLevel.color}>{painLevel.level}</span></h2>
                  <p className="text-xl text-gray-300">{painLevel.message}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-luxury-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">Estimated Revenue Loss</h3>
                  <p className="text-4xl font-black">${potentialRevenueLoss.toLocaleString()}/year</p>
                  <p className="text-gray-400">Based on industry averages for businesses with similar challenges</p>
                </div>
                
                <div className="bg-luxury-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gold-500 mb-2">Growth Potential</h3>
                  <p className="text-4xl font-black text-green-400">+{Math.floor(potentialRevenueLoss * 1.5).toLocaleString()}/year</p>
                  <p className="text-gray-400">What you could gain with the right system</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">🎯 Here's What's Next...</h3>
              <p className="text-lg text-gray-300 mb-6">
                I've created an exclusive masterclass that shows exactly how Georgia limo owners 
                like yourself have transformed their businesses and started booking 50+ rides per month.
              </p>
              <p className="text-lg font-bold text-white">
                You'll see real case studies, actual numbers, and the exact system that's working right now.
              </p>
            </div>
            
            <button
              onClick={continueToVideo}
              className="btn-primary text-xl px-12 py-6 animate-pulse"
            >
              🚀 WATCH THE TRANSFORMATION MASTERCLASS
            </button>
            
            <div className="mt-6 text-sm text-gray-400">
              🔒 Free access • 8 minutes • Real Georgia limo business results
            </div>
          </div>
        </div>
      </div>
    )
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-luxury-900 text-white">
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-luxury-800 rounded-full h-3">
              <div 
                className="bg-gold-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-5xl font-black mb-4">
              Georgia Limo Business <span className="gold-gradient">Health Check</span>
            </h1>
            <p className="text-xl text-gray-300">
              Let's honestly assess where your business stands and uncover hidden opportunities.
            </p>
          </div>
          
          <div className="bg-luxury-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-8 text-center leading-relaxed">
              {questions[currentQuestion].text}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleResponse(index)}
                  className="w-full p-4 bg-luxury-700 hover:bg-luxury-600 rounded-lg transition-colors text-left border-2 border-transparent hover:border-gold-500"
                >
                  <span className="text-lg">{option}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-400">
            <p>🔒 Your responses are confidential and used only to provide personalized insights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

