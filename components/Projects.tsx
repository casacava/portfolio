export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <img src="/swapped-thumbnail.jpg" alt="Swapped app" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">🧩 Swapped</h3>
            <p className="text-sm text-gray-600 mb-2">
              A skill-swapping web app for exchanging knowledge, not currency.
            </p>
            <ul className="text-xs text-gray-500 mb-2 list-disc list-inside">
              <li>Next.js, Supabase, Tailwind, TypeScript</li>
              <li>Onboarding UX, profile matching, responsive UI</li>
            </ul>
            <a href="https://github.com/casacava/swapped" className="text-sm text-blue-600 hover:underline">GitHub Repo</a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <img src="/tenant-thumbnail.jpg" alt="Tenant app" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">🏠 Tenant</h3>
            <p className="text-sm text-gray-600 mb-2">
              AI-powered apartment assistant that simplifies resident life.
            </p>
            <ul className="text-xs text-gray-500 mb-2 list-disc list-inside">
              <li>React, TypeScript, Tailwind, Appwrite, Supabase, PrismaORM</li>
              <li>Noise complaints, messaging, guest registration</li>
            </ul>
            <div className="flex gap-2 text-sm">
              <a href="https://tenant-app-psi.vercel.app/" className="text-blue-600 hover:underline">Live App</a>
              <a href="https://github.com/TheDThompsonDev/tenant-app" className="text-blue-600 hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/posts/dthompsondev_this-is-our-solution-to-fixing-apartment-ugcPost-7311594706205831168-mvFV" className="text-blue-600 hover:underline">Demo</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <img src="/atlas-thumbnail.jpg" alt="CM ATLAS" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">🔍 CM ATLAS™</h3>
            <p className="text-sm text-gray-600 mb-2">
              Blockchain transaction search tool (proprietary, not open-source).
            </p>
            <ul className="text-xs text-gray-500 mb-2 list-disc list-inside">
              <li>React, TypeScript, Jest, custom design system</li>
              <li>Search interface, unit testing, data display</li>
            </ul>
            <span className="text-xs text-gray-400 italic">Codebase not public</span>
          </div>
        </div>
      </div>
    </section>
  )
}