import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import Axios from "axios";

export default function AxiosPage() {
  const [city, setCity] = React.useState();
  const [temp, setTemp] = React.useState();
  const [weath, setWeath] = React.useState();
  const [img, setImg] = React.useState();

  const fetchWeath = async () => {
    const response = await Axios.get(
      "http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=d0779da79aea7370c5afd6f5c342130a&q=Helsinki&units=metric"
    );
    const data = response.data;
    setCity(data.name);
    setTemp(data.main.temp);
    setTemp(data.main.temp);
    setWeath(data.weather[0].main);
    setImg(data.weather[0].icon);
    // setUrl(`https://openweathermap.org/img/w/${img}.png`);
  };

  useEffect(() => {
    fetchWeath(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Button>
        <Link component={RouterLink} to="/">
          BACK
        </Link>
      </Button>
      <h1>Axios GET</h1>
      <h1>Weather in {city}</h1>
      <div>Temperature: {temp} Celsius</div>
      <div>Weather: {weath}</div>
      <div>
        <img src={`https://openweathermap.org/img/w/${img}.png`}></img>
      </div>
    </div>
  );
}
