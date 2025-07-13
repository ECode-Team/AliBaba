import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n.js'
import { AppProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)