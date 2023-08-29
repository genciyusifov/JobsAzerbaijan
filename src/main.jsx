import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'
import MyModalProvider from './context/myModal.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <MyModalProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </MyModalProvider>,
)
