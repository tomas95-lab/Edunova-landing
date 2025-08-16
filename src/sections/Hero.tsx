import { ArrowRight, Sparkles, Star, Zap, Shield } from 'lucide-react';
import { landingCopy } from '../copy';

interface HeroProps {
  onDemoClick: () => void;
  onCallClick: () => void;
}

export function Hero({ onDemoClick, onCallClick }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5"></div>
      
      {/* Floating geometric shapes (reducido para menos invasivo) */}
      <div className="absolute top-24 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl rotate-12 animate-float"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8 animate-fadeInUp">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">
              Nuevo: IA para observaciones automáticas ✨
            </span>
            <Star className="w-4 h-4 text-yellow-500 ml-2" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-balance mb-8 leading-[0.9] animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <span style={{ color: 'var(--color-text-strong)' }}>
              La forma 
            </span>
            <span className="text-gradient block">
              moderna
            </span>
            <span style={{ color: 'var(--color-text-strong)' }}>
              de gestionar tu colegio
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed text-balance animate-fadeInUp"
            style={{ 
              color: 'var(--color-text-secondary)',
              animationDelay: '0.2s'
            }}
          >
            {landingCopy.hero.subtitle}
          </p>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Zap, text: "Ahorra tiempo", detail: "hasta 70% menos trabajo administrativo" },
              { icon: Shield, text: "Todo en uno", detail: "académica, comunicación y reportes" },
              { icon: Sparkles, text: "Con IA útil", detail: "observaciones y alertas automáticas" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-2xl glass hover-lift group">
                <item.icon 
                  className="w-6 h-6 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                  style={{ color: 'var(--color-primary)' }}
                />
                <div className="text-left">
                  <div className="font-semibold text-sm" style={{ color: 'var(--color-text-strong)' }}>
                    {item.text}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={onDemoClick}
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg text-white hover-lift focus-ring shadow-2xl overflow-hidden"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-5 h-5 mr-3" />
                {landingCopy.hero.ctaPrimary}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={onCallClick}
              className="group px-10 py-5 rounded-2xl font-bold text-lg border-2 hover-lift focus-ring transition-all duration-300 glass"
              style={{ 
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)'
              }}
            >
              <span className="flex items-center">
                {landingCopy.hero.ctaSecondary}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Nota compacta */}
          <p className="text-sm animate-fadeInUp" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.5s' }}>
            {landingCopy.hero.note}
          </p>
        </div>
      </div>

      {/* Scroll indicator removido para menos distracción */}
    </section>
  );
}
