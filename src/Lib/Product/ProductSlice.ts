import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../axois";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface CartState {
  products: Product[]; // Adjust type based on your product structure
  searchResults: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  products: [],
  searchResults: [],
  loading: false,
  error: null,
};

// Create an async thunk for searching products
export const searchProducts = createAsyncThunk(
  "cart/searchProducts",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products/search?q=${query}`);
      return response.data.products;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
        // In the Redux slice
        console.log("Fetched products:", action.payload);
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default SearchSlice.reducer;
