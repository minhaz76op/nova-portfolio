import { motion, useScroll, useSpring } from 'framer-motion'
import BackgroundVideo from './components/BackgroundVideo.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      {/* Top/Right Red Glow Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 right-0 w-1.5 h-full bg-gradient-to-b from-red-600 via-rose-500 to-amber-600 z-50 origin-top shadow-[0_0_15px_#ef4444]"
        style={{ scaleY }}
      />

      <BackgroundVideo />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

