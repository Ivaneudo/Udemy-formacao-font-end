import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Contact from './routes/Contact.jsx'

//TODO: 2 - Pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

//TODO: 3 - Configurando Router
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  }, 
  {
    path: "contact",
    element: <Contact/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
