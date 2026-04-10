/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  FileText, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Cloud, 
  Cpu, 
  BrainCircuit, 
  BarChart3,
  Phone,
  Mail,
  Send
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
];

const EXPERIENCE = [
  {
    company: "Bitcot Technologies",
    role: "Software Developer",
    period: "DEC 2024 — PRESENT",
    location: "Chennai, India",
    bullets: [
      "Developed and deployed production-ready multi-agent workflows using LangGraph to automate complex enterprise decision-making processes.",
      "Integrated OpenAI Realtime API for low-latency voice-to-agent interactions, enhancing user experience in customer support modules.",
      "Architected persistent memory systems using Mem0AI, allowing agents to retain context across long-running user sessions.",
      "Implemented Model Context Protocol (MCP) to standardize tool-use between disparate AI services and local infrastructure.",
      "Optimized RAG pipelines by implementing hybrid search strategies, reducing factual hallucinations by 35% in legal document analysis.",
      "Utilized LangSmith for rigorous evaluation, tracing, and debugging of LLM chains to ensure high reliability.",
      "Engineered scalable backend services with FastAPI and Redis, supporting high-throughput agentic task execution.",
      "Collaborated on the deployment of private LLM instances on AWS to ensure data privacy and compliance for healthcare clients."
    ]
  },
  {
    company: "Ethix4AI",
    role: "Software Developer",
    period: "SEP 2024 — DEC 2024",
    location: "Remote",
    bullets: [
      "Engineered a privacy-centric Chrome extension implementing a PII/PHI protection layer for ChatGPT, ensuring data security and compliance for enterprise AI users.",
      "Developed and fine-tuned a specialized ML model for sensitive data detection and masking, achieving 98% accuracy in identifying personal and healthcare identifiers.",
      "Deployed high-performance privacy models on Hugging Face using Docker and CI/CD pipelines, facilitating seamless integration into production environments.",
      "Integrated privacy-first AI orchestration layers into enterprise workflows, mitigating data leakage risks and ensuring GDPR/HIPAA compliance."
    ]
  },
  {
    company: "Genpact",
    role: "Software Developer",
    period: "JAN 2024 — JUN 2024",
    location: "Remote",
    bullets: [
      "Architected and deployed a Retrieval-Augmented Generation (RAG) system using Python, Flask, and OpenAI's GPT-4, enabling real-time, context-aware document answering for enterprise-scale datasets.",
      "Engineered high-performance QA pipelines by integrating vector databases (ChromaDB/Pinecone) and semantic search, reducing document retrieval latency by 40% and improving answer relevance.",
      "Optimized LLM performance through advanced prompt engineering and strategic chunking methods, resulting in a 25% increase in factual accuracy across complex technical documentation.",
      "Developed a scalable full-stack architecture, integrating a React-based frontend with a robust Flask backend, ensuring seamless data flow and high system availability.",
      "Implemented rigorous evaluation frameworks using LangSmith and custom metrics to benchmark model performance, ensuring production-grade reliability and consistency."
    ]
  }
];

const INTERNSHIPS = [
  {
    company: "HCL Tech",
    role: "Software Developer Intern",
    period: "JAN 2023 — MAY 2023",
    bullets: [
      "Engineered a real-time Speech Emotion Recognition (SER) system using Python and Deep Learning, achieving 92% classification accuracy across RAVDESS, TESS, and CREMA-D datasets with over 15,000 audio samples spanning 7 emotional states.",
      "Developed robust feature extraction pipelines utilizing MFCC, pitch contours, and spectral features through librosa and scipy, coupled with data augmentation techniques ensuring 78% accuracy retention in high-noise environments.",
      "Architected and trained hybrid CNN-LSTM neural networks using TensorFlow and Keras, achieving 15% improvement in cross-dataset generalization through hyperparameter tuning and k-fold cross-validation strategies.",
      "Integrated the SER model into a live video conferencing platform using Flask REST APIs and WebSocket protocols, enabling real-time sentiment analysis for over 5,000 daily active users."
    ],
    certificateLink: "https://drive.google.com/drive/folders/1L9VUW5upAdHhzJFQruWl0cPZ7bduEnJs?usp=sharing"
  }
];

