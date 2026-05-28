import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VenusBloom } from "@/components/VenusBloom";
import { useReveal } from "@/hooks/use-reveal";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Sparkles,
  Code2,
  Users,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Quote,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "She Can Foundation — Empowering the Leaders of Tomorrow" },
      {
        name: "description",
        content:
          "She Can Foundation creates beginner-friendly spaces where young women learn, code, and grow into the next generation of leaders in tech.",
      },
      { property: "og:title", content: "She Can Foundation" },
      {
        property: "og:description",
        content: "Empowering the leaders of tomorrow through education, mentorship, and community.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Values />
      <Story />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="glass border-b border-border/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform group-hover:rotate-12 group-hover:scale-110">
              <VenusBloom className="h-5 w-5" />
              <span className="absolute -inset-1 rounded-full border border-[color:var(--gold)]/50 animate-[spin-slow_28s_linear_infinite]" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              She Can <span className="text-gradient">Foundation</span>
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-6">
            <a href="#about" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">About</a>
            <a href="#values" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Values</a>
            <a href="#story" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Stories</a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-28 sm:pt-44 sm:pb-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_68%)] animate-[pan_26s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, color-mix(in oklab, var(--gold) 40%, transparent), transparent 48%), radial-gradient(circle at 78% 18%, color-mix(in oklab, var(--primary) 45%, transparent), transparent 50%), radial-gradient(circle at 70% 70%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 55%)",
          backgroundSize: "180% 180%",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-[drift_16s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -right-36 top-44 h-96 w-96 rounded-full bg-[color:var(--gold)]/30 blur-3xl animate-[drift_20s_ease-in-out_infinite_reverse]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-[breathe_9s_ease-in-out_infinite]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="relative">
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[color:var(--gold)]/15 blur-3xl animate-[breathe_11s_ease-in-out_infinite]" />
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur" style={{ animation: "var(--animate-fade-in)" }}>
            <VenusBloom className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            A nonprofit nurturing women in tech
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={{ animation: "var(--animate-fade-up)" }}>
            Empowering the{" "}
            <span className="relative inline-block text-gradient">
              Leaders of Tomorrow
              <span className="pointer-events-none absolute inset-x-0 -bottom-2 h-2 rounded-full bg-[image:var(--gradient-gold)] opacity-50 blur-sm" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animation: "var(--animate-fade-up)", animationDelay: "0.15s" }}>
            We build safe, joyful spaces where young women discover their voice in
            technology — learning, coding, and growing together at their own pace.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4" style={{ animation: "var(--animate-fade-up)", animationDelay: "0.3s" }}>
            <a href="#about" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-hero)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Join Our Mission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-card">
              Read Their Stories
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8" style={{ animation: "var(--animate-fade-up)", animationDelay: "0.45s" }}>
            {[
              { n: "2.5k+", l: "Students" },
              { n: "120+", l: "Mentors" },
              { n: "40", l: "Cities" },
            ].map((s) => (
              <div key={s.l} className="min-w-[92px]">
                <div className="font-display text-3xl font-semibold text-gradient">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative" style={{ animation: "var(--animate-fade-in)", animationDelay: "0.4s" }}>
          <div className="pointer-events-none absolute -inset-6 rounded-[2.2rem] bg-[image:var(--gradient-hero)] opacity-30 blur-3xl animate-[breathe_8s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -inset-10 animate-[orbit_20s_linear_infinite]">
            <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[color:var(--gold)] shadow-[0_0_18px_rgba(232,184,74,0.6)]" />
          </div>
          {/* floating accent chip */}
          <div className="absolute -top-6 -left-6 z-10 flex items-center gap-2 rounded-2xl glass border border-border/60 px-4 py-2.5 shadow-[var(--shadow-elegant)] animate-[float_6s_ease-in-out_infinite]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-gold)]">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="text-xs">
              <div className="font-semibold leading-tight">Live cohort</div>
              <div className="text-muted-foreground">Spring 2026</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 z-10 flex items-center gap-2 rounded-2xl glass border border-border/60 px-4 py-2.5 shadow-[var(--shadow-elegant)] animate-[float_8s_ease-in-out_infinite] [animation-delay:1s]">
            <div className="flex -space-x-2">
              {["#c4a484", "#9b6dc4", "#e8b84a"].map((c, i) => (
                <span key={i} className="h-6 w-6 rounded-full border-2 border-card" style={{ background: c }} />
              ))}
            </div>
            <span className="text-xs font-medium">+842 joined this month</span>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 p-2 backdrop-blur-xl shadow-[var(--shadow-elegant)] animate-[float_10s_ease-in-out_infinite]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="Diverse group of young women learning together"
              className="h-full w-full rounded-[1.6rem] object-cover aspect-[4/5] transition-transform duration-[4s] group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-0 mix-blend-screen animate-[shine_7s_ease-in-out_infinite] group-hover:opacity-70" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass border border-border/60 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--gold)]/20 animate-[pulse-glow_4s_ease-in-out_infinite]">
                  <Heart className="h-5 w-5 text-[color:var(--gold)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Built with love</div>
                  <div className="text-xs text-muted-foreground">For every girl, everywhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const words = ["Learn", "Code", "Lead", "Create", "Belong", "Grow", "Inspire", "Build", "Rise", "Together"];
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-card/30 py-6">
      <div className="flex w-max gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl font-medium text-muted-foreground/70">
            {w}
            <VenusBloom className="h-5 w-5 text-[color:var(--gold)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const ref = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-28">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5" />
          Our Mission
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          A place to <span className="text-gradient">learn, code, and grow</span> — without the pressure.
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          We believe in creating opportunities where students can learn, code, and grow
          without feeling pressured. Our beginner-friendly environment is designed to
          nurture the next generation of female leaders in tech.
        </p>
      </div>

      <div ref={ref2} className="reveal mx-auto mt-20 grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-gold)] opacity-25 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
            alt="Young women collaborating around a laptop"
            className="relative w-full rounded-[1.8rem] border border-border/60 object-cover aspect-[4/3] shadow-[var(--shadow-elegant)]"
          />
        </div>
        <div className="space-y-6">
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            Built around <span className="text-gradient">her pace</span>, her voice, her story.
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            She Can Foundation began in a single classroom with ten students and a
            second-hand laptop. Today, we run free cohorts across 40 cities — from
            beginner Python evenings to portfolio-grade web projects mentored by women
            who have walked the same path.
          </p>
          <ul className="space-y-3">
            {[
              "100% free, scholarship-backed curriculum",
              "1:6 mentor-to-student ratio with weekly 1-on-1s",
              "Hardware, internet stipends, and childcare support",
              "A lifelong alumni network across 40 cities",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
function Values() {
  const ref = useReveal<HTMLDivElement>();
  const values = [
    { icon: Sparkles, title: "Inspire", body: "Stories, mentors, and role models that show what's possible — every day, in every cohort." },
    { icon: BookOpen, title: "Educate", body: "Free, beginner-friendly coding curricula taught with patience and zero gatekeeping." },
    { icon: Heart, title: "Uplift", body: "Community circles built on kindness, courage, and curiosity — never competition." },
    { icon: Code2, title: "Build", body: "From first 'hello world' to shipped portfolio projects, mentored end to end." },
    { icon: Users, title: "Belong", body: "A lifelong alumni network where every voice is heard and every win is shared." },
    { icon: Lightbulb, title: "Lead", body: "We don't just teach skills — we cultivate the confidence to take up space." },
  ];
  return (
    <section id="values" className="py-24">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Star className="h-3.5 w-3.5" /> What we stand for
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Six promises we keep <span className="text-gradient">to every student.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-hero)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-gold)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-30" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-gold)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STORY / TIMELINE ---------- */
function Story() {
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    { year: "2019", title: "One classroom, ten students", body: "Started in a borrowed room with second-hand laptops and a lot of hope." },
    { year: "2021", title: "Going national", body: "Expanded to 12 cities with a fully scholarship-backed beginner curriculum." },
    { year: "2023", title: "Alumni become mentors", body: "Our first graduates returned as paid mentors — closing the loop." },
    { year: "2026", title: "40 cities and growing", body: "Today we serve 2,500+ active students with a 1:6 mentor ratio." },
  ];
  return (
    <section id="story" className="py-24">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Our journey
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            From one room to <span className="text-gradient">forty cities.</span>
          </h2>
        </div>
        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.year} className="relative" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-5 flex h-10 items-center">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                  {i + 1}
                  <span className="absolute -inset-1 rounded-full border border-[color:var(--gold)]/40 animate-[spin-slow_28s_linear_infinite]" />
                </span>
              </div>
              <div className="font-display text-sm font-semibold text-[color:var(--gold)]">{s.year}</div>
              <h4 className="mt-1 font-display text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIAL ---------- */
function Testimonial() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="px-6 py-24">
      <div ref={ref} className="reveal relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card p-10 sm:p-16">
        <Quote className="absolute -right-4 -top-4 h-32 w-32 text-primary/10" />
        <div className="relative">
          <div className="flex gap-1 text-[color:var(--gold)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
            "I walked in not knowing what a function was. A year later I shipped my
            first app — and I'm mentoring three students of my own."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[image:var(--gradient-gold)]" />
            <div>
              <div className="font-semibold">Aanya R.</div>
              <div className="text-sm text-muted-foreground">Alumna, Class of 2024 · Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[image:var(--gradient-hero)] p-10 text-center shadow-[var(--shadow-elegant)] sm:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--gold)]/40 blur-3xl animate-[breathe_6s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/15 blur-3xl animate-[breathe_8s_ease-in-out_infinite]" />
        <h3 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
          Be part of her story.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Volunteer, donate, or simply share our mission. Every gesture lifts a future leader.
        </p>
        <a href="#top" className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105">
          Get Involved <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <VenusBloom className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">She Can Foundation</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A nonprofit nurturing the next generation of female leaders in tech — free,
              joyful, and built around her pace.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Explore</div>
            <ul className="mt-4 space-y-3 text-sm">
              {["About", "Programs", "Mentors", "Stories", "Press"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Get involved</div>
            <ul className="mt-4 space-y-3 text-sm">
              {["Volunteer", "Donate", "Become a mentor", "Partner with us", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">Reach us</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> hello@shecan.org</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> +91 80 4567 8901</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Bengaluru · Mumbai · Delhi</li>
            </ul>
            <form className="mt-5 flex overflow-hidden rounded-full border border-border bg-background focus-within:border-primary">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                className="flex items-center gap-1 bg-[image:var(--gradient-hero)] px-4 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Join <ArrowRight className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} She Can Foundation. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Code of conduct</a>
          </div>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" /> for her.
          </p>
        </div>
      </div>
    </footer>
  );
}
