import { motion } from 'framer-motion'
import { Star, Clock, ExternalLink, AlertCircle } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useGitHubRepos } from '@/hooks/useGitHubRepos'
import { formatRelativeDate } from '@/utils/formatDate'

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  HTML: '#e34f26',
  CSS: '#1572b6',
  Python: '#3776ab',
}

export function GitHub() {
  const { repos, loading, error } = useGitHubRepos()

  return (
    <section id="github" aria-label="Repositorios de GitHub" className="py-32 bg-background-secondary/30">
      <div className="section-padding">
        <SectionHeader
          label="GitHub"
          title="Trabajo open source"
          description="Repositorios en tiempo real de GitHub."
        />

        {/* Loading state */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 animate-pulse space-y-3"
                aria-hidden="true"
              >
                <div className="h-4 bg-white/5 rounded w-3/4" />
                <div className="h-3 bg-white/5 rounded w-full" />
                <div className="h-3 bg-white/5 rounded w-2/3" />
                <div className="flex gap-2">
                  <div className="h-5 w-16 bg-white/5 rounded-full" />
                  <div className="h-5 w-12 bg-white/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <AlertCircle className="w-8 h-8 text-white/20" aria-hidden="true" />
            <p className="text-white/40 text-sm">No se pudieron cargar los repositorios</p>
            <p className="text-white/20 text-xs font-mono">{error}</p>
            <Button
              as="a"
              href="https://github.com/Pablownski"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              Ver en GitHub
            </Button>
          </div>
        )}

        {/* Repo grid */}
        {!loading && !error && repos.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group glass rounded-xl p-5 flex flex-col gap-3 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer"
                  aria-label={`Repository: ${repo.name}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-semibold text-white text-sm group-hover:text-accent-violet transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 shrink-0 mt-0.5 transition-colors" />
                  </div>

                  {repo.description && (
                    <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-[10px] px-2 py-0">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-xs text-white/30 mt-auto pt-1">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: LANG_COLORS[repo.language] ?? '#8b5cf6',
                          }}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {formatRelativeDate(repo.updated_at)}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                as="a"
                href="https://github.com/Pablownski"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
              >
                <GitHubIcon className="w-4 h-4" />
                Ver todos los repositorios
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
