import { Check, Star, Sparkles, Crown, Rocket } from 'lucide-react';
import { landingCopy } from '../copy';

interface PricingProps {
  onDemoClick: () => void;
}

export function Pricing({ onDemoClick }: PricingProps) {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6 animate-fadeInUp">
            <Star className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-700">
              Precios de lanzamiento
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-balance mb-6 animate-fadeInUp" style={{ color: 'var(--color-text-strong)', animationDelay: '0.1s' }}>
            {landingCopy.pricing.title}
          </h2>
          <p className="text-lg md:text-xl text-balance max-w-3xl mx-auto animate-fadeInUp" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.2s' }}>
            Elige el plan que mejor se adapte a tu institución
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {landingCopy.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 animate-fadeInUp ${
                plan.popular
                  ? 'glass border-2 border-blue-500/30 hover-lift scale-105 shadow-2xl'
                  : 'bg-white border border-gray-200 hover:border-blue-300 hover-lift shadow-lg'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="px-6 py-2 rounded-full text-sm font-bold text-white flex items-center shadow-lg"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Más popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      plan.popular ? 'text-white' : 'text-blue-600'
                    }`}
                    style={plan.popular ? { background: 'var(--gradient-primary)' } : { backgroundColor: 'var(--color-cards)' }}
                  >
                    {index === 0 && <Rocket className="w-8 h-8" />}
                    {index === 1 && <Star className="w-8 h-8" />}
                    {index === 2 && <Crown className="w-8 h-8" />}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-strong)' }}>
                  {plan.name}
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  {plan.description}
                </p>
                
                {/* Early bird pricing */}
                <div className="relative">
                  <div className="text-4xl font-black" style={{ color: 'var(--color-text-strong)' }}>
                    <span className="text-base font-normal" style={{ color: 'var(--color-text-secondary)' }}>
                      Early Bird
                    </span>
                    <br />
                    <span className="text-gradient">¡GRATIS!</span>
                  </div>
                  <div className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Durante los primeros 3 meses
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-success)' }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span style={{ color: 'var(--color-text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={onDemoClick}
                className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center ${
                  plan.popular
                    ? 'text-white hover-lift shadow-xl'
                    : 'border-2 hover-lift glass'
                }`}
                style={plan.popular 
                  ? { background: 'var(--gradient-primary)' }
                  : { 
                      borderColor: 'var(--color-primary)', 
                      color: 'var(--color-primary)' 
                    }
                }
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Early bird note */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
            <Sparkles className="w-5 h-5 text-yellow-600 mr-3" />
            <p className="text-lg font-semibold text-yellow-800">
              🎉 Oferta de lanzamiento: Primeros 20 usuarios obtienen 3 meses gratis
            </p>
          </div>
          <p className="mt-4 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            {landingCopy.pricing.note}
          </p>
        </div>

        {/* Enterprise section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
          <div className="relative p-12 rounded-3xl glass border border-white/20 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                <Crown className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--color-text-strong)' }}>
                ¿Necesitas algo más 
                <span className="text-gradient">específico?</span>
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Para instituciones con necesidades especiales, desarrollaremos soluciones personalizadas 
                con integraciones a medida y soporte dedicado.
              </p>
              <button
                onClick={onDemoClick}
                className="px-10 py-4 rounded-2xl font-bold text-lg text-white hover-lift focus-ring shadow-lg"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Solicitar consulta personalizada
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
