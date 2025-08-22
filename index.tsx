
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hide loading and error overlays once React mounts
const loadingEl = document.getElementById('loading');
if (loadingEl) {
  loadingEl.classList.add('hidden');
}
const errorEl = document.getElementById('error');
if (errorEl) {
  errorEl.classList.add('hidden');
}
