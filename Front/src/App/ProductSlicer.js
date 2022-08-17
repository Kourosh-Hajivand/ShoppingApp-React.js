import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
const ProductSlicer = createSlice({
  name: "Products",
  initialState,
  reducers: {
    AddProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { AddProducts } = ProductSlicer.actions;
export default ProductSlicer.reducer;
