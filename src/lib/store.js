import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "@/slices/bookingSlice";

// Create the store but DON'T export it directly
export const makeStore = () =>
  configureStore({
    reducer: {
      booking: bookingReducer,
    },
  });
