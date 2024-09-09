// cart.selector.ts
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/Lib/store"; // Adjust the import according to your store setup

export const getCartItemsSelector = (state: RootState) => state.cart.items;

// Optional: If you want to create a memoized selector to find a specific item
export const selectCartItemById = (id: number) =>
  createSelector([getCartItemsSelector], (items) =>
    items.find((item) => item.id === id)
  );
