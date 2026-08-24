import { useState, useEffect, useRef } from 'react'
import './App.css'

// ── Scroll-reveal hook ────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

// ── Data ──────────────────────────────────────────────────────────

const skills = [
  { category: 'BI and Visualisation', items: ['Power BI', 'Tableau', 'DAX', 'Plotly'] },
  { category: 'Programming', items: ['Python', 'R', 'SQL', 'SAS', 'HTML'] },
  { category: 'Frameworks', items: ['React', 'FastAPI', 'Streamlit', 'Supabase', 'Dialogflow'] },
  { category: 'Tools and Platforms', items: ['Microsoft Excel', 'Microsoft Azure', 'Databricks', 'GitHub', 'VS Code', 'Vercel', 'Notion'] },
]

const iconMap = {
  'Power BI':        'https://cdn.simpleicons.org/microsoftpowerbi/F2C811',
  'Tableau':         'https://cdn.simpleicons.org/tableau/E97627',
  'Plotly':          'https://cdn.simpleicons.org/plotly/3F4F75',
  'Python':          'https://cdn.simpleicons.org/python/3776AB',
  'R':               'https://cdn.simpleicons.org/r/276DC3',
  'SQL':             'https://cdn.simpleicons.org/postgresql/336791',
  'HTML':            'https://cdn.simpleicons.org/html5/E34F26',
  'React':           'https://cdn.simpleicons.org/react/61DAFB',
  'FastAPI':         'https://cdn.simpleicons.org/fastapi/009688',
  'Streamlit':       'https://cdn.simpleicons.org/streamlit/FF4B4B',
  'Supabase':        'https://cdn.simpleicons.org/supabase/3ECF8E',
  'Dialogflow':      'https://cdn.simpleicons.org/dialogflow/FF9800',
  'Microsoft Excel': 'https://cdn.simpleicons.org/microsoftexcel/217346',
  'Microsoft Azure': 'https://cdn.simpleicons.org/microsoftazure/0078D4',
  'Databricks':      'https://cdn.simpleicons.org/databricks/FF3621',
  'GitHub':          'https://cdn.simpleicons.org/github/181717',
  'VS Code':         'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  'Vercel':          'https://cdn.simpleicons.org/vercel/000000',
  'Notion':          'https://cdn.simpleicons.org/notion/000000',
  'Vite':            'https://cdn.simpleicons.org/vite/646CFF',
}

