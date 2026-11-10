import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, CalendarCheck, Phone, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: (specialtyTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Método Clínico', href: '#metodo' },
    { label: 'Corpo Clínico', href: '#sobre' },
    { label: 'Recuperações', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform duration-300">
                <Activity className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg md:text-xl text-white tracking-tight leading-none">
                    Fisio Reabilitar
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded">
                    Clínica 1:1
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 tracking-wide block mt-0.5">
                  Fisioterapia Especializada & Pilates
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors duration-200 tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenContactModal()}
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-4 h-4 text-orange-200" />
                <span>Entrar em contato</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display font-bold text-base text-white">
                    Fisio Reabilitar
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 py-2 px-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Atendimento 100% individualizado (1:1)</span>
              </div>

              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="py-3 px-3 rounded-lg text-slate-200 hover:text-orange-400 hover:bg-slate-800/60 font-medium text-sm transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm shadow-lg shadow-orange-600/30 transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>
              <p className="text-[11px] text-center text-slate-500">
                Triagem rápida sem compromisso
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
