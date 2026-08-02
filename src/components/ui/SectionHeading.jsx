import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">{title}</h2>
      {description && <p className="text-ink-500 text-base leading-relaxed">{description}</p>}
    </motion.div>
  )
}
