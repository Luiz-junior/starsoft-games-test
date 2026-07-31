import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { hydrateCart } from '@/store/slices/cartSlice';
import { selectCartItems } from '@/store/selectors';
import type { CartItem } from '@/types';

const STORAGE_KEY = '@starsoft:cart';

/** Keeps the Redux cart in sync with localStorage across reloads. */
export function useCartPersistence() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) dispatch(hydrateCart(JSON.parse(stored) as CartItem[]));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);
}
