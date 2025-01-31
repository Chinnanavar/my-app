import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Memo from './Memo';
import Api from './Api';
import Cards from './Cards';
import DependentDropbox from './DepedentDropbox';
import Accordion from './Accordian';
import City from './Cities';
import Acc from './Acc';
import State from './State';
import Home from './Home';
import NamePage from './NamePage';
import Provider from './Provider';
import User from './User';
import CustomCounter from './CustomCounter';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Provider>
      <Routes>
        <Route path="/:name" element={<App  />} />
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
        <Route path="/memo" element={<Memo />} />
        <Route path="/api" element={<Api />} />
        <Route path="/cards" element={ <Cards />} />
        <Route path="/country" element={ <DependentDropbox />} />
        <Route path="/accordion" element={ <Accordion />} />
        <Route path="/city" element={<City />} />
        <Route path="/acc" element={<Acc />} />
        <Route path="/state" element={<State />} />
        <Route path="/" element={<Home />} />
        <Route path="/name/:name" element={<NamePage />} />
        <Route path='/custom' element={<CustomCounter />} />
       

    
     
      </Routes>

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
