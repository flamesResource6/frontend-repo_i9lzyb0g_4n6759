import { useEffect } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import VirtualBar from './components/VirtualBar'
import FeaturedBars from './components/FeaturedBars'
import Quotes from './components/Quotes'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import './index.css'

export default function App() {
  useEffect(() => {
    document.title = 'CLOUDBAR — The Global Virtual Bar'
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <Preloader />
      <Cursor />
      <Hero />
      <HowItWorks />
      <VirtualBar />
      <FeaturedBars />
      <Quotes />
      <Footer />
    </div>
  )
}
