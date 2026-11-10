import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST } from '../data/clinicalData';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenContactModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContactModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = selectedCategory === 'todos' 
    ? FAQ_LIST 
    : FAQ_LIST.filter(f => f.category === selectedCategory);

  return (
    <section id="duvidas" className="py-24 md:py-32 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparência e Esclarecimentos</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Perguntas frequentes sobre o tratamento
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Esclareça suas principais dúvidas sobre nosso modelo de atendimento, reembolso de operadoras e metodologia terapêutica.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'todos', label: 'Todas as Dúvidas' },
              { id: 'atendimento', label: 'Atendimento & Avaliação' },
              { id: 'convenios', label: 'Reembolso & Convênios' },
              { id: 'pilates', label: 'Pilates Clínico' },
              { id: 'rpg', label: 'RPG & Coluna' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-orange-500/40 shadow-lg shadow-orange-600/5'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-orange-600 text-white rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                        <div className="pt-3">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-base text-white">
              Possui uma dúvida específica sobre seu diagnóstico?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Nossa equipe de recepção clínica está à disposição para analisar laudos e indicar o protocolo correto.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContactModal}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Entrar em contato</span>
          </button>
        </div>

      </div>
    </section>
  );
};
