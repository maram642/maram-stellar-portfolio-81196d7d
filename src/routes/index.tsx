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
  Download,
} from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";

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
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.06_290/0.6),transparent_60%)]" />
        <NeuralBackground />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Extracurricular />
        <Languages />
        <Contact />
      </main>
      <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">
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
const ROLES = ["Data Engineer", "ML Engineer", "AI Builder", "Problem Solver"];

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
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--teal)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]" />
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
          className="mt-6 text-lg text-muted-foreground sm:text-xl"
        >
          I'm a <Typewriter />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-3 text-sm text-muted-foreground"
        >
          Data Engineering & AI Student · ENET'Com, Sfax
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--teal)] px-7 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-card/40 px-7 py-3 text-sm font-medium backdrop-blur transition-all hover:border-[color:var(--purple)] hover:bg-card/70"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3 text-sm font-medium backdrop-blur transition-all hover:border-[color:var(--purple)] hover:bg-card/70"
          >
            <Download className="h-4 w-4" /> Download CV
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
    <div className="rounded-2xl border border-border/60 bg-card/40 p-6 text-center backdrop-blur hover-glow">
      <span ref={ref} className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {val}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Building intelligent systems, <span className="text-gradient">end to end.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Second-year Data Engineering student at <span className="text-foreground">ENET'Com, Sfax</span>.
              I build end-to-end AI solutions — from transformer-based NLP pipelines to optimization solvers.
              Actively seeking an internship in <span className="text-foreground">ML, Data Engineering, or AI</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Monastir, Tunisia</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> maram2.boughammoura@gmail.com</span>
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
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--teal)]">
      {children}
    </p>
  );
}

/* ---------- Skills ---------- */
const SKILL_GROUPS = [
  { icon: Code2, title: "Languages", items: ["Python", "SQL", "JavaScript", "C", "Java"] },
  { icon: Brain, title: "ML / Data Science", items: ["scikit-learn", "XGBoost", "Random Forest", "SVM", "KNN"] },
  { icon: Sparkles, title: "Deep Learning / NLP", items: ["TensorFlow", "PyTorch", "Hugging Face Transformers"] },
  { icon: Eye, title: "Computer Vision", items: ["OpenCV", "DeepFace"] },
  { icon: Database, title: "Data & Visualization", items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"] },
  { icon: Rocket, title: "Deployment / APIs", items: ["Flask", "Streamlit", "REST API"] },
  { icon: Database, title: "Databases", items: ["SQL", "MySQL", "MongoDB"] },
  { icon: Wrench, title: "Tools", items: ["Git", "VS Code", "Jupyter", "Google OR-Tools"] },
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
              <div className="group h-full rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur hover-glow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--purple)]/20 to-[color:var(--teal)]/20 text-[color:var(--teal)]">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-display text-base font-semibold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground transition-all hover:border-[color:var(--purple)] hover:text-foreground hover:shadow-[0_0_12px_oklch(0.65_0.18_290/0.5)]"
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
    description:
      "Modular Python pipeline solving real-world Vehicle Routing Problems with capacity limits, time windows, and multi-depot scenarios. Integrated Google OR-Tools + an LLM-powered natural language constraint parser. Streamlit interface with map visualizations.",
    tech: ["Python", "KMeans", "Google OR-Tools", "LLM", "Streamlit"],
  },
  {
    title: "Facial Recognition Attendance System",
    period: "Sept – Nov 2025",
    tag: "Web Application",
    description:
      "Real-time attendance system using facial recognition (OpenCV + DeepFace) to automate presence/lateness/absence classification. Admin dashboard built with PHP + JavaScript.",
    tech: ["OpenCV", "DeepFace", "PHP", "JavaScript"],
  },
  {
    title: "AI Chatbot for Salesforce",
    period: "June – Aug 2025",
    tag: "Internship · Draexlmaier",
    description:
      "NLP chatbot using BERT and BART (Hugging Face) for Salesforce opportunity management — intent classification + named-entity extraction. Flask REST API backend with real-time web interface.",
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
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur hover-glow"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--purple)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between text-xs">
                  <span className="rounded-full border border-[color:var(--teal)]/40 bg-[color:var(--teal)]/10 px-3 py-1 text-[color:var(--teal)]">
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground">{p.period}</span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-background/60 px-2 py-1 text-[11px] text-muted-foreground">
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
  { school: "Preparatory Institute Monastir", detail: "Physics-Chemistry Preparatory Cycle", period: "Sept 2023 – June 2024" },
  { school: "Preparatory Institute Tunis", detail: "Physics-Chemistry Preparatory Cycle", period: "Sept 2022 – June 2023" },
  { school: "Bourguiba High School Monastir", detail: "Baccalaureate", period: "2018 – 2022" },
];

function Education() {
  return (
    <section id="education" className="relative px-6 py-32">
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
            className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[color:var(--purple)] via-[color:var(--teal)] to-transparent"
          />
          <div className="space-y-10">
            {EDU.map((e, idx) => (
              <Reveal key={e.school} delay={idx * 0.08}>
                <div className="relative">
                  <span className="absolute -left-[27px] top-2 h-3 w-3 rounded-full bg-[color:var(--teal)] shadow-[0_0_12px_oklch(0.78_0.12_190/0.8)]" />
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
      desc: "Organized workshops and hackathons; led recruitment and member management for the Google Developer Student Club.",
    },
    {
      icon: GraduationCap,
      title: "IEEE Active Member",
      period: "2024 – 2025",
      desc: "Competed in IEEE Xtreme 18.0 — a 24-hour global programming contest. Active community involvement.",
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
              <div className="h-full rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur hover-glow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--purple)]/20 to-[color:var(--teal)]/20 text-[color:var(--purple)]">
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
  { name: "🇹🇳 Arabic", level: "Native" },
  { name: "🇫🇷 French", level: "Fluent" },
  { name: "🇬🇧 English", level: "Professional" },
];

function Languages() {
  return (
    <section id="languages" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>06 — Languages</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Speaking <span className="text-gradient">three worlds.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {LANGS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border/60 bg-card/40 p-8 text-center backdrop-blur hover-glow">
                <h3 className="font-display text-xl font-semibold">{l.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.level}</p>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.22_0.06_190/0.5),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>07 — Contact</SectionLabel>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Let's <span className="text-gradient">build something.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to internships, collaborations and interesting conversations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:maram2.boughammoura@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm backdrop-blur hover-glow"
            >
              <Mail className="h-4 w-4 text-[color:var(--teal)]" /> maram2.boughammoura@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/maram-boughammoura-492a62338/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm backdrop-blur hover-glow"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-5 py-2.5 text-sm backdrop-blur hover-glow"
            >
              <Download className="h-4 w-4 text-[color:var(--purple)]" /> Download CV
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
            className="mt-10 space-y-4 rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" />
              <Field name="email" label="Email" type="email" />
            </div>
            <Field name="message" label="Message" textarea />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--teal)] px-6 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
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
    "peer w-full rounded-lg border border-border/60 bg-background/40 px-4 pb-2 pt-5 text-sm outline-none transition-all placeholder-transparent focus:border-[color:var(--purple)] focus:shadow-[0_0_0_3px_oklch(0.65_0.18_290/0.15)]";
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[color:var(--purple)]" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9z" />
    </svg>
  );
}
