import { Zap, Mail, MessageCircle, ExternalLink, Share2, Globe } from 'lucide-react'

const services = [
  'Modernización Web', 'Automatizaciones', 'Agentes de IA',
  'Chatbots WhatsApp', 'Integración IA', 'Consultoría IA',
]

const socialLinks = [
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: Share2, href: '#', label: 'Twitter' },
  { icon: Globe, href: '#', label: 'Web' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" fill="black" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Human</span>
                <span className="text-cyan-400">io</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Potenciando humanos con Inteligencia Artificial. Transformamos negocios con tecnología de vanguardia.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:hola@humanio.ai" className="flex items-center gap-3 text-sm text-white/50 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4 flex-shrink-0" />
                hola@humanio.ai
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/50 hover:text-green-400 transition-colors duration-200">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Humanio. Todos los derechos reservados.</p>
          <p className="text-xs text-white/20">Construido con IA · Diseñado para el futuro</p>
        </div>
      </div>
    </footer>
  )
}
