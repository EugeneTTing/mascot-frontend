import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root from './root';
import Home from './pages/Home';
import About from './pages/About';
import Risk from './pages/Risk'
import Symptoms from './pages/Symptoms';
import Help from './pages/Help';
import Formulations from './pages/Formulation';
import './index.css';
import ErrorPage from './error-page';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/risk' element={<Risk/>}/>
      <Route path='/formulations' element={<Formulations/>}/>
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
