import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  quantity: number;
  id: number;
  title: string;
  description: any;
  price: number;
  image: any;
}

interface CartState {
  items: CartItem[];
  amount: number;
  order_id: string;
}

const initialState: CartState = {
  items: [],
  amount: 0,
  order_id: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.order_id = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  setAmount,
  setOrderId,
} = cartSlice.actions;
export default cartSlice.reducer;
