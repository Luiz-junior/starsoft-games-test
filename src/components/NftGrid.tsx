import { NftCard } from './NftCard';
import { List } from './NftGrid.styles';
import type { Product } from '@/types';

export function NftGrid({ products }: { products: Product[] }) {
  return (
    <List>
      {products.map((product, index) => (
        <li key={product.id}>
          <NftCard product={product} priority={index < 4} />
        </li>
      ))}
    </List>
  );
}
