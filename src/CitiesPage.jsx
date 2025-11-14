export default function CitiesPage() {
  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin', 'Sydney']
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <section className="container mx-auto px-6 md:px-10 pt-[120px] pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Cities</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Launching city-by-city with premium delivery partners. Don’t see yours? Join the waitlist.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {cities.map((c) => (
            <div key={c} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl">{c}</div>
          ))}
        </div>
      </section>
    </main>
  )
}
