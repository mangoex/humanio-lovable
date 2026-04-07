import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos completados', description: 'Negocios transformados con IA' },
  { value: 95, suffix: '%', label: 'Satisfacción cliente', description: 'Tasa de retención promedio' },
  { value: 10, suffix: 'x', label: 'Más productividad', description: 'Mejora en eficiencia operacional' },
  { value: 24, suffix: '/7', label: 'Disponibilidad', description: 'Sistemas activos sin interrupción' },
]

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCounter(stat.value, 2000, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-white">{count}</span>
          <span className="text-3xl font-bold text-cyan-400">{stat.suffix}</span>
        </div>
        <p className="mt-2 text-base font-medium text-white/80">{stat.label}</p>
        <p className="mt-1 text-sm text-white/40">{stat.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  )
}
