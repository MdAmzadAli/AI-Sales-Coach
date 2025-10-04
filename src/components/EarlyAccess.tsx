import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface EarlyAccessProps {
  onCTAClick: () => void
}

export function EarlyAccess({ onCTAClick }: EarlyAccessProps) {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right, #0F172A, #000000, #0F172A)'}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <Badge variant="secondary" className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 font-bold text-xs sm:text-sm">
          LIMITED TIME: BETA ACCESS
        </Badge>
        
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          Stop Losing Sales to <span className="text-white">Objections</span>
        </h2>
        
        <p className="text-sm sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          While your competitors struggle with rejections, you'll be <span className="text-white font-bold">closing deals confidently</span>. 
          Get exclusive beta access and <span className="text-white">transform your sales results</span>.
        </p>
        
        <div className="flex flex-col gap-4 justify-center items-center mb-6 sm:mb-8">
          <Button 
            onClick={onCTAClick}
            className="bg-white hover:bg-gray-100 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 text-sm sm:text-base lg:text-xl rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/25 font-bold w-auto"
          >
            Unlock Higher Sales – 40% Off Beta
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold">FREE for first 50 users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold">40% discount locked in</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold">Start winning immediately</span>
          </div>
        </div>
      </div>
    </section>
  )
}