export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} CoachNotes. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="/blog" className="hover:text-gray-900">Blog</a>
            <a href="/pricing" className="hover:text-gray-900">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
