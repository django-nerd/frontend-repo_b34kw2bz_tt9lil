import { Activity, ClipboardList, LineChart, Users } from 'lucide-react'

const features = [
  {
    title: 'Athlete Profiles',
    description: 'Keep a clean list of athletes with tags, positions, and quick filters to stay organized.',
    icon: Users,
  },
  {
    title: 'Structured Notes',
    description: 'Attach observations to individuals, add focus skills, and rate sessions 1-5.',
    icon: ClipboardList,
  },
  {
    title: 'Skill Plans',
    description: 'Create targeted plans with goals and timeframes. Track progression across weeks.',
    icon: Activity,
  },
  {
    title: 'Progress Insights',
    description: 'See trends across ratings and plans with simple, coach-friendly analytics.',
    icon: LineChart,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for modern coaching</h2>
          <p className="mt-3 text-gray-600">A focused toolkit to capture what matters and move athletes forward.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
