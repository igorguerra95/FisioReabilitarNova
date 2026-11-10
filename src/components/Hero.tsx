import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  HeartPulse, 
  Clock, 
  UserCheck 
} from 'lucide-react';
import { CLINIC_STATS } from '../data/clinicalData';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const scrollToSpecialties = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('especialidades');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Background Subtle Mesh and Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-slate-800/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
                Laboratório de Biomecânica Clínica & RPG
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-orange-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> CREFITO Certificado
              </span>
            </motion.div>

            {/* Main Headline (Dramatic Display Font, Clamp 48-84px) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.06] tracking-tight text-white mb-6"
            >
              A ciência da precisão <br className="hidden sm:inline" />
              restaurando sua vida <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                sem dor e em pleno eixo.
              </span>
            </motion.h1>

            {/* Subtitle / Lead text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Tratamento conservador de alta resolutividade para hérnias de disco, desvios posturais e lesões ortopédicas. Atendimento estritamente individualizado (1:1), sem divisão de tempo ou protocolos padronizados.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                type="button"
                onClick={onOpenContactModal}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                type="button"
                onClick={scrollToSpecialties}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 hover:border-slate-600 transition-all duration-300"
              >
                <span>Conhecer especialidades</span>
              </button>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-6 w-full"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Avaliação biomecânica computada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Aparelhos autênticos de Pilates Clínico</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Emissão de recibos para reembolso de convênio</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition with Clinical Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Card Frame with Glow */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-[4/5] sm:aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
                  alt="Sessão clínica de fisioterapia e avaliação postural na Fisio Reabilitar"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Overlay Caption */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-slate-700/60 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-semibold tracking-wider text-orange-400">
                        Protocolo de Coluna Vertebral
                      </p>
                      <p className="text-sm font-medium text-white mt-0.5">
                        Descompressão discal e neurodinâmica guiada
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                      <HeartPulse className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right: 94% Cirurgias Evitadas */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <span className="block text-base font-bold font-display text-white">94.2%</span>
                  <span className="block text-[11px] text-slate-400 leading-tight">Casos sem cirurgia</span>
                </div>
              </div>

              {/* Floating Badge Bottom Left: Sessões 1:1 Exclusivas */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <span className="block text-sm font-bold font-display text-white">Atendimento 1:1</span>
                  <span className="block text-[11px] text-slate-400 leading-tight">60 minutos exclusivos</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip */}
        <div className="mt-20 lg:mt-24 pt-12 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CLINIC_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-left"
              >
                <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-orange-300">
                    {stat.value}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
