export interface Programme {
  id: string;
  title: string;
  category: 'primary' | 'community';
  icon: string;
  description: string;
  details?: string[];
}

export interface LocationInfo {
  title: string;
  country: string;
  role: string;
  addressLines: string[];
  phones?: { display: string; href: string }[];
  email?: string;
  note?: string;
}

export const suhogContent = {
  meta: {
    name: 'Support Home of God Project (SuhoG Project)',
    shortName: 'SuhoG',
    tagline: 'Reaching every heart with love',
    foundedYear: 2001,
    foundingCountry: 'Nigeria',
    canonicalEmail: 'info@suhogproject.org',
    primaryPhone: '+234 805 921 2551',
    altPhones: ['+234 802 239 5734', '+234 1 870 9913'],
  },

  film: {
    discreetCaption: 'Illustrative film of a residential care setting.',
    scenes: [
      {
        id: 'arrival',
        label: 'Arrival',
        timeWindow: '0 – 2.5s',
        progressRange: [0.0, 0.18],
        heading: 'Growing older should still feel like living.',
        lead: 'Care, companionship and connection for older people and the families who love them.',
        primaryCta: { label: 'Enquire about care for a parent', href: '#contact' },
        secondaryCta: { label: 'Explore SuhoG’s work', href: '#work' },
      },
      {
        id: 'entering',
        label: 'Entering',
        timeWindow: '2.5 – 8.5s',
        progressRange: [0.18, 0.35],
        heading: null,
        lead: null,
      },
      {
        id: 'livingroom',
        label: 'Living Room',
        timeWindow: '8.5 – 12s',
        progressRange: [0.35, 0.52],
        heading: 'A life is more than its needs.',
        lead: 'Familiar routines, quiet conversation and seeing every person as a whole human being.',
      },
      {
        id: 'approaching',
        label: 'Approaching the Call',
        timeWindow: '12 – 14.5s',
        progressRange: [0.52, 0.62],
        heading: null,
        lead: null,
      },
      {
        id: 'familycall',
        label: 'Family Call',
        timeWindow: '14.5 – 18.5s',
        progressRange: [0.62, 0.78],
        heading: 'Close, even from far away.',
        lead: 'Reassurance for families living abroad, bridging the distance with warmth, respect and attentive everyday presence.',
      },
      {
        id: 'moving',
        label: 'Veranda Walkway',
        timeWindow: '18.5 – 26.5s',
        progressRange: [0.78, 0.88],
        heading: null,
        lead: null,
      },
      {
        id: 'veranda',
        label: 'Veranda',
        timeWindow: '26.5 – 30.2s',
        progressRange: [0.88, 1.0],
        heading: 'Room for every new day.',
        lead: 'Unrushed afternoons, tea with good company and the peaceful dignity of home.',
        primaryCta: { label: 'Speak with SuhoG', href: '#contact' },
      },
    ],
  },

  about: {
    eyebrow: 'About SuhoG',
    title: 'A longstanding commitment, shaped for today’s families.',
    paragraphs: [
      'Support Home of God Project began in Nigeria in 2001 with a direct mission: preserving the dignity, health and emotional security of older people and vulnerable households.',
      'Over the past two decades, Nigerian family life has seen profound demographic shifts. Adult children, doctors, engineers and professionals frequently live in the UK, North America or Europe, while parents remain in Nigeria. While love remains constant, physical distance creates real worry around daily routines, health appointments and loneliness.',
      'SuhoG brings practical, compassionate care coordination to this reality. We work in close partnership with families to provide trustworthy local presence, regular companionship and reliable assistance—so older relatives remain secure in familiar surroundings.',
    ],
    values: [
      { num: '01', title: 'Dignity Before Dependency', desc: 'Encouraging independence, personal preferences and self-respect in every interaction.' },
      { num: '02', title: 'Family Partnership', desc: 'Keeping relatives abroad informed and aligned with transparent, consent-based updates.' },
      { num: '03', title: 'Consent & Privacy', desc: 'Respecting the elder’s personal choices, household rhythm and private boundaries.' },
      { num: '04', title: 'Practical Compassion', desc: 'Reliable help with groceries, appointments and routines without making anyone feel like a burden.' },
    ],
  },

  programmes: {
    primary: {
      id: 'dignified-ageing',
      title: 'Dignified Ageing & Family Support',
      tagline: 'Personalised assistance organised around the individual, not a rigid institution.',
      services: [
        {
          num: '01',
          name: 'Care Coordination & Liaison',
          summary: 'A dedicated, culturally attuned local coordinator who acts as the family’s trusted point of contact on the ground in Nigeria.',
        },
        {
          num: '02',
          name: 'Companionship & Wellbeing Visits',
          summary: 'Regular home visits for conversation, shared tea, reading, walks and noticing changes in health or household safety early.',
        },
        {
          num: '03',
          name: 'Healthcare Escort & Support',
          summary: 'Organising transport and reliable accompaniment to medical appointments, dental check-ups and diagnostic visits.',
        },
        {
          num: '04',
          name: 'Medication & Routine Reminders',
          summary: 'Gentle, non-clinical routine reminders and prescription pick-up coordination to support prescribed daily care.',
        },
        {
          num: '05',
          name: 'Household & Daily Living Help',
          summary: 'Practical coordination for wholesome meal arrangements, pantry groceries, errands and safe home maintenance.',
        },
        {
          num: '06',
          name: 'Transparent Family Updates',
          summary: 'Structured, calm communication with sons and daughters abroad, so you know exactly how your parent is thriving.',
        },
      ],
      disclaimer: 'Note: Medical diagnosis and clinical treatments remain under the care of licensed healthcare professionals. SuhoG provides non-clinical coordination, companionship and practical daily living support.',
    },
    community: [
      {
        id: 'rural-education',
        title: 'Rural Education',
        desc: 'Learning opportunities and educational supplies tailored to children and youth in underserved rural communities.',
      },
      {
        id: 'community-healthcare',
        title: 'Community Healthcare',
        desc: 'Mobile health outreach and basic care access for communities where clinic distance creates dangerous barriers.',
      },
      {
        id: 'poverty-relief',
        title: 'Poverty Relief',
        desc: 'Nutritional food distribution, clothing and emergency shelter assistance for elderly individuals and vulnerable households.',
      },
      {
        id: 'womens-livelihoods',
        title: 'Women’s Literacy & Livelihoods',
        desc: 'Functional literacy, cooperative vocational skills and income-generating training that foster lasting independence.',
      },
      {
        id: 'microfinance',
        title: 'Microfinance for Farmers',
        desc: 'Small-scale agricultural lending and seed funding to help smallholder farmers invest and strengthen household food security.',
      },
      {
        id: 'clean-water',
        title: 'Safe Drinking Water',
        desc: 'Community-maintained boreholes and clean water points reducing waterborne diseases in neglected rural areas.',
      },
      {
        id: 'ageing-research',
        title: 'Research on Ageing',
        desc: 'Social gerontology research and policy advocacy addressing the evolving needs of older adults across Africa.',
      },
    ],
  },

  locations: [
    {
      country: 'Nigeria',
      role: 'Founding Base & Main Office',
      title: 'Umuahia, Abia State',
      addressLines: ['No. 1 SuhoG Ville, Amizi', 'Ikwuano LGA, Umuahia', 'Abia State, Nigeria'],
      phones: [
        { display: '+234 805 921 2551', href: 'tel:+2348059212551' },
        { display: '+234 802 239 5734', href: 'tel:+2348022395734' },
      ],
    },
    {
      country: 'Nigeria',
      role: 'Liaison & Regional Support',
      title: 'Lagos State',
      addressLines: ['House 3D, Unilag Estate', 'Kayetoro, Ibeju-Lekki', 'Lagos, Nigeria'],
      phones: [
        { display: '+234 1 870 9913', href: 'tel:+23418709913' },
      ],
    },
    {
      country: 'Scotland',
      role: 'International Outreach',
      title: 'Glasgow',
      addressLines: ['339 Chirnside Road', 'Glasgow G52 2LF', 'Lanarkshire, Scotland'],
    },
    {
      country: 'Kenya',
      role: 'East Africa Community Care',
      title: 'Ugunja / Kisumu',
      addressLines: ['Miserere Home', 'P.O. Box 120, Ugunja', 'via Kisumu, Kenya'],
    },
  ],

  getInvolved: [
    {
      id: 'donate',
      title: 'Give Financial Support',
      desc: 'Help sustain daily meals, clean water initiatives, health outreach and elder welfare programmes.',
      action: 'Ask How to Donate',
      type: 'financial',
    },
    {
      id: 'essentials',
      title: 'Provide Essential Supplies',
      desc: 'Contribute mobility aids, nutritious food items, clothing, or approved medical diagnostic supplies.',
      action: 'Arrange a Delivery',
      type: 'in-kind',
    },
    {
      id: 'volunteer',
      title: 'Volunteer or Partner',
      desc: 'Share professional clinical, legal, educational or logistics expertise to strengthen community impact.',
      action: 'Get in Touch',
      type: 'partnership',
    },
  ],
};

