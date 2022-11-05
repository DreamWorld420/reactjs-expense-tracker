import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "types";

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
