import React, { useState } from "react";
import "../app.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { useOutletContext } from "react-router";

export default function Home() {
    const [data,setData] = useState('')
    const [isDark] = useOutletContext()
    
  return (
    <main className={isDark ? 'dark' : ''}>
        <div className="search-filter-container">
          <SearchBar setData={setData} />
          <SelectMenu />
          <CountriesContainer data={data}/>
        </div>
    </main>
  )
}
