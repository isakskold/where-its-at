import axios from "axios";

// Function to fetch data from the API
export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://santosnr6.github.io/Data/events.json"
    );
    return response.data.events; // Return the events array
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array if there's an error
  }
};

// Function to extract desired properties from the events
export const getEventProperties = (event) => {
  const { name, price, where, when } = event;
  const { date, from, to } = when;
  return { name, price, where, date, from, to };
};
