import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import Axios from "axios";

export default function Reqres() {
  let [stat, setStat] = React.useState();

  const postUser = async () => {
    const params = {
      first_name: "Olga",
      last_name: "Savka"
    };

    await Axios.post("https://reqres.in/api/users", params)
      .then(function(response) {
        console.log(response.status);
        setStat(response.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  postUser();

  return (
    <div>
      <Button>
        <Link component={RouterLink} to="/">
          BACK
        </Link>
      </Button>
      <h1>Axios POST</h1>
      <div>Status: {stat}</div>
    </div>
  );
}
