import { configureStore } from "@reduxjs/toolkit";
import MathOpsReducer from "../features/mathops/MathOpsSlice";

//multiple reducers can be added to the store
export const store = configureStore({
  reducer: {
    mathops: MathOpsReducer,
  },
});
