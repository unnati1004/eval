import { useState } from "react";
import axios from "axios";

export const City = () => {
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const [country, setCountry] = useState("");

  const handleEff = () => {
    axios
      .post(`http://localhost:3001/City`, {
        city: city,
        population: population,
        country: country,
      })
      .then(() => {
        alert("sucess");
      });
  };
  return (
    <div>
      <div>
        <label>City Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Population:</label>
        <input
          type="text"
          onChange={(e) => {
            setPopulation(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>
      <input type="submit" onClick={handleEff} />
    </div>
  );
};
