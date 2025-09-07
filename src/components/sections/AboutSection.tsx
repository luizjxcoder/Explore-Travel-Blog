import React from 'react'
import { Button } from '../ui/button'
import { Users, Award, Globe, Heart, MapPin, Camera } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    { icon: Globe, label: 'Países Visitados', value: '50+' },
    { icon: Users, label: 'Clientes Felizes', value: '15k+' },
    { icon: Award, label: 'Prêmios Recebidos', value: '12' },
    { icon: Camera, label: 'Fotos Capturadas', value: '100k+' }
  ]

  const team = [
    {
      name: 'Ana Silva',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ee?w=300&h=300&fit=crop&crop=face',
      description: 'Viajante há 15 anos, especialista em destinos únicos'
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Operações',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Expert em aventuras e segurança em viagens'
    },
    {
      name: 'Marina Costa',
      role: 'Guia Especializada',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Fotógrafa profissional e conhecedora de culturas locais'
    }
  ]

  console.log('👥 Renderizando About Section')

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            QUEM <span className="text-gradient">SOMOS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos apaixonados por transformar sonhos em realidade através de experiências 
            de viagem autênticas e inesquecíveis.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-travel-cyan">Nossa História</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Fundada em 2018 por aventureiros apaixonados, a Explore nasceu do desejo 
                de compartilhar as maravilhas do mundo de forma responsável e autêntica.
              </p>
              <p>
                Começamos com apenas 3 destinos e hoje operamos em mais de 50 países, 
                sempre mantendo nosso compromisso com experiências únicas e sustentáveis.
              </p>
              <p>
                Nossa missão é conectar pessoas a culturas, natureza e aventuras que 
                transformam perspectivas e criam memórias para toda a vida.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <Heart className="h-6 w-6 text-travel-cyan" />
              <span className="text-travel-cyan font-semibold">
                Mais de 15.000 aventureiros transformados
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop" 
              alt="Nossa equipe em aventura"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-travel-cyan text-black p-4 rounded-xl">
              <div className="text-2xl font-bold">2018</div>
              <div className="text-sm">Fundação</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-travel-cyan/20 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-travel-cyan" />
              </div>
              <div className="text-3xl font-bold text-travel-cyan mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-travel-cyan">Nossa Equipe</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça os especialistas que tornam suas aventuras possíveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in card-hover"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative inline-block mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-travel-cyan rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-black" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-travel-cyan font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button className="btn-primary text-lg px-8 py-4">
            Conheça Nossa História Completa
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection