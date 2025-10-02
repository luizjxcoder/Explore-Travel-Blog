import React, { useState } from 'react'
import { Play } from 'lucide-react'
import { Button } from '../ui/button'
import useScrollReveal from '../hooks/useScrollReveal'
import VideoModal from '../modals/VideoModal'

const VideoSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<typeof videoThumbnails[0] | null>(null)

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
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      title: 'Aventuras Épicas'
    }
  ]

  const leftRef = useScrollReveal({ delay: 200 })
  const rightRef = useScrollReveal({ delay: 400 })

  const handleVideoClick = (video: typeof videoThumbnails[0]) => {
    console.log('🎥 Clique no vídeo:', video.title)
    setSelectedVideo(video)
    setIsVideoModalOpen(true)
  }

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false)
    setSelectedVideo(null)
  }

  console.log('🎥 Renderizando Video Section - Total de vídeos:', videoThumbnails.length)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)' }}
      ></div>
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div ref={leftRef} className="scroll-reveal-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              DESCUBRA O<br />
              <span className="text-gradient">MUNDO DE UMA</span><br />
              NOVA FORMA
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Assista aos nossos vídeos exclusivos e mergulhe nas experiências mais 
              incríveis que nossos destinos têm a oferecer. Cada história, cada aventura, 
              cada momento capturado especialmente para você.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-travel-cyan">
                  Experiências Transformadoras
                </h3>
              </div>
            </div>

            {/* Glass Card com informações */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 mt-4 sm:mt-6 mx-4 h-20 sm:h-24">
              {/* Conteúdo */}
              <div className="flex items-center justify-center h-full">
                <div className="text-sm sm:text-lg lg:text-xl text-center leading-tight font-medium flex items-center justify-center flex-wrap gap-2">
                  <span className="text-white hover:text-travel-cyan transition-colors duration-300">Vídeos exclusivos</span>
                  <Play className="text-travel-cyan w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  <span className="text-white hover:text-travel-cyan transition-colors duration-300">Destinos únicos</span>
                  <Play className="text-travel-cyan w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  <span className="text-white hover:text-travel-cyan transition-colors duration-300">Produção profissional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Grid */}
          <div ref={rightRef} className="grid grid-cols-3 gap-2 sm:gap-4 scroll-reveal-right">
            {/* Primeira imagem grande - ocupa 2 colunas */}
            <div 
              className="col-span-2 relative group cursor-pointer rounded-xl overflow-hidden card-hover animate-fade-in h-32 sm:h-48"
              style={{animationDelay: '0.6s'}}
              onClick={() => handleVideoClick(videoThumbnails[0])}
            >
              <img 
                src={videoThumbnails[0].image} 
                alt={videoThumbnails[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-travel-cyan/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-4 w-4 sm:h-6 sm:w-6 text-black ml-0.5 sm:ml-1" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                <h4 className="text-xs sm:text-sm font-semibold text-white">{videoThumbnails[0].title}</h4>
              </div>
            </div>

            {/* Primeira imagem da coluna direita - mesma altura da imagem principal */}
            <div 
              className="relative group cursor-pointer rounded-xl overflow-hidden card-hover animate-fade-in h-32 sm:h-48"
              style={{animationDelay: '0.7s'}}
              onClick={() => handleVideoClick(videoThumbnails[1])}
            >
              <img 
                src={videoThumbnails[1].image} 
                alt={videoThumbnails[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-travel-cyan/90 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 text-black ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                <h4 className="text-xs font-semibold text-white">{videoThumbnails[1].title}</h4>
              </div>
            </div>

            {/* Segunda linha - 2 imagens médias */}
            {videoThumbnails.slice(2, 4).map((video, index) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden card-hover animate-fade-in h-20 sm:h-32"
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
                onClick={() => handleVideoClick(video)}
              >
                <img 
                  src={video.image} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-travel-cyan/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-3 w-3 sm:h-4 sm:w-4 text-black ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2">
                  <h4 className="text-xs font-semibold text-white">{video.title}</h4>
                </div>
              </div>
            ))}

            {/* Segunda imagem da coluna direita - mesma altura dos cards da segunda linha */}
            <div 
              className="relative group cursor-pointer rounded-xl overflow-hidden card-hover animate-fade-in h-20 sm:h-32"
              style={{animationDelay: '1.0s'}}
              onClick={() => handleVideoClick(videoThumbnails[4])}
            >
              <img 
                src={videoThumbnails[4].image} 
                alt={videoThumbnails[4].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-travel-cyan/90 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 text-black ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2">
                <h4 className="text-xs font-semibold text-white">{videoThumbnails[4].title}</h4>
              </div>
            </div>

            {/* Terceira linha - 2 imagens médias */}
            {videoThumbnails.slice(5, 7).map((video, index) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden card-hover animate-fade-in h-20 sm:h-32"
                style={{animationDelay: `${1.1 + index * 0.1}s`}}
                onClick={() => handleVideoClick(video)}
              >
                <img 
                  src={video.image} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-travel-cyan/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-3 w-3 sm:h-4 sm:w-4 text-black ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2">
                  <h4 className="text-xs font-semibold text-white">{video.title}</h4>
                </div>
              </div>
            ))}

            {/* Terceira imagem da coluna direita - mesma altura dos cards da terceira linha */}
            <div 
              className="relative group cursor-pointer rounded-xl overflow-hidden card-hover animate-fade-in h-20 sm:h-32"
              style={{animationDelay: '1.3s'}}
              onClick={() => handleVideoClick({ id: 8, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop', title: 'Aventuras Épicas' })}
            >
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop" 
                alt="Aventuras Épicas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-travel-cyan/90 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 text-black ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2">
                <h4 className="text-xs font-semibold text-white">Aventuras Épicas</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        videoData={selectedVideo}
      />
    </section>
  )
}

export default VideoSection