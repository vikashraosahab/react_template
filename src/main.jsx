import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './DataModels/Pages/Layout'
import About from "./DataModels/Pages/About"
import Home from "./DataModels/Pages/Home"
import Contact from './DataModels/Pages/Contact'
import Github,{getData} from './DataModels/Pages/Github'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout />,
    children : [
       {
        path:'/',
        element:<Home />
       },
       {
        path : "/about",
        element:<About />
       },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/github",
        element:<Github/>,
        loader:getData,
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
