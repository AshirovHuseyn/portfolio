import { motion } from 'framer-motion'
import { currentlyLearning } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24 sm:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Currently Learning"
          title="Actively working toward"
          description="The next certifications on the path, building directly on existing hands-on experience."
        />

        <div className="relative grid sm:grid-cols-2 gap-6 max-w-2xl">
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-base-600/60 -translate-y-1/2" />
          {currentlyLearning.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative card p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-2 w-2 rounded-full bg-route-400 animate-pulseDot" />
                <h3 className="font-display font-semibold text-ink-100">{item.name}</h3>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
