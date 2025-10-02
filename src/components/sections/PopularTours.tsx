import React from 'react'
import { Button } from '../ui/button'
import { MapPin, Clock, Users, Star } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const PopularTours = () => {
  const tours = [
    {
      id: 1,
      title: 'TOUR 1',
      subtitle: 'Aventura na Floresta',
      description: 'Explore trilhas místicas em meio à natureza exuberante',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop&crop=center',
      duration: '5 dias',
      groupSize: '8 pessoas',
      rating: 4.9,
      price: 'R$ 1.299'
    },
    {
      id: 2,
      title: 'TOUR 2',
      subtitle: 'Montanhas Geladas',
      description: 'Descubra paisagens épicas nas montanhas canadenses',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&crop=center',
      duration: '7 dias',
      groupSize: '6 pessoas',
      rating: 5.0,
      price: 'R$ 2.499'
    },
    {
      id: 3,
      title: 'TOUR 3',
      subtitle: 'Caminhos Selvagens',
      description: 'Aventure-se pelos caminhos menos explorados',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=500&fit=crop&crop=center',
      duration: '4 dias',
      groupSize: '10 pessoas',
      rating: 4.8,
      price: 'R$ 899'
    },
    {
      id: 4,
      title: 'TOUR 4',
      subtitle: 'Cachoeiras Majestosas',
      description: 'Experimente a força da natureza em cachoeiras épicas',
      image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&h=500&fit=crop&crop=center',
      duration: '3 dias',
      groupSize: '12 pessoas',
      rating: 4.7,
      price: 'R$ 699'
    },
    {
      id: 5,
      title: 'TOUR 5',
      subtitle: 'Deserto Místico',
      description: 'Desvende os segredos das dunas douradas e oásis escondidos',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=500&fit=crop&crop=center',
      duration: '6 dias',
      groupSize: '8 pessoas',
      rating: 4.9,
      price: 'R$ 1.899'
    },
    {
      id: 6,
      title: 'TOUR 6',
      subtitle: 'Praias Tropicais',
      description: 'Relaxe em praias paradisíacas e mergulhe em águas cristalinas',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop&crop=center',
      duration: '8 dias',
      groupSize: '15 pessoas',
      rating: 4.8,
      price: 'R$ 1.599'
    }
  ]

  const headerRef = useScrollReveal({ delay: 200 })
  const gridRef = useScrollReveal({ delay: 400 })
  const ctaRef = useScrollReveal({ delay: 600 })

  console.log('🗺️ Renderizando Popular Tours - Total de tours:', tours.length)

  return (
    <section id="tours" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gradient">
            POPULAR TOURS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Descubra nossos destinos mais procurados e embarque em aventuras inesquecíveis
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 scroll-reveal">
          {tours.map((tour, index) => (
            <div 
              key={tour.id} 
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-300/30 flex flex-col h-80 sm:h-96"
              style={{
                backgroundImage: `url(${tour.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                animationDelay: `${0.6 + index * 0.15}s`
              }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-travel-cyan/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Duration Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full opacity-30"></div>
                  <span className="relative bg-gradient-to-r from-travel-cyan to-blue-400 text-black px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                    {tour.duration}
                  </span>
                </div>
              </div>

              {/* Price Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                  <span className="relative bg-white/90 text-gray-900 px-3 py-2 rounded-lg text-sm font-bold">
                    {tour.price}
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute bottom-20 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 z-10">
                <div className="w-3 h-3 bg-travel-cyan rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-16 left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 z-10">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              </div>

              {/* Content Container - positioned at bottom */}
              <div className="relative mt-auto p-6 sm:p-8 z-10">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-t-3xl border-t border-white/20"></div>
                
                {/* Title with enhanced typography */}
                <h3 className="relative text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-travel-cyan transition-all duration-300 cursor-pointer leading-tight">
                  {tour.title}
                </h3>
                <h4 className="relative text-lg font-semibold mb-3 text-gray-200">{tour.subtitle}</h4>
                
                {/* Tour Info */}
                <div className="relative flex items-center justify-between text-xs text-gray-300 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-travel-cyan" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-travel-cyan" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{tour.rating}</span>
                  </div>
                </div>

                {/* Enhanced CTA Button */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Button 
                    className="relative w-full bg-gradient-to-r from-travel-cyan to-blue-400 text-black font-bold py-2.5 px-6 rounded-2xl border-0 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Reservar Agora
                      <div className="w-2 h-2 bg-black/20 rounded-full group-hover:animate-pulse"></div>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center mt-12 scroll-reveal">
          <Button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-fade-in animate-delay-600">
            Ver Todos os Tours
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PopularTours