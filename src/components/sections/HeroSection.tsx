import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, MapPin, Users, Star } from 'lucide-react'
import LeadCaptureModal from '../modals/LeadCaptureModal'
import useScrollReveal from '../hooks/useScrollReveal'
import useCounter from '../hooks/useCounter'

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const stats = [
    { icon: MapPin, label: 'Destinos únicos', value: 50, suffix: '+' },
    { icon: Users, label: 'Viajantes felizes', value: 10000, suffix: '+' },
    { icon: Star, label: 'Avaliação média', value: 4.9, suffix: '', isDecimal: true },
    { icon: ArrowRight, label: 'Viagens realizadas', value: 5000, suffix: '+' }
  ]

  const heroRef = useScrollReveal({ delay: 300 })
  const statsRef = useScrollReveal({ delay: 600 })

  console.log('🏔️ Renderizando Hero Section')

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg py-8 sm:py-0">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center scroll-reveal">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="block sm:inline">EXPLORE</span>{' '}
            <span className="block sm:inline text-gradient">TRAVEL</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Tempo de Viajar e descubrir experiências únicas pelo mundo
          </p>

          <div className="flex justify-center mb-8 sm:mb-16 px-4">
            <Button 
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs"
              onClick={() => setIsModalOpen(true)}
            >
              Descobrir Tours <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex justify-center gap-2 sm:grid sm:grid-cols-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto scroll-reveal px-4 mt-6 sm:mt-0">
            {stats.map((stat, index) => {
              const counter = useCounter({ 
                end: stat.isDecimal ? stat.value * 10 : stat.value, 
                duration: 2000, 
                delay: index * 300,
                suffix: stat.suffix
              })

              const displayValue = stat.isDecimal 
                ? `${(counter.count / 10).toFixed(1)}${stat.suffix}`
                : stat.value >= 1000 
                  ? `${Math.floor(counter.count / 1000)}k${stat.suffix}`
                  : counter.displayValue

              return (
                <div 
                  key={index} 
                  ref={counter.elementRef}
                  className="text-center animate-fade-in animate-delay-200" 
                  style={{animationDelay: `${0.8 + index * 0.2}s`}}
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-travel-cyan/20 rounded-full mb-2 sm:mb-4">
                    <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-travel-cyan" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-travel-cyan">{displayValue}</div>
                  <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default HeroSection