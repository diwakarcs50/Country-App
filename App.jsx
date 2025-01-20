import React, { useState } from "react";
import Header from "./components/Header";
import "./app.css";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesContainer from "./components/CountriesContainer";

import { Outlet } from "react-router"

function App() {
  
  return (
    <>
      <Header />
      <Outlet/>

      
    </>
  );
}

export default App;
