
import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'
import { CheckCircle, XCircle, Mail, MessageSquare } from 'lucide-react'

interface FormResponseModalProps {
  isOpen: boolean
  onClose: () => void
  success: boolean
  title?: string
  message?: string
}

const FormResponseModal = ({ 
  isOpen, 
  onClose, 
  success, 
  title, 
  message 
}: FormResponseModalProps) => {
  if (!isOpen) return null

  const successData = {
    icon: CheckCircle,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-500/20',
    title: title || 'Mensagem Enviada com Sucesso!',
    message: message || 'Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em até 2 horas durante o horário comercial.',
    buttonText: 'Perfeito!'
  }

  const errorData = {
    icon: XCircle,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-500/20',
    title: title || 'Erro no Envio',
    message: message || 'Houve um problema ao enviar sua mensagem. Tente novamente ou entre em contato através dos nossos outros canais.',
    buttonText: 'Tentar Novamente'
  }

  const data = success ? successData : errorData
  const Icon = data.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <div className="bg-gray-900 rounded-2xl max-w-md w-full p-8 text-center animate-fade-in">
          <div className={`w-20 h-20 ${data.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <Icon className={`h-10 w-10 ${data.iconColor}`} />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">
            {data.title}
          </h3>

          <p className="text-gray-300 mb-8 leading-relaxed">
            {data.message}
          </p>

          {success ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-travel-cyan mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-xs text-travel-cyan">2h úteis</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <MessageSquare className="h-6 w-6 text-travel-cyan mx-auto mb-2" />
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-xs text-travel-cyan">24/7</p>
                </div>
              </div>
              
              <Button 
                onClick={onClose}
                className="w-full btn-primary"
              >
                {data.buttonText}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-travel-cyan">Canais Alternativos</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">📧 contato@explore.com.br</p>
                    <p className="text-gray-300">📱 (11) 99999-9999</p>
                    <p className="text-gray-300">💬 WhatsApp 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline"
                  onClick={onClose}
                  className="btn-secondary"
                >
                  Fechar
                </Button>
                <Button 
                  onClick={onClose}
                  className="btn-primary"
                >
                  {data.buttonText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default FormResponseModal
