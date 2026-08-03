import { screen } from '@testing-library/react';
import { NftGrid } from '@/components/NftGrid';
import { renderWithProviders } from '@/test/test-utils';
import type { Product } from '@/types';

const products: Product[] = [
  { id: 1, name: 'Backpack', description: 'Mochila resistente.', price: '182.00000000' },
  { id: 2, name: 'Sword', description: 'Espada lendária.', price: 10 },
];

describe('NftGrid', () => {
  it('renders one card per product', () => {
    renderWithProviders(<NftGrid products={products} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Backpack')).toBeInTheDocument();
    expect(screen.getByText('Sword')).toBeInTheDocument();
  });

  it('renders an empty list when there are no products', () => {
    renderWithProviders(<NftGrid products={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
