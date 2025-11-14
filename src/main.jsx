import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import HowItWorksPage from './HowItWorksPage'
import CitiesPage from './CitiesPage'
import BartendersPage from './BartendersPage'
import PressPage from './PressPage'
import CareersPage from './CareersPage'
import WaitlistPage from './WaitlistPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/bartenders" element={<BartendersPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)