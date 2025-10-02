import React from 'react'
import { Button } from '../ui/button'
import { Users, Award, Globe, Heart, MapPin, Camera } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import useCounter from '../hooks/useCounter'

const AboutSection = () => {
  const stats = [
    { icon: Globe, label: 'Países Visitados', value: 50, suffix: '+' },
    { icon: Users, label: 'Clientes Felizes', value: 15000, suffix: '+' },
    { icon: Award, label: 'Prêmios Recebidos', value: 12, suffix: '' },
    { icon: Camera, label: 'Fotos Capturadas', value: 100000, suffix: '+' }
  ]

  const team = [
    {
      name: 'Ana Silva',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
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

  const headerRef = useScrollReveal({ delay: 200 })
  const storyRef = useScrollReveal({ delay: 300 })
  const statsRef = useScrollReveal({ delay: 400 })
  const teamRef = useScrollReveal({ delay: 500 })
  const ctaRef = useScrollReveal({ delay: 600 })

  console.log('👥 Renderizando About Section')

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            QUEM <span className="text-gradient">SOMOS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Somos apaixonados por transformar sonhos em realidade através de experiências 
            de viagem autênticas e inesquecíveis.
          </p>
        </div>

        {/* Story */}
        <div ref={storyRef} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
          <div className="animate-fade-in animate-delay-300">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-travel-cyan">Nossa História</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
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
            
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Heart className="h-6 w-6 text-travel-cyan" />
              <span className="text-sm sm:text-base text-travel-cyan font-semibold">
                Mais de 15.000 aventureiros transformados
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in animate-delay-400">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop" 
              alt="Nossa equipe em aventura"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-travel-cyan text-black p-2 sm:p-4 rounded-xl">
              <div className="text-lg sm:text-2xl font-bold">2018</div>
              <div className="text-xs sm:text-sm">Fundação</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex justify-center gap-3 sm:grid sm:grid-cols-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
          {stats.map((stat, index) => {
            const formatValue = (value: number, suffix: string) => {
              if (value >= 1000) {
                return `${Math.floor(value / 1000)}k${suffix}`
              }
              return `${value}${suffix}`
            }

            const counter = useCounter({ 
              end: stat.value, 
              duration: 2500, 
              delay: index * 200,
              suffix: stat.suffix
            })

            return (
              <div 
                key={index}
                ref={counter.elementRef}
                className="text-center animate-fade-in"
                style={{animationDelay: `${0.6 + index * 0.15}s`}}
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-travel-cyan/20 rounded-full mb-2 sm:mb-3 md:mb-4">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-travel-cyan" />
                </div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-travel-cyan mb-1 sm:mb-2">
                  {stat.value >= 1000 ? formatValue(counter.count, stat.suffix) : counter.displayValue}
                </div>
                <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-travel-cyan">Nossa Equipe</h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Conheça os especialistas que tornam suas aventuras possíveis
          </p>
        </div>

        <div ref={teamRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 scroll-reveal">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in card-hover"
              style={{animationDelay: `${0.8 + index * 0.2}s`}}
            >
              <div className="relative inline-block mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-travel-cyan rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-black" />
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-travel-cyan font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
              <p className="text-gray-400 text-xs sm:text-sm px-2">{member.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center scroll-reveal">
          <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-fade-in animate-delay-600 mx-4">
            Conheça Nossa História Completa
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection