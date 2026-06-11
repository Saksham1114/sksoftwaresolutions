import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Brain, Code2, Smartphone, Cloud, Cog, Palette, HeartPulse,
  Database, Server, Sparkles, Shield, Users, Rocket, MessageSquare,
  CheckCircle2, GitBranch, Star, Building2, GraduationCap, ShoppingBag,
  Truck, Landmark, Home as HomeIcon, Store,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function HomePage() {
  useEffect(() => {
    document.title =
      "SK Software Solutions — AI, Web, Mobile & SaaS Development";
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <WhyUs />
      <Services />
      <TechStack />
      <Industries />
      <FeaturedProjects />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-60 pointer-events-none" />
      <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            AI-Powered Software Engineering
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Transforming Ideas Into{" "}
            <span className="text-gradient-brand">Intelligent Digital Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            AI solutions, web applications, mobile apps, SaaS platforms, and custom software built to accelerate business growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
              <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
  asChild
  className="bg-gradient-brand text-brand-foreground hover:opacity-90 border-0"
>
  <Link to="/portfolio">View Our Work</Link>
</Button>
</div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand" /> NDA-friendly</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-brand" /> Enterprise security</div>
          </div>
        </div>
        <div className="relative animate-scale-in">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <div className="relative glass rounded-2xl overflow-hidden shadow-glow animate-float">
            <img src={heroImg} alt="AI-powered software dashboard visualization" width={1600} height={1200} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function useCounter(target: number, duration = 1500) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setVal(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function StatItem({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-brand">
        {val}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <div className="glass rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem value={50} suffix="+" label="Projects Delivered" />
        <StatItem value={12} suffix="+" label="Industries Served" />
        <StatItem value={40} suffix="+" label="Technologies Used" />
        <StatItem value={98} suffix="%" label="Client Satisfaction" />
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */
const whyUs = [
  { icon: Users, title: "Expert Development Team", desc: "Senior engineers, designers and AI specialists with deep product DNA." },
  { icon: Brain, title: "AI-Powered Innovation", desc: "From LLM apps to RAG systems, we build the future of intelligent software." },
  { icon: GitBranch, title: "Agile Development", desc: "Two-week sprints, weekly demos, complete transparency end-to-end." },
  { icon: Server, title: "Scalable Architecture", desc: "Cloud-native systems designed to grow from MVP to millions." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Direct Slack channel, shared boards, and live progress dashboards." },
  { icon: Shield, title: "Long-Term Support", desc: "Maintenance, monitoring, and continuous improvements after launch." },
];

function WhyUs() {
  return (
    <Section eyebrow="Why SK Software" title="Engineered to win" description="Six reasons leading teams choose us as their long-term technology partner.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyUs.map((w) => (
          <Card key={w.title} className="glass p-6 hover-lift border-border/60">
            <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center shadow-glow mb-4">
              <w.icon className="h-5 w-5 text-brand-foreground" />
            </div>
            <h3 className="font-semibold text-lg">{w.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Custom models, predictive analytics, computer vision and intelligent automation." },
  { icon: Sparkles, title: "Generative AI Applications", desc: "LLM-powered copilots, content generation, voice and multimodal experiences." },
  { icon: Database, title: "LLM & RAG Systems", desc: "Vector search, retrieval-augmented pipelines and enterprise knowledge bases." },
  { icon: Code2, title: "Custom Software", desc: "ERPs, CRMs and bespoke platforms tailored to your business logic." },
  { icon: Server, title: "Web Development", desc: "Marketing sites, portals and enterprise web apps with elite performance." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native iOS, Android and cross-platform Flutter apps users love." },
  { icon: Rocket, title: "SaaS Development", desc: "Multi-tenant SaaS platforms with billing, auth and analytics built-in." },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS architecture, migrations, and cost-optimized cloud-native systems." },
  { icon: Cog, title: "DevOps & Automation", desc: "CI/CD, IaC, observability, and zero-downtime release pipelines." },
  { icon: Palette, title: "UI/UX Design", desc: "Research-led design systems that turn complexity into clarity." },
  { icon: HeartPulse, title: "Healthcare Technology", desc: "HMS, EHR/EMR, telemedicine and HIPAA-aware healthcare platforms." },
];

function Services() {
  return (
    <Section eyebrow="What we do" title="Services built for outcomes" description="A full-stack capability set, delivered by a senior team focused on measurable impact.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Card key={s.title} className="glass p-6 hover-lift group border-border/60">
            <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center shadow-glow mb-4 group-hover:scale-110 transition">
              <s.icon className="h-5 w-5 text-brand-foreground" />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <Link to="/services" className="inline-flex items-center text-sm font-medium mt-4 text-brand hover:gap-2 gap-1 transition-all">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Tech stack ---------------- */
const stack = ["React","Next.js","Flutter","Node.js","Python","FastAPI","MongoDB","PostgreSQL","MySQL","AWS","Docker","Kubernetes","OpenAI","LangChain","TensorFlow"];

function TechStack() {
  return (
    <Section eyebrow="Technology stack" title="Modern tools, battle-tested" description="We pick the right tool for the job — from rapid prototyping to enterprise-scale deployments.">
      <div className="flex flex-wrap justify-center gap-3">
        {stack.map((t) => (
          <div key={t} className="glass px-5 py-3 rounded-xl text-sm font-medium hover-lift cursor-default">
            {t}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Industries ---------------- */
const industries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "E-Commerce" },
  { icon: Rocket, name: "Startups" },
  { icon: Truck, name: "Logistics" },
  { icon: Landmark, name: "Finance" },
  { icon: Building2, name: "Enterprise" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: Store, name: "Retail" },
];

function Industries() {
  return (
    <Section eyebrow="Industries" title="Trusted across sectors" description="We bring domain expertise across regulated and fast-moving industries.">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {industries.map((i) => (
          <div key={i.name} className="glass rounded-xl p-5 flex flex-col items-center gap-2 hover-lift">
            <i.icon className="h-7 w-7 text-brand" />
            <div className="text-sm font-medium">{i.name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Featured Projects ---------------- */
export const projects = [
  { title: "AI Resume Screener & Analyzer", category: "AI Solution", tag: "Internal Project", features: ["Resume Parsing","Candidate Ranking","JD Matching","ATS Optimization"], color: "from-blue-500 to-purple-500" },
  { title: "Intelligent PDF Summarizer", category: "AI Application", tag: "Demo Solution", features: ["AI Summarization","OCR Support","Multi-Language","Text-to-Speech"], color: "from-purple-500 to-pink-500" },
  { title: "Loan Approval Prediction", category: "Machine Learning", tag: "Product Showcase", features: ["Approval Prediction","Risk Assessment","Analytics Dashboard"], color: "from-indigo-500 to-blue-500" },
  { title: "Regional Delicacies Platform", category: "Web Application", tag: "Demo Solution", features: ["Recipe Management","Multi-language","Interactive UI"], color: "from-pink-500 to-orange-500" },
  { title: "Online Job Portal", category: "SaaS Platform", tag: "Product Showcase", features: ["Job Listings","Candidate Dashboard","Employer Management"], color: "from-cyan-500 to-blue-500" },
  { title: "Hospital Management System", category: "Enterprise Software", tag: "Internal Project", features: ["Patient Management","Appointments","Billing","Reports"], color: "from-violet-500 to-fuchsia-500" },
];

function FeaturedProjects() {
  return (
    <Section eyebrow="Featured work" title="Projects that ship outcomes" description="A snapshot of internal projects, demos and product showcases across AI, SaaS and enterprise software.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.title} className="glass overflow-hidden hover-lift border-border/60 group">
            <div className={`h-40 bg-gradient-to-br ${p.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
              <div className="absolute top-3 right-3 text-[10px] font-medium px-2 py-1 rounded-full glass">{p.tag}</div>
              <div className="absolute bottom-3 left-4 text-xs font-medium text-white/90">{p.category}</div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.features.map((f) => (
                  <li key={f} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{f}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button
  asChild
  variant="default"
  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg hover:opacity-90"
>
  <Link to="/portfolio">
    View full portfolio <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>
      </div>
    </Section>
  );
}

/* ---------------- Case Studies ---------------- */
const cases = [
  {
    title: "Reducing recruiter screening time by 78%",
    challenge: "Manual resume screening was slow, biased and inconsistent across hiring teams.",
    solution: "Built an AI parser + ranker that scores candidates against job descriptions in real-time.",
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    outcome: "Cut average time-to-shortlist from 9 days to 2 days.",
  },
  {
    title: "Modernizing hospital operations end-to-end",
    challenge: "Legacy paper-based workflows caused billing errors and patient bottlenecks.",
    solution: "Designed a unified HMS covering patients, appointments, billing and analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome: "30% faster patient throughput and 99.99% billing accuracy.",
  },
];

function CaseStudies() {
  return (
    <Section eyebrow="Case studies" title="Real problems, measurable wins" description="How we transform challenges into engineered, scalable solutions.">
      <div className="grid lg:grid-cols-2 gap-6">
        {cases.map((c) => (
          <Card key={c.title} className="glass p-7 hover-lift border-border/60">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <div className="mt-5 grid gap-4 text-sm">
              <CaseRow label="Challenge" text={c.challenge} />
              <CaseRow label="Solution" text={c.solution} />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5">Technologies</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tech.map((t) => <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary">{t}</span>)}
                </div>
              </div>
              <CaseRow label="Outcome" text={c.outcome} highlight />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
function CaseRow({ label, text, highlight }: { label: string; text: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{label}</div>
      <p className={highlight ? "text-foreground font-medium" : "text-muted-foreground"}>{text}</p>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  { name: "Alex Morgan", role: "CTO, FinTech Startup", quote: "SK Software delivered our MVP in 6 weeks. The code quality and AI expertise are world-class." },
  { name: "Priya Raman", role: "Director of Ops, Health Group", quote: "Their team rebuilt our hospital management stack with zero downtime. Outstanding partner." },
  { name: "Daniel Chen", role: "Founder, SaaS Platform", quote: "From design to deploy, every milestone shipped on time. They feel like part of our team." },
];

function Testimonials() {
  return (
    <Section eyebrow="Testimonials" title="What clients say" description="Placeholder testimonials — easily editable as real client feedback comes in.">
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <Card key={t.name} className="glass p-6 hover-lift border-border/60">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-brand text-brand" />)}
            </div>
            <p className="text-sm leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-brand-foreground font-semibold">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CTA ---------------- */
function CtaBanner() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-20">
      <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to build something <span className="text-gradient-brand">extraordinary?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your idea. We'll respond within 24 hours with a clear plan, timeline and quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
              <Link to="/contact">Start your project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button
  asChild
  className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90"
>
  <Link to="/services">Explore services</Link>
</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section helper ---------------- */
export function Section({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        {eyebrow && <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-4">{eyebrow}</div>}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {description && <p className="mt-3 text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  );
}
