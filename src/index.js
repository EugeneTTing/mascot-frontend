import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import Root from './root';
import Home from './routes/home/home';
import About from './routes/about/about';
import Risk from './routes/risk/risk'
import Symptoms from './routes/symptoms/symptoms';
import Help from './routes/help/help';
import General from './routes/risk/general/general';
import Cancer from './routes/risk/breast_cancer/cancer'
import Cvd from './routes/risk/cvd/cvd';
import Fracture from './routes/risk/fracture/fracture';
import './index.css';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/risk' element={<Risk/>}>
        <Route path='/risk/general' element={<General/>}/>
        <Route path='/risk/breast_cancer' element={<Cancer/>}/>
        <Route path='/risk/cvd' element={<Cvd/>}/>
        <Route path='/risk/fracture' element={<Fracture/>}/>
      </Route>
      <Route path='/symptoms' element={<Symptoms/>}/>
      <Route path='/help' element={<Help/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
