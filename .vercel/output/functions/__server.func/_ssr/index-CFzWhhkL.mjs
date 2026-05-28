import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as ArrowRight, C as CodeXml, H as Heart, B as BookOpen, d as Star, S as Sparkles, U as Users, L as Lightbulb, Q as Quote, I as Instagram, T as Twitter, a as Linkedin, G as Github, M as Mail, P as Phone, b as MapPin, e as Sun, c as Moon } from "../_libs/lucide-react.mjs";
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition-all hover:scale-110 hover:border-primary hover:shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_40%,transparent)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" })
      ]
    }
  );
}
function VenusBloom({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.5c1.2 1.6 1.2 3.4 0 5", opacity: "0.55" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.5 5.5c1.8.4 3 1.6 3.4 3.4", opacity: "0.55" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.5 5.5c-1.8.4-3 1.6-3.4 3.4", opacity: "0.55" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "9.5", r: "4.2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 13.7v7.8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18.5h6" })
      ]
    }
  );
}
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Values, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonial, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 z-50 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform group-hover:rotate-12 group-hover:scale-110", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(VenusBloom, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-1 rounded-full border border-[color:var(--gold)]/50 animate-[spin-slow_28s_linear_infinite]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-semibold tracking-tight", children: [
        "She Can ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Foundation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#values", className: "hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline", children: "Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#story", className: "hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline", children: "Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
    ] })
  ] }) }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-[drift_14s_ease-in-out_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-[color:var(--gold)]/30 blur-3xl animate-[drift_18s_ease-in-out_infinite_reverse]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-[breathe_8s_ease-in-out_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", style: {
          animation: "var(--animate-fade-in)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(VenusBloom, { className: "h-3.5 w-3.5 text-[color:var(--gold)]" }),
          "A nonprofit nurturing women in tech"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl", style: {
          animation: "var(--animate-fade-up)"
        }, children: [
          "Empowering the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Leaders of Tomorrow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground", style: {
          animation: "var(--animate-fade-up)",
          animationDelay: "0.15s"
        }, children: "We build safe, joyful spaces where young women discover their voice in technology — learning, coding, and growing together at their own pace." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", style: {
          animation: "var(--animate-fade-up)",
          animationDelay: "0.3s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#about", className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-hero)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
            "Join Our Mission",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#story", className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-card", children: "Read Their Stories" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex items-center gap-8", style: {
          animation: "var(--animate-fade-up)",
          animationDelay: "0.45s"
        }, children: [{
          n: "2.5k+",
          l: "Students"
        }, {
          n: "120+",
          l: "Mentors"
        }, {
          n: "40",
          l: "Cities"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold text-gradient", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
        animation: "var(--animate-fade-in)",
        animationDelay: "0.4s"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-[2.2rem] bg-[image:var(--gradient-hero)] opacity-30 blur-3xl animate-[breathe_7s_ease-in-out_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-6 -left-6 z-10 flex items-center gap-2 rounded-2xl glass border border-border/60 px-4 py-2.5 shadow-[var(--shadow-elegant)] animate-[float_5s_ease-in-out_infinite]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold leading-tight", children: "Live cohort" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Spring 2026" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-4 z-10 flex items-center gap-2 rounded-2xl glass border border-border/60 px-4 py-2.5 shadow-[var(--shadow-elegant)] animate-[float_7s_ease-in-out_infinite] [animation-delay:1s]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: ["#c4a484", "#9b6dc4", "#e8b84a"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 rounded-full border-2 border-card", style: {
            background: c
          } }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "+842 joined this month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 p-2 backdrop-blur-xl shadow-[var(--shadow-elegant)] animate-[float_9s_ease-in-out_infinite]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", alt: "Diverse group of young women learning together", className: "h-full w-full rounded-[1.6rem] object-cover aspect-[4/5] transition-transform duration-[3s] hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 right-6 rounded-2xl glass border border-border/60 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--gold)]/20 animate-[pulse-glow_4s_ease-in-out_infinite]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-[color:var(--gold)]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Built with love" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "For every girl, everywhere" })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function Marquee() {
  const words = ["Learn", "Code", "Lead", "Create", "Belong", "Grow", "Inspire", "Build", "Rise", "Together"];
  const row = [...words, ...words];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden border-y border-border/40 bg-card/30 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap", children: row.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12 font-display text-2xl font-medium text-muted-foreground/70", children: [
    w,
    /* @__PURE__ */ jsxRuntimeExports.jsx(VenusBloom, { className: "h-5 w-5 text-[color:var(--gold)]" })
  ] }, i)) }) });
}
function About() {
  const ref = useReveal();
  const ref2 = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "relative py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5" }),
        "Our Mission"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-semibold leading-tight sm:text-5xl", children: [
        "A place to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "learn, code, and grow" }),
        " — without the pressure."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl", children: "We believe in creating opportunities where students can learn, code, and grow without feeling pressured. Our beginner-friendly environment is designed to nurture the next generation of female leaders in tech." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: ref2, className: "reveal mx-auto mt-20 grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-gold)] opacity-25 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80", alt: "Young women collaborating around a laptop", className: "relative w-full rounded-[1.8rem] border border-border/60 object-cover aspect-[4/3] shadow-[var(--shadow-elegant)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl font-semibold sm:text-4xl", children: [
          "Built around ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "her pace" }),
          ", her voice, her story."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-muted-foreground", children: "She Can Foundation began in a single classroom with ten students and a second-hand laptop. Today, we run free cohorts across 40 cities — from beginner Python evenings to portfolio-grade web projects mentored by women who have walked the same path." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ["100% free, scholarship-backed curriculum", "1:6 mentor-to-student ratio with weekly 1-on-1s", "Hardware, internet stipends, and childcare support", "A lifelong alumni network across 40 cities"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
        ] }, t)) })
      ] })
    ] })
  ] });
}
function Values() {
  const ref = useReveal();
  const values = [{
    icon: Sparkles,
    title: "Inspire",
    body: "Stories, mentors, and role models that show what's possible — every day, in every cohort."
  }, {
    icon: BookOpen,
    title: "Educate",
    body: "Free, beginner-friendly coding curricula taught with patience and zero gatekeeping."
  }, {
    icon: Heart,
    title: "Uplift",
    body: "Community circles built on kindness, courage, and curiosity — never competition."
  }, {
    icon: CodeXml,
    title: "Build",
    body: "From first 'hello world' to shipped portfolio projects, mentored end to end."
  }, {
    icon: Users,
    title: "Belong",
    body: "A lifelong alumni network where every voice is heard and every win is shared."
  }, {
    icon: Lightbulb,
    title: "Lead",
    body: "We don't just teach skills — we cultivate the confidence to take up space."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "values", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5" }),
        " What we stand for"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-semibold leading-tight sm:text-5xl", children: [
        "Six promises we keep ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "to every student." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]", style: {
      animationDelay: `${i * 0.08}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-hero)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-gold)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-gold)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: v.body })
    ] }, v.title)) })
  ] }) });
}
function Story() {
  const ref = useReveal();
  const steps = [{
    year: "2019",
    title: "One classroom, ten students",
    body: "Started in a borrowed room with second-hand laptops and a lot of hope."
  }, {
    year: "2021",
    title: "Going national",
    body: "Expanded to 12 cities with a fully scholarship-backed beginner curriculum."
  }, {
    year: "2023",
    title: "Alumni become mentors",
    body: "Our first graduates returned as paid mentors — closing the loop."
  }, {
    year: "2026",
    title: "40 cities and growing",
    body: "Today we serve 2,500+ active students with a 1:6 mentor ratio."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "story", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal mx-auto max-w-5xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground", children: "Our journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-semibold leading-tight sm:text-5xl", children: [
        "From one room to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "forty cities." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" }),
      steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
        animationDelay: `${i * 0.1}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-10 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]", children: [
          i + 1,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-1 rounded-full border border-[color:var(--gold)]/40 animate-[spin-slow_28s_linear_infinite]" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold text-[color:var(--gold)]", children: s.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-1 font-display text-lg font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.body })
      ] }, s.year))
    ] })
  ] }) });
}
function Testimonial() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card p-10 sm:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -right-4 -top-4 h-32 w-32 text-primary/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-[color:var(--gold)]", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-6 font-display text-2xl leading-relaxed sm:text-3xl", children: `"I walked in not knowing what a function was. A year later I shipped my first app — and I'm mentoring three students of my own."` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-[image:var(--gradient-gold)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Aanya R." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Alumna, Class of 2024 · Software Engineer" })
        ] })
      ] })
    ] })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[image:var(--gradient-hero)] p-10 text-center shadow-[var(--shadow-elegant)] sm:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--gold)]/40 blur-3xl animate-[breathe_6s_ease-in-out_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/15 blur-3xl animate-[breathe_8s_ease-in-out_infinite]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl font-semibold text-primary-foreground sm:text-4xl", children: "Be part of her story." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-primary-foreground/80", children: "Volunteer, donate, or simply share our mission. Every gesture lifts a future leader." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105", children: [
      "Get Involved ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative mt-10 border-t border-border/60 bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VenusBloom, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold", children: "She Can Foundation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: "A nonprofit nurturing the next generation of female leaders in tech — free, joyful, and built around her pace." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [Instagram, Twitter, Linkedin, Github].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "social", className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3 text-sm", children: ["About", "Programs", "Mentors", "Stories", "Press"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-muted-foreground transition-colors hover:text-foreground", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Get involved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3 text-sm", children: ["Volunteer", "Donate", "Become a mentor", "Partner with us", "Careers"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-muted-foreground transition-colors hover:text-foreground", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Reach us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 text-[color:var(--gold)]" }),
            " hello@shecan.org"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 text-[color:var(--gold)]" }),
            " +91 80 4567 8901"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-[color:var(--gold)]" }),
            " Bengaluru · Mumbai · Delhi"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-5 flex overflow-hidden rounded-full border border-border bg-background focus-within:border-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Your email", className: "flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "flex items-center gap-1 bg-[image:var(--gradient-hero)] px-4 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105", children: [
            "Join ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " She Can Foundation. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-foreground", children: "Code of conduct" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5", children: [
        "Made with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" }),
        " for her."
      ] })
    ] })
  ] }) });
}
export {
  Landing as component
};
