export default function Hero() {
  return (
    <section className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Cass Cav</h1>
      <p className="text-xl md:text-2xl text-gray-600">Frontend-leaning Fullstack Software Engineer</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="https://github.com/casacava" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/casacava" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="#" className="text-blue-600 hover:underline">Resume</a>
      </div>
    </section>
  )
}