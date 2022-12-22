import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_STATE = {
  items: [],
  totalItems: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART_STATE,
  reducers: {
    loadInitialData(state, action) {
      state.items = action.payload.items || [];
      state.totalItems = action.payload.totalItems;
    },
    addItem(state, action) {
      state.changed = true;
      const payloadItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === payloadItem.id
      );
      state.totalItems++;
      if (!existingItem) {
        state.items.push({
          id: payloadItem.id,
          title: payloadItem.title,
          price: payloadItem.price,
          quantity: payloadItem.quantity,
          totalPrice: payloadItem.price,
          description: payloadItem.description,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + payloadItem.price;
      }
    },
    removeItem(state, action) {
      state.changed = true;
      const theItem = state.items.find((item) => item.id === action.payload.id);
      state.totalItems--;
      if (theItem.quantity > 1) {
        theItem.quantity--;
        theItem.totalPrice -= theItem.price;
      } else {
        // const itemIndex = state.items.findIndex(
        //   (item) => item.id === action.payload.id
        // );
        // state.items.splice(itemIndex, 1);
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

// cart items
// cart Item = { title, quantity,price_per_item, totalPrice}
