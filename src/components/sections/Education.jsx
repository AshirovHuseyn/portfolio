import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education, languages } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-base-900/50 border-y border-base-600/40">
      <div className="section grid lg:grid-cols-[1.3fr_0.7fr] gap-14">
        <div>
          <SectionHeading eyebrow="Education" title="Academic foundation" />
          <div className="space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card p-6 flex items-start gap-4"
              >
                <span className="flex-shrink-0 h-10 w-10 rounded-xl bg-route-500/10 border border-route-500/25 flex items-center justify-center">
                  <GraduationCap size={18} className="text-route-400" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-100">{e.degree}</h3>
                  <p className="text-sm text-ink-500">{e.institution}</p>
                </div>
                <span className="ml-auto text-xs font-mono text-ink-500 border border-base-600 rounded-full px-3 py-1 whitespace-nowrap">
                  {e.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Languages</p>
          <div className="space-y-3">
            {languages.map((l) => (
              <div key={l.name} className="card p-4">
                <p className="text-sm font-semibold text-ink-100">{l.name}</p>
                <p className="text-xs text-ink-500 mt-0.5">{l.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
