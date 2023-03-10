// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventList: [] as Array<string>,
    btnCount: 0,
  },
  reducers: {
    pushEvent: (state, action) => {
      state.eventList.push(action.payload);
    },
    addButton: (state) => {
      state.btnCount = state.btnCount + 1;
    },
  },
});

export const { pushEvent, addButton } = eventSlice.actions;

export default eventSlice.reducer;
