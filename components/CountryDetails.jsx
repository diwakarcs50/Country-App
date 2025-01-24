import React, { useEffect, useState } from 'react'
import './country.css'
import { Link, useLocation, useParams } from 'react-router'
import CountriesListShimmer from './CountriesListShimmer'

export default function CountryDetails() {
  // const countryName = new URLSearchParams(location.search).get('name')
 
  //logic for extracting data from params
  const params = useParams()
  const countryName = params.country
  const [countryData,setCountryData] = useState(null)
  // const [notFound,setnotFound] = useState(false)
  const {state} = useLocation()
  console.log(state)


  function updateData(data){
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
      languages:Object.values(data.languages).join(', '),
      borders:[]

  })

  if(!data.borders){
    data.borders=[]
  }

  Promise.all(data.borders.map((border)=>{
    return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res)=>res.json())
    .then(([borderCountry])=>borderCountry.name.common)
  })).then((borders)=>{
    console.log(borders)
    setCountryData((prev)=>({...prev,borders}))
  })

}

  


  useEffect(()=>{
    if(state){
      updateData(state)
      return
    }
     fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
     .then((res)=>res.json())
     .then(([data])=>{
        console.log(data)
        updateData(data)
        console.log(countryData)
       
       
        
        
     }).catch((err)=>{
        console.log(`cant find country named ${countryName}`)
        // setnotFound(false)
     })
  },[countryName])

  // if(notFound){
  //   console.log(notFound)
  //   return (<p style={{font:"bold"}}> No Country found at <i><b>{countryName}</b></i></p>)
  // }
  
  return (
    countryData===null ? <CountriesListShimmer/> :  <main>
    <div className="country-details-container">  
      <span className="back-button" onClick={() => window.history.back()}>
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
          <div className="border-countries"><b>Border Countries:{countryData.borders.map((border,i)=>{
             return <Link key={i} to={`/${border}`}>{border}</Link>
          })}</b>&nbsp;</div>
        </div>
      </div>
    </div>
  </main>
)
 
}
