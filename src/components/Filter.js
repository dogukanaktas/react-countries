import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

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
    <div>
      <div>
        <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter country name..."
        autoFocus
      />
      <FaSearch />
      </div>
      
      <div>
        {console.log(country)}
        <span>Sort by Name: </span>
        <FaSortAlphaUp onClick={() => sortByNameAsc()} />
        <FaSortAlphaDownAlt onClick={() => sortByNameDesc()} />
      </div>
      <div>
        <span>Sort by Capital: </span>
        <AiOutlineSortDescending onClick={() => sortByCapitalAsc()} />
        <AiOutlineSortAscending onClick={() => sortByCapitalDesc()} />
      </div>
      <div>
        <span>Sort by Region: </span>
        <AiOutlineSortDescending onClick={() => sortByRegAsc()} />
        <AiOutlineSortAscending onClick={() => sortByRegDesc()} />
      </div>
      <div>
        <span>Sort by Language: </span>
        <FaSortAmountDown onClick={() => sortByLangAsc()} />
        <FaSortAmountUpAlt onClick={() => sortByLangDesc()} />
      </div>

      <div>
        <span>Sort by Currency: </span>
        <FaSortAmountDown onClick={() => sortByCurAsc()} />
        <FaSortAmountUpAlt onClick={() => sortByCurDesc()} />
      </div>
      <div>
        <span>Sort by Population: </span>
        <FaSortAmountDown onClick={() => sortByPopulationAsc()} />
        <FaSortAmountUpAlt onClick={() => sortByPopulationDesc()} />
      </div>
      <div>
        <span>Sort by Area: </span>
        <FaSortAmountDown onClick={() => sortByAreaAsc()} />
        <FaSortAmountUpAlt onClick={() => sortByAreaDesc()} />
      </div>

      <div>
        <span onClick={() => sortByNameAsc()}>Clear Filters </span>
      </div>
    </div>
  );
};

export default Filter;
