'use client'

export default function OnboardingPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Onboarding completed! Scheduling your first review call.');
    window.location.href = '/schedule-call';
  }

  return (
    <div className="min-h-screen bg-luxury-900 text-white flex items-center justify-center">
      <div className="container max-w-xl mx-auto py-12">
        <h1 className="text-4xl text-center font-bold mb-6">Welcome to the Onboarding Process</h1>
        <p className="text-center text-gray-400 mb-8">
          Please fill out this form so we have all the details to start building your perfect website.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-300">Company Name</label>
            <input type="text" className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" required />
          </div>
          <div>
            <label className="text-gray-300">Desired Website Features</label>
            <textarea className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" rows={4} required />
          </div>
          <div>
            <label className="text-gray-300">Target Audience Details</label>
            <textarea className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" rows={4} required />
          </div>
          <div>
            <label className="text-gray-300">Any Additional Comments</label>
            <textarea className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" rows={4} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn-primary py-3 px-6">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
