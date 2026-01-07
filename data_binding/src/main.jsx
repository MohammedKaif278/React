import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { DataBinding } from './Component/Data_Binding/Data_Binding.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataBinding />
  </StrictMode>,
)
