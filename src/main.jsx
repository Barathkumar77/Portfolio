import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Pointer } from './Components/magicui/pointer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Pointer className="fill-fuchsia-700 scroll-smooth transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 drop-shadow-lg" />

    <App /> 
    </BrowserRouter>
  
    
  </StrictMode>,
)
