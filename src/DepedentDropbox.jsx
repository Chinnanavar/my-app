import React, { useState } from "react";

const DependentDropbox = () => {
  const data = {
    USA: ["New York", "California", "Texas"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    India: ["Maharashtra", "Punjab", "Kerala"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(data[country] || []); // Update states based on the selected country
    setSelectedState(""); // Reset state dropdown
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <h1>Dependent Dropdown Example</h1>
      <div>
        <label>Country: </label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {Object.keys(data).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>State: </label>
        <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && selectedState && (
        <p>
          You selected: {selectedCountry} - {selectedState}
        </p>
      )}
    </div>
  );
};

export default DependentDropbox;
