import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import TopologyDiagram from './TopologyDiagram'

// Reusable project card. `visual` accepts a React node (e.g. a diagram or
// screenshot); pass nothing and it falls back to a quiet placeholder tile
// so future projects don't need a bespoke component.
export default function ProjectCard({ project, visual, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group card overflow-hidden hover:border-route-500/40 transition-colors duration-300"
    >
      <div className="aspect-[16/9] bg-base-900 overflow-hidden border-b border-base-600/50">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
          {visual ?? <TopologyDiagram />}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold text-ink-100 mb-2">{project.title}</h3>
        <p className="text-sm text-ink-300 leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md bg-base-700/50 border border-base-600/60 px-2.5 py-1 text-xs font-mono text-ink-500"
            >
              {t}
            </span>
          ))}
        </div>

        {project.features?.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-ink-500 flex gap-2">
                <span className="text-route-400 mt-1">›</span>
                {f}
              </li>
            ))}
          </ul>
        )}

        {project.challenges && (
          <p className="text-sm text-ink-500 leading-relaxed mb-6 border-l-2 border-base-600 pl-3">
            {project.challenges}
          </p>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-route-400 hover:text-route-500 transition-colors"
          >
            {project.linkLabel ?? 'View project'}
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  )
}
