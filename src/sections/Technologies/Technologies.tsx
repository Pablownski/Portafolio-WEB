import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechCard } from './TechCard'
import { technologies } from '@/data/technologies'

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'tooling', label: 'Herramientas & DevOps' },
  { key: 'cloud', label: 'Cloud & Infraestructura (Aprendiendo)' },
] as const

export function Technologies() {
  return (
    <section id="technologies" aria-label="Tecnologías" className="py-32 bg-background-secondary/30">
      <div className="section-padding">
        <SectionHeader
          label="Stack"
          title="Tecnologías con las que he trabajado"
        />

        {CATEGORIES.map((cat) => (
          <div key={cat.key} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-medium text-white/30 uppercase tracking-widest mb-6 flex items-center gap-3"
            >
              <span className="flex-1 h-px bg-white/5" />
              {cat.label}
              <span className="flex-1 h-px bg-white/5" />
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {technologies
                .filter((t) => t.category === cat.key)
                .map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
