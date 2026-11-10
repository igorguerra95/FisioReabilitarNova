import { Specialty, Testimonial, Practitioner, FaqItem } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'fisioterapia-ortopedica',
    title: 'Fisioterapia Traumato-Ortopédica',
    badge: 'Reabilitação Musculoesquelética',
    shortDescription: 'Tratamento intensivo de lesões articulares, musculares, tendinites, bursites e recuperação pós-fratura com foco em alívio da dor e restauração biomecânica.',
    fullDescription: 'A Fisioterapia Traumato-Ortopédica da Fisio Reabilitar combina terapia manual ortopédica avançada, eletroterapia analgésica de última geração, termoterapia e cinesioterapia específica para devolver estabilidade, amplitude de movimento e potência funcional às articulações lesionadas.',
    symptoms: [
      'Dores agudas e crônicas em ombros, quadris e joelhos',
      'Tendinites, epicondilites e bursites recidivantes',
      'Entorses ligamentares e recuperação pós-imobilização',
      'Rigidez articular e perda de força muscular'
    ],
    benefits: [
      'Cessação rápida do quadro inflamatório e doloroso',
      'Restauração completa dos arcos de movimento articular',
      'Fortalecimento muscular sinérgico e propriocepção',
      'Prevenção de recidivas e degenerações articulares'
    ],
    protocol: 'Sessões individuais de 60 minutos com avaliação dinamométrica contínua.',
    targetAudience: 'Indivíduos com queixas articulares, lesões ocupacionais (LER/DORT) e pós-traumatismos.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'rpg-postural',
    title: 'RPG — Reeducação Postural Global',
    badge: 'Correção de Cadeias Musculares',
    shortDescription: 'Método científico e revolucionário para reorganização postural, alívio de desvios axiais da coluna e desativação de retrações musculares crônicas.',
    fullDescription: 'Fundamentado no método original Philippe Souchard, o RPG atua nas cadeias musculares estáticas e dinâmicas através de posturas terapêuticas ativas e respiração diafragmática profunda. Trata a causa primária das deformidades e compensações corporais, e não apenas o sintoma localizado.',
    symptoms: [
      'Escoliose estrutural ou postural em jovens e adultos',
      'Hipercifose torácica (postura curvada) e hiperlordose',
      'Dores crônicas decorrentes de má postura no trabalho',
      'Cefaleias tensionais e retificações cervicais'
    ],
    benefits: [
      'Alinhamento milimétrico do eixo corporal',
      'Descompressão sustentada das estruturas vertebrais',
      'Expansão da capacidade respiratória diafragmática',
      'Consciência proprioceptiva duradoura e postura elegante'
    ],
    protocol: 'Posturas ativas assistidas 1:1 com progressão respiratória personalizada.',
    targetAudience: 'Profissionais em home office, estudantes com desvios posturais e pacientes com queixas crônicas na coluna.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pilates-clinico',
    title: 'Pilates Clínico & Funcional',
    badge: 'Controle Motor & Estabilidade',
    shortDescription: 'Estabilização lombo-pélvica profunda, fortalecimento do core e mobilidade guiados estritamente por fisioterapeutas em estúdio de equipamentos de alta precisão.',
    fullDescription: 'Diferente do pilates recreativo, o Pilates Clínico da Fisio Reabilitar é uma conduta médica e terapêutica. Todo o treinamento é adaptado à biomecânica do paciente nos equipamentos originais (Cadillac, Reformer, Wunda Chair e Barrel), priorizando alinhamento seguro, tônus sem sobrecarga discal e fortalecimento estabilizador.',
    symptoms: [
      'Fraqueza da musculatura profunda estabilizadora (transverso e multífidos)',
      'Instabilidade lombo-pélvica e frouxidão ligamentar',
      'Fadiga muscular precoce ao permanecer sentado ou em pé',
      'Dificuldade de mobilidade funcional no dia a dia'
    ],
    benefits: [
      'Tonificação do core sem compressão discal ou impacto',
      'Melhora expressiva do equilíbrio, coordenação e flexibilidade',
      'Descompressão vertebral contínua durante os movimentos',
      'Condicionamento físico seguro para todas as idades'
    ],
    protocol: 'Atendimento exclusivo ou em duplas homogêneas com acompanhamento fisioterapêutico contínuo.',
    targetAudience: 'Pessoas com histórico de dor lombar, gestantes, idosos e praticantes que buscam longevidade articular.',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'coluna-hernia-discal',
    title: 'Tratamento Avançado de Coluna & Hérnia',
    badge: 'Descompressão & Neurodinâmica',
    shortDescription: 'Abordagem conservadora e não cirúrgica de alta resolutividade para hérnias discais, protusões, ciatalgia e estenose de canal vertebral.',
    fullDescription: 'Desenvolvemos um protocolo clínico baseado em evidências que combina tração computadorizada assistida, mobilização neural de raízes nervosas comprimidas e exercícios específicos de centralização de dor (método de desativação mecânica). Mais de 94% dos pacientes tratados evitam intervenções cirúrgicas invasivas.',
    symptoms: [
      'Dor lombar ou cervical que irradia para pernas ou braços (ciática)',
      'Sensação de queimação, formigamento ou dormência nos membros',
      'Hérnia de disco confirmada por ressonância magnética',
      'Travamentos agudos da coluna ao se curvar ou tossir'
    ],
    benefits: [
      'Descompressão do saco dural e das raízes nervosas',
      'Centralização e regressão progressiva da dor irradiada',
      'Restauração dos reflexos neurais e da sensibilidade motora',
      'Eliminação da dependência de corticoides e bloqueios frequentes'
    ],
    protocol: 'Protocolo escalonado de descompressão, neurodinâmica e estabilização segmentar.',
    targetAudience: 'Pacientes com hérnia discal diagnosticada ou dor ciática severa que buscam evitar a cirurgia.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'reabilitacao-pos-cirurgica',
    title: 'Reabilitação Pós-Operatória',
    badge: 'Protocolos Cirúrgicos Acelerados',
    shortDescription: 'Cuidado especializado após cirurgias ortopédicas de joelho, quadril, ombro e coluna, garantindo cicatrização tecidual sem aderências e retorno funcional.',
    fullDescription: 'O período pós-operatório exige intervenção rigorosa e sem margem de erro. Trabalhamos em alinhamento direto com a equipe cirúrgica do paciente, controlando edema precoce, drenagem hematológica, liberação miofascial perilesional e remobilização articular controlada para evitar artrofibrose e hipotrofia severa.',
    symptoms: [
      'Pós-operatório de ligamento cruzado anterior (LCA) e meniscectomia',
      'Prótese total ou parcial de quadril e joelho (artroplastia)',
      'Reparo de manguito rotador e labrum do ombro',
      'Artrodese vertebral e discectomia recente'
    ],
    benefits: [
      'Aceleração biológica da drenagem do edema pós-cirúrgico',
      'Recuperação da flexão e extensão articular no tempo previsto',
      'Prevenção de aderências cicatriciais limitantes',
      'Segurança absoluta respeitando os tempos biológicos de enxerto'
    ],
    protocol: 'Acompanhamento por fases biológicas de maturação com testes funcionais periódicos.',
    targetAudience: 'Pacientes em alta hospitalar ou preparando-se para procedimento cirúrgico programado.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'fisioterapia-esportiva',
    title: 'Fisioterapia Esportiva & Performance',
    badge: 'Alta Performance & Retorno ao Esporte',
    shortDescription: 'Diagnóstico cinesiológico profundo para atletas amadores e profissionais, correção de desequilíbrios neuromusculares e retorno seguro aos treinos.',
    fullDescription: 'Voltada a praticantes de corrida de rua, ciclismo, crossfit, natação, lutas e esportes coletivos. Identificamos assimetrias de força muscular, déficits de salto e aterrissagem, ajustando a mecânica para potencializar a performance atlética e blindar o organismo contra rupturas teciduais.',
    symptoms: [
      'Canelites, fascite plantar e dores tibiais na corrida',
      'Lesões musculares repetitivas em isquiotibiais e quadríceps',
      'Dores patelofemorais e sobrecargas no tendão de Aquiles',
      'Queda repentina de rendimento atlético por desconforto biomecânico'
    ],
    benefits: [
      'Avaliação cinética completa com correção de gestos esportivos',
      'Aumento da potência neuromuscular e tempo de reação',
      'Protocolos de Return-to-Play rigorosos com métricas objetivas',
      'Recuperação miofascial pós-esforço com pressoterapia e termoterapia'
    ],
    protocol: 'Análise dinâmica do gesto esportivo e periodização terapêutica.',
    targetAudience: 'Corredores, triatletas, praticantes de musculação e esportistas amadores e competitivos.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Fontes',
    role: 'Engenheiro Civil & Corredor Amador (44 anos)',
    condition: 'Hérnia de Disco Lombar L5-S1 com Ciatalgia Aguda',
    recoveryTime: '7 semanas de tratamento intensivo',
    quote: 'Eu mal conseguia descer da cama sem gritar de dor e o cirurgião já havia indicado descompressão cirúrgica. A equipe da Fisio Reabilitar utilizou descompressão manual aliada ao Pilates Clínico e restaurou totalmente meus movimentos. Hoje treino 10 km sem dor alguma.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80'
  },
  {
    id: '2',
    name: 'Patrícia Mendonça Silva',
    role: 'Advogada & Sócia de Escritório (38 anos)',
    condition: 'Escoliose Dorsolombar Severa & Crises de Enxaqueca Tensional',
    recoveryTime: '3 meses com RPG e Reeducação Postural',
    quote: 'As horas diárias diante do computador arruinaram minha coluna e eu vivia à base de analgésicos fortes. O RPG praticado aqui possui um rigor técnico impressionante. Pela primeira vez em dez anos passo semanas inteiras sem uma única crise cervical.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80'
  },
  {
    id: '3',
    name: 'Dr. Roberto Meirelles',
    role: 'Médico Cirurgião Geral (52 anos)',
    condition: 'Tendinopatia Calcária de Ombro & Capsulite Adesiva',
    recoveryTime: '8 semanas de Reabilitação Ortopédica',
    quote: 'Como cirurgião, a precisão das minhas mãos e a estabilidade postural são minha ferramenta de vida. A Fisio Reabilitar aplica exatamente a medicina baseada em evidências que eu esperava: avaliação meticulosa, tecnologia térmica e conduta 100% individualizada.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=240&q=80'
  },
  {
    id: '4',
    name: 'Juliana Vasconcelos',
    role: 'Arquiteta de Interiores (31 anos)',
    condition: 'Pós-Cirúrgico de Ligamento Cruzado Anterior (LCA)',
    recoveryTime: '16 semanas de protocolo de retorno esportivo',
    quote: 'Tive muito medo de perder a estabilidade do joelho após a reconstrução cirúrgica. O cuidado milimétrico em cada fase biológica de cicatrização e o reforço no Pilates me deram confiança total para voltar a esquiar e correr.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80'
  }
];

