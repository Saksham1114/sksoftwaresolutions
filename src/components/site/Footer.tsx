import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Sector } from "recharts";

export function Footer() {
  const email = "sksoftwaresolutions11@gmail.com";
  const phone = "+91 8744893906";
  const location = "B109, 10th Floor, Suncity Avenue,Sector 76, Gurugram, Haryana 122012";

  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-hero">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-brand shadow-glow">
                <Sparkles className="h-4 w-4 text-brand-foreground" />
              </span>
              <span>SK <span className="text-gradient-brand">Software</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Transforming ideas into intelligent digital solutions for startups and enterprises worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-foreground transition-colors">{email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">{phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground text-center">
          <p>&copy; {new Date().getFullYear()} SK Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
