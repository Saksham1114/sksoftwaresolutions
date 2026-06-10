import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass border-b border-border/50">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-brand shadow-glow">
              <Sparkles className="h-4 w-4 text-brand-foreground" />
            </span>
            <span>SK <span className="text-gradient-brand">Software</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
  {nav.map((n) => (
    <NavLink
      key={n.to}
      to={n.to}
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent/60 ${
          isActive
            ? "text-foreground bg-accent/60"
            : "text-muted-foreground hover:text-foreground"
        }`
      }
    >
      {n.label}
    </NavLink>
  ))}
</nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-md hover:bg-accent/60 transition"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-brand text-brand-foreground hover:opacity-90 border-0">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-md hover:bg-accent/60"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/50 px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-accent/60 text-sm"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
