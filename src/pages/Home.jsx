import AppShell from '../components/AppShell'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <Features />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">From observation to action</h3>
              <p className="mt-3 text-gray-600">Capture notes, turn them into skill plans, and review progress in one place. Built to be fast and distraction-free.</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Quick-add notes during sessions</li>
                <li>• Tag skills like speed, strength, tactics</li>
                <li>• Assign clear goals and timeframes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-600/10 to-emerald-500/10 border border-blue-600/20" />
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  )
}
