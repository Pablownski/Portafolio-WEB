import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/sections/Hero/Hero'
import { About } from '@/sections/About/About'
import { Technologies } from '@/sections/Technologies/Technologies'
import { Projects } from '@/sections/Projects/Projects'
import { GitHub } from '@/sections/GitHub/GitHub'
import { TechnicalDecisions } from '@/sections/TechnicalDecisions/TechnicalDecisions'
import { Contact } from '@/sections/Contact/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <GitHub />
        <TechnicalDecisions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
