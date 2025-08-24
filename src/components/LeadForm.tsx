import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { landingCopy } from '../copy';
import { firestoreService } from '../services/firestore';
import { sendLeadToGoogleSheet } from '../services/sheets';
import { track } from '../lib/utils';

interface LeadFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
  variant?: 'modal' | 'inline';
}

export function LeadForm({ onSuccess, onClose, variant = 'modal' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    colegio: '',
    rol: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Obtener UTMs de la URL
  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || ''
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();
      const leadData = {
        ...formData,
        ...utmParams,
        source: 'landing',
        createdAt: new Date().toISOString()
      };

      // 1) Guardar en Firestore simulado
      const firestoreOk = await firestoreService.saveLead(leadData);

      // 2) Enviar a Google Sheets si hay endpoint configurado
      const sheetsOk = await sendLeadToGoogleSheet({
        nombre: formData.nombre,
        email: formData.email,
        colegio: formData.colegio,
        rol: formData.rol,
        telefono: formData.telefono,
        ...utmParams
      });

      if (firestoreOk || sheetsOk) {
        setIsSuccess(true);
        setTimeout(() => {
          onSuccess?.();
          if (variant === 'modal') {
            onClose?.();
          }
        }, 2000);
      } else {
        throw new Error('Failed to save lead');
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      // Aquí se podría mostrar un toast de error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8" role="status" aria-live="polite">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-6 h-6 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          ¡Gracias por tu interés!
        </h3>
        <p className="text-gray-600">
          Te contactaremos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <div className={variant === 'modal' ? '' : 'p-8 glass rounded-3xl border border-white/20'}>
      {variant !== 'modal' && (
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
            <Check className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--color-text-strong)' }}>
            {landingCopy.leadForm.title}
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            {landingCopy.leadForm.subtitle}
          </p>
        </div>
      )}
      
      {variant === 'modal' && (
        <div className="text-center mb-6">
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            {landingCopy.leadForm.subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de solicitud de demo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              Nombre completo <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
              placeholder="Tu nombre completo"
              aria-describedby="nombre-help"
            />
            <p id="nombre-help" className="sr-only">Ingresa tu nombre completo</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              Email <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
              placeholder="tu@email.com"
              aria-describedby="email-help"
            />
            <p id="email-help" className="sr-only">Ingresa tu dirección de email</p>
          </div>
        </div>

        <div>
          <label htmlFor="colegio" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
            Nombre del colegio <span className="text-red-500" aria-label="requerido">*</span>
          </label>
          <input
            type="text"
            id="colegio"
            name="colegio"
            required
            value={formData.colegio}
            onChange={(e) => handleChange('colegio', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            style={{ 
              color: 'var(--color-text-strong)'
            }}
            placeholder="Nombre de tu institución"
            aria-describedby="colegio-help"
          />
          <p id="colegio-help" className="sr-only">Ingresa el nombre de tu institución educativa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="rol" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              Tu rol <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <select
              id="rol"
              name="rol"
              required
              value={formData.rol}
              onChange={(e) => handleChange('rol', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
              aria-describedby="rol-help"
            >
              <option value="">Selecciona tu rol</option>
              {landingCopy.leadForm.roles.map(role => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
            <p id="rol-help" className="sr-only">Selecciona tu rol en la institución</p>
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              Teléfono <span className="text-gray-500 text-xs">(opcional)</span>
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={(e) => handleChange('telefono', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
              placeholder="+54 9 11 1234-5678"
              aria-describedby="telefono-help"
            />
            <p id="telefono-help" className="sr-only">Ingresa tu número de teléfono (opcional)</p>
          </div>
        </div>

        {/* Campos UTM ocultos */}
        <input type="hidden" name="utm_source" value={getUTMParams().utm_source} />
        <input type="hidden" name="utm_medium" value={getUTMParams().utm_medium} />
        <input type="hidden" name="utm_campaign" value={getUTMParams().utm_campaign} />
        <input type="hidden" name="utm_content" value={getUTMParams().utm_content} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl font-bold text-lg text-white hover-lift focus-ring shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          style={{ background: 'var(--gradient-primary)' }}
          aria-describedby="submit-help"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 mr-3 animate-spin" aria-hidden="true" />
              Enviando...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Check className="w-5 h-5 mr-3" aria-hidden="true" />
              Agendar demo de 15 min
            </div>
          )}
        </button>
        <p id="submit-help" className="sr-only">
          Al hacer clic en este botón, solicitarás una demo gratuita de 15 minutos del sistema de gestión escolar
        </p>
      </form>
    </div>
  );
}
