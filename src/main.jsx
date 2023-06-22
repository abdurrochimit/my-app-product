import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import NavbarPage from './components/Fragments/Navbar';
import HomePage from './Pages/Home';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/profil" element={<div>Profil</div>} />
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
