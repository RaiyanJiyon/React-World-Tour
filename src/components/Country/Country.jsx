import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry}) => {
    const {flags, name, population, region} = country
    const capital = country.capital ? country.capital[0] : 'N/A'

    const [Visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!Visited);
        console.log('Visited')
    }

    return (
        <div className='country'>
            <img style={{width: '200px', height: '100px'}} src={flags.png} alt="{flags.png} flag" />
            <h2>Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <button>More Details</button>
            <br />
            <br />
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            <br />
            <br />
            <button onClick={() => handleVisitedCountry(name.common)}>Bookmark as Visited</button>
        </div>
    );
};

export default Country;