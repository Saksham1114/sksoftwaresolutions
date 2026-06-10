import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ExternalLink, Sparkles, Monitor, Smartphone, Layers } from "lucide-react";


type Mock =
  | "bakery"
  | "furniture"
  | "clothing"
  | "healthcare"
  | "ai"
  | "business"
  | "restaurant"
  | "realestate"
  | "gym"
  | "school"
  | "ecommerce"
  | "travel"
  | "salon"
  | "logistics"
  | "construction"
  | "hotel"
  | "corporate"
  | "startup";

type Project = {
  title: string;
  category: string;
  filter: string;
  tag: "Demo Project" | "Internal Project" | "Product Showcase";
  description: string;
  features: string[];
  tech: string[];
  device: "laptop" | "phone" | "desktop";
  mock: Mock;
  accent: string;
};

const featured: Project[] = [
  { title: "Bakery Website Demo", category: "Food & Bakery", filter: "Business", tag: "Demo Project", description: "Premium bakery storefront inspired by modern Rohini-style bakery brands — online ordering, menu management and WhatsApp checkout.", features: ["Online Ordering","Product Showcase","WhatsApp Ordering","Menu Management","Location Integration","Mobile Friendly Design"], tech: ["React","Tailwind","Node.js","WhatsApp API"], device: "laptop", mock: "bakery", accent: "from-amber-500 via-orange-500 to-rose-500" },
  { title: "Furniture Store Demo", category: "Retail & Lifestyle", filter: "E-Commerce", tag: "Demo Project", description: "Modern furniture catalog with rich category filters, inquiry forms and lead generation built for premium retail brands.", features: ["Product Catalog","Category Filters","Inquiry Forms","WhatsApp Integration","Modern Product Gallery","Lead Generation Forms"], tech: ["Next.js","TypeScript","PostgreSQL"], device: "laptop", mock: "furniture", accent: "from-amber-700 via-stone-600 to-zinc-700" },
  { title: "Clothing Store Demo", category: "Fashion & Apparel", filter: "E-Commerce", tag: "Demo Project", description: "Fashion-forward storefront featuring crisp product listings, order inquiries and a responsive shopping experience.", features: ["Product Listings","Shopping Experience","Fashion Catalog","Order Inquiry","Responsive Design","Product Showcase"], tech: ["React","Tailwind","Stripe"], device: "laptop", mock: "clothing", accent: "from-fuchsia-500 via-pink-500 to-rose-500" },
  { title: "Healthcare Management Demo", category: "Healthcare", filter: "Healthcare", tag: "Internal Project", description: "End-to-end hospital management — patients, appointments, doctor dashboards, secure reports and analytics.", features: ["Patient Management","Appointment Booking","Doctor Dashboard","Reports & Analytics","Secure Data Handling"], tech: ["React","Node.js","PostgreSQL","AWS"], device: "desktop", mock: "healthcare", accent: "from-cyan-500 via-sky-500 to-blue-600" },
  { title: "AI Resume Screener Demo", category: "AI Solution", filter: "AI", tag: "Product Showcase", description: "AI-powered resume parser that ranks candidates, matches skills to job descriptions and produces hiring analytics.", features: ["Resume Upload","AI Candidate Analysis","Skill Matching","Candidate Ranking","Dashboard Analytics"], tech: ["Python","FastAPI","OpenAI","PostgreSQL"], device: "desktop", mock: "ai", accent: "from-violet-500 via-purple-500 to-indigo-600" },
  { title: "Business Management Dashboard", category: "Enterprise SaaS", filter: "SaaS", tag: "Product Showcase", description: "Unified dashboard for employees, sales, reports and role-based access — built for growing business operations.", features: ["Employee Management","Sales Tracking","Reports","Analytics Dashboard","Role-Based Access"], tech: ["React","Node.js","MongoDB","Chart.js"], device: "desktop", mock: "business", accent: "from-emerald-500 via-teal-500 to-cyan-600" },
];

