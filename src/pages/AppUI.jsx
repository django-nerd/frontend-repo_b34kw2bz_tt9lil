import AppShell from '../components/AppShell'
import { useEffect, useState } from 'react'
import { Plus, Search, Star, ChevronRight } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AppUI() {
  const [athletes, setAthletes] = useState([])
  const [notes, setNotes] = useState([])
  const [selectedAthlete, setSelectedAthlete] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ first_name: '', last_name: '', sport: '', tags: '' })
  const [noteForm, setNoteForm] = useState({ title: '', content: '', focus_skills: '', rating: 3 })
  const [query, setQuery] = useState('')

  const fetchAthletes = async () => {
    const res = await fetch(`${BASE_URL}/api/athletes`)
    const data = await res.json()
    setAthletes(data)
  }

  const fetchNotes = async (athleteId) => {
    const url = athleteId ? `${BASE_URL}/api/notes?athlete_id=${athleteId}` : `${BASE_URL}/api/notes`
    const res = await fetch(url)
    setNotes(await res.json())
  }

  useEffect(() => { fetchAthletes(); fetchNotes(); }, [])
  useEffect(() => { if (selectedAthlete) fetchNotes(selectedAthlete.id) }, [selectedAthlete])

  const addAthlete = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = { ...form, tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [] }
      const res = await fetch(`${BASE_URL}/api/athletes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (res.ok) {
        setForm({ first_name: '', last_name: '', sport: '', tags: '' })
        fetchAthletes()
      }
    } finally { setLoading(false) }
  }

  const addNote = async (e) => {
    e.preventDefault()
    if (!selectedAthlete) return
    setLoading(true)
    try {
      const payload = {
        athlete_id: selectedAthlete.id,
        title: noteForm.title,
        content: noteForm.content,
        focus_skills: noteForm.focus_skills ? noteForm.focus_skills.split(',').map(s => s.trim()).filter(Boolean) : [],
        rating: Number(noteForm.rating) || null
      }
      const res = await fetch(`${BASE_URL}/api/notes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (res.ok) {
        setNoteForm({ title: '', content: '', focus_skills: '', rating: 3 })
        fetchNotes(selectedAthlete.id)
      }
    } finally { setLoading(false) }
  }

  const filteredAthletes = athletes.filter(a => `${a.first_name} ${a.last_name}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <AppShell>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <Search className="text-gray-500" size={18} />
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search athletes" className="w-full outline-none" />
              </div>
            </div>

            <div className="mt-4 space-y-2 max-h-[55vh] overflow-auto pr-1">
              {filteredAthletes.map(a => (
                <button key={a.id} onClick={() => setSelectedAthlete(a)} className={`w-full text-left rounded-xl border p-4 bg-white hover:shadow transition ${selectedAthlete?.id===a.id ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{a.first_name} {a.last_name}</p>
                      <p className="text-sm text-gray-600">{a.sport || '—'}</p>
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </button>
              ))}
            </div>

            <form onSubmit={addAthlete} className="mt-4 rounded-xl border border-gray-200 bg-white p-4 space-y-3">
              <p className="font-semibold">Add athlete</p>
              <div className="grid grid-cols-2 gap-2">
                <input required value={form.first_name} onChange={e=>setForm({...form, first_name:e.target.value})} placeholder="First name" className="border rounded-md px-3 py-2" />
                <input required value={form.last_name} onChange={e=>setForm({...form, last_name:e.target.value})} placeholder="Last name" className="border rounded-md px-3 py-2" />
              </div>
              <input value={form.sport} onChange={e=>setForm({...form, sport:e.target.value})} placeholder="Sport (optional)" className="border rounded-md px-3 py-2 w-full" />
              <input value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})} placeholder="Tags (comma separated)" className="border rounded-md px-3 py-2 w-full" />
              <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-700"><Plus size={16}/> Add athlete</button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-semibold">{selectedAthlete ? `Notes for ${selectedAthlete.first_name}` : 'All notes'}</p>
            </div>

            <div className="space-y-3 max-h-[50vh] overflow-auto pr-1">
              {notes.map(n => (
                <div key={n.id} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{n.title}</p>
                    {n.rating ? (
                      <div className="flex items-center gap-1 text-amber-500">{Array.from({length:n.rating}).map((_,i)=>(<Star key={i} size={16} fill="currentColor"/>))}</div>
                    ) : null}
                  </div>
                  <p className="mt-1 text-gray-700 text-sm">{n.content}</p>
                  {n.focus_skills?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">{n.focus_skills.map(s=>(<span key={s} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{s}</span>))}</div>
                  ) : null}
                </div>
              ))}
            </div>

            <form onSubmit={addNote} className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
              <p className="font-semibold">Quick note</p>
              <div className="grid grid-cols-2 gap-2">
                <input required value={noteForm.title} onChange={e=>setNoteForm({...noteForm, title:e.target.value})} placeholder="Title" className="border rounded-md px-3 py-2" />
                <select value={noteForm.rating} onChange={e=>setNoteForm({...noteForm, rating:e.target.value})} className="border rounded-md px-3 py-2">
                  {[1,2,3,4,5].map(r=> <option key={r} value={r}>{r} / 5</option>)}
                </select>
              </div>
              <textarea required rows={3} value={noteForm.content} onChange={e=>setNoteForm({...noteForm, content:e.target.value})} placeholder="What did you observe?" className="border rounded-md px-3 py-2 w-full" />
              <input value={noteForm.focus_skills} onChange={e=>setNoteForm({...noteForm, focus_skills:e.target.value})} placeholder="Focus skills (comma separated)" className="border rounded-md px-3 py-2 w-full" />
              <button disabled={loading || !selectedAthlete} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white font-semibold px-4 py-2 hover:bg-emerald-700 disabled:opacity-60">Add note</button>
              {!selectedAthlete && <p className="text-xs text-gray-500">Select an athlete first.</p>}
            </form>
          </div>
        </div>
      </section>
    </AppShell>
  )
}
