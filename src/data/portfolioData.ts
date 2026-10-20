export interface ResearchDirection {
  title: string;
  description: string;
}

export interface TechStackBreakdown {
  implemented: string[];
  exploration: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  shortDescription: string;
  fullDescription: string;
  overview?: string;
  problemStatement?: string;
  researchDirections?: ResearchDirection[];
  implementedFeatures?: string[];
  techStackBreakdown?: TechStackBreakdown;
  futureDirections?: string[];
  longTermVision?: string;
  highlights: string[];
  technologies: string[];
  status: string;
  metric?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  title: string;
  description?: string;
  skills: string[];
  isLearningArea?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  status: string;
  category?: string;
  url?: string;
}

export interface PracticalLearningItem {
  title: string;
  platform: string;
  activity: string;
  type: string;
}

export interface CybersecurityLearningItem {
  title: string;
  provider: string;
  status: string;
  note?: string;
  isPendingVerification?: boolean;
}

export interface UpcomingLearningItem {
  title: string;
  provider: string;
  status: string;
  note?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    phoneTel: string;
    github: string;
    linkedin: string;
    avatarUrl: string;
    aboutParagraphs: string[];
  };
  projects: Project[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  practicalLearning: PracticalLearningItem[];
  cybersecurityLearning: CybersecurityLearningItem[];
  upcomingLearning?: UpcomingLearningItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Risadi Vidara",
    role: "Aspiring AI & Cybersecurity Engineer",
    headline: "Cybersecurity-focused aspiring engineer interested in AI, machine learning, security operations, software development, web development, mobile applications, and UI/UX design.",
    location: "Sri Lanka",
    email: "dahamsividara@gmail.com",
    phone: "+94 77 918 9431",
    phoneTel: "+94779189431",
    github: "https://github.com/dahamsividara-dotcom",
    linkedin: "https://www.linkedin.com/in/risadi-vidara-88713a361",
    avatarUrl: "/risadi-hero.jpg",
    aboutParagraphs: [
      "I'm Risadi Vidara, an aspiring AI and Cybersecurity Engineer from Sri Lanka with a background in cybersecurity and a strong interest in building intelligent, secure, and user-focused digital solutions.",
      "My work brings together cybersecurity, artificial intelligence, software development, and problem-solving. Through projects involving security monitoring, threat detection, and machine learning, I explore how technology can be used to build more resilient digital systems.",
      "Beyond cybersecurity, I'm interested in web development, mobile application development, and UI/UX design, with a focus on creating digital experiences that are both functional and intuitive.",
      "I enjoy learning new technologies, experimenting with ideas, and turning complex technical concepts into practical projects. My goal is to continue growing as an engineer while building solutions that combine security, intelligence, and thoughtful design."
    ]
  },
  projects: [
    {
      id: "titan-omega-x",
      title: "TITAN OMEGA-X",
      tagline: "Flagship Security Intelligence & Orchestration Research Initiative",
      category: "Flagship Project · Security Intelligence",
      isFlagship: true,
      shortDescription: "Enterprise environments produce massive, fragmented security telemetry that conceals multi-stage attacks. TITAN OMEGA-X is a flagship research initiative exploring how AI telemetry analysis, attack-path investigation, threat intelligence, and response orchestration unite in a cohesive defense ecosystem.",
      problemStatement: "Modern digital environments generate enormous volumes of security events across endpoints, networks, cloud services, and applications. Connecting related events, identifying potentially coordinated attacks, understanding their impact, and prioritizing defensive actions can be challenging for security teams.",
      fullDescription: "TITAN OMEGA-X is an ambitious cybersecurity research initiative exploring how artificial intelligence, security telemetry analysis, attack-path investigation, threat intelligence, and incident response workflows can be brought together within a unified security intelligence ecosystem. TITAN OMEGA-X aims to explore how AI-assisted analysis, contextual threat intelligence, graph-based security relationships, and security orchestration can help analysts develop a more comprehensive understanding of potential threats.",
      researchDirections: [
        {
          title: "Intelligent Threat Detection",
          description: "Exploring methods to identify suspicious activity and relationships between security events."
        },
        {
          title: "Unified Security Intelligence",
          description: "Connecting security telemetry with relevant threat context for more meaningful analysis."
        },
        {
          title: "Attack-Path Analysis",
          description: "Investigating relationships between assets, vulnerabilities, identities, and potential attack paths."
        },
        {
          title: "Incident Investigation & Response",
          description: "Exploring workflows for investigating alerts, understanding potential impact, and prioritizing defensive actions."
        },
        {
          title: "Security Automation & Orchestration",
          description: "Exploring how detection, investigation, and response workflows could be coordinated through a modular architecture."
        }
      ],
      techStackBreakdown: {
        implemented: [
          "Python",
          "FastAPI",
          "Docker",
          "REST APIs"
        ],
        exploration: [
          "AI/Machine Learning",
          "Security Telemetry Analysis",
          "Threat Intelligence",
          "Graph-Based Security Analysis"
        ]
      },
      longTermVision: "The long-term goal is to evolve TITAN OMEGA-X into a modular cyber defense research ecosystem that brings intelligent threat detection, contextual analysis, attack-path investigation, and security operations workflows together.",
      overview: "TITAN OMEGA-X is an ambitious cybersecurity research initiative exploring how artificial intelligence, security telemetry analysis, attack-path investigation, threat intelligence, and incident response workflows can be brought together within a unified security intelligence ecosystem. TITAN OMEGA-X aims to explore how AI-assisted analysis, contextual threat intelligence, graph-based security relationships, and security orchestration can help analysts develop a more comprehensive understanding of potential threats.",
      implementedFeatures: [
        "Architectural investigation into unified telemetry ingestion and event correlation",
        "Exploring graph-based security models connecting assets, identities, and attack vectors",
        "Researching AI-assisted triage models to reduce analyst cognitive overhead",
        "Modular microservice blueprint engineered for defense research reproducibility"
      ],
      futureDirections: [
        "Evolution into a modular cyber defense research ecosystem uniting detection, contextual intelligence, and graph analytics",
        "Multi-source telemetry ingestion pipeline evaluation across simulated hybrid-cloud environments",
        "Integration of explainable AI-guided investigation playbooks for Tier-2/Tier-3 response escalation"
      ],
      highlights: [
        "Architectural investigation into unified telemetry ingestion and event correlation",
        "Exploring graph-based security models connecting assets, identities, and attack vectors",
        "Researching AI-assisted triage models to reduce analyst cognitive overhead",
        "Modular microservice blueprint engineered for defense research reproducibility"
      ],
      technologies: [
        "Python",
        "FastAPI",
        "AI/Machine Learning",
        "Security Telemetry Analysis",
        "Threat Intelligence",
        "Graph-Based Security Analysis",
        "Docker",
        "REST APIs"
      ],
      status: "Active Research & Development",
      githubUrl: "https://github.com/dahamsividara-dotcom/titan-omega-x"
    },
    {
      id: "aegis360-x",
      title: "AEGIS360-X",
      tagline: "AI-Assisted SOC & Security Monitoring System",
      category: "SOC Automation · Security Intelligence",
      shortDescription: "Addresses high alert volumes and investigation fatigue in modern SOCs by exploring an AI-assisted approach to connect related security events, organize them into chronological incident timelines, and prioritize investigations using contextual indicators.",
      problemStatement: "Security Operations Centers (SOCs) often receive alerts from endpoints, networks, and other security tools. Investigating these alerts individually can create repetitive work and make it difficult to recognize relationships between events that may be part of the same incident.",
      fullDescription: "AEGIS360-X is a security operations research project focused on helping security analysts make sense of large volumes of alerts generated by different systems. AEGIS360-X explores an AI-assisted approach to security monitoring that connects related events, organizes them into chronological incident views, and helps analysts prioritize investigations using contextual indicators and severity assessments.",
      overview: "AEGIS360-X is a security operations research project focused on helping security analysts make sense of large volumes of alerts generated by different systems. AEGIS360-X explores an AI-assisted approach to security monitoring that connects related events, organizes them into chronological incident views, and helps analysts prioritize investigations using contextual indicators and severity assessments.",
      researchDirections: [
        {
          title: "Alert Correlation",
          description: "Exploring how related host and network events can be grouped into a more meaningful incident context."
        },
        {
          title: "Incident Timeline Analysis",
          description: "Organizing related events chronologically to help analysts understand how suspicious activity develops."
        },
        {
          title: "Severity Assessment",
          description: "Using relevant incident indicators to support alert prioritization."
        },
        {
          title: "Threat and Noise Differentiation",
          description: "Exploring ways to distinguish potentially malicious activity from routine background events."
        },
        {
          title: "Analyst-Centered Workflows",
          description: "Presenting security findings in a structured format that supports investigation and decision-making."
        }
      ],
      techStackBreakdown: {
        implemented: [
          "Python",
          "React",
          "TypeScript",
          "Node.js",
          "Docker"
        ],
        exploration: [
          "Apache Kafka (Planned Streaming Integration)"
        ]
      },
      longTermVision: "The broader vision is to reduce repetitive triage work and provide analysts with a clearer understanding of suspicious activity, while keeping investigation and response decisions transparent.",
      implementedFeatures: [
        "Alert grouping prototype connecting related host and network events",
        "Chronological timeline analysis designed for progressive incident comprehension",
        "Indicator-based severity scoring exploring prioritization over raw alert counts",
        "Structured analyst interface minimizing repetitive manual triage actions"
      ],
      futureDirections: [
        "Reduction of repetitive triage overhead while keeping investigation and response decisions transparent",
        "Streaming event ingestion integration with message brokers like Apache Kafka",
        "Automated correlation rules refinement based on historical analyst feedback"
      ],
      highlights: [
        "Alert grouping prototype connecting related host and network events",
        "Chronological timeline analysis designed for progressive incident comprehension",
        "Indicator-based severity scoring exploring prioritization over raw alert counts",
        "Structured analyst interface minimizing repetitive manual triage actions"
      ],
      technologies: [
        "Python",
        "React",
        "TypeScript",
        "Node.js",
        "Docker",
        "Apache Kafka"
      ],
      status: "Prototype Completed",
      githubUrl: "https://github.com/dahamsividara-dotcom/aegis360-x"
    },
    {
      id: "obsidian-x",
      title: "OBSIDIAN-X",
      tagline: "Modular Threat Detection & Telemetry Analysis Engine",
      category: "Threat Detection",
      shortDescription: "Addresses the challenge of detecting subtle adversarial activity within raw telemetry by exploring a modular approach to transform event streams and network-flow records into structured data for behavioral threat detection and MITRE ATT&CK mapping.",
      problemStatement: "Raw security event streams and high-velocity network-flow records contain high volumes of disparate data that can obscure subtle attacker techniques, such as recurring beacon-like activity, unusual outbound communication, and unexpected administrative behavior.",
      fullDescription: "OBSIDIAN-X is a cybersecurity engineering project exploring a modular approach to security telemetry analysis and behavioral threat detection. It focuses on transforming raw security events and network-flow records into structured data that can be analyzed for potentially suspicious patterns. The project aims to help security teams investigate unusual outbound communication, recurring beacon-like activity, and unexpected administrative behavior. It also explores mapping observed indicators to the MITRE ATT&CK framework and producing structured findings that could support integration with broader security monitoring workflows.",
      overview: "OBSIDIAN-X is a cybersecurity engineering project exploring a modular approach to security telemetry analysis and behavioral threat detection. It focuses on transforming raw security events and network-flow records into structured data that can be analyzed for potentially suspicious patterns. The project aims to help security teams investigate unusual outbound communication, recurring beacon-like activity, and unexpected administrative behavior. It also explores mapping observed indicators to the MITRE ATT&CK framework and producing structured findings that could support integration with broader security monitoring workflows.",
      researchDirections: [
        {
          title: "Modular Processing Pipeline",
          description: "Separating telemetry ingestion, data preparation, and detection logic into maintainable components."
        },
        {
          title: "Behavioral Anomaly Analysis",
          description: "Exploring statistical and machine-learning approaches to identify unusual patterns in network-flow data."
        },
        {
          title: "Threat Context Mapping",
          description: "Relating relevant findings to MITRE ATT&CK techniques where appropriate."
        },
        {
          title: "Structured Security Reporting",
          description: "Designing JSON-formatted detection results for downstream analysis and potential SIEM integration."
        },
        {
          title: "Extensible Architecture",
          description: "Organizing components so future data sources and detection methods can be integrated."
        }
      ],
      techStackBreakdown: {
        implemented: [
          "Python",
          "FastAPI",
          "Docker"
        ],
        exploration: [
          "PyTorch (Planned / Under Exploration — Behavioral Anomaly Models)",
          "Elasticsearch (Planned / Under Exploration — Telemetry Storage)"
        ]
      },
      longTermVision: "The long-term goal is to evolve OBSIDIAN-X into an extensible detection engine capable of ingesting diverse telemetry streams and producing structured, MITRE-aligned findings ready for direct SIEM and SOC platform orchestration.",
      implementedFeatures: [
        "Modular pipeline decoupling event ingestion, feature extraction, and detection logic",
        "Statistical anomaly detection over network flow records exploring beaconing indicators",
        "Mapping observed indicators and behaviors directly to MITRE ATT&CK techniques",
        "Structured JSON reporting engineered for downstream SIEM and SOC platform ingestion"
      ],
      futureDirections: [
        "Evolution into an extensible detection engine supporting diverse telemetry streams",
        "Integration of deep learning anomaly models with PyTorch for complex beaconing heuristics",
        "Elasticsearch integration for scalable distributed telemetry indexing and search"
      ],
      highlights: [
        "Modular pipeline decoupling event ingestion, feature extraction, and detection logic",
        "Statistical anomaly detection over network flow records exploring beaconing indicators",
        "Mapping observed indicators and behaviors directly to MITRE ATT&CK techniques",
        "Structured JSON reporting engineered for downstream SIEM and SOC platform ingestion"
      ],
      technologies: [
        "Python",
        "PyTorch",
        "FastAPI",
        "Elasticsearch",
        "Docker"
      ],
      status: "Active Development",
      githubUrl: "https://github.com/dahamsividara-dotcom/obsidian-x"
    },
    {
      id: "agentic-ai-soc",
      title: "Agentic AI-SOC",
      tagline: "Agent-Based Security Operations Workflow",
      category: "Autonomous Systems · SOC Automation",
      shortDescription: "Addresses Tier-1 analyst fatigue and repetitive triage by exploring collaborative multi-agent workflows for automated indicator enrichment, investigation query synthesis, and incident summaries with human-in-the-loop oversight.",
      problemStatement: "Tier-1 security analysts in high-velocity Security Operations Centers (SOCs) face significant cognitive fatigue from repetitive manual triage tasks, disjointed threat intelligence lookups across third-party portals, and drafting boilerplate query syntax across diverse logging platforms.",
      fullDescription: "Agentic AI-SOC is an ongoing cybersecurity engineering exploration into agent-assisted security operations. The project investigates how collaborative, role-specialized software assistants can augment human security analysts during initial triage, threat intelligence enrichment, and telemetry search query preparation without removing human authority.",
      overview: "Agentic AI-SOC is an ongoing cybersecurity engineering exploration into agent-assisted security operations. The project investigates how collaborative, role-specialized software assistants can augment human security analysts during initial triage, threat intelligence enrichment, and telemetry search query preparation without removing human authority.",
      researchDirections: [
        {
          title: "Specialized Assistant Agents",
          description: "Exploring modular agent roles (such as triage coordinator, indicator lookup assistant, and query generator) that handle discrete investigation sub-tasks collaboratively rather than through a single monolithic prompt."
        },
        {
          title: "Threat Intelligence Synthesis",
          description: "Normalizing and summarizing indicator reputation data from external threat intelligence feeds and REST APIs into unified, contextual analyst briefings."
        },
        {
          title: "Query Generation",
          description: "Exploring natural-language translation of alert context and analyst intent into structured SIEM and telemetry query syntax."
        },
        {
          title: "Human-in-the-Loop Safeguards",
          description: "Establishing containment approval as an uncompromised design principle, ensuring automated suggestions cannot trigger disruptive remediation without explicit analyst confirmation."
        }
      ],
      techStackBreakdown: {
        implemented: [
          "Python",
          "LangChain",
          "REST APIs"
        ],
        exploration: [
          "Multi-Agent Workflows (Under Exploration)",
          "Vector Storage / Knowledge Store (Planned)"
        ]
      },
      longTermVision: "The broader objective is to develop transparent, explainable assistant agents that augment human analyst capacity without replacing human judgment in defensive operations.",
      implementedFeatures: [
        "Core Python framework utilizing LangChain for structured prompt chaining and response extraction",
        "REST API integration pipeline for automated indicator reputation lookups from threat intelligence feeds",
        "Alert metadata normalization and initial investigation summary generation logic",
        "Containment Approval Design Principle: Architecture designed to prevent autonomous containment without verified human operator authorization"
      ],
      futureDirections: [
        "Autonomous multi-agent orchestration with dynamic task delegation across specialized sub-agents",
        "Vector database integration for historical incident retrieval and contextual similarity matching",
        "Direct bidirectional SIEM connector integration with active analyst feedback loops",
        "Formalized containment approval gate interfaces for progressive incident escalation"
      ],
      highlights: [
        "Role-specialized agent architecture coordinating initial alert investigation tasks",
        "Synthesized threat intelligence enrichment from public IOC and reputation feeds",
        "Strict human-in-the-loop design principle required for all remediation recommendations",
        "Structured reasoning logs designed for auditability and transparent decision-making"
      ],
      technologies: [
        "Python",
        "LangChain",
        "REST APIs"
      ],
      status: "Ongoing Development",
      githubUrl: "https://github.com/dahamsividara-dotcom/agentic-ai-soc"
    },
    {
      id: "phishing-detector",
      title: "Phishing URL Detection System",
      tagline: "Machine Learning Classifier",
      category: "Machine Learning · Threat Detection",
      shortDescription: "Addresses the threat of deceptive and evasive URLs by applying machine learning to static lexical and structural domain features, evaluated at 99.45% test accuracy on benchmark threat corpora without payload downloads.",
      problemStatement: "Deceptive, evasive, and freshly registered phishing URLs frequently bypass static reputation blocklists. Conversely, spinning up remote browser sandboxes or downloading live payloads introduces operational risk, resource overhead, and latency during initial screening.",
      fullDescription: "The Phishing URL Detection System is a machine learning security project focused on static classification of deceptive domains. By evaluating structural metrics, lexical distributions, and character entropy patterns from domain and URL components, the model provides pre-execution threat scoring without requiring live payload downloads or remote browser execution. Note: The reported 99.45% test accuracy was achieved specifically on curated benchmark evaluation datasets and does not guarantee equivalent performance on live web traffic subject to adversarial cloaking, concept drift, and zero-day evasion.",
      overview: "The Phishing URL Detection System is a machine learning security project focused on static classification of deceptive domains. By evaluating structural metrics, lexical distributions, and character entropy patterns from domain and URL components, the model provides pre-execution threat scoring without requiring live payload downloads or remote browser execution. Note: The reported 99.45% test accuracy was achieved specifically on curated benchmark evaluation datasets and does not guarantee equivalent performance on live web traffic subject to adversarial cloaking, concept drift, and zero-day evasion.",
      researchDirections: [
        {
          title: "Lexical & Structural Feature Extraction",
          description: "Extracting URL length, subdomain depth, token distributions, path segments, and Shannon character entropy from raw URL components without network payload execution."
        },
        {
          title: "Static URL Classification",
          description: "Feeding normalized numerical feature vectors into gradient-boosted decision trees (XGBoost) and ensemble classifiers to predict phishing risk probabilities."
        },
        {
          title: "Benchmark Corpus Evaluation",
          description: "Validating classification accuracy, precision, and recall against curated benchmark threat datasets, achieving 99.45% test accuracy specifically on the evaluated benchmark corpora."
        },
        {
          title: "Explainable Feature Attribution",
          description: "Analyzing feature importance scores (such as token entropy and subdomain depth) to provide transparent justification for classification decisions."
        }
      ],
      techStackBreakdown: {
        implemented: [
          "Python",
          "Scikit-learn",
          "XGBoost",
          "Pandas",
          "NumPy"
        ],
        exploration: [
          "FastAPI Serving API (Under Exploration)",
          "Browser Extension Integration (Planned)",
          "Edge Gateway Integration (Planned)"
        ]
      },
      longTermVision: "The ongoing goal is to explore how lightweight static feature extraction can serve as a rapid first-tier filter in security email gateways and protective DNS tools.",
      implementedFeatures: [
        "Static lexical feature extractor computing URL length, subdomain count, Shannon entropy, and character distributions",
        "Offline training and benchmark evaluation pipeline built with Scikit-learn, XGBoost, Pandas, and NumPy",
        "Evaluated 99.45% test accuracy specifically on curated benchmark threat datasets under controlled test conditions",
        "Feature importance analysis identifying high-entropy domain strings and suspicious structural token patterns"
      ],
      futureDirections: [
        "Inference Latency Optimization: Profiling and tuning feature extraction pipelines for high-throughput gateway inspection",
        "Browser Extension Integration: Developing client-side endpoint extensions for real-time URL screening",
        "Edge Gateway Integration: Exploring inline proxy and protective DNS deployment architectures",
        "Live Web Generalization Testing: Evaluating model resilience against real-world adversarial evasion, fast-flux domains, and live production traffic streams"
      ],
      highlights: [
        "99.45% test accuracy achieved specifically on stated benchmark evaluation datasets",
        "Lexical and domain entropy extraction performed without network payload execution",
        "Gradient-boosted decision tree pipeline built with Scikit-learn and XGBoost",
        "Interpretable feature importance identifying structural anomaly patterns"
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "NumPy"
      ],
      status: "Evaluated (Benchmark Dataset)",
      metric: "99.45% Benchmark Test Accuracy",
      githubUrl: "https://github.com/dahamsividara-dotcom/phishing-url-detector"
    }
  ],
  skillGroups: [
    {
      title: "Cybersecurity & Security Operations",
      skills: [
        "SOC Concepts",
        "Log Analysis",
        "Threat Detection",
        "Threat Intelligence",
        "Incident Response",
        "MITRE ATT&CK",
        "Digital Forensics"
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Feature Extraction",
        "Classification Models",
        "Data Preprocessing"
      ]
    },
    {
      title: "Software & Web Development",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Python (FastAPI / Flask)",
        "REST APIs",
        "Git & Version Control"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Active area of learning and exploration",
      isLearningArea: true,
      skills: [
        "Mobile UI Concepts",
        "Cross-Platform Principles",
        "Responsive App Architecture"
      ]
    },
    {
      title: "UI / UX Design",
      description: "Focus on functional, intuitive interfaces",
      skills: [
        "Interface Design",
        "Responsive Layouts",
        "Usability Principles",
        "Prototyping",
        "User-Centered Design"
      ]
    }
  ],
  experience: [
    {
      role: "Program Manager",
      organization: "HAXSORA Traceback",
      period: "2026",
      description: "Coordinating cybersecurity program initiatives, community threat intelligence discussions, and technical operational workflows."
    }
  ],
  education: [
    {
      degree: "BSc (Hons) in Cyber Security & Digital Forensics",
      institution: "Kingston University London",
      period: "2026",
      status: "Second Class Honours (Upper Division – 2:1)",
      details: "Comprehensive academic training in cyber security principles, digital forensics investigation, incident response, network defense, and systems security."
    }
  ],
  certifications: [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      category: "Cybersecurity",
      url: "https://www.netacad.com/"
    },
    {
      title: "Ethical Hacking – Basic",
      issuer: "E.C.H Institute",
      year: "2025",
      status: "Verified"
    },
    {
      title: "Python Course",
      issuer: "Udemy",
      year: "2024",
      status: "Verified"
    },
    {
      title: "Green Accelerate Research Symposium",
      issuer: "Research Symposium",
      year: "2026",
      status: "Verified"
    }
  ],
  practicalLearning: [
    {
      title: "Hands-on Cybersecurity Labs",
      platform: "Hack The Box",
      activity: "Interactive penetration testing, attack simulation, and vulnerable system investigation",
      type: "Practical Lab Environment"
    },
    {
      title: "Hands-on Cybersecurity Labs",
      platform: "TryHackMe",
      activity: "Hands-on offensive and defensive cybersecurity training exercises",
      type: "Practical Lab Environment"
    }
  ],
  cybersecurityLearning: [
    {
      title: "Google Cybersecurity Professional Certificate",
      provider: "Google",
      status: "Considering / Financial Aid Application",
      note: "Financial aid application submitted · Learning not yet confirmed as started",
      isPendingVerification: false
    }
  ],
  upcomingLearning: [
    {
      title: "Google Cybersecurity Professional Certificate",
      provider: "Google",
      status: "Considering / Financial Aid Application",
      note: "Financial aid application submitted · Learning not yet confirmed as started"
    }
  ]
};
