import { configureStore } from "@reduxjs/toolkit";
import OrderSlicer from "./OrderSlicer";
import ProductSlicer from "./ProductSlicer";

export const store = configureStore({
  reducer: {
    Products: ProductSlicer,
    Order: OrderSlicer,
  },
});
