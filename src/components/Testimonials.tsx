import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/clinicalData';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight, Clock, Award } from 'lucide-react';

interface TestimonialsProps {
  onOpenContactModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenContactModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Resultados Clínicos Comprovados</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Histórias reais de recuperação e retorno à vida ativa.
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Casos documentados em prontuário de pacientes que superaram dores crônicas incapacitantes, evitaram procedimentos cirúrgicos e recuperaram a liberdade de movimentos.
          </p>
        </div>

        {/* Featured Testimonial Hero Slider & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Focused Testimonial Card */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 relative flex flex-col justify-between shadow-2xl">
            <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 w-14 h-14 sm:w-20 sm:h-20 text-orange-600/15 pointer-events-none" />
            
            <div>
              {/* Stars & Condition Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                  <span className="text-xs font-semibold text-orange-400 ml-2">
                    5.0 / 5.0 Excelente
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs text-orange-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  <span>{TESTIMONIALS[activeIndex].recoveryTime}</span>
                </div>
              </div>

              {/* Diagnosis Box */}
              <div className="mb-6 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Quadro Clínico Tratado
                </span>
                <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                  {TESTIMONIALS[activeIndex].condition}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-normal text-white leading-relaxed tracking-tight italic">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>
            </div>

            {/* Author info & Navigation Controls */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS[activeIndex].avatarUrl}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-orange-500/50"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-slate-400 px-2 font-mono">
                  {activeIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Case List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {TESTIMONIALS.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  activeIndex === idx
                    ? 'bg-slate-900 border-orange-500/50 shadow-lg shadow-orange-600/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-sm text-white">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-orange-400 font-medium">
                    {item.recoveryTime}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.condition}
                </p>
              </button>
            ))}
          </div>

        </div>

        {/* Audit Callout Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              Todos os relatos acima correspondem a pacientes reais com autorização de imagem e laudos arquivados conforme determinação ética do COFFITO.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContactModal}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs sm:text-sm shadow-md transition-all"
          >
            Entrar em contato
          </button>
        </div>

      </div>
    </section>
  );
};
