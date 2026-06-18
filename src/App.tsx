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
  Phone,
  Mail,
  Send,
  ArrowRight,
  Database,
  Layers,
  Zap,
  Brain
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "RAG", label: "Hybrid Search Expert" },
  { value: "LangGraph", label: "Agentic AI Stack" },
  { value: "FastAPI", label: "Backend Core" },
];

const EXPERIENCE = [
  {
    company: "Bitcot Technologies",
    role: "Software Developer (Python Developer)",
    period: "DEC 2024 — PRESENT",
    location: "Chennai, TN",
    current: true,
    bullets: [
      "Developed and maintained RESTful APIs using FastAPI with layered architecture (Router → Service → Repository).",
      "Designed and managed MySQL databases using SQLAlchemy ORM, creating optimized models, relationships, and migrations with improved performance via indexes and optimized joins; implemented role-based authorization via FastAPI security dependencies and middleware.",
      "Implemented advanced RAG pipelines with hybrid search (vector + keyword/BM25), along with query rewriting, expansion, and reranking (cross-encoder / LLM-based) techniques to enhance user intent understanding and significantly improve retrieval relevance, top-k result quality, and response accuracy for domain-specific queries.",
      "Designed Agentic AI systems using LangChain & LangGraph for autonomous reasoning, task planning, and multi-step execution across financial workflows.",
      "Developed LLM-powered conversational agents with guardrails, prompt versioning, observability, and fallback strategies for safe production deployment."
    ]
  },
  {
    company: "Ethix4AI",
    role: "Software Developer",
    period: "SEP 2024 — DEC 2024",
    location: "Remote",
    current: false,
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
    period: "JAN 2024 — JUL 2024",
    location: "Bangalore, KA",
    current: false,
    bullets: [
      "Built production-grade RAG document QA system using Python, Flask, and LLMs for accurate enterprise document intelligence.",
      "Optimized RAG pipelines to improve retrieval accuracy and reduce query latency across complex documents.",
      "Applied prompt engineering and iterative evaluations to enhance answer quality and reliability."
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
    category: "Generative AI",
    icon: Brain,
    items: [
      { name: "Agentic AI" },
      { name: "RAG Systems" },
      { name: "ReAct Framework" },
      { name: "RAGAS" },
      { name: "LoRa Fine-Tuning" },
      { name: "MCP" },
    ]
  },
  {
    category: "LLM Orchestration",
    icon: Layers,
    items: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "OpenAI GPT" },
      { name: "Claude / MCP" },
      { name: "Multi-Agent Systems" },
    ]
  },
  {
    category: "Backend",
    icon: Zap,
    items: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Django" },
      { name: "Redis" },
      { name: "Celery" },
      { name: "NLTK" },
    ]
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "ChromaDB" },
      { name: "MySQL" },
      { name: "SQLAlchemy" },
    ]
  },
  {
    category: "Architecture & Tools",
    icon: Layers,
    items: [
      { name: "SOLID Principles" },
      { name: "Design Patterns" },
      { name: "Microservices" },
      { name: "Agile / Scrum" },
      { name: "REST APIs" },
      { name: "JWT / OAuth2" },
    ]
  },
  {
    category: "Dev Tools",
    icon: Zap,
    items: [
      { name: "Git / GitHub" },
      { name: "Postman" },
      { name: "Streamlit" },
      { name: "Docker" },
    ]
  },
];

