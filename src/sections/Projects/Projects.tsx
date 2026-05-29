import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from './ProjectCard'
import { FeaturedProject } from './FeaturedProject'
import { projects } from '@/data/projects'

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" aria-label="Projects" className="py-32">
      <div className="section-padding">
        <SectionHeader
          label="Proyectos"
          title="Lo que he construido"
          description="Cada proyecto es un caso de estudio técnico — enfocado en decisiones, no solo en entrega."
        />

        {featured && (
          <div className="mb-12">
            <FeaturedProject project={featured} />
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
