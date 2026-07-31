import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '@/types';
import { RootState } from '..';

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addedToCartIds: number[];
}

const initialState: CartState = { items: [], isOpen: false, addedToCartIds: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
        return;
      }
      state.items.push({ ...action.payload, quantity: 1 });
      if (!state.addedToCartIds.includes(action.payload.id)) {
        state.addedToCartIds.push(action.payload.id);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementItem(state, action: PayloadAction<number>) {
      const item = state.items.find((current) => current.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementItem(state, action: PayloadAction<number>) {
      const item = state.items.find((current) => current.id === action.payload);
      if (!item) return;
      if (item.quantity <= 1) {
        state.items = state.items.filter((current) => current.id !== action.payload);
        return;
      }
      item.quantity -= 1;
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    hydrateCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    clearAddedToCart(state) {
      state.addedToCartIds = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
  openCart,
  closeCart,
  hydrateCart,
  clearAddedToCart,
} = cartSlice.actions;

export const selectAddedToCartIds = (state: RootState) => state.cart.addedToCartIds;

export default cartSlice.reducer;
