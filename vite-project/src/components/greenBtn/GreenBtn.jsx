import React from "react";
import styled from "styled-components";

const StyledGreenBtn = styled.button`
  height: 60px;
  background-color: var(--light-blue);
  border-radius: 3px;
  font-size: 22px;
`;

const GreenBtn = ({ initialData }) => {
  return (
    <StyledGreenBtn>
      {initialData === "addToCart" && <span>Add to Cart</span>}
      {initialData === "sendOrder" && <span>Send Order</span>}
    </StyledGreenBtn>
  );
};

export default GreenBtn;
