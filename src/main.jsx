import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './bootstrap.min.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartstore from './redux/cartstore.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={cartstore}>
         <App />
    </Provider>
    
    </BrowserRouter>
 
  </StrictMode>,
)
