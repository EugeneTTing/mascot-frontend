import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root from './root';
import Home from './routes/home/home';
import About from './routes/about/about';
import Risk from './routes/risk/risk'
import Symptoms from './routes/symptoms/symptoms';
import Help from './routes/help/help';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Formulations from './routes/formulation/formulation';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
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
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
