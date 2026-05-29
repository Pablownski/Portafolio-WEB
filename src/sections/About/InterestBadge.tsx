import { motion } from 'framer-motion'

interface Interest {
  emoji: string
  label: string
}

interface InterestBadgeProps {
  interest: Interest
  delay: number
}

export function InterestBadge({ interest, delay }: InterestBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70 hover:border-accent-violet/30 hover:text-white transition-colors"
    >
      <span role="img" aria-hidden="true">{interest.emoji}</span>
      {interest.label}
    </motion.span>
  )
}
