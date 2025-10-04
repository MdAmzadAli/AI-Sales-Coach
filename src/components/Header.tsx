import { useState } from 'react'
import { Button } from './ui/button'

interface HeaderProps {
  onCTAClick: () => void
}

export function Header({ onCTAClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xs sm:text-sm">AI</span>
            </div>
            <span className="ml-2 text-base sm:text-xl font-semibold text-white">AI Sales Coach</span>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={onCTAClick}
            className="bg-white hover:bg-gray-100 text-black px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-xs sm:text-sm"
          >
            <span className="hidden sm:inline">Get Started – 40% Off Beta</span>
            <span className="sm:hidden">Get Started</span>
          </Button>
        </div>


      </div>
    </header>
  )
}