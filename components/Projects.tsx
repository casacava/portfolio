export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold">🧩 Swapped</h3>
          <p className="text-gray-700">A skill-swapping web app for exchanging knowledge, not currency.</p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
            <li>Built with: Next.js, Supabase, Tailwind, TypeScript</li>
            <li>Features: Onboarding UX, real-time profile matching, custom auth, responsive UI</li>
            <li>Status: In development</li>
          </ul>
          <a href="https://github.com/casacava/swapped" className="text-blue-600 hover:underline text-sm mt-1 inline-block">GitHub Repo</a>
        </div>

        <div>
          <h3 className="text-xl font-semibold">🏠 Tenant</h3>
          <p className="text-gray-700">AI-powered apartment hunting assistant with seamless resident tools.</p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
            <li>Built with: React, TypeScript, Tailwind, Shadcn/UI, MUI, Appwrite, Supabase, PrismaORM</li>
            <li>Features: Noise complaints, AI chat integration, 2-way messaging, guest vehicle registration</li>
            <li>Contributions: Chat + form UX, dynamic input handling, AI prompt engineering, mobile responsiveness, component theming, state management</li>
          </ul>
          <div className="flex gap-4 text-sm mt-1">
            <a href="https://tenant-app-psi.vercel.app/" className="text-blue-600 hover:underline">Live App</a>
            <a href="https://github.com/TheDThompsonDev/tenant-app" className="text-blue-600 hover:underline">GitHub Repo</a>
            <a href="https://www.linkedin.com/posts/dthompsondev_this-is-our-solution-to-fixing-apartment-ugcPost-7311594706205831168-mvFV" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">🔍 CM ATLAS™</h3>
          <p className="text-gray-700">Blockchain transaction search tool (proprietary, not open-source).</p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
            <li>Built with: React, TypeScript, Jest, custom design system</li>
            <li>Features: Search interface UX, robust unit testing, data display components</li>
          </ul>
        </div>
      </div>
    </section>
  )
}