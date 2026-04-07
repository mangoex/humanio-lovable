import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="rgba(6,182,212,0.6)" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0 min-h-[calc(100vh-4rem)]">

          <div className="flex-1 flex flex-col justify-center z-10 py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Inteligencia Artificial · Presente
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-white">Potenciando</span>
              <br />
              <span className="shimmer-text">Humanos</span>
              <br />
              <span className="text-white">con </span>
              <span className="gradient-text">IA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 text-lg text-white/60 max-w-md leading-relaxed"
            >
              Transformamos tu negocio con Inteligencia Artificial. Automatizaciones,
              agentes inteligentes y chatbots que trabajan 24/7 por ti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button variant="primary" size="lg"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver servicios <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                <MessageCircle className="w-4 h-4" /> Hablar con IA
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: '+50', label: 'Proyectos' },
                { value: '24/7', label: 'Disponibilidad' },
                { value: '100%', label: 'Resultados' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-cyan-400">{stat.value}</span>
                  <span className="text-xs text-white/40 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex-1 relative h-[400px] lg:h-[calc(100vh-4rem)] lg:max-h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full h-full"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}
