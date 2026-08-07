import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import techBg from "@/assets/tech-bg.jpg";
import photo from "@/assets/mujib.jpg.asset.json";
import resume from "@/assets/resume.docx.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <img
        src={techBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Werabe University
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            Mujib <span className="text-gradient">Mohammed</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">Frontend Developer</p>
          <p className="mt-1 text-base text-muted-foreground">
            3rd Year Information Technology Student
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            "Building Modern, Responsive, and User-Friendly Websites."
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={resume.url}
              download="Mujib_Mohammed_Resume.docx"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-transform hover:scale-105"
            >
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="justify-self-center"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="glow absolute inset-0 rounded-full bg-primary/40 blur-2xl" />
            <img
              src={photo.url}
              alt="Portrait of Mujib Mohammed"
              width={360}
              height={360}
              className="relative h-56 w-56 rounded-full border-4 border-accent/70 object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
