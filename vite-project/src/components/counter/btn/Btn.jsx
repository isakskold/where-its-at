const Btn = ({ type }) => {
  return <button>{type === "increment" ? "+" : "-"}</button>;
};

export default Btn;
