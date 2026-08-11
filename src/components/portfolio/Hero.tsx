import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import techBg from "@/assets/tech-bg.jpg";
import photo from "@/assets/mujib.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full max-w-full items-center overflow-hidden pt-20 sm:pt-24"
    >
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

      <div className="relative mx-auto flex w-full max-w-7xl box-border flex-col items-center gap-8 px-4 py-10 text-center sm:px-6 sm:gap-12 sm:py-16 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 w-full min-w-0 lg:order-1"
        >
          <span className="glass inline-flex rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            Werabe University
          </span>
          <h1 className="mt-5 text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-6xl">

            Mujib <span className="text-gradient">Mohammed</span>
          </h1>
          <p className="mt-4 text-base font-semibold text-accent sm:text-xl">Frontend Developer</p>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            3rd Year Information Technology Student
          </p>
          <p className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-lg">
            "Building Modern, Responsive, and User-Friendly Websites."
          </p>


          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="glow inline-flex w-full items-center justify-center gap-2 sm:w-auto rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={resume.url}
              download="Mujib_Mohammed_Resume.pdf"
              className="glass inline-flex w-full items-center justify-center gap-2 sm:w-auto rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent sm:w-auto px-6 py-3 text-sm font-semibold text-accent transition-transform hover:scale-105"
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
              className="relative h-44 w-44 rounded-full border-4 border-accent/70 object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
