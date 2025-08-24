import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función de tracking para eventos de CTA
export function track( eventName: string, properties?: Record<string, any> ) {
  // Si tienes Google Analytics, Segment, o similar configurado
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
  
  // Si tienes Mixpanel, Amplitude, etc.
  if (typeof window !== 'undefined' && (window as any).mixpanel) {
    (window as any).mixpanel.track(eventName, properties);
  }
  
  // Log para desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('Track:', eventName, properties);
  }
  
  // Aquí puedes agregar más proveedores de analytics
}

// Función específica para tracking de CTAs
export function trackCTA(placement: 'hero' | 'navbar' | 'footer' | 'modal' | 'social_proof') {
  track('cta_demo_click', { 
    placement,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'none',
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'none'
  });
}
