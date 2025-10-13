import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  // this is react-router-dom implementation
  <StrictMode>

  {/* Strict mode is used for checking and catching the bugs */}
    <BrowserRouter>
      
      {/* This is my main App */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
