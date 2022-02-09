import Timeout = NodeJS.Timeout;

interface Options {
  trailing?: boolean;
  leading?: boolean;
  maxWait?: number;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce(func: (...args: any[]) => void, wait: number, options: Options = {}) {
  const { trailing = true, leading = false, maxWait } = options;
  let timeoutId: Timeout | null = null;
  let maxTimeoutId: Timeout | null = null;

  return (...args: any[]): void => {
    const callImmediate = leading && !timeoutId;
    const callAnyway = maxWait && !maxTimeoutId;

    if (callImmediate) func.apply(this, args);

    if (callAnyway) {
      maxTimeoutId = setTimeout(() => {
        if (trailing) func.apply(this, args);
        maxTimeoutId = null;
      }, maxWait);
    }

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (trailing) func.apply(this, args);

      if (maxTimeoutId) {
        clearTimeout(maxTimeoutId);
        maxTimeoutId = null;
      }
    }, wait);
  };
}
/* eslint-disable @typescript-eslint/no-explicit-any */

export { debounce };
