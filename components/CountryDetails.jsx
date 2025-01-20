import React, { useEffect, useState } from 'react'
import './country.css'

export default function CountryDetails() {
  const countryName = new URLSearchParams(location.search).get('name')
  console.log(countryName)

  const [countryData,setCountryData] = useState(null)

  useEffect(()=>{
     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
     .then((res)=>res.json())
     .then(([data])=>{
        console.log(data)
        setCountryData({
            image:data.flags.svg,
            name:data.name.common,
            nativeName:Object.values(data.name.nativeName)[0].common,
            population:data.population.toLocaleString('en-In'),
            region:data.region,
            subRegion:data.subregion,
            capital:data.capital,
            tld:data.tld,
            currency:Object.values(data.currencies).map((currency)=>currency.name).join(' , '),
            languages:Object.values(data.languages).join(', ')

        })
     })
  },[])
  return (
   countryData===null ? 'loading...' :  <main>
   <div className="country-details-container">  
     <span className="back-button">
       <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
     </span>
     <div className="country-details">
       <img src={countryData.image} alt="" />
       <div className="details-text-container">
         <h1>{countryData.name}</h1>
         <div className="details-text">
           <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
           <p><b>Population:{countryData.population} </b><span className="population"></span></p>
           <p><b>Region:{countryData.region} </b><span className="region"></span></p>
           <p><b>Sub Region:{countryData.subRegion} </b><span className="sub-region"></span></p>
           <p><b>Capital:{countryData.capital} </b><span className="capital"></span></p>
           <p>
             <b>Top Level Domain:{countryData.tld} </b><span className="top-level-domain"></span>
           </p>
           <p><b>Currencies:{countryData.currency} </b><span className="currencies"></span></p>
           <p><b>Languages: {countryData.languages}</b><span className="languages"></span></p>
         </div>
         <div className="border-countries"><b>Border Countries: </b>&nbsp;</div>
       </div>
     </div>
   </div>
 </main>
  )
}
