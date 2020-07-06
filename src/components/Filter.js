import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import styles from "../css/Filter.module.css";

const Filter = ({ search, country, setSearch, setCountry }) => {
  const sortByNameDesc = () => {
    const nameDesc = [...country].sort((a, b) =>
      a.name > b.name ? -1 : a.name < b.name ? 1 : 0
    );
    setCountry(nameDesc);
  };

  const sortByNameAsc = () => {
    const nameAsc = [...country].sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );

    setCountry(nameAsc);
  };

  const sortByPopulationDesc = () => {
    const popDesc = [...country].sort((a, b) => {
      return b.population - a.population;
    });
    setCountry(popDesc);
  };

  const sortByPopulationAsc = () => {
    const popAsc = [...country].sort((a, b) => {
      return a.population - b.population;
    });
    setCountry(popAsc);
  };

  const sortByAreaDesc = () => {
    const areaDesc = [...country].sort((a, b) => {
      return b.area - a.area;
    });
    setCountry(areaDesc);
  };

  const sortByAreaAsc = () => {
    const areaAsc = [...country].sort((a, b) => {
      return a.area - b.area;
    });
    setCountry(areaAsc);
  };

  const sortByRegDesc = () => {
    const regDesc = [...country].sort((a, b) => {
      return a.region > b.region ? -1 : a.region < b.region ? 1 : 0;
    });
    setCountry(regDesc);
  };

  const sortByRegAsc = () => {
    const regAsc = [...country].sort((a, b) => {
      return a.region < b.region ? -1 : a.region > b.region ? 1 : 0;
    });
    setCountry(regAsc);
  };

  const sortByCapitalDesc = () => {
    const regAsc = [...country].sort((a, b) => {
      return a.capital > b.capital ? -1 : a.capital < b.capital ? 1 : 0;
    });
    setCountry(regAsc);
  };

  const sortByCapitalAsc = () => {
    const regAsc = [...country].sort((a, b) => {
      return a.capital < b.capital ? -1 : a.capital > b.capital ? 1 : 0;
    });
    setCountry(regAsc);
  };

  const sortByLangDesc = () => {
    const langDesc = [...country].sort((a, b) => {
      return a.languages.map((lang) => lang.name) >
        b.languages.map((lang) => lang.name)
        ? -1
        : a.languages.map((lang) => lang.name) <
          b.languages.map((lang) => lang.name)
        ? 1
        : 0;
    });
    setCountry(langDesc);
  };

  const sortByLangAsc = () => {
    const langAsc = [...country].sort((a, b) => {
      return a.languages.map((lang) => lang.name) <
        b.languages.map((lang) => lang.name)
        ? -1
        : a.languages.map((lang) => lang.name) >
          b.languages.map((lang) => lang.name)
        ? 1
        : 0;
    });
    setCountry(langAsc);
  };

  const sortByCurDesc = () => {
    const curDesc = [...country].sort((a, b) => {
      return a.currencies.map((cur) => cur.name) >
        b.currencies.map((cur) => cur.name)
        ? -1
        : a.currencies.map((cur) => cur.name) <
          b.currencies.map((cur) => cur.name)
        ? 1
        : 0;
    });
    setCountry(curDesc);
  };
  const sortByCurAsc = () => {
    const curAsc = [...country].sort((a, b) => {
      return a.currencies.map((cur) => cur.name) <
        b.currencies.map((cur) => cur.name)
        ? -1
        : a.currencies.map((cur) => cur.name) >
          b.currencies.map((cur) => cur.name)
        ? 1
        : 0;
    });
    setCountry(curAsc);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.leftBox}>
        <div className={styles.sortName}>
          <span className={styles.textSize}>Name: </span>
          <div>
            <TiArrowSortedUp
              className={styles.iconSize}
              onClick={() => sortByNameAsc()}
            />
            <TiArrowSortedDown
              className={styles.iconSize}
              onClick={() => sortByNameDesc()}
            />
          </div>
        </div>
        <div className={styles.sortCapital}>
          <span className={styles.textSize}>Capital: </span>
          <div>
          <TiArrowSortedUp
            className={styles.iconSize}
            onClick={() => sortByCapitalAsc()}
          />
          <TiArrowSortedDown
            className={styles.iconSize}
            onClick={() => sortByCapitalDesc()}
          />
          </div>
        </div>
        <div className={styles.sortRegion}>
          <span className={styles.textSize}>Region: </span>
          <TiArrowSortedUp
            className={styles.iconSize}
            onClick={() => sortByRegAsc()}
          />
          <TiArrowSortedDown
            className={styles.iconSize}
            onClick={() => sortByRegDesc()}
          />
        </div>
        <div className={styles.sortLanguages}>
          <span className={styles.textSize}>Language: </span>
          <TiArrowSortedUp
            className={styles.iconSize}
            onClick={() => sortByLangAsc()}
          />
          <TiArrowSortedDown
            className={styles.iconSize}
            onClick={() => sortByLangDesc()}
          />
        </div>
      </div>

      <div className={styles.searchBox}>
        <div className={styles.searchInputBox}>
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter country name..."
            alt="sel"
            autoFocus
          />
        </div>
        <div className={styles.clearFilters}>
          <span
            className={styles.clearFiltersText}
            onClick={() => sortByNameAsc()}
          >
            Clear Filters{" "}
          </span>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.sortCurrency}>
          <span>Sort by Currency: </span>
          <FaSortAmountDown onClick={() => sortByCurAsc()} />
          <FaSortAmountUpAlt onClick={() => sortByCurDesc()} />
        </div>
        <div className={styles.sortPopulation}>
          <span>Sort by Population: </span>
          <FaSortAmountDown onClick={() => sortByPopulationAsc()} />
          <FaSortAmountUpAlt onClick={() => sortByPopulationDesc()} />
        </div>
        <div className={styles.sortArea}>
          <span>Sort by Area: </span>
          <FaSortAmountDown onClick={() => sortByAreaAsc()} />
          <FaSortAmountUpAlt onClick={() => sortByAreaDesc()} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
