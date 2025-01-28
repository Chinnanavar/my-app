import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Color from './Color';
import Btncolor from './Btncolor';
import Incbtn from './Incbtn';
import CustomModal from './CustomModal';
import Header from './Header';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import Slider from './Slider';
import From from './From';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<App />} />
        <Route path="/color" element={<Color />} />
        <Route path="/btncolor" element={<Btncolor />} />
        <Route path="/incbtn" element={<Incbtn />} />
        <Route path="/custommodal" element={<CustomModal />} />
        <Route path="/header" element={<Header />} />
        <Route path="/loader" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/form" element={<From />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
