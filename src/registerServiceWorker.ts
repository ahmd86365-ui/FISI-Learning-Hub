/** Public offline fallback only; never interrupt an active lesson or exam for updates. */
export function registerServiceWorker() {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return

  window.addEventListener('load', () => {
    void navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    }).catch(() => {
      // Installation failure must not block the online app or authentication.
      console.warn('Offline-Modus konnte nicht aktiviert werden.')
    })
  }, { once: true })
}
