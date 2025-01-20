import React from "react";
import { Link } from "react-router";

export default function CountryCard({name,flag,population,region,capital}) {
    console.log(typeof population)
  return (
    <>
      <Link className="country-card" to={`/country?name=${name}`}>
        <img src={flag} alt="South Georgia flag" />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>{population}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>
          <p>
            <b>Capital: </b>{capital}
          </p>
        </div>
      </Link>
    </>
  );
}


