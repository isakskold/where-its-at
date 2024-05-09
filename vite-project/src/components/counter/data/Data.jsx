import React from "react";
import styled from "styled-components";
import useEventStore from "../../../store";

const StyledMoneyParagraph = styled.p`
  font-weight: bold;
`;

const StyledBandParagraph = styled.p`
  font-family: "SansitaOne";
  font-size: 24px;
  color: var(--pink);
  padding-left: 10px;
`;

const StyledDateTimeParagraph = styled.p`
  font-size: 14px;
  padding-left: 10px;
  color: var(--light-blue);
`;

const Data = ({ data, event: { name, id, when, price } }) => {
  const time = `${when.from} - ${when.to}`;
  const quantityInCart = useEventStore.getState().getQuantityInCart(id);
  const totalPrice = price * quantityInCart;

  if (data === "Money") {
    return <StyledMoneyParagraph>{totalPrice} sek</StyledMoneyParagraph>;
  } else if (data === "Info") {
    return (
      <>
        <StyledBandParagraph>{name}</StyledBandParagraph>
        <StyledDateTimeParagraph>
          {when.date} {time}
        </StyledDateTimeParagraph>
      </>
    );
  } else {
    return null; // or return some default content
  }
};

export default Data;
