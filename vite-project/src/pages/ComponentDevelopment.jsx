import Event from "./event/Event";
import Events from "./events/Events";
import Order from "./order/Order";

// Test enviornment. Render the pages for visualisation. Will not be used when routing is set up.

const ComponentDevelopment = () => {
  return (
    <>
      <Events />
      <Event />
      <Order />
    </>
  );
};

export default ComponentDevelopment;
