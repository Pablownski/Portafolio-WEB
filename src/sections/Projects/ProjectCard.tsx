import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group glass rounded-xl overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 bg-background-secondary">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-white text-lg">{project.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-1" role="list">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-white/40">
              <span className="text-accent-violet mt-0.5 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1">
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
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
              size="sm"
              variant="ghost"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              Source
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
