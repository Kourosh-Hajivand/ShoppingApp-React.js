import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    AddOrder: (state, action) => {
      state.value.push(action.payload);
    },
    DeletOrder: (state, action) => {
      let index = state.value.findIndex((item) => {
        return item._id === action.payload;
      });
      state.value.splice(index, 1);
    },
    FinalOrder: (state) => {
      state.value = [];
    },
  },
});
export const { AddOrder, DeletOrder, FinalOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
