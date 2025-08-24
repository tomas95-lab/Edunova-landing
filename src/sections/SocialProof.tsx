import { Star, Users, Shield, Clock } from 'lucide-react';
import { landingCopy } from '../copy';
import { trackCTA } from '../lib/utils';

interface SocialProofProps {
  onDemoClick?: () => void;
}

export function SocialProof({ onDemoClick }: SocialProofProps) {
  const handlePilotClick = () => {
    trackCTA('social_proof');
    onDemoClick?.();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-strong)' }}>
            {landingCopy.socialProof.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonio local */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg" style={{ color: 'var(--color-text-strong)' }}>
                  Colegio de GBA Oeste
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Directivo
                </p>
              </div>
            </div>
            
            <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--color-text-secondary)' }}>
              "{landingCopy.socialProof.testimonial}"
            </blockquote>
            
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium" style={{ color: 'var(--color-text-strong)' }}>
                5.0
              </span>
            </div>
          </div>

          {/* Programa piloto */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Programa Piloto
                </h3>
                <p className="text-sm text-green-100">
                  Sin costo • Primer mes gratis
                </p>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mb-4">
              {landingCopy.socialProof.pilotProgram}
            </h4>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>1 curso completo</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Implementación guiada</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Soporte completo</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Sin compromiso</span>
              </li>
            </ul>
            
            <button 
              onClick={handlePilotClick}
              className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Aplicar para piloto
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {landingCopy.trust.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-strong)' }}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