export const agricultureContent = {
  meta: {
    initiativeName: 'SuhoG Agriculture Initiative',
    parentRelationship: 'An initiative of SuhoG Project',
    tagline: 'Growing Food. Growing Futures.',
  },
  hero: {
    eyebrow: 'SUHOG AGRICULTURE INITIATIVE',
    title: 'GROWING FOOD. GROWING FUTURES.',
    lead: 'True sustenance starts from the ground up. SuhoG Project is expanding its community mission into agriculture — creating opportunities to strengthen food security, support livelihoods, empower families, and build more sustainable communities.',
    primaryCta: { label: 'Partner With Us', href: '#partner' },
    secondaryCta: { label: 'Explore Our Mission', href: '#from-the-ground-up' },
  },
  intro: {
    label: 'FROM THE GROUND UP',
    heading: 'Agriculture with purpose.',
    paragraphs: [
      'The SuhoG Agriculture Initiative is our commitment to helping communities build stronger, more sustainable futures through food production and economic opportunity.',
      'As communities face rising food costs and changing economic realities, agriculture is more than farming. It is food on the table, meaningful work, greater independence, and dignity.',
      'SuhoG is working to bring together communities, government institutions, agricultural organizations, and development partners to help turn that opportunity into lasting impact.',
    ],
  },
  progressCards: [
    {
      num: '01',
      tag: 'LOCAL GOVERNMENT',
      title: 'Building from the community outward.',
      description: 'SuhoG has begun engaging local government representatives to explore support and collaboration for community-based agricultural projects.',
    },
    {
      num: '02',
      tag: 'AGRICULTURAL PARTNERS',
      title: 'Connecting farmers to opportunity.',
      description: 'We are pursuing partnerships with agricultural agencies and organizations that can provide resources, technical knowledge, training, agricultural inputs, and support for smallholder farmers.',
    },
    {
      num: '03',
      tag: 'MINISTRY ENGAGEMENT',
      title: 'Preparing to scale.',
      description: 'Our next phase includes engagement with the Ministry of Agriculture to explore opportunities for broader collaboration and alignment with applicable food-security and agricultural-development programs.',
    },
    {
      num: '04',
      tag: 'PARTNERSHIP OUTREACH',
      title: 'Turning intention into action.',
      description: 'Letters of intent and partnership proposals have begun going out to prospective stakeholders.',
    },
  ],
  ecosystem: {
    heading: 'ONE MISSION. DISTINCT PATHWAYS.',
    subheading: "SuhoG's work brings together community support, purpose-driven enterprise, and sustainable development — different approaches working toward stronger communities.",
    entities: [
      {
        id: 'project',
        name: 'SUHOG PROJECT',
        subtitle: 'COMMUNITY IMPACT',
        description: 'Our community-focused work supports charitable initiatives, care, outreach, and programs designed to improve everyday lives. Agriculture expands that mission by creating another pathway toward long-term community resilience.',
        cta: { label: 'Explore SuhoG Project', href: '/#about' },
        tag: 'Non-profit & Care',
      },
      {
        id: 'naturals',
        name: 'SUHOG NATURALS',
        subtitle: 'COMMERCE WITH PURPOSE',
        description: 'SuhoG Naturals creates practical everyday products with a broader social purpose. Products such as VIZZ Beauty Bar and FIZZ Laundry Bar connect commerce with SuhoG’s wider community mission.',
        cta: { label: 'Explore SuhoG Naturals', href: '#soap-to-soil' },
        tag: 'Social Enterprise',
      },
      {
        id: 'agriculture',
        name: 'SUHOG AGRICULTURE',
        subtitle: 'SUSTAINABLE LIVELIHOODS',
        description: 'SuhoG Agriculture focuses on food security, farming partnerships, community participation, agricultural opportunity, and sustainable livelihoods. It is designed as a focused initiative within the broader SuhoG mission — distinct from care services while connected through shared community impact.',
        cta: { label: 'Partner With Agriculture', href: '#partner' },
        tag: 'Impact Initiative',
      },
    ],
  },
  soapToSoil: {
    heading: 'FROM SOAP TO SOIL.',
    subheading: 'A continuous cycle linking purpose-driven enterprise to community harvest.',
    points: [
      "You're helping us plant seeds.",
      "You're helping communities grow.",
      "You're helping create sustainable futures.",
    ],
    copy: 'When you support SuhoG Naturals, you’re supporting something bigger than a product. Every purchase can become part of a cycle in which enterprise helps create community impact — and community opportunity helps create greater independence.',
    disclaimer: 'Sales from SuhoG Naturals products help support and contribute to the wider community initiatives of SuhoG Project.',
  },
  impactCycle: [
    { step: '01', title: 'Purpose-Driven Commerce', desc: 'Sustainable everyday products create ongoing funding streams for grassroots work.' },
    { step: '02', title: 'Community Investment', desc: 'Resources are channeled directly into community training, inputs, and outreach.' },
    { step: '03', title: 'Agricultural Opportunity', desc: 'Smallholder farmers and local youth gain access to knowledge, tools, and land development.' },
    { step: '04', title: 'Food + Livelihoods', desc: 'Increased harvest yields strengthen household nutrition and generate local income.' },
    { step: '05', title: 'Stronger Communities', desc: 'Self-sufficiency and dignity take root, creating lasting resilience for the next generation.' },
  ],
  partnership: {
    eyebrow: 'THE SEED IS ONLY THE BEGINNING',
    headline: "LET'S GROW TOGETHER.",
    copy: 'We welcome agricultural organizations, NGOs, government institutions, development partners, volunteers, community leaders, and supporters who share our belief in sustainable communities. Whether through expertise, agricultural inputs, training, land development, equipment, funding, or strategic collaboration, there is an opportunity to grow something meaningful together.',
    options: [
      'Government / Public Sector',
      'Agricultural Agency',
      'NGO / Development Organization',
      'Training / Technical Assistance',
      'Agricultural Inputs',
      'Equipment',
      'Funding / Investment',
      'Land / Community Partnership',
      'Volunteer',
      'Other',
    ],
  },
  closing: {
    headline: ['CLEAN HANDS.', 'CARING HEARTS.', 'GROWING FARMS.'],
    subline: 'SuhoG Project',
    tagline: 'Growing stronger communities from the ground up.',
  },
  homepageTeaser: {
    badge: 'Impact Expansion',
    title: 'A NEW SEED OF IMPACT',
    copy: 'SuhoG is expanding its community mission through agriculture — connecting food security, sustainable livelihoods, partnerships, and community opportunity.',
    cta: 'Discover SuhoG Agriculture',
    href: '/agriculture',
  },
};
