import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Layers, Zap, Shield, Smartphone, Cpu, Eye } from 'lucide-react'

const DECISIONS = [
  {
    icon: Cpu,
    title: 'Por qué TypeScript',
    summary: 'Para cometer menos errores sin darme cuenta.',
    detail:
      'Lo uso porque me avisa cuando estoy pasando el tipo de dato equivocado o cuando me falta algo en un objeto. Aun me cuesta, pero me ha indicado de algunos errores.',
   },
   {
    icon: Zap,
    title: 'Por qué Vite',
    summary: 'Porque arranca rápido y no me complica la vida.',
    detail:
      'Cuando lo comparé con otras opciones, Vite era el que menos configuración necesitaba y el que más rápido recargaba al hacer cambios. No entiendo todo lo que hace internamente, pero para mis proyectos funciona bien.',
  },
  {
    icon: Layers,
    title: 'Cómo organizo los componentes',
    summary: 'Cada componente hace una sola cosa.',
    detail:
      'Trato de no mezclar demasiada lógica en un solo componente. Si algo se repite o se hace muy grande, lo separo. No siempre lo logro a la primera, pero es lo que intento mantener.',
  },
  {
    icon: Smartphone,
    title: 'Diseño responsivo',
    summary: 'Primero pienso en móvil, luego en desktop.',
    detail:
      'Con Tailwind es fácil porque las clases como sm: y lg: te obligan a pensar primero en pantallas pequeñas. Me ayudó a entender por qué es mejor empezar desde el tamaño más pequeño y escalar hacia arriba.',
  },
]

export function TechnicalDecisions() {
  return (
    <section id="decisions" aria-label="Decisiones técnicas" className="py-32">
      <div className="section-padding">
        <SectionHeader
          label="Decisiones"
          title="Por qué hice las cosas así"
          description="No siempre tengo la respuesta perfecta, pero trato de razonar cada decisión que tomo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DECISIONS.map((decision, i) => {
            const Icon = decision.icon
            return (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-xl p-6 flex flex-col gap-4 hover:border-accent-violet/20 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-violet/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent-violet" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm">
                      {decision.title}
                    </h3>
                    <p className="text-accent-violet/70 text-xs mt-0.5">{decision.summary}</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{decision.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
