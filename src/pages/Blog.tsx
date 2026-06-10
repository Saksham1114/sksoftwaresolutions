import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const categories = ["All","Artificial Intelligence","Software Development","Mobile Development","Cloud Computing","Startups","Automation","Healthcare Technology"] as const;
const posts = [
  { title: "Building Production-Ready RAG Systems in 2026", category: "Artificial Intelligence", date: "May 24, 2026", excerpt: "What we learned shipping retrieval-augmented systems for enterprise clients — chunking, evaluation and guardrails.", color: "from-blue-500 to-purple-500" },
  { title: "The Modern SaaS Stack: A Pragmatic Guide", category: "Software Development", date: "May 18, 2026", excerpt: "Our opinionated SaaS starter — auth, billing, multi-tenancy, observability and CI/CD.", color: "from-purple-500 to-pink-500" },
  { title: "Flutter vs React Native in 2026", category: "Mobile Development", date: "May 11, 2026", excerpt: "Performance benchmarks, DX, ecosystem maturity and when to choose which.", color: "from-pink-500 to-orange-500" },
  { title: "Cutting AWS Bills by 40% Without Touching Code", category: "Cloud Computing", date: "May 4, 2026", excerpt: "Right-sizing, savings plans, Graviton and the boring wins that move the needle.", color: "from-cyan-500 to-blue-500" },
  { title: "From MVP to Series A: Engineering Trade-offs", category: "Startups", date: "Apr 27, 2026", excerpt: "How to move fast without painting your future self into a corner.", color: "from-emerald-500 to-cyan-500" },
  { title: "Workflow Automation with LLMs and n8n", category: "Automation", date: "Apr 20, 2026", excerpt: "A practical playbook for replacing repetitive ops with AI agents that ship value.", color: "from-violet-500 to-fuchsia-500" },
  { title: "HIPAA-Aware Architectures for Modern Healthcare", category: "Healthcare Technology", date: "Apr 13, 2026", excerpt: "Patterns and pitfalls for building secure, compliant healthcare platforms.", color: "from-indigo-500 to-blue-500" },
];

export default function BlogPage() {
  useEffect(() => {
    document.title =
      "Blog — Insights on AI, Software & Cloud | SK Software";
  }, []);

  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const list =
    cat === "All"
      ? posts
      : posts.filter((p) => p.category === cat);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-24 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Insights & <span className="text-gradient-brand">engineering notes</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical guides on AI, software development, cloud and modern startup engineering.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-12">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition ${cat === c ? "bg-gradient-brand text-brand-foreground shadow-glow" : "glass hover:shadow-glow"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <Card key={p.title} className="glass overflow-hidden hover-lift border-border/60 flex flex-col cursor-pointer">
              <div className={`h-40 bg-gradient-to-br ${p.color} relative`}>
                <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Tag className="h-3 w-3" />{p.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="mt-3 font-semibold text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-brand">
                  Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-4 pb-24">
        <Card className="glass p-8 md:p-10 text-center border-border/60">
          <h2 className="text-2xl md:text-3xl font-bold">Subscribe to our newsletter</h2>
          <p className="mt-2 text-muted-foreground">Monthly. Engineering insights, AI trends and product playbooks.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" required placeholder="you@company.com" className="glass" />
            <Button type="submit" className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
              Subscribe
            </Button>
          </form>
        </Card>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="glass">
            <Link to="/contact">Have a topic to suggest? Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
