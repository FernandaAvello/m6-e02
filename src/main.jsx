import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/public/sw.js')
//       .then(registration => {
//         console.log('Service Worker registrado con éxito:', registration);
//       })
//       .catch(error => {
//         console.log('Error al registrar el Service Worker:', error);
//       });
//   });
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
