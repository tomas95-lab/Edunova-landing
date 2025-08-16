import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { landingCopy } from '../copy';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {landingCopy.faq.title}
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos las dudas más frecuentes
          </p>
        </div>

        <div className="space-y-4">
          {landingCopy.faq.questions.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 pb-4'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-gray-600 mb-6">Estamos para ayudarte</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:truiz050904@gmail.com?subject=Consulta%20EduNova"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Contactar soporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
