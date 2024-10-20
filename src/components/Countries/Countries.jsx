import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [VisitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (countryName) => {
    console.log('Bookmark at' , countryName)
    const newVisitedCountry = [...VisitedCountry, countryName];
    setVisitedCountry(newVisitedCountry)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((jsonData) => setCountries(jsonData));
  }, []);

  return (
    <div>
      <h2>Total Country - {countries.length}</h2>

      <div>
        <h2>Bookmark Country List - {VisitedCountry.length}</h2>
        <ul>
            {
                VisitedCountry.map((country, index) => <li key={index}>{country}</li>)
            }
        </ul>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country key={countries.ccn3} country={country} handleVisitedCountry={handleVisitedCountry} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