const more: Project[] = [
  { title: "Restaurant Website Demo", category: "Food & Restaurant", filter: "Business", tag: "Demo Project", description: "Digital menu, online reservations, WhatsApp ordering and food gallery for modern restaurants.", features: ["Digital Menu","Online Reservations","WhatsApp Ordering","Food Gallery","Location Integration"], tech: ["React","Tailwind","Firebase"], device: "laptop", mock: "restaurant", accent: "from-red-500 via-orange-500 to-yellow-500" },
  { title: "Real Estate Website Demo", category: "Real Estate", filter: "Business", tag: "Demo Project", description: "Property listings with smart filters, agent profiles, inquiry forms and interactive image galleries.", features: ["Property Listings","Property Search Filters","Inquiry Forms","Agent Profiles","Interactive Gallery"], tech: ["Next.js","Node.js","PostgreSQL"], device: "laptop", mock: "realestate", accent: "from-blue-600 via-indigo-600 to-slate-700" },
  { title: "Gym & Fitness Website Demo", category: "Health & Fitness", filter: "Business", tag: "Demo Project", description: "Membership plans, trainer profiles, class scheduling and online registration for fitness studios.", features: ["Membership Plans","Trainer Profiles","Online Registration","Class Scheduling","Fitness Programs"], tech: ["React","Tailwind","Node.js"], device: "phone", mock: "gym", accent: "from-lime-500 via-green-500 to-emerald-600" },
  { title: "School Management System", category: "Education", filter: "SaaS", tag: "Product Showcase", description: "Comprehensive school operations — students, attendance, parent portal, teacher dashboards and academic reports.", features: ["Student Management","Attendance Tracking","Parent Portal","Teacher Dashboard","Academic Reports"], tech: ["React","Node.js","MongoDB"], device: "desktop", mock: "school", accent: "from-indigo-500 via-blue-500 to-cyan-500" },
  { title: "E-Commerce Store Demo", category: "E-Commerce", filter: "E-Commerce", tag: "Demo Project", description: "Complete shopping experience with cart, checkout, payment integration and order tracking.", features: ["Product Catalog","Shopping Cart","Checkout Flow","Payment Integration","Order Tracking"], tech: ["Next.js","Stripe","PostgreSQL"], device: "laptop", mock: "ecommerce", accent: "from-purple-500 via-fuchsia-500 to-pink-500" },
  { title: "Travel & Tourism Website", category: "Travel", filter: "Business", tag: "Demo Project", description: "Tour packages, booking forms, destination galleries and complete travel planning workflows.", features: ["Tour Packages","Booking Forms","Destination Gallery","Inquiry Management","Travel Planning"], tech: ["React","Tailwind","Node.js"], device: "laptop", mock: "travel", accent: "from-sky-500 via-cyan-500 to-teal-500" },
  { title: "Salon & Spa Website Demo", category: "Beauty & Wellness", filter: "Business", tag: "Demo Project", description: "Appointment booking, service catalog, staff profiles and integrated customer reviews.", features: ["Appointment Booking","Service Catalog","Staff Profiles","WhatsApp Integration","Customer Reviews Section"], tech: ["React","Firebase","WhatsApp API"], device: "phone", mock: "salon", accent: "from-rose-400 via-pink-500 to-fuchsia-500" },
  { title: "Logistics Management Demo", category: "Logistics", filter: "SaaS", tag: "Product Showcase", description: "Shipment tracking, fleet management, delivery dashboards and customer self-service portal.", features: ["Shipment Tracking","Fleet Management","Delivery Dashboard","Analytics","Customer Portal"], tech: ["React","Node.js","MongoDB","Maps API"], device: "desktop", mock: "logistics", accent: "from-orange-500 via-amber-500 to-yellow-500" },
  { title: "Construction Company Website", category: "Construction", filter: "Business", tag: "Demo Project", description: "Project showcase, service pages, team profiles, portfolio gallery and lead-capture forms.", features: ["Project Showcase","Service Pages","Inquiry Forms","Team Profiles","Portfolio Gallery"], tech: ["Next.js","Tailwind"], device: "laptop", mock: "construction", accent: "from-stone-600 via-zinc-700 to-slate-800" },
  { title: "Hotel & Resort Website", category: "Hospitality", filter: "Business", tag: "Demo Project", description: "Premium room booking, gallery showcase, amenities and full reservation management.", features: ["Room Booking","Gallery Showcase","Amenities Section","Contact Integration","Reservation Management"], tech: ["Next.js","Stripe","PostgreSQL"], device: "laptop", mock: "hotel", accent: "from-emerald-600 via-teal-600 to-cyan-700" },
  { title: "Corporate Business Website", category: "Corporate", filter: "Business", tag: "Demo Project", description: "Professional company profile with services showcase, lead generation and conversion-focused design.", features: ["Company Profile","Services Showcase","Lead Generation","Contact Forms","Professional Design"], tech: ["React","Tailwind","Node.js"], device: "laptop", mock: "corporate", accent: "from-slate-700 via-blue-800 to-indigo-900" },
  { title: "Startup Landing Page Demo", category: "Startup", filter: "Business", tag: "Demo Project", description: "Conversion-optimized landing page with product showcase, lead capture and modern UI patterns.", features: ["Product Showcase","Lead Capture","Modern UI","Conversion Optimization","Responsive Design"], tech: ["React","Tailwind","Framer Motion"], device: "laptop", mock: "startup", accent: "from-violet-600 via-purple-600 to-fuchsia-600" },
];

