export default function CareersPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <section className="container mx-auto px-6 md:px-10 pt-[120px] pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Careers</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Join a tiny, deadly team building the world’s first global virtual bar.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            { role: 'Founding Frontend Engineer', type: 'Full-time, Remote' },
            { role: 'Founding Backend Engineer', type: 'Full-time, Remote' },
            { role: 'Head of Partnerships', type: 'Contract → Full-time' },
            { role: 'Brand Designer', type: 'Contract' }
          ].map((job) => (
            <a key={job.role} href="#" className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between hover:bg-white/10 transition">
              <div>
                <div className="font-medium">{job.role}</div>
                <div className="text-white/60 text-sm">{job.type}</div>
              </div>
              <span className="text-amber-400">Apply →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
