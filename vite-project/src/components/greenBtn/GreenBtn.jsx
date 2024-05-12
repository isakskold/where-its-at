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

// Function to generate random alphanumeric IDs of a specific length
const generateRandomId = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const GreenBtn = ({ initialData }) => {
  const handleSendOrder = async () => {
    try {
      if (initialData === "sendOrder") {
        // Get the events in the cart
        const eventsInCart = useEventStore
          .getState()
          .events.filter((event) => useEventStore.getState().cart[event.id]);

        // Process each event in the cart
        eventsInCart.forEach((event) => {
          // Get the quantity of the event in the cart
          const quantity = useEventStore.getState().getQuantityInCart(event.id);

          // Generate new tickets for the event based on quantity
          const newTickets = Array.from({ length: quantity }, () => {
            let newId;
            do {
              newId = generateRandomId(5); // Generate unique ID for each ticket
            } while (
              useEventStore
                .getState()
                .tickets.some((ticket) => ticket.id === newId)
            );
            return {
              id: newId,
              event,
            };
          });

          // Add the new tickets to the store
          useEventStore.getState().addTickets(newTickets);
        });

        // Empty the cart after processing all events
        useEventStore.getState().emptyCart();

        // Log the current state of the tickets array
        console.log("Current Tickets:", useEventStore.getState().tickets);
      }
    } catch (error) {
      console.error("Error sending order:", error);
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
