import React from 'react';
import { motion } from 'motion/react';
import { PRACTITIONERS } from '../data/clinicalData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, ArrowRight, Building2, Stethoscope } from 'lucide-react';

interface AboutClinicProps {
  onOpenContactModal: () => void;
}

export const AboutClinic: React.FC<AboutClinicProps> = ({ onOpenContactModal }) => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formação Acadêmica & Excelência Técnica</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Corpo clínico de elite com titulações de referência nacional.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Seu corpo é avaliado e tratado por especialistas dedicados à docência, pesquisa cinesiológica e prática clínica intensiva, com mais de uma década de casuística resolutiva.
          </p>
        </div>

        {/* Practitioners Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PRACTITIONERS.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800/80">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-orange-500/40 shrink-0 bg-slate-800">
                    <img
                      src={doc.imageUrl}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase font-semibold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                        {doc.crefito}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1.5">
                      {doc.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {doc.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {doc.bio}
                </p>

                {/* Academic Degrees */}
                <div className="mt-6 pt-5 border-t border-slate-800/70">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    Titulações e Certificações Oficiais:
                  </h4>
                  <ul className="space-y-2">
                    {doc.degrees.map((deg, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                        <span>{deg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-1">
                  Área de Concentração
                </span>
                <span className="text-xs font-medium text-orange-300">
                  {doc.specialization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinic Infrastructure Features */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  Ambiente Clínico Privativo
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Salas com isolamento acústico e climatização médica, garantindo conforto e privacidade absoluta durante seus exercícios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  Equipamentos Originais Calibrados
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Aparelhos de Pilates da linha clássica com regulagem milimétrica de molas alemãs e dinamômetros para medição de evolução de carga.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  Protocolo de Biossegurança Hospitalar
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Higienização minuciosa dos estofados e empunhaduras antes de cada sessão, além de filtragem contínua de ar.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Conselho Regional de Fisioterapia e Terapia Ocupacional da 3ª Região (CREFITO-3)
            </div>
            <button
              type="button"
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-orange-600/25 transition-all"
            >
              <span>Entrar em contato com os especialistas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
