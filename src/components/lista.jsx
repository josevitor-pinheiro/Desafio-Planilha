import React from "react";
import "./lista.css";

export default function Lista(sorted) {
  console.log(sorted);

  function formatMoney(number, decPlaces, decSep, thouSep) {
    (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces)(
      (decSep = typeof decSep === "undefined" ? "." : decSep)
    );
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(
      parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces)))
    );
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return (
      sign +
      (j ? i.substr(0, j) + thouSep : "") +
      i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
      (decPlaces
        ? decSep +
          Math.abs(number - i)
            .toFixed(decPlaces)
            .slice(2)
        : "")
    );
  }

  return (
    <div className="lista">
      {sorted.map((obj) => (
        <div key={obj.name.common} className="objetos">
          <span>{obj.name.common} </span>
          <span>{obj.capital ? obj.capital : "-"} </span>
          <span>
            {obj.area.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).replace('R','').replace('$','')}
          </span>
          <span id="last-span">
            {obj.currencies ? Object.keys(obj.currencies)[0] : "-"}{" "}
          </span>
        </div>
      ))}
    </div>
  );
}

// {formatMoney(obj.area)}
