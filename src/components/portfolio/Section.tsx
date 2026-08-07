import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 sm:py-24 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          )}
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </motion.div>
      )}
      {children}
    </section>
  );
}
