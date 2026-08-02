import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { profile } from '../../data/cv'
import Button from '../ui/Button'
import NetworkMesh from '../ui/NetworkMesh'
import LinkedinIcon from '../ui/LinkedinIcon'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="absolute right-0 top-0 w-full max-w-2xl opacity-70 pointer-events-none">
        <NetworkMesh className="w-full h-auto animate-floatSlow" />
      </div>

      <div className="section relative grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-5">Baku, Azerbaijan · Available for junior roles</p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight mb-6">
            {profile.name}
            <span className="block text-ink-500 text-2xl sm:text-3xl font-medium mt-3">
              Junior Network Engineer & System Administrator
            </span>
          </h1>

          <p className="text-ink-300 text-lg leading-relaxed max-w-xl mb-10">
            Hands-on with Cisco switching, Windows Server infrastructure, and Red Hat Linux
            administration — with a security-first approach to keeping systems reliable and
            hardened.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={profile.resumeUrl} download variant="primary" icon={Download}>
              Download CV
            </Button>
            <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary" icon={LinkedinIcon}>
              LinkedIn
            </Button>
            <Button href="#contact" variant="ghost" icon={Mail}>
              Contact me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto lg:mx-0"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2rem] overflow-hidden border border-base-600/70 shadow-2xl">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-950/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 card px-4 py-2.5 text-xs font-mono text-route-400 shadow-lg">
            status: <span className="text-ink-100">open to work</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
