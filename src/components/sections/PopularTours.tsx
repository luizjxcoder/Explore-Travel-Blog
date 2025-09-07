import React from 'react'
import { Button } from '../ui/button'
import { MapPin, Clock, Users, Star } from 'lucide-react'

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
    }
  ]

  console.log('🗺️ Renderizando Popular Tours - Total de tours:', tours.length)

  return (
    <section id="tours" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            POPULAR TOURS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubra nossos destinos mais procurados e embarque em aventuras inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <div 
              key={tour.id} 
              className="group relative overflow-hidden rounded-2xl card-hover animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative h-96">
                <img 
                  src={tour.image} 
                  alt={tour.subtitle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-card-gradient"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-travel-cyan mb-2">{tour.title}</h3>
                    <h4 className="text-lg font-semibold mb-2">{tour.subtitle}</h4>
                    <p className="text-sm text-gray-300 mb-4">{tour.description}</p>
                  </div>

                  {/* Tour Info */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-travel-cyan">{tour.price}</div>
                    <Button size="sm" className="btn-primary">
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary text-lg px-8 py-4">
            Ver Todos os Tours
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PopularTours