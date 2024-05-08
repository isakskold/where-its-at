// store.js
import { create } from "zustand";
import { fetchData } from "../api";

const useEventStore = create((set) => ({
  events: [], // Initial empty array of events

  // Function to fetch events from the API and update the state
  fetchEvents: async () => {
    try {
      const events = await fetchData();
      set({ events });
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  },
}));

export default useEventStore;
