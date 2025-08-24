// Removed social icon imports because we don't link externally yet
import { landingCopy } from '../copy';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative mr-4">
                <img 
                  src={logo} 
                  alt="EduNova logo"
                  className="w-12 h-12 rounded-2xl object-contain group-hover:scale-110 transition-transform duration-300 shadow-lg bg-white"
                  width="48"
                  height="48"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full opacity-80 animate-pulse" aria-hidden="true"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gradient">
                  EduNova
                </span>
                <span className="text-xs text-gray-600 font-medium -mt-1">
                  Gestión escolar
                </span>
              </div>
            </div>
            
            <p className="mb-4 max-w-md leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {landingCopy.footer.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-text-strong)' }}>
              Contacto
            </h3>
            <address className="not-italic">
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${landingCopy.footer.contactEmail}`} className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    {landingCopy.footer.contactEmail}
                  </a>
                </li>
                <li>
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Soporte por email
                  </span>
                </li>
                <li>
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Horario AR: Lun-Vie 9-18h
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Links */}
            <nav aria-label="Navegación rápida">
              <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-text-strong)' }}>
                Navegación
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    Características
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </nav>

            {/* Legal Links */}
            <nav aria-label="Enlaces legales">
              <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-text-strong)' }}>
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacidad.html" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/terminos.html" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="/cookies.html" className="text-sm transition-colors duration-200 hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }}>
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-6 border-t border-gray-100">          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Status indicator */}
            <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
              <span>En desarrollo activo</span>
            </div>
            
            {/* Copyright */}
            <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              © 2024 EduNova. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}