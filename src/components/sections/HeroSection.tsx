import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, MapPin, Users, Star } from 'lucide-react'
import LeadCaptureModal from '../modals/LeadCaptureModal'

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const stats = [
    { icon: MapPin, label: 'Destinos únicos', value: '50+' },
    { icon: Users, label: 'Viajantes felizes', value: '10k+' },
    { icon: Star, label: 'Avaliação média', value: '4.9' }
  ]

  console.log('🏔️ Renderizando Hero Section')

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            TIME TO <span className="text-gradient">TRAVEL</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra experiências únicas pelo mundo. Nossos tours exclusivos oferecem aventuras 
            inesquecíveis e memórias que durarão para sempre. Sua próxima aventura começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => setIsModalOpen(true)}
            >
              Descobrir Tours <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
              Assistir Vídeo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-travel-cyan/20 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-travel-cyan" />
                </div>
                <div className="text-2xl font-bold text-travel-cyan">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
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