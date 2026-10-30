import { useEffect } from 'react';

/** Calls `handler` when Escape is pressed while `active` is true. */
export default function useEscapeKey(handler, active = true) {
  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') handler(e);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handler, active]);
}
