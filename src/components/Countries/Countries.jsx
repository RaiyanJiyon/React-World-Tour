import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((jsonData) => setCountries(jsonData))
    } ,[])
    
    return (
        <div>
            <h2>Total Country - {countries.length}</h2>
        </div>
    );
};

export default Countries;