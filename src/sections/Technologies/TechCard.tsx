import { motion } from 'framer-motion'
import type { Technology } from '@/types'
import { TechIcon } from './TechIcon'
import { cn } from '@/utils/cn'

interface TechCardProps {
  tech: Technology
  index: number
}

export function TechCard({ tech, index }: TechCardProps) {
  const isCloud = tech.category === 'cloud'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        'group glass rounded-xl p-5 flex flex-col gap-3 transition-all duration-300',
        isCloud
          ? 'hover:border-orange-500/20 hover:bg-white/[0.05] border-white/5'
          : 'hover:border-accent-violet/20 hover:bg-white/[0.07]'
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-background flex items-center justify-center shrink-0">
          <TechIcon name={tech.icon} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-heading font-semibold text-white text-sm">{tech.name}</span>
          {isCloud && (
            <span className="text-[10px] text-orange-400/70 font-medium">Aprendiendo</span>
          )}
        </div>
      </div>

      <p className="text-white/50 text-xs leading-relaxed">{tech.description}</p>

      <div className="pt-1 border-t border-white/5">
        <p className="text-xs text-white/30 leading-relaxed">
          <span className={cn('font-medium', isCloud ? 'text-orange-400/60' : 'text-accent-violet/70')}>
            {isCloud ? 'Aplicación: ' : 'Por qué: '}
          </span>
          {tech.why}
        </p>
      </div>
    </motion.div>
  )
}
