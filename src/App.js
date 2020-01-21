import React from "react";
import "./App.css";
import { MainPage, AxiosPage, FetchPage } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <Route path="/" exact component={MainPage} />
            <Route path="/axios" component={AxiosPage} />
            <Route path="/fetch" component={FetchPage} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
