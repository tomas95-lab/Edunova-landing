import { Database, Edit3, FileText, Sparkles, ArrowRight, Play } from 'lucide-react';
import { landingCopy } from '../copy';

interface HowItWorksProps {
  onDemoClick: () => void;
}

const stepIcons = [Database, Edit3, FileText];

export function HowItWorks({ onDemoClick }: HowItWorksProps) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6 animate-fadeInUp">
            <Play className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">
              Proceso simple
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-balance mb-6 animate-fadeInUp" style={{ color: 'var(--color-text-strong)', animationDelay: '0.1s' }}>
            {landingCopy.howItWorks.title}
          </h2>
          <p className="text-lg md:text-xl text-balance max-w-3xl mx-auto animate-fadeInUp" style={{ color: 'var(--color-text-secondary)', animationDelay: '0.2s' }}>
            En 3 pasos dejas todo funcionando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {landingCopy.howItWorks.steps.map((step, index) => {
            const IconComponent = stepIcons[index];
            return (
              <div key={index} className="relative group animate-fadeInUp" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                {/* Step number with gradient */}
                <div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  {index + 1}
                </div>

                {/* Card with glass effect */}
                <div className="glass p-10 rounded-3xl border border-white/20 text-center h-full hover-lift relative overflow-hidden">
                  {/* Icon with enhanced styling */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text-strong)' }}>
                    {step.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {step.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Enhanced connector with arrow */}
                {index < landingCopy.howItWorks.steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 items-center transform -translate-y-1/2 z-20">
                    <div 
                      className="h-0.5 w-8"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    ></div>
                    <ArrowRight 
                      className="w-6 h-6 ml-1"
                      style={{ color: 'var(--color-primary)' }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
          <div className="relative p-12 rounded-3xl glass border border-white/20 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--color-text-strong)' }}>
              ¿Listo para 
              <span className="text-gradient">empezar?</span>
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Únete a nuestra lista de espera y sé de los primeros en experimentar el futuro de la gestión educativa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onDemoClick}
                className="px-8 py-4 rounded-2xl font-bold text-lg text-white hover-lift focus-ring shadow-lg flex items-center justify-center"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Solicitar acceso temprano
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
