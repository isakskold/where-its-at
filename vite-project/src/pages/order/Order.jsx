import React from "react";
import Ticket from "../../components/ticket/Ticket";
import useEventStore from "../../store";

const Order = () => {
  // Get the tickets from the store
  const tickets = useEventStore((state) => state.tickets);

  return (
    <>
      {/* Map over the tickets and render a Ticket component for each */}
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </>
  );
};

export default Order;
