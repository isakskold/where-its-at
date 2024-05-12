import React from "react";
import styled from "styled-components";
import Ticket from "../../components/ticket/Ticket";
import useEventStore from "../../store";

const OrderPageWrapper = styled.div`
  > :last-child {
    margin-bottom: 96px;
  }
`;

const Order = () => {
  // Get the tickets from the store
  const tickets = useEventStore((state) => state.tickets);

  return (
    <OrderPageWrapper>
      {/* Map over the tickets and render a Ticket component for each */}
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </OrderPageWrapper>
  );
};

export default Order;