const SKILLS = [
  {
    category: "Backend Core",
    items: [
      { name: "Python", label: "STABLE" },
      { name: "PostgreSQL", label: "V16+" },
      { name: "FastAPI / Flask", label: "ASYNC" },
      { name: "Redis / Docker", label: "ORCHESTRA" }
    ]
  },
  {
    category: "AI/LLM Stack",
    items: [
      { name: "LangChain/Graph", label: "CORE" },
      { name: "Agentic RAG", label: "MODERN" },
      { name: "Multi-Agent Systems", label: "AUTONOMY" },
      { name: "DSPy / Pydantic", label: "TYPED" }
    ]
  },
  {
    category: "Evaluation",
    items: [
      { name: "LangSmith", label: "TRACE" },
      { name: "LangFuse", label: "OBSERVE" },
      { name: "pytest / SonarQube", label: "QA" },
      { name: "Prompt Engineering", label: "OPTIM" }
    ]
  },
  {
    category: "Cloud & Protocols",
    items: [
      { name: "AWS (Lambda/DDB)", label: "CLOUD" },
      { name: "Azure AI", label: "ENTERPRISE" },
      { name: "MCP Protocol", label: "SPEC" },
      { name: "Claude / Cursor", label: "TOOLS" }
    ]
  }
];

