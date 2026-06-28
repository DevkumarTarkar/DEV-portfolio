
const portfolioData = {
  hero: {
  welcome: '✦ WELCOME TO MY UNIVERSE',
  firstName: 'Dev Kumar',
  lastName: 'Tarkar',

  roles: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
  ],

  description:
    'Passionate about building intelligent AI applications, scalable web solutions, and data-driven products using Machine Learning, Deep Learning, Computer Vision, Cloud, and Full Stack Development.',

  resumeUrl:
    'https://drive.google.com/file/d/1XRdeJ53xZgsILmFEwtrnXyVt8bh00MOh/view?usp=sharing',

  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/DevKumarTarkar',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dev-kumar-tarkar-55189731a/',
    },
    {
      label: 'LeetCode',
      url: 'https://leetcode.com/u/Dev_2025/',
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/dev_rajput_9634',
    },
  ],
},

  about: {
  intro:
    'I am a B.Tech Computer Science Engineering (Artificial Intelligence & Machine Learning) student at GLA University, Mathura. I enjoy designing intelligent software that combines Artificial Intelligence, Machine Learning, Data Science, Computer Vision, and Full Stack Development.',

  study:
    'My focus is on building scalable AI solutions that solve real-world problems. I continuously explore cloud technologies, backend development, business intelligence, and modern software engineering while working on practical projects.',

  quote:
    'Transforming ideas into intelligent products through Artificial Intelligence, data, and modern software engineering.',

  tags: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Python',
    'React',
    'FastAPI',
    'Flask',
    'Azure',
    'Oracle Cloud',
    'Power BI',
    'SQL',
  ],

  timeline: [
    {
      year: '2024',
      event:
        'Started B.Tech Computer Science Engineering (AI & ML) at GLA University, Mathura.',
    },
    {
      year: '2024',
      event:
        'Earned Microsoft Certified: Azure Fundamentals (AZ-900).',
    },
    {
      year: '2025',
      event:
        'Earned Microsoft Azure AI Fundamentals, Azure Data Fundamentals, Oracle AI Foundations, Oracle Generative AI, and Oracle Data Platform certifications.',
    },
    {
      year: '2025',
      event:
        'Built interactive Power BI dashboards for business intelligence and analytics.',
    },
    {
      year: '2026',
      event:
        'Developed MaskTIF – Deep Learning based Thermal Face Recognition System.',
    },
    {
      year: '2026',
      event:
        'Built EcoStay AI – AI Powered Sustainable Tourism Platform.',
    },
    {
      year: '2026',
      event:
        'Developed Telecom Customer Churn Prediction & Customer Segmentation System.',
    },
  ],

  stats: [
    {
      value: '6+',
      label: 'Projects Completed',
    },
    {
      value: '9+',
      label: 'Professional Certifications',
    },
    {
      value: '6+',
      label: 'Leadership Roles',
    },
    {
      value: 'B.Tech',
      label: 'AI & ML',
    },
  ],
},

  skills: {
  groups: [
    {
      category: 'Languages',
      icon: '💻',
      skills: [
        'Java',
        'Python',
        'C',
        'SQL',
        'JavaScript',
        'HTML',
        'CSS',
      ],
    },

    {
      category: 'Frameworks & Libraries',
      icon: '🤖',
      skills: [
        'Flask',
        'FastAPI',
        'PyTorch',
        'Scikit-learn',
        'NumPy',
        'Pandas',
        'Matplotlib',
      ],
    },

    {
      category: 'Tools',
      icon: '🛠️',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Docker',
        'Power BI',
        'MySQL',
        'Jupyter Notebook',
        'Arduino IDE',
      ],
    },

    {
      category: 'Platforms',
      icon: '☁️',
      skills: [
        'Windows',
        'Linux',
        'Azure',
        'Oracle Cloud',
        'Google Colab',
        'ThingWorx',
      ],
    },

    {
      category: 'Core Concepts',
      icon: '📚',
      skills: [
        'Data Structures',
        'Algorithms',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
        'CI/CD',
      ],
    },

    {
      category: 'Data Skills',
      icon: '📊',
      skills: [
        'Data Analysis',
        'Data Cleaning',
        'Data Visualization',
        'EDA',
        'Dashboard Development',
      ],
    },
  ],

  certifications: [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      url: 'https://drive.google.com/file/d/1NJfUy8Tfp_IIEemdks9N2ozIoa-2DsfS/view',
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      url: 'https://learn.microsoft.com/en-us/users/devkumartarkar-7807/credentials/1699855a06f475c7',
    },
    {
      title: 'Microsoft Certified: Azure Data Fundamentals',
      url: 'https://learn.microsoft.com/en-us/users/devkumartarkar-2361/credentials/5f854c2d41bfa44e',
    },
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      url: '',
    },
    {
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      url: '',
    },
    {
      title: 'Oracle OCI AI Foundations Associate',
      url: '',
    },
    {
      title: 'Oracle Generative AI Professional',
      url: '',
    },
    {
      title: 'Oracle Data Platform',
      url: '',
    },
    {
      title: 'NPTEL Software Engineering',
      url: 'https://drive.google.com/file/d/1A1FLXnr9yz65-dt8PVRAfmWBid4Y4eT4/view',
    },
  ],
},


  projects: [
  {
    id: '01',
    name: 'MaskTIF',
    image: import.meta.env.BASE_URL + 'projects/masktif.jpg',

    tagline: 'Masked Thermal Infrared Face Recognition',

    description:
      'Designed and developed an AI-powered thermal infrared face recognition system capable of recognizing masked individuals using Deep Learning, Computer Vision, and PyTorch. The project focuses on improving recognition accuracy in low-visibility environments.',

    tech: [
      'Python',
      'PyTorch',
      'OpenCV',
      'FastAPI',
      'Deep Learning',
    ],

    type: 'AI / Computer Vision',

    year: '2026',

    status: 'Completed',

    github:
      'https://github.com/DevKumarTarkar/MaskTIF',

    live: null,
  },

  {
    id: '02',
    name: 'Telecom Customer Churn Prediction',

    image: import.meta.env.BASE_URL + 'projects/telecom.jpg',

    tagline: 'Customer Retention using Machine Learning',

    description:
      'Built an end-to-end Machine Learning solution to predict customer churn using customer behavior analysis, feature engineering, model training, and interactive Power BI dashboards for business insights.',

    tech: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'SQL',
      'Power BI',
    ],

    type: 'Machine Learning',

    year: '2026',

    status: 'Completed',

    github:
      'https://github.com/DevKumarTarkar/Telecom-Churn-Prediction',

    live: null,
  },

  {
    id: '03',

    name: 'EcoStay AI',

    image: import.meta.env.BASE_URL + 'projects/ecostay.jpg',

    tagline: 'AI Powered Sustainable Tourism Platform',

    description:
      'Developed an AI-powered sustainable tourism platform that recommends eco-friendly accommodations using intelligent recommendation techniques, occupancy forecasting, and environmental impact analysis.',

    tech: [
      'Python',
      'Flask',
      'Machine Learning',
      'React',
      'Azure',
    ],

    type: 'Artificial Intelligence',

    year: '2026',

    status: 'Completed',

    github:
      'https://github.com/DevKumarTarkar/EcoStay-AI',

    live: null,
  },

  {
    id: '04',

    name: 'Power BI Sales Dashboard',

    image: import.meta.env.BASE_URL + 'projects/powerbi.jpg',

    tagline: 'Interactive Business Intelligence Dashboard',

    description:
      'Designed interactive Power BI dashboards to visualize sales performance, customer behavior, KPIs, and business trends for data-driven decision-making.',

    tech: [
      'Power BI',
      'SQL',
      'Excel',
      'DAX',
      'Data Visualization',
    ],

    type: 'Business Intelligence',

    year: '2025',

    status: 'Completed',

    github:
      'https://github.com/DevKumarTarkar/PowerBI-Sales-Dashboard',

    live: null,
  },
],
 
  achievements: [
  // Leadership
  {
    title: 'Deputy Head Finance',
    detail:
      'Leading financial planning, budgeting, sponsorship coordination, and event management for Literario Club, GLA University.',
    year: '2026 – Present',
    category: 'Leadership',
  },
  {
    title: 'Coordinator – TechNavya',
    detail:
      'Coordinated technical events and managed participants during the university tech fest.',
    year: '2025',
    category: 'Leadership',
  },
  {
    title: 'Coordinator – Deviathon National Hackathon',
    detail:
      'Managed event operations, logistics, and participant coordination.',
    year: '2025',
    category: 'Leadership',
  },
  {
    title: 'Coordinator – Smart India Hackathon (Internal)',
    detail:
      'Supported planning and execution of the internal SIH round.',
    year: '2025',
    category: 'Leadership',
  },
  {
    title: 'Coordinator – Srijan',
    detail:
      'Successfully coordinated university events.',
    year: '2024',
    category: 'Leadership',
  },
  {
    title: 'Coordinator – Srijan',
    detail:
      'Led registrations, logistics, and participant engagement.',
    year: '2026',
    category: 'Leadership',
  },

  // Certifications
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    detail: 'Microsoft Certification',
    year: '2024',
    category: 'Certification',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    detail: 'Microsoft Certification',
    year: '2025',
    category: 'Certification',
  },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    detail: 'Microsoft Certification',
    year: '2025',
    category: 'Certification',
  },
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    detail: 'Microsoft Certification',
    year: '2026',
    category: 'Certification',
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    detail: 'Microsoft Certification',
    year: '2026',
    category: 'Certification',
  },
  {
    title: 'Oracle OCI AI Foundations Associate',
    detail: 'Oracle Certification',
    year: '2025',
    category: 'Certification',
  },
  {
    title: 'Oracle Generative AI Professional',
    detail: 'Oracle Certification',
    year: '2025',
    category: 'Certification',
  },
  {
    title: 'Oracle Data Platform',
    detail: 'Oracle Certification',
    year: '2025',
    category: 'Certification',
  },
  {
    title: 'NPTEL Software Engineering',
    detail: 'NPTEL Certification',
    year: '2025',
    category: 'Certification',
  },

  // Projects
  {
    title: 'MaskTIF',
    detail:
      'AI-powered Thermal Infrared Face Recognition System using Deep Learning.',
    year: '2026',
    category: 'Project',
  },
  {
    title: 'Telecom Customer Churn Prediction',
    detail:
      'Machine Learning solution for customer churn prediction and retention.',
    year: '2026',
    category: 'Project',
  },
  {
    title: 'EcoStay AI',
    detail:
      'AI-powered sustainable tourism recommendation platform.',
    year: '2026',
    category: 'Project',
  },
  {
    title: 'Power BI Sales Dashboard',
    detail:
      'Interactive business intelligence dashboard with KPIs and analytics.',
    year: '2025',
    category: 'Project',
  },
],
  
  contact: {
    email: 'devkumartarkar3@gmail.com',
    phone: '+91 827331XXXX',
    socials: [
      { label: 'LinkedIn', handle: '@dev-kumar-tarkar-55189731a', url: 'https://www.linkedin.com/in/dev-kumar-tarkar-55189731a/' },
      { label: 'GitHub', handle: '@DevKumarTarkar', url: 'https://github.com/DevKumarTarkar' },
      { label: 'LeetCode', handle: '@Dev_2025', url: 'https://leetcode.com/u/Dev_2025/' },
      { label: 'Instagram', handle: '@dev_rajput_9634', url: 'https://instagram.com/dev_rajput_9634' },
    ],
  },
};

export default portfolioData;
