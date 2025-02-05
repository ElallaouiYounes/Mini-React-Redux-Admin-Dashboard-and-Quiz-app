import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom'

const basename = '/React-Redux-Admin-Panel/'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
)
