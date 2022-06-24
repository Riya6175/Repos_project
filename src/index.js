import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './Components/Dashboard/Dashboard';
import BurgerDetails from './Components/BurgerDetails.js/BurgerDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/details/:id' element={<BurgerDetails />} />
    </Routes>
  </BrowserRouter>
);
