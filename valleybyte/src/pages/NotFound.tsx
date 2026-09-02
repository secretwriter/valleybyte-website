import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export default function NotFound() {
  useSEO({ title: "Page Not Found | ValleyByte", description: "The page you're looking for doesn't exist." });
  return (
    <section className="container-page py-32 text-center flex flex-col items-center gap-4">
      <p className="font-mono text-electric-400 text-sm">404</p>
      <h1 className="text-3xl font-semibold text-ink">Page Not Found</h1>
      <p className="text-ink-muted max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-2">Back to Home</Link>
    </section>
  );
}
