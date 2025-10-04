import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Comparison } from './components/Comparison'
import { EarlyAccess } from './components/EarlyAccess'
import { WaitlistForm } from './components/WaitlistForm'
import { Footer } from './components/Footer'

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleCTAClick = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 font-['Inter',sans-serif]" style={{background: 'linear-gradient(to bottom right, #000000, #0F172A)'}}>
      <Header onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <Features />
      <Comparison onCTAClick={handleCTAClick} />
      <EarlyAccess onCTAClick={handleCTAClick} />
      <Footer />
      <WaitlistForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  )
}