export const PRACTITIONERS: Practitioner[] = [
  {
    name: 'Dr. Leonardo Duarte',
    crefito: 'CREFITO-3 / 218.490-F',
    title: 'Diretor Clínico & Especialista em Coluna Vertebral',
    degrees: [
      'Graduação em Fisioterapia pela USP com Distinção Acadêmica',
      'Especialista em Fisioterapia Traumato-Ortopédica (COFFITO)',
      'Mestre em Biomecânica e Reabilitação do Movimento Humano',
      'Certificação Internacional em Descompressão e Terapia Manual Ortopédica'
    ],
    bio: 'Mais de 14 anos dedicados exclusivamente ao tratamento conservador de afecções degenerativas da coluna vertebral e dores crônicas incapacitantes, com centenas de casos cirúrgicos revertidos com sucesso.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    specialization: 'Coluna Vertebral, Hérnia Discal e Reabilitação Ortopédica Avançada'
  },
  {
    name: 'Dra. Camila Nogueira',
    crefito: 'CREFITO-3 / 245.812-F',
    title: 'Coordenadora de RPG e Pilates Clínico Avançado',
    degrees: [
      'Graduação em Fisioterapia pela UNIFESP',
      'Formação Oficial em Reeducação Postural Global (Método Philippe Souchard)',
      'Certificação Master em Pilates Clínico e Reabilitador (Polestar Pilates USA)',
      'Pós-Graduada em Fisioterapia Aplicada à Saúde da Mulher e Ergonomia'
    ],
    bio: 'Pioneira na integração sinérgica entre o rigor das cadeias musculares do RPG e o fortalecimento estabilizador do Pilates Clínico, devolvendo simetria postural e vitalidade a pacientes de todas as faixas etárias.',
    imageUrl: 'https://images.unsplash.com/photo-1594824813589-9a7003463a56?auto=format&fit=crop&w=600&q=80',
    specialization: 'RPG Souchard, Pilates Clínico Reabilitador e Reeducação Postural'
  }
];

