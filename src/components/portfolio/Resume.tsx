import { motion } from "framer-motion";
import { Section, fadeUp } from "./Section";
import { Download, Eye } from "lucide-react";
import resume from "@/assets/resume.pdf.asset.json";

export function Resume() {
  return (
    <Section id="resume" eyebrow="My CV" title="Resume">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="glass glow mx-auto max-w-2xl rounded-3xl p-6 sm:p-10 text-center"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 text-accent">
          <Download className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl font-bold sm:text-2xl">My Resume</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          A complete overview of my skills, education, and projects as a Frontend Developer and IT
          student at Werabe University.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 sm:w-auto text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View Resume <Eye className="h-4 w-4" />
          </a>
          <a
            href={resume.url}
            download="Mujib_Mohammed_Resume.pdf"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3 sm:w-auto text-sm font-semibold transition-transform hover:scale-105"
          >
            Download Resume <Download className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
