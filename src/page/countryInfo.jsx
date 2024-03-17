/* eslint-disable react/prop-types */
import React from 'react';

const CountryInfo = ({ countryInfo }) => {
  return (
    <div className="country-info">
      <img src={countryInfo?.flags?.svg} className="flag-img" alt="Country Flag" />
      <h2>{countryInfo?.name?.common}</h2>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Capital : </h4>
          <span>{countryInfo?.capital ? countryInfo?.capital[0] : 'N/A'}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Continent : </h4>
          <span>{countryInfo?.continents ? countryInfo?.continents[0] : 'N/A'}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Population : </h4>
          <span>{countryInfo?.population ? countryInfo?.population.toLocaleString() : 'N/A'}</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Currency : </h4>
          <span>
            {countryInfo?.currencies
              ? `${countryInfo?.currencies[Object.keys(countryInfo?.currencies)[0]]?.name} - ${Object.keys(countryInfo?.currencies)[0]}`
              : 'N/A'}
          </span>
        </div>
      </div>
      <div className="wrapper">
        <div className="data-wrapper">
          <h4>Common Languages : </h4>
          <span>
            {countryInfo?.languages
              ? Object.values(countryInfo?.languages)?.join(', ')
              : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
