import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Section } from "./Home";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Brain, Code2, Smartphone, Cloud, HeartPulse, Cog,
  CheckCircle2, Sparkles, Crown, ShieldCheck, BadgeCheck, Wallet,
  Headphones, Layers, Gauge, Database, Award,
} from "lucide-react";



const groups = [
  {
    icon: Brain, slug: "ai",
    title: "AI & Machine Learning",
    overview: "Build intelligent systems — from custom models and chatbots to predictive analytics and LLM-powered applications.",
    items: ["Custom AI Solutions", "Chatbots & Copilots", "Predictive Analytics", "LLM Applications", "RAG Systems"],
    benefits: ["Faster decision-making", "Automated workflows", "Personalized experiences"],
    process: ["Discovery", "Data Audit", "Model Design", "Training & Eval", "Deploy & Monitor"],
    tech: ["Python", "OpenAI", "LangChain", "TensorFlow", "Pinecone"],
  },
  {
    icon: Code2, slug: "web",
    title: "Web Development",
    overview: "High-performance websites, enterprise platforms, portals and dashboards built with modern frameworks.",
    items: ["Business Websites", "Enterprise Platforms", "Portals", "Dashboards"],
    benefits: ["Elite Core Web Vitals", "SEO-first architecture", "Conversion optimized"],
    process: ["Strategy", "Design", "Build", "QA", "Launch"],
    tech: ["React", "Next.js", "TanStack", "Node.js", "PostgreSQL"],
  },
  {
    icon: Smartphone, slug: "mobile",
    title: "Mobile App Development",
    overview: "Native and cross-platform mobile experiences engineered for performance, accessibility and delight.",
    items: ["Android Apps", "iOS Apps", "Flutter Development"],
    benefits: ["Single codebase", "Native performance", "Faster time to market"],
    process: ["UX Research", "Prototype", "Build", "Beta", "Release"],
    tech: ["Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    icon: Cog, slug: "custom",
    title: "Custom Software Development",
    overview: "ERP, CRM and bespoke platforms that automate your operations and unlock new revenue streams.",
    items: ["ERP Systems", "CRM Systems", "Business Automation"],
    benefits: ["Tailored workflows", "Lower opex", "Compounding ROI"],
    process: ["Discover", "Architect", "Build", "Integrate", "Scale"],
    tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Cloud, slug: "cloud",
    title: "Cloud & DevOps",
    overview: "Cloud-native architecture, CI/CD pipelines and zero-downtime migrations on AWS and beyond.",
    items: ["AWS", "Docker", "CI/CD Pipelines", "Cloud Migration"],
    benefits: ["99.99% uptime", "Lower cloud spend", "Faster releases"],
    process: ["Audit", "Plan", "Migrate", "Automate", "Observe"],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    icon: HeartPulse, slug: "healthcare",
    title: "Healthcare Solutions",
    overview: "Modern healthcare software: hospital management, EHR/EMR, telemedicine and healthcare analytics.",
    items: ["Hospital Management Systems", "EHR / EMR", "Telemedicine", "Healthcare Analytics"],
    benefits: ["HIPAA-aware design", "Better patient outcomes", "Operational efficiency"],
    process: ["Compliance", "Design", "Integrate", "Validate", "Deploy"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "HL7/FHIR"],
  },
];

const plans = [
  {
    name: "Basic Website Package",
    tagline: "Perfect for startups & local businesses",
    price: "₹35,000",
    cta: "Get Started",
    highlight: false,
    features: [
      "Professional Business Website",
      "Mobile Responsive Design",
      "WhatsApp Integration",
      "Contact Form Integration",
      "Domain Setup Assistance",
      "Hosting Setup Assistance",
      "Google Maps Integration",
      "SEO Basics",
      "Social Media Links",
      "Swiggy Integration (if applicable)",
      "Zomato Integration (if applicable)",
      "5–10 Website Pages",
      "Inquiry Lead Form",
      "Basic Analytics Setup",
    ],
  },
  {
    name: "Advanced Business Package",
    tagline: "For growing businesses scaling online",
    price: "₹60,000",
    cta: "Choose Advanced",
    highlight: false,
    badge: "Everything in Basic +",
    features: [
      "Custom UI/UX Design",
      "Blog System",
      "Admin Dashboard",
      "Customer Management",
      "Advanced SEO",
      "Google Business Profile Setup",
      "Lead Tracking",
      "Advanced Forms",
      "Booking System",
      "Email Notifications",
      "CRM Integration",
      "Speed Optimization",
      "Security Enhancements",
    ],
  },
  {
    name: "Pro Enterprise Package",
    tagline: "Full custom platform for serious businesses",
    price: "₹2,00,000",
    cta: "Choose Pro",
    highlight: true,
    badge: "Everything in Advanced +",
    features: [
      "Custom Backend Development",
      "Payment Gateway Integration",
      "User Authentication",
      "Customer Portal",
      "Admin Portal",
      "Database Development",
      "AI Features",
      "API Integrations",
      "Cloud Deployment",
      "E-Commerce Features",
      "Custom Business Automation",
      "Analytics Dashboard",
      "Scalability Architecture",
      "Dedicated Support",
    ],
  },
];

const trust = [
  { icon: BadgeCheck, title: "Project Delivery Guarantee", desc: "Every engagement is backed by clear milestones, written commitments and on-time delivery with quality you can verify at every sprint." },
  { icon: ShieldCheck, title: "Secure Development Process", desc: "Security is built into every layer — secure coding standards, encrypted data flows, RBAC, audit logging and continuous vulnerability checks." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden costs. Fixed-scope packages with itemized inclusions so you always know exactly what you are paying for and what you receive." },
  { icon: Headphones, title: "Dedicated Support", desc: "Direct access to engineers via WhatsApp, email and call. We treat your project as our own — long after launch." },
  { icon: Layers, title: "Modern Technology Stack", desc: "React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, Firebase, Supabase and AI APIs — chosen for performance and longevity." },
  { icon: Gauge, title: "Performance Optimization", desc: "Lighthouse-grade scores, lazy loading, image optimization, code splitting and CDN delivery so your product feels instant on every device." },
  { icon: Database, title: "Scalable Architecture", desc: "Cloud-native, modular systems engineered to handle 10× growth — from your first 100 users to your first million without re-platforming." },
  { icon: Award, title: "Quality Assurance Process", desc: "Manual + automated testing, code reviews, staging environments and structured QA cycles ensure every release is stable, fast and reliable." },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "Services & Pricing — AI, Web, Mobile, SaaS & Cloud | SK Software";
  }, []);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-24 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            End-to-end <span className="text-gradient-brand">software services</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI prototypes to enterprise platforms — one senior team, every capability you need.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <Section eyebrow="Pricing" title="Transparent packages, premium delivery" description="Three carefully designed plans built around real business needs. No hidden costs. Upgrade anytime as you grow.">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div key={p.name} className={`relative ${p.highlight ? "md:-mt-4 md:mb-4" : ""}`}>
              {p.highlight && (
                <>
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-brand opacity-60 blur-md animate-pulse-glow pointer-events-none" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-brand text-brand-foreground text-[11px] font-bold shadow-glow">
                      <Crown className="h-3 w-3" /> MOST POPULAR
                    </span>
                  </div>
                </>
              )}
              <Card className={`relative h-full flex flex-col p-7 hover-lift transition-all ${p.highlight ? "glass border-brand/40 shadow-glow" : "glass border-border/60"}`}>
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${p.highlight ? "text-gradient-brand" : ""}`}>{p.price}</span>
                    <span className="text-xs text-muted-foreground">one-time</span>
                  </div>
                  {p.badge && (
                    <div className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-brand">
                      {p.badge}
                    </div>
                  )}
                </div>
                <ul className="mt-6 space-y-2.5 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-none ${p.highlight ? "text-brand" : "text-brand/80"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={`mt-7 w-full ${p.highlight ? "bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90" : ""}`}
                  variant={p.highlight ? "default" : "outline"}
                >
                  <Link to="/contact">{p.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </Card>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          Need something custom? <Link to="/contact" className="text-brand hover:underline">Request a tailored quote →</Link>
        </p>
      </Section>

      <Section title="What we deliver" eyebrow="Capabilities" description="Six service lines. One accountable team. Every engagement comes with senior engineering ownership.">
        <div className="space-y-10">
          {groups.map((g) => (
            <Card key={g.title} id={g.slug} className="glass p-7 md:p-10 border-border/60 hover-lift">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-brand grid place-items-center shadow-glow mb-4">
                    <g.icon className="h-6 w-6 text-brand-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{g.overview}</p>
                  <Button asChild className="mt-5 bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90" size="sm">
                    <Link to="/contact">Get a quote <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
                  </Button>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  <Block title="What's included" items={g.items} />
                  <Block title="Benefits" items={g.benefits} />
                  <Block title="Process" items={g.process} ordered />
                  <Block title="Technologies" items={g.tech} pill />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* TRUST */}
      <Section eyebrow="Why trust us" title="Built on commitments, not promises" description="Eight pillars that define how SK Software Solutions delivers reliable, secure and scalable digital products.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trust.map((t) => (
            <Card key={t.title} className="glass p-6 hover-lift border-border/60 group">
              <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center shadow-glow mb-4 group-hover:scale-110 transition">
                <t.icon className="h-5 w-5 text-brand-foreground" />
              </div>
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="container mx-auto max-w-7xl px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
          <div className="relative">
            <Sparkles className="h-8 w-8 text-brand mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Not sure which package fits?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Get a free 30-minute consultation. We'll recommend the right plan for your business and budget.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass">
                <a href="https://wa.me/918796530294" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, items, ordered, pill }: { title: string; items: string[]; ordered?: boolean; pill?: boolean }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{title}</div>
      {pill ? (
        <div className="flex flex-wrap gap-1.5">
          {items.map((i) => <span key={i} className="text-[11px] px-2 py-1 rounded-md bg-secondary">{i}</span>)}
        </div>
      ) : (
        <ul className="space-y-1.5 text-sm">
          {items.map((i, idx) => (
            <li key={i} className="flex items-start gap-2">
              {ordered ? (
                <span className="h-5 w-5 rounded-full bg-gradient-brand text-brand-foreground text-[10px] grid place-items-center flex-none font-semibold">{idx + 1}</span>
              ) : (
                <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 flex-none" />
              )}
              <span>{i}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
