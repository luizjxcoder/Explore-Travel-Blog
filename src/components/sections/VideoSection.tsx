import React from 'react'
import { Play } from 'lucide-react'
import { Button } from '../ui/button'

const VideoSection = () => {
  const videoThumbnails = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      title: 'Montanhas Canadenses'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
      title: 'Florestas Místicas'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=300&h=200&fit=crop',
      title: 'Cachoeiras Épicas'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop',
      title: 'Aventuras Selvagens'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515408320194-59643816c5b2?w=300&h=200&fit=crop',
      title: 'Vida Selvagem'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      title: 'Paisagens Únicas'
    }
  ]

  console.log('🎥 Renderizando Video Section - Total de vídeos:', videoThumbnails.length)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-green-900/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              DISCOVER THE <br />
              WORLD IN A <br />
              <span className="text-gradient">NEW WAY</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Assista aos nossos vídeos exclusivos e mergulhe nas experiências mais 
              incríveis que nossos destinos têm a oferecer. Cada história, cada aventura, 
              cada momento capturado especialmente para você.
            </p>

            <Button className="btn-primary text-lg px-8 py-4 mb-8">
              <Play className="mr-2 h-5 w-5" />
              ASSISTIR O VÍDEO
            </Button>

            <div className="text-sm text-gray-400">
              ✨ Vídeos exclusivos • 📍 Destinos únicos • 🎬 Produção profissional
            </div>
          </div>

          {/* Right Video Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {videoThumbnails.map((video, index) => (
              <div 
                key={video.id}
                className={`relative group cursor-pointer rounded-xl overflow-hidden card-hover ${
                  index === 0 ? 'col-span-2 h-48' : 'h-32'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={video.image} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-travel-cyan/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-black ml-1" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-sm font-semibold text-white">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection