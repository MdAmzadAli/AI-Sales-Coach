import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white text-xs sm:text-sm">
            © 2024 AI Sales Coach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}