import React, { useState } from "react";
import Header from "./components/Header";
import "./app.css";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesContainer from "./components/CountriesContainer";

import { Outlet } from "react-router"



function App() {
  //LIFTING UP THE STATE
  const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('mode')))
  const theme= [isDark,setIsDark]
  return (
    <>
      <Header theme={theme}/>
      <Outlet context={theme}/>
      <button onClick={()=>history.back()}>Back</button>
    
    </>
  );
}

export default App;
