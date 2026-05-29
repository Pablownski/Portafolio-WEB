import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-white/5 text-white/70 border border-white/10',
        variant === 'accent' && 'bg-accent-violet/10 text-accent-violet border border-accent-violet/20',
        variant === 'outline' && 'border border-white/20 text-white/60',
        className
      )}
    >
      {children}
    </span>
  )
}
