import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Success from './Success.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/kejutan-ultah/" element={<App />} />
        <Route path="/kejutan-ultah/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
