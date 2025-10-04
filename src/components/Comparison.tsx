import { Check, X } from 'lucide-react'

interface ComparisonProps {
  onCTAClick: () => void
}

export function Comparison({ onCTAClick }: ComparisonProps) {
  const comparisons = [
    {
      feature: 'Practice unlimited scenarios',
      traditional: false,
      aiCoach: true
    },
    {
      feature: 'Get instant feedback',
      traditional: false,
      aiCoach: true
    },
    {
      feature: 'Available 24/7',
      traditional: false,
      aiCoach: true
    },
    {
      feature: 'Track detailed progress',
      traditional: false,
      aiCoach: true
    },
    {
      feature: 'No judgment or pressure',
      traditional: false,
      aiCoach: true
    },
    {
      feature: 'Costs thousands monthly',
      traditional: true,
      aiCoach: false
    }
  ]

  return (
    <section className="py-12 sm:py-20" style={{background: 'linear-gradient(to bottom, #000000, #0F172A)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
            Why Choose AI Over <span className="text-white line-through">Traditional Training</span>
          </h2>
          <p className="text-sm sm:text-lg text-white max-w-2xl mx-auto px-4">
            Stop paying thousands for limited training sessions. Get unlimited practice for a fraction of the cost.
          </p>
        </div>

        <div className="rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl" style={{background: '#0F172A'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {/* Traditional Training */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <X className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Traditional Training</h3>
              <p className="text-white text-xs sm:text-sm">Limited, expensive, inconvenient</p>
            </div>

            {/* VS */}
            <div className="flex items-center justify-center">
              <span className="text-lg sm:text-2xl font-bold text-white bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">VS</span>
            </div>

            {/* AI Sales Coach */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">AI Sales Coach</h3>
              <p className="text-white text-xs sm:text-sm">Unlimited, affordable, always available</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-12 space-y-2 sm:space-y-4">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 items-center py-3 sm:py-4 border-b border-white/20 last:border-b-0">
                <div className="text-white font-medium text-center md:text-left text-sm sm:text-base">
                  {item.feature}
                </div>
                <div className="flex justify-center">
                  {item.traditional ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.aiCoach ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-12">
            <button
              onClick={onCTAClick}
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 font-bold w-auto"
            >
              Start Training Like a Pro – 40% Off
            </button>
            <p className="text-white text-xs sm:text-sm mt-2 sm:mt-3">Join the first 50 users and save 40%</p>
          </div>
        </div>
      </div>
    </section>
  )
}