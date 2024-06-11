import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import CountryDetail from './components/CountryDetail.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
     
      {
        path: '/:country',
        element: <CountryDetail />,
      }, 
      
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
