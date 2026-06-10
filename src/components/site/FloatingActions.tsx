import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(p);
      setShow(h.scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-0.5 z-[60] bg-transparent">
        <div className="h-full bg-gradient-brand transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
      <a
        href="https://wa.me/918744893906"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center rounded-full bg-[#25D366] text-white shadow-glow animate-pulse-glow hover:scale-110 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-50 h-11 w-11 grid place-items-center rounded-full glass hover:shadow-glow transition animate-fade-up"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </>
  );
}
