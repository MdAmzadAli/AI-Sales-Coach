import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'
import { supabase } from '../utils/supabase/client'

interface WaitlistFormProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistForm({ isOpen, onClose }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    problem: '',
    personType: '',
    desiredResults: '',
    biggestChallenge: '',
    whatElseTried: '',
    budgetRange: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email) {
      setError('Email is required')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Use Supabase client to insert into waitlist table
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: formData.email.trim().toLowerCase(),
            name: formData.name.trim() || null,
            biggest_struggle: formData.problem || null,
            person_type: formData.personType || null,
            desired_results: formData.desiredResults || null,
            biggest_challenge: formData.biggestChallenge || null,
            what_else_tried: formData.whatElseTried || null,
            budget_range: formData.budgetRange || null,
            signup_source: 'landing_page',
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          throw new Error('This email is already on our waitlist!')
        }
        throw new Error(error.message || 'Failed to join waitlist. Please try again.')
      }

      setIsSubmitted(true)
      console.log('Waitlist signup successful:', data)
      
    } catch (err) {
      console.error('Waitlist signup error:', err)
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError('')
  }

  const resetForm = () => {
    setFormData({ 
      email: '', 
      name: '', 
      problem: '', 
      personType: '', 
      desiredResults: '', 
      biggestChallenge: '', 
      whatElseTried: '', 
      budgetRange: '' 
    })
    setIsSubmitted(false)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="border border-white/30 rounded-2xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 lg:p-8 relative max-h-[95vh] overflow-y-auto shadow-2xl" style={{background: '#0F172A'}}>
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 text-white hover:text-white text-2xl transition-colors"
        >
          ×
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">You're on the early access list — welcome!</h3>
            <p className="text-sm sm:text-base text-white mb-4 sm:mb-6">We'll notify you as soon as AI Sales Coach is ready for beta testing. Get ready to transform your sales results!</p>
            <Button onClick={resetForm} className="bg-white hover:bg-gray-100 text-black font-bold text-sm sm:text-base px-4 py-2">
              Close
            </Button>
          </div>
        ) : (
          <>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 text-center">Join the AI Sales Coach Beta Today</h3>
            <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 text-center">Get exclusive early access and <span className="text-white font-bold">40% off beta pricing</span></p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-white">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 bg-black border-white/20 text-white placeholder-white/60 focus:border-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-sm font-medium text-white">
                  Name (Optional)
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1 bg-black border-white/20 text-white placeholder-white/60 focus:border-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="personType" className="text-sm font-medium text-white">
                  What type of person are you? (Optional)
                </Label>
                <Select onValueChange={(value) => handleInputChange('personType', value)}>
                  <SelectTrigger className="mt-1 bg-black border-white/20 text-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="sales-rep" className="text-white hover:bg-white/10">Sales Representative</SelectItem>
                    <SelectItem value="sales-manager" className="text-white hover:bg-white/10">Sales Manager</SelectItem>
                    <SelectItem value="entrepreneur" className="text-white hover:bg-white/10">Entrepreneur/Small Business Owner</SelectItem>
                    <SelectItem value="sales-director" className="text-white hover:bg-white/10">Sales Director/VP</SelectItem>
                    <SelectItem value="business-owner" className="text-white hover:bg-white/10">Business Owner</SelectItem>
                    <SelectItem value="consultant" className="text-white hover:bg-white/10">Sales Consultant/Coach</SelectItem>
                    <SelectItem value="other" className="text-white hover:bg-white/10">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="desiredResults" className="text-sm font-medium text-white">
                  Which best describes the results you're trying to achieve? (Optional)
                </Label>
                <Select onValueChange={(value) => handleInputChange('desiredResults', value)}>
                  <SelectTrigger className="mt-1 bg-black border-white/20 text-white">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="increase-closing-rate" className="text-white hover:bg-white/10">Increase my closing rate</SelectItem>
                    <SelectItem value="handle-objections" className="text-white hover:bg-white/10">Better handle objections</SelectItem>
                    <SelectItem value="improve-cold-outreach" className="text-white hover:bg-white/10">Improve cold outreach success</SelectItem>
                    <SelectItem value="build-confidence" className="text-white hover:bg-white/10">Build sales confidence</SelectItem>
                    <SelectItem value="scale-sales-team" className="text-white hover:bg-white/10">Scale my sales team</SelectItem>
                    <SelectItem value="shorten-sales-cycle" className="text-white hover:bg-white/10">Shorten my sales cycle</SelectItem>
                    <SelectItem value="increase-revenue" className="text-white hover:bg-white/10">Increase overall revenue</SelectItem>
                    <SelectItem value="other" className="text-white hover:bg-white/10">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="biggestChallenge" className="text-sm font-medium text-white">
                  Which best describes the biggest challenge you've experienced? (Optional)
                </Label>
                <Select onValueChange={(value) => handleInputChange('biggestChallenge', value)}>
                  <SelectTrigger className="mt-1 bg-black border-white/20 text-white">
                    <SelectValue placeholder="Select your main challenge" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="objection-handling" className="text-white hover:bg-white/10">Struggling with Objections</SelectItem>
                    <SelectItem value="low-closing-rate" className="text-white hover:bg-white/10">Low Closing Rate</SelectItem>
                    <SelectItem value="cold-outreach-failure" className="text-white hover:bg-white/10">Cold Outreach Not Working</SelectItem>
                    <SelectItem value="lack-confidence" className="text-white hover:bg-white/10">Lack of Sales Confidence</SelectItem>
                    <SelectItem value="fear-rejection" className="text-white hover:bg-white/10">Fear of Rejection</SelectItem>
                    <SelectItem value="follow-up-issues" className="text-white hover:bg-white/10">Poor Follow-up Results</SelectItem>
                    <SelectItem value="negotiation-skills" className="text-white hover:bg-white/10">Weak Negotiation Skills</SelectItem>
                    <SelectItem value="time-management" className="text-white hover:bg-white/10">Poor Time Management</SelectItem>
                    <SelectItem value="other" className="text-white hover:bg-white/10">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="whatElseTried" className="text-sm font-medium text-white">
                  What else have you tried? (Optional)
                </Label>
                <Textarea
                  id="whatElseTried"
                  value={formData.whatElseTried}
                  onChange={(e) => handleInputChange('whatElseTried', e.target.value)}
                  className="mt-1 bg-black border-white/20 text-white placeholder-white/60 focus:border-white"
                  placeholder="Describe any sales training, tools, or strategies you've tried before..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="budgetRange" className="text-sm font-medium text-white">
                  Which price point best describes your current budget? (Optional)
                </Label>
                <Select onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger className="mt-1 bg-black border-white/20 text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="under-50" className="text-white hover:bg-white/10">Under $50/month</SelectItem>
                    <SelectItem value="50-100" className="text-white hover:bg-white/10">$50 - $100/month</SelectItem>
                    <SelectItem value="100-200" className="text-white hover:bg-white/10">$100 - $200/month</SelectItem>
                    <SelectItem value="200-500" className="text-white hover:bg-white/10">$200 - $500/month</SelectItem>
                    <SelectItem value="500-1000" className="text-white hover:bg-white/10">$500 - $1,000/month</SelectItem>
                    <SelectItem value="over-1000" className="text-white hover:bg-white/10">Over $1,000/month</SelectItem>
                    <SelectItem value="enterprise" className="text-white hover:bg-white/10">Enterprise pricing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 text-black py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-bold mt-4 sm:mt-6 text-sm sm:text-base"
              >
                {isSubmitting ? 'Joining...' : 'Get Started – 40% Off Beta'}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}