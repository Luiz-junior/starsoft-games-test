import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '@/components/Header';
import { makeStore } from '@/store';
import { addItem } from '@/store/slices/cartSlice';
import { renderWithProviders } from '@/test/test-utils';

describe('Header', () => {
  it('renders the Starsoft logo linking to the home page', () => {
    renderWithProviders(<Header />);
    const link = screen.getByRole('link', { name: /starsoft/i });
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByAltText('Starsoft')).toBeInTheDocument();
  });

  it('shows the total quantity of items in the cart badge', () => {
    const store = makeStore();
    store.dispatch(addItem({ id: 1, name: 'Backpack', price: 182 }));
    store.dispatch(addItem({ id: 1, name: 'Backpack', price: 182 }));
    store.dispatch(addItem({ id: 2, name: 'Sword', price: 10 }));

    renderWithProviders(<Header />, { store });
    expect(
      screen.getByRole('button', { name: /abrir carrinho, 3 item/i }),
    ).toBeInTheDocument();
  });

  it('opens the cart when clicking the cart button', async () => {
    const { store } = renderWithProviders(<Header />);
    await userEvent.click(screen.getByRole('button', { name: /abrir carrinho/i }));
    expect(store.getState().cart.isOpen).toBe(true);
  });
});
