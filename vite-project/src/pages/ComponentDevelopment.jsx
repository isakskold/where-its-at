import Events from "./events/Events";
import Order from "./order/Order";

// Test enviornment. Render the pages for visualisation. Will not be used when routing is set up.

const ComponentDevelopment = () => {
  return (
    <>
      <Events />
      <Events initialData={"singleEvent"} />
      <Events initialData={"allSelectedEvents"} />
    </>
  );
};

export default ComponentDevelopment;
