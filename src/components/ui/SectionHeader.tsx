import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-medium text-accent-violet uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20">
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
