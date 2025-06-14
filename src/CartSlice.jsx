import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, { payload }) => {
		let plant = state.items.find(item => item.name === payload.name);
		if (plant) {
			plant.quantity++;
		} else {
			state.items.push({
				...payload,
				quantity: 1,
			});
		}
    },
    removeItem: (state, { payload }) => {
		state.items = state.items.filter(item => item.name !== payload);
    },
    updateQuantity: (state, { payload }) => {
		let plant = state.items.find(item => item.name === payload.name);
		if (plant) {
			plant.quantity = payload.quantity;
		} else {
			state.items.push(payload);
		}
	},
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
