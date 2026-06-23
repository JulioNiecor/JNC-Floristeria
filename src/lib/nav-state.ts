export const isServer = typeof window === 'undefined';
export let isInitialLoad = true;

export function markNavigated() {
  isInitialLoad = false;
}
