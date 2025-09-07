import React from 'react'
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    'Destinos': ['Europa', 'Ásia', 'América', 'África', 'Oceania'],
    'Empresa': ['Sobre Nós', 'Nossa Equipe', 'Parceiros', 'Imprensa', 'Carreiras'],
    'Suporte': ['FAQ', 'Contato', 'Política de Privacidade', 'Termos de Uso', 'Cancelamento']
  }

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ]

  console.log('🦶 Renderizando Footer')

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-gradient mb-4">
              EXPLORE
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Criamos experiências de viagem únicas e inesquecíveis para aventureiros 
              que buscam descobrir o mundo de uma forma autêntica.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-travel-cyan" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-travel-cyan" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-travel-cyan" />
                <span>contato@explore.com.br</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-travel-cyan">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-travel-cyan transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Explore Travel Blog. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-cyan hover:text-black transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer