import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface WhatsAppButtonProps {
  onOpenContactModal: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de agendar uma consulta de avaliação na Fisio Reabilitar.'
    );
    // WhatsApp web / app intent
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-slate-900 border border-slate-700/90 shadow-2xl p-4 text-left animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-white">
                Recepção Fisio Reabilitar
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-300 leading-relaxed">
            Olá! Está com dores ou precisa de reabilitação? Nossa equipe pode agendar sua avaliação 1:1 hoje mesmo.
          </p>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleStartWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium text-xs shadow-md shadow-green-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Conversar pelo WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenContactModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <span>Preencher formulário completo</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Atendimento via WhatsApp e agendamento"
        title="Falar no WhatsApp"
      >
        {/* Subtle glowing ring pulse */}
        <span className="absolute -inset-1 rounded-full bg-orange-500 opacity-40 blur-sm group-hover:opacity-75 animate-ping pointer-events-none" />
        
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <div className="relative z-10 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
        )}
      </button>

    </div>
  );
};
