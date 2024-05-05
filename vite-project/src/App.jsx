import Nav from "./components/nav/Nav";
import ComponentDevelopment from "./pages/ComponentDevelopment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import SingleEvent from "./pages/events/singleEvent/SingleEvent";
import AllSelectedEvents from "./pages/events/allSelectedEvents/AllSelectedEvents";
import Order from "./pages/order/Order";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/single" element={<SingleEvent />} />
        <Route path="/events/allSelected" element={<AllSelectedEvents />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
