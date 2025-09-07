import React from 'react'
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react'
import { Button } from '../ui/button'

const LocationSection = () => {
  const offices = [
    {
      city: 'São Paulo',
      address: 'Av. Paulista, 1000 - Bela Vista',
      phone: '+55 (11) 99999-0001',
      email: 'saopaulo@explore.com.br',
      hours: 'Seg-Sex: 9h-18h | Sáb: 9h-14h',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop'
    },
    {
      city: 'Rio de Janeiro',
      address: 'Copacabana, 500 - Zona Sul',
      phone: '+55 (21) 99999-0002',
      email: 'rio@explore.com.br',
      hours: 'Seg-Sex: 9h-18h | Sáb: 9h-14h',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop'
    },
    {
      city: 'Belo Horizonte',
      address: 'Savassi, 300 - Centro-Sul',
      phone: '+55 (31) 99999-0003',
      email: 'bh@explore.com.br',
      hours: 'Seg-Sex: 9h-18h | Sáb: 9h-14h',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    }
  ]

  console.log('📍 Renderizando Location Section - Total de escritórios:', offices.length)

  return (
    <section id="locations" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ONDE <span className="text-gradient">ESTAMOS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Escritórios estrategicamente localizados para atender você melhor. 
            Visite-nos ou entre em contato para planejar sua próxima aventura.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-travel-cyan/20 rounded-full mb-6">
              <MapPin className="h-8 w-8 text-travel-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mapa Interativo</h3>
            <p className="text-gray-400 mb-6">
              Explore nossos escritórios no mapa e encontre o mais próximo de você
            </p>
            
            {/* Placeholder for interactive map */}
            <div className="bg-gray-800 rounded-xl h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-travel-cyan mx-auto mb-4" />
                <p className="text-gray-400">Mapa Interativo</p>
                <p className="text-sm text-gray-500">São Paulo • Rio de Janeiro • Belo Horizonte</p>
              </div>
            </div>

            <Button className="btn-primary">
              Ver Mapa Completo
            </Button>
          </div>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-48">
                <img 
                  src={office.image} 
                  alt={office.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-travel-cyan text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {office.city}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-travel-cyan">{office.city}</h3>
                
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-travel-cyan mt-1 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-travel-cyan flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-travel-cyan flex-shrink-0" />
                    <span>{office.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-travel-cyan mt-1 flex-shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 btn-secondary">
                  Como Chegar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-travel-cyan/10 to-blue-600/10 rounded-2xl p-12 animate-fade-in">
          <Users className="h-12 w-12 text-travel-cyan mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Pronto Para Sua Aventura?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Visite um de nossos escritórios ou agende uma consulta online. 
            Nossa equipe está pronta para criar a viagem dos seus sonhos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Agendar Consulta
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection