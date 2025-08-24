import { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import { landingCopy } from '../copy';
import { trackCTA } from '../lib/utils';
import logo from '../assets/logo.png';

interface NavbarProps {
  onDemoClick?: () => void;
}

export function Navbar({ onDemoClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? (window.scrollY / totalScrollable) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    trackCTA('navbar');
    onDemoClick?.();
  };

  const navLinks = [
    { name: landingCopy.nav.product, href: '#features' },
    { name: landingCopy.nav.pricing, href: '#pricing' },
    { name: landingCopy.nav.resources, href: '#faq' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass backdrop-blur-xl border-b border-white/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <div className="relative mr-4">
                <img 
                  src={logo}
                  alt="EduNova logo" 
                  className="w-12 h-12 rounded-2xl object-contain group-hover:scale-110 transition-transform duration-300 shadow-lg bg-white"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full opacity-80 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gradient">
                  EduNova
                </span>
                <span className="text-xs text-gray-600 font-medium -mt-1">
                  Gestión escolar
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-xl transition-all duration-200 hover:bg-white/60 group"
                >
                  {link.name}
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA - único y prominente */}
          {onDemoClick && (
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleDemoClick}
                style={{ background: 'var(--gradient-primary)' }}
                className="px-6 py-2.5 rounded-2xl text-sm font-semibold text-white hover-lift focus-ring shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Agendar demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 rounded-xl hover:bg-white/60 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass backdrop-blur-xl border-t border-white/20 animate-fadeInUp">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-xl hover:bg-white/60 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {onDemoClick && (
              <div className="pt-4 border-t border-white/20 space-y-3">
                <button
                  onClick={() => {
                    handleDemoClick();
                    setIsMobileMenuOpen(false);
                  }}
                  style={{ background: 'var(--gradient-primary)' }}
                  className="w-full px-4 py-3 rounded-xl text-base font-semibold text-white shadow-lg hover-lift flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Agendar demo
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-sky-500 to-purple-500"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </nav>
  );
}
