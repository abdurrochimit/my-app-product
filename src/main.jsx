import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NavbarPage from './components/Fragments/Navbar';
import HomePage from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
    // errorElement: <ErrorNotFound/>
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/profil",
    element: <div>Profil</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarPage/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
