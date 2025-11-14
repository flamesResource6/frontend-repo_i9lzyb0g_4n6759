export default function PressPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <section className="container mx-auto px-6 md:px-10 pt-[120px] pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Press</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Media kit, brand assets, and story angles. For inquiries: press@cloudbar.com</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <a key={i} href="#" className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl block hover:bg-white/10 transition">Feature headline #{i}</a>
          ))}
        </div>
      </section>
    </main>
  )
}
