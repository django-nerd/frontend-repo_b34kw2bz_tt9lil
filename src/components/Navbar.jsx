import { Link, NavLink } from 'react-router-dom'
import { Menu, NotebookPen, Trophy } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItemClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white shadow">
              <Trophy size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight">CoachNotes</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navItemClass}>Home</NavLink>
            <NavLink to="/pricing" className={navItemClass}>Pricing</NavLink>
            <NavLink to="/blog" className={navItemClass}>Blog</NavLink>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/app" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition-colors">
              <NotebookPen size={16} />
              Open App
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-1">
              <NavLink to="/" onClick={() => setOpen(false)} className={navItemClass}>Home</NavLink>
              <NavLink to="/pricing" onClick={() => setOpen(false)} className={navItemClass}>Pricing</NavLink>
              <NavLink to="/blog" onClick={() => setOpen(false)} className={navItemClass}>Blog</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={navItemClass}>About</NavLink>
              <Link to="/app" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">Open App</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
