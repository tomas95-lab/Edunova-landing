import { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Delay to allow for animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[60] overflow-y-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Enhanced Backdrop */}
        <div
          className={`fixed inset-0 backdrop-blur-sm transition-all duration-300 ${
            isVisible ? 'bg-black/60' : 'bg-black/0'
          }`}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal with enhanced styling */}
        <div 
          className={`relative max-w-2xl w-full max-h-[90vh] transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Enhanced Header */}
            <div className="relative p-8 border-b border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-strong)' }}>
                    {title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-200 hover-lift focus-ring group"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
                </button>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="relative overflow-y-auto max-h-[70vh] bg-white">
              <div className="p-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
