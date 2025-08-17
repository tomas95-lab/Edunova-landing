import { Sparkles } from 'lucide-react';

interface StickyCTAProps {
  onDemoClick: () => void;
}

export function StickyCTA({ onDemoClick }: StickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
      <div className="bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
        <button
          onClick={onDemoClick}
          className="flex-1 px-4 py-3 rounded-xl font-semibold text-white shadow-lg"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <span className="inline-flex items-center justify-center w-full">
            <Sparkles className="w-4 h-4 mr-2" />
            Solicitar demo
          </span>
        </button>
      </div>
    </div>
  );
}


