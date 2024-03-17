import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CountryInfo from './countryInfo';
import { Autocomplete, TextField } from '@mui/material';

const Form = () => {

    const [search, setSearch] = useState('');
    const [countryName, setCountryName] = useState([]);
    const [countryInfo, setCountryInfo] = useState({});

    const fetchData = async () => {
        try {
            const result = await axios.get(`https://restcountries.com/v3.1/name/${search}?fullText=true`);
            if (result.status === 200 && result.statusText === 'OK') {
                setCountryInfo(result?.data[0]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchCountry = async () => {
        try {
            const result = await axios.get("https://restcountries.com/v3.1/all");
            if (result.status === 200 && result.statusText === 'OK') {
                let country = result?.data?.map((item) => item?.name?.common);
                country?.sort();
                setCountryName(country);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleClear=()=>{
        setCountryInfo(null);
        setSearch(null);
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    return (
        <div className="container">
            <div className="search-wrapper">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={search}
                    onChange={(e, value) => setSearch(value)}
                    options={countryName}
                    size='small'
                    renderInput={(params) => <TextField {...params} placeholder='Enter a country name here...' />}
                />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <button id='search-btn' onClick={fetchData} disabled={!search}>Search</button>
                    <button id='clear-btn' onClick={handleClear} style={{marginLeft:"10px"}}>Clear</button>
                </div>
            </div>
            <div>
                {
                    countryInfo?.name?.common && <CountryInfo countryInfo={countryInfo} />
                }
            </div>

        </div>
    )
}

export default Form
