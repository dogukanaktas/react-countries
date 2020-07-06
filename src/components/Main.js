import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Filter from "./Filter";
import { GrCurrency } from "react-icons/gr";
import { FiStar } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import styles from "../css/Main.module.css";


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
      className={styles.gridContainer}
      >
        {country
          .filter(
            (item) =>
              item.name.toLowerCase().indexOf(search.toLowerCase()) === 0
          )
          .map((val, id) => (
            <div key={id}>
              <div className={styles.gridBox}>

                <div className={styles.imageContainer}>
                  <img className={styles.image} src={val.flag} />
                </div>

                <div className={styles.name}>
                <Link className={styles.nameText} to={`/country/${val.alpha3Code}`}>{val.name.toUpperCase()}</Link>
                </div>

                <div className={styles.nativeName}>{`( ${val.nativeName} )`}</div>

                <div className={styles.capital}>
                <FiStar className={styles.capitalIcon} /> {val.capital || "No Capital"}
                </div>

                

                <div className={styles.region}>
                  <FaGlobe className={styles.regionIcon} />{" "}
                  {val.region
                    ? val.region + " - " + val.subregion
                    : "Unspecified"}
                </div>

                <div className={styles.languages}>
                  <FaLanguage className={styles.languagesIcon}/> {val.languages.map((lang) => lang.name + " ")}
                </div>

                <div className={styles.currencies}>
                  <GrCurrency className={styles.currenciesIcon} />{" "}
                  {val.currencies.map(
                    (cur) => cur.code === "(none)" ? "" : cur.code === null ? "" : cur.code + " "
                  )}
                </div>

                <div className={styles.population}>
                  <BsFillPeopleFill className={styles.populationIcon} /> {val.population ? val.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : "0"}
                </div>

                <div className={styles.area}>
                  <GoGlobe className={styles.areaIcon} />{" "}
                  {val.area ? (
                    <span className={styles.areaSpan}>
                      {val.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} km<sup>2</sup>
                    </span>
                  ) : (
                    "0"
                  )}
                </div>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
