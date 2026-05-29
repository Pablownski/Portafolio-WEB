import { motion } from 'framer-motion'
import { Mail, Download, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { GitHubIcon } from '@/components/ui/GitHubIcon'

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sal24374@uvg.edu.gt',
    href: 'mailto:sal24374@uvg.edu.gt',
    external: false,
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/Pablownski',
    href: 'https://github.com/Pablownski',
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" aria-label="Contacto" className="py-32 bg-background-secondary/30">
      <div className="section-padding">
        <SectionHeader
          label="Contacto"
          title="Construyamos algo juntos"
          description="De momento no disponible para trabajo, pero siempre abierto a escuchar sugerencias."
        />

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {LINKS.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group glass rounded-xl p-5 flex flex-col gap-3 hover:border-accent-violet/30 hover:bg-white/[0.07] transition-all duration-300"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-accent-violet/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent-violet" aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent-violet transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">{link.label}</p>
                    <p className="text-white text-xs font-medium truncate">{link.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4 pt-4"
          >
            <p className="text-white/30 text-sm">¿Prefieres un documento?</p>
            <Button
              as="a"
              href={`${import.meta.env.BASE_URL}cv.html`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Descargar CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
