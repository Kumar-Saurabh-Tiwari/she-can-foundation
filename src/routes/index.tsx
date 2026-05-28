import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Sparkles, Heart, BookOpen } from "lucide-react";

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
  const aboutRef = useReveal<HTMLDivElement>();
  const valuesRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full">
        <div className="glass border-b border-border/40">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] shadow-[var(--shadow-glow)] transition-transform group-hover:scale-110">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                She Can <span className="text-gradient">Foundation</span>
              </span>
            </a>
            <div className="flex items-center gap-2 sm:gap-6">
              <a href="#about" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">About</a>
              <a href="#values" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Values</a>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-[color:var(--gold)]/25 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
              style={{ animation: "var(--animate-fade-in)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              A nonprofit nurturing women in tech
            </div>
            <h1
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animation: "var(--animate-fade-up)" }}
            >
              Empowering the{" "}
              <span className="text-gradient">Leaders of Tomorrow</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animation: "var(--animate-fade-up)", animationDelay: "0.15s" }}
            >
              We build safe, joyful spaces where young women discover their voice in
              technology — learning, coding, and growing together at their own pace.
            </p>
            <div
              className="mt-10 flex flex-wrap items-center gap-4"
              style={{ animation: "var(--animate-fade-up)", animationDelay: "0.3s" }}
            >
              <a
                href="#about"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[image:var(--gradient-hero)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Join Our Mission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#values"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-card"
              >
                Learn More
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              {[
                { n: "2.5k+", l: "Students" },
                { n: "120+", l: "Mentors" },
                { n: "40", l: "Cities" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-semibold text-gradient">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative" style={{ animation: "var(--animate-fade-in)", animationDelay: "0.4s" }}>
            <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-hero)] opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/40 p-2 backdrop-blur-xl shadow-[var(--shadow-elegant)] animate-[float_7s_ease-in-out_infinite]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Diverse group of young women learning together"
                className="h-full w-full rounded-[1.6rem] object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass border border-border/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--gold)]/20">
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

      {/* About */}
      <section id="about" className="relative py-28">
        <div ref={aboutRef} className="reveal mx-auto max-w-3xl px-6 text-center">
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
      </section>

      {/* Values */}
      <section id="values" className="py-24">
        <div ref={valuesRef} className="reveal mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Inspire", body: "Stories, mentors, and role models that show what's possible." },
            { icon: BookOpen, title: "Educate", body: "Free, beginner-friendly coding curricula taught with patience." },
            { icon: Heart, title: "Uplift", body: "Community circles built on kindness, courage, and curiosity." },
          ].map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-hero)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-gold)] text-primary">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[image:var(--gradient-hero)] p-10 text-center shadow-[var(--shadow-elegant)] sm:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--gold)]/40 blur-3xl" />
          <h3 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Be part of her story.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Volunteer, donate, or simply share our mission. Every gesture lifts a future leader.
          </p>
          <a
            href="#top"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Get Involved <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[image:var(--gradient-hero)]">
              <Sparkles className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold">She Can Foundation</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#values" className="transition-colors hover:text-foreground">Values</a>
            <a href="#top" className="transition-colors hover:text-foreground">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} She Can Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
