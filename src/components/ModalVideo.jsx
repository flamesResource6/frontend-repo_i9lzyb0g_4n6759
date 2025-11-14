import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalVideo({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            className="relative w-[92vw] md:w-[70vw] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-[2] h-10 w-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/10"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src="https://cdn.coverr.co/videos/coverr-nightclub-lights-1635/1080p.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
