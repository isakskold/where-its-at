import React from "react";

const Btn = ({ type, onClick }) => {
  return <button onClick={onClick}>{type === "increment" ? "+" : "-"}</button>;
};

export default Btn;
