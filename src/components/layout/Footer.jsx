import { profile } from '../../data/cv'

export default function Footer() {
  return (
    <footer className="border-t border-base-600/40 py-10">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-500">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React & Vite.</p>
        <div className="flex gap-6">
          <a href="#top" className="hover:text-ink-100 transition-colors">Back to top</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink-100 transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink-100 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
