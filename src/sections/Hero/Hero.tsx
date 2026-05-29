import { motion } from 'framer-motion'
import { Download, ArrowDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/ui/GitHubIcon'

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      aria-label="Introducción"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-purple/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-blue/8 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-padding relative z-10 flex flex-col items-center text-center pt-24">
        {/* Available badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mb-6"
        >
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Juan Pablo{' '}
          <span className="gradient-text">Salguero</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="font-heading text-xl sm:text-2xl text-white/40 mb-6 font-medium"
        >
          Desarrollador Junior
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="max-w-xl text-base sm:text-lg text-white/50 leading-relaxed mb-10"
        >
          Desarrollador junior con ganas de construir web modernas, responsivas y enfocadas en la 
          satisfacción y comodidad de las personas.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="flex flex-col sm:flex-row items-center gap-3 mb-16"
        >
          <Button size="lg" onClick={scrollToProjects} className="group">
            Ver proyectos
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>

          <Button
            as="a"
            href="https://github.com/Pablownski"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </Button>

          <Button
            as="a"
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Ir a la sección sobre mí"
          className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors animate-float"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  )
}
