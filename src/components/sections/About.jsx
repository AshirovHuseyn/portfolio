import { motion } from 'framer-motion'
import { profile, strengths, interests } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section">
        <SectionHeading eyebrow="About" title="Grounded in infrastructure, driven by security" />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="space-y-5 text-ink-300 leading-relaxed text-[15px]">
            <p>{profile.summary}</p>
            <p>{profile.objective}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card p-5"
              >
                <h3 className="text-sm font-semibold text-ink-100 mb-1.5">{s.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2.5">
          {interests.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-base-600 bg-base-800/60 px-3.5 py-1.5 text-xs font-mono text-ink-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
