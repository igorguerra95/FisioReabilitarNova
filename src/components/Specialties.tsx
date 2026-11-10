import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SPECIALTIES 
} from '../data/clinicalData';
import { Specialty } from '../types';
import { 
  Check, 
  ArrowRight, 
  Info, 
  Sparkles, 
  Activity, 
  X, 
  CalendarCheck, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

interface SpecialtiesProps {
  onSelectSpecialtyForContact: (specialtyTitle: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialtyForContact }) => {
  const [selectedSpecialtyModal, setSelectedSpecialtyModal] = useState<Specialty | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todas');

  const filteredSpecialties = activeCategoryFilter === 'todas'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => {
        if (activeCategoryFilter === 'coluna') return s.id.includes('coluna') || s.id.includes('rpg');
        if (activeCategoryFilter === 'movimento') return s.id.includes('pilates') || s.id.includes('esportiva');
        if (activeCategoryFilter === 'reabilitacao') return s.id.includes('ortopedica') || s.id.includes('pos-cirurgica');
        return true;
      });

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-slate-900/60 relative border-t border-b border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Condutas Clínicas de Alta Resolução</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Especialidades focadas na causa primária da sua dor.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Eliminamos paliativos. Nossos protocolos terapêuticos integram cinesiologia aplicada, equipamentos autênticos de Pilates e terapia manual de padrão internacional.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('todas')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategoryFilter === 'todas'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
            }`}
          >
            Todas as Especialidades ({SPECIALTIES.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('coluna')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategoryFilter === 'coluna'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
            }`}
          >
            Coluna & Postura (RPG)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('movimento')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategoryFilter === 'movimento'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
            }`}
          >
            Pilates Clínico & Esporte
          </button>
          <button
            type="button"
            onClick={() => setActiveCategoryFilter('reabilitacao')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategoryFilter === 'reabilitacao'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
            }`}
          >
            Ortopedia & Pós-Operatório
          </button>
        </div>

        {/* Grid of Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpecialties.map((specialty, idx) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-950/80 border border-slate-800/90 overflow-hidden glass-card-hover"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={specialty.imageUrl}
                    alt={specialty.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-orange-400 border border-orange-500/30">
                      {specialty.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-orange-400 transition-colors">
                    {specialty.title}
                  </h3>
                  
                  <p className="mt-2.5 text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {specialty.shortDescription}
                  </p>

                  {/* Indications list */}
                  <div className="mt-5 pt-4 border-t border-slate-800/70">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                      Indicações clínicas frequentes:
                    </p>
                    <ul className="space-y-2">
                      {specialty.symptoms.slice(0, 3).map((symptom, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 mt-auto flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectSpecialtyForContact(specialty.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-orange-600/20 transition-all duration-200"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSpecialtyModal(specialty)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                  title="Ver protocolo clínico completo"
                  aria-label="Ver detalhes da especialidade"
                >
                  <Info className="w-4 h-4 text-orange-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Specialty Detailed Modal */}
      <AnimatePresence>
        {selectedSpecialtyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpecialtyModal(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-44 sm:h-52 w-full shrink-0">
                <img
                  src={selectedSpecialtyModal.imageUrl}
                  alt={selectedSpecialtyModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                <button
                  type="button"
                  onClick={() => setSelectedSpecialtyModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700 transition-colors"
                  aria-label="Fechar janela"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs uppercase font-semibold text-orange-400 px-2.5 py-0.5 rounded bg-slate-950/80 border border-orange-500/30">
                    {selectedSpecialtyModal.badge}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1.5">
                    {selectedSpecialtyModal.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Abordagem & Fundamentação Científica
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {selectedSpecialtyModal.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Formato do Protocolo
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedSpecialtyModal.protocol}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Público Indicado
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedSpecialtyModal.targetAudience}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Benefícios Clínicos Mensuráveis
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSpecialtyModal.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between gap-4">
                <p className="text-xs text-slate-400 hidden sm:block">
                  Atendimento com vagas limitadas para garantia de atenção 1:1.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedSpecialtyModal.title;
                    setSelectedSpecialtyModal(null);
                    onSelectSpecialtyForContact(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-lg shadow-orange-600/30 transition-all"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
