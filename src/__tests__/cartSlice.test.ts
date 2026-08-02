import reducer, {
  addItem,
  decrementItem,
  incrementItem,
  removeItem,
  clearCart,
  type CartState,
} from '@/store/slices/cartSlice';

const item = { id: 1, name: 'Backpack', image: '/backpack.png', price: 182 };
const initial: CartState = { items: [], isOpen: false, addedToCartIds: [] };

describe('cartSlice', () => {
  it('adds a new item with quantity 1', () => {
    const state = reducer(initial, addItem(item));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1);
  });

  it('increments quantity when the same item is added twice', () => {
    const state = reducer(reducer(initial, addItem(item)), addItem(item));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it('increments and decrements quantity', () => {
    let state = reducer(initial, addItem(item));
    state = reducer(state, incrementItem(1));
    expect(state.items[0].quantity).toBe(2);
    state = reducer(state, decrementItem(1));
    expect(state.items[0].quantity).toBe(1);
  });

  it('removes the item when decrementing below 1', () => {
    const state = reducer(reducer(initial, addItem(item)), decrementItem(1));
    expect(state.items).toHaveLength(0);
  });

  it('removes an item and clears the cart', () => {
    const withItem = reducer(initial, addItem(item));
    expect(reducer(withItem, removeItem(1)).items).toHaveLength(0);
    expect(reducer(withItem, clearCart()).items).toHaveLength(0);
  });
});
