import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

const projects = [
  {
    img: p1,
    title: "Personal Portfolio Website",
    desc: "Responsive portfolio built with React and Tailwind CSS.",
  },
  {
    img: p2,
    title: "Restaurant Website",
    desc: "Modern responsive restaurant landing page.",
  },
  {
    img: p3,
    title: "University Management System",
    desc: "Frontend UI design for university management.",
  },
  {
    img: p4,
    title: "E-commerce Website",
    desc: "Responsive online shopping interface.",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="My work" title="Projects">
      <div className="grid gap-7 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass group overflow-hidden rounded-3xl"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={`${p.title} preview`}
                loading="lazy"
                width={800}
                height={600}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
