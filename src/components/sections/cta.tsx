import { motion } from 'framer-motion'
import { MessageCircle, Mail, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="contacto" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6">
            <Sparkles className="w-3 h-3" /> ¿Listo para el futuro?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Transforma tu negocio<br />
            <span className="gradient-text">con IA hoy</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Agenda una consulta gratuita y descubre cómo la Inteligencia Artificial puede multiplicar la productividad y los ingresos de tu empresa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg"
              onClick={() => window.open('https://wa.me/1234567890?text=Hola%20Humanio%2C%20me%20interesa%20conocer%20sus%20servicios%20de%20IA', '_blank')}>
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg"
              onClick={() => window.open('mailto:hola@humanio.ai', '_blank')}>
              <Mail className="w-5 h-5" /> Enviar email
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/30">
            Consulta 100% gratuita · Sin compromisos · Respuesta en menos de 24h
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: '🚀', title: 'Implementación rápida', desc: 'Resultados en semanas' },
            { icon: '🔒', title: 'Datos seguros', desc: 'Cumplimiento total GDPR' },
            { icon: '📈', title: 'ROI garantizado', desc: 'O te devolvemos el dinero' },
          ].map((feat) => (
            <div key={feat.title}
              className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] text-left hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300">
              <span className="text-2xl">{feat.icon}</span>
              <p className="mt-2 text-sm font-semibold text-white">{feat.title}</p>
              <p className="text-xs text-white/40 mt-0.5">{feat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
