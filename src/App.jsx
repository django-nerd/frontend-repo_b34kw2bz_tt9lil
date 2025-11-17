import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import About from './pages/About'
import AppUI from './pages/AppUI'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/app" element={<AppUI />} />
    </Routes>
  )
}

export default App
