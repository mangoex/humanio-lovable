import { motion } from 'framer-motion'
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react'

const steps = [
  { number: '01', icon: Search, title: 'Análisis', color: 'cyan',
    description: 'Estudiamos a fondo tu negocio, procesos y objetivos. Identificamos las oportunidades de mayor impacto con IA.' },
  { number: '02', icon: Lightbulb, title: 'Diseño', color: 'purple',
    description: 'Diseñamos la solución perfecta para tus necesidades. Arquitectura, flujos y experiencia de usuario impecable.' },
  { number: '03', icon: Code2, title: 'Implementación', color: 'emerald',
    description: 'Desarrollamos e integramos la solución en tiempo récord. Con metodología ágil y entregas constantes.' },
  { number: '04', icon: Rocket, title: 'Optimización', color: 'rose',
    description: 'Lanzamos, medimos y mejoramos continuamente. La IA aprende y evoluciona junto con tu negocio.' },
]

const colorMap: Record<string, { border: string; bg: string; text: string; num: string }> = {
  cyan:    { border: 'border-cyan-500/40',    bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    num: 'text-cyan-500/30' },
  purple:  { border: 'border-purple-500/40',  bg: 'bg-purple-500/10',  text: 'text-purple-400',  num: 'text-purple-500/30' },
  emerald: { border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', text: 'text-emerald-400', num: 'text-emerald-500/30' },
  rose:    { border: 'border-rose-500/40',    bg: 'bg-rose-500/10',    text: 'text-rose-400',    num: 'text-rose-500/30' },
}

export function Process() {
  return (
    <section id="proceso" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium mb-4">
            <Rocket className="w-3 h-3" /> Proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            De idea a realidad en<br />
            <span className="gradient-text">4 pasos</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Un proceso probado que garantiza resultados rápidos y duraderos para tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colors = colorMap[step.color]
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black border ${colors.border} flex items-center justify-center`}>
                    <span className={`text-[10px] font-bold ${colors.text}`}>{index + 1}</span>
                  </div>
                </div>
                <div className={`text-8xl font-black ${colors.num} leading-none mb-2 select-none`}>{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3 -mt-6">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
