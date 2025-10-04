import { MessageSquare, Target, BarChart3, TrendingUp } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Realistic AI Roleplay',
      description: 'Practice with AI acting as real prospects with authentic objections and responses.',
      benefit: '10x more practice than real calls'
    },
    {
      icon: Target,
      title: 'Instant Feedback',
      description: 'Learn exactly what to improve after each session with detailed performance analysis.',
      benefit: 'Immediate improvement insights'
    },
    {
      icon: BarChart3,
      title: 'Multiple Scenarios',
      description: 'Master objections, cold calls, discovery calls, and closing techniques in one platform.',
      benefit: 'All-in-one sales training'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Review session summaries and transcripts to track your improvement over time.',
      benefit: 'Data-driven sales growth'
    }
  ]

  return (
    <section id="features" className="py-12 sm:py-20" style={{background: 'linear-gradient(to bottom, #0F172A, #000000)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
            Why AI Sales Coach <span className="text-white">Works</span>
          </h2>
          <p className="text-sm sm:text-lg text-white max-w-2xl mx-auto px-4">
            Stop losing deals to objections you could have overcome. Master every sales scenario with AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:-translate-y-2 transform-gpu backdrop-blur-sm group hover:border-white/40"
              style={{
                background: '#0F172A',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black" />
              </div>
              <div className="text-xs uppercase tracking-wide text-white font-bold mb-2">
                {feature.benefit}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}