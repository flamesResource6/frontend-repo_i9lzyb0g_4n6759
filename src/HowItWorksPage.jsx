import { motion } from 'framer-motion'

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Pick a city',
      body: 'Choose the city you and your friends are toasting in — or mix cities for a true global round.'
    },
    {
      title: 'Order real drinks',
      body: 'Select cocktails, beer, or zero-proof. We route to premium partners for real delivery.'
    },
    {
      title: 'Sync the toast',
      body: 'Everyone’s order lands together. Cameras on, glasses up — latency tuned for the perfect “clink”.'
    }
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <section className="container mx-auto px-6 md:px-10 pt-[120px] pb-20">
        <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight">How It Works</h1>
        <p className="text-white/70 mt-4 max-w-2xl">CLOUDBAR connects real-world delivery with live rooms. The result: shared drinks, anywhere.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-amber-400 mb-2 font-mono">Step {i + 1}</div>
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
