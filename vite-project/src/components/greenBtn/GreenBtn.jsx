// GreenBtn.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useEventStore from "../../store";

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

/* 
Conditinal navigation and logic for GreenBtn


When initialData is set to send order the green button will take all the events in the cart and store them in a new state array that represents the tickets.

When initialData is set to goToCart it will just act as a navigation link to the cart.

Every ticket inside the tickets array will have another id property added to it based on how many of the same ticket there are in the array. The original event id will still exist aswell.
*/

const GreenBtn = ({ initialData }) => {
  const handleSendOrder = () => {
    if (initialData === "sendOrder") {
      const eventsInCart = useEventStore
        .getState()
        .events.filter((event) => useEventStore.getState().cart[event.id]);

      const tickets = eventsInCart.reduce((acc, event) => {
        const quantity = useEventStore.getState().getQuantityInCart(event.id);
        const existingTickets = useEventStore
          .getState()
          .tickets.filter((ticket) => ticket.event.id === event.id);
        const startIndex = existingTickets.length;

        return [
          ...acc,
          ...Array.from({ length: quantity }, (_, index) => ({
            id: `${event.id}_${startIndex + index}`, // Generate unique ticket ID
            event,
          })),
        ];
      }, []);

      // Update the tickets array in the store
      useEventStore.getState().addTickets(tickets);

      // Empty the cart
      useEventStore.getState().emptyCart();

      // Log the current state of the tickets array
      console.log("Current Tickets:", useEventStore.getState().tickets);
    }
  };
  return (
    <StyledGreenBtn
      to={initialData === "goToCart" ? "/events/allSelected" : "/orders"}
      onClick={handleSendOrder}
    >
      {initialData === "goToCart" && <span>Go to cart</span>}
      {initialData === "sendOrder" && <span>Send Order</span>}
    </StyledGreenBtn>
  );
};

export default GreenBtn;
