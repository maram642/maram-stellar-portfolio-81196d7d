import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowDown,
  Code2,
  Brain,
  Eye,
  Database,
  Rocket,
  Wrench,
  GraduationCap,
  Users,
  Sparkles,
  Send,
} from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { FloatingBlobs } from "@/components/FloatingBlobs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maram Boughammoura — Data Engineering & AI" },
      { name: "description", content: "Portfolio of Maram Boughammoura, Data Engineering & AI student at ENET'Com building ML, NLP and optimization solutions." },
      { property: "og:title", content: "Maram Boughammoura — Data Engineering & AI" },
      { property: "og:description", content: "Portfolio of Maram Boughammoura — ML, NLP, computer vision and optimization projects." },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" } as never,
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Extracurricular />
        <Languages />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maram Boughammoura · Crafted with care in Monastir, Tunisia
      </footer>
    </div>
  );
}

/* ---------- Reveal helper ---------- */
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Hero ---------- */
const ROLES = ["Data Engineer", "ML Engineer", "AI Builder", "I turn data into decisions"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = full.slice(0, text.length + 1);
          setText(next);
          if (next === full) setTimeout(() => setDel(true), 1500);
        } else {
          const next = full.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((p) => (p + 1) % ROLES.length);
          }
        }
      },
      del ? 50 : 90
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-[color:var(--teal)]">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-1 animate-pulse bg-[color:var(--teal)]" />
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7ff] via-white to-white" />
      <FloatingBlobs />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ecdc4] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ecdc4]" />
          </span>
          Available for internships · Summer 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Maram</span>
          <br />
          <span className="text-foreground">Boughammoura</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-foreground/80 sm:text-xl"
        >
          I'm a <Typewriter />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-4 max-w-xl text-base text-muted-foreground"
        >
          Building intelligent systems, end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7f77dd] to-[#4ecdc4] px-7 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(127,119,221,0.55)] transition-all hover:scale-[1.03] hover:shadow-[0_14px_40px_-10px_rgba(127,119,221,0.7)]"
          >
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-white/80 px-7 py-3 text-sm font-medium shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#7f77dd] hover:shadow-md"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll to about"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}

/* ---------- About ---------- */
function Counter({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [val, setVal] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setVal(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <div className="soft-card p-6 text-center hover-glow">
      <span ref={ref} className="font-display text-4xl font-bold text-[#7f77dd] sm:text-5xl">
        {val}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-[#f9f7ff] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Building intelligent systems, <span className="text-gradient">end to end.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <Reveal delay={0.1}>
            <div className="soft-card p-8">
              <p className="text-lg leading-relaxed text-foreground/85">
                I'm a second-year Data Engineering student at <span className="font-semibold text-foreground">ENET'Com, Sfax</span>.
                I build things — NLP pipelines, computer vision systems, optimization solvers.
                I don't wait to learn, I learn by building. Currently looking for an internship where I can take on real challenges in <span className="font-semibold text-foreground">ML, Data Engineering, or AI</span>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#7f77dd]" /> Monastir, Tunisia</span>
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-[#4ecdc4]" /> maram2.boughammoura@gmail.com</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-3">
              <Counter to={3} label="Projects" />
              <Counter to={3} label="Languages" />
              <Counter to={1} label="Internship" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7f77dd]">
      {children}
    </p>
  );
}

/* ---------- Skills ---------- */
const SKILL_GROUPS = [
  { icon: Code2, title: "Languages", items: ["Python", "SQL", "JavaScript", "C", "Java"] },
  { icon: Brain, title: "ML / Data Science", items: ["scikit-learn", "XGBoost", "Random Forest", "SVM", "KNN", "Logistic Regression"] },
  { icon: Sparkles, title: "Deep Learning / NLP", items: ["TensorFlow", "PyTorch", "Hugging Face Transformers"] },
  { icon: Eye, title: "Computer Vision", items: ["OpenCV", "DeepFace"] },
  { icon: Database, title: "Data & Visualization", items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"] },
  { icon: Rocket, title: "Deployment / APIs", items: ["Flask", "Streamlit", "REST API design"] },
  { icon: Database, title: "Databases", items: ["SQL", "MySQL", "MongoDB"] },
  { icon: Wrench, title: "Tools", items: ["Git", "VS Code", "Jupyter Notebook", "Google OR-Tools"] },
];

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>02 — Skills</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            A toolbox for <span className="text-gradient">modern AI.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 0.05}>
              <div className="group soft-card h-full p-6 hover-glow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7f77dd]/15 to-[#4ecdc4]/15 text-[#7f77dd]">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-display text-base font-semibold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[#f4f1ff] px-3 py-1 text-xs font-medium text-[#5b54a8] transition-all hover:-translate-y-0.5 hover:bg-[#e8e3ff] hover:shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    title: "Intelligent Route Planning Agent (VRP)",
    period: "Dec 2025 – Apr 2026",
    tag: "Final Year Project",
    accent: "#7f77dd",
    description:
      "Modular Python pipeline solving real-world Vehicle Routing Problems — capacity limits, time windows, multi-depot scenarios. Built an LLM-powered natural language constraint parser so non-technical users describe routing rules in plain text. Streamlit interface with map visualizations and route export.",
    tech: ["Python", "KMeans", "Google OR-Tools", "LLM", "Streamlit"],
  },
  {
    title: "Facial Recognition Attendance System",
    period: "Sept – Nov 2025",
    tag: "Web Application",
    accent: "#4ecdc4",
    description:
      "Real-time attendance system using facial recognition (OpenCV + DeepFace) to automatically classify presence, lateness, and absence. Admin dashboard in PHP + JavaScript for live monitoring and corrections.",
    tech: ["OpenCV", "DeepFace", "PHP", "JavaScript"],
  },
  {
    title: "AI Chatbot for Salesforce Opportunity Management",
    period: "June – Aug 2025",
    tag: "Internship · Draexlmaier · Sousse",
    accent: "#ff6b6b",
    description:
      "NLP chatbot using BERT and BART (Hugging Face) to automate Salesforce queries — intent classification and named-entity extraction for companies and deals. Flask REST API backend with real-time web interface.",
    tech: ["BERT", "BART", "Hugging Face", "Flask", "REST API"],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>03 — Projects</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Selected <span className="text-gradient">work.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.1}>
              <motion.article
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group soft-card relative flex h-full flex-col overflow-hidden p-6 hover-glow"
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: p.accent }} />
                <div className="mb-4 flex items-center justify-between text-xs">
                  <span
                    className="rounded-full px-3 py-1 font-medium"
                    style={{ background: `${p.accent}1a`, color: p.accent }}
                  >
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground">{p.period}</span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-[#f4f1ff] px-2 py-1 text-[11px] font-medium text-[#5b54a8]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
const EDU = [
  { school: "ENET'Com", detail: "Engineering Degree — Data Engineering & Decisional Systems", period: "Sept 2024 – Present" },
  { school: "Preparatory Institute for Engineering Studies, Monastir", detail: "Physics-Chemistry Cycle", period: "Sept 2023 – June 2024" },
  { school: "Preparatory Institute for Engineering Studies, Tunis", detail: "Physics-Chemistry Cycle", period: "Sept 2022 – June 2023" },
  { school: "Bourguiba High School, Monastir", detail: "Baccalaureate", period: "Sept 2018 – June 2022" },
];

function Education() {
  return (
    <section id="education" className="relative bg-[#f0eeff] px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>04 — Education</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            The <span className="text-gradient">journey</span> so far.
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-[#7f77dd] via-[#4ecdc4] to-transparent"
          />
          <div className="space-y-10">
            {EDU.map((e, idx) => (
              <Reveal key={e.school} delay={idx * 0.08}>
                <div className="relative">
                  <span className="absolute -left-[29px] top-2 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-[#7f77dd]/40" />
                    <span className="relative h-3 w-3 rounded-full bg-[#7f77dd] shadow-[0_0_0_4px_white]" />
                  </span>
                  <p className="text-xs text-muted-foreground">{e.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{e.school}</h3>
                  <p className="text-sm text-muted-foreground">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Extracurricular ---------- */
function Extracurricular() {
  const items = [
    {
      icon: Users,
      title: "HR Officer — GDSC ENET'Com",
      period: "2025 – 2026",
      desc: "Organized technical workshops, community events, and hackathons. Managed recruitment and onboarding within a multidisciplinary student team.",
    },
    {
      icon: GraduationCap,
      title: "IEEE Active Member",
      period: "2024 – 2025",
      desc: "Competed in IEEE Xtreme 18.0 — a 24-hour global programming contest under strict time pressure.",
    },
  ];
  return (
    <section id="extracurricular" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>05 — Beyond Class</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Communities & <span className="text-gradient">leadership.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="soft-card h-full p-6 hover-glow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7f77dd]/15 to-[#4ecdc4]/15 text-[#7f77dd]">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="text-xs text-muted-foreground">{it.period}</p>
                <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Languages ---------- */
const LANGS = [
  { name: "Arabic", level: "Native", value: 100 },
  { name: "French", level: "Fluent", value: 90 },
  { name: "English", level: "Professional", value: 80 },
];

function Ring({ value }: { value: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true });
  const C = 2 * Math.PI * 42;
  const offset = C - (C * value) / 100;
  return (
    <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90">
      <circle cx="50" cy="50" r="42" stroke="#ece9ff" strokeWidth="8" fill="none" />
      <motion.circle
        ref={ref}
        cx="50" cy="50" r="42"
        stroke="url(#grad)" strokeWidth="8" fill="none" strokeLinecap="round"
        strokeDasharray={C}
        initial={{ strokeDashoffset: C }}
        animate={inView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7f77dd" />
          <stop offset="100%" stopColor="#4ecdc4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Languages() {
  return (
    <section id="languages" className="relative bg-[#f9f7ff] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>06 — Languages</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Speaking <span className="text-gradient">three worlds.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {LANGS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <div className="soft-card flex flex-col items-center p-8 hover-glow">
                <div className="relative">
                  <Ring value={l.value} />
                  <div className="absolute inset-0 flex items-center justify-center font-display text-2xl font-bold text-[#7f77dd]">
                    {l.value}%
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{l.name}</h3>
                <p className="text-sm text-muted-foreground">{l.level}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0eeff] via-[#f9f7ff] to-white" />
      <FloatingBlobs />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>07 — Contact</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Let's <span className="text-gradient">build something.</span>
          </h2>
          <p className="mt-4 text-foreground/75">
            Have a project in mind? An internship opportunity? Let's talk.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:maram2.boughammoura@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#7f77dd] hover:shadow-md"
            >
              <Mail className="h-4 w-4 text-[#4ecdc4]" /> maram2.boughammoura@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/maram-boughammoura-492a62338/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#7f77dd] hover:shadow-md"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("email")}`);
              window.location.href = `mailto:maram2.boughammoura@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="mt-10 soft-card space-y-4 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" />
              <Field name="email" label="Email" type="email" />
            </div>
            <Field name="message" label="Message" textarea />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7f77dd] to-[#4ecdc4] px-6 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(127,119,221,0.55)] transition-all hover:scale-[1.03] hover:shadow-[0_14px_40px_-10px_rgba(127,119,221,0.7)]"
            >
              {sent ? "Opening mail…" : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", textarea = false,
}: { name: string; label: string; type?: string; textarea?: boolean }) {
  const cls =
    "peer w-full rounded-lg border border-border bg-[#fbfaff] px-4 pb-2 pt-5 text-sm outline-none transition-all placeholder-transparent focus:border-[#7f77dd] focus:bg-white focus:shadow-[0_0_0_3px_rgba(127,119,221,0.15)]";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea required name={name} rows={5} placeholder={label} className={cls} />
      ) : (
        <input required name={name} type={type} placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </label>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#7f77dd]" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9z" />
    </svg>
  );
}
