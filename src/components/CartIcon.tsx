import Image from 'next/image';
import { Badge, Wrapper } from './CartIcon.styles';

interface CartIconProps {
  count: number;
  onClick: () => void;
}

export function CartIcon({ count, onClick }: CartIconProps) {
  return (
    <Wrapper
      type="button"
      onClick={onClick}
      aria-label={`Abrir carrinho, ${count} item(s)`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src="/assets/bag.svg" alt="cart" width={33} height={33} priority />
      <Badge>{count}</Badge>
    </Wrapper>
  );
}