const featuredProjects = [
  {
    num: '01',
    name: 'CampusRide',
    type: 'Full-stack web app',
    stack: ['React', 'Vite', 'FastAPI', 'Python', 'Supabase', 'Vercel'],
    desc: 'Full-stack ride-sharing app for university students, built with React, FastAPI, and Supabase. Designed the database schema, built 15+ API endpoints, and developed the frontend with user auth, ride listings, and a booking chatbot. Deployed live on Vercel with CI/CD.',
    fullDesc: 'Built from scratch as a university capstone project. Designed the Supabase (PostgreSQL) database schema for rides, users, and bookings. Developed 15+ REST API endpoints in FastAPI with role-based access control and JWT authentication. Built the React + Vite frontend with reusable components, real-time ride listing board, booking management, and a Dialogflow chatbot for booking assistance. Managed the full development lifecycle from requirements gathering to live deployment with CI/CD on Vercel.',
    skillsDemo: [
      'Full-stack web development (React + FastAPI)',
      'REST API design and implementation',
      'Database schema design (PostgreSQL via Supabase)',
      'User authentication and authorisation (JWT)',
      'Frontend component architecture',
      'Chatbot integration (Dialogflow)',
      'Cloud deployment and CI/CD (Vercel)',
    ],
    preview: '/campusride.png',
    images: [{ src: '/campusride.png', caption: 'CampusRide app interface' }],
    live: null,
    github: null,
  },
  {
    num: '02',
    name: 'Qantas Lost and Found Matching System',
    type: 'Python app',
    stack: ['Python', 'Pandas', 'FuzzyWuzzy', 'Streamlit', 'Plotly', 'Power BI'],
    desc: 'Staff-facing tool that matches lost luggage reports to found items using fuzzy string matching. Built with Streamlit so non-technical staff can upload data and review match confidence scores. Paired with Plotly dashboards and a Power BI report for operations management.',
    fullDesc: 'Addressed a real-world airport operations challenge: matching "black suitcase with red tag" to "dark luggage, red ribbon" across thousands of records. Applied FuzzyWuzzy similarity scoring across multiple fields with configurable match thresholds. Built a Streamlit interface so non-technical staff could upload CSV files, review flagged matches, and accept or reject them. Produced Plotly visualisations for match confidence distribution and a Power BI dashboard for daily operations reporting to management.',
    skillsDemo: [
      'Fuzzy string matching and text similarity (FuzzyWuzzy)',
      'Data cleaning and preprocessing (Pandas)',
      'Streamlit application development',
      'Business operations problem analysis',
      'Data visualisation (Plotly charts)',
      'Management reporting (Power BI)',
      'Translating operational pain points into technical solutions',
    ],
    preview: '/qantas-dashboard.png',
    images: [{ src: '/qantas-dashboard.png', caption: 'Operations dashboard' }],
    live: null,
    github: null,
  },
  {
    num: '03',
    name: 'Diabetes Risk Analysis',
    type: 'ML and BI',
    stack: ['Python', 'XGBoost', 'SHAP', 'scikit-learn', 'imbalanced-learn', 'Power BI'],
    desc: 'ML project predicting diabetes risk across a 70,000-record health dataset. Handled class imbalance with SMOTE, trained an XGBoost classifier, and used SHAP to explain individual predictions. Findings presented in a Power BI dashboard built for non-technical stakeholders.',
    fullDesc: 'Worked through the full ML lifecycle on a 70,000+ record health dataset. Identified and handled significant class imbalance (8:1 ratio) using SMOTE oversampling before training. Engineered features, trained and tuned an XGBoost classifier, and used SHAP values to generate per-prediction explanations, making the model interpretable for non-technical stakeholders. Packaged all findings in a Power BI dashboard with drill-down by risk band, age group, and BMI range. Documented the full methodology for reproducibility.',
    skillsDemo: [
      'Machine learning modelling (XGBoost, scikit-learn)',
      'Class imbalance handling (SMOTE, imbalanced-learn)',
      'Model explainability and interpretability (SHAP)',
      'Feature engineering and exploratory data analysis',
      'Power BI dashboard design with drill-through',
      'Communicating ML results to non-technical stakeholders',
    ],
    preview: '/diabetes-shap.png',
    images: [
      { src: '/diabetes-shap.png', caption: 'SHAP summary — feature impact on predictions' },
      { src: '/diabetes-roc.png', caption: 'ROC curves — all three models compared' },
      { src: '/diabetes-model-comparison.png', caption: 'Model performance comparison' },
    ],
    live: null,
    github: null,
  },
  {
    num: '04',
    name: 'NextStep AI Career Guidance Chatbot',
    type: 'Conversational AI',
    stack: ['Google Dialogflow', 'HTML', 'CSS', 'JavaScript'],
    desc: 'Career guidance chatbot for university students, built on Google Dialogflow. Designed 20+ intents, custom entities, and context-aware conversation flows. Deployed as a live web page with a custom HTML, CSS, and JavaScript interface.',
    fullDesc: 'Designed and deployed a conversational AI system for career guidance, targeted at university students navigating career choices. Mapped 20+ intents covering career pathways, skill gap advice, and resource recommendations. Defined custom entities and wrote varied training phrases to handle different phrasings of the same question. Built context-aware follow-up flows so the bot could ask clarifying questions rather than dead-ending. Created a custom HTML/CSS/JS frontend for a clean chat experience. Deployed publicly and refined based on real user testing.',
    skillsDemo: [
      'Conversational AI design and NLP (Google Dialogflow)',
      'Intent architecture and entity mapping',
      'Context-aware dialogue flow design',
      'UX design for conversational interfaces',
      'Front-end web development (HTML, CSS, JavaScript)',
      'User testing and iterative refinement',
      'Cloud deployment of web applications',
    ],
    preview: '/nextstep-ai.png',
    images: [{ src: '/nextstep-ai.png', caption: 'NextStep AI chatbot interface' }],
    live: null,
    github: null,
  },
]

