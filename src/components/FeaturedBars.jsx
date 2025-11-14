import { useEffect, useRef } from 'react'

const bars = [
  { name: 'Neon Tokyo', people: 89, img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Paris Rooftop', people: 56, img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
  { name: 'NYC Dive', people: 132, img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Berlin Warehouse', people: 74, img: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop' },
]

export default function FeaturedBars() {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    let x = 0
    let raf
    const step = () => {
      x -= 0.5
      el.style.transform = `translateX(${x}px)`
      if (Math.abs(x) > el.scrollWidth / 2) x = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    const stop = () => cancelAnimationFrame(raf)
    el.addEventListener('mouseenter', stop)
    el.addEventListener('mouseleave', () => (raf = requestAnimationFrame(step)))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative py-24" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-8">Tonight’s Featured Bars</h2>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div ref={trackRef} className="flex gap-6 py-6 will-change-transform">
            {[...bars, ...bars].map((b, i) => (
              <div key={i} className="relative group w-[280px] md:w-[360px] h-[220px] md:h-[260px] rounded-2xl overflow-hidden">
                <img src={b.img} alt={b.name} className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40">🔴 {b.people} inside</div>
                <div className="absolute bottom-3 left-3 right-3 text-white font-medium">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
