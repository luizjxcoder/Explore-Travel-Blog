import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { X, Gift, Star, Users } from 'lucide-react'
import { toast } from 'sonner'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast.error('Por favor, preencha todos os campos')
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Por favor, insira um email válido')
      return
    }

    setIsSubmitting(true)
    console.log('🎯 Capturando lead qualificado:', formData)

    try {
      // Envio via FormSubmit
      const formElement = document.createElement('form')
      formElement.action = 'https://formsubmit.co/jxcoder.dev@gmail.com'
      formElement.method = 'POST'
      formElement.style.display = 'none'

      // Campos obrigatórios do FormSubmit
      const subjectInput = document.createElement('input')
      subjectInput.type = 'hidden'
      subjectInput.name = '_subject'
      subjectInput.value = `Lead Qualificado - Tour Discovery - ${formData.name}`
      formElement.appendChild(subjectInput)

      const captchaInput = document.createElement('input')
      captchaInput.type = 'hidden'
      captchaInput.name = '_captcha'
      captchaInput.value = 'false'
      formElement.appendChild(captchaInput)

      const nextInput = document.createElement('input')
      nextInput.type = 'hidden'
      nextInput.name = '_next'
      nextInput.value = window.location.href
      formElement.appendChild(nextInput)

      // Dados do formulário
      const nameInput = document.createElement('input')
      nameInput.type = 'hidden'
      nameInput.name = 'Nome'
      nameInput.value = formData.name
      formElement.appendChild(nameInput)

      const emailInput = document.createElement('input')
      emailInput.type = 'hidden'
      emailInput.name = 'E-mail'
      emailInput.value = formData.email
      formElement.appendChild(emailInput)

      const whatsappInput = document.createElement('input')
      whatsappInput.type = 'hidden'
      whatsappInput.name = 'WhatsApp'
      whatsappInput.value = formData.whatsapp
      formElement.appendChild(whatsappInput)

      const typeInput = document.createElement('input')
      typeInput.type = 'hidden'
      typeInput.name = 'Tipo'
      typeInput.value = 'Lead Qualificado - Interesse em Tours'
      formElement.appendChild(typeInput)

      // Submissão
      document.body.appendChild(formElement)
      formElement.submit()
      document.body.removeChild(formElement)
      
      toast.success('🎉 Parabéns! Seu desconto foi garantido! Em breve entraremos em contato.')
      console.log('✅ Lead qualificado enviado:', formData)
      
      // Reset form
      setFormData({ name: '', email: '', whatsapp: '' })
      onClose()
    } catch (error) {
      toast.error('Ops! Tente novamente em alguns minutos.')
      console.error('❌ Erro na captura de lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  console.log('🎯 Renderizando Lead Capture Modal - Aberto:', isOpen)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" hideCloseButton>
        <DialogHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Gift className="h-6 w-6 text-travel-cyan" />
              <span className="text-sm bg-travel-cyan text-black px-2 py-1 rounded font-semibold">
                OFERTA LIMITADA
              </span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-left">
            Ganhe <span className="text-gradient">30% OFF</span> no Seu Primeiro Tour!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Social Proof */}
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 - 2.847 avaliações</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              <span>Mais de 10.000 aventureiros já garantiram seu desconto</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="WhatsApp (11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn-primary text-lg py-3"
            >
              {isSubmitting ? 'Processando...' : '🎁 GARANTIR MEU DESCONTO'}
            </Button>
          </form>

          {/* Trust Elements */}
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-400">
              🔒 Seus dados estão 100% seguros conosco
            </p>
            <p className="text-xs text-travel-cyan font-semibold">
              ⏰ Oferta válida por tempo limitado - Apenas hoje!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LeadCaptureModal