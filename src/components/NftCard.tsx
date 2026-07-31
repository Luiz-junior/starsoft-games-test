import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { EthPrice } from './EthPrice';
import { Body, Card, Description, Thumb, Title } from './NftCard.styles';
import type { Product } from '@/types';
import { parsePrice } from '@/utils/format';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addItem, selectAddedToCartIds } from '@/store/slices/cartSlice';

interface NftCardProps {
  product: Product;
  priority?: boolean;
}

export function NftCard({ product, priority = false }: NftCardProps) {
  const dispatch = useAppDispatch();
  const addedToCartIds = useAppSelector(selectAddedToCartIds);
  const price = parsePrice(product.price);

  const handleButtonClick = () => {
    handleAddToCart();
  };

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price,
      }),
    );
  };

  return (
    <Card
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <Link href={`/nft/${product.id}`} aria-label={`Ver detalhes de ${product.name}`}>
        <Thumb>
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              priority={priority}
              sizes="(max-width: 768px) 50vw, 300px"
              width={289}
              height={258}
            />
          )}
        </Thumb>
      </Link>
      <Body>
        <Link href={`/nft/${product.id}`}>
          <Title>{product.name}</Title>
        </Link>
        <Description>{product.description}</Description>
        <EthPrice value={price} />
        <Button
          type="button"
          $full
          onClick={handleButtonClick}
          whileTap={{ scale: 0.97 }}
          aria-label={`Comprar ${product.name}`}
        >
          {addedToCartIds.includes(product.id) ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
        </Button>
      </Body>
    </Card>
  );
}
