import React from "react";
import { useState, useEffect } from "react";
import api from "../services/api";
import Lista from "./lista.jsx";

import "./list.css";

export default function List(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const sorted = data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div className="list-container">
      <div className="titles">
        <span>Name</span>
        <span>Capital</span>
        <span>Area</span>
        <span id="currencies">Currencies</span>
      </div>
      <div className="list">{Lista(sorted)}</div>
    </div>
  );
}