const PROJECTS = [
  {
    title: "AI Assistant with MCP-Based Tool Orchestration",
    tags: "AGENTIC AI • MCP • VERTEX AI",
    description: "MCP-driven multi-agent system using LangGraph ReAct agents for data analysis with Vertex AI Context Caching for dramatic latency and token reduction.",
    details: [
      "Designed and deployed an MCP-driven multi-agent system using LangGraph ReAct agents for data analysis.",
      "Integrated Vertex AI Context Caching to preload patient data and knowledge bases — 67% lower latency and 98% lower token usage.",
      "Built real-time SSE streaming and integrated Docling OCR to process multiple input data formats.",
    ],
    highlights: [
      { label: "Latency Drop", value: "67%" },
      { label: "Token Savings", value: "98%" },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjq9rkDsJDUQ-zl3pvzuapP_0iZPhpfcDJXgm64Ao9K-Fu30HYP8cnnv_92ElP-aqY7BOmdQC33C1Eodn5wr8YsywvwX75PP8IowB5I62EGsc-o01dc0K1FKqM4WKibnzt33kMu58kLUdpmnW1-zEaYt8JZzULMZEkJ9POxPULmemeNMZu20OWE4HKIycA-RBR3L3BmMx_PUbvD_pltASr59OcRgFgYeCWSANdnNEiHVLLC0aav7zMcBhmKjafoK_9XHfLrq6lx-l_"
  },
  {
    title: "Agent-Based RAG Chatbot for Insurance Policy Analysis",
    tags: "RAG • INSURANCE • AGENTS",
    description: "Scalable RAG system handling 500+ pages of insurance policies with Adaptive Corrective RAG, Web Search Agent, and hallucination mitigation.",
    details: [
      "Developed a scalable RAG system to retrieve insights from more than 500 pages of insurance policies.",
      "Enhanced retrieval accuracy with Adaptive Corrective RAG — refined queries and filtered 30% irrelevant chunks.",
      "Integrated a Web Search Agent for real-time updates and a Hallucination Check to reduce misinformation.",
    ],
    highlights: [
      { label: "Pages Indexed", value: "500+" },
      { label: "Chunk Noise Cut", value: "30%" },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs_-R8qgyS0fNtJ0K7ReAThvm5Ntz8zZCIC8osbhf2w7ET45CiehGOifFaPA_vKCihV9GMnrDY8bjll6faK5uYm369qaO0FhxIJQGdOfjlTaDQYrH4NHCqCidYrPuG11VOV_zCBtMYeNUlkQj0WMJMZmVmtPhwYiBZkNKK-U-FMUvXIbsgOsLgKDslFJqJ-4QASGnCOBbaUJetacZQdjj9j1KTq4zawK3U7hnLgNliJv7IUcEJ6yKXJdwPqNGr5x11dDB6SYnMxWyo"
  }
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Sathyabama Institute of Science and Technology",
    location: "Chennai",
    period: "Jun 2020 — May 2024",
    grade: "8.92 CGPA",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Vignan Junior College",
    location: "Guntur",
    period: "Jun 2018 — Apr 2020",
    grade: "9.88 CGPA",
  },
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
              PYTHON BACKEND & GENERATIVE AI DEVELOPER
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
            >
              Somisetty <br /><span className="text-outline">Reddaiah</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10"
            >
              Building production-grade <span className="text-black font-semibold">Agentic AI</span> and <span className="text-black font-semibold">RAG systems</span> with hybrid search, reranking, and LLM orchestration. FastAPI backend engineer focused on performance, scalability, and cost optimization.
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
                alt="AI Architecture"
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-t border-b border-outline-variant/30 bg-surface-container-low"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className={`py-8 px-6 ${idx < STATS.length - 1 ? 'border-r border-outline-variant/30' : ''}`}>
                  <p className="text-3xl font-bold tracking-tighter">{stat.value}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto px-8 py-24 border-b border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">ABOUT</p>
              <h2 className="text-4xl font-bold tracking-tight">Who I Am</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-6 text-xl text-on-surface-variant leading-relaxed">
                <p>
                  Python Backend and Generative AI Developer with <span className="text-black font-semibold">2 years of experience</span> building scalable APIs and distributed systems using <span className="text-black font-semibold">FastAPI, Django, and microservices</span>.
                </p>
                <p>
                  Specialized in production-grade <span className="text-black font-semibold">RAG systems</span> with hybrid search, reranking, embeddings, and LLM integrations (OpenAI, Claude) using <span className="text-black font-semibold">LangChain and LangGraph</span>.
                </p>
                <p>
                  Experienced in deploying AI applications with a focus on <span className="text-black font-semibold">performance, scalability, and cost optimization</span> — from financial workflow automation to real-time document intelligence.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {["RAG Systems", "Agentic AI", "LangGraph", "FastAPI", "LangChain", "MCP"].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-outline-variant text-sm font-medium text-on-surface-variant hover:border-black hover:text-black transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">WORK HISTORY</p>
              <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-9">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-outline-variant pb-16 last:pb-0">
                    <div className={`absolute left-[-5.5px] top-2 w-[11px] h-[11px] rounded-full ${exp.current ? 'bg-black' : 'bg-outline-variant'}`} />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          {exp.current && (
                            <span className="font-mono text-[10px] uppercase tracking-widest bg-black text-white px-2 py-0.5">CURRENT</span>
                          )}
                        </div>
                        <p className="text-lg text-on-surface-variant font-medium">{exp.role}</p>
                        <p className="text-sm text-outline mt-1">{exp.location}</p>
                      </div>
                      <div className="font-mono text-sm bg-white border border-outline-variant px-3 py-1 self-start">
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
              <div className="lg:col-span-9">
                <div className="space-y-16">
                  {INTERNSHIPS.map((intern, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-outline-variant">
                      <div className="absolute left-[-5.5px] top-2 w-[11px] h-[11px] bg-outline-variant rounded-full" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                        <div>
                          <h3 className="text-2xl font-bold">{intern.company}</h3>
                          <p className="text-lg text-on-surface-variant font-medium">{intern.role}</p>
                        </div>
                        <div className="font-mono text-sm bg-white border border-outline-variant px-3 py-1 self-start">
                          {intern.period}
                        </div>
                      </div>
                      <ul className="space-y-3 text-on-surface-variant leading-relaxed list-disc pl-4 mb-6">
                        {intern.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                      <a
                        href={intern.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 w-fit hover:opacity-70 transition-opacity"
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

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">CASE STUDIES</p>
              <h2 className="text-4xl font-bold tracking-tight">Selected Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="group bg-white border border-outline-variant/30 overflow-hidden hover:border-black transition-all duration-300">
                  <div className="aspect-video bg-surface-container-low overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-3">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="bg-black/80 backdrop-blur-sm px-3 py-1.5">
                          <p className="text-white text-lg font-bold leading-none">{h.value}</p>
                          <p className="font-mono text-[9px] text-white/70 uppercase tracking-widest">{h.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="font-mono text-[10px] tracking-widest text-on-surface-variant mb-3 uppercase">{project.tags}</p>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>
                    <ul className="space-y-2 text-on-surface-variant leading-relaxed list-none mb-0">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <ArrowRight size={14} className="mt-0.5 shrink-0 text-outline" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">CAPABILITIES</p>
            <h2 className="text-4xl font-bold tracking-tight">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {SKILLS.map((cat, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-black" />
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 border border-outline-variant text-sm text-on-surface-variant hover:border-black hover:text-black transition-colors cursor-default">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">ACADEMIA</p>
              <h2 className="text-4xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-8 bg-white border border-outline-variant/30 hover:border-black transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-xs bg-surface-container-highest px-2 py-1 text-on-surface-variant">{edu.grade}</span>
                    <span className="font-mono text-xs text-outline">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-on-surface-variant">{edu.institution}</p>
                  <p className="text-sm text-outline mt-1">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black py-32 text-white">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-6">GET IN TOUCH</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Let's <br />Connect.</h2>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] uppercase text-white/60 mb-2">PHONE</p>
                  <a href="tel:+919177605026" className="flex items-center gap-3 text-2xl font-light hover:text-white/80 transition-colors">
                    <Phone size={20} className="text-white/40" />
                    +91 9177605026
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-white/60 mb-2">EMAIL</p>
                  <a href="mailto:somisettyreddaiah2001@gmail.com" className="flex items-center gap-3 text-xl font-light hover:text-white/80 transition-colors">
                    <Mail size={20} className="text-white/40" />
                    somisettyreddaiah2001@gmail.com
                  </a>
                </div>
                <div className="flex gap-6 pt-4">
                  <a href="https://www.linkedin.com/in/somisetty-reddaiah-1917362a1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href="https://github.com/Somisetty2347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 backdrop-blur-md">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/60">NAME</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white/10 border-none text-white placeholder:text-white/30 focus:ring-1 focus:ring-white py-4 px-4 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/60">EMAIL</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/10 border-none text-white placeholder:text-white/30 focus:ring-1 focus:ring-white py-4 px-4 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-white/60">MESSAGE</label>
                  <textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="w-full bg-white/10 border-none text-white placeholder:text-white/30 focus:ring-1 focus:ring-white py-4 px-4 transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                  <Send size={14} />
                  Send Message
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
            © 2025 Somisetty Reddaiah · Python & AI Developer
          </p>
          <div className="flex gap-8">
            {["LinkedIn", "GitHub"].map((social) => {
              const links: Record<string, string> = {
                LinkedIn: "https://www.linkedin.com/in/somisetty-reddaiah-1917362a1/",
                GitHub: "https://github.com/Somisetty2347",
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
