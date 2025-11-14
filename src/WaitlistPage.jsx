export default function WaitlistPage() {
  const typeformUrl = 'https://form.typeform.com/to/abcd'
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <section className="container mx-auto px-6 md:px-10 pt-[120px] pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Join the Waitlist</h1>
        <p className="text-white/70 mt-4 max-w-2xl">Be first to enter CLOUDBAR in your city. We’ll email when we open new rounds.</p>
        <div className="mt-10 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
          <p className="text-white/80">We use Typeform to collect interest securely.</p>
          <a href={typeformUrl} target="_blank" rel="noreferrer" className="inline-block mt-6 px-6 py-3 rounded-full bg-[#D97706] text-white hover:scale-105 transition">Open Typeform →</a>
        </div>
      </section>
    </main>
  )
}
