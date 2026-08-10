import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { ExternalLink, Utensils, User } from "lucide-react";
import werabeFoodImg from "@/assets/werabe-food.jpg";
import portfolioV1Img from "@/assets/portfolio-v1.jpg";

const projects = [
  {
    img: werabeFoodImg,
    title: "Werabe Food Restaurant Website",
    desc: "An interactive food ordering and restaurant website built for showcasing menu items, online reservations, and local dining services.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://werabefoodrestorant.netlify.app/",
    icon: Utensils,
  },
  {
    img: portfolioV1Img,
    title: "Personal Portfolio Website",
    desc: "A sleek, fully responsive personal portfolio showcasing developer background, IT skill sets, and personal projects.",
    stack: ["Front-end Web Development", "Responsive UI/UX"],
    live: "https://mujib-personal-portfoliwebsite.netlify.app/",
    icon: User,
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="My work" title="Projects">
      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass group flex flex-col overflow-hidden rounded-3xl transition-shadow duration-500 hover:glow"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={`${p.title} preview`}
                loading="lazy"
                width={800}
                height={600}
                className="h-48 w-full object-cover sm:h-56 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="min-w-0 text-base font-bold leading-tight sm:text-lg">{p.title}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
