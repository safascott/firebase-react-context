import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import fbconfig  from './fbconfig.js'
import { initializeApp } from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

const app = initializeApp(fbconfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
