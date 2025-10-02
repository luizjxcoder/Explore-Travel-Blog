import React, { useState, useRef } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import useScrollReveal from '../hooks/useScrollReveal'
import FormResponseModal from '../modals/FormResponseModal'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalState, setModalState] = useState({
    isOpen: false,
    success: false,
    title: '',
    message: ''
  })
  const formRef2 = useRef<HTMLFormElement>(null)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      subinfo: 'Seg-Sex: 9h às 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@explore.com.br',
      subinfo: 'Resposta em até 2h'
    },
    {
      icon: MapPin,
      title: 'Escritório Principal',
      info: 'Av. Paulista, 1000',
      subinfo: 'São Paulo - SP'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+55 (11) 99999-9999',
      subinfo: 'Atendimento 24/7'
    }
  ]

  const subjects = [
    'Informações sobre Tours',
    'Cotação Personalizada',
    'Dúvidas sobre Destinos',
    'Reagendamento/Cancelamento',
    'Reclamações',
    'Outros'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validações básicas
    if (!formData.name || !formData.email || !formData.message) {
      setModalState({
        isOpen: true,
        success: false,
        title: 'Campos Obrigatórios',
        message: 'Por favor, preencha todos os campos obrigatórios: Nome, Email e Mensagem.'
      })
      return
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setModalState({
        isOpen: true,
        success: false,
        title: 'Email Inválido',
        message: 'Por favor, insira um email válido com formato correto (ex: seuemail@dominio.com).'
      })
      return
    }

    setIsSubmitting(true)
    console.log('📧 Enviando formulário via FormSubmit:', formData)

    try {
      // Criar FormData para envio
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('subject', formData.subject)
      submitData.append('message', formData.message)
      submitData.append('preferredContact', formData.preferredContact)
      submitData.append('_captcha', 'false')
      submitData.append('_template', 'table')
      submitData.append('_subject', 'Nova mensagem do site Explore!')
      
      // Enviar para FormSubmit
      const response = await fetch('https://formsubmit.co/jxcoder.dev@gmail.com', {
        method: 'POST',
        body: submitData
      })

      console.log('📨 Resposta FormSubmit:', response.status, response.statusText)

      if (response.ok) {
        // Sucesso
        setModalState({
          isOpen: true,
          success: true,
          title: 'Mensagem Enviada com Sucesso!',
          message: 'Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em até 2 horas durante o horário comercial.'
        })
        
        // Reset form apenas em caso de sucesso
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email'
        })
        
        console.log('✅ Email enviado com sucesso')
      } else {
        throw new Error(`Erro HTTP: ${response.status}`)
      }
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error)
      
      setModalState({
        isOpen: true,
        success: false,
        title: 'Erro no Envio',
        message: 'Houve um problema ao enviar sua mensagem. Verifique sua conexão e tente novamente, ou entre em contato através dos nossos outros canais.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleModalClose = () => {
    setModalState({ ...modalState, isOpen: false })
  }

  const headerRef = useScrollReveal({ delay: 200 })
  const formRef = useScrollReveal({ delay: 300 })
  const infoRef = useScrollReveal({ delay: 400 })
  const mapRef = useScrollReveal({ delay: 500 })

  console.log('📞 Renderizando Contact Section')

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            FALE <span className="text-gradient">CONOSCO</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Estamos aqui para transformar seus sonhos em realidade. Entre em contato 
            e planeje sua próxima aventura com nossa equipe especializada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="scroll-reveal-left">
            <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 animate-fade-in animate-delay-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-travel-cyan">Envie sua Mensagem</h3>
              
              <form 
                ref={formRef2}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <Input
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto</label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject} className="text-white hover:bg-gray-700">
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="subject" value={formData.subject} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem *</label>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre sua viagem dos sonhos..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-32"
                    rows={10}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Prefere ser contatado por:</label>
                  <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="email" className="text-white hover:bg-gray-700">Email</SelectItem>
                      <SelectItem value="phone" className="text-white hover:bg-gray-700">Telefone</SelectItem>
                      <SelectItem value="whatsapp" className="text-white hover:bg-gray-700">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="preferredContact" value={formData.preferredContact} />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="scroll-reveal-right">
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-6 card-hover animate-fade-in"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-travel-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-travel-cyan" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{contact.title}</h4>
                      <p className="text-travel-cyan font-medium">{contact.info}</p>
                      <p className="text-gray-400 text-sm">{contact.subinfo}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="bg-gray-900 rounded-xl p-6 animate-fade-in animate-delay-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-travel-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-travel-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Horário de Atendimento</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Segunda - Sexta:</span>
                        <span className="text-white">9h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sábado:</span>
                        <span className="text-white">9h às 14h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Domingo:</span>
                        <span className="text-white">Emergências</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">WhatsApp:</span>
                        <span className="text-travel-cyan">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ONDE ESTAMOS Section */}
        <div id="onde-estamos" ref={mapRef} className="mt-20 scroll-reveal">
          {/* Título da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              ONDE <span className="text-gradient">ESTAMOS</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Visite-nos pessoalmente em nossa unidade
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 animate-fade-in animate-delay-600">
            <h3 className="text-2xl font-bold mb-4 text-travel-cyan text-center">Nossos Escritórios</h3>
            <p className="text-gray-400 mb-8 text-center">
              Estamos prontos para atendê-lo em nossa sede
            </p>
            
            {/* Google Maps */}
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123456789!2d-45.555555!3d-23.026667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAwLjAiUyA0NcKwMzMnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1633024800000!5m2!1spt-BR!2sbr&q=Avenida+Monsenhor+João+José+de+Azevedo,Pindamonhangaba,SP,12402-010"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório - Pindamonhangaba/SP"
              ></iframe>
              
              {/* Info overlay */}
              <div className="p-6 bg-gray-800/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-travel-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-travel-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Escritório Principal</h4>
                    <p className="text-gray-300 mb-1">Avenida Monsenhor João José de Azevedo</p>
                    <p className="text-gray-400 text-sm mb-1">Centro - Pindamonhangaba/SP</p>
                    <p className="text-travel-cyan text-sm font-medium">CEP: 12402-010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal de Resposta */}
      <FormResponseModal 
        isOpen={modalState.isOpen}
        onClose={handleModalClose}
        success={modalState.success}
        title={modalState.title}
        message={modalState.message}
      />
    </section>
  )
}

export default ContactSection