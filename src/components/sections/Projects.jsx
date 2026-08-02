import { projects } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-base-900/50 border-y border-base-600/40">
      <div className="section">
        <SectionHeading
          eyebrow="Projects"
          title="Applied lab work"
          description="Practical builds that translate certification study into working infrastructure."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
