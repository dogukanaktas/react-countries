import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemDetail = () =>  {

    const {name} = useParams();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default ItemDetail