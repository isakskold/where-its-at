import React from "react";
import { StyledHeader } from "../Events";
import { StyledH1 } from "../Events";
import Counter from "../../../components/counter/Counter";

const SingleEvent = () => {
  return (
    <>
      <StyledHeader>
        <StyledH1 className="StyledH1">Event info</StyledH1>
      </StyledHeader>

      <Counter initialData={"Money"} />
    </>
  );
};

export default SingleEvent;
