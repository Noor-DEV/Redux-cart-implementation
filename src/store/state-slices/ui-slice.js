import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cart";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsShown: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
