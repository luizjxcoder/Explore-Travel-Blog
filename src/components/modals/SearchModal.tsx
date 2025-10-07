import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Search, X, MapPin, Calendar, Users, Clock } from 'lucide-react'

interface SearchResult {
  id: string
  type: 'tour' | 'blog' | 'destination'
  title: string
  description: string
  image: string
  price?: string
  location?: string
  duration?: string
  category?: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock data for search results
  const mockData: SearchResult[] = [
    {
      id: '1',
      type: 'tour',
      title: 'Montanhas Rochosas',
      description: 'Aventura épica pelas montanhas com vista deslumbrante',
      image: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=300&h=200&fit=crop',
      price: 'R$ 899',
      location: 'Colorado, EUA',
      duration: '5 dias'
    },
    {
      id: '2',
      type: 'tour',
      title: 'Deserto Místico',
      description: 'Jornada inesquecível pelo deserto com acampamento sob as estrelas',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop',
      price: 'R$ 1299',
      location: 'Atacama, Chile',
      duration: '4 dias'
    },
    {
      id: '3',
      type: 'tour',
      title: 'Praias Tropicais',
      description: 'Relaxe nas praias mais belas do mundo com águas cristalinas',
      image: 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=300&h=200&fit=crop',
      price: 'R$ 1599',
      location: 'Maldivas',
      duration: '7 dias'
    },
    {
      id: '4',
      type: 'blog',
      title: 'Dicas para Primeira Viagem',
      description: 'Guia completo para quem vai viajar pela primeira vez',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop',
      category: 'Dicas de Viagem'
    },
    {
      id: '5',
      type: 'blog',
      title: 'Destinos Econômicos 2024',
      description: 'Os melhores destinos para viajar gastando pouco',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      category: 'Economia'
    },
    {
      id: '6',
      type: 'destination',
      title: 'Europa Clássica',
      description: 'Roteiro pelas capitais europeias mais famosas',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=200&fit=crop',
      location: 'Europa'
    }
  ]

  useEffect(() => {
    if (searchTerm.length >= 2) {
      setIsSearching(true)
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = mockData.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(filtered)
        setIsSearching(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [searchTerm])

  const handleClose = () => {
    setSearchTerm('')
    setSearchResults([])
    onClose()
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tour': return <MapPin className="w-4 h-4 text-travel-cyan" />
      case 'blog': return <Clock className="w-4 h-4 text-blue-400" />
      case 'destination': return <Users className="w-4 h-4 text-green-400" />
      default: return <Search className="w-4 h-4 text-gray-400" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'tour': return 'Tour'
      case 'blog': return 'Blog'
      case 'destination': return 'Destino'
      default: return ''
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0 bg-black/95 backdrop-blur-xl border border-gray-800 [&>button]:hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-800">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Pesquisar tours, destinos, dicas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-gray-900/50 border-gray-700 focus:border-travel-cyan text-white placeholder-gray-400 rounded-2xl"
              autoFocus
            />
          </div>
          <Button
            onClick={handleClose}
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-auto max-h-96">
          {searchTerm.length < 2 && (
            <div className="p-6 text-center text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Pesquisar Conteúdo</p>
              <p className="text-sm">Digite pelo menos 2 caracteres para buscar tours, destinos e dicas de viagem</p>
            </div>
          )}

          {isSearching && (
            <div className="p-6 text-center text-gray-400">
              <div className="animate-spin w-8 h-8 border-2 border-travel-cyan border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Buscando...</p>
            </div>
          )}

          {searchTerm.length >= 2 && !isSearching && searchResults.length === 0 && (
            <div className="p-6 text-center text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Nenhum resultado encontrado</p>
              <p className="text-sm">Tente usar palavras diferentes ou termos mais gerais</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="p-4 space-y-3">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="flex gap-4 p-4 bg-gray-900/30 rounded-2xl hover:bg-gray-900/50 transition-all duration-300 cursor-pointer group border border-transparent hover:border-gray-700"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(result.type)}
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {getTypeLabel(result.type)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-travel-cyan transition-colors">
                      {result.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                      {result.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      {result.price && (
                        <span className="text-travel-cyan font-semibold">{result.price}</span>
                      )}
                      {result.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{result.location}</span>
                        </div>
                      )}
                      {result.duration && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{result.duration}</span>
                        </div>
                      )}
                      {result.category && (
                        <span className="bg-gray-800 px-2 py-1 rounded-full">
                          {result.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {searchResults.length > 0 && (
          <div className="p-4 border-t border-gray-800 bg-gray-900/20">
            <p className="text-center text-xs text-gray-500">
              Encontrados {searchResults.length} resultado(s) para "{searchTerm}"
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default SearchModal