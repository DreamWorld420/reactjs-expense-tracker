import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import balanceReducer from "@Features/balance/balanceSlice";
import transactionsReducer from "@Features/transactions/TransactionsSlice";

const combinedReducers = combineReducers({
	balance: balanceReducer,
	transactions: transactionsReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducers = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
	reducer: persistedReducers,
	middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
