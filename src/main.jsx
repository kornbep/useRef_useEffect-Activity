import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import DraftEditor_starter from './DraftEditor_starter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DraftEditor_starter />
  </StrictMode>,
)
