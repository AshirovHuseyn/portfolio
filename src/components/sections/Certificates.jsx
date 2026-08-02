import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="section">
        <SectionHeading eyebrow="Certificates" title="Credentials earned so far" />

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-5 flex items-start gap-4"
            >
              <span className="flex-shrink-0 h-10 w-10 rounded-xl bg-signal-500/10 border border-signal-500/25 flex items-center justify-center">
                <Award size={18} className="text-signal-400" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink-100 leading-snug">{c.name}</h3>
                {(c.detail || c.issuer) && (
                  <p className="text-xs text-ink-500 mt-1 font-mono">
                    {[c.issuer, c.detail].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
