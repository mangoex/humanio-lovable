import { CursorEffect } from '@/components/ui/cursor-effect'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { Process } from '@/components/sections/process'
import { CTA } from '@/components/sections/cta'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <CursorEffect />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
