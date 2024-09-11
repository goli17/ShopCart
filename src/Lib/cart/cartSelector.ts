import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/Lib/store"; // Adjust the import according to your store setup

export const getCartState = (state: RootState) => state.cart;

// Selector to get cart items
export const getCartItemsSelector = createSelector(
  [getCartState],
  (cartState) => cartState.items
);

// Selector to get the amount from the cart state
export const getCartAmountSelector = createSelector(
  [getCartState],
  (cartState) => cartState.amount
);

// Selector to get the order_id from the cart state
export const getCartOrderIdSelector = createSelector(
  [getCartState],
  (cartState) => cartState.order_id
);

// Optional: Memoized selector to find a specific item by ID
export const selectCartItemById = (id: number) =>
  createSelector([getCartItemsSelector], (items) =>
    items.find((item) => item.id === id)
  );
