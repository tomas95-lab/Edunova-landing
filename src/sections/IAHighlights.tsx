import { Brain, TrendingUp, Lightbulb } from 'lucide-react';
import { landingCopy } from '../copy';

const aiIcons = [Brain, TrendingUp, Lightbulb];

export function IAHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {landingCopy.aiHighlights.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología inteligente que realmente mejora la experiencia educativa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingCopy.aiHighlights.features.map((feature, index) => {
            const IconComponent = aiIcons[index];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>

        {/* AI Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Por qué nuestra IA es diferente?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Basada en datos reales de educación</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Transparente y explicable</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Aprendizaje continuo y mejora</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Resultados esperados
              </h3>
              <p className="text-sm text-gray-500 mb-4">Basados en pruebas internas controladas</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tiempo de registro</span>
                  <span className="font-bold text-green-600">-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Errores administrativos</span>
                  <span className="font-bold text-green-600">-85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Satisfacción docente</span>
                  <span className="font-bold text-green-600">+40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
