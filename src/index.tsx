import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/index.css';
import '@styles/custom.css';
import App from '@/App';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
      options: {
        scope: '/',
      },
    },
    onUnhandledRequest: 'bypass',
  });
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

enableMocking()
  .catch((err) => {
    console.error('Failed to enable mocking', err);
  })
  .finally(() => {
    root.render(<App />);
  });
