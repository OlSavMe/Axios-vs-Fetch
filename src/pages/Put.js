import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import Axios from "axios";

export default function Put() {
  let [stat, setStat] = React.useState();

  const putUser = async () => {
    const params = {
      first_name: "Updated name",
      last_name: "Updated last name",
      email: "updated@gmail.com"
    };

    await Axios.put("https://reqres.in/api/users", params)
      .then(function(response) {
        console.log(response.status);
        setStat(response.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  putUser();

  return (
    <div>
      <Button>
        <Link component={RouterLink} to="/">
          BACK
        </Link>
      </Button>
      <h1>Axios PUT</h1>
      <div>Status: {stat}</div>
    </div>
  );
}
