import { useEffect } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ToastProps {
  open: boolean;
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  durationMs?: number;
}

export function Toast({ open, message, type = 'success', onClose, durationMs = 3200 }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timeout = setTimeout(onClose, durationMs);
    return () => clearTimeout(timeout);
  }, [open, durationMs, onClose]);

  if (!open) return null;

  const bgByType = {
    success: 'from-emerald-500/90 to-green-500/90',
    error: 'from-rose-500/90 to-red-500/90',
    info: 'from-blue-500/90 to-sky-500/90'
  }[type];

  const Icon = type === 'error' ? XCircle : CheckCircle2;

  return (
    <div className="fixed z-[60] bottom-5 right-5 left-5 sm:left-auto">
      <div className={`mx-auto sm:mx-0 inline-flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-white backdrop-blur-md bg-gradient-to-r ${bgByType}`}>
        <Icon className="w-5 h-5" />
        <span className="text-sm font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 px-2 py-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-xs"
          aria-label="Cerrar notificación"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}


