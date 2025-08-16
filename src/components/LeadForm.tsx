import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { landingCopy } from '../copy';
import { firestoreService } from '../services/firestore';
import { sendLeadToGoogleSheet } from '../services/sheets';

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
    tamaño: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const leadData = {
        ...formData,
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
        tamaño: formData.tamaño,
        mensaje: formData.mensaje
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
      <div className="text-center py-8">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-6 h-6 text-green-600" />
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
            <Check className="w-8 h-8 text-white" />
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              {landingCopy.leadForm.fields.nombre} *
            </label>
            <input
              type="text"
              id="nombre"
              required
              value={formData.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              {landingCopy.leadForm.fields.email} *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="colegio" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
            {landingCopy.leadForm.fields.colegio} *
          </label>
          <input
            type="text"
            id="colegio"
            required
            value={formData.colegio}
            onChange={(e) => handleChange('colegio', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            style={{ 
              color: 'var(--color-text-strong)'
            }}
            placeholder="Nombre de tu institución"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="rol" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              {landingCopy.leadForm.fields.rol} *
            </label>
            <select
              id="rol"
              required
              value={formData.rol}
              onChange={(e) => handleChange('rol', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
            >
              <option value="">Selecciona tu rol</option>
              {landingCopy.leadForm.roles.map(role => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="tamaño" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
              {landingCopy.leadForm.fields.tamaño} *
            </label>
            <select
              id="tamaño"
              required
              value={formData.tamaño}
              onChange={(e) => handleChange('tamaño', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              style={{ 
                color: 'var(--color-text-strong)'
              }}
            >
              <option value="">Selecciona el tamaño</option>
              {landingCopy.leadForm.tamaños.map(tamaño => (
                <option key={tamaño.value} value={tamaño.value}>
                  {tamaño.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text-strong)' }}>
            {landingCopy.leadForm.fields.mensaje}
          </label>
          <textarea
            id="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={(e) => handleChange('mensaje', e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
            style={{ 
              color: 'var(--color-text-strong)'
            }}
            placeholder="Cuéntanos más sobre tus necesidades..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl font-bold text-lg text-white hover-lift focus-ring shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          style={{ background: 'var(--gradient-primary)' }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 mr-3 animate-spin" />
              Enviando...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Check className="w-5 h-5 mr-3" />
              {landingCopy.leadForm.submit}
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
