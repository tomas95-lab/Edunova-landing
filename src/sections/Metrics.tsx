import { useEffect, useRef, useState } from 'react';
import { Clock, FileText, Mail } from 'lucide-react';
import { landingCopy } from '../copy';

const metricIcons = [Clock, FileText, Mail];

export function Metrics() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const useAnimatedNumber = (value: number, durationMs: number) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
      if (!hasAnimated) return;
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / durationMs, 1);
        setDisplay(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      const raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [hasAnimated, value, durationMs]);
    return display;
  };

  const secondsToDisplay = useAnimatedNumber(60, 1200);
  const percentToDisplay = useAnimatedNumber(90, 1200);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados esperados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estimaciones basadas en pruebas internas y escenarios típicos de gestión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingCopy.metrics.map((metric, index) => {
            const IconComponent = metricIcons[index];
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 text-center hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {metric}
                </h3>
                
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {index === 0 && `${secondsToDisplay}s`}
                  {index === 1 && "1 clic"}
                  {index === 2 && `${percentToDisplay}%`}
                </div>
                
                <p className="text-gray-600">
                  {index === 0 && "Promedio de tiempo"}
                  {index === 1 && "Para generar"}
                  {index === 2 && "Menos tiempo"}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">24h</div>
            <p className="text-sm text-gray-600">Implementación</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
            <p className="text-sm text-gray-600">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">5min</div>
            <p className="text-sm text-gray-600">Capacitación</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <p className="text-sm text-gray-600">Soporte</p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center text-sm text-gray-500">
          Estas métricas son orientativas y pueden variar según el contexto de cada institución.
        </p>
      </div>
    </section>
  );
}
