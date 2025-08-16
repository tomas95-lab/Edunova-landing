import { landingCopy } from '../copy';
import { Rocket, Shield, Smartphone, Code2, HeartHandshake, Clock } from 'lucide-react';

export function SocialProof() {
  const highlights = [
    { icon: Rocket, title: 'Beta privada activa', desc: 'Inscríbete para acceso temprano' },
    { icon: Shield, title: 'Privacidad primero', desc: 'Buenas prácticas y seguridad de datos' },
    { icon: Code2, title: 'Stack moderno', desc: 'React, Vite, TypeScript y Tailwind' },
    { icon: HeartHandshake, title: 'Co‑creado con docentes', desc: 'Diseño guiado por usuarios reales' },
    { icon: Clock, title: 'Ahorro de tiempo', desc: 'Foco en flujos rápidos y simples' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {landingCopy.socialProof.title}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start p-5 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="mr-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
}
