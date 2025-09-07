import React, { useState } from 'react'
import { Quote, Star, MapPin, Calendar, ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { Button } from '../ui/button'

const StoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0)

  const stories = [
    {
      id: 1,
      name: 'Mariana Santos',
      location: 'São Paulo, Brasil',
      destination: 'Islândia',
      date: 'Março 2024',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ee?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1502780402662-acc01917921e?w=400&h=250&fit=crop',
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

  console.log('📚 Renderizando Stories Section - História atual:', currentStory)

  return (
    <section id="stories" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            HISTÓRIAS QUE <span className="text-gradient">INSPIRAM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça as experiências transformadoras dos nossos aventureiros e 
            descubra como cada viagem pode mudar uma vida.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-20">
          <div className="bg-gray-900 rounded-2xl overflow-hidden animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Story Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={currentStoryData.image} 
                    alt={currentStoryData.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{currentStoryData.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
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
                  <span className="text-travel-cyan font-semibold">{currentStoryData.destination}</span>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{currentStoryData.date}</span>
                  </div>
                </div>

                <Quote className="h-8 w-8 text-travel-cyan mb-4" />
                
                <h4 className="text-2xl font-bold mb-4 text-travel-cyan">
                  {currentStoryData.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {currentStoryData.story}
                </p>

                <div className="space-y-2 mb-8">
                  {currentStoryData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-travel-cyan rounded-full"></div>
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button 
                      onClick={prevStory}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-cyan hover:text-black transition-all duration-300"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={nextStory}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-cyan hover:text-black transition-all duration-300"
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
                          currentStory === index ? 'bg-travel-cyan' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Story Image */}
              <div className="relative h-96 lg:h-full">
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
            <h3 className="text-3xl font-bold mb-4 text-travel-cyan">Blog & Dicas</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Acompanhe nossos artigos exclusivos com dicas, destinos e inspirações para suas próximas aventuras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-gray-900 rounded-2xl overflow-hidden card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-travel-cyan text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 hover:text-travel-cyan transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Por {post.author}</span>
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full btn-secondary">
                    Ler Mais
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Sua História Começa Aqui</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Faça parte da nossa comunidade de aventureiros e crie memórias que durarão para sempre.
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Comece Sua Aventura
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StoriesSection