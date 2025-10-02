import React, { useState } from 'react'
import { Image, Play, Heart, MapPin, Camera } from 'lucide-react'
import { Button } from '../ui/button'
import useScrollReveal from '../hooks/useScrollReveal'
import useCounter from '../hooks/useCounter'
import ImageViewerModal from '../modals/ImageViewerModal'

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const categories = [
    { id: 'all', label: 'Todas', count: 24 },
    { id: 'mountains', label: 'Montanhas', count: 8 },
    { id: 'beaches', label: 'Praias', count: 6 },
    { id: 'cities', label: 'Cidades', count: 5 },
    { id: 'nature', label: 'Natureza', count: 5 }
  ]

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      category: 'mountains',
      title: 'Montanhas Canadenses',
      location: 'Canadá',
      likes: 1250,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      category: 'nature',
      title: 'Trilha na Floresta',
      location: 'Costa Rica',
      likes: 890,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop',
      category: 'cities',
      title: 'Arquitetura Moderna',
      location: 'Dubai',
      likes: 1650,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
      category: 'beaches',
      title: 'Paraíso Tropical',
      location: 'Maldivas',
      likes: 2100,
      type: 'video',
      size: 'medium'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop',
      category: 'mountains',
      title: 'Pico Gelado',
      location: 'Alpes Suíços',
      likes: 1580,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop',
      category: 'cities',
      title: 'Cidade Histórica',
      location: 'Praga',
      likes: 990,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=600&fit=crop',
      category: 'nature',
      title: 'Cachoeira Épica',
      location: 'Islândia',
      likes: 1750,
      type: 'video',
      size: 'medium'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop',
      category: 'beaches',
      title: 'Praia Paradisíaca',
      location: 'Tailândia',
      likes: 1420,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1515408320194-59643816c5b2?w=600&h=600&fit=crop',
      category: 'nature',
      title: 'Safari Africano',
      location: 'Quênia',
      likes: 2250,
      type: 'video',
      size: 'medium'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
      category: 'mountains',
      title: 'Vale Místico',
      location: 'Nova Zelândia',
      likes: 1100,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=600&fit=crop',
      category: 'mountains',
      title: 'Aurora Boreal',
      location: 'Noruega',
      likes: 3200,
      type: 'video',
      size: 'medium'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=600&fit=crop',
      category: 'beaches',
      title: 'Ilhas Paradisíacas',
      location: 'Seychelles',
      likes: 1890,
      type: 'photo',
      size: 'medium'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openImageViewer = (index: number) => {
    setSelectedImageIndex(index)
    setIsViewerOpen(true)
  }

  const closeImageViewer = () => {
    setIsViewerOpen(false)
  }

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2'
      case 'wide':
        return 'col-span-2 row-span-1'
      case 'tall':
        return 'col-span-1 row-span-2'
      case 'medium':
        return 'col-span-1 row-span-1'
      case 'small':
        return 'col-span-1 row-span-1'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  const headerRef = useScrollReveal({ delay: 200 })
  const filtersRef = useScrollReveal({ delay: 300 })
  const gridRef = useScrollReveal({ delay: 400 })
  const statsRef = useScrollReveal({ delay: 500 })
  const ctaRef = useScrollReveal({ delay: 600 })

  console.log('🎨 Renderizando Gallery Section - Categoria:', selectedCategory, '- Items:', filteredItems.length)

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            NOSSA <span className="text-gradient">GALERIA</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Explore através das lentes dos nossos aventureiros. Cada imagem conta 
            uma história única de descoberta e magia pelo mundo.
          </p>
        </div>

        {/* Category Filter */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 scroll-reveal px-2">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full transition-all duration-300 animate-fade-in ${
                selectedCategory === category.id
                  ? 'bg-travel-cyan text-black font-semibold'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid - Square Layout */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 lg:mb-16 scroll-reveal">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden card-hover animate-fade-in ${getGridClass(item.size)}`}
              style={{animationDelay: `${0.6 + index * 0.08}s`}}
              onClick={() => openImageViewer(index)}
            >
              <div className="relative w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Video Indicator */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-travel-cyan/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 md:h-8 md:w-8 text-black ml-1" />
                    </div>
                  </div>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 p-2 sm:p-3 md:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-black/50 rounded-full px-2 md:px-3 py-1">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4 text-travel-cyan" />
                      <span className="text-xs md:text-sm text-white">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/50 rounded-full px-2 md:px-3 py-1">
                      <Heart className="h-3 w-3 md:h-4 md:w-4 text-red-500" />
                      <span className="text-xs md:text-sm text-white">{item.likes}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-300 capitalize">{item.category}</span>
                      {item.type === 'photo' ? 
                        <Camera className="h-4 w-4 md:h-5 md:w-5 text-travel-cyan" /> :
                        <Play className="h-4 w-4 md:h-5 md:w-5 text-travel-cyan" />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex justify-center gap-3 sm:grid sm:grid-cols-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 scroll-reveal px-4">
          {[
            { value: 100, suffix: 'k+', label: 'Fotos Capturadas' },
            { value: 50, suffix: '+', label: 'Países Documentados' },
            { value: 500, suffix: '+', label: 'Vídeos Exclusivos' },
            { value: 1, suffix: 'M+', label: 'Visualizações' }
          ].map((stat, index) => {
            const counter = useCounter({ 
              end: stat.value, 
              duration: 2000, 
              delay: index * 300,
              suffix: stat.suffix
            })
            
            const displayValue = stat.suffix === 'k+' && counter.count === stat.value 
              ? `${counter.count}${stat.suffix}`
              : stat.suffix === 'M+' && counter.count === stat.value
                ? `${counter.count}${stat.suffix}`
                : counter.displayValue
                
            return (
              <div 
                key={index} 
                ref={counter.elementRef}
                className="text-center animate-fade-in" 
                style={{animationDelay: `${1.2 + index * 0.15}s`}}
              >
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-travel-cyan mb-1 sm:mb-2">{displayValue}</div>
                <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center scroll-reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-travel-cyan/20 rounded-full mb-6 animate-fade-in animate-delay-600">
            <Image className="h-8 w-8 text-travel-cyan" />
          </div>
          <h3 className="text-3xl font-bold mb-4 animate-fade-in animate-delay-700">Inspire-se e Viaje</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 animate-fade-in animate-delay-800">
            Cada foto é uma porta para uma nova aventura. Qual destino vai despertar 
            seu próximo sonho de viagem?
          </p>
          <Button className="btn-primary text-lg px-8 py-4 animate-fade-in animate-delay-800">
            Ver Galeria Completa
          </Button>
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewerModal 
        isOpen={isViewerOpen}
        onClose={closeImageViewer}
        images={filteredItems}
        initialIndex={selectedImageIndex}
      />
    </section>
  )
}

export default GallerySection