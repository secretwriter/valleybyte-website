import { Link } from "react-router-dom";
import { TerminalSquare, Link2, AtSign, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-void-soft mt-24">
      <div className="container-page py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric-500/15 border border-electric-500/30 text-electric-400">
              <TerminalSquare className="h-3.5 w-3.5" strokeWidth={2.25} />
            </span>
            <span className="font-semibold text-ink">
              Valley<span className="text-electric-400">Byte</span>
            </span>
          </Link>
          <p className="text-sm text-ink-muted">Learn. Test. Build.</p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" aria-label="LinkedIn" className="text-ink-faint hover:text-electric-400 transition-colors">
              <Link2 className="h-4.5 w-4.5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-ink-faint hover:text-electric-400 transition-colors">
              <AtSign className="h-4.5 w-4.5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-ink-faint hover:text-electric-400 transition-colors">
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-muted">
            <li><Link to="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-ink transition-colors">About</Link></li>
            <li><Link to="/programs" className="hover:text-ink transition-colors">Programs</Link></li>
            <li><Link to="/how-it-works" className="hover:text-ink transition-colors">How It Works</Link></li>
            <li><Link to="/faq" className="hover:text-ink transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-ink transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink mb-4">Programs</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-muted">
            <li><Link to="/programs/qa-software-testing" className="hover:text-ink transition-colors">QA & Software Testing</Link></li>
            <li><Link to="/programs" className="hover:text-ink transition-colors">Coming Soon</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink mb-4">Legal</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-muted">
            <li><Link to="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-ink transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-faint">
          <span>© 2026 ValleyByte. All rights reserved.</span>
          <span>Kathmandu, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
