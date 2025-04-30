export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src="/cass.png"
          alt="Cass Cav"
          className="w-32 h-32 rounded-full object-cover border border-gray-300 mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Cass C.</h1>
        <p className="text-lg text-gray-600 mb-4">Frontend-leaning Fullstack Software Engineer</p>

        <div className="grid grid-cols-2 gap-4">
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-black px-4 py-2 rounded-md hover:bg-gray-100"
          >
            See My Work
          </a>
          <a
            href="https://github.com/casacava"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-2 rounded-md hover:bg-gray-100"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/casacava/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-4 py-2 rounded-md hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="text-center md:text-left">
        <p className="text-2xl md:text-3xl font-light leading-snug">
          Passionate about creating great experiences through clean, scalable, and user-first software design.
        </p>
      </div>
    </section>
  )
}