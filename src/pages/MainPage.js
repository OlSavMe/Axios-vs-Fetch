import React, { useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

export default function MainPage(props) {
  return (
    <div>
      <Button>
        <Link component={RouterLink} to="/axios">
          Axios
        </Link>
      </Button>
      <Button>
        <Link component={RouterLink} to="/fetch">
          Fetch
        </Link>
      </Button>
    </div>
  );
}
