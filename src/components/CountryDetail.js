import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "../css/CountryDetail.module.css";

const CountryDetail = ({ countries }) => {
  const details = countries.map((val) => val);
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h1 className={styles.name}>
          {countries.map((val) => val.name.toUpperCase())}
        </h1>
        <img
          className={styles.flag}
          src={countries.map((val) => val.flag)}
          alt=""
        />

        <h2 className={styles.region}>{countries.map((val) => val.region)}</h2>
        <h2 className={styles.subregion}>
          {countries.map((val) => val.subregion)}
        </h2>
        <span>Borders: </span>
        <h4>{countries.map((val) => val.borders.map((tek) => tek + " | "))}</h4>
      </div>
    </div>
  );
};

export default CountryDetail;
