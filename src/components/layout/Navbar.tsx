import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
  { label: 'Sobre mí', href: 'about' },
  { label: 'Tecnologías', href: 'technologies' },
  { label: 'Proyectos', href: 'projects' },
  { label: 'GitHub', href: 'github' },
  { label: 'Contacto', href: 'contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.href)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}
    >
      <nav className="section-padding flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-accent-violet rounded-md"
          aria-label="Scroll to top"
        >
          <Code2 className="w-5 h-5 text-accent-violet" />
          <span className="font-heading font-semibold text-white group-hover:text-accent-violet transition-colors">
            JP<span className="text-accent-violet">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  activeSection === item.href
                    ? 'text-white bg-white/5'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
                aria-current={activeSection === item.href ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background-secondary border-b border-white/5"
          >
            <ul className="section-padding py-4 flex flex-col gap-1" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors',
                      activeSection === item.href
                        ? 'text-white bg-white/5'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
