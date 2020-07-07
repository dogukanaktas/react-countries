import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from "../css/CountryDetail.module.css";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetail = (props) => {
  const { countries, history } = props;
  console.log(countries);
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <h1 className={styles.name}>
          {countries.map((val) => val.name.toUpperCase())}
        </h1>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.leftSub}>
          <img
            className={styles.flag}
            src={countries.map((val) => val.flag)}
            alt="Country Flag"
          />
          <div className={styles.buttonSub}>
            <button
              className={styles.backButton}
              onClick={() => history.goBack()}
            >
              <BsArrowLeft className={styles.arrow} />{" "}
              <span className={styles.backButtonText}>Back</span>
            </button>
          </div>
        </div>

        <div className={styles.rightSub}>
          <div className={styles.leftDetails}>
            <div>
              <span>capital:</span>
              <p className={styles.capital}>
                {countries.map((val) => val.capital || "No capital")}
              </p>
            </div>
            <div>
              <span>region:</span>
              <p className={styles.region}>
                {countries.map((val) => val.region)}
              </p>
            </div>
            <div>
              <span>subregion:</span>
              <p className={styles.subregion}>
                {countries.map((val) => val.subregion || "No subregion")}
              </p>
            </div>
            <div>
              <span>population:</span>
              <p className={styles.population}>
                {countries.map((val) =>
                  val.population
                    ? val.population
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                    : "No population"
                )}
              </p>
            </div>
            <div>
              <span>area:</span>
              <p className={styles.area}>
                {countries.map((val, i) =>
                  val.area ? (
                    <p key={i}>
                      {val.area
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                      km<sup>2</sup>
                    </p>
                  ) : (
                    "Unspecified"
                  )
                )}
              </p>
            </div>
            <div>
              <span>border nations:</span>
              <p className={styles.borders}>
                {countries.map((val) =>
                  val.borders.length > 0
                    ? val.borders.map((bor) => bor && bor + "  ")
                    : "No border nations"
                )}
              </p>
            </div>
          </div>

          <div className={styles.rightDetails}>
            
            <div>
              <span>languages:</span>
              <p>
                {countries.map((val) =>
                  val.languages.map((lang) => lang.name + " ")
                )}
              </p>
            </div>
            <div>
              <span>calling code:</span>
              <p>
                {countries.map((val) =>
                  val.callingCodes.map((call) =>
                    call === "" ? "No calling code" : call + " "
                  )
                )}
              </p>
            </div>
            <div>
              <span>top level domain(s):</span>
              <p>
                {countries.map((val) =>
                  val.topLevelDomain.map((dom) => dom + " ")
                )}
              </p>
            </div>
            
            <div>
              <span>time zone(s):</span>
              <p>
                {countries.map((val) =>
                  val.timezones.map((time) => time + "  ")
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
