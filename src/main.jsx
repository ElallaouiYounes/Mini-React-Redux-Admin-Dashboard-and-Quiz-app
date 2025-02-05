import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom'

const basename = '/Mini-React-Redux-Admin-Dashboard-and-Quiz-app/'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
)
