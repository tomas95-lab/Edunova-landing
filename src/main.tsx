import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Mark root element as JS-enabled for progressive enhancement of scroll-reveal
document.documentElement.classList.add('js-enabled')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
