import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, TerminalSquare, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Why ValleyByte", to: "/about#why" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [window.location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/85 backdrop-blur-lg border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-500/15 border border-electric-500/30 text-electric-400 group-hover:bg-electric-500/25 transition-colors">
            <TerminalSquare className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <span className="font-semibold text-[17px] tracking-tight text-ink">
            Valley<span className="text-electric-400">Byte</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://intern.valleybyte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs gap-1.5"
          >
            Intern Login <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link to="/programs/qa-software-testing" className="btn-secondary !px-4 !py-2 text-sm">
            View Program
          </Link>
          <Link to="/apply/qa-software-testing" className="btn-primary !px-4 !py-2 text-sm">
            Apply Now
          </Link>
        </div>

        <button
          className="lg:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-void/95 backdrop-blur-lg">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-ink-muted hover:text-ink text-[15px] border-b border-white/[0.04] last:border-0"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/programs/qa-software-testing" className="btn-secondary w-full">
                View Program
              </Link>
              <Link to="/apply/qa-software-testing" className="btn-primary w-full">
                Apply Now
              </Link>
              <a
                href="https://intern.valleybyte.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center gap-1.5"
              >
                Intern Login <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
