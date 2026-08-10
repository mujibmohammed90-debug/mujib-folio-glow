import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Facebook, Send, Instagram, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/" },
  { icon: Send, label: "Telegram", href: "https://t.m/mujb55" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
];

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 text-center">
        <p className="font-display text-lg font-bold">Mujib Mohammed</p>
        <p className="mt-1 text-sm text-muted-foreground">Frontend Developer</p>

        <ul className="mt-6 flex justify-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all hover:scale-110 hover:border-accent hover:text-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-muted-foreground">© 2026 Mujib Mohammed</p>
      </div>

      <AnimatePresence>
        {show && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="glow fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
