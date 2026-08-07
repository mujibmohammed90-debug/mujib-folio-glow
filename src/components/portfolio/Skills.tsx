import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { Code2, Cpu, Wrench, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    icon: Cpu,
    title: "Programming",
    skills: [
      { name: "C++", level: 78 },
      { name: "Java", level: 72 },
      { name: "Python", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    icon: Sparkles,
    title: "Other",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX", level: 78 },
      { name: "Problem Solving", level: 84 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I know" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g, gi) => (
          <motion.article
            key={g.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/20 text-accent">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="truncate text-lg font-bold">{g.title}</h3>
            </div>
            <ul className="space-y-4">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
