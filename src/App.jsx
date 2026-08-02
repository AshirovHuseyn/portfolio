import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Certificates from './components/sections/Certificates'
import CurrentlyLearning from './components/sections/CurrentlyLearning'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
