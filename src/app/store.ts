import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "@Features/balance/balanceSlice";
import transactionsReducer from "@Features/transactions/TransactionsSlice";

export const store = configureStore({
	reducer: {
		balance: balanceReducer,
		transactions: transactionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
