import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-24">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  )
}