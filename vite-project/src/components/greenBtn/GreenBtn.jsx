import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledGreenBtn = styled(Link)`
  height: 60px;
  background-color: var(--light-blue);
  border-radius: 3px;
  font-size: 22px;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
`;

const GreenBtn = ({ initialData }) => {
  return (
    <StyledGreenBtn
      to={initialData === "addToCart" ? "/events/allSelected" : "/orders"}
    >
      {initialData === "addToCart" && <span>Go to cart</span>}
      {initialData === "sendOrder" && <span>Send Order</span>}
    </StyledGreenBtn>
  );
};

export default GreenBtn;
