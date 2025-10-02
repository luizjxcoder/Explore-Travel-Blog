import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Mail, Gift, Zap, Globe } from 'lucide-react'
import { toast } from 'sonner'
import useScrollReveal from '../hooks/useScrollReveal'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const benefits = [
    {
      icon: Gift,
      title: 'Ofertas Exclusivas',
      description: 'Até 40% de desconto em tours selecionados'
    },
    {
      icon: Zap,
      title: 'Primeiro a Saber',
      description: 'Novos destinos e roteiros em primeira mão'
    },
    {
      icon: Globe,
      title: 'Dicas de Viagem',
      description: 'Guias exclusivos e segredos locais'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast.error('Por favor, insira um email válido')
      return
    }

    setIsSubmitting(true)
    console.log('📧 Enviando email para newsletter via FormSubmit:', email)

    try {
      // Criar FormData para envio
      const submitData = new FormData()
      submitData.append('email', email)
      submitData.append('type', 'newsletter')
      submitData.append('_captcha', 'false')
      submitData.append('_template', 'table')
      submitData.append('_subject', 'Nova inscrição na Newsletter - Explore!')
      
      // Enviar para FormSubmit
      const response = await fetch('https://formsubmit.co/jxcoder.dev@gmail.com', {
        method: 'POST',
        body: submitData
      })

      console.log('📨 Resposta FormSubmit Newsletter:', response.status, response.statusText)

      if (response.ok) {
        // Sucesso
        toast.success('Parabéns! Você receberá nossas ofertas exclusivas em breve! 🎉')
        setEmail('')
        console.log('✅ Email enviado com sucesso para newsletter:', email)
      } else {
        throw new Error(`Erro HTTP: ${response.status}`)
      }
    } catch (error) {
      console.error('❌ Erro ao enviar email newsletter:', error)
      toast.error('Ops! Tente novamente em alguns minutos.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const headerRef = useScrollReveal({ delay: 200 })
  const benefitsRef = useScrollReveal({ delay: 300 })
  const formRef = useScrollReveal({ delay: 400 })
  const socialRef = useScrollReveal({ delay: 500 })

  console.log('📬 Renderizando Newsletter Section')

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-travel-cyan/10 via-blue-600/10 to-purple-600/10 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div ref={headerRef} className="mb-8 sm:mb-12 scroll-reveal">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-travel-cyan/20 rounded-full mb-4 sm:mb-6">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-travel-cyan" />
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Não Perca Nenhuma <span className="text-gradient">Aventura</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 px-4">
              Receba ofertas exclusivas, novos destinos e dicas de viagem diretamente 
              no seu email. Junte-se a mais de 10.000 aventureiros!
            </p>
          </div>

          {/* Benefits */}
          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 scroll-reveal">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{animationDelay: `${0.4 + index * 0.15}s`}}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-travel-cyan/20 rounded-full mb-3 sm:mb-4">
                  <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-travel-cyan" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto scroll-reveal">
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in animate-delay-600">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 h-10 sm:h-12"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Começar Agora'}
              </Button>
            </div>
            
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-gray-400 px-4">
                🔒 Seus dados estão seguros. Sem spam, apenas aventuras incríveis!
              </p>
            </div>
          </form>

          {/* Social Proof */}
          <div ref={socialRef} className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 scroll-reveal">
            <div className="flex items-center gap-2 animate-fade-in animate-delay-800">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full border-2 border-black"></div>
                ))}
              </div>
              <span>10.000+ assinantes</span>
            </div>
            <div className="animate-fade-in animate-delay-800">⭐⭐⭐⭐⭐ 4.9/5 avaliação média</div>
            <div className="animate-fade-in animate-delay-800">📧 100% livre de spam</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection