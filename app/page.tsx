import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import FadeInSection from '@/components/FadeInSection'

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
            <li><a href="#testimonial" className="hover:underline">Feedback</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection delay={0.1}><section id="about"><About /></section></FadeInSection>
        <FadeInSection delay={0.2}><section id="projects"><Projects /></section></FadeInSection>
        <FadeInSection delay={0.3}><section id="tech"><TechStack /></section></FadeInSection>
        <FadeInSection delay={0.4}><section id="testimonial"><Testimonial /></section></FadeInSection>
        <FadeInSection delay={0.5}><section id="contact"><Contact /></section></FadeInSection>
      </main>
    </main>
  )
}