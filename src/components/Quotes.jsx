import { useEffect, useState } from 'react'

const quotes = [
  'We clinked from Brooklyn to Brixton. Goosebumps.',
  'The moment the doorbells rang together felt like magic.',
  'A bar that fits in your pocket — but the drinks are real.',
]

export default function Quotes() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 6000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    setText('')
    let i = 0
    const s = setInterval(() => {
      setText(quotes[idx].slice(0, i++))
      if (i > quotes[idx].length) clearInterval(s)
    }, 40)
    return () => clearInterval(s)
  }, [idx])

  return (
    <section className="relative py-28" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover opacity-30" autoPlay muted loop playsInline src="https://cdn.coverr.co/videos/coverr-clinking-glasses-7698/1080p.mp4" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-10 text-center">
        <p className="text-white/90 text-2xl md:text-4xl max-w-3xl mx-auto">{text}<span className="inline-block w-4 h-6 bg-white/80 ml-1 animate-pulse align-middle" /></p>
      </div>
    </section>
  )
}
