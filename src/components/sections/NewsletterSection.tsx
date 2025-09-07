import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Mail, Gift, Zap, Globe } from 'lucide-react'
import { toast } from 'sonner'

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
    
    if (!email || !email.includes('@')) {
      toast.error('Por favor, insira um email válido')
      return
    }

    setIsSubmitting(true)
    console.log('📧 Capturando lead:', email)

    // Simular envio
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Parabéns! Você receberá nossas ofertas exclusivas em breve! 🎉')
      setEmail('')
      console.log('✅ Lead capturado com sucesso:', email)
    } catch (error) {
      toast.error('Ops! Tente novamente em alguns minutos.')
      console.error('❌ Erro na captura de lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  console.log('📬 Renderizando Newsletter Section')

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-r from-travel-cyan/10 to-blue-600/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-travel-cyan/20 rounded-full mb-6">
              <Mail className="h-8 w-8 text-travel-cyan" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não Perca Nenhuma <span className="text-gradient">Aventura</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Receba ofertas exclusivas, novos destinos e dicas de viagem diretamente 
              no seu email. Junte-se a mais de 10.000 aventureiros!
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-travel-cyan/20 rounded-full mb-4">
                  <benefit.icon className="h-6 w-6 text-travel-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fade-in">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Seu melhor email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-travel-cyan"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Começar Agora'}
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-3">
              🔒 Seus dados estão seguros. Sem spam, apenas aventuras incríveis!
            </p>
          </form>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-travel-cyan to-blue-400 rounded-full border-2 border-black"></div>
                ))}
              </div>
              <span>10.000+ assinantes</span>
            </div>
            <div>⭐⭐⭐⭐⭐ 4.9/5 avaliação média</div>
            <div>📧 100% livre de spam</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection