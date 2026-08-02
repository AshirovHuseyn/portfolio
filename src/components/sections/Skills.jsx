import { motion } from 'framer-motion'
import { skillCategories } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-base-900/50 border-y border-base-600/40">
      <div className="section">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools across the stack"
          description="From switch configuration to server hardening — organized by the layer of the infrastructure they support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card p-6"
            >
              <h3 className="font-display font-semibold text-ink-100 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-base-700/50 border border-base-600/60 px-2.5 py-1 text-xs text-ink-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
