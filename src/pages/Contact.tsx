import { useEffect, useState } from "react";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, HelpCircle } from "lucide-react";


const email = "sksoftwaresolutions11@gmail.com";
const phone = "+91 8744893906";
const whatsapp = "+91 8744893906";
const location = "B109, 10th Floor, Suncity Avenue, Sector 76, Gurugram, Haryana 122012";

const servicesList = [
  "AI & Machine Learning",
  "Web Development",
  "Mobile App Development",
  "SaaS Development",
  "Cloud & DevOps",
  "Automation Solutions",
  "Custom Software Development",
  "Healthcare Technology",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(40),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please select a service"),
  budget: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please describe your project in more detail").max(2000),
});

const faqs = [
  {
    q: "How long does it take to complete a website project?",
    a: "The timeline depends on the complexity, features, and scope of the project. A standard business website typically takes between 1–3 weeks, while advanced business platforms, management systems, or custom web applications may require 4–12 weeks or more. Our development process includes requirement gathering, planning, UI/UX design, development, testing, optimization, and deployment. Throughout the project, we maintain transparent communication and provide regular progress updates to ensure timely delivery without compromising quality, performance, or security.",
  },
  {
    q: "Do you provide website maintenance and support after launch?",
    a: "Yes. We provide ongoing support and maintenance services after project delivery. This includes bug fixes, security updates, performance monitoring, content updates, feature enhancements, backups, and technical assistance. Our goal is to ensure your website remains secure, fast, reliable, and aligned with your business growth. We also offer dedicated support options for businesses that require continuous improvements and long-term technical partnership.",
  },
  {
    q: "Will my website work properly on mobile devices?",
    a: "Absolutely. Every website we develop is fully responsive and optimized for mobile phones, tablets, laptops, and desktop devices. Since a significant percentage of users browse websites on mobile devices, we prioritize responsive layouts, touch-friendly navigation, fast loading speeds, and seamless user experiences across all screen sizes. Our testing process ensures consistent performance and visual quality on modern devices and browsers.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can modernize and redesign existing websites to improve appearance, performance, user experience, lead generation, and overall functionality. Whether your current website looks outdated, loads slowly, lacks mobile responsiveness, or fails to convert visitors into customers, we can create a modern solution tailored to your business goals while preserving important content and branding elements where needed.",
  },
  {
    q: "Do you provide SEO services with website development?",
    a: "Yes. SEO best practices are integrated into our development process from the beginning. We implement clean code structures, optimized page layouts, metadata configuration, mobile responsiveness, image optimization, performance enhancements, and search-engine-friendly architecture. Advanced packages include deeper SEO implementation to help improve visibility, rankings, and organic traffic growth over time.",
  },
  {
    q: "Can you build custom software and business management systems?",
    a: "Yes. In addition to websites, we specialize in custom software development, business management systems, dashboards, CRM solutions, ERP platforms, AI-powered applications, automation tools, and enterprise-grade web applications. Every solution is designed according to your specific business requirements, workflows, and scalability needs to maximize efficiency and productivity.",
  },
  {
    q: "What technologies do you use for development?",
    a: "We use modern and industry-standard technologies to ensure performance, security, and scalability. Depending on project requirements, our technology stack may include React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Firebase, Supabase, Tailwind CSS, cloud deployment platforms, AI integrations, APIs, and other enterprise-grade tools. We always select technologies that best align with your business objectives and future growth plans.",
  },
  {
    q: "Why should I choose SK Software Solutions?",
    a: "SK Software Solutions focuses on delivering high-quality digital solutions that combine modern design, strong functionality, business-focused strategy, and reliable support. We prioritize transparency, communication, performance, security, and long-term value. Whether you need a professional website, custom software, AI-powered solution, or enterprise platform, our goal is to create technology that helps your business grow, improve efficiency, and achieve measurable results.",
  },
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — SK Software Solutions";
  }, []);

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgkbvve";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (response.ok) {
        toast.success("Thank you for contacting SK Software Solutions. We have received your inquiry and will get back to you shortly.");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        toast.error(data?.error || "Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto max-w-5xl px-4 py-24 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's build <span className="text-gradient-brand">something great</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll discuss your goals and propose a clear path forward.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-20 grid lg:grid-cols-5 gap-8">
        <Card className="glass p-7 lg:col-span-3 border-border/60">
          <h2 className="text-2xl font-semibold">Tell us about your project</h2>
          <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={onSubmit}>
            <Field label="Full name" name="name" required />
            <Field label="Email address" name="email" type="email" required />
            <Field label="Phone number" name="phone" type="tel" required />
            <Field label="Company name" name="company" />
            <div className="sm:col-span-2">
              <Label htmlFor="service">Service required *</Label>
              <select
                id="service"
                name="service"
                required
                className="glass mt-1.5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a service...</option>
                {servicesList.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <Field label="Project budget (INR / USD)" name="budget" placeholder="e.g. ₹60,000 or $5k – $25k" />
            <div className="sm:col-span-2">
              <Label htmlFor="message">Project description *</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you building? What's the timeline and scope?"
                className="glass mt-1.5"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-gradient-brand text-brand-foreground border-0 shadow-glow hover:opacity-90"
              >
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </Card>

        <div className="lg:col-span-2 space-y-5">
          <Card className="glass p-6 border-border/60">
            <h3 className="font-semibold">Contact information</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-brand transition-colors">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-brand transition-colors">{phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-brand shrink-0" />
                <span>WhatsApp: {whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand shrink-0" />
                <span>{location}</span>
              </li>
            </ul>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 bg-primary text-primary-foreground shadow hover:bg-primary/90 transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://wa.me/918744893906"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 bg-[#25D366] text-white shadow hover:opacity-90 transition animate-pulse-glow"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </Card>

          <Card className="glass p-6 border-border/60">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" /> Business hours
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Mon – Fri · 9:00 AM – 7:00 PM IST</p>
            <p className="mt-1 text-sm text-muted-foreground">Sat – Sun · 10:00 AM – 4:00 PM IST</p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 pb-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-brand" /> FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-muted-foreground">Detailed answers to the questions clients ask us most often.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="glass rounded-xl px-5 border-border/60 hover:shadow-glow transition-shadow data-[state=open]:shadow-glow"
            >
              <AccordionTrigger className="text-left text-base font-semibold py-5">
                <span className="flex items-start gap-3">
                  <span className="h-6 w-6 shrink-0 rounded-md bg-gradient-brand text-brand-foreground text-[11px] grid place-items-center font-bold mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pl-9 pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={name}>{label}{required && " *"}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} className="glass mt-1.5" />
    </div>
  );
}
