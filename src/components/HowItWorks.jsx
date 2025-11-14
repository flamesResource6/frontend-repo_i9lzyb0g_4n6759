import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Choose Your City', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 11a7 7 0 0 1-6-3.35c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08A7 7 0 0 1 12 18Z' },
  { title: 'Order Real Drinks', icon: 'M7 3h10l1 4H6l1-4Zm-1 6h12l-1 10H7L6 9Zm4 2v6m4-6v6' },
  { title: 'Delivered Together', icon: 'M8 12a4 4 0 1 0 8 0m4 0a8 8 0 1 1-16 0' },
]

export default function HowItWorks() {
  const [toasts, setToasts] = useState(1247)

  useEffect(() => {
    const id = setInterval(() => {
      setToasts((t) => t + Math.floor(Math.random() * 5))
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-20 md:py-24" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">One Link. Any City. Same Round.</h2>
          <div className="text-amber-400/90 text-sm md:text-base font-mono">{toasts.toLocaleString()} toasts tonight</div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              className="min-w-[86%] md:min-w-0 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl text-white"
              whileHover={{ y: -12, boxShadow: '0 10px 40px rgba(217,119,6,0.25)', rotate: 0.5 }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 grid place-items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={c.icon} />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-medium">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">Seductively simple. Pick a city, place your order, and feel the sync when the doorbell rings.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
