import { ArrowRight, Clock } from 'lucide-react';
import { trackCTA } from '../lib/utils';

interface CTAProps {
  onDemoClick: () => void;
  onLeadSuccess?: () => void;
}

export function CTA({ onDemoClick }: CTAProps) {
  const handleDemoClick = () => {
    trackCTA('footer');
    onDemoClick();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listos para simplificar la gestión?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Implementación guiada. Sin planillas. Funciona desde el día 1.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleDemoClick}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Clock className="w-5 h-5 mr-3" />
              Agendar demo de 15 min
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-blue-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">Implementación en 24h</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">Soporte 24/7</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">Sin planillas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
