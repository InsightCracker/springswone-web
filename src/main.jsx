import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { NewsProvider } from './context/NewsContext.jsx'
import { FeaturedProjectProvider } from './context/FeaturedProjectsContext.jsx'
import { ProgramProvider } from './context/ProgramsContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <FeaturedProjectProvider>
          <ProgramProvider>
            <App />
          </ProgramProvider>
        </FeaturedProjectProvider>
      </NewsProvider>
    </BrowserRouter>
  </StrictMode>,
)