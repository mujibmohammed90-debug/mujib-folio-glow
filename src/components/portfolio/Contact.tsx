import { useState } from "react";
import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const details = [
  { icon: Phone, label: "+251 954867177", href: "tel:+251954867177" },
  { icon: Mail, label: "mujibmohammed90@gmail.com", href: "mailto:mujibmohammed90@gmail.com" },
  { icon: MapPin, label: "Werabe, Ethiopia" },
];

const field =
  "w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-hidden placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    const { subject, name, email, message } = result.data;
    window.location.href = `mailto:mujibmohammed90@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
  }

  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass space-y-5 rounded-3xl p-7"
        >
          <h3 className="text-lg font-bold">Contact Information</h3>
          <ul className="space-y-4">
            {details.map((d) => (
              <li key={d.label} className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-accent">
                  <d.icon className="h-4 w-4" />
                </span>
                {d.href ? (
                  <a href={d.href} className="truncate text-sm hover:text-accent">
                    {d.label}
                  </a>
                ) : (
                  <span className="truncate text-sm">{d.label}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          noValidate
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass space-y-4 rounded-3xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold">
                Name
              </label>
              <input id="name" name="name" className={field} placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold">
                Email
              </label>
              <input id="email" name="email" className={field} placeholder="you@example.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold">
              Subject
            </label>
            <input id="subject" name="subject" className={field} placeholder="How can I help?" />
            {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold">
              Message
            </label>
            <textarea id="message" name="message" rows={5} className={field} placeholder="Your message..." />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
          {sent && (
            <p className="flex items-center gap-2 text-xs text-accent">
              <CheckCircle2 className="h-4 w-4" /> Opening your email app…
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
