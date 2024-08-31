import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProduct, getProductById } from "./smartphone.actions";

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

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
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
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

export type ProductsState = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const initialState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 30,
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [] as Product[],
    productLoading: false,
  } as unknown as ProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.products = action.payload.products;
      }
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      if (action.payload) {
        state.products = action.payload.products;
      }
    });
  },
});

export default productsSlice.reducer;
