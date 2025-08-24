import { ArrowRight, Sparkles, Star, Zap, Shield, Clock, Check } from 'lucide-react';
import { landingCopy } from '../copy';
import { trackCTA } from '../lib/utils';

interface HeroProps {
  onDemoClick: () => void;
  onCallClick?: () => void;
}

export function Hero({ onDemoClick }: HeroProps) {
  const handleDemoClick = () => {
    trackCTA('hero');
    onDemoClick();
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern"
      style={{ backgroundColor: 'var(--color-background)' }}
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" aria-hidden="true"></div>
      
      {/* Floating geometric shapes (reducido para menos invasivo) */}
      <div className="absolute top-24 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl rotate-12 animate-float" aria-hidden="true"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true"></div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Announcement Badge: enfatiza implementación rápida */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-8 animate-fadeInUp" role="status" aria-label="Implementación rápida disponible">
            <Clock className="w-4 h-4 text-green-600 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-green-700">
              Implementación en 15 minutos ✨
            </span>
            <Star className="w-4 h-4 text-yellow-500 ml-2" aria-hidden="true" />
          </div>

          {/* Main heading - 2 líneas claras */}
          <h1 
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-black text-balance mb-6 leading-[0.9] animate-fadeInUp" 
            style={{ animationDelay: '0.1s' }}
          >
            <span style={{ color: 'var(--color-text-strong)' }}>
              Menos planillas.
            </span>
            <span className="text-gradient block">
              Más tiempo de clase.
            </span>
          </h1>
          
          {/* Subtitle - directo y operativo */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-balance animate-fadeInUp"
            style={{ 
              color: 'var(--color-text-secondary)',
              animationDelay: '0.2s'
            }}
          >
            {landingCopy.hero.subtitle}
          </p>

          {/* Quick wins - en 2 semanas lográs */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto animate-fadeInUp" 
            style={{ animationDelay: '0.3s' }}
            role="list"
            aria-label="Beneficios en 2 semanas"
          >
            {landingCopy.quickWins.wins.map((win, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-2xl glass hover-lift group" role="listitem">
                <Check className="w-5 h-5 mr-3 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                <div className="text-left">
                  <div className="font-semibold text-sm" style={{ color: 'var(--color-text-strong)' }}>
                    {win}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA principal - único y claro */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleDemoClick}
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg text-white hover-lift focus-ring shadow-2xl overflow-hidden"
              style={{ background: 'var(--gradient-primary)' }}
              aria-describedby="cta-description"
            >
              <span className="relative z-10 flex items-center">
                <Clock className="w-5 h-5 mr-3" aria-hidden="true" />
                {landingCopy.hero.ctaPrimary}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            </button>
            <p id="cta-description" className="sr-only">
              Agendar una demo gratuita de 15 minutos para conocer el sistema de gestión escolar
            </p>
          </div>

          {/* Trust indicators */}
          <div 
            className="flex flex-wrap justify-center gap-6 text-sm animate-fadeInUp" 
            style={{ color: 'var(--color-text-secondary)', animationDelay: '0.5s' }}
            role="list"
            aria-label="Indicadores de confianza"
          >
            <div className="flex items-center" role="listitem">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" aria-hidden="true"></div>
              <span>Sin planillas</span>
            </div>
            <div className="flex items-center" role="listitem">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" aria-hidden="true"></div>
              <span>Funciona desde el día 1</span>
            </div>
            <div className="flex items-center" role="listitem">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" aria-hidden="true"></div>
              <span>Soporte AR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
