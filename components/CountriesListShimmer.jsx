import React from 'react'
import './shimmer.css'

export default function CountriesListShimmer() {
   
  return (
    <>
    {
         Array.from({length:10}).map((el,i)=>{
            return <div key ={i} className='countries-container'>
              <div className="country-card shimmer-card">
                
                </div>
        
            </div>
        })
    }

   
    </>
  )
}
