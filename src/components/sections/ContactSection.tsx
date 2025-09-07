import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha os campos obrigatórios')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Por favor, insira um email válido')
      return
    }

    setIsSubmitting(true)
    console.log('📧 Enviando formulário de contato:', formData)

    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      console.log('✅ Formulário enviado:', formData)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      })
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
      console.error('❌ Erro no envio:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  console.log('📞 Renderizando Contact Section')

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            FALE <span className="text-gradient">CONOSCO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para transformar seus sonhos em realidade. Entre em contato 
            e planeje sua próxima aventura com nossa equipe especializada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-travel-cyan">Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <Input
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
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input
                      type="tel"
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
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem *</label>
                  <Textarea
                    placeholder="Conte-nos sobre sua viagem dos sonhos..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-32"
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
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-3"
                >
                  {isSubmitting ? (
                    'Enviando...'
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
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-6 card-hover"
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
              <div className="bg-gray-900 rounded-xl p-6">
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

              {/* CTA */}
              <div className="bg-gradient-to-r from-travel-cyan/10 to-blue-600/10 rounded-xl p-6 text-center">
                <CheckCircle className="h-8 w-8 text-travel-cyan mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Resposta Garantida</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Respondemos todas as mensagens em até 2 horas durante o horário comercial
                </p>
                <Button variant="outline" className="btn-secondary">
                  Chat ao Vivo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 animate-fade-in">
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-travel-cyan">Nossos Escritórios</h3>
            <p className="text-gray-400 mb-8">
              Visite-nos pessoalmente em uma de nossas unidades
            </p>
            
            {/* Placeholder for map */}
            <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-travel-cyan mx-auto mb-4" />
                <p className="text-gray-400">Mapa Interativo dos Escritórios</p>
                <p className="text-sm text-gray-500">São Paulo • Rio de Janeiro • Belo Horizonte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection