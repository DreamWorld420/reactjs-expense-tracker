import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const balanceSlice = createSlice({
	name: "balance",
	initialState,
	reducers: {
		deposit: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		withdraw: (state, action: PayloadAction<number>) => {
			state.value -= action.payload;
		},
	},
});

export const { deposit, withdraw } = balanceSlice.actions;

export default balanceSlice.reducer;
