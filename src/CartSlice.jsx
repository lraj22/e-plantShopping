import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}, // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, { payload }) => {
		if (payload in state.items) {
			state.items[payload]++;
		} else {
			state.items[payload] = 1;
		}
    },
    removeItem: (state, { payload }) => {
		if (payload in state.items) {
			state.items[payload]--;
		}
    },
    updateQuantity: (state, { payload }) => {
		state.items[payload.name] = payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
