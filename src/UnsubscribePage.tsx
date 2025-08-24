import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const WEBHOOK_URL = import.meta.env.VITE_UNSUBSCRIBE_WEBHOOK_URL || '';

async function fetchUnsubscribeStatus(email: string): Promise<boolean> {
  if (!WEBHOOK_URL) return false;
  try {
    const url = `${WEBHOOK_URL}?action=status&email=${encodeURIComponent(email)}`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) return false;
    const data = await res.json();
    return Boolean(data?.unsubscribed || data?.ok);
  } catch {
    return false;
  }
}

async function postUnsubscribe(email: string): Promise<boolean> {
  if (!WEBHOOK_URL) return true; // fallback: assume ok if not configured
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'unsubscribe', email })
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => ({} as any));
    return Boolean(data?.ok !== false);
  } catch {
    return false;
  }
}

export function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      const decoded = decodeURIComponent(emailParam);
      setEmail(decoded);
      fetchUnsubscribeStatus(decoded).then(setIsUnsubscribed).catch(() => void 0);
    }
  }, [searchParams]);

  const handleUnsubscribe = async () => {
    if (!email) {
      setError('Por favor, ingresa tu email');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const ok = await postUnsubscribe(email);
      if (!ok) throw new Error('request_failed');

      setIsUnsubscribed(true);

      if (window.gtag) {
        window.gtag('event', 'unsubscribe', {
          event_category: 'email',
          event_label: email
        });
      }
    } catch (err) {
      setError('Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResubscribe = async () => {
    setIsLoading(true);
    setError('');

    try {
      // Resubscribe puede ser manejado por el webhook si se desea implementar
      setIsUnsubscribed(false);

      if (window.gtag) {
        window.gtag('event', 'resubscribe', {
          event_category: 'email',
          event_label: email
        });
      }
    } catch (err) {
      setError('Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-md mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg 
                  className="h-6 w-6 text-red-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </div>
              {!isUnsubscribed ? (
                <>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Darse de baja
                  </h1>
                  <p className="text-gray-600">
                    ¿Estás seguro de que quieres dejar de recibir nuestros emails?
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Te has dado de baja!
                  </h1>
                  <p className="text-gray-600">
                    Ya no recibirás más emails de EduNova.
                  </p>
                </>
              )}
            </div>

            {email && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Email:</p>
                <p className="font-medium text-gray-900">{email}</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              {!isUnsubscribed ? (
                <>
                  <button
                    onClick={handleUnsubscribe}
                    disabled={isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </>
                    ) : (
                      'Darme de baja'
                    )}
                  </button>
                  
                  <Link
                    to="/"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-200 text-center block"
                  >
                    Cancelar
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleResubscribe}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </>
                    ) : (
                      'Volver a suscribirme'
                    )}
                  </button>
                  
                  <Link
                    to="/"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition duration-200 text-center block"
                  >
                    Volver al inicio
                  </Link>
                </>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">
                  ¿Tienes alguna pregunta?
                </p>
                <div className="space-y-2">
                  <a 
                    href="mailto:hola@edunova.edu.ar" 
                    className="text-sm text-blue-600 hover:text-blue-800 block"
                  >
                    hola@edunova.edu.ar
                  </a>
                  <a 
                    href="tel:+541122683449" 
                    className="text-sm text-blue-600 hover:text-blue-800 block"
                  >
                    +54 11 2268-3449
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
