export interface Specialty {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  symptoms: string[];
  benefits: string[];
  protocol: string;
  targetAudience: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  condition: string;
  recoveryTime: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface Practitioner {
  name: string;
  crefito: string;
  title: string;
  degrees: string[];
  bio: string;
  imageUrl: string;
  specialization: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'atendimento' | 'pilates' | 'convenios' | 'rpg';
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  specialty: string;
  preferredPeriod: 'manha' | 'tarde' | 'noite';
  symptomDescription: string;
}
