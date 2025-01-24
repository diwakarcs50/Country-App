import React, { useEffect, useState } from "react";
// import countriesData from "../all.js";
import CountryCard from "./CountryCard.jsx";
import CountriesListShimmer from "./CountriesListShimmer.jsx";

export default function CountriesContainer({data}) {
  const [countriesData,setCountriesData] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then(data=>setCountriesData(data))
  },[])

  return (
  <>
  {countriesData.length===0?<CountriesListShimmer/>:
  <div>
     <div className="countries-container">{
    countriesData.filter((country)=>{
        return country.name.common.toLowerCase().includes(data)
    }).map((country) => {
    
    return (
      <CountryCard
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString("en-IN")}
        region ={country.region}
        capital = {country.capital?.[0]}
        key={country.name.common}
        data={country}
      />
    );
  })

  }</div>;
  </div>
  
 }
</>
)


}
