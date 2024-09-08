import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import productsReducer from "./SmartPhone/smartphone.slice";
import cartReducer from "./cart/cartslice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// @ts-ignore
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
