import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CalendarCheck, CheckCircle2, User, Phone, Mail, FileText, MessageSquare } from 'lucide-react';
import { SPECIALTIES } from '../data/clinicalData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpecialty?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultSpecialty = 'Tratamento Avançado de Coluna & Hérnia'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState(defaultSpecialty);
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'noite'>('tarde');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSpecialty) {
      setSpecialty(defaultSpecialty);
    }
  }, [defaultSpecialty]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${fullName || 'um paciente'}. Gostaria de solicitar agendamento para ${specialty} (período da ${preferredPeriod}).`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      {/* Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Solicitação Enviada!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Nossa equipe de recepção clínica entrará em contato pelo WhatsApp informado ({phone}) para confirmar seu horário.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium text-xs sm:text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar agora via WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              >
                Concluir e fechar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block mb-1">
                Atendimento Clínico 1:1
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Entrar em contato
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Solicite uma avaliação com nosso corpo clínico especializado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Especialidade
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  {SPECIALTIES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nome e Sobrenome"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Turno de Preferência
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['manha', 'tarde', 'noite'] as const).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setPreferredPeriod(period)}
                      className={`py-2 rounded-lg text-xs font-medium capitalize border transition-all ${
                        preferredPeriod === period
                          ? 'bg-orange-600 text-white border-orange-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {period === 'manha' ? 'Manhã' : period === 'tarde' ? 'Tarde' : 'Noite'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Sintoma ou dor principal
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Dor lombar ao sentar..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-lg shadow-orange-600/30 transition-all"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <CalendarCheck className="w-4 h-4" />
                  )}
                  <span>Entrar em contato</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
