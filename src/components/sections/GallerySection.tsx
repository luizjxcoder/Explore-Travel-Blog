import React, { useState } from 'react'
import { Image, Play, Heart, MapPin, Camera } from 'lucide-react'
import { Button } from '../ui/button'

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

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
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      category: 'mountains',
      title: 'Montanhas Canadenses',
      location: 'Canadá',
      likes: 1250,
      type: 'photo',
      size: 'large'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
      category: 'nature',
      title: 'Trilha na Floresta',
      location: 'Costa Rica',
      likes: 890,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop',
      category: 'beaches',
      title: 'Paraíso Tropical',
      location: 'Maldivas',
      likes: 2100,
      type: 'video',
      size: 'tall'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      category: 'mountains',
      title: 'Pico Gelado',
      location: 'Alpes Suíços',
      likes: 1580,
      type: 'photo',
      size: 'small'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop',
      category: 'cities',
      title: 'Cidade Histórica',
      location: 'Praga',
      likes: 990,
      type: 'photo',
      size: 'medium'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=400&fit=crop',
      category: 'nature',
      title: 'Cachoeira Épica',
      location: 'Islândia',
      likes: 1750,
      type: 'video',
      size: 'wide'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1502780402662-acc01917921e?w=400&h=600&fit=crop',
      category: 'beaches',
      title: 'Praia Paradisíaca',
      location: 'Tailândia',
      likes: 1420,
      type: 'photo',
      size: 'tall'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1515408320194-59643816c5b2?w=400&h=400&fit=crop',
      category: 'nature',
      title: 'Safari Africano',
      location: 'Quênia',
      likes: 2250,
      type: 'video',
      size: 'medium'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      category: 'mountains',
      title: 'Vale Místico',
      location: 'Nova Zelândia',
      likes: 1100,
      type: 'photo',
      size: 'small'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1464822759353-ca9ddd4e2e74?w=600&h=500&fit=crop',
      category: 'mountains',
      title: 'Aurora Boreal',
      location: 'Noruega',
      likes: 3200,
      type: 'video',
      size: 'wide'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=700&fit=crop',
      category: 'cities',
      title: 'Arquitetura Moderna',
      location: 'Dubai',
      likes: 1650,
      type: 'photo',
      size: 'tall'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=400&fit=crop',
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

  console.log('🎨 Renderizando Gallery Section - Categoria:', selectedCategory, '- Items:', filteredItems.length)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            NOSSA <span className="text-gradient">GALERIA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore através das lentes dos nossos aventureiros. Cada imagem conta 
            uma história única de descoberta e magia pelo mundo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-travel-cyan text-black font-semibold'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid - Optimized Masonry Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden card-hover animate-fade-in ${getGridClass(item.size)}`}
              style={{animationDelay: `${index * 0.1}s`}}
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
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-travel-cyan mb-2">100k+</div>
            <div className="text-gray-400 text-sm">Fotos Capturadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-travel-cyan mb-2">50+</div>
            <div className="text-gray-400 text-sm">Países Documentados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-travel-cyan mb-2">500+</div>
            <div className="text-gray-400 text-sm">Vídeos Exclusivos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-travel-cyan mb-2">1M+</div>
            <div className="text-gray-400 text-sm">Visualizações</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-travel-cyan/20 rounded-full mb-6">
            <Image className="h-8 w-8 text-travel-cyan" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Inspire-se e Viaje</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Cada foto é uma porta para uma nova aventura. Qual destino vai despertar 
            seu próximo sonho de viagem?
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Ver Galeria Completa
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GallerySection