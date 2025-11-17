import AppShell from '../components/AppShell'

export default function About() {
  return (
    <AppShell>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">About CoachNotes</h1>
          <p className="mt-4 text-gray-700">CoachNotes is built for coaches and teachers who want a clean, focused way to capture observations and guide athlete development. We believe the best tools get out of the way and help you act on what you see.</p>
          <p className="mt-4 text-gray-700">Our approach is simple: structure your notes, connect them to goals, and surface trends over time. Whether you coach a single athlete or a full program, CoachNotes adapts to your workflow.</p>
        </div>
      </section>
    </AppShell>
  )
}