export const CLINICAL_PILLARS = [
  {
    step: '01',
    title: 'Diagnóstico Biomecânico de Alta Resolução',
    description: 'Não tratamos apenas onde dói. Realizamos testes ortopédicos precisos, fotogrametria postural e avaliação das compensações cinéticas que geram sobrecarga estrutural.',
    badge: 'Precisão Cinesiológica'
  },
  {
    step: '02',
    title: 'Desativação da Dor e Controle Inflamatório',
    description: 'Protocolos imediatos com terapia manual ortopédica, termoterapia, liberação miofascial profunda e eletroterapia analgésica para alívio rápido e sustentado.',
    badge: 'Alívio Imediato'
  },
  {
    step: '03',
    title: 'Reestruturação Postural & Força Estabilizadora',
    description: 'Com RPG e Pilates Clínico em aparelhos autênticos, fortalecemos as cadeias musculares profundas e o core, protegendo discos vertebrais e articulações.',
    badge: 'Reeducação Ativa'
  },
  {
    step: '04',
    title: 'Alta Clínica e Blindagem Funcional',
    description: 'Orientação ergonômica personalizada para rotina de trabalho e programa preventivo de manutenção para garantir que as dores nunca mais retornem.',
    badge: 'Autonomia Duradoura'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'atendimento',
    question: 'Como funciona a primeira consulta de avaliação na clínica?',
    answer: 'A consulta inicial é de dedicação exclusiva (1:1) com duração de 60 a 75 minutos. Nosso fisioterapeuta especialista realiza uma anamnese clínica aprofundada, análise de exames de imagem prévios (ressonância, raio-X, tomografia), testes biomecânicos e testes neurodinâmicos. Ao final da consulta, você já recebe o diagnóstico fisioterapêutico claro e o Plano Terapêutico Singular prescrito com estimativa precisa de sessões.'
  },
  {
    id: 'faq-2',
    category: 'convenios',
    question: 'A clínica aceita planos de saúde ou convênios médicos?',
    answer: 'Nosso modelo de excelência clínica é 100% particular para garantir sessões completas de 60 minutos individuais com especialista, sem divisão de atenção entre múltiplos pacientes. No entanto, fornecemos toda a documentação comprobatória, laudo circunstanciado e recibos fiscais com CRM/CREFITO detalhado para que você solicite o reembolso integral ou parcial junto à sua operadora de saúde (procedimento garantido pela ANS).'
  },
  {
    id: 'faq-3',
    category: 'pilates',
    question: 'Qual a diferença entre o Pilates Clínico e o Pilates de academias?',
    answer: 'No Pilates convencional de academias, as aulas são frequentemente coletivas e os instrutores nem sempre são profissionais de saúde especializados em patologias ativas. Na Fisio Reabilitar, o Pilates Clínico é uma intervenção médica fisioterapêutica: as sessões são ministradas exclusivamente por fisioterapeutas certificados internacionalmente, que adaptam as molas e vetores de força milimetricamente para proteger lesões existentes como hérnias de disco, osteopenia ou condromalácia.'
  },
  {
    id: 'faq-4',
    category: 'rpg',
    question: 'Quantas sessões de RPG ou fisioterapia são necessárias para sentir melhora?',
    answer: 'A maioria dos nossos pacientes relata alívio significativo e descompressão já entre a primeira e a terceira sessão de atendimento. O tratamento completo varia de acordo com o quadro: lesões agudas costumam responder entre 5 e 10 sessões, enquanto correções estruturais de postura (como escolioses e hérnias crônicas) exigem protocolos regulares continuados para consolidação das cadeias musculares.'
  },
  {
    id: 'faq-5',
    category: 'atendimento',
    question: 'Preciso de encaminhamento médico para iniciar o tratamento?',
    answer: 'Não é obrigatório. De acordo com o Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO), o fisioterapeuta é um profissional de primeiro contato, legalmente habilitado a diagnosticar disfunções cinético-funcionais e prescrever o tratamento adequado. Caso você já possua pedido médico ou laudos de exames, traga-os na primeira consulta para enriquecer nossa avaliação.'
  },
  {
    id: 'faq-6',
    category: 'rpg',
    question: 'O tratamento de hérnia de disco pode realmente evitar a cirurgia?',
    answer: 'Sim. As diretrizes científicas mundiais apontam que cerca de 90% a 95% dos casos de hérnia discal apresentam resolução completa e reabsorção biológica através do tratamento conservador bem conduzido. Nosso protocolo combina descompressão neural, mobilização articular e estabilização lombo-pélvica, eliminando a inflamação e a dor irradiada sem necessidade de cortes.'
  }
];

export const CLINIC_STATS = [
  { value: '3.800+', label: 'Pacientes Reabilitados com Sucesso' },
  { value: '98.6%', label: 'Índice de Alívio Significativo da Dor' },
  { value: '14 Anos', label: 'De Rigor Científico e Prática Clínica' },
  { value: '100% 1:1', label: 'Atendimento Individualizado sem Divisão' }
];
