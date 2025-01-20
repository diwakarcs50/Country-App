import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import HomeError from "./components/HomeError";
import CountryDetails from "./components/CountryDetails";


// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<App/>
//     },
//     {
//         path:'/contact',
//         element:<div>Contact</div>
//     }
// ])

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
         <Route path="/" element={<Home/>} />
         <Route path="contact" element={<div>Contact</div>}/>
         <Route path="country" element={<CountryDetails/>}/>
      </Route>

    </Routes>
  </BrowserRouter>)

// errorElement:{<HomeError/>}