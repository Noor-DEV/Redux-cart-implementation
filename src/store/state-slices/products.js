import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    title: "Puma Shoes",
    price: 300,
    description:
      "Neymar's Puma shoes, Super light and comfy you can't feel them weight",
  },
  {
    id: 2,
    title: "Adidas Copa Sense",
    price: 150,
    description: "Worth your money, laceless and good protection for your feet",
  },
  {
    id: 3,
    title: "16' Macbook Pro M1 Max",
    price: 3500,
    description: "The latest and greatest",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_PRODUCTS,
  reducers: {},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
