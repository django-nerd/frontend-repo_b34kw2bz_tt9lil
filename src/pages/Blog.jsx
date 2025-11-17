import AppShell from '../components/AppShell'

const posts = [
  { title: 'Designing better practice sessions', excerpt: 'How to turn observations into focused drills that build skills fast.' },
  { title: 'What to track for real skill growth', excerpt: 'A practical framework to measure progress without complexity.' },
  { title: 'Building trust with athlete notes', excerpt: 'How transparent feedback drives motivation and performance.' },
]

export default function Blog() {
  return (
    <AppShell>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">The CoachNotes Blog</h1>
          <p className="mt-3 text-gray-600 text-center">Practical insights on coaching, skill development, and team culture.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="rounded-xl border border-gray-200 p-6 bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-600/10 border border-emerald-500/20" />
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">Read more</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  )
}
