
import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.list.unshift(action.payload);
    },
    setBookings: (state, action) => {
      state.list = action.payload;
    },
    clearBookings: (state) => {
      state.list = [];
    },
    loginId:(state,action)=>{
      state.list.push(action.payload)
    }
  },
});
export const { addBooking,loginId, setBookings, clearBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
