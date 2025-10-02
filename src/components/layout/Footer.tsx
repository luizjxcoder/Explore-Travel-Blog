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
    <footer className="bg-black pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-gradient mb-3 sm:mb-4">
              EXPLORE
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Criamos experiências de viagem únicas e inesquecíveis para aventureiros 
              que buscam descobrir o mundo de uma forma autêntica.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-travel-cyan" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-travel-cyan" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-travel-cyan" />
                <span>contato@explore.com.br</span>
              </div>
            </div>
          </div>

          {/* Links for Mobile - 3 Columns */}
          <div className="grid grid-cols-3 gap-4 sm:hidden">
            {/* Destinos */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-travel-cyan">
                Destinos
              </h3>
              <ul className="space-y-1">
                {footerLinks['Destinos'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-xs text-gray-400 hover:text-travel-cyan transition-colors duration-300 block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Empresa */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-travel-cyan">
                Empresa
              </h3>
              <ul className="space-y-1">
                {footerLinks['Empresa'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-xs text-gray-400 hover:text-travel-cyan transition-colors duration-300 block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Suporte */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-travel-cyan">
                Suporte
              </h3>
              <ul className="space-y-1">
                {footerLinks['Suporte'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-xs text-gray-400 hover:text-travel-cyan transition-colors duration-300 block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links for Tablet and Desktop */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:col-span-3 gap-6 sm:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-travel-cyan">
                  {category}
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-sm sm:text-base text-gray-400 hover:text-travel-cyan transition-colors duration-300 block py-1"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-travel-cyan hover:text-black transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
            
            {/* Copyright Text */}
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              Desenvolvido por JXCODER - WEB STUDIO © 2024 Explore Travel Blog. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer