import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Filter from './Filter'
import styles from "../css/Main.module.css";

const Main = ({
  search,
  country,
  setSearch,
  setCountry,
}) => {
  

  return (
    <div>
      <Filter
        country={country}
        search={search}
        setCountry={setCountry}
        setSearch={setSearch}
      />
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, auto)",
          gridGap: "1em",
        }}
      >
       
        {country
          .filter(
            (item) =>
              item.name.toLowerCase().indexOf(search.toLowerCase()) === 0
          )
          .map((val, id) => (
            <div key={id}>
              <div>
                <Link to={`/country/${val.alpha3Code}`}>{val.name}</Link>
                <img className={styles.image} src={val.flag} />
                {`Population: ${val.population}`}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
