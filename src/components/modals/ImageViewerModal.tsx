
import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { X, ChevronLeft, ChevronRight, Heart, MapPin, Download, Share2, ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from '../ui/button'

interface GalleryItem {
  id: number
  image: string
  title: string
  location: string
  likes: number
  category: string
  type: 'photo' | 'video'
}

interface ImageViewerModalProps {
  isOpen: boolean
  onClose: () => void
  images: GalleryItem[]
  initialIndex: number
}

const ImageViewerModal = ({ isOpen, onClose, images, initialIndex }: ImageViewerModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const currentImage = images[currentIndex]

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'Escape':
            onClose()
            break
          case 'ArrowLeft':
            goToPrevious()
            break
          case 'ArrowRight':
            goToNext()
            break
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage.title,
          text: `Confira esta incrível foto de ${currentImage.location}!`,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Erro ao compartilhar:', err)
      }
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = currentImage.image
    link.download = `${currentImage.title.replace(/\s+/g, '_')}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] overflow-hidden p-0 bg-black/95 border-0" 
        hideCloseButton={true}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={onClose}
      >
        <div className="relative w-full h-full">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent z-10">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-xl font-bold">{currentImage.title}</h3>
            <div className="flex items-center gap-2 text-gray-300 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{currentImage.location}</span>
              <span className="mx-2">•</span>
              <span className="capitalize">{currentImage.category}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white"
        >
          <X className="h-6 w-6" />
        </Button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Main Image */}
      <div 
        className={`max-w-[90vw] max-h-[80vh] transition-transform duration-300 cursor-pointer ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          {/* Left Side - Image Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLike}
              className={`flex items-center gap-2 ${
                isLiked 
                  ? 'text-red-500 hover:text-red-400' 
                  : 'text-white hover:text-red-400'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{currentImage.likes + (isLiked ? 1 : 0)}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2 text-white hover:text-travel-cyan"
            >
              <Share2 className="h-5 w-5" />
              <span>Compartilhar</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2 text-white hover:text-travel-cyan"
            >
              <Download className="h-5 w-5" />
              <span>Download</span>
            </Button>
          </div>

          {/* Right Side - Zoom Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex items-center gap-2 text-white hover:text-travel-cyan"
            >
              {isZoomed ? (
                <>
                  <ZoomOut className="h-5 w-5" />
                  <span>Reduzir</span>
                </>
              ) : (
                <>
                  <ZoomIn className="h-5 w-5" />
                  <span>Ampliar</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Thumbnails Navigation */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsZoomed(false)
                }}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-travel-cyan' 
                    : 'border-transparent hover:border-white/50'
                }`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
        </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageViewerModal
