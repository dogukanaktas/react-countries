import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Filter from "./Filter";
import styles from "../css/Main.module.css";
import { GrCurrency } from "react-icons/gr";
import { FiStar } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";


const Main = ({ search, country, setSearch, setCountry }) => {
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
                <div>{`(${val.nativeName})`}</div>
                <div>
                  <FiStar /> {val.capital || "No Capital"}
                </div>
                <img className={styles.image} src={val.flag} />
                <div>
                  <FaGlobe />{" "}
                  {val.region
                    ? val.region + "-" + val.subregion
                    : "Unspecified"}
                </div>
                <div>
                  <FaLanguage /> {val.languages.map((lang) => lang.name + " ")}
                </div>
                <div>
                  <GrCurrency />{" "}
                  {val.currencies.map(
                    (cur) => cur.code !== "(none)" && cur.code + ""
                  )}
                </div>
                <div>
                  <BsFillPeopleFill /> {val.population ? val.population : '0'}
                </div>
                <div>
                    <GoGlobe /> {val.area}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
