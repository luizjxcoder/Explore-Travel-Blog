import React, { useEffect } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { X, Maximize2, Volume2 } from 'lucide-react'
import { Button } from '../ui/button'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoData: {
    id: number
    image: string
    title: string
    videoUrl?: string
  } | null
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoData }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !videoData) return null

  // URLs de exemplo de vídeos relacionados aos destinos
  const getVideoUrl = (id: number) => {
    const videoUrls = {
      1: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Montanhas Canadenses
      2: 'https://www.youtube.com/embed/Zi_XLOBDo_Y', // Florestas Místicas  
      3: 'https://www.youtube.com/embed/jfKfPfyJRdk', // Cachoeiras Épicas
      4: 'https://www.youtube.com/embed/L_jWHffIx5E', // Aventuras Selvagens
      5: 'https://www.youtube.com/embed/sTSA_sWGM44', // Vida Selvagem
      6: 'https://www.youtube.com/embed/YQHsXMglC9A', // Paisagens Únicas
      7: 'https://www.youtube.com/embed/9bZkp7q19f0', // Aventuras Épicas
    }
    return videoUrls[id as keyof typeof videoUrls] || 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }

  console.log('🎬 Abrindo VideoModal para:', videoData.title)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0 bg-gray-900 border-gray-700" hideCloseButton={true}>
        <div className="relative w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-gray-800/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full flex items-center justify-center">
              <Volume2 className="h-6 w-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{videoData.title}</h2>
              <p className="text-gray-400 text-sm">Experiência Exclusiva Explore Travel</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full p-2"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Video container */}
        <div className="relative bg-black">
          <div className="aspect-video w-full">
            <iframe
              src={getVideoUrl(videoData.id)}
              title={videoData.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Fullscreen indicator */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-lg p-2 opacity-60">
            <Maximize2 className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 sm:p-6 bg-gray-800/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={videoData.image} 
                alt={videoData.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{videoData.title}</h3>
                <p className="text-gray-400 text-sm">Duração: ~3 min • HD Quality</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-travel-cyan text-travel-cyan hover:bg-travel-cyan hover:text-black"
              >
                Compartilhar
              </Button>
              <Button 
                className="btn-primary"
              >
                Ver Tour Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoModal