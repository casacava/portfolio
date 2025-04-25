import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-[#fdf7f2] text-gray-800 min-h-screen">
      <header className="sticky top-0 z-50 bg-[#fdf7f2] border-b border-gray-200 shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center text-sm">
          <span className="font-bold text-lg">Cass</span>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#tech" className="hover:underline">Tech</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        <Hero />
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="tech"><TechStack /></section>
        <section id="contact"><Contact /></section>
      </main>
    </main>
  )
}