import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="container mx-auto px-6 md:px-10 py-12 border-t border-white/10 text-white/80">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-amber-500/20 border border-amber-500/40" />
            <div className="font-semibold tracking-wide">CLOUDBAR</div>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <Link className="hover:text-white/100" to="/">Home</Link>
            <Link className="hover:text-white/100" to="/how-it-works">How It Works</Link>
            <Link className="hover:text-white/100" to="/cities">Cities</Link>
            <Link className="hover:text-white/100" to="/bartenders">Bartenders</Link>
            <Link className="hover:text-white/100" to="/press">Press</Link>
            <Link className="hover:text-white/100" to="/careers">Careers</Link>
          </nav>
        </div>
        <div className="flex items-center justify-between pt-8 text-xs text-white/60">
          <p>© 2025 Cloudbar. All toasts are real.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-400">X</a>
            <a href="#" className="hover:text-amber-400">IG</a>
            <a href="#" className="hover:text-amber-400">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
