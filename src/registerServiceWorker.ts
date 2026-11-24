export function registerServiceWorker() {
  if ('serviceWorker' in navigator && (import.meta.env.PROD || import.meta.env.DEV)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registrado con éxito:', registration.scope);
        })
        .catch((error) => {
          console.error('Error al registrar ServiceWorker:', error);
        });
    });
  }
}
