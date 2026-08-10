import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { GraduationCap, BookOpen } from "lucide-react";

const courses = [
  "Data Structures",
  "Algorithms",
  "Database Systems",
  "Web Development",
  "Networking",
  "Operating Systems",
];

export function Education() {
  return (
    <Section id="education" eyebrow="My background" title="Education">
      <div className="relative mx-auto max-w-3xl pl-7 sm:pl-8">
        <div className="absolute left-2 top-2 h-full w-px bg-linear-to-b from-primary to-transparent" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="glow absolute -left-7 top-6 sm:-left-8 grid h-5 w-5 place-items-center rounded-full bg-primary ring-4 ring-background" />
          <div className="glass rounded-3xl p-5 sm:p-7">
            <div className="flex min-w-0 items-center gap-3">
              <GraduationCap className="h-6 w-6 shrink-0 text-accent" />
              <h3 className="truncate text-lg font-bold sm:text-xl">Werabe University</h3>
            </div>
            <p className="mt-2 font-medium">Bachelor of Science in Information Technology</p>
            <p className="mt-1 inline-flex rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-accent">
              Current Status: 3rd Year Student
            </p>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <BookOpen className="h-4 w-4 text-accent" /> Relevant Courses
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {courses.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
