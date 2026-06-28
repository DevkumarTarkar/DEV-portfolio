
const portfolioData = {
  hero: {
    welcome: '✦ WELCOME TO MY UNIVERSE',
    firstName: 'Dev Kumar',
    lastName: 'Tarkar',
    roles: [
      'AI & Machine Learning Engineer',
      'Data Science Enthusiast',
      'Full Stack Developer',
    ],
    description:
      'Building intelligent AI applications and modern web solutions using Machine Learning, Computer Vision, Data Science, Cloud, and Full Stack Development.',

    resumeUrl:
      'https://drive.google.com/file/d/1XRdeJ53xZgsILmFEwtrnXyVt8bh00MOh/view?usp=sharing',

    socials: [
      { label: 'GitHub', url: 'https://github.com/DevKumarTarkar' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dev-kumar-tarkar-55189731a/',
      },
      { label: 'LeetCode', url: 'https://leetcode.com/u/Dev_2025/' },
      {
        label: 'Instagram',
        url: 'https://instagram.com/dev_rajput_9634',
      },
    ],
  },

  about: {
    intro:
      'I am a B.Tech Computer Science Engineering (AI & ML) student passionate about building intelligent applications using Artificial Intelligence, Machine Learning, Computer Vision, Data Science, and Full Stack Development.',

    study:
      'Currently pursuing my degree at GLA University, Mathura, I enjoy transforming ideas into real-world AI solutions through modern technologies, cloud platforms, and scalable software engineering practices.',

    quote:
      'Building intelligent solutions that transform data into meaningful experiences and innovative digital products.',

    tags: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Full Stack Development',
      'Python',
      'React.js',
      'FastAPI',
      'Azure AI',
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
          'Earned Microsoft Certified: Azure Fundamentals (AZ-900), building a strong foundation in cloud computing.',
      },
      {
        year: '2025',
        event:
          'Earned Microsoft Azure AI Fundamentals, Azure Data Fundamentals, Oracle AI Foundations, Oracle Generative AI, and Oracle Data Platform certifications.',
      },
      {
        year: '2025',
        event:
          'Built interactive Power BI dashboards for sales performance, customer insights, and data visualization.',
      },
      {
        year: '2026',
        event:
          'Built EcoStay AI, an AI-powered platform promoting sustainable tourism and eco-friendly stays.',
      },
      {
        year: '2026',
        event:
          'Developed MaskTIF, a Deep Learning system for masked thermal infrared face recognition.',
      },
      {
        year: '2026',
        event:
          'Created Telecom Customer Churn Prediction & Customer Segmentation using Machine Learning.',
      },
    ],

    stats: [
      { value: '15+', label: 'Projects Completed' },
      { value: '7+', label: 'Professional Certifications' },
      { value: '3+', label: 'Hackathons & Events' },
      { value: 'B.Tech', label: 'CSE (AI & ML)' },
    ],
  },

  skills: {
    groups: [
      {
        category: 'Languages',
        icon: '{ }',
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
        icon: '∿',
        skills: [
          'Flask',
          'PyTorch',
          'NumPy',
          'Pandas',
          'Matplotlib',
          'Scikit-learn',
        ],
      },
      {
        category: 'Tools',
        icon: '◈',
        skills: [
          'Git',
          'GitHub',
          'MySQL',
          'Power BI',
          'Docker',
          'Jupyter Notebook',
          'VS Code',
          'Arduino IDE',
        ],
      },
      {
        category: 'Platforms',
        icon: '↑',
        skills: ['Windows', 'Linux', 'Google Colab', 'ThingWorx'],
      },
      {
        category: 'Core Concepts',
        icon: '◉',
        skills: [
          'Data Structures',
          'Algorithms',
          'OOP',
          'DBMS',
          'Operating Systems',
          'CI/CD',
        ],
      },
      {
        category: 'Data Skills',
        icon: '⟳',
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
      { title: 'Microsoft Azure Fundamentals', url: '' },
      { title: 'Microsoft Azure AI Fundamentals', url: '' },
      { title: 'Microsoft Azure Data Fundamentals', url: '' },
      { title: 'Oracle OCI AI Foundations Associate', url: '' },
      { title: 'Oracle Generative AI Professional', url: '' },
      { title: 'Oracle Data Platform', url: '' },
      { title: 'NPTEL Software Engineering', url: '' },
    ],
  },


  projects: [
    {
      id: '01',
      name: 'MaskTIF',
      tagline: 'Masked Thermal Infrared Face Recognition',
      description:
        'Developed a robust face recognition pipeline using thermal infrared imaging and mask-aware preprocessing, with a PyTorch model optimized for low-visibility identity verification.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'Computer Vision', 'FastAPI'],
      type: 'AI / CV',
      status: 'RESEARCH',
      github: 'https://github.com/DevKumarTarkar/MaskTIF',
      live: null,
    },
    {
      id: '02',
      name: 'Telecom Customer Churn Prediction',
      tagline: 'Predictive analytics for customer retention',
      description:
        'Built a churn prediction model using customer behavior and service data, with feature engineering, tree-based modeling, and dashboard-ready retention insights.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'Power BI'],
      type: 'Data Science',
      status: 'DEPLOYED',
      github: 'https://github.com/DevKumarTarkar/Telecom-Churn-Prediction',
      live: null,
    },
    {
      id: '03',
      name: 'EcoStay AI',
      tagline: 'Smart sustainability assistant for eco-friendly stays',
      description:
        'Created an AI-powered recommendation engine for sustainable accommodations, combining environmental scoring, occupancy forecasting, and a Flask dashboard for impact tracking.',
      tech: ['Python', 'Flask', 'Machine Learning', 'Azure', 'React'],
      type: 'AI Product',
      status: 'PROTOTYPE',
      github: 'https://github.com/DevKumarTarkar/EcoStay-AI',
      live: null,
    },
    {
      id: '04',
      name: 'Women Safety IoT System',
      tagline: 'IoT-enabled personal safety solution',
      description:
        'Designed a connected safety system with real-time alerts, location tracking, and emergency notification, powering secure incident response workflows.',
      tech: ['IoT', 'Python', 'Azure', 'REST APIs', 'React'],
      type: 'Embedded & Web',
      status: 'PROTOTYPE',
      github: 'https://github.com/DevKumarTarkar/Women-Safety-IoT',
      live: null,
    },
    {
      id: '05',
      name: 'Power BI Sales Dashboard',
      tagline: 'Interactive dashboard for sales performance insights',
      description:
        'Built a Power BI dashboard to visualize sales metrics, customer segments, and trend analysis while automating data refresh for executive decision support.',
      tech: ['Power BI', 'SQL', 'Data Visualization', 'Azure'],
      type: 'BI & Analytics',
      status: 'LIVE',
      github: 'https://github.com/DevKumarTarkar/PowerBI-Sales-Dashboard',
      live: null,
    },
  ],
  creative: [
    {
      title: 'MaskTIF Research',
      subtitle: 'Thermal Infrared Face Recognition',
      platform: 'GitHub',
      year: '2025',
      description:
        'A research prototype handling masked subjects with thermal imagery, combining computer vision and deep learning for secure identity recognition.',
      icon: '◈',
      url: 'https://github.com/DevKumarTarkar/MaskTIF',
      color: 'var(--gold)',
    },
    {
      title: 'Telecom Churn Analysis',
      subtitle: 'Customer Retention Prediction',
      platform: 'GitHub',
      year: '2025',
      description:
        'An analytics pipeline predicting churn risk, delivering actionable insights for customer success and revenue retention.',
      icon: '◎',
      url: 'https://github.com/DevKumarTarkar/Telecom-Churn-Prediction',
      color: 'var(--nebula)',
    },
    {
      title: 'EcoStay AI',
      subtitle: 'Sustainable Accommodation Assistant',
      platform: 'GitHub',
      year: '2025',
      description:
        'AI-powered recommendations for eco-friendly stays with environmental scoring and occupancy forecasting.',
      icon: '◉',
      url: 'https://github.com/DevKumarTarkar/EcoStay-AI',
      color: 'var(--gold)',
    },
    {
      title: 'Women Safety IoT',
      subtitle: 'Connected Personal Safety System',
      platform: 'GitHub',
      year: '2025',
      description:
        'A connected IoT safety device with location alerts and emergency notification workflows for secure response.',
      icon: '✦',
      url: 'https://github.com/DevKumarTarkar/Women-Safety-IoT',
      color: '#B8A9C9',
    },
    {
      title: 'Power BI Sales Dashboard',
      subtitle: 'Interactive Business Insights',
      platform: 'GitHub',
      year: '2026',
      description:
        'A dynamic dashboard visualizing sales performance, customer segmentation, and executive KPIs.',
      icon: '🏆',
      url: 'https://github.com/DevKumarTarkar/PowerBI-Sales-Dashboard',
      color: '#B8A9C9',
    },
    {
      title: 'Microsoft Azure Certifications',
      subtitle: 'Cloud & AI Credentials',
      platform: 'LinkedIn',
      year: '2026',
      description:
        'Validated Azure and AI proficiency through multiple Microsoft and Oracle certifications.',
      icon: '◫',
      url: 'https://www.linkedin.com/in/dev-kumar-tarkar-55189731a/',
      color: 'var(--parchment-dim)',
    },
  ],
  achievements: [
    {
      title: 'B.Tech Computer Science Engineering (AI & ML)',
      detail: 'GLA University, Mathura — AI & Machine Learning specialization',
      year: '2023–27',
      category: 'Education',
    },
    {
      title: 'Microsoft Azure Fundamentals',
      detail: 'AZ-900 certified in cloud fundamentals',
      year: '2025',
      category: 'Certifications',
    },
    {
      title: 'Microsoft Azure AI Fundamentals',
      detail: 'Certified in AI concepts on Azure',
      year: '2025',
      category: 'Certifications',
    },
    {
      title: 'Microsoft Azure Data Fundamentals',
      detail: 'Certified in core data concepts on Azure',
      year: '2025',
      category: 'Certifications',
    },
    {
      title: 'Oracle OCI AI Foundations Associate',
      detail: 'Certified in foundational AI services on Oracle Cloud',
      year: '2026',
      category: 'Certifications',
    },
    {
      title: 'Oracle Generative AI',
      detail: 'Certified in generative AI use cases and best practices',
      year: '2026',
      category: 'Certifications',
    },
    {
      title: 'Oracle Data Platform',
      detail: 'Certified in Oracle Cloud data services and analytics',
      year: '2026',
      category: 'Certifications',
    },
    {
      title: 'NPTEL Software Engineering',
      detail: 'Completed a professional software engineering certification course',
      year: '2026',
      category: 'Certifications',
    },
    {
      title: 'MaskTIF — Thermal Face Recognition',
      detail: 'Developed a masked infrared face recognition prototype for low-visibility environments',
      year: '2025',
      category: 'Projects',
    },
    {
      title: 'Telecom Customer Churn Prediction',
      detail: 'Built a predictive analytics solution for customer retention',
      year: '2025',
      category: 'Projects',
    },
  ],
  communities: [
    {
      name: 'AI & ML Projects',
      role: '5+ deployed prototypes',
      members: '5+',
      desc: 'MaskTIF, Telecom Churn Prediction, EcoStay AI, Women Safety IoT, and Power BI dashboards.',
      year: '2026',
    },
    {
      name: 'Cloud Credentials',
      role: 'Azure & Oracle certified',
      members: '7',
      desc: 'Microsoft and Oracle certifications in Azure, AI, Data, OCI AI, Generative AI, and Data Platform.',
      year: '2026',
    },
    {
      name: 'Full Stack Delivery',
      role: 'End-to-end systems',
      members: 'Production-ready',
      desc: 'Built APIs, dashboards, ML models, and deployment pipelines with React, Flask, FastAPI, Docker, and Azure.',
      year: '2026',
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
