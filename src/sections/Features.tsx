import { 
  Calendar, 
  BookOpen, 
  FileText, 
  Bell, 
  BarChart3, 
  Users,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';
import { landingCopy } from '../copy';

const featureIcons = [
  Calendar,
  BookOpen,
  FileText,
  Bell,
  BarChart3,
  Users
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6 animate-fadeInUp">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">
              Funcionalidades principales
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6 animate-fadeInUp" style={{ color: 'var(--color-text-strong)', animationDelay: '0.1s' }}>
            Todo en <span className="text-gradient">una plataforma</span>
          </h2>
          <p className="text-xl md:text-2xl text-balance max-w-4xl mx-auto animate-fadeInUp" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.2s' }}>
            Herramientas diseñadas específicamente para la gestión educativa moderna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {landingCopy.features.map((feature, index) => {
            const IconComponent = featureIcons[index];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl glass hover-lift border border-white/20 animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Icon background with gradient */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text-strong)' }}>
                  {feature.title}
                </h3>
                
                <p className="leading-relaxed text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced benefits section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
          <div className="relative p-12 rounded-3xl glass border border-white/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-4">
                <Shield className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-emerald-700">
                  Ventajas competitivas
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--color-text-strong)' }}>
                Características que <span className="text-gradient">marcan la diferencia</span>
              </h3>
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Beneficios diseñados para el éxito de tu institución
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Zap, 
                  title: "Implementación rápida", 
                  description: "Configuración en menos de 24 horas",
                  color: "text-yellow-500"
                },
                { 
                  icon: Shield, 
                  title: "Soporte dedicado", 
                  description: "Asistencia técnica cuando la necesites",
                  color: "text-blue-500"
                },
                { 
                  icon: Sparkles, 
                  title: "Actualizaciones automáticas", 
                  description: "Siempre con las últimas mejoras",
                  color: "text-purple-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: 'var(--color-text-strong)' }}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