const otherProjects = [
  { name: 'Victoria Road Accident Analysis', desc: 'Statistical analysis of Victorian road accident data in R. Used regression and correlation to identify risk patterns by time of day, location type, and driver demographics.', tags: ['R', 'ggplot2', 'Statistical Analysis'], github: 'https://github.com/Ayushi-ERR/-R-Victoria-Accident-Data-Analysis', image: '/victoria-road.png' },
  { name: 'Strategic Operational Dashboard', desc: 'Power BI dashboard covering multiple KPIs for strategic decision-making. Built with dynamic DAX measures, calculated columns, and drill-through pages across departments.', tags: ['Power BI', 'DAX'], github: 'https://github.com/Ayushi-ERR/PBIX---Strategic-Operational-Dashboard', image: '/operational-dashboard.png' },
  { name: 'Sports Analytics Dashboard', desc: 'Tableau dashboard for sports performance tracking. Includes player comparison views, seasonal trend lines, and highlight metrics for coaching insights.', tags: ['Tableau'], github: 'https://github.com/Ayushi-ERR/Twb-Sports-Analytics', image: '/sports-analytics.png' },
  { name: 'FitnessPlus Dashboard', desc: 'Power BI dashboard for a fitness business covering membership growth, class performance, revenue trends, and churn indicators across a full dataset.', tags: ['Power BI', 'Excel'], github: null, image: '/fitnessplus-dashboard.png' },
  { name: 'Pedestrian Traffic Dashboard', desc: 'Hourly pedestrian count dashboard for Melbourne CBD sensors. Covers peak flow patterns, anomaly detection, and location-level comparisons.', tags: ['Power BI', 'DAX'], github: null, image: '/pedestrian-dashboard.png' },
  { name: 'Customer Churn Analysis', desc: 'SAS-based churn prediction model covering segmentation, logistic regression, and cluster profiling across three customer datasets.', tags: ['SAS', 'Excel'], github: null, image: '/churn-analysis.png' },
]

// Ariso first (most recent and most relevant BA role)
const experience = [
  {
    company: 'Ariso Technology',
    role: 'Business Analyst',
    period: 'Dec 2025 – May 2026',
    location: 'Melbourne',
    tag: 'Fintech',
    color: '#3B82F6',
    desc: 'Competitor and regulatory research for an early-stage fintech app. Wrote user stories and functional requirements in Notion, working directly with founders on MVP scope.',
  },
  {
    company: 'Key Difference',
    role: 'Senior Content Analyst',
    period: 'Apr 2025 – May 2026',
    location: 'Remote',
    tag: 'Media',
    color: '#10B981',
    desc: 'Primary liaison for 15+ media and publisher partners. Led vendor pricing analysis and managed full PR release cycles across client, sales, and media teams.',
  },
  {
    company: 'CISION (PR Newswire)',
    role: 'Client Services and Operations Executive',
    period: 'Jun 2022 – Dec 2024',
    location: '',
    tag: 'PR',
    color: '#8B5CF6',
    desc: 'Managed client accounts with data-driven reporting on press distribution using Excel and BI dashboards. Improved handoff processes across sales, editorial, and distribution teams.',
  },
  {
    company: 'EMotorad',
    role: 'Marketing Executive',
    period: 'Jan 2022 – Jun 2022',
    location: '',
    tag: 'EV',
    color: '#F59E0B',
    desc: 'Ran multi-channel campaigns and used customer feedback data to adjust event planning and promotional strategies.',
  },
  {
    company: 'Patterns LLC',
    role: 'Customer Support Executive',
    period: 'Apr 2021 – Dec 2021',
    location: '',
    tag: 'Support',
    color: '#6B7280',
    desc: 'Analysed customer interaction logs to spot recurring issues and worked with the team to fix the underlying processes.',
  },
]

const references = [
  {
    initials: 'HM',
    name: 'Dr. Harsha Kumara Moraliyage',
    title: 'Lecturer, AI and Analytics',
    company: 'La Trobe University',
    relationship: 'Academic supervisor, Master of Business Analytics',
  },
  {
    initials: 'MJ',
    name: 'Marta Johnston',
    title: 'Head of Newswire Operations',
    company: 'KEY Difference',
    relationship: 'Direct manager at KEY Difference',
  },
  {
    initials: 'RL',
    name: 'Rushi Ladani',
    title: 'Founder and CEO',
    company: 'Ariso Technology',
    relationship: 'Supervised BA work experience',
  },
]

