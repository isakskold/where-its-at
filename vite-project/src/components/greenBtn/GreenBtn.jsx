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

Unique seat and section is also handled in here
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
        const state = useEventStore.getState();

        // Process each event in the cart
        useEventStore.getState().events.forEach((event) => {
          // Get the quantity of the event in the cart
          const quantity = state.getQuantityInCart(event.id);

          // Generate new tickets for the event based on quantity
          const newTickets = [];
          const existingTickets = state.tickets.filter(
            (ticket) => ticket.event.id === event.id
          );

          const sections = ["A", "B", "C"];
          const randomSection =
            sections[Math.floor(Math.random() * sections.length)];

          // Find the highest seat number among existing tickets for this event
          let highestSeat = -1;
          existingTickets.forEach((ticket) => {
            if (ticket.section === randomSection && ticket.seat > highestSeat) {
              highestSeat = ticket.seat;
            }
          });

          let currentSeat = highestSeat + 1; // Start seat number from the highest existing seat number + 1
          let isFirstTicket = true; // Flag to indicate the first ticket to adjust for adjacency
          for (let i = 0; i < quantity; i++) {
            let newId;
            let isNewSeatFound = false;
            do {
              if (!isFirstTicket) {
                currentSeat++; // If not the first ticket, increment seat number
              }
              newId = generateRandomId(5); // Generate unique ID for each ticket

              // Check if any existing ticket has the same section and seat number
              const isSeatAvailable = !existingTickets.some(
                (ticket) =>
                  ticket.section === randomSection &&
                  ticket.seat === currentSeat
              );

              if (isSeatAvailable) {
                isNewSeatFound = true;
              }
            } while (!isNewSeatFound);

            newTickets.push({
              id: newId,
              event,
              section: randomSection,
              seat: currentSeat,
            });

            isFirstTicket = false; // Reset flag after the first ticket
          }

          // Add the new tickets to the store
          state.addTickets(newTickets);
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

//Sorry för spaghetti kod i denna knapp komponent. Blev lite stress att få ihop det.