const all: Project[] = [...featured, ...more];
const filters = ["All", "AI", "SaaS", "E-Commerce", "Healthcare", "Business"] as const;
export default function PortfolioPage() {
  
  useEffect(() => {
    document.title =
      "Portfolio — Live Website Demos by SK Software Solutions";
  }, []);
  const [active, setActive] =
  useState<(typeof filters)[number]>("All");

const list =
  active === "All"
    ? all
    : all.filter((p) => p.filter === active);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-24 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5 text-brand" /> Live Demo Showcase
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            See our solutions <span className="text-gradient-brand">in action</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A premium showcase of 18+ live website demos and product builds — each running its own industry-specific live preview inside a modern device frame.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-8">
        <SectionHeader eyebrow="Featured Showcase" title="See our solutions in action" desc="Our six flagship demo projects — interactive device previews running continuously." />
        <div className="grid md:grid-cols-2 gap-7">
          {featured.map((p) => (<ShowcaseCard key={p.title} p={p} large />))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Full Portfolio" title="Explore the complete gallery" desc="Filter by industry to find demos relevant to your business." />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${active === f ? "bg-gradient-brand text-brand-foreground shadow-glow" : "glass hover:shadow-glow"}`}>{f}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (<ShowcaseCard key={p.title} p={p} />))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
            <Link to="/contact">Have a similar project? Let's talk <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-4">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}

function ShowcaseCard({ p, large }: { p: Project; large?: boolean }) {
  const DeviceIcon = p.device === "phone" ? Smartphone : p.device === "desktop" ? Monitor : Layers;
  return (
    <Card className="glass overflow-hidden hover-lift border-border/60 group flex flex-col">
      <div className={`relative overflow-hidden ${large ? "h-72" : "h-56"} bg-gradient-to-br ${p.accent}`}>
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full glass">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE DEMO
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <span className="text-[10px] font-medium px-2 py-1 rounded-full glass">{p.tag}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <DeviceFrame device={p.device} mock={p.mock} />
        </div>
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
          <div className="h-14 w-14 rounded-full bg-white/95 grid place-items-center shadow-glow animate-pulse-glow">
            <Play className="h-6 w-6 text-foreground fill-current ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/95 text-xs">
          <DeviceIcon className="h-3.5 w-3.5" /> {p.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1.5 font-semibold">Features</div>
          <div className="flex flex-wrap gap-1.5">
            {p.features.slice(0, 4).map((f) => (<span key={f} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary">{f}</span>))}
            {p.features.length > 4 && <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary">+{p.features.length - 4}</span>}
          </div>
        </div>
        <div className="mt-3">
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1.5 font-semibold">Tech Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => <span key={t} className="text-[11px] px-2 py-0.5 rounded-md border">{t}</span>)}
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <Button asChild size="sm" className="flex-1 bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90">
            <Link to="/contact">View Demo <ExternalLink className="ml-1.5 h-3 w-3" /></Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

/* ---------------- Device Frame + Unique Domain Mocks ---------------- */
function DeviceFrame({ device, mock }: { device: Project["device"]; mock: Mock }) {
  if (device === "phone") {
    return (
      <div className="relative w-[150px] h-[260px] rounded-[28px] bg-zinc-900 border-[6px] border-zinc-800 shadow-2xl overflow-hidden">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 h-3 w-12 rounded-full bg-black z-10" />
        <div className="absolute inset-1 rounded-[22px] overflow-hidden bg-white">
          <MockScreen mock={mock} />
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full max-w-[420px]">
      <div className="rounded-t-lg bg-zinc-900 border border-zinc-800 border-b-0 p-2 shadow-2xl">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-yellow-500" />
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <div className="flex-1 ml-2 h-3 rounded-sm bg-zinc-800" />
        </div>
        <div className="aspect-[16/10] rounded-sm overflow-hidden bg-white">
          <MockScreen mock={mock} />
        </div>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-b-xl mx-[-8px]" />
    </div>
  );
}

const ANIM_STYLES = `
  @keyframes scrollUp { 0%,8% { transform: translateY(0); } 92%,100% { transform: translateY(-50%); } }
  @keyframes barGrow { 0%,100% { transform: scaleY(.4); } 50% { transform: scaleY(1); } }
  @keyframes lineFill { 0% { width: 8%; } 100% { width: 92%; } }
  @keyframes pulseDot { 0%,100% { opacity:.4; transform:scale(.9);} 50% { opacity:1; transform:scale(1.1);} }
  @keyframes hoverLift { 0%,40%,100% { transform: translateY(0); box-shadow: 0 1px 2px rgba(0,0,0,.08);} 60%,80% { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(0,0,0,.18);} }
  @keyframes cartPop { 0%,70%,100% { transform: scale(1);} 80% { transform: scale(1.4);} }
  @keyframes truckMove { 0% { transform: translateX(-20%);} 100% { transform: translateX(120%);} }
`;

function MockScreen({ mock }: { mock: Mock }) {
  const scrollClass = "animate-[scrollUp_10s_ease-in-out_infinite]";
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700">
      <style>{ANIM_STYLES}</style>
      <TopBar mock={mock} />
      <div className={`absolute inset-x-0 top-4 ${scrollClass}`}>
        <MockBody mock={mock} />
        <MockBody mock={mock} />
      </div>
    </div>
  );
}

function TopBar({ mock }: { mock: Mock }) {
  const palette: Record<Mock, { dot: string; brand: string }> = {
    bakery: { dot: "bg-amber-500", brand: "🧁" },
    furniture: { dot: "bg-stone-700", brand: "🛋" },
    clothing: { dot: "bg-pink-500", brand: "👗" },
    healthcare: { dot: "bg-cyan-500", brand: "✚" },
    ai: { dot: "bg-violet-500", brand: "✦" },
    business: { dot: "bg-emerald-500", brand: "▤" },
    restaurant: { dot: "bg-red-500", brand: "🍽" },
    realestate: { dot: "bg-blue-600", brand: "⌂" },
    gym: { dot: "bg-lime-500", brand: "💪" },
    school: { dot: "bg-indigo-500", brand: "🎓" },
    ecommerce: { dot: "bg-fuchsia-500", brand: "🛍" },
    travel: { dot: "bg-sky-500", brand: "✈" },
    salon: { dot: "bg-rose-400", brand: "✂" },
    logistics: { dot: "bg-orange-500", brand: "🚚" },
    construction: { dot: "bg-stone-700", brand: "🏗" },
    hotel: { dot: "bg-teal-600", brand: "🏨" },
    corporate: { dot: "bg-blue-800", brand: "■" },
    startup: { dot: "bg-violet-600", brand: "⚡" },
  };
  const p = palette[mock];
  return (
    <div className="absolute top-0 inset-x-0 h-4 flex items-center px-1.5 gap-1 bg-white/85 backdrop-blur border-b border-slate-200 z-10">
      <div className={`h-1.5 w-1.5 rounded-sm ${p.dot}`} />
      <div className="text-[6px] font-bold leading-none">{p.brand}</div>
      <div className="h-1 w-6 rounded-sm bg-slate-300" />
      <div className="ml-auto flex gap-0.5">
        <div className="h-1 w-3 rounded-sm bg-slate-200" />
        <div className="h-1 w-3 rounded-sm bg-slate-200" />
        <div className={`h-1 w-3 rounded-sm ${p.dot}`} />
      </div>
    </div>
  );
}

/* ---- Tiny visual primitives ---- */
function Hero({ from, to, label, sub }: { from: string; to: string; label: string; sub?: string }) {
  return (
    <div className={`rounded h-12 bg-gradient-to-br ${from} ${to} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 30%, white, transparent 60%)" }} />
      <div className="absolute bottom-1 left-2">
        <div className="text-[7px] font-bold text-white leading-none">{label}</div>
        {sub && <div className="text-[5px] text-white/80 mt-0.5">{sub}</div>}
      </div>
      <div className="absolute bottom-1 right-1.5 text-[5px] font-semibold px-1 py-0.5 rounded bg-white/90 text-slate-800">SHOP</div>
    </div>
  );
}

function ProductCard({ from, to, label, price, emoji, hover }: { from: string; to: string; label: string; price: string; emoji?: string; hover?: boolean }) {
  return (
    <div className="rounded bg-white shadow-sm overflow-hidden" style={hover ? { animation: "hoverLift 3s ease-in-out infinite" } : undefined}>
      <div className={`h-8 bg-gradient-to-br ${from} ${to} grid place-items-center text-[10px]`}>{emoji}</div>
      <div className="p-1 space-y-0.5">
        <div className="text-[5px] font-semibold text-slate-700 leading-none">{label}</div>
        <div className="flex items-center justify-between">
          <div className="text-[5px] font-bold text-emerald-600">{price}</div>
          <div className="text-[5px] text-white bg-slate-800 rounded px-1">+</div>
        </div>
      </div>
    </div>
  );
}

function CategoryPills({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="flex gap-1 overflow-hidden">
      {items.map((i, idx) => (
        <div key={i} className={`text-[5px] font-semibold px-1.5 py-0.5 rounded-full ${idx === 0 ? `${color} text-white` : "bg-white text-slate-600 border border-slate-200"}`}>{i}</div>
      ))}
    </div>
  );
}

/* ---------------- Per-domain mock bodies ---------------- */
function MockBody({ mock }: { mock: Mock }) {
  switch (mock) {
    case "bakery": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-amber-300" to="to-rose-400" label="FRESH BAKES DAILY" sub="Cakes • Pastries • Bread" />
        <CategoryPills items={["Cakes","Pastries","Bread","Cookies"]} color="bg-amber-500" />
        <div className="grid grid-cols-3 gap-1">
          <ProductCard from="from-amber-200" to="to-pink-300" emoji="🎂" label="Choco Cake" price="₹450" hover />
          <ProductCard from="from-rose-200" to="to-amber-300" emoji="🧁" label="Cupcake" price="₹80" />
          <ProductCard from="from-yellow-200" to="to-orange-300" emoji="🥐" label="Croissant" price="₹120" />
        </div>
        <div className="flex items-center gap-1 rounded bg-white shadow-sm p-1">
          <div className="h-3 w-3 rounded bg-amber-400 grid place-items-center text-[7px]">🛒</div>
          <div className="text-[6px] font-semibold">Cart (3)</div>
          <div className="ml-auto text-[6px] font-bold text-white bg-green-500 px-1.5 py-0.5 rounded" style={{ animation: "cartPop 2.5s ease-in-out infinite" }}>WhatsApp Order</div>
        </div>
      </div>
    );

    case "furniture": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-stone-500" to="to-amber-700" label="LIVING ROOM ESSENTIALS" sub="Sofas • Beds • Tables" />
        <CategoryPills items={["Sofas","Beds","Dining","Decor"]} color="bg-stone-700" />
        <div className="grid grid-cols-2 gap-1">
          <ProductCard from="from-amber-700" to="to-stone-600" emoji="🛋" label="L-Sofa" price="₹42,000" hover />
          <ProductCard from="from-stone-500" to="to-zinc-700" emoji="🛏" label="King Bed" price="₹35,000" />
          <ProductCard from="from-amber-600" to="to-amber-800" emoji="🪑" label="Dining 6" price="₹28,000" />
          <ProductCard from="from-stone-400" to="to-stone-600" emoji="🗄" label="Wardrobe" price="₹22,000" />
        </div>
      </div>
    );

    case "clothing": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-pink-400" to="to-fuchsia-500" label="NEW SUMMER DROP" sub="Up to 40% off" />
        <CategoryPills items={["Men","Women","Kids","Sale"]} color="bg-pink-500" />
        <div className="grid grid-cols-3 gap-1">
          <ProductCard from="from-pink-200" to="to-rose-400" emoji="👗" label="Floral" price="₹1,299" hover />
          <ProductCard from="from-indigo-200" to="to-blue-400" emoji="👔" label="Shirt" price="₹899" />
          <ProductCard from="from-rose-300" to="to-fuchsia-400" emoji="👜" label="Bag" price="₹1,499" />
          <ProductCard from="from-emerald-200" to="to-teal-400" emoji="👟" label="Sneaker" price="₹2,299" />
          <ProductCard from="from-amber-200" to="to-orange-400" emoji="🧥" label="Jacket" price="₹3,499" />
          <ProductCard from="from-violet-200" to="to-purple-400" emoji="👖" label="Jeans" price="₹1,799" />
        </div>
      </div>
    );

    case "healthcare": return (
      <div className="p-2 space-y-1.5">
        <div className="flex items-center gap-1 rounded bg-white shadow-sm p-1">
          <div className="h-3 w-3 rounded-full bg-cyan-500 text-white text-[6px] grid place-items-center font-bold">✚</div>
          <div className="text-[6px] font-bold">Dr. Sharma — Cardiology</div>
          <div className="ml-auto text-[5px] text-emerald-600 font-bold">● ONLINE</div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[{l:"Patients",v:"248",c:"from-cyan-400 to-sky-500"},{l:"Today",v:"32",c:"from-blue-400 to-indigo-500"},{l:"Reports",v:"18",c:"from-teal-400 to-cyan-500"}].map(s=>(
            <div key={s.l} className="rounded bg-white shadow-sm p-1">
              <div className="text-[5px] text-slate-500">{s.l}</div>
              <div className={`text-[9px] font-bold bg-gradient-to-r ${s.c} bg-clip-text text-transparent`}>{s.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1">
          <div className="text-[5px] font-bold text-slate-500 mb-0.5">APPOINTMENTS</div>
          <div className="grid grid-cols-7 gap-px">
            {Array.from({length:14}).map((_,i)=>(
              <div key={i} className={`h-3 rounded-sm ${[2,5,9,11].includes(i) ? "bg-cyan-500" : "bg-slate-100"}`} />
            ))}
          </div>
        </div>
        <div className="space-y-0.5">
          {["A. Verma — 10:30 ✓","B. Khan — 11:15","C. Patel — 12:00"].map((t,i)=>(
            <div key={t} className="flex items-center gap-1 rounded bg-white p-1 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-cyan-500" style={{ animation: `pulseDot 2s ease-in-out ${i*0.3}s infinite` }} />
              <div className="text-[6px]">{t}</div>
            </div>
          ))}
        </div>
      </div>
    );

    case "ai": return (
      <div className="p-2 space-y-1.5">
        <div className="rounded bg-gradient-to-r from-violet-500 to-indigo-600 p-1.5 text-white">
          <div className="text-[6px] font-bold">📄 Resume Analyzer</div>
          <div className="mt-0.5 h-1 rounded-sm bg-white/30 overflow-hidden">
            <div className="h-full bg-white" style={{ animation: "lineFill 2.4s ease-in-out infinite alternate" }} />
          </div>
          <div className="text-[5px] mt-0.5 opacity-90">Scanning 248 resumes…</div>
        </div>
        <div className="rounded bg-white shadow-sm p-1">
          <div className="text-[5px] font-bold text-slate-500 mb-0.5">SKILL MATCH</div>
          <div className="space-y-0.5">
            {[{s:"React",v:"94%"},{s:"Node.js",v:"88%"},{s:"AWS",v:"76%"}].map((k,i)=>(
              <div key={k.s} className="flex items-center gap-1">
                <div className="text-[5px] w-8">{k.s}</div>
                <div className="flex-1 h-1 rounded-sm bg-slate-100 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: k.v, animation: `lineFill 2s ease-in-out ${i*0.2}s infinite alternate` }} />
                </div>
                <div className="text-[5px] font-bold text-violet-600">{k.v}</div>
              </div>
            ))}
          </div>
        </div>
        {[{n:"Riya S.",sc:96},{n:"Amit K.",sc:91},{n:"Neha P.",sc:87},{n:"Vikas M.",sc:82}].map((c,i)=>(
          <div key={c.n} className="rounded bg-white shadow-sm p-1 flex items-center gap-1">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 grid place-items-center text-[6px] text-white font-bold">{c.sc}</div>
            <div className="flex-1">
              <div className="text-[6px] font-semibold">{c.n}</div>
              <div className="text-[5px] text-slate-500">Senior Full-Stack</div>
            </div>
            <div className="text-[5px] font-bold text-white px-1 py-0.5 rounded bg-emerald-500">RANK #{i+1}</div>
          </div>
        ))}
      </div>
    );

    case "business": return (
      <div className="p-2 space-y-1.5">
        <div className="grid grid-cols-4 gap-1">
          {[{l:"Revenue",v:"₹8.4L",c:"from-emerald-500 to-teal-500"},{l:"Orders",v:"1,284",c:"from-blue-500 to-cyan-500"},{l:"Users",v:"9.2K",c:"from-violet-500 to-purple-500"},{l:"Growth",v:"+24%",c:"from-orange-500 to-rose-500"}].map(k=>(
            <div key={k.l} className="rounded bg-white shadow-sm p-1">
              <div className="text-[5px] text-slate-500">{k.l}</div>
              <div className={`text-[8px] font-bold bg-gradient-to-r ${k.c} bg-clip-text text-transparent`}>{k.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1.5">
          <div className="text-[5px] font-bold text-slate-500 mb-0.5">SALES — LAST 8 WEEKS</div>
          <div className="flex items-end gap-0.5 h-10">
            {[0,1,2,3,4,5,6,7].map(i=>(
              <div key={i} className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-emerald-500 to-teal-400" style={{ animation: `barGrow 1.8s ease-in-out ${i*0.15}s infinite` }} />
            ))}
          </div>
        </div>
        <div className="rounded bg-white shadow-sm p-1 space-y-0.5">
          <div className="text-[5px] font-bold text-slate-500">EMPLOYEES</div>
          {["A. Mehta — Sales","P. Joshi — Ops","R. Sen — Tech"].map((t,i)=>(
            <div key={t} className="flex items-center gap-1">
              <div className={`h-2 w-2 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500`} />
              <div className="text-[6px]">{t}</div>
              <div className="ml-auto h-1 w-6 rounded-sm bg-emerald-100">
                <div className="h-full rounded-sm bg-emerald-500" style={{ width: `${60+i*10}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    case "restaurant": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-red-500" to="to-orange-500" label="DINE WITH US TONIGHT" sub="Authentic Indian Cuisine" />
        <CategoryPills items={["Starters","Mains","Desserts","Drinks"]} color="bg-red-500" />
        <div className="grid grid-cols-3 gap-1">
          <ProductCard from="from-red-300" to="to-orange-400" emoji="🍛" label="Butter Chicken" price="₹380" hover />
          <ProductCard from="from-yellow-300" to="to-red-400" emoji="🍕" label="Pizza" price="₹420" />
          <ProductCard from="from-orange-300" to="to-yellow-400" emoji="🍜" label="Noodles" price="₹260" />
        </div>
        <div className="rounded bg-white shadow-sm p-1 flex items-center gap-1">
          <div className="text-[6px] font-bold">📅 Reserve a Table</div>
          <div className="ml-auto text-[5px] font-bold text-white px-1.5 py-0.5 rounded bg-red-500">BOOK</div>
        </div>
      </div>
    );

    case "realestate": return (
      <div className="p-2 space-y-1.5">
        <div className="rounded bg-white shadow-sm p-1 flex items-center gap-1">
          <div className="text-[5px]">🔍</div>
          <div className="flex-1 text-[5px] text-slate-400">3 BHK in Delhi, ₹50L–1Cr</div>
          <div className="text-[5px] font-bold text-white px-1.5 py-0.5 rounded bg-blue-600">Search</div>
        </div>
        {[{p:"₹85L",l:"3 BHK • Rohini",b:"1450 sqft",c:"from-blue-400 to-indigo-500"},{p:"₹1.2Cr",l:"4 BHK • Dwarka",b:"1980 sqft",c:"from-indigo-500 to-slate-600"},{p:"₹65L",l:"2 BHK • Pitampura",b:"1100 sqft",c:"from-sky-400 to-blue-500"}].map((h,i)=>(
          <div key={i} className="rounded bg-white shadow-sm overflow-hidden flex" style={i===0 ? { animation: "hoverLift 3s ease-in-out infinite" } : undefined}>
            <div className={`w-12 h-10 bg-gradient-to-br ${h.c} grid place-items-center text-[10px]`}>🏠</div>
            <div className="flex-1 p-1">
              <div className="text-[7px] font-bold text-blue-700">{h.p}</div>
              <div className="text-[5px] font-semibold">{h.l}</div>
              <div className="text-[5px] text-slate-500">{h.b}</div>
            </div>
            <div className="self-center mr-1 text-[5px] font-bold text-white bg-emerald-500 px-1 py-0.5 rounded">Call</div>
          </div>
        ))}
      </div>
    );

    case "gym": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-lime-400" to="to-emerald-600" label="TRANSFORM YOUR BODY" sub="Join PowerFit Today" />
        <div className="grid grid-cols-3 gap-1">
          {[{n:"Basic",p:"₹999"},{n:"Pro",p:"₹1,799"},{n:"Elite",p:"₹2,999"}].map((m,i)=>(
            <div key={m.n} className={`rounded p-1 text-center ${i===1?"bg-gradient-to-br from-lime-500 to-emerald-600 text-white":"bg-white shadow-sm"}`}>
              <div className="text-[6px] font-bold">{m.n}</div>
              <div className="text-[7px] font-extrabold">{m.p}</div>
              <div className="text-[4px] opacity-80">/month</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1 space-y-0.5">
          <div className="text-[5px] font-bold text-slate-500">TRAINERS</div>
          {["💪 Rohan — Strength","🧘 Priya — Yoga","🏃 Karan — Cardio"].map(t=>(
            <div key={t} className="flex items-center gap-1 text-[6px]">
              <div className="h-2 w-2 rounded-full bg-lime-500" />
              {t}
            </div>
          ))}
        </div>
        <div className="rounded bg-emerald-500 text-white text-[6px] font-bold text-center py-1">JOIN NOW →</div>
      </div>
    );

    case "school": return (
      <div className="p-2 space-y-1.5">
        <div className="flex items-center gap-1 rounded bg-white shadow-sm p-1">
          <div className="h-3 w-3 rounded-full bg-indigo-500 grid place-items-center text-[6px] text-white">🎓</div>
          <div className="text-[6px] font-bold">Welcome, Aarav (Class 8-B)</div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[{l:"Attendance",v:"94%",c:"from-indigo-500 to-blue-500"},{l:"Avg Score",v:"86",c:"from-blue-500 to-cyan-500"},{l:"Rank",v:"#4",c:"from-cyan-500 to-teal-500"}].map(k=>(
            <div key={k.l} className="rounded bg-white shadow-sm p-1">
              <div className="text-[5px] text-slate-500">{k.l}</div>
              <div className={`text-[8px] font-bold bg-gradient-to-r ${k.c} bg-clip-text text-transparent`}>{k.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1">
          <div className="text-[5px] font-bold text-slate-500 mb-0.5">ATTENDANCE — THIS MONTH</div>
          <div className="grid grid-cols-10 gap-px">
            {Array.from({length:20}).map((_,i)=>(
              <div key={i} className={`h-2 rounded-sm ${i===6||i===13 ? "bg-rose-400" : "bg-indigo-500"}`} />
            ))}
          </div>
        </div>
        <div className="rounded bg-white shadow-sm p-1 space-y-0.5">
          <div className="text-[5px] font-bold text-slate-500">SUBJECTS</div>
          {[{s:"Math",v:92},{s:"Science",v:88},{s:"English",v:81}].map((s,i)=>(
            <div key={s.s} className="flex items-center gap-1">
              <div className="text-[5px] w-9">{s.s}</div>
              <div className="flex-1 h-1 rounded-sm bg-slate-100 overflow-hidden">
                <div className="h-full bg-indigo-500" style={{ width: `${s.v}%`, animation: `lineFill 2s ease-in-out ${i*0.2}s infinite alternate` }} />
              </div>
              <div className="text-[5px] font-bold text-indigo-600">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    );

    case "ecommerce": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-fuchsia-500" to="to-purple-600" label="MEGA SALE — 50% OFF" sub="Free shipping over ₹999" />
        <CategoryPills items={["All","Electronics","Home","Beauty"]} color="bg-fuchsia-500" />
        <div className="grid grid-cols-3 gap-1">
          <ProductCard from="from-purple-300" to="to-fuchsia-500" emoji="🎧" label="Headphones" price="₹2,499" hover />
          <ProductCard from="from-pink-300" to="to-rose-500" emoji="⌚" label="Smart Watch" price="₹3,999" />
          <ProductCard from="from-violet-300" to="to-indigo-500" emoji="📱" label="Phone Case" price="₹399" />
        </div>
        <div className="flex items-center gap-1 rounded bg-white shadow-sm p-1">
          <div className="text-[6px]">🛒 Cart (4)</div>
          <div className="ml-auto text-[6px] font-bold">₹6,897</div>
          <div className="text-[5px] font-bold text-white bg-fuchsia-600 px-1.5 py-0.5 rounded" style={{ animation: "cartPop 2.5s ease-in-out infinite" }}>Checkout</div>
        </div>
      </div>
    );

    case "travel": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-sky-400" to="to-cyan-500" label="EXPLORE THE WORLD" sub="Curated Tour Packages" />
        <div className="grid grid-cols-2 gap-1">
          {[{n:"Bali",p:"₹45K",e:"🏝"},{n:"Kashmir",p:"₹28K",e:"🏔"},{n:"Dubai",p:"₹65K",e:"🌆"},{n:"Goa",p:"₹18K",e:"🌊"}].map((d,i)=>(
            <div key={d.n} className="rounded bg-white shadow-sm overflow-hidden" style={i===0?{animation:"hoverLift 3s ease-in-out infinite"}:undefined}>
              <div className="h-8 bg-gradient-to-br from-sky-300 to-cyan-500 grid place-items-center text-[12px]">{d.e}</div>
              <div className="p-1 flex justify-between">
                <div className="text-[6px] font-bold">{d.n}</div>
                <div className="text-[6px] font-bold text-sky-600">{d.p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    case "salon": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-rose-400" to="to-fuchsia-500" label="GLOW UP TODAY" sub="Hair • Skin • Nails" />
        <div className="space-y-1">
          {[{s:"Haircut & Style",p:"₹600",e:"✂"},{s:"Facial Glow",p:"₹1,200",e:"💆"},{s:"Manicure",p:"₹450",e:"💅"}].map((sv,i)=>(
            <div key={sv.s} className="rounded bg-white shadow-sm p-1 flex items-center gap-1">
              <div className="h-4 w-4 rounded bg-gradient-to-br from-rose-300 to-pink-500 grid place-items-center text-[8px]">{sv.e}</div>
              <div className="text-[6px] font-semibold flex-1">{sv.s}</div>
              <div className="text-[6px] font-bold text-rose-600">{sv.p}</div>
              <div className="text-[5px] font-bold text-white bg-rose-500 px-1 py-0.5 rounded" style={i===0?{animation:"cartPop 2.5s ease-in-out infinite"}:undefined}>Book</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1 text-[5px]">⭐⭐⭐⭐⭐ 4.9 (1,284 reviews)</div>
      </div>
    );

    case "logistics": return (
      <div className="p-2 space-y-1.5">
        <div className="grid grid-cols-3 gap-1">
          {[{l:"In Transit",v:"42",c:"from-orange-500 to-amber-500"},{l:"Delivered",v:"318",c:"from-emerald-500 to-teal-500"},{l:"Fleet",v:"28",c:"from-blue-500 to-cyan-500"}].map(k=>(
            <div key={k.l} className="rounded bg-white shadow-sm p-1">
              <div className="text-[5px] text-slate-500">{k.l}</div>
              <div className={`text-[8px] font-bold bg-gradient-to-r ${k.c} bg-clip-text text-transparent`}>{k.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1 relative overflow-hidden h-8">
          <div className="absolute inset-x-1 top-1/2 h-px bg-slate-200" />
          <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 text-[10px]" style={{ animation: "truckMove 4s linear infinite" }}>🚚</div>
          <div className="absolute left-1 top-1 text-[5px] font-bold">Delhi</div>
          <div className="absolute right-1 top-1 text-[5px] font-bold">Mumbai</div>
        </div>
        <div className="space-y-0.5">
          {[{id:"#SHP-2841",s:"Out for delivery"},{id:"#SHP-2840",s:"In Transit — Jaipur"},{id:"#SHP-2839",s:"Delivered ✓"}].map((o,i)=>(
            <div key={o.id} className="rounded bg-white shadow-sm p-1 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-orange-500" style={{ animation: `pulseDot 2s ease-in-out ${i*0.3}s infinite` }} />
              <div className="text-[6px] font-bold">{o.id}</div>
              <div className="text-[5px] text-slate-500 ml-auto">{o.s}</div>
            </div>
          ))}
        </div>
      </div>
    );

    case "construction": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-stone-700" to="to-zinc-900" label="BUILDING TOMORROW" sub="Residential • Commercial" />
        <div className="grid grid-cols-3 gap-1">
          {[{e:"🏗",l:"Tower A"},{e:"🏢",l:"Plaza"},{e:"🏘",l:"Villas"}].map((p,i)=>(
            <div key={p.l} className="rounded bg-white shadow-sm overflow-hidden" style={i===0?{animation:"hoverLift 3s ease-in-out infinite"}:undefined}>
              <div className="h-8 bg-gradient-to-br from-stone-400 to-stone-700 grid place-items-center text-[12px]">{p.e}</div>
              <div className="p-1 text-[5px] font-bold text-center">{p.l}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1 space-y-0.5">
          <div className="text-[5px] font-bold text-slate-500">SERVICES</div>
          {["Architecture","Interior","Project Mgmt"].map(s=>(<div key={s} className="text-[6px]">✓ {s}</div>))}
        </div>
      </div>
    );

    case "hotel": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-teal-500" to="to-emerald-700" label="LUXURY RESORT STAY" sub="From ₹5,499/night" />
        <div className="grid grid-cols-2 gap-1">
          {[{n:"Deluxe Room",p:"₹5,499",e:"🛏"},{n:"Suite",p:"₹9,999",e:"🛋"},{n:"Pool Villa",p:"₹18,499",e:"🏊"},{n:"Penthouse",p:"₹32K",e:"🏙"}].map((r,i)=>(
            <div key={r.n} className="rounded bg-white shadow-sm overflow-hidden" style={i===0?{animation:"hoverLift 3s ease-in-out infinite"}:undefined}>
              <div className="h-7 bg-gradient-to-br from-teal-300 to-emerald-500 grid place-items-center text-[10px]">{r.e}</div>
              <div className="p-1">
                <div className="text-[6px] font-bold">{r.n}</div>
                <div className="flex justify-between items-center">
                  <div className="text-[5px] text-slate-500">/ night</div>
                  <div className="text-[6px] font-bold text-teal-700">{r.p}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded bg-teal-600 text-white text-[6px] font-bold text-center py-1">CHECK AVAILABILITY</div>
      </div>
    );

    case "corporate": return (
      <div className="p-2 space-y-1.5">
        <Hero from="from-blue-900" to="to-indigo-900" label="ENTERPRISE SOLUTIONS" sub="Trusted by 500+ brands" />
        <div className="grid grid-cols-3 gap-1">
          {[{l:"Consulting",e:"📊"},{l:"Strategy",e:"🎯"},{l:"Growth",e:"📈"}].map(s=>(
            <div key={s.l} className="rounded bg-white shadow-sm p-1 text-center">
              <div className="text-[10px]">{s.e}</div>
              <div className="text-[5px] font-bold">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1">
          <div className="text-[5px] font-bold text-slate-500 mb-0.5">CLIENT LOGOS</div>
          <div className="grid grid-cols-4 gap-0.5">
            {Array.from({length:8}).map((_,i)=>(<div key={i} className="h-2.5 rounded-sm bg-slate-100" />))}
          </div>
        </div>
        <div className="rounded bg-blue-900 text-white text-[6px] font-bold text-center py-1">REQUEST PROPOSAL</div>
      </div>
    );

    case "startup": return (
      <div className="p-2 space-y-1.5">
        <div className="rounded bg-gradient-to-br from-violet-600 to-fuchsia-600 p-1.5 text-white relative overflow-hidden">
          <div className="text-[7px] font-extrabold">SHIP 10× FASTER ⚡</div>
          <div className="text-[5px] opacity-90 mt-0.5">The AI-powered toolkit for modern teams</div>
          <div className="mt-1 inline-block text-[5px] font-bold bg-white text-violet-700 px-1.5 py-0.5 rounded">Start Free →</div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[{e:"⚡",l:"Fast"},{e:"🔒",l:"Secure"},{e:"🚀",l:"Scalable"}].map(f=>(
            <div key={f.l} className="rounded bg-white shadow-sm p-1 text-center">
              <div className="text-[10px]">{f.e}</div>
              <div className="text-[5px] font-bold">{f.l}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-white shadow-sm p-1 space-y-0.5">
          <div className="text-[5px] font-bold text-slate-500">JOIN THE WAITLIST</div>
          <div className="flex gap-0.5">
            <div className="flex-1 h-3 rounded-sm bg-slate-100" />
            <div className="text-[5px] font-bold text-white bg-violet-600 px-1.5 grid place-items-center rounded">Notify</div>
          </div>
        </div>
      </div>
    );
  }
}
