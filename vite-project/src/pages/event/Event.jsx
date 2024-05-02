import React from "react";
import Counter from "../../components/counter/Counter";
import GreenBtn from "../../components/greenBtn/GreenBtn";

const Event = () => {
  return (
    <>
      <Counter initialData={"Money"} />
      <GreenBtn initialData={"addToCart"} />
    </>
  );
};

export default Event;
