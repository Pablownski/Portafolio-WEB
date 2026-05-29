import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { OrbitingBadges } from './OrbitingBadges'
import { InterestBadge } from './InterestBadge'

const INTERESTS = [
  { emoji: '⚽', label: 'Fútbol' },
  { emoji: '🤍', label: 'Real Madrid' },
  { emoji: '🎵', label: 'Música' },
  { emoji: '💻', label: 'Ingeniería Frontend' },
  { emoji: '📚', label: 'Aprendizaje continuo' },
]

const STATS = [
  { value: '3er', label: 'Año Ing. Informática' },
  { value: 'UVG', label: 'Universidad del Valle' },
  { value: 'GT', label: 'Guatemalteco' },
]

export function About() {
  return (
    <section id="about" aria-label="Sobre mí" className="py-32">
      <div className="section-padding">
        <SectionHeader
          label="Sobre mí"
          title="La persona detrás del código"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with orbiting badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Glow ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-violet/30 to-accent-blue/30 blur-2xl scale-110"
              />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden gradient-border animate-glow">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Juan Pablo Salguero"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    const parent = img.parentElement
                    if (parent) {
                      parent.classList.add(
                        'bg-gradient-to-br',
                        'from-accent-purple',
                        'to-accent-blue',
                        'flex',
                        'items-center',
                        'justify-center'
                      )
                      parent.insertAdjacentHTML(
                        'beforeend',
                        '<span class="font-heading text-5xl font-bold text-white">JP</span>'
                      )
                    }
                  }}
                />
              </div>

              {/* Orbiting tech badges */}
              <OrbitingBadges />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-white/60 text-base leading-relaxed">
              <p>
                Hola, soy <span className="text-white font-semibold">Juan Pablo</span>, estudiante guatemalteco
                de Ingeniería en Ciencias de la Computación, cursando el tercer año en la{' '}
                <span className="text-white font-medium">
                  Universidad del Valle de Guatemala (UVG)
                </span>
                , enfocado en construir aplicaciones web modernas y responsivas.
              </p>
              <p>
                He trabajado con tecnologías como{' '}
                <span className="text-accent-violet font-medium">React</span>,{' '}
                <span className="text-accent-violet font-medium">TypeScript</span> y{' '}
                <span className="text-accent-violet font-medium">TailwindCSS</span> para crear
                experiencias de usuario limpias y arquitecturas frontend mantenibles. Me importa bastante no solo la creación
                sino también la experiencia de las personas que usan lo que construyo.
              </p>
              <p>
                Más allá de la programación, soy apasionado del fútbol, fanático del Real Madrid de toda la vida
                y disfruto escuchar música en mi tiempo libre.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="font-heading text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Interest badges */}
            <div className="space-y-2">
              <p className="text-xs text-white/30 uppercase tracking-widest font-medium">
                Intereses
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, i) => (
                  <InterestBadge key={interest.label} interest={interest} delay={i * 0.05} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
