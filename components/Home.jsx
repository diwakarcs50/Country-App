import React, { useState } from "react";
import "../app.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";

export default function Home() {
    const [data,setData] = useState('')
  return (
    <main>
        <div className="search-filter-container">
          <SearchBar setData={setData} />
          <SelectMenu />
          <CountriesContainer data={data}/>
        </div>
    </main>
  )
}
