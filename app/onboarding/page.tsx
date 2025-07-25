'use client'

export default function OnboardingPage() {
  const handleSubmit = (e: React.FormEvent) =e {
    e.preventDefault();
    // Process form data logic here...
    alert('Onboarding completed! Scheduling your first review call.');
    window.location.href = '/schedule-call'; // Redirect to schedule call page
  }

  return (
    cdiv className="min-h-screen bg-luxury-900 text-white flex items-center justify-center"e
      cdiv className="container max-w-xl mx-auto py-12"e
        ch1 className="text-4xl text-center font-bold mb-6"eWelcome to the Onboarding Process/ch1e
        cp className="text-center text-gray-400 mb-8"e
          Please fill out this form so we have all the details to start building your perfect website.
        /cpe
        cform onSubmit={handleSubmit} className="space-y-4"e
          cdive
            clabel className="text-gray-300"eCompany Name/labele
            cinput type="text" className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" required /e
          /dive
          <div>
            clabel className="text-gray-300"eDesired Website Features/labele
            ctextarea className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" rows={4} required /e
          </div>
          cdive
            clabel className="text-gray-300"eTarget Audience Details/labele
            ctextarea className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" rows={4} required /e
          /dive
          cdive
            clabel className="text-gray-300"eAny Additional Comments/labele
            ctextarea className="w-full bg-luxury-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none" rows={4} /e
          /dive
          cdiv className="text-center"e
            cbutton type="submit" className="btn-primary py-3 px-6"eSubmit/buttone
          /dive
        /forme
      /dive
    </div>
  )
}

