import { Button } from './ui/button'

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section id="home" className="py-12 sm:py-20 lg:py-32 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #000000, #0F172A)'}}>
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Turn Sales Rejections into
            <span className="block text-white">Revenue Wins</span>
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
            AI-powered roleplay that transforms struggling salespeople into closing machines. 
            <span className="text-white font-semibold">Practice real scenarios, get instant feedback, close more deals.</span>
          </p>
          
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <Button 
              onClick={onCTAClick}
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 text-sm sm:text-base lg:text-xl rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/25 font-bold w-auto"
            >
              Start Winning More Sales – 40% Off
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold">Free for first 50 users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold">40% beta discount</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold">Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}