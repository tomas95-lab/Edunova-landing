import { Sparkles, Phone } from 'lucide-react';

interface DesktopCTAProps {
  onDemoClick: () => void;
  onCallClick: () => void;
}

export function DesktopCTA({ onDemoClick, onCallClick }: DesktopCTAProps) {
  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-40">
      <div className="glass rounded-2xl border border-white/20 shadow-2xl p-3">
        <div className="flex gap-3">
          <button
            onClick={onCallClick}
            className="px-4 py-3 rounded-xl font-semibold border-2"
            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
          >
            <span className="inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Agendar llamada
            </span>
          </button>
          <button
            onClick={onDemoClick}
            className="px-4 py-3 rounded-xl font-semibold text-white shadow-lg"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span className="inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Probar demo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}


