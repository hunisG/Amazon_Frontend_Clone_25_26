import React from "react";
import numeral from "numeral";

/**
 * Props:
 *  - value: number
 *  - type: "price" | "count" | "buyers"
 */
const CurrencyFormat = ({ value, type = "price" }) => {
  if (value == null) return null;

  let formatted;

  switch (type) {
    case "price":
      formatted = `$${numeral(value).format("0,0.00")}`; // 1,234.56
      break;
    case "count":
      formatted = numeral(value).format("0a"); // 1k, 2.3k
      break;
    default:
      formatted = value;
  }

  return <span>{formatted}</span>;
};

export default CurrencyFormat;
