import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../../data/cv'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import LinkedinIcon from '../ui/LinkedinIcon'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-base-900/50 border-t border-base-600/40">
      <div className="section grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's talk about an opportunity" />
          <p className="text-ink-500 leading-relaxed mb-8 max-w-md">
            Open to junior network engineering, system administration, IT support, and SOC
            analyst roles. Reach out directly or send a message.
          </p>

          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-ink-300 hover:text-ink-100 transition-colors">
              <span className="h-9 w-9 rounded-lg bg-base-800 border border-base-600 flex items-center justify-center">
                <Mail size={16} className="text-route-400" />
              </span>
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-ink-300 hover:text-ink-100 transition-colors">
              <span className="h-9 w-9 rounded-lg bg-base-800 border border-base-600 flex items-center justify-center">
                <LinkedinIcon size={16} className="text-route-400" />
              </span>
              linkedin.com/in/huseyn-asirov
            </a>
            <div className="flex items-center gap-3 text-sm text-ink-300">
              <span className="h-9 w-9 rounded-lg bg-base-800 border border-base-600 flex items-center justify-center">
                <MapPin size={16} className="text-route-400" />
              </span>
              {profile.location}
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="input"
              />
            </Field>
            <Field label="Your email">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="input"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about the role or opportunity..."
              className="input resize-none"
            />
          </Field>
          <Button as="button" type="submit" icon={Send} className="w-full sm:w-auto justify-center">
            Send message
          </Button>
          <p className="text-xs text-ink-500">
            Opens your email client with this message addressed to {profile.email}.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono text-ink-500 mb-2">{label}</span>
      {children}
    </label>
  )
}
