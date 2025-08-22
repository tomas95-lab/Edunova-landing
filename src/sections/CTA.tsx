import { ArrowRight } from 'lucide-react';
import { landingCopy } from '../copy';

interface CTAProps {
  onDemoClick: () => void;
  onLeadSuccess?: () => void;
}

export function CTA({ onDemoClick }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {landingCopy.finalCta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Sé de los primeros en experimentar la nueva forma de gestionar tu institución educativa. 
              Únete a nuestra lista de espera y obtén acceso temprano para enfocarte en lo que realmente importa: 
              el aprendizaje de tus estudiantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onDemoClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                {landingCopy.finalCta.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Implementación en 24h</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm">Soporte 24/7</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
