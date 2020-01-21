import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

export default function FetchPage() {
  const [city, setCity] = React.useState();
  const [temp, setTemp] = React.useState();
  const [weath, setWeath] = React.useState();
  const [img, setImg] = React.useState();
  const URL =
    "http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=d0779da79aea7370c5afd6f5c342130a&q=Helsinki&units=metric";

  useEffect(() => {
    fetch(URL)
      .then(results => results.json())
      .then(resp => {
        setCity(resp.name);
        setTemp(resp.main.temp);
        setTemp(resp.main.temp);
        setWeath(resp.weather[0].main);
        setImg(resp.weather[0].icon);
      });
  }, [URL]);

  return (
    <div>
      <Button>
        <Link component={RouterLink} to="/">
          BACK
        </Link>
      </Button>
      <h1>Fetch GET</h1>
      <h1>Weather in {city}</h1>
      <div>Temperature: {temp} Celsius</div>
      <div>Weather: {weath}</div>
      <div>
        <img src={`https://openweathermap.org/img/w/${img}.png`}></img>
      </div>
    </div>
  );
}