// ── Project Modal ─────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-header">
          <span className="project-num">{project.num}</span>
          <span className="project-badge">{project.type}</span>
        </div>
        <h2 className="modal-title">{project.name}</h2>

        {project.images && project.images.length > 0 && (
          <div className="modal-gallery">
            {project.images.map((img, i) => (
              <figure key={i} className="modal-fig">
                <img src={img.src} alt={img.caption} className="modal-img" />
                <figcaption className="modal-caption">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="modal-block">
          <p className="modal-label">What was built</p>
          <p className="modal-text">{project.fullDesc}</p>
        </div>

        <div className="modal-block">
          <p className="modal-label">Skills demonstrated</p>
          <ul className="modal-skills">
            {project.skillsDemo.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="modal-block">
          <p className="modal-label">Technologies used</p>
          <div className="tag-row">
            {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-footer-text">
            <p className="modal-access-title">Live app available on request</p>
            <p className="modal-access-sub">Reach out and I'll walk you through it.</p>
          </div>
          <a
            href="#contact"
            className="btn-primary"
            onClick={onClose}
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Nav ───────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Skills', 'Projects', 'Experience', 'Resume', 'References', 'Contact']

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand">AS</a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Get in touch</a>
        </div>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFC" />
        </svg>
      </div>
      <div className="hero-grid">

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>
          <p className="hero-label">Business Analyst · Melbourne, Australia</p>
          <h1 className="hero-name">Ayushi<br />Sinha</h1>
          <p className="hero-bio">
            Analytical, practical, and ready to contribute from day one.
            With experience across fintech product discovery, PR operations, and data analytics,
            I bring both the business mindset and technical depth that a BA role needs.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get in touch</a>
            <a href="https://www.linkedin.com/in/ayushi-sinha-154362206/" target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn</a>
            <a href="https://github.com/Ayushi-ERR" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years exp.</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <span className="stat-num">VIC</span>
              <span className="stat-label">Melbourne</span>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-ring-spin" />
          <div className="hero-photo-ring-outer" />
          <div className="hero-photo-ring-inner" />
          <div className="hero-photo">
            <img
              src="/profile.png"
              alt="Ayushi Sinha"
              className="hero-photo-img"
              onError={e => { e.target.src = '/profile.PNG' }}
            />
          </div>

        </div>

      </div>
    </section>
  )
}

// ── Skills ────────────────────────────────────────────────────────
function SkillChip({ name }) {
  const icon = iconMap[name]
  return (
    <div className="skill-chip">
      {icon
        ? <img src={icon} alt={name} className="skill-icon" />
        : <span className="skill-letter">{name[0]}</span>
      }
      <span className="skill-chip-label">{name}</span>
    </div>
  )
}

function Skills() {
  const [ref, visible] = useInView()
  return (
    <section id="skills" className="section" ref={ref}>
      <p className="eyebrow">What I work with</p>
      <h2 className="heading">Skills</h2>
      <div className={`skills-grid${visible ? ' reveal' : ''}`}>
        {skills.map(s => (
          <div key={s.category} className="skill-card">
            <p className="skill-cat">{s.category}</p>
            <div className="skill-chips">
              {s.items.map(item => <SkillChip key={item} name={item} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Projects ──────────────────────────────────────────────────────
function Projects() {
  const [ref, visible] = useInView()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section" ref={ref}>
      <p className="eyebrow">Selected work</p>
      <h2 className="heading">Projects</h2>

      <div className={`projects-grid${visible ? ' reveal' : ''}`}>
        {featuredProjects.map(p => (
          <article key={p.name} className="project-card">
            {p.preview && (
              <div className="project-preview">
                <img src={p.preview} alt={p.name} className="project-preview-img" />
              </div>
            )}
            <span className="project-num">{p.num}</span>
            <div className="project-top">
              <p className="project-name">{p.name}</p>
              <span className="project-badge">{p.type}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="tag-row">
              {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-actions">
              <button className="btn-learn" onClick={() => setActiveProject(p)}>
                Learn more ↗
              </button>
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-sm">GitHub</a>}
            </div>
          </article>
        ))}
      </div>

      <div className="other-header">
        <p className="eyebrow">More work</p>
        <h3 className="sub-heading">Other Projects</h3>
      </div>
      <div className={`other-grid${visible ? ' reveal-delay' : ''}`}>
        {otherProjects.map(p => (
          <div key={p.name} className="other-card">
            {p.image && (
              <div className="other-img-wrap">
                <img src={p.image} alt={p.name} className="other-img" />
              </div>
            )}
            <p className="other-name">{p.name}</p>
            <p className="other-desc">{p.desc}</p>
            <div className="other-foot">
              <div className="tag-row">
                {p.tags.map(t => <span key={t} className="tag tag-gray">{t}</span>)}
              </div>
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-sm">GitHub</a>}
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}

// ── Experience ────────────────────────────────────────────────────
function Experience() {
  const [ref, visible] = useInView()
  return (
    <section id="experience" className="section" ref={ref}>
      <p className="eyebrow">Career history</p>
      <h2 className="heading">Experience</h2>
      <div className={`timeline${visible ? ' reveal' : ''}`}>
        {experience.map((e, i) => (
          <div key={e.company} className="tl-item">
            <div className="tl-left">
              <div className="tl-dot" style={{ background: e.color }} />
              {i < experience.length - 1 && <div className="tl-line" />}
            </div>
            <div className="tl-body">
              <div className="tl-row">
                <div>
                  <p className="tl-company">{e.company}</p>
                  <p className="tl-role">{e.role}{e.location ? ` · ${e.location}` : ''}</p>
                </div>
                <div className="tl-right">
                  <span className="tl-tag" style={{ background: `${e.color}1A`, color: e.color }}>{e.tag}</span>
                  <span className="tl-period">{e.period}</span>
                </div>
              </div>
              <p className="tl-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Resume Banner ─────────────────────────────────────────────────
function ResumeBanner() {
  return (
    <section id="resume" className="section">
      <div className="resume-banner">
        <div>
          <p className="eyebrow" style={{ color: '#6EE7B7' }}>Ready to review?</p>
          <p className="resume-title">Download my resume</p>
          <p className="resume-sub">Full resume with experience, skills, and projects</p>
        </div>
        <a href="/Ayushi-Sinha-Resume.docx" download className="btn-download">
          Download Resume
        </a>
      </div>
    </section>
  )
}

// ── References ────────────────────────────────────────────────────
function References() {
  const [ref, visible] = useInView()
  return (
    <section id="references" className="section" ref={ref}>
      <p className="eyebrow">Vouched for</p>
      <h2 className="heading">References</h2>
      <p className="ref-note">Available on request. Details provided below for prospective employers.</p>
      <div className={`ref-grid${visible ? ' reveal' : ''}`}>
        {references.map(r => (
          <div key={r.name} className="ref-card">
            <div className="ref-avatar">{r.initials}</div>
            <p className="ref-name">{r.name}</p>
            <p className="ref-title">{r.title}</p>
            <p className="ref-company">{r.company}</p>
            <p className="ref-rel">{r.relationship}</p>
            <p className="ref-onrequest">Contact details available on request</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────
function Contact() {
  const [ref, visible] = useInView()
  return (
    <section id="contact" className="section" ref={ref}>
      <p className="eyebrow">Let's talk</p>
      <h2 className="heading">Contact</h2>
      <p className="contact-intro">
        I'm actively looking for Business Analyst roles in Melbourne. If you'd like to discuss an opportunity, see a project demo, or just connect, reach out through any of the channels below.
      </p>
      <div className={`contact-grid${visible ? ' reveal' : ''}`}>
        <a href="mailto:ayushisinha1149@gmail.com" className="contact-card">
          <div className="contact-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <p className="contact-label">Email</p>
          <p className="contact-value">ayushisinha1149@gmail.com</p>
          <p className="contact-action">Click to email me</p>
        </a>
        <a href="tel:0489150825" className="contact-card">
          <div className="contact-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.29 6.29l1.68-1.68a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <p className="contact-label">Phone</p>
          <p className="contact-value">0489 150 825</p>
          <p className="contact-action">Click to call</p>
        </a>
        <a href="https://www.linkedin.com/in/ayushi-sinha-154362206/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon-wrap">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <p className="contact-label">LinkedIn</p>
          <p className="contact-value">Ayushi Sinha</p>
          <p className="contact-action">View profile</p>
        </a>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-name">Ayushi Sinha</p>
          <p className="footer-edu">Master of Business Analytics, La Trobe University, Melbourne, 2024 to 2026</p>
        </div>
        <div className="footer-links">
          <a href="mailto:ayushisinha1149@gmail.com" className="footer-link">ayushisinha1149@gmail.com</a>
          <a href="https://www.linkedin.com/in/ayushi-sinha-154362206/" target="_blank" rel="noopener noreferrer" className="footer-link-green">LinkedIn</a>
          <a href="https://github.com/Ayushi-ERR" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
      <p className="footer-copy">Built with React and Vite</p>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <main className="main">
        <Skills />
        <Projects />
        <Experience />
        <ResumeBanner />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
