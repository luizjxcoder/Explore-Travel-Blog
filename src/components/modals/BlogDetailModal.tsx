
import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { X, Calendar, Clock, User, Tag, Share2, Heart, Bookmark } from 'lucide-react'
import { Button } from '../ui/button'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
}

interface BlogDetailModalProps {
  isOpen: boolean
  onClose: () => void
  post: BlogPost | null
}

const BlogDetailModal = ({ isOpen, onClose, post }: BlogDetailModalProps) => {
  if (!isOpen || !post) return null

  const getFullContent = (postId: number) => {
    const contents: { [key: number]: string } = {
      1: `
        <h2>Os 10 Destinos Mais Incríveis para Explorar em 2024</h2>
        
        <p>O ano de 2024 promete ser extraordinário para os amantes de viagens! Após anos de restrições, o mundo está mais acessível do que nunca, e novos destinos estão emergindo como verdadeiros paraísos para aventureiros.</p>
        
        <h3>1. Islândia - Terra do Fogo e Gelo</h3>
        <p>A Islândia continua sendo um dos destinos mais procurados, oferecendo paisagens únicas que parecem de outro planeta. Das auroras boreais às fontes termais naturais, cada momento é uma descoberta.</p>
        
        <h3>2. Patagônia - Aventura Selvagem</h3>
        <p>Entre Argentina e Chile, a Patagônia oferece algumas das paisagens mais dramáticas do mundo. Ideal para quem busca trekking, montanhismo e contato direto com a natureza intocada.</p>
        
        <h3>3. Japão - Tradição e Modernidade</h3>
        <p>O Japão fascina pela harmonia entre tradição milenar e tecnologia de ponta. Dos templos de Kyoto aos arranha-céus de Tóquio, cada experiência é única.</p>
        
        <h3>4. Nova Zelândia - Cenários de Cinema</h3>
        <p>Com paisagens que serviram de cenário para filmes épicos, a Nova Zelândia oferece aventuras para todos os gostos, desde bungee jump até trilhas em florestas encantadas.</p>
        
        <h3>5. Noruega - Fiordes Majestosos</h3>
        <p>Os fiordes noruegueses são patrimônio mundial da UNESCO por bom motivo. Navegue por águas cristalinas cercado por montanhas impressionantes.</p>
        
        <p><strong>Dica importante:</strong> Reserve com antecedência! Estes destinos estão em alta demanda e as melhores acomodações se esgotam rapidamente.</p>
      `,
      2: `
        <h2>Como Fazer as Malas: O Guia Definitivo do Viajante Experiente</h2>
        
        <p>Fazer as malas pode ser um desafio, especialmente quando você quer otimizar espaço sem deixar nada essencial para trás. Aqui estão as técnicas que os viajantes profissionais usam.</p>
        
        <h3>Escolha a Bagagem Certa</h3>
        <p>Invista em uma mala de qualidade com rodinhas 360°. Para viagens longas, prefira malas rígidas que protegem melhor seus pertences.</p>
        
        <h3>Técnica de Enrolar</h3>
        <p>Ao invés de dobrar, enrole suas roupas. Esta técnica economiza até 30% do espaço e evita vincos.</p>
        
        <h3>Lista de Essenciais</h3>
        <ul>
        <li>Documentos em pasta impermeável</li>
        <li>Kit de primeiros socorros</li>
        <li>Adaptadores universais</li>
        <li>Power bank portátil</li>
        <li>Roupas versáteis que combinem entre si</li>
        </ul>
        
        <h3>Bagagem de Mão Estratégica</h3>
        <p>Sempre leve uma muda completa de roupa na bagagem de mão. Inclua também medicamentos, eletrônicos e itens de valor.</p>
        
        <h3>Produtos de Higiene</h3>
        <p>Use recipientes pequenos e reutilizáveis. Muitos hotéis oferecem amenities básicos, então não exagere nos produtos pessoais.</p>
        
        <p><strong>Dica de ouro:</strong> Deixe 20% da mala vazia para souvenirs e compras durante a viagem!</p>
      `,
      3: `
        <h2>Fotografia de Viagem: Capture Memórias Inesquecíveis</h2>
        
        <p>A fotografia de viagem é uma arte que combina técnica, criatividade e o momento certo. Aprenda a capturar não apenas imagens, mas emoções e histórias.</p>
        
        <h3>Equipamentos Essenciais</h3>
        <p>Você não precisa de equipamentos caros para começar. Um smartphone moderno já produz resultados incríveis, mas considere:</p>
        <ul>
        <li>Câmera mirrorless compacta</li>
        <li>Lentes versáteis (18-55mm é ideal)</li>
        <li>Tripé leve</li>
        <li>Cartões de memória extras</li>
        </ul>
        
        <h3>Regra dos Terços</h3>
        <p>Divida sua imagem em 9 quadrantes imaginários. Posicione elementos importantes nas linhas ou intersecções para criar composições mais dinâmicas.</p>
        
        <h3>Horário Dourado</h3>
        <p>As melhores fotos são tiradas durante o nascer e pôr do sol. A luz suave e dourada cria uma atmosfera mágica em qualquer cenário.</p>
        
        <h3>Conte uma História</h3>
        <p>Não fotografe apenas pontos turísticos. Capture pessoas locais, detalhes arquitetônicos, comidas típicas. Estas imagens contarão a verdadeira história da sua viagem.</p>
        
        <h3>Respeite a Cultura Local</h3>
        <p>Sempre peça permissão antes de fotografar pessoas. Em alguns lugares, fotografar é considerado desrespeitoso ou até proibido.</p>
        
        <p><strong>Dica profissional:</strong> Tire várias fotos do mesmo local com diferentes enquadramentos. Você se surpreenderá com os resultados!</p>
      `
    }
    
    return contents[postId] || '<p>Conteúdo não encontrado.</p>'
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0" hideCloseButton>
        <div className="overflow-y-auto max-h-[90vh]">
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-travel-cyan text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {post.title}
                  </h1>
                </div>
              </div>

              {/* Meta Information */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Curtir
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    Salvar
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  
                  <div 
                    className="text-gray-300 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: getFullContent(post.id) }}
                  />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <h4 className="text-lg font-semibold mb-4">Tags relacionadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['viagem', 'aventura', 'destinos', post.category.toLowerCase(), 'dicas'].map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-travel-cyan hover:text-black transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 p-6 bg-gradient-to-r from-travel-cyan/20 to-blue-500/20 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-2">Gostou do que leu?</h4>
                  <p className="text-gray-300 mb-4">
                    Transforme essas dicas em realidade! Conheça nossos tours exclusivos.
                  </p>
                  <Button className="btn-primary">
                    Ver Tours Disponíveis
                  </Button>
                </div>
              </div> {/* This was the missing closing div for the content section */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BlogDetailModal
