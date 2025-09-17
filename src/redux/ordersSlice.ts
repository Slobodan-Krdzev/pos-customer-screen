import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { DataPayload } from "../types/Types";

interface OrdersState {
  payload: DataPayload | null;
}

const initialState: OrdersState = {
  payload: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setPayload: (state, action: PayloadAction<DataPayload>) => {
      console.log("Setting DataPayload in Redux slice:", action.payload);
      state.payload = action.payload;
    },
    clearPayload: (state) => {
      state.payload = null;
    },
  },
});

export const { setPayload, clearPayload } = ordersSlice.actions;
export default ordersSlice.reducer;
