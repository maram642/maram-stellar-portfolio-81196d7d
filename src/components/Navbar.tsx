import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => go("home")} className="font-display text-lg font-bold">
          <span className="text-gradient">MB.</span>
        </button>
        <ul className="hidden gap-8 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`relative text-sm transition-colors ${
                  active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--teal)]" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-sm text-muted-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-2 border-t border-border/40 px-6 py-4 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`block w-full py-2 text-left text-sm ${
                  active === s.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}