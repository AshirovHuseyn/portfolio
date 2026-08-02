import { motion } from 'framer-motion'
import { ShieldCheck, Server, Wrench, Network } from 'lucide-react'
import { experience } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'

const icons = [Network, Server, ShieldCheck, Wrench]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section">
        <SectionHeading eyebrow="Professional Experience" title="Where the hands-on work happened" />

        {experience.map((job) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="card p-7 sm:p-9"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-ink-100">{job.role}</h3>
                <p className="text-route-400 font-medium">{job.company}</p>
              </div>
              <span className="text-sm text-ink-500 font-mono">{job.location}</span>
            </div>

            <ul className="grid sm:grid-cols-2 gap-5">
              {job.achievements.map((a, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-lg bg-route-500/10 border border-route-500/25 flex items-center justify-center">
                      <Icon size={15} className="text-route-400" />
                    </span>
                    <p className="text-sm text-ink-300 leading-relaxed">{a}</p>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
