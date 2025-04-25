export default function TechStack() {
  const tech = [
    'React', 'TypeScript', 'Next.js', 'Remix', 'Tailwind CSS',
    'Supabase', 'Prisma', 'SQL', 'Node.js', 'Express', 'Vercel'
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
        {tech.map((item) => (
          <li key={item} className="bg-gray-100 px-3 py-1 rounded-md shadow-sm">{item}</li>
        ))}
      </ul>
    </section>
  )
}