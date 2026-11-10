import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SPECIALTIES } from '../data/clinicalData';
import { 
  CalendarCheck, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';

interface AppointmentSectionProps {
  initialSpecialty?: string;
  onSuccessSubmit?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ 
  initialSpecialty = 'Tratamento Avançado de Coluna & Hérnia',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState(initialSpecialty);
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'noite'>('tarde');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update specialty if prop changes
  React.useEffect(() => {
    if (initialSpecialty) {
      setSpecialty(initialSpecialty);
    }
  }, [initialSpecialty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage('Por favor, preencha pelo menos seu nome e número de telefone/WhatsApp.');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant secure clinical intake processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${fullName || 'um paciente interessado'}. Gostaria de agendar uma consulta de avaliação para ${specialty} (preferência no período da ${preferredPeriod}). Queixa principal: ${symptoms || 'Gostaria de uma avaliação completa'}.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-slate-900/80 relative border-t border-slate-800">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Agendamento & Triagem Clínica</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Inicie sua jornada para uma vida sem dor.
              </h2>

              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Preencha o formulário para solicitar seu horário prioritário de avaliação. Nossa equipe entrará em contato prontamente para confirmar o horário ideal e orientar sobre as roupas e exames prévios.
              </p>

              {/* Clinic commitments */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-white">
                      Retorno em menos de 2 horas úteis
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Sua solicitação é triada diretamente pela recepção clínica para alocação do especialista mais adequado ao seu caso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-white">
                      Sigilo Médico e Proteção de Dados
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Todas as informações fornecidas são confidenciais e regidas pelas normas éticas do Conselho Federal de Fisioterapia (COFFITO).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick help notice */}
            <div className="mt-10 pt-6 border-t border-slate-800/80">
              <p className="text-xs text-slate-400">
                Prefere atendimento imediato sem preencher o formulário? Clique no botão do WhatsApp no canto inferior direito para conversar diretamente com a recepção.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                    Solicitação Recebida com Sucesso!
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Agradecemos seu contato, <strong className="text-white">{fullName}</strong>. Nossa equipe entrará em contato pelo telefone informado para confirmar os horários disponíveis para sua avaliação de <strong>{specialty}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left mb-8 text-xs text-slate-300 space-y-1.5">
                    <p><span className="text-slate-500">Especialidade:</span> {specialty}</p>
                    <p><span className="text-slate-500">Turno de preferência:</span> {preferredPeriod === 'manha' ? 'Manhã' : preferredPeriod === 'tarde' ? 'Tarde' : 'Noite'}</p>
                    <p><span className="text-slate-500">Contato:</span> {phone}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar confirmação via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setEmail('');
                        setSymptoms('');
                      }}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm transition-colors"
                    >
                      Enviar nova solicitação
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      Formulário de Solicitação de Consulta
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Preencha os campos abaixo. Leva menos de 1 minuto.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-900/30 border border-red-700/50 flex items-center gap-2.5 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Specialty Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Especialidade Desejada *
                    </label>
                    <div className="relative">
                      <select
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                      >
                        {SPECIALTIES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white py-2">
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ex: Carlos Eduardo Silveira"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        WhatsApp / Celular *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(11) 98765-4321"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Preferred Shift */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        E-mail para Confirmação
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu.email@exemplo.com.br"
                          className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Turno de Preferência
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['manha', 'tarde', 'noite'] as const).map((period) => (
                          <button
                            key={period}
                            type="button"
                            onClick={() => setPreferredPeriod(period)}
                            className={`py-2.5 rounded-xl text-xs font-medium capitalize border transition-all ${
                              preferredPeriod === period
                                ? 'bg-orange-600 text-white border-orange-500 shadow-md shadow-orange-600/30'
                                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                            }`}
                          >
                            {period === 'manha' ? 'Manhã' : period === 'tarde' ? 'Tarde' : 'Noite'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Symptom / Complaint Description */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Descreva brevemente sua queixa ou diagnóstico
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={3}
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        placeholder="Ex: Sinto dor na lombar irradiando para a perna direita há 3 semanas..."
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Main CTA */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-70 text-white font-semibold text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processando sua solicitação...</span>
                        </>
                      ) : (
                        <>
                          <CalendarCheck className="w-5 h-5" />
                          <span>Entrar em contato</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500">
                    Ao enviar, você concorda em ser contatado exclusivamente para fins de agendamento clínico.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
