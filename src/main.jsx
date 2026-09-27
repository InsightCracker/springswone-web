import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { NewsProvider } from './context/NewsContext.jsx'
import { FeaturedProjectProvider } from './context/FeaturedProjectsContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <FeaturedProjectProvider>
          <App />
        </FeaturedProjectProvider>
      </NewsProvider>
    </BrowserRouter>
  </StrictMode>,
)