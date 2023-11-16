import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const WeatherApi = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?";

  const datalar = async (baseURL,value) => {
    try {
      const response = await axios(
        `${baseURL}appid=32d783b8044a29ccfb5164819602138f&q=${value}`
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={(e) => handleChange(e)} />
    <button onClick={()=>{datalar(baseURL,value)}} >add</button>
    {console.log(data)}
      {data &&
        
          <ul key={data.weather[0].id}>
            <li>{data.base}</li>
            <li>{data.dt}</li>
          </ul>
        }
    </div>
  );
};

export default WeatherApi;
