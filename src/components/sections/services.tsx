import { motion } from 'framer-motion'
import { Globe, Zap, Bot, MessageCircle, Brain, Workflow } from 'lucide-react'
import { MouseSpotlight } from '@/components/ui/mouse-spotlight'

const services = [
  {
    icon: Globe, title: 'Modernización Web', tag: 'Diseño & Dev',
    description: 'Transforma tu presencia digital con diseños futuristas, performantes y totalmente optimizados para conversión.',
    gradient: 'from-cyan-500/20 to-blue-500/20', iconColor: 'text-cyan-400', iconBg: 'bg-cyan-500/10',
  },
  {
    icon: Workflow, title: 'Automatizaciones', tag: 'Productividad',
    description: 'Elimina tareas repetitivas con flujos de trabajo inteligentes. Ahorra tiempo y reduce errores humanos.',
    gradient: 'from-purple-500/20 to-pink-500/20', iconColor: 'text-purple-400', iconBg: 'bg-purple-500/10',
  },
  {
    icon: Brain, title: 'Agentes de IA', tag: 'IA Avanzada',
    description: 'Asistentes inteligentes que aprenden, razonan y actúan. Disponibles 24/7 para manejar cualquier tarea.',
    gradient: 'from-emerald-500/20 to-cyan-500/20', iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/10',
  },
  {
    icon: MessageCircle, title: 'Chatbots WhatsApp', tag: 'Conversacional',
    description: 'Automatiza tu atención al cliente con chatbots inteligentes en WhatsApp. Vende y atiende sin descanso.',
    gradient: 'from-green-500/20 to-teal-500/20', iconColor: 'text-green-400', iconBg: 'bg-green-500/10',
  },
  {
    icon: Zap, title: 'Integración IA', tag: 'Conectividad',
    description: 'Conecta la IA directamente a tus sistemas existentes: CRM, ERP, e-commerce y más. Sin fricción.',
    gradient: 'from-yellow-500/20 to-orange-500/20', iconColor: 'text-yellow-400', iconBg: 'bg-yellow-500/10',
  },
  {
    icon: Bot, title: 'Consultoría IA', tag: 'Estrategia',
    description: 'Estrategia personalizada de transformación digital con IA. Definimos el camino más rentable para tu negocio.',
    gradient: 'from-rose-500/20 to-purple-500/20', iconColor: 'text-rose-400', iconBg: 'bg-rose-500/10',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-4">
            <Zap className="w-3 h-3" /> Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Todo lo que tu negocio<br />
            <span className="gradient-text">necesita con IA</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg">
            Soluciones end-to-end para transformar cada área de tu empresa con la inteligencia artificial más avanzada.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 overflow-hidden cursor-none hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.05)]"
              >
                <MouseSpotlight size={250} />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/40 text-xs mb-4">
                    {service.tag}
                  </span>
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-white/20 group-hover:text-cyan-400 transition-all duration-300 group-hover:gap-2">
                    <span>Saber más</span>
                    <span className="text-base leading-none">→</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
