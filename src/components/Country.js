import { useState } from "react";
import axios from "axios";

export const Country = () => {
  const [country, setCountry] = useState("");

  const handleEff = () => {
    axios
      .post(`http://localhost:3002/Country`, {
        title: country,
      })
      .then(() => {
        alert("sucess");
      });
  };
  return (
    <div>
      <label>Country:</label>
      <input
        type="text"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <input type="submit" onClick={handleEff} />
    </div>
  );
};
