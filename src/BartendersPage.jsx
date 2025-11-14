export default function BartendersPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <section className="container mx-auto px-6 md:px-10 pt-[120px] pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Bartenders</h1>
        <p className="text-white/70 mt-4 max-w-2xl">A global roster of award-winning bartenders curating menus and live rooms.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="h-40 rounded-xl bg-white/10 mb-4" />
              <div className="font-medium">Guest Mixologist #{i}</div>
              <div className="text-white/60 text-sm">Michelin-adjacent, speakeasy-affiliated, flavor-obsessed.</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
