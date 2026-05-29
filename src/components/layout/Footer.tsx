import { Mail, Code2 } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 mt-24">
      <div className="section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-accent-violet" />
          <span className="font-heading text-sm text-white/40">
            Juan Pablo Salguero &copy; {year}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Pablownski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-white/40 hover:text-white transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:chatiouvg@gmail.com"
            aria-label="Send email"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

        </div>
      </div>
    </footer>
  )
}
