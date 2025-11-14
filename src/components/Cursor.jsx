import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'pointer-events-none fixed z-[55] h-8 w-8 rounded-full border border-amber-500/60 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 will-change-transform'
    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      cursor.remove()
    }
  }, [])
  return null
}
