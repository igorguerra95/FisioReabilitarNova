import React from 'react';
import { Activity, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Método Clínico', href: '#metodo' },
    { label: 'Corpo Clínico', href: '#sobre' },
    { label: 'Recuperações', href: '#depoimentos' },
    { label: 'Dúvidas Frequentes', href: '#duvidas' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center shadow-md shadow-orange-600/30">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Fisio Reabilitar
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Laboratório clínico de alta precisão especializado em patologias da coluna vertebral, RPG, Pilates Clínico e reabilitação traumato-ortopédica. Atendimento estritamente individualizado (1:1).
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Conselho Regional de Fisioterapia e Terapia Ocupacional</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Navegação Clínica
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Pillars & Responsibilities */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Responsabilidade Técnica
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dr. Leonardo Duarte — CREFITO-3 / 218.490-F<br />
              Dra. Camila Nogueira — CREFITO-3 / 245.812-F
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              As informações contidas neste website têm caráter puramente informativo e educacional sobre saúde cinético-funcional, não substituindo a consulta fisioterapêutica e o diagnóstico cinesiológico individual.
            </p>

            <div>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-200 hover:text-white transition-all text-xs font-medium"
              >
                <span>Solicitar horário de avaliação</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-center sm:text-left text-xs">
            © {new Date().getFullYear()} Fisio Reabilitar — Fisioterapia Especializada e Pilates. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-xs">
              Resolução COFFITO nº 424/2013
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
