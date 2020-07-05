import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from "../css/CountryDetail.module.css";
import {BsArrowLeft} from 'react-icons/bs'

const CountryDetail = (props) => {
  const { countries, history } = props;
  console.log(countries);
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        
        <button className={styles.backButton} onClick={() => history.goBack()}>
        <BsArrowLeft className={styles.arrow}/> <span className={styles.backButtonText}>Back</span>
        </button>

        <div className={styles.leftSub}>
          <h1 className={styles.name}>
            {countries.map((val) => val.name.toUpperCase())}
          </h1>
          <img
            className={styles.flag}
            src={countries.map((val) => val.flag)}
            alt=""
          />
        </div>

        <div className={styles.rightSub}>
          <div>
            <span>region:</span>
            <h5 className={styles.region}>
              {countries.map((val) => val.region)}
            </h5>
          </div>
          <div>
            <span>subregion:</span>
            <h5 className={styles.subregion}>
              {countries.map((val) => val.subregion)}
            </h5>
          </div>
          <div>
            <span>population:</span>
            <h5 className={styles.population}>
              {countries.map(val => val.population ? val.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : "No")}
            </h5>
          </div>
          <div>
            <span>area:</span>
            <h5 className={styles.area}>{countries.map((val) => val.area ? (
                    <span>
                      {val.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} km<sup>2</sup>
                    </span>
                  ) : (
                    "0"
                  ))}</h5>
          </div>
          <div>
            <span>currencies:</span>
            <h5 className={styles.currencies}>
              {`${countries.map((val) => val.currencies.map((cur) => cur.name))} - ${countries.map((val) => val.currencies.map((cur) => cur.symbol))}`}
            </h5>
          </div>
          <div>
            <span>borders:</span>
            <h5 className={styles.borders}>
              {countries.map((val) => val.borders.map((bor) => bor + "  "))}
            </h5>
          </div>
          <div>
            <span>languages:</span>
            <h5>{countries.map(val => val.languages.map(lang=> lang.name+' '))}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
