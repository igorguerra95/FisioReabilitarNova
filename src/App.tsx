import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { ClinicalApproach } from './components/ClinicalApproach';
import { AboutClinic } from './components/AboutClinic';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSpecialty, setModalSpecialty] = useState<string>('Tratamento Avançado de Coluna & Hérnia');
  const [selectedSpecialtyForSection, setSelectedSpecialtyForSection] = useState<string>('Tratamento Avançado de Coluna & Hérnia');

  const handleOpenContactModal = (specialtyTitle?: string) => {
    if (specialtyTitle) {
      setModalSpecialty(specialtyTitle);
    }
    setIsModalOpen(true);
  };

  const handleSelectSpecialtyForContact = (specialtyTitle: string) => {
    setSelectedSpecialtyForSection(specialtyTitle);
    setModalSpecialty(specialtyTitle);
    
    // Smooth scroll down to appointment section
    const el = document.getElementById('contato');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-orange-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContactModal={() => handleOpenContactModal()} />

      <main className="flex-1">
        {/* 1. Início (Hero) */}
        <Hero onOpenContactModal={() => handleOpenContactModal()} />

        {/* 2. Especialidades (RPG, Pilates, Reabilitação, Coluna) */}
        <Specialties onSelectSpecialtyForContact={handleSelectSpecialtyForContact} />

        {/* 3. Método Clínico em 4 Etapas */}
        <ClinicalApproach onOpenContactModal={() => handleOpenContactModal()} />

        {/* 4. Sobre a Clínica & Corpo Clínico */}
        <AboutClinic onOpenContactModal={() => handleOpenContactModal()} />

        {/* 5. Depoimentos de Recuperação Real */}
        <Testimonials onOpenContactModal={() => handleOpenContactModal()} />

        {/* 6. Contato & Agendamento Online Interativo */}
        <AppointmentSection initialSpecialty={selectedSpecialtyForSection} />

        {/* 7. Dúvidas Frequentes (FAQ) */}
        <FaqSection onOpenContactModal={() => handleOpenContactModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenContactModal={() => handleOpenContactModal()} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton onOpenContactModal={() => handleOpenContactModal()} />

      {/* Quick Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSpecialty={modalSpecialty}
      />
    </div>
  );
}
