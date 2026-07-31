import Image from 'next/image';
import { CartIcon } from './CartIcon';
import { Bar, Inner, LogoLink } from './Header.styles';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCartCount } from '@/store/selectors';
import { openCart } from '@/store/slices/cartSlice';

export function Header() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCartCount);

  return (
    <Bar>
      <Inner as="nav" aria-label="Navegação principal">
        <LogoLink href="/" aria-label="Starsoft - ir para a página inicial">
          <Image src="/assets/logo.svg" alt="Starsoft" width={101} height={38} priority />
        </LogoLink>
        <CartIcon count={count} onClick={() => dispatch(openCart())} />
      </Inner>
    </Bar>
  );
}
