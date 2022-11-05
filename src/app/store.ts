import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "features/balance/balanceSlice";
import transactionsReducer from "features/transactions/TransactionsSlice";

export const store = configureStore({
	reducer: {
		balance: balanceReducer,
		transactions: transactionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
