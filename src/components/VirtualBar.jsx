import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function VirtualBar() {
  return (
    <section className="relative py-24" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">The Virtual Bar</h2>
          <button
            onClick={() => window.open('https://webrtc.github.io/samples/src/content/peerconnection/pc1/', '_blank')}
            className="px-5 py-3 rounded-full border border-amber-500/50 text-white hover:bg-amber-500/10"
          >Enter a Live Bar Now</button>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl" style={{ height: '60vh' }}>
          <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <motion.div
            className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/60 text-white border border-white/10"
            animate={{ boxShadow: ['0 0 0 0 rgba(217,119,6,0.6)', '0 0 0 12px rgba(217,119,6,0)'] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            Drinks arriving in 00:02:14
          </motion.div>
        </div>
      </div>
    </section>
  )
}
