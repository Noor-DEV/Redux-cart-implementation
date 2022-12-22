import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./state-slices/cart";
import productsReducer from "./state-slices/products";
import uiReducer from "./state-slices/ui-slice";

const store = configureStore({
  reducer: { cart: cartReducer, products: productsReducer, ui: uiReducer },
});

export default store;
