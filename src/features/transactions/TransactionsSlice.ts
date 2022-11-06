import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import Transaction from "@Types/Transaction.interface";

type TransactionsInitialState = {
	value: Transaction[];
};

const initialState: TransactionsInitialState = {
	value: [],
};

export const transactionsSlice = createSlice({
	name: "transactions",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Transaction>) => {
			state.value.push(action.payload);
		},
		remove: (state, action: PayloadAction<number>) => {
			state.value.splice(action.payload, 1);
		},
	},
});

export const { add, remove } = transactionsSlice.actions;

export default transactionsSlice.reducer;
