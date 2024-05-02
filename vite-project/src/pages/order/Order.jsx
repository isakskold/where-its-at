import React from "react";
import Counter from "../../components/counter/Counter";
import GreenBtn from "../../components/greenBtn/GreenBtn";

const Order = () => {
  return (
    <>
      <Counter initialData={"Info"} />
      <GreenBtn initialData={"sendOrder"} />
    </>
  );
};

export default Order;
