import { create } from "zustand";
import { fetchData } from "../api";

const useEventStore = create((set) => ({
  events: [], // Initial empty array of events
  cart: {}, // Initial empty object to store cart items

  // Function to fetch events from the API and update the state
  fetchEvents: async () => {
    try {
      const events = await fetchData();
      set({ events });
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  },

  // Function to add an event to the cart
  addToCart: (event) => {
    set((state) => ({
      cart: {
        ...state.cart,
        [event.id]: (state.cart[event.id] || 0) + 1, // Increment quantity for event
      },
    }));
  },

  // Function to remove an event from the cart
  removeFromCart: (eventId) => {
    set((state) => {
      const updatedCart = { ...state.cart };
      if (updatedCart[eventId] > 1) {
        updatedCart[eventId] -= 1; // Decrement quantity for event
      } else {
        delete updatedCart[eventId]; // Remove event from cart if quantity is 1
      }
      return { cart: updatedCart };
    });
  },

  // Function to get the quantity of an event in the cart
  getQuantityInCart: (eventId) => {
    return useEventStore.getState().cart[eventId] || 0;
  },
}));

export default useEventStore;
