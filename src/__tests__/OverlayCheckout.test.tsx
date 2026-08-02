import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OverlayCheckout } from '@/components/OverlayCheckout';
import { makeStore } from '@/store';
import { addItem, openCart } from '@/store/slices/cartSlice';
import { renderWithProviders } from '@/test/test-utils';

function buildStore() {
  const store = makeStore();
  store.dispatch(
    addItem({
      id: 1,
      name: 'Backpack',
      image: 'https://softstar.s3.amazonaws.com/items/backpack.png',
      price: 182,
    }),
  );
  store.dispatch(openCart());
  return store;
}

describe('OverlayCheckout', () => {
  it('lists cart items and the total', () => {
    renderWithProviders(<OverlayCheckout />, { store: buildStore() });
    expect(screen.getByRole('dialog', { name: /mochila/i })).toBeInTheDocument();
    expect(screen.getByText('Backpack')).toBeInTheDocument();
    expect(screen.getAllByText(/ETH/).length).toBeGreaterThan(0);
  });

  it('increments quantity from the stepper', async () => {
    const store = buildStore();
    renderWithProviders(<OverlayCheckout />, { store });
    await userEvent.click(screen.getByRole('button', { name: /aumentar quantidade/i }));
    expect(store.getState().cart.items[0].quantity).toBe(2);
  });

  it('removes the item from the cart', async () => {
    const store = buildStore();
    renderWithProviders(<OverlayCheckout />, { store });
    await userEvent.click(screen.getByRole('button', { name: /remover backpack/i }));
    expect(store.getState().cart.items).toHaveLength(0);
  });
});
