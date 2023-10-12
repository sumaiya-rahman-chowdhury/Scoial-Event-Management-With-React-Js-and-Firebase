import React from 'react'
import ReactDOM from 'react-dom/client'
import './Component/style.css'
import { RouterProvider } from 'react-router-dom'
import router from './Component/Root/Root'
import Authentication from './Component/Authentication'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router}>

      </RouterProvider>
    </Authentication>
  </React.StrictMode>,
)
