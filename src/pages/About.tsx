import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Section } from "./Home";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Target, Eye, Heart, Rocket, Workflow, GitBranch, ArrowRight } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — SK Software Solutions";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-24 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Engineering the future of <span className="text-gradient-brand">digital products</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            SK Software Solutions is a modern technology company helping startups, enterprises and healthcare organizations transform ideas into scalable digital products.
          </p>
        </div>
      </section>

      <Section eyebrow="Our DNA" title="Mission, vision & values">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, title: "Mission", body: "Empower every organization with intelligent software that compounds business value over time." },
            { icon: Eye, title: "Vision", body: "Be the most trusted technology partner for ambitious teams building the next decade of software." },
            { icon: Heart, title: "Values", body: "Craftsmanship, transparency, ownership, curiosity and long-term partnership over short-term wins." },
          ].map((v) => (
            <Card key={v.title} className="glass p-7 hover-lift border-border/60">
              <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center shadow-glow mb-4">
                <v.icon className="h-5 w-5 text-brand-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Founder story" title="Why SK Software exists">
        <Card className="glass p-8 md:p-12 max-w-3xl mx-auto border-border/60">
          <p className="text-muted-foreground leading-relaxed">
            SK Software Solutions was founded with a simple idea: great software shouldn't be a luxury reserved for the largest companies. After years building products for both nimble startups and global enterprises, our founder set out to create a studio that delivers the same craftsmanship and engineering depth — at the speed modern businesses demand. Today the team partners with founders, product leaders and CIOs to ship AI-powered platforms, custom software and digital products that move the needle.
          </p>
        </Card>
      </Section>

      <Section eyebrow="How we work" title="Team collaboration & methodology">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: Workflow, title: "Team collaboration", body: "Shared Slack channels, weekly demos, transparent Notion docs and a dedicated delivery lead per engagement." },
            { icon: GitBranch, title: "Agile methodology", body: "Two-week sprints with discovery, design, build, QA and ship rituals — predictable cadence, zero surprises." },
          ].map((v) => (
            <Card key={v.title} className="glass p-7 hover-lift border-border/60">
              <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center shadow-glow mb-4">
                <v.icon className="h-5 w-5 text-brand-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="What's next" title="Future goals">
        <div className="max-w-3xl mx-auto text-center text-muted-foreground">
          <p>
            We're investing heavily in generative AI, agentic systems and industry-specific platforms — particularly in healthcare, finance and SaaS. Our goal: become the go-to engineering partner for any team ready to ship AI-native products to market.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
              <Link to="/contact">Partner with us <Rocket className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
