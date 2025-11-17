import AppShell from '../components/AppShell'

const tiers = [
  { name: 'Starter', price: 'Free', desc: 'For trying things out', features: ['Up to 5 athletes', 'Unlimited notes', 'Basic insights'] },
  { name: 'Pro', price: '$12/mo', desc: 'For solo coaches', features: ['Up to 100 athletes', 'Skill plans', 'Export CSV', 'Priority support'] },
  { name: 'Team', price: '$29/mo', desc: 'For clubs & schools', features: ['Unlimited athletes', 'Shared access', 'Advanced insights', 'Onboarding help'] },
]

export default function Pricing() {
  return (
    <AppShell>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
            <p className="mt-3 text-gray-600">Start free, upgrade when you need more.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-xl border border-gray-200 p-6 bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-3xl font-extrabold">{t.price}</p>
                <p className="mt-2 text-gray-600">{t.desc}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {t.features.map((f) => (<li key={f}>• {f}</li>))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700">Choose {t.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  )
}
