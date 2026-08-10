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
    <section id={id} className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
          )}
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </motion.div>
      )}
      {children}
    </section>
  );
}
