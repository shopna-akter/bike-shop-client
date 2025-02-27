import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface OrderState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orders: any[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
  const response = await axios.get('https://bike-shop-server-jade.vercel.app/api/orders');
  return response.data;
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default orderSlice.reducer;