const PROJECTS = [
  {
    title: "Empathetic Cancer Care Chatbot",
    tags: "AI HEALTHCARE • LLM",
    description: "A specialized multi-agent system designed to provide medical information and emotional support to cancer patients. Built using LangGraph for stateful conversation management and DSPy for prompt optimization.",
    details: [
      "Developed empathetic AI assistant for cancer patients guiding treatment workflows and clinical progress tracking.",
      "Integrated video transcription pipelines enabling step-by-step care guidance.",
      "Designed emotionally adaptive response system to ensure psychologically safe communication.",
      "Implemented dynamic progress tracking to reduce patient confusion and anxiety."
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjq9rkDsJDUQ-zl3pvzuapP_0iZPhpfcDJXgm64Ao9K-Fu30HYP8cnnv_92ElP-aqY7BOmdQC33C1Eodn5wr8YsywvwX75PP8IowB5I62EGsc-o01dc0K1FKqM4WKibnzt33kMu58kLUdpmnW1-zEaYt8JZzULMZEkJ9POxPULmemeNMZu20OWE4HKIycA-RBR3L3BmMx_PUbvD_pltASr59OcRgFgYeCWSANdnNEiHVLLC0aav7zMcBhmKjafoK_9XHfLrq6lx-l_"
  },
  {
    title: "JIRA Release Note Automation",
    tags: "WORKFLOW AUTOMATION • AGENTS",
    description: "End-to-end automation pipeline that synthesizes JIRA ticket history into human-readable release notes. Utilizes Pydantic for data validation and custom LangChain agents to distill technical changes into value-driven summaries.",
    details: [
      "Built automated sprint release documentation generator extracting Jira sprint metadata.",
      "Structured release outputs including features, updates, impacts, deployment steps, and validations.",
      "Eliminated manual release preparation effort and standardized documentation format.",
      "Reduced release-note generation time from hours to minutes."
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs_-R8qgyS0fNtJ0K7ReAThvm5Ntz8zZCIC8osbhf2w7ET45CiehGOifFaPA_vKCihV9GMnrDY8bjll6faK5uYm369qaO0FhxIJQGdOfjlTaDQYrH4NHCqCidYrPuG11VOV_zCBtMYeNUlkQj0WMJMZmVmtPhwYiBZkNKK-U-FMUvXIbsgOsLgKDslFJqJ-4QASGnCOBbaUJetacZQdjj9j1KTq4zawK3U7hnLgNliJv7IUcEJ6yKXJdwPqNGr5x11dDB6SYnMxWyo"
  }
];

const CERTIFICATIONS = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: Cloud },
  { name: "GenAI for Professionals", issuer: "NVIDIA Deep Learning Inst.", icon: BrainCircuit },
  { name: "Google Cloud AI Engineer", issuer: "Google Cloud", icon: Cpu },
  { name: "Kaggle Data Science Elite", issuer: "Kaggle Certifications", icon: BarChart3 },
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter uppercase">somisetty.ai</div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/12JSh7KovVv8kK2miwpuwD15ZnV2jM-fb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6"
            >
              AI/LLM ARCHITECT & ENGINEER
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
            >
              Architecting the <br />Future of AI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10"
            >
              Specializing in <span className="text-black font-semibold">Agentic AI</span> and <span className="text-black font-semibold">LLM Orchestration</span>. Building autonomous multi-agent systems that transcend simple chat interfaces to solve complex infrastructure challenges.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://drive.google.com/file/d/12JSh7KovVv8kK2miwpuwD15ZnV2jM-fb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white h-14 px-8 flex items-center gap-3 font-medium hover:opacity-90 transition-all"
              >
                <FileText size={20} />
                Download Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/somisetty-reddaiah-1917362a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-highest h-14 px-8 flex items-center gap-3 font-medium hover:bg-outline-variant/20 transition-all"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Somisetty2347"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-highest h-14 px-8 flex items-center gap-3 font-medium hover:bg-outline-variant/20 transition-all"
              >
                <Github size={20} />
                GitHub
              </a>
            </motion.div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/5] bg-surface-container-low relative overflow-hidden"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4MC3629d5U2ixg6d7IeRJ0pwP2rQy7mdmyfBLrz5n5L7zRZR1Nh2ou_3Oewnv-5GlppQdY8vOtWdavlYc7MymprgE1SGf1IXXcymkT8rKQLr4Z-zS7xCHOKkeUJj4K1RztBYpYm__sbFNhjfpxLxBBwj3UE8VZBJY6UpUKPXMMxm-XdqtElEVSTqUp-yK_XBe2t0Q-g4gqcatCHHH67YwxmuwvSHYupjh0y9JwJmTWDp8y25sXRR_WEoAsJv29tG_I7Uvra6rKPt" 
                alt="Abstract AI Architecture"
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Objective / About Section */}
        <section id="about" className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">MISSION STATEMENT</p>
              <h2 className="text-4xl font-bold tracking-tight">Professional Objective</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-xl text-on-surface-variant leading-relaxed">
                <p>
                  Strategic <span className="text-black font-semibold">AI/LLM Architect</span> dedicated to engineering high-performance, autonomous agentic systems. Specializing in the orchestration of Large Language Models to solve complex, non-linear enterprise challenges.
                </p>
                <p>
                  With deep expertise in <span className="text-black font-semibold">LangGraph, RAG optimization, and privacy-preserving AI</span>, I bridge the gap between cutting-edge research and scalable production environments. My objective is to lead the development of the next generation of intelligent infrastructure, focusing on reliability, observability, and human-centric AI design.
                </p>
                <p>
                  I am committed to advancing the field of autonomous multi-agent systems while ensuring privacy, scalability, and ethical AI implementation across healthcare, automation, and enterprise sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">TENURE</p>
              <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-outline-variant pb-16 last:pb-0">
                    <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] bg-black rounded-full" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.company}</h3>
                        <p className="text-lg text-on-surface-variant font-medium">{exp.role}</p>
                      </div>
                      <div className="mt-2 md:mt-0 font-mono text-sm bg-white border border-outline-variant px-3 py-1">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc pl-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">FOUNDATIONS</p>
              <h2 className="text-4xl font-bold tracking-tight">Internships</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="space-y-16">
                  {INTERNSHIPS.map((intern, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-outline-variant">
                      <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] bg-black rounded-full" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{intern.company}</h3>
                          <p className="text-lg text-on-surface-variant font-medium">{intern.role}</p>
                        </div>
                        <div className="mt-2 md:mt-0 font-mono text-sm bg-white border border-outline-variant px-3 py-1">
                          {intern.period}
                        </div>
                      </div>
                      <ul className="space-y-2 text-on-surface-variant leading-relaxed list-disc pl-4 mb-6">
                        {intern.bullets.map((bullet, i) => (
                          <li key={i} className="text-base">{bullet}</li>
                        ))}
                      </ul>
                      <a 
                        href={intern.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
                      >
                        View Certificate <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">INFRASTRUCTURE</p>
            <h2 className="text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {SKILLS.map((cat, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-black" />
                  {cat.category}
                </h4>
                <ul className="space-y-4">
                  {cat.items.map((skill, i) => (
                    <li key={i} className="flex justify-between items-center group">
                      <span className="text-on-surface-variant group-hover:text-black transition-colors">{skill.name}</span>
                      <span className="font-mono text-[10px] text-outline opacity-40">{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">CASE STUDIES</p>
              <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="group">
                  <div className="aspect-video bg-white overflow-hidden mb-8 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-on-surface-variant mb-3 uppercase">{project.tags}</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-2 text-on-surface-variant leading-relaxed list-disc pl-4 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                  <div className="flex gap-6">
                    <button className="text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity">Case Study</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">ACADEMIA</p>
              <h2 className="text-4xl font-bold tracking-tight mb-8">Education</h2>
              <div className="space-y-12">
                <div>
                  <h4 className="text-lg font-bold">BE - Computer Science</h4>
                  <p className="text-on-surface-variant mb-2">Sathyabama University</p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs bg-surface-container-highest px-2 py-1">8.97 CGPA</span>
                    <span className="text-xs text-on-surface-variant">Class of 2024</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Senior Secondary (12th)</h4>
                  <p className="text-on-surface-variant mb-2">Vignan Schools</p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs bg-surface-container-highest px-2 py-1">97%</span>
                    <span className="text-xs text-on-surface-variant">Mathematics focus</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">VALIDATION</p>
              <h2 className="text-4xl font-bold tracking-tight mb-8">Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-6 border border-outline-variant/30 flex items-center gap-4 hover:border-black transition-colors group">
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center">
                      <cert.icon size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{cert.name}</p>
                      <p className="font-mono text-[10px] text-outline uppercase">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black py-32 text-white">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-6">COLLABORATION</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Initiate a <br />Protocol.</h2>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] uppercase text-white/60 mb-2">DIRECT LINE</p>
                  <div className="flex items-center gap-3 text-2xl font-light">
                    <Phone size={20} className="text-white/40" />
                    +91 9177605026
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-white/60 mb-2">SECURE EMAIL</p>
                  <div className="flex items-center gap-3 text-2xl font-light">
                    <Mail size={20} className="text-white/40" />
                    somisettyreddaiah2001@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 backdrop-blur-md">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/60">IDENTITY</label>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-white/10 border-none text-white placeholder:text-white/30 focus:ring-1 focus:ring-white py-4 px-4 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/60">RETURN CHANNEL</label>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-white/10 border-none text-white placeholder:text-white/30 focus:ring-1 focus:ring-white py-4 px-4 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-white/60">MISSION BRIEF</label>
                  <textarea 
                    placeholder="How can we advance the infrastructure?" 
                    rows={4}
                    className="w-full bg-white/10 border-none text-white placeholder:text-white/30 focus:ring-1 focus:ring-white py-4 px-4 transition-all"
                  />
                </div>
                <button className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                  <Send size={14} />
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface py-12 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-black tracking-tighter uppercase">somisetty.ai</div>
          <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
            © 2024 AI/LLM Architect. Built with Precision.
          </p>
          <div className="flex gap-8">
            {["LinkedIn", "GitHub", "Twitter"].map((social) => {
              const links: Record<string, string> = {
                LinkedIn: "https://www.linkedin.com/in/somisetty-reddaiah-1917362a1/",
                GitHub: "https://github.com/Somisetty2347",
                Twitter: "#"
              };
              return (
              <a 
                key={social} 
                href={links[social]}
                target="_blank"
                rel="noopener noreferrer" 
                className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-black underline decoration-1 underline-offset-4 transition-colors"
              >
                {social}
              </a>
            );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
