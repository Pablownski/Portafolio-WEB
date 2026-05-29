import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/types'

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden glass rounded-2xl p-1 hover:border-accent-violet/30 transition-colors group"
      aria-label={`Featured project: ${project.title}`}
    >
      {/* Gradient glow on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(124, 58, 237, 0.08), transparent 60%)',
        }}
      />

      <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-0 rounded-xl overflow-hidden">
        {/* Preview image */}
        <div className="relative overflow-hidden bg-background-secondary min-h-[240px] lg:min-h-[360px]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:to-background/60"
          />
          {/* Featured badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent-violet/20 border border-accent-violet/30 text-accent-violet">
              <Star className="w-3 h-3" />
              Proyecto Destacado
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between gap-6 bg-background-secondary/30">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{project.longDescription}</p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Technical highlights */}
            <div className="space-y-2 pt-2">
              <p className="text-xs text-white/30 uppercase tracking-widest font-medium">
                Aspectos Técnicos
              </p>
              <ul className="space-y-1" role="list">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="text-accent-violet mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo en vivo
            </Button>
            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                Código
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
