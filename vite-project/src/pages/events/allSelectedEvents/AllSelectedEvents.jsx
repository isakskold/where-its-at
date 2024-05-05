import React from "react";
import { StyledHeader } from "../Events";
import { StyledH1 } from "../Events";
import GreenBtn from "../../../components/greenBtn/GreenBtn";
import Counter from "../../../components/counter/Counter";

const AllSelectedEvents = () => {
  return (
    <>
      <StyledHeader>
        <StyledH1 className="StyledH1">Selected Events</StyledH1>
      </StyledHeader>
      <Counter initialData={"Info"} />
      <GreenBtn initialData={"sendOrder"} />
    </>
  );
};

export default AllSelectedEvents;
