import React from "react";
import { StyledHeader } from "../Events";
import { StyledH1 } from "../Events";
import GreenBtn from "../../../components/greenBtn/GreenBtn";
import Counter from "../../../components/counter/Counter";
import useEventStore from "../../../store";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: "FiraSansIta";
  font-size: 19px;
  font-weight: lighter;
  text-align: center;
  color: var(--text-white);
  opacity: 80%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StyledPrice = styled.p`
  font-size: 32px;
  font-weight: bolder;
  text-align: center;
  color: var(--text-white);
  text-shadow: 1px 1px 0px #f56b9a;
  margin-bottom: 1.5rem;
`;

const AllSelectedEvents = () => {
  const events = useEventStore((state) => state.events);
  const cart = useEventStore((state) => state.cart);
  const initialData = "Info";

  // Filter events to include only those in the cart
  const eventsInCart = events.filter((event) => cart[event.id]);

  // Calculate total price of items in the cart
  const totalPrice = eventsInCart.reduce((acc, event) => {
    const quantity = useEventStore.getState().getQuantityInCart(event.id);
    return acc + event.price * quantity;
  }, 0);

  return (
    <>
      <StyledHeader>
        <StyledH1 className="StyledH1">Cart</StyledH1>
      </StyledHeader>
      {eventsInCart.map((event) => (
        <Counter
          key={event.id}
          initialData={initialData}
          event={event}
          isInCart={true}
        />
      ))}
      <StyledParagraph>Total cart price</StyledParagraph>
      <StyledPrice>{totalPrice} sek</StyledPrice>
      <GreenBtn initialData={"sendOrder"} />
    </>
  );
};

export default AllSelectedEvents;
