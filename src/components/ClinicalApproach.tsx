import React from 'react';
import { motion } from 'motion/react';
import { CLINICAL_PILLARS } from '../data/clinicalData';
import { CheckCircle2, ShieldAlert, Cpu, Sparkles, ArrowRight, Award } from 'lucide-react';

interface ClinicalApproachProps {
  onOpenContactModal: () => void;
}

export const ClinicalApproach: React.FC<ClinicalApproachProps> = ({ onOpenContactModal }) => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Metodologia Baseada em Evidências</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              O caminho clínico para a extinção definitiva da dor.
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Eliminamos o modelo de choquinho passageiro. Construímos um itinerário cinesiológico que identifica a origem mecânica do distúrbio e reeduca seu corpo de forma duradoura.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINICAL_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-7 flex flex-col justify-between glass-card-hover group"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-orange-500/40 group-hover:text-orange-500 transition-colors">
                    {pillar.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-slate-400 group-hover:text-orange-400 transition-colors">
                <span>Fase controlada</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Difference Callout Box */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
                <Award className="w-4 h-4" />
                <span>Padrão Institucional Rigoroso</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Por que não atendemos convênios de massa?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As operadoras remuneram clínicas para colocar 4 a 6 pacientes por hora com um único estagiário aplicando gelo e eletrodos. Na Fisio Reabilitar, o fisioterapeuta com pós-graduação permanece 100% do tempo ao seu lado, monitorando cada milímetro do movimento. Essa é a única forma ética e eficaz de curar a dor.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-xl shadow-orange-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-500 text-center">
                Fornecemos relatórios detalhados para reembolso
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
