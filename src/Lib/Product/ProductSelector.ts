import { RootState } from "../store"; // Adjust the import path based on your project structure

// Selector to get search results
export const selectSearchResults = (state: RootState) =>
  state.search.searchResults;

// Selector to get the loading state
export const selectSearchLoading = (state: RootState) => state.search.loading;

// Selector to get the error state
export const selectSearchError = (state: RootState) => state.search.error;
