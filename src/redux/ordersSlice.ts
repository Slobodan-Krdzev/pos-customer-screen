import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Order {
  Id: number;
  Name: string;
  Quantity: number;
  Price: number;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { setOrders, addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
