import React from 'react'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import PopularTours from './components/sections/PopularTours'
import VideoSection from './components/sections/VideoSection'
import LocationSection from './components/sections/LocationSection'
import GallerySection from './components/sections/GallerySection'
import StoriesSection from './components/sections/StoriesSection'
import NewsletterSection from './components/sections/NewsletterSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'
import { Toaster } from './components/ui/sonner'

function App() {
  console.log('🎨 Renderizando App principal com todas as seções')
  
  return (
    <div className="min-h-screen bg-travel-dark-bg text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PopularTours />
        <VideoSection />
        <LocationSection />
        <GallerySection />
        <StoriesSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App