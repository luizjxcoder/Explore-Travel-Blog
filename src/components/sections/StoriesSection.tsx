import React, { useState } from 'react'
import { Quote, Star, MapPin, Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import BlogDetailModal from '../modals/BlogDetailModal'

const StoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0)
  const [selectedBlogPost, setSelectedBlogPost] = useState<typeof blogPosts[0] | null>(null)
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)

  const stories = [
    {
      id: 1,
      name: 'Mariana Santos',
      location: 'São Paulo, Brasil',
      destination: 'Islândia',
      date: 'Março 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      title: 'Uma jornada que mudou minha vida',
      story: 'A viagem para a Islândia superou todas as minhas expectativas. As auroras boreais, as geleiras e a hospitalidade local criaram memórias que levarei para sempre. A equipe da Explore cuidou de cada detalhe.',
      highlights: ['Auroras Boreais Incríveis', 'Guias Especializados', 'Experiência Única']
    },
    {
      id: 2,
      name: 'Roberto Silva',
      location: 'Rio de Janeiro, Brasil',
      destination: 'Patagônia',
      date: 'Janeiro 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
      title: 'Aventura além dos limites',
      story: 'A Patagônia me ensinou sobre resiliência e beleza natural. Cada trilha, cada montanha conquistada foi uma lição de vida. O profissionalismo da equipe tornou tudo ainda mais especial.',
      highlights: ['Trilhas Épicas', 'Segurança Total', 'Amizades para Vida']
    },
    {
      id: 3,
      name: 'Ana Costa',
      location: 'Belo Horizonte, Brasil',
      destination: 'Japão',
      date: 'Outubro 2023',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
      title: 'Imersão cultural transformadora',
      story: 'O Japão me fascinou desde o primeiro dia. A cultura, a gastronomia, a tecnologia... tudo foi cuidadosamente planejado pela Explore. Foi muito mais que uma viagem, foi uma transformação pessoal.',
      highlights: ['Cultura Autêntica', 'Culinária Incrível', 'Organização Perfeita']
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: '10 Destinos Imperdíveis para 2024',
      excerpt: 'Descubra os lugares que estão em alta e planeje sua próxima aventura com nossas dicas exclusivas.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop',
      author: 'Equipe Explore',
      date: '15 Dez 2023',
      readTime: '8 min',
      category: 'Destinos'
    },
    {
      id: 2,
      title: 'Como Fazer as Malas: Guia Completo',
      excerpt: 'Dicas profissionais para otimizar sua bagagem e viajar com praticidade e estilo.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
      author: 'Marina Costa',
      date: '10 Dez 2023',
      readTime: '5 min',
      category: 'Dicas'
    },
    {
      id: 3,
      title: 'Fotografia de Viagem: Técnicas Essenciais',
      excerpt: 'Aprenda a capturar momentos únicos e criar memórias visuais inesquecíveis das suas aventuras.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop',
      author: 'Carlos Mendes',
      date: '5 Dez 2023',
      readTime: '12 min',
      category: 'Fotografia'
    }
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const currentStoryData = stories[currentStory]

  const openBlogModal = (post: typeof blogPosts[0]) => {
    setSelectedBlogPost(post)
    setIsBlogModalOpen(true)
  }

  const closeBlogModal = () => {
    setIsBlogModalOpen(false)
    setSelectedBlogPost(null)
  }

  console.log('📚 Renderizando Stories Section - História atual:', currentStory)

  return (
    <section id="stories" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-gray-400/30 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
            HISTÓRIAS QUE <span className="text-cyan-600">INSPIRAM</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Conheça as experiências transformadoras dos nossos aventureiros e 
            descubra como cada viagem pode mudar uma vida.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[500px] sm:min-h-[600px] lg:min-h-[500px]">
              {/* Story Content */}
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img 
                    src={currentStoryData.image} 
                    alt={currentStoryData.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{currentStoryData.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{currentStoryData.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(currentStoryData.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-cyan-600 font-semibold">{currentStoryData.destination}</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{currentStoryData.date}</span>
                  </div>
                </div>

                <Quote className="h-8 w-8 text-cyan-600 mb-4" />
                
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-cyan-600">
                  {currentStoryData.title}
                </h4>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {currentStoryData.story}
                </p>

                <div className="space-y-2 mb-8">
                  {currentStoryData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-500">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button 
                      onClick={prevStory}
                      className="w-10 h-10 bg-gradient-to-r from-travel-cyan to-blue-400 border border-transparent text-black rounded-full flex items-center justify-center hover:from-cyan-300 hover:to-blue-300 transition-all duration-300"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextStory}
                      className="w-10 h-10 bg-gradient-to-r from-travel-cyan to-blue-400 border border-transparent text-black rounded-full flex items-center justify-center hover:from-cyan-300 hover:to-blue-300 transition-all duration-300"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentStory === index ? 'bg-gradient-to-r from-travel-cyan to-blue-400' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Story Image */}
              <div className="relative h-64 sm:h-80 lg:h-full order-1 lg:order-2">
                <img 
                  src={currentStoryData.coverImage} 
                  alt={currentStoryData.destination}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-cyan-600">Blog & Dicas</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acompanhe nossos artigos exclusivos com dicas, destinos e inspirações para suas próximas aventuras
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 backdrop-blur-sm flex flex-col h-80 sm:h-96"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-500"></div>
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-travel-cyan/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full opacity-30"></div>
                    <span className="relative bg-gradient-to-r from-travel-cyan to-blue-400 text-black px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 z-10">
                  <div className="w-3 h-3 bg-travel-cyan rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-12 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 z-10">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                </div>

                {/* Content Container - positioned at bottom */}
                <div className="relative mt-auto p-6 sm:p-8 z-10">
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-t-3xl border-t border-white/20"></div>
                  
                  {/* Title with enhanced typography */}
                  <h4 className="relative text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-travel-cyan transition-all duration-300 cursor-pointer leading-tight">
                    {post.title}
                  </h4>
                  
                  {/* Excerpt */}
                  <p className="relative text-gray-200 text-sm mb-4 leading-relaxed font-light line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Enhanced Meta Information */}
                  <div className="relative mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-xs">{post.author.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-white/90">Por {post.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/70">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-travel-cyan rounded-full"></div>
                          <span className="text-xs">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-xs">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <Button 
                      variant="outline" 
                      className="relative w-full bg-gradient-to-r from-travel-cyan to-blue-400 text-black font-bold py-2.5 px-6 rounded-2xl border-0 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      onClick={() => openBlogModal(post)}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Ler Mais
                        <div className="w-2 h-2 bg-black/20 rounded-full group-hover:animate-pulse"></div>
                      </span>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 px-4 text-gray-900">Sua História Começa Aqui</h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6 sm:mb-8 px-4">
            Faça parte da nossa comunidade de aventureiros e crie memórias que durarão para sempre.
          </p>
          <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mx-4 font-semibold">
            Comece Sua Aventura
          </Button>
        </div>
      </div>

      {/* Blog Detail Modal */}
      <BlogDetailModal 
        isOpen={isBlogModalOpen}
        onClose={closeBlogModal}
        post={selectedBlogPost}
      />
    </section>
  )
}

export default StoriesSection