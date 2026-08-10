import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import photo from "@/assets/mujib.jpg.asset.json";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="glow absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl" />
          <img
            src={photo.url}
            alt="Mujib Mohammed working on a laptop"
            loading="lazy"
            width={600}
            height={750}
            className="glass relative w-full rounded-3xl object-cover p-2"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-muted-foreground"
        >
          <p className="text-base sm:text-lg">
            Hello! I'm <span className="font-semibold text-foreground">Mujib Mohammed</span>, a
            passionate Frontend Developer and a 3rd Year Information Technology student at Werabe
            University.
          </p>
          <p>
            I enjoy building modern, responsive, and interactive web applications using HTML, CSS,
            JavaScript, React, and Tailwind CSS. I am constantly learning new technologies to
            improve my software development skills.
          </p>
          <p>
            I believe that great software combines clean code, beautiful design, and an excellent
            user experience.
          </p>

          <dl className="grid gap-4 pt-4 sm:grid-cols-3">
            {[
              { k: "University", v: "Werabe University" },
              { k: "Field", v: "Information Technology" },
              { k: "Goal", v: "Full Stack Engineer" },
            ].map((i) => (
              <div key={i.k} className="glass rounded-2xl p-4">
                <dt className="text-xs uppercase tracking-widest text-accent">{i.k}</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{i.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  );
}
