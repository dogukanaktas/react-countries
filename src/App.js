import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Main from "./components/Main";
import About from "./components/About";
import Navbar from "./components/NavBar";
import CountryDetail from "./components/CountryDetail";
import "./index.css";

const App = () => {
  const [country, SetCountry] = useState([]);
  const [search, SetSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/")
      .then((response) => SetCountry(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Main
              country={country}
              search={search}
              setSearch={SetSearch}
              setCountry={SetCountry}
            />
          )}
        />
        <Route exact path="/About" component={About} />
        <Route exact path="/country/:name" component={CountryDetail} />
      </Switch>
    </Router>
  );
};

export default App;
