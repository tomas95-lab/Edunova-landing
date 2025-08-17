// Removed social icon imports because we don't link externally yet
import { landingCopy } from '../copy';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative mr-4">
                <img 
                  src={logo} 
                  alt="EduNova logo"
                  className="w-12 h-12 rounded-2xl object-contain shadow-lg bg-white"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full opacity-80 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gradient">
                  EduNova
                </span>
                <span className="text-xs font-medium -mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Gestión escolar moderna
                </span>
              </div>
            </div>
            
            <p className="mb-4 max-w-md leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {landingCopy.footer.tagline}
            </p>
          </div>

          {/* Quick Links (solo anclas existentes) */}
          <div>
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-6 border-t border-gray-100">          
          {/* Status indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>En desarrollo activo</span>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <a href="#" className="hover:text-blue-600">Privacidad</a>
              <a href="#" className="hover:text-blue-600">Términos</a>
              <a href="#" className="hover:text-blue-600">Cookies</a>
              <a href={`mailto:${landingCopy.footer.contactEmail}`} className="hover:text-blue-600">Contacto</a>
              <span>© 2024 EduNova</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}