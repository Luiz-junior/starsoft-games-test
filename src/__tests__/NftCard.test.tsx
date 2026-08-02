import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NftCard } from '@/components/NftCard';
import { renderWithProviders } from '@/test/test-utils';
import type { Product } from '@/types';

const product: Product = {
  id: 1,
  name: 'Backpack',
  description: 'Uma mochila resistente com compartimentos secretos.',
  image: 'https://softstar.s3.amazonaws.com/items/backpack.png',
  price: '182.00000000',
  createdAt: '2024-07-18T23:55:43.238Z',
};

describe('NftCard', () => {
  it('renders name, description and price', () => {
    renderWithProviders(<NftCard product={product} />);
    expect(screen.getByText('Backpack')).toBeInTheDocument();
    expect(screen.getByText(/mochila resistente/i)).toBeInTheDocument();
    expect(screen.getByText(/ETH/)).toBeInTheDocument();
  });

  it('adds the product to the Redux cart when clicking COMPRAR', async () => {
    const { store } = renderWithProviders(<NftCard product={product} />);

    const button = screen.getByRole('button', { name: /comprar backpack/i });
    await userEvent.click(button);

    const { items } = store.getState().cart;

    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      id: 1,
      quantity: 1,
      price: 182,
      name: 'Backpack',
    });

    expect(button).toHaveTextContent('ADICIONADO AO CARRINHO');
  });
});
