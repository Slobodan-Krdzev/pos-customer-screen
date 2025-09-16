import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '../types/Types';


interface OrdersState {
  orders: ProductType[];
}

const initialState: OrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<ProductType[]>) => {


      console.log('Setting orders in Redux slice:', action.payload);
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<ProductType>) => {
      state.orders.push(action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { setOrders, addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
