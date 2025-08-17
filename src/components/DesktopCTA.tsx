import { Sparkles } from 'lucide-react';

interface DesktopCTAProps {
  onDemoClick: () => void;
}

export function DesktopCTA({ onDemoClick }: DesktopCTAProps) {
  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-40">
      <div className="glass rounded-2xl border border-white/20 shadow-2xl p-3">
        <div className="flex gap-3">
          <button
            onClick={onDemoClick}
            className="px-4 py-3 rounded-xl font-semibold text-white shadow-lg"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span className="inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Solicitar demo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}


