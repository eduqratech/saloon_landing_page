import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Footer from './components/Footer'
import { initScrollAnimations } from './utils/scrollAnimations'

function App() {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations()
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Features />
      <Philosophy />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